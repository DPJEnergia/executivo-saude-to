/* store.js — estado, persistência local, plano adaptativo e revisão espaçada.
 *
 * Modelo de conteúdo:
 *   - a estrutura da prova vem do edital (js/edital.js), por nível e cargo;
 *   - cada questão declara `disciplinaId` oficial, um `assunto` em texto livre e
 *     `palavras` usadas para casá-la com os tópicos do edital.
 *
 * Persistência: localStorage por usuário, isolada em `persist()` / `loadUserData()`
 * para que a troca por uma API remota atinja apenas estas funções (ver `api`).
 */

import {
  QUESTOES, RESUMOS, FLASHCARDS, MEDALHAS,
  INTERVALOS_REVISAO, DEMO, NIVEIS, BANCO_VERSAO, EDITAL
} from './data.js';
import { disciplinasDoNivel, composicaoProva, CARGOS } from './edital.js';
import { topicosDoCargo } from './edital-especificos.js';

const LS_USERS = 'execsaude:users';
const LS_SESSION = 'execsaude:session';
const LS_DATA = 'execsaude:data:';
const LS_BANCO = 'execsaude:banco';
const LS_APP = 'execsaude:app';

/* ---------------- utilidades de data ---------------- */

export const hoje = () => iso(new Date());

export function iso(d) {
  const x = new Date(d);
  return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`;
}

export function parseISO(s) {
  const [y, m, d] = String(s).split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function addDias(s, n) {
  const d = parseISO(s);
  d.setDate(d.getDate() + n);
  return iso(d);
}

export function diffDias(a, b) {
  return Math.round((parseISO(b) - parseISO(a)) / 86400000);
}

export function dow(s) { return parseISO(s).getDay(); }

export const DOW_NOMES = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
export const DOW_CURTO = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
export const MES_NOMES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

export function dataExtenso(s) {
  const d = parseISO(s);
  return `${d.getDate()} de ${MES_NOMES[d.getMonth()]} de ${d.getFullYear()}`;
}

export function inicioSemana(s) {
  const d = parseISO(s);
  d.setDate(d.getDate() - d.getDay());
  return iso(d);
}

export function hhmm(seg) {
  const m = Math.floor(seg / 60), s = Math.floor(seg % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function uid(p = 'id') {
  return `${p}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

/* ---------------- estado ---------------- */

export const state = {
  user: null,   // { id, nome, email, perfilTipo }
  data: null,   // dados do usuário logado
  banco: null   // { versao, questoes, resumos, flashcards, topicosExtras }
};

export { EDITAL };

/** Ritmo da prova: 240 minutos para 60 questões. */
export const SEG_POR_QUESTAO = Math.round((EDITAL.duracaoMinutos * 60) / EDITAL.totalQuestoes);

function vazio(perfil) {
  return {
    versao: 3,
    onboarding: false,
    perfil: perfil || {
      nome: '', nivel: 'superior', cargo: 'Executivo em Saúde', dataProva: EDITAL.dataProva,
      horasDia: 3, diasSemana: [1, 2, 3, 4, 5], metaAcerto: 70,
      dificuldades: '', fortes: '', niveis: {}
    },
    plano: [],
    respostas: [],
    erros: [],
    simulados: [],
    anotacoes: {},
    favoritos: [],
    flashcards: {},
    gamif: { streak: 0, ultimoDia: null, dias: [] },
    config: { tema: 'auto', fonte: 'm', pomodoroFoco: 25, pomodoroPausa: 5, notificacoes: false },
    edital: { texto: '', atualizadoEm: null }
  };
}

/* ---------------- banco (conteúdo) ---------------- */

export function loadBanco() {
  try {
    const raw = localStorage.getItem(LS_BANCO);
    if (raw) {
      const b = JSON.parse(raw);
      if (b && Array.isArray(b.questoes)) {
        state.banco = b;
        if ((b.versao || 1) < BANCO_VERSAO) migrarBanco();
        return state.banco;
      }
    }
  } catch (e) { console.warn('banco corrompido, recriando', e); }
  state.banco = bancoNovo();
  persistBanco();
  return state.banco;
}

function bancoNovo() {
  return {
    versao: BANCO_VERSAO,
    questoes: structuredClone(QUESTOES),
    resumos: structuredClone(RESUMOS),
    flashcards: structuredClone(FLASHCARDS),
    topicosExtras: []       // tópicos criados pelo administrador
  };
}

/**
 * Migração de banco salvo. A versão 3 reestruturou o conteúdo para o edital
 * oficial: as questões antigas (5 alternativas, disciplinas próprias) são
 * substituídas, preservando-se apenas o que o administrador cadastrou.
 */
function migrarBanco() {
  const b = state.banco;
  const proprias = (b.questoes || []).filter(q => q.origem === 'admin');
  const novo = bancoNovo();
  novo.questoes.push(...proprias);
  novo.topicosExtras = b.topicosExtras || [];
  state.banco = novo;
  persistBanco();
}

export function persistBanco() {
  try { localStorage.setItem(LS_BANCO, JSON.stringify(state.banco)); }
  catch (e) { console.warn('falha ao gravar banco', e); }
}

export const questoes = () => state.banco.questoes;
export const resumos = () => state.banco.resumos;
export const flashcards = () => state.banco.flashcards;
export function questao(id) { return questoes().find(q => q.id === id); }

/* ---------------- disciplinas e tópicos (do edital) ---------------- */

/** Este app atende só o cargo Executivo em Saúde, de nível superior. */
export function nivelAtual() {
  return 'superior';
}

export function cargoAtual() {
  return CARGOS[0];
}

/** Disciplinas da prova do aluno: Módulo I + Legislação + Específicos do cargo. */
export function disciplinas() {
  const nivel = nivelAtual();
  const base = disciplinasDoNivel(nivel).map(d => ({ ...d, topicos: [...d.topicos] }));
  const c = cargoAtual();
  const espec = {
    id: 'espec',
    nome: 'Conhecimentos Específicos' + (c ? ` — ${c.nome}` : ''),
    cor: '#B8420B',
    modulo: 2,
    questoes: EDITAL.niveis[nivel].questoesEspecificos,
    topicos: c ? topicosDoCargo(c.programa) : []
  };
  const extras = state.banco?.topicosExtras || [];
  const todas = [...base, espec];
  for (const t of extras) {
    const d = todas.find(x => x.id === t.disciplinaId);
    if (d && !d.topicos.some(x => x.id === t.id)) d.topicos.push(t);
  }
  return todas;
}

export function disciplina(id) { return disciplinas().find(d => d.id === id); }
export function nomeDisciplina(id) { return disciplina(id)?.nome || rotuloDisciplina(id); }
export function corDisciplina(id) { return disciplina(id)?.cor || ROTULOS[id]?.cor || '#0B4F8A'; }

const ROTULOS = {
  port: { nome: 'Língua Portuguesa', cor: '#1A73C7' },
  mat: { nome: 'Matemática e Raciocínio Lógico', cor: '#7A45C7' },
  info: { nome: 'Informática Básica', cor: '#0E8F9B' },
  to: { nome: 'História e Geografia do Tocantins', cor: '#C7457F' },
  leg: { nome: 'Legislação (SUS)', cor: '#1E9E6A' },
  espec: { nome: 'Conhecimentos Específicos', cor: '#B8420B' }
};
export function rotuloDisciplina(id) { return ROTULOS[id]?.nome || id; }

export function topico(id) {
  for (const d of disciplinas()) {
    const t = d.topicos.find(t => t.id === id);
    if (t) return { ...t, disciplinaId: d.id };
  }
  return null;
}
export function nomeTopico(id) { return topico(id)?.nome || '—'; }

/** Módulo (I ou II) da disciplina, conforme o nível do aluno. */
export function moduloDe(disciplinaId) {
  return disciplina(disciplinaId)?.modulo || (disciplinaId === 'espec' ? 2 : 1);
}

/* ---------------- casamento questão × tópico ---------------- */

const semAcento = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

/* Termos genéricos demais para identificar um assunto: aparecem em quase todo
   item do edital e, se contassem, casariam qualquer questão com qualquer tópico. */
const GENERICOS = new Set([
  'saude', 'enfermagem', 'assistencia', 'atencao', 'politica', 'nacional', 'programa',
  'programas', 'servico', 'servicos', 'paciente', 'pacientes', 'pessoas', 'pessoa',
  'noções', 'nocoes', 'basicos', 'basicas', 'geral', 'gerais', 'aplicada', 'aplicado',
  'publica', 'publico', 'sistema', 'sistemas', 'controle', 'realizacao', 'tecnico',
  'conhecimentos', 'especificos', 'unidade', 'clinica', 'brasileiro', 'considerando'
]);

function termos(s) {
  // junta os pontos de milhar dos números de lei ("8.080" -> "8080") antes de separar
  return semAcento(s).replace(/(\d)[.](\d)/g, '$1$2')
    .split(/[^a-z0-9]+/)
    .filter(w => w.length > 3 || /^\d{3,}$/.test(w));
}

/** Pontuação de aderência entre uma questão e um tópico do edital. */
export function aderencia(q, t) {
  if (!t) return 0;
  // vínculo explícito tem precedência sobre o casamento por palavras
  if (Array.isArray(q.topicos) && q.topicos.length) return q.topicos.includes(t.id) ? 10 : 0;
  const alvo = new Set(termos(t.nome).filter(w => !GENERICOS.has(w)));
  if (!alvo.size) return 0;
  let score = 0;
  for (const p of (q.palavras || [])) {
    const ts = termos(p).filter(w => !GENERICOS.has(w));
    if (!ts.length) continue;
    if (ts.every(w => alvo.has(w))) score += 3;          // expressão inteira presente
    else if (ts.some(w => alvo.has(w))) score += 1;      // parte da expressão
  }
  for (const w of termos(q.assunto || '')) if (!GENERICOS.has(w) && alvo.has(w)) score += 1;
  return score;
}

/** Questões do tópico, ordenadas por aderência; cai para a disciplina inteira. */
export function questoesDoTopico(t, { minimo = 1 } = {}) {
  if (!t) return [];
  const daDisc = questoes().filter(q => q.disciplinaId === t.disciplinaId && !q.foraEdital);
  const comScore = daDisc.map(q => ({ q, s: aderencia(q, t) })).filter(x => x.s >= 3)
    .sort((a, b) => b.s - a.s).map(x => x.q);
  return comScore.length >= minimo ? comScore : daDisc;
}

/* ---------------- contas ---------------- */

function readUsers() {
  try { return JSON.parse(localStorage.getItem(LS_USERS) || '[]'); }
  catch { return []; }
}
function writeUsers(u) { localStorage.setItem(LS_USERS, JSON.stringify(u)); }

/* Hash local apenas para não gravar a senha em texto puro no dispositivo.
   Autenticação real deve ocorrer no servidor — ver `api.login`. */
async function hash(txt) {
  if (!crypto?.subtle) return `plain:${txt}`;
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`execsaude|${txt}`));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function registrar({ nome, email, senha, perfilTipo = 'aluno' }) {
  const users = readUsers();
  const mail = String(email).trim().toLowerCase();
  if (users.some(u => u.email === mail)) throw new Error('Já existe uma conta com este e-mail.');
  const user = { id: uid('u'), nome: nome.trim(), email: mail, perfilTipo, senha: await hash(senha), criadoEm: new Date().toISOString() };
  users.push(user);
  writeUsers(users);
  localStorage.setItem(LS_DATA + user.id, JSON.stringify(vazio({ ...vazio().perfil, nome: user.nome })));
  return login(mail, senha);
}

export async function login(email, senha) {
  const users = readUsers();
  const mail = String(email).trim().toLowerCase();
  const u = users.find(x => x.email === mail);
  if (!u) throw new Error('Conta não encontrada.');
  if (u.senha !== await hash(senha)) throw new Error('Senha incorreta.');
  localStorage.setItem(LS_SESSION, u.id);
  state.user = { id: u.id, nome: u.nome, email: u.email, perfilTipo: u.perfilTipo };
  loadUserData();
  return state.user;
}

export function logout() {
  localStorage.removeItem(LS_SESSION);
  state.user = null;
  state.data = null;
}

export function restaurarSessao() {
  const id = localStorage.getItem(LS_SESSION);
  if (!id) return null;
  const u = readUsers().find(x => x.id === id);
  if (!u) { localStorage.removeItem(LS_SESSION); return null; }
  state.user = { id: u.id, nome: u.nome, email: u.email, perfilTipo: u.perfilTipo };
  loadUserData();
  return state.user;
}

export function contasExistem() { return readUsers().length > 0; }

function loadUserData() {
  try {
    const raw = localStorage.getItem(LS_DATA + state.user.id);
    state.data = raw ? JSON.parse(raw) : vazio();
  } catch { state.data = vazio(); }
  const base = vazio();
  for (const k of Object.keys(base)) if (state.data[k] === undefined) state.data[k] = base[k];
  for (const k of Object.keys(base.config)) if (state.data.config[k] === undefined) state.data.config[k] = base.config[k];
  // dados anteriores ao edital: o plano e o perfil precisam ser refeitos
  if ((state.data.versao || 1) < 3) {
    state.data.versao = 3;
    state.data.perfil.nivel = state.data.perfil.nivel || 'superior';
    state.data.perfil.dataProva = EDITAL.dataProva;
    state.data.plano = [];
    delete state.data.perfil.disciplinasAtivas;
  }
}

export function persist() {
  if (!state.user || !state.data) return;
  try { localStorage.setItem(LS_DATA + state.user.id, JSON.stringify(state.data)); }
  catch (e) { console.warn('falha ao gravar dados', e); }
}

export function apagarConta() {
  if (!state.user) return;
  localStorage.removeItem(LS_DATA + state.user.id);
  writeUsers(readUsers().filter(u => u.id !== state.user.id));
  logout();
}

/* ---------------- prioridades e plano ---------------- */

const MIN_BLOCO = 25;

function pesoNivel(dId) {
  const nivel = NIVEIS.find(n => n.id === (state.data.perfil.niveis?.[dId] || 'intermediario')) || NIVEIS[1];
  return nivel.peso;
}

/** Peso da disciplina na prova: questões × pontos do módulo. */
export function pesoProva(d) {
  return d.questoes * (d.modulo === 2 ? EDITAL.pontos.modulo2 : EDITAL.pontos.modulo1);
}

export function desempenhoAssuntos() {
  const m = {};
  for (const r of state.data.respostas) {
    const q = questao(r.qid); if (!q) continue;
    const k = q.assunto || rotuloDisciplina(q.disciplinaId);
    m[k] = m[k] || { total: 0, acertos: 0, disciplinaId: q.disciplinaId };
    m[k].total++;
    if (r.correta) m[k].acertos++;
  }
  for (const k of Object.keys(m)) m[k].taxa = m[k].total ? m[k].acertos / m[k].total : null;
  return m;
}

/** Fila de tópicos do edital ordenada por prioridade de estudo. */
export function filaTopicos() {
  const desemp = desempenhoAssuntos();
  const itens = [];
  for (const d of disciplinas()) {
    const pd = pesoProva(d) * pesoNivel(d.id);
    const nTop = Math.max(1, d.topicos.length);
    for (const t of d.topicos) {
      const qs = questoesDoTopico({ ...t, disciplinaId: d.id }, { minimo: 1 });
      const assuntos = [...new Set(qs.map(q => q.assunto))];
      const stats = assuntos.map(a => desemp[a]).filter(Boolean);
      const taxa = stats.length ? stats.reduce((a, s) => a + s.taxa * s.total, 0) / stats.reduce((a, s) => a + s.total, 0) : null;
      const respondidas = stats.reduce((a, s) => a + s.total, 0);
      const mult = respondidas >= 3 ? 1 + (1 - taxa) * 0.9 : 1.25;
      itens.push({
        topicoId: t.id, disciplinaId: d.id, nome: t.nome,
        prioridade: (pd / nTop) * mult,
        taxa, respondidas, questoes: qs.length
      });
    }
  }
  return itens.sort((a, b) => b.prioridade - a.prioridade);
}

function diasDisponiveis(de, ate, diasSemana) {
  const out = [];
  let d = de, guard = 0;
  while (diffDias(d, ate) >= 0 && guard++ < 1500) {
    if (diasSemana.includes(dow(d))) out.push(d);
    d = addDias(d, 1);
  }
  return out;
}

/**
 * Gera o plano do zero, de hoje até a véspera da prova.
 * Ciclo diário: teoria → questões → revisão; simulado semanal e simulado
 * completo a cada quatro semanas (e a cada duas na reta final).
 */
export function gerarPlano({ preservarConcluidas = true } = {}) {
  const perfil = state.data.perfil;
  const inicio = hoje();
  const fim = perfil.dataProva && diffDias(inicio, perfil.dataProva) > 0
    ? addDias(perfil.dataProva, -1) : addDias(inicio, 60);
  const dias = diasDisponiveis(inicio, fim, perfil.diasSemana?.length ? perfil.diasSemana : [1, 2, 3, 4, 5]);
  const capacidade = Math.max(30, Math.round((perfil.horasDia || 2) * 60));
  const fila = filaTopicos();
  const concluidas = preservarConcluidas ? state.data.plano.filter(t => t.done) : [];
  const revisoes = state.data.plano.filter(t => t.tipo === 'revisao' && !t.done && diffDias(inicio, t.data) >= 0);

  const novo = [...concluidas];
  let fi = 0, semanaAtual = null, semanas = 0;

  dias.forEach((dia, idx) => {
    const sem = inicioSemana(dia);
    if (sem !== semanaAtual) { semanaAtual = sem; semanas++; }
    const ultimoDaSemana = idx === dias.length - 1 || inicioSemana(dias[idx + 1]) !== sem;
    let restante = capacidade;

    for (const r of revisoes.filter(r => r.data === dia)) { novo.push(r); restante -= r.minutos; }

    const faltam = diffDias(dia, perfil.dataProva || fim);
    if (ultimoDaSemana && restante >= 45) {
      const completo = semanas % 4 === 0 || (faltam <= 21 && semanas % 2 === 0);
      const min = completo ? Math.min(restante, EDITAL.duracaoMinutos) : Math.min(restante, 60);
      novo.push(tarefa({
        data: dia, tipo: 'simulado', minutos: min,
        titulo: completo ? `Simulado completo — ${EDITAL.totalQuestoes} questões` : 'Simulado semanal',
        sub: completo ? `Tempo de prova: ${Math.round(EDITAL.duracaoMinutos / 60)} horas` : '20 questões · foco nos pontos fracos',
        meta: { qtd: completo ? EDITAL.totalQuestoes : 20, completo }
      }));
      restante -= min;
    }

    while (restante >= MIN_BLOCO && fila.length) {
      const t = fila[fi % fila.length]; fi++;
      const blocoTeoria = Math.min(restante, 30);
      novo.push(tarefa({
        data: dia, tipo: 'teoria', minutos: blocoTeoria,
        disciplinaId: t.disciplinaId, topicoId: t.topicoId,
        titulo: t.nome, sub: `${nomeDisciplina(t.disciplinaId)} · teoria objetiva`
      }));
      restante -= blocoTeoria;
      if (restante >= MIN_BLOCO) {
        const blocoQ = Math.min(restante, 30);
        const qtd = Math.max(5, Math.round(blocoQ / 3));
        novo.push(tarefa({
          data: dia, tipo: 'questoes', minutos: blocoQ,
          disciplinaId: t.disciplinaId, topicoId: t.topicoId,
          titulo: `${qtd} questões — ${cortar(t.nome, 60)}`,
          sub: `${nomeDisciplina(t.disciplinaId)} · padrão FGV`,
          meta: { qtd }
        }));
        restante -= blocoQ;
      }
    }
  });

  state.data.plano = novo;
  sincronizarRevisoes();
  persist();
  return novo;
}

function cortar(s, n) { return s.length > n ? s.slice(0, n - 1) + '…' : s; }

function tarefa(o) {
  return {
    id: uid('t'), data: o.data, tipo: o.tipo, minutos: o.minutos,
    titulo: o.titulo, sub: o.sub || '',
    disciplinaId: o.disciplinaId || null, topicoId: o.topicoId || null,
    meta: o.meta || null, done: false, doneAt: null, origem: o.origem || 'auto'
  };
}

/** Recoloca tarefas atrasadas não concluídas nos próximos dias disponíveis. */
export function replanejar() {
  const perfil = state.data.perfil;
  const h = hoje();
  const atrasadas = state.data.plano.filter(t => !t.done && diffDias(t.data, h) > 0);
  if (!atrasadas.length) return 0;

  const capacidade = Math.max(30, Math.round((perfil.horasDia || 2) * 60));
  const fim = perfil.dataProva && diffDias(h, perfil.dataProva) > 0 ? addDias(perfil.dataProva, -1) : addDias(h, 45);
  const dias = diasDisponiveis(h, fim, perfil.diasSemana?.length ? perfil.diasSemana : [1, 2, 3, 4, 5]);
  if (!dias.length) return 0;

  const carga = {};
  for (const d of dias) carga[d] = 0;
  for (const t of state.data.plano) if (!t.done && carga[t.data] !== undefined && !atrasadas.includes(t)) carga[t.data] += t.minutos;

  const peso = t => t.tipo === 'revisao' ? 3 : t.tipo === 'simulado' ? 2 : 1;
  let movidas = 0;
  for (const t of [...atrasadas].sort((a, b) => peso(b) - peso(a))) {
    const alvo = dias.find(d => carga[d] + t.minutos <= capacidade) || dias[dias.length - 1];
    t.data = alvo;
    t.replanejada = true;
    carga[alvo] += t.minutos;
    movidas++;
  }
  persist();
  return movidas;
}

/* ---------------- revisão espaçada ---------------- */

export function sincronizarRevisoes() {
  const plano = state.data.plano;
  const porData = {};
  for (const e of state.data.erros) {
    if (e.dominado) continue;
    const prox = proximaRevisao(e);
    if (!prox) continue;
    const data = diffDias(prox, hoje()) > 0 ? hoje() : prox;
    (porData[data] = porData[data] || []).push(e);
  }
  const mantidas = plano.filter(t => !(t.tipo === 'revisao' && t.origem === 'auto' && !t.done));
  for (const [data, erros] of Object.entries(porData)) {
    const porDisc = {};
    for (const e of erros) {
      const q = questao(e.qid); if (!q) continue;
      (porDisc[q.disciplinaId] = porDisc[q.disciplinaId] || []).push(e.qid);
    }
    for (const [dId, qids] of Object.entries(porDisc)) {
      mantidas.push(tarefa({
        data, tipo: 'revisao', minutos: Math.max(15, Math.min(45, qids.length * 4)),
        disciplinaId: dId,
        titulo: `Revisar ${qids.length} ${qids.length === 1 ? 'erro' : 'erros'} — ${rotuloDisciplina(dId)}`,
        sub: 'Revisão espaçada do caderno de erros',
        meta: { qids }
      }));
    }
  }
  state.data.plano = mantidas;
}

export function proximaRevisao(erro) {
  const etapa = erro.etapa || 0;
  if (etapa >= INTERVALOS_REVISAO.length) return null;
  return addDias(erro.base || erro.criadoEm.slice(0, 10), INTERVALOS_REVISAO[etapa]);
}

export function revisoesPendentes() {
  const h = hoje();
  return state.data.erros.filter(e => {
    if (e.dominado) return false;
    const p = proximaRevisao(e);
    return p && diffDias(p, h) >= 0;
  });
}

/* ---------------- respostas / erros ---------------- */

export function registrarResposta({ qid, escolha, segundos, modo = 'treino' }) {
  const q = questao(qid);
  if (!q) return null;
  const correta = escolha === q.correta;
  const r = { id: uid('r'), qid, escolha, correta, segundos: Math.round(segundos || 0), ts: new Date().toISOString(), modo };
  state.data.respostas.push(r);
  marcarDiaEstudado();

  if (modo === 'revisao') {
    const e = state.data.erros.find(e => e.qid === qid && !e.dominado);
    if (e) {
      e.historico = e.historico || [];
      if (correta) {
        e.etapa = (e.etapa || 0) + 1;
        e.base = hoje();
        e.historico.push({ data: hoje(), ok: true });
        if (e.etapa >= INTERVALOS_REVISAO.length) e.dominado = true;
      } else {
        e.etapa = 0;
        e.base = hoje();
        e.historico.push({ data: hoje(), ok: false });
      }
      sincronizarRevisoes();
    }
  }
  persist();
  return r;
}

export function adicionarErro({ qid, escolha, motivo = '', comentario = '' }) {
  let e = state.data.erros.find(e => e.qid === qid && !e.dominado);
  if (e) {
    e.escolha = escolha ?? e.escolha;
    if (motivo) e.motivo = motivo;
    if (comentario) e.comentario = comentario;
    e.etapa = 0; e.base = hoje();
  } else {
    e = {
      id: uid('e'), qid, escolha, motivo, comentario,
      criadoEm: new Date().toISOString(), base: hoje(), etapa: 0,
      dominado: false, historico: []
    };
    state.data.erros.push(e);
  }
  sincronizarRevisoes();
  persist();
  return e;
}

export function removerErro(id) {
  state.data.erros = state.data.erros.filter(e => e.id !== id);
  sincronizarRevisoes();
  persist();
}

export function alternarFavorito(qid) {
  const i = state.data.favoritos.indexOf(qid);
  if (i >= 0) state.data.favoritos.splice(i, 1); else state.data.favoritos.push(qid);
  persist();
  return i < 0;
}

/* ---------------- tarefas ---------------- */

export function concluirTarefa(id, done = true) {
  const t = state.data.plano.find(t => t.id === id);
  if (!t) return;
  t.done = done;
  t.doneAt = done ? new Date().toISOString() : null;
  if (done) marcarDiaEstudado();
  persist();
}

export function moverTarefa(id, novaData) {
  const t = state.data.plano.find(t => t.id === id);
  if (!t) return;
  t.data = novaData;
  t.replanejada = true;
  persist();
}

export function tarefasDe(data) {
  const ordem = { revisao: 0, teoria: 1, questoes: 2, simulado: 3, redacao: 4 };
  return state.data.plano
    .filter(t => t.data === data)
    .sort((a, b) => (a.done - b.done) || ((ordem[a.tipo] ?? 9) - (ordem[b.tipo] ?? 9)));
}

export function proximaTarefa() {
  const h = hoje();
  return tarefasDe(h).find(t => !t.done)
    || state.data.plano.filter(t => !t.done && diffDias(h, t.data) > 0).sort((a, b) => a.data.localeCompare(b.data))[0]
    || null;
}

/* ---------------- gamificação ---------------- */

function marcarDiaEstudado() {
  const g = state.data.gamif;
  const h = hoje();
  if (g.ultimoDia === h) return;
  if (g.ultimoDia && diffDias(g.ultimoDia, h) === 1) g.streak = (g.streak || 0) + 1;
  else g.streak = 1;
  g.ultimoDia = h;
  g.dias = [...new Set([...(g.dias || []), h])].slice(-400);
}

export function medalhas() {
  const s = resumoGeral();
  const ctx = {
    totalResp: s.total, taxa: s.taxa, meta: state.data.perfil.metaAcerto || 70,
    streak: state.data.gamif.streak || 0,
    simulados: state.data.simulados.length,
    simuladoAprovado: state.data.simulados.some(x => x.aprovado),
    errosRevisados: state.data.erros.filter(e => (e.historico || []).length).length
  };
  return MEDALHAS.map(m => ({ ...m, ganha: !!m.teste(ctx) }));
}

/* ---------------- estatísticas ---------------- */

export function resumoGeral() {
  const rs = state.data.respostas;
  const total = rs.length;
  const acertos = rs.filter(r => r.correta).length;
  const tempo = rs.reduce((a, r) => a + (r.segundos || 0), 0);
  return {
    total, acertos,
    taxa: total ? Math.round((acertos / total) * 100) : 0,
    tempoMedio: total ? Math.round(tempo / total) : 0,
    tempoTotal: tempo
  };
}

export function porDisciplina() {
  const m = {};
  for (const d of disciplinas()) m[d.id] = { id: d.id, nome: d.nome, cor: d.cor, modulo: d.modulo, questoesProva: d.questoes, total: 0, acertos: 0, segundos: 0 };
  for (const r of state.data.respostas) {
    const q = questao(r.qid); if (!q) continue;
    const alvo = m[q.disciplinaId] || (m[q.disciplinaId] = { id: q.disciplinaId, nome: rotuloDisciplina(q.disciplinaId), cor: corDisciplina(q.disciplinaId), total: 0, acertos: 0, segundos: 0 });
    alvo.total++;
    if (r.correta) alvo.acertos++;
    alvo.segundos += r.segundos || 0;
  }
  return Object.values(m).map(x => ({
    ...x,
    taxa: x.total ? Math.round((x.acertos / x.total) * 100) : null,
    tempoMedio: x.total ? Math.round(x.segundos / x.total) : 0
  }));
}

export function porAssunto() {
  const m = {};
  for (const r of state.data.respostas) {
    const q = questao(r.qid); if (!q) continue;
    const k = q.assunto || rotuloDisciplina(q.disciplinaId);
    m[k] = m[k] || { id: k, nome: k, disciplinaId: q.disciplinaId, total: 0, acertos: 0 };
    m[k].total++;
    if (r.correta) m[k].acertos++;
  }
  return Object.values(m).map(x => ({ ...x, taxa: Math.round((x.acertos / x.total) * 100) }));
}

export function porSemana(n = 8) {
  const out = [];
  let s = inicioSemana(hoje());
  for (let i = 0; i < n; i++) { out.unshift(s); s = addDias(s, -7); }
  return out.map(ini => {
    const fim = addDias(ini, 6);
    const rs = state.data.respostas.filter(r => {
      const d = r.ts.slice(0, 10);
      return diffDias(ini, d) >= 0 && diffDias(d, fim) >= 0;
    });
    const ac = rs.filter(r => r.correta).length;
    return {
      inicio: ini, fim, total: rs.length, acertos: ac,
      taxa: rs.length ? Math.round((ac / rs.length) * 100) : null,
      minutos: Math.round(rs.reduce((a, r) => a + (r.segundos || 0), 0) / 60)
    };
  });
}

export function horasSemana() {
  const ini = inicioSemana(hoje());
  const seg = state.data.respostas
    .filter(r => diffDias(ini, r.ts.slice(0, 10)) >= 0)
    .reduce((a, r) => a + (r.segundos || 0), 0);
  const min = state.data.plano
    .filter(t => t.done && t.doneAt && diffDias(ini, t.doneAt.slice(0, 10)) >= 0)
    .reduce((a, t) => a + t.minutos, 0);
  return { minutos: min + Math.round(seg / 60) };
}

export function previsaoProva() {
  const g = resumoGeral();
  const sims = state.data.simulados.slice(-3);
  if (!sims.length) return g.total >= 10 ? g.taxa : null;
  const mediaSim = sims.reduce((a, s) => a + s.taxa, 0) / sims.length;
  const v = g.total >= 20 ? mediaSim * 0.7 + g.taxa * 0.3 : mediaSim;
  return Math.round(v);
}

/** Projeção de pontos na prova (0 a 90), pela taxa por disciplina. */
export function previsaoPontos() {
  const porD = Object.fromEntries(porDisciplina().map(d => [d.id, d]));
  const geral = resumoGeral();
  if (!geral.total) return null;
  let pontos = 0, max = 0;
  for (const c of composicaoProva(nivelAtual())) {
    const taxa = (porD[c.disciplinaId]?.total >= 3 ? porD[c.disciplinaId].taxa : geral.taxa) / 100;
    const valor = c.modulo === 2 ? EDITAL.pontos.modulo2 : EDITAL.pontos.modulo1;
    pontos += c.questoes * valor * taxa;
    max += c.questoes * valor;
  }
  const m2 = composicaoProva(nivelAtual()).filter(c => c.modulo === 2)
    .reduce((a, c) => a + c.questoes * EDITAL.pontos.modulo2 * ((porD[c.disciplinaId]?.total >= 3 ? porD[c.disciplinaId].taxa : geral.taxa) / 100), 0);
  return {
    pontos: Math.round(pontos), maximo: max,
    modulo2: Math.round(m2),
    aprovado: pontos >= EDITAL.aprovacao.totalMin && m2 >= EDITAL.aprovacao.modulo2Min
  };
}

export function pontosFracos(n = 5) {
  return porAssunto().filter(t => t.total >= 2).sort((a, b) => a.taxa - b.taxa).slice(0, n);
}

export function pontosFortes(n = 5) {
  return porAssunto().filter(t => t.total >= 2).sort((a, b) => b.taxa - a.taxa).slice(0, n);
}

/* ---------------- seleção de questões ---------------- */

export function filtrarQuestoes({ disciplinaId, topicoId, assunto, dificuldade, apenasErradas, apenasFavoritas, naoRespondidas, busca, incluirForaEdital = false } = {}) {
  const respondidas = new Set(state.data.respostas.map(r => r.qid));
  const errados = new Set(state.data.erros.filter(e => !e.dominado).map(e => e.qid));
  const t = topicoId ? topico(topicoId) : null;
  const doTopico = t ? new Set(questoesDoTopico(t).map(q => q.id)) : null;
  return questoes().filter(q => {
    if (!incluirForaEdital && q.foraEdital) return false;
    if (disciplinaId && q.disciplinaId !== disciplinaId) return false;
    if (doTopico && !doTopico.has(q.id)) return false;
    if (assunto && q.assunto !== assunto) return false;
    if (dificuldade && q.dificuldade !== dificuldade) return false;
    if (apenasErradas && !errados.has(q.id)) return false;
    if (apenasFavoritas && !state.data.favoritos.includes(q.id)) return false;
    if (naoRespondidas && respondidas.has(q.id)) return false;
    if (busca) {
      const txt = `${q.contexto || ''} ${q.comando} ${q.assunto} ${(q.tags || []).join(' ')}`.toLowerCase();
      if (!txt.includes(busca.toLowerCase())) return false;
    }
    return true;
  });
}

export function assuntosDisponiveis(disciplinaId) {
  const set = new Set();
  for (const q of questoes()) {
    if (q.foraEdital) continue;
    if (disciplinaId && q.disciplinaId !== disciplinaId) continue;
    if (q.assunto) set.add(q.assunto);
  }
  return [...set].sort((a, b) => a.localeCompare(b, 'pt-BR'));
}

export function embaralhar(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Monta o simulado. Quando `completo`, segue a composição oficial da prova
 * (por disciplina e por módulo); caso contrário, sorteia priorizando os
 * pontos fracos e o peso de cada disciplina na nota.
 */
export function montarSimulado(qtd, { completo = false, apenasFracos = false } = {}) {
  const pool = questoes().filter(q => !q.foraEdital);
  if (!pool.length) return [];
  const fracos = new Set(pontosFracos(6).map(t => t.id));

  const nota = q => {
    const d = disciplina(q.disciplinaId);
    let p = (d ? pesoProva(d) : 6) + Math.random() * 8;
    if (fracos.has(q.assunto)) p += 14;
    if (state.data.erros.some(e => e.qid === q.id && !e.dominado)) p += 6;
    return p;
  };

  if (completo) {
    const out = [];
    for (const c of composicaoProva(nivelAtual())) {
      const daDisc = pool.filter(q => q.disciplinaId === c.disciplinaId)
        .map(q => ({ q, p: nota(q) })).sort((a, b) => b.p - a.p).map(x => x.q);
      // repete o ciclo quando não há questões suficientes na disciplina
      for (let i = 0; i < c.questoes && daDisc.length; i++) out.push(daDisc[i % daDisc.length]);
    }
    return out;
  }

  const ordenadas = pool.map(q => ({ q, p: nota(q) })).sort((a, b) => b.p - a.p);
  const sel = apenasFracos ? ordenadas.filter(x => fracos.has(x.q.assunto)) : ordenadas;
  const base = sel.length >= qtd ? sel : ordenadas;
  return embaralhar(base.slice(0, qtd).map(x => x.q));
}

/** Pontuação no padrão do edital: Módulo I vale 1, Módulo II vale 2. */
export function pontuar(respostas) {
  let m1 = 0, m2 = 0, max1 = 0, max2 = 0;
  for (const r of respostas) {
    const q = questao(r.qid); if (!q) continue;
    const mod = moduloDe(q.disciplinaId);
    if (mod === 2) { max2 += EDITAL.pontos.modulo2; if (r.correta) m2 += EDITAL.pontos.modulo2; }
    else { max1 += EDITAL.pontos.modulo1; if (r.correta) m1 += EDITAL.pontos.modulo1; }
  }
  const total = m1 + m2;
  return {
    modulo1: m1, modulo2: m2, total, maximo: max1 + max2, maximoModulo2: max2,
    aprovado: m2 >= EDITAL.aprovacao.modulo2Min && total >= EDITAL.aprovacao.totalMin
  };
}

export function salvarSimulado(sim) {
  state.data.simulados.push(sim);
  marcarDiaEstudado();
  persist();
  return sim;
}

/* ---------------- dados demonstrativos ---------------- */

export function semearDemo() {
  const perfil = structuredClone(DEMO.perfil);
  state.data = vazio(perfil);
  state.data.onboarding = true;
  state.data.perfil.nome = state.user?.nome || perfil.nome;

  gerarPlano();

  const qs = questoes().filter(q => !q.foraEdital);
  const dias = 35;
  for (let d = dias; d >= 1; d--) {
    const dia = addDias(hoje(), -d);
    if (!perfil.diasSemana.includes(dow(dia))) continue;
    const qtd = 6 + Math.floor(Math.random() * 7);
    const progresso = (dias - d) / dias;
    for (let i = 0; i < qtd; i++) {
      const q = qs[Math.floor(Math.random() * qs.length)];
      const nv = perfil.niveis[q.disciplinaId] || 'intermediario';
      const base = nv === 'iniciante' ? 0.45 : nv === 'avancado' ? 0.8 : 0.62;
      const chance = Math.min(0.94, base + progresso * 0.26);
      const correta = Math.random() < chance;
      const escolha = correta ? q.correta : ['A', 'B', 'C', 'D'].filter(k => k !== q.correta)[Math.floor(Math.random() * 3)];
      const seg = Math.round((q.tempoAlvo || 180) * (0.65 + Math.random() * 0.8));
      state.data.respostas.push({
        id: uid('r'), qid: q.id, escolha, correta, segundos: seg,
        ts: `${dia}T${String(19 + (i % 3)).padStart(2, '0')}:${String(10 + i).padStart(2, '0')}:00.000Z`,
        modo: 'treino'
      });
      if (!correta && Math.random() < 0.55) {
        const motivos = ['conteudo', 'interpretacao', 'desatencao', 'pegadinha', 'tempo'];
        state.data.erros.push({
          id: uid('e'), qid: q.id, escolha,
          motivo: motivos[Math.floor(Math.random() * motivos.length)],
          comentario: '', criadoEm: `${dia}T20:00:00.000Z`, base: dia,
          etapa: Math.floor(Math.random() * 2), dominado: false, historico: []
        });
      }
    }
  }
  const vistos = new Set();
  state.data.erros = state.data.erros.filter(e => vistos.has(e.qid) ? false : (vistos.add(e.qid), true)).slice(0, 14);

  const marcos = [28, 21, 14, 7];
  marcos.forEach((d, i) => {
    const dia = addDias(hoje(), -d);
    const total = i % 2 === 0 ? 20 : 30;
    const taxa = 52 + i * 6 + Math.round(Math.random() * 4);
    const acertos = Math.round(total * taxa / 100);
    const maxPontos = total * 1.5;
    const pontos = Math.round(maxPontos * taxa / 100);
    state.data.simulados.push({
      id: uid('s'), data: dia, total, acertos, taxa,
      tempoTotal: total * (170 + Math.round(Math.random() * 40)),
      completo: false,
      pontuacao: { total: pontos, maximo: Math.round(maxPontos), modulo2: Math.round(pontos * 0.6), aprovado: taxa >= 45 },
      porDisciplina: disciplinas().slice(0, 5).map(dd => {
        const t = Math.max(2, Math.round(total / 5));
        return { id: dd.id, nome: dd.nome, total: t, acertos: Math.max(0, Math.round(t * (taxa + (Math.random() * 30 - 15)) / 100)) };
      }),
      respostas: []
    });
  });

  const diasEstudo = [];
  for (let d = 12; d >= 0; d--) {
    const dia = addDias(hoje(), -d);
    if (perfil.diasSemana.includes(dow(dia))) diasEstudo.push(dia);
  }
  state.data.gamif = { streak: 6, ultimoDia: diasEstudo[diasEstudo.length - 1] || hoje(), dias: diasEstudo };

  for (const t of state.data.plano) {
    if (diffDias(t.data, hoje()) > 0 && Math.random() < 0.8) { t.done = true; t.doneAt = `${t.data}T21:00:00.000Z`; }
  }
  const hojeT = tarefasDe(hoje());
  hojeT.slice(0, Math.max(1, Math.floor(hojeT.length / 3))).forEach(t => { t.done = true; t.doneAt = new Date().toISOString(); });

  sincronizarRevisoes();
  persist();
}

/* ---------------- edital e administração ---------------- */

export function salvarEdital(texto) {
  state.data.edital = { texto, atualizadoEm: new Date().toISOString() };
  persist();
}

/**
 * Acrescenta tópicos próprios ao programa, no formato `Disciplina | Assunto`.
 * A disciplina deve ser uma das oficiais: port, mat, info, to, leg, espec
 * (ou o nome exibido de qualquer uma delas).
 */
export function importarTopicos(texto) {
  const porNome = {};
  for (const d of disciplinas()) porNome[semAcento(d.nome)] = d.id;
  for (const [id, r] of Object.entries(ROTULOS)) porNome[semAcento(r.nome)] = id;
  let n = 0;
  for (const linha of texto.split('\n')) {
    const partes = linha.split('|').map(p => p.trim()).filter(Boolean);
    if (partes.length < 2) continue;
    const dId = porNome[semAcento(partes[0])] || (ROTULOS[partes[0]] ? partes[0] : null);
    if (!dId) continue;
    const nome = partes[1];
    const t = { id: uid('t'), disciplinaId: dId, nome, peso: 2, origem: 'aluno' };
    if (!state.banco.topicosExtras.some(x => x.disciplinaId === dId && x.nome === nome)) {
      state.banco.topicosExtras.push(t);
      n++;
    }
  }
  persistBanco();
  return n;
}

export function salvarQuestao(q) {
  const i = questoes().findIndex(x => x.id === q.id);
  const registro = { ...q, origem: q.origem || 'admin' };
  if (i >= 0) questoes()[i] = registro; else questoes().push(registro);
  persistBanco();
}

export function removerQuestao(id) {
  state.banco.questoes = questoes().filter(q => q.id !== id);
  persistBanco();
}

export function importarQuestoesJSON(txt) {
  const arr = JSON.parse(txt);
  if (!Array.isArray(arr)) throw new Error('O JSON deve conter uma lista de questões.');
  let n = 0;
  for (const q of arr) {
    if (!q.id || !q.comando || !q.alternativas || !q.correta) continue;
    salvarQuestao(q); n++;
  }
  return n;
}

/**
 * Restaura um backup gerado por `exportarDados`. Substitui plano, respostas,
 * erros, simulados e preferências do usuário logado; as questões cadastradas
 * pelo administrador no arquivo são mescladas ao banco por id.
 */
export function importarDados(txt) {
  if (!state.banco) loadBanco();
  const pacote = JSON.parse(txt);
  const d = pacote?.dados;
  if (!d || !Array.isArray(d.respostas) || !d.perfil) {
    throw new Error('Arquivo inválido: não parece um backup do Executivo em Saúde.');
  }
  const base = vazio();
  for (const k of Object.keys(base)) if (d[k] === undefined) d[k] = base[k];
  state.data = d;
  state.data.versao = 3;

  let questoesNovas = 0;
  for (const q of (pacote.banco?.questoes || [])) {
    if (q.origem === 'admin' && !questao(q.id)) { questoes().push(q); questoesNovas++; }
  }
  if (questoesNovas) persistBanco();

  sincronizarRevisoes();
  persist();
  aplicarConfig();
  return {
    respostas: d.respostas.length,
    erros: d.erros.length,
    simulados: d.simulados.length,
    tarefas: d.plano.length,
    questoesNovas
  };
}

export function exportarDados() {
  return JSON.stringify({ exportadoEm: new Date().toISOString(), usuario: state.user?.email, dados: state.data, banco: state.banco }, null, 2);
}

/* ---------------- configuração ---------------- */

export function setConfig(k, v) {
  state.data.config[k] = v;
  persist();
  aplicarConfig();
}

export function aplicarConfig() {
  const c = state.data?.config || { tema: 'auto', fonte: 'm' };
  const root = document.documentElement;
  if (c.tema === 'auto') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', c.tema);
  if (c.fonte === 'm') root.removeAttribute('data-fs');
  else root.setAttribute('data-fs', c.fonte);
}

export function appFlag(k, v) {
  let o = {};
  try { o = JSON.parse(localStorage.getItem(LS_APP) || '{}'); } catch { o = {}; }
  if (v === undefined) return o[k];
  o[k] = v;
  localStorage.setItem(LS_APP, JSON.stringify(o));
  return v;
}

/* ---------------------------------------------------------------- */
/* Contrato de sincronização remota — implementar quando houver API.  */
/* ---------------------------------------------------------------- */

export const api = {
  base: null,
  async login(email, senha) { throw new Error('API remota não configurada.'); },
  async pull(userId) { throw new Error('API remota não configurada.'); },
  async push(userId, dados) { throw new Error('API remota não configurada.'); },
  async sync() {
    if (!this.base || !state.user) return { ok: false, motivo: 'offline' };
    try { await this.push(state.user.id, state.data); return { ok: true }; }
    catch (e) { return { ok: false, motivo: e.message }; }
  }
};
