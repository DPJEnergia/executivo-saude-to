/* views/home.js — painel inicial. */

import * as S from '../store.js';
import { el, esc, icon, anel, stat, corTaxa, barras, toast } from '../ui.js';
import { FRASES } from '../data.js';

export function viewInicio(ir) {
  const p = S.state.data.perfil;
  const g = S.resumoGeral();
  const hojeTarefas = S.tarefasDe(S.hoje());
  const feitas = hojeTarefas.filter(t => t.done).length;
  const minTotal = hojeTarefas.reduce((a, t) => a + t.minutos, 0);
  const minFeitos = hojeTarefas.filter(t => t.done).reduce((a, t) => a + t.minutos, 0);
  const prox = S.proximaTarefa();
  const faltam = p.dataProva ? S.diffDias(S.hoje(), p.dataProva) : null;
  const rev = S.revisoesPendentes();
  const semana = S.horasSemana();
  const metaSemanal = Math.round((p.horasDia || 2) * 60 * (p.diasSemana?.length || 5));
  const frase = FRASES[new Date().getDate() % FRASES.length];
  const atrasadas = S.state.data.plano.filter(t => !t.done && S.diffDias(t.data, S.hoje()) > 0);
  const disc = S.porDisciplina().filter(d => d.total > 0).sort((a, b) => a.taxa - b.taxa).slice(0, 6);
  const streak = S.state.data.gamif.streak || 0;

  const node = el(`
  <div class="stack">
    <div class="card" style="background:linear-gradient(135deg, var(--brand), var(--accent)); border:0; color:#fff">
      <div class="row" style="gap:18px">
        <div style="min-width:220px;flex:1">
          <div class="small" style="opacity:.9;font-weight:700">${saudacao()}, ${esc(primeiroNome(p.nome))}</div>
          <h1 style="color:#fff;margin:4px 0 8px">${faltam === null ? 'Defina a data da prova' : faltam > 0 ? `${faltam} ${faltam === 1 ? 'dia' : 'dias'} para a prova` : 'É hoje. Boa prova.'}</h1>
          <div class="small" style="opacity:.92">${esc(p.cargo || 'Cargo não definido')} · meta de ${p.metaAcerto || 70}% de acerto</div>
          <p class="small" style="opacity:.92;margin:12px 0 0;max-width:46ch">${esc(frase)}</p>
        </div>
        <div style="text-align:center">
          ${anel(minTotal ? (minFeitos / minTotal) * 100 : 0, {
            tamanho: 118, cor: '#fff',
            texto: `<span style="color:#fff">${minTotal ? Math.round((minFeitos / minTotal) * 100) : 0}%</span>`,
            sub: 'do dia'
          }).replace('var(--surface-3)', 'rgba(255,255,255,.28)')}
        </div>
      </div>
      <button class="btn btn-lg btn-block" data-comecar style="margin-top:16px;background:#fff;color:var(--azul-700)">
        ${icon('play', 20)} ${prox ? 'Começar a estudar' : 'Gerar meu plano'}
      </button>
    </div>

    ${prox ? `
    <div class="card">
      <div class="card-head">
        <span class="tag">Próxima tarefa</span>
        <span class="chip static spacer">${prox.minutos} min</span>
      </div>
      <h2>${esc(prox.titulo)}</h2>
      <p class="muted small" style="margin:4px 0 12px">${esc(prox.sub || '')} ${prox.data !== S.hoje() ? `· agendada para ${S.dataExtenso(prox.data)}` : ''}</p>
      <div class="row">
        <button class="btn btn-primary" data-iniciar>${icon('play', 18)} Iniciar</button>
        <button class="btn btn-ghost" data-ver-plano>Ver plano completo</button>
      </div>
    </div>` : ''}

    ${atrasadas.length ? `
    <div class="card" style="border-color:var(--warn)">
      <div class="row">
        <div style="flex:1;min-width:200px">
          <h3>${atrasadas.length} ${atrasadas.length === 1 ? 'tarefa atrasada' : 'tarefas atrasadas'}</h3>
          <p class="small muted" style="margin:4px 0 0">O replanejamento redistribui tudo nos próximos dias sem perder as revisões.</p>
        </div>
        <button class="btn btn-primary" data-replanejar>Replanejar agora</button>
      </div>
    </div>` : ''}

    ${rev.length ? `
    <div class="card" style="border-color:var(--bad)">
      <div class="row">
        <div style="flex:1;min-width:200px">
          <h3>${rev.length} ${rev.length === 1 ? 'revisão pendente' : 'revisões pendentes'}</h3>
          <p class="small muted" style="margin:4px 0 0">Erros no ciclo de 24h, 7, 15 e 30 dias. Revisar agora é o que fixa.</p>
        </div>
        <button class="btn btn-danger" data-revisar>${icon('erros', 18)} Revisar erros</button>
      </div>
    </div>` : ''}

    <div class="grid grid-4">
      ${stat('Taxa geral', `${g.taxa}%`, `${g.acertos} de ${g.total} questões`, corTaxa(g.total ? g.taxa : null))}
      ${stat('Tempo médio', g.tempoMedio ? `${g.tempoMedio}s` : '—', 'por questão')}
      ${stat('Semana', `${Math.floor(semana.minutos / 60)}h${String(semana.minutos % 60).padStart(2, '0')}`, `meta: ${Math.round(metaSemanal / 60)}h`)}
      ${stat('Sequência', `${streak} ${streak === 1 ? 'dia' : 'dias'}`, streak >= 3 ? 'Mantenha o ritmo' : 'Estude hoje para iniciar')}
    </div>

    <div class="card">
      <div class="card-head"><h2>Meta semanal</h2><span class="chip static spacer">${Math.min(100, Math.round((semana.minutos / Math.max(1, metaSemanal)) * 100))}%</span></div>
      <div class="progress"><i style="width:${Math.min(100, (semana.minutos / Math.max(1, metaSemanal)) * 100)}%"></i></div>
      <div class="streak-days" style="margin-top:14px">
        ${diasDaSemana().map(d => `<i class="${S.state.data.gamif.dias?.includes(d.data) ? 'on' : ''}" title="${esc(S.dataExtenso(d.data))}">${d.letra}</i>`).join('')}
      </div>
    </div>

    <div class="grid grid-2">
      <div class="card">
        <div class="card-head"><h2>Hoje</h2><span class="chip static spacer">${feitas}/${hojeTarefas.length}</span></div>
        ${hojeTarefas.length ? hojeTarefas.slice(0, 6).map(t => `
          <div class="task ${t.done ? 'done' : ''}" data-tipo="${t.tipo}" style="cursor:default">
            <span class="task-bar"></span>
            <div style="flex:1;min-width:0">
              <div class="task-title">${esc(t.titulo)}</div>
              <div class="task-sub">${esc(t.sub || '')} · ${t.minutos} min</div>
            </div>
            <button class="task-check" data-check="${t.id}" aria-label="Concluir">${icon('check', 16)}</button>
          </div>`).join('') : '<p class="dim small">Nenhuma tarefa hoje. Aproveite para revisar erros.</p>'}
      </div>

      <div class="card">
        <div class="card-head"><h2>Prioridades</h2><button class="btn btn-quiet spacer" data-ver-desempenho>Ver tudo</button></div>
        ${disc.length ? barras(disc.map(d => ({ nome: d.nome, valor: d.taxa, cor: corTaxa(d.taxa) }))) :
          '<p class="dim small">Resolva questões para o app calcular suas prioridades.</p>'}
      </div>
    </div>
  </div>`);

  node.querySelector('[data-comecar]').addEventListener('click', () => {
    if (!prox) { S.gerarPlano(); toast('Plano gerado.'); ir('plano'); return; }
    iniciarTarefa(prox, ir);
  });
  node.querySelector('[data-iniciar]')?.addEventListener('click', () => iniciarTarefa(prox, ir));
  node.querySelector('[data-ver-plano]')?.addEventListener('click', () => ir('plano'));
  node.querySelector('[data-ver-desempenho]')?.addEventListener('click', () => ir('desempenho'));
  node.querySelector('[data-revisar]')?.addEventListener('click', () => ir('erros', { revisar: true }));
  node.querySelector('[data-replanejar]')?.addEventListener('click', () => {
    const n = S.replanejar();
    toast(`${n} ${n === 1 ? 'tarefa redistribuída' : 'tarefas redistribuídas'}.`);
    ir('inicio');
  });
  node.querySelectorAll('[data-check]').forEach(b => b.addEventListener('click', () => {
    const t = S.state.data.plano.find(x => x.id === b.dataset.check);
    S.concluirTarefa(b.dataset.check, !t.done);
    ir('inicio');
  }));

  return node;
}

export function iniciarTarefa(t, ir) {
  if (!t) return;
  if (t.tipo === 'simulado') { ir('simulados', { iniciar: t.meta?.qtd || 20, completo: !!t.meta?.completo, tarefaId: t.id }); return; }
  if (t.tipo === 'revisao') { ir('erros', { revisar: true, tarefaId: t.id }); return; }
  if (t.tipo === 'teoria') { ir('resumo', { topicoId: t.topicoId, tarefaId: t.id }); return; }
  ir('questoes', { topicoId: t.topicoId, disciplinaId: t.disciplinaId, qtd: t.meta?.qtd || 10, tarefaId: t.id, auto: true });
}

function saudacao() {
  const h = new Date().getHours();
  return h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
}

function primeiroNome(n) { return (n || 'estudante').trim().split(' ')[0]; }

function diasDaSemana() {
  const ini = S.inicioSemana(S.hoje());
  return Array.from({ length: 7 }, (_, i) => ({ data: S.addDias(ini, i), letra: S.DOW_CURTO[i] }));
}
