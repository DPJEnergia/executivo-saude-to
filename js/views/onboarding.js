/* views/onboarding.js — acesso (login/cadastro) e configuração inicial em etapas. */

import * as S from '../store.js';
import { el, esc, icon, toast } from '../ui.js';
import { NIVEIS, EDITAL, CARGO_ALVO } from '../data.js';

/* ---------------- acesso ---------------- */

export function viewAcesso(aoEntrar) {
  let modo = S.contasExistem() ? 'entrar' : 'criar';

  const node = el(`<div class="onb"><div class="onb-card">
    <div class="brand" style="padding:0 0 18px">
      <span class="brand-mark">ES</span>
      <div><div class="brand-name">Executivo em Saúde</div><div class="brand-sub">SES-TO · Preparatório</div></div>
    </div>
    <h1 data-titulo></h1>
    <p class="muted small" data-sub></p>
    <div class="stack" style="margin-top:16px" data-form></div>
    <p class="xsmall dim" style="margin-top:16px">
      Os dados ficam neste dispositivo, protegidos pela sua conta. A senha é guardada apenas como resumo criptográfico.
    </p>
  </div></div>`);

  const form = node.querySelector('[data-form]');
  pinta();

  function pinta() {
    node.querySelector('[data-titulo]').textContent = modo === 'entrar' ? 'Entrar' : 'Criar conta';
    node.querySelector('[data-sub]').textContent = modo === 'entrar'
      ? 'Acesse seu plano, seu caderno de erros e seus simulados.'
      : 'Leva trinta segundos. Em seguida montamos o seu plano até a data da prova.';
    form.innerHTML = `
      ${modo === 'criar' ? `<div class="field"><label for="a-nome">Nome</label>
        <input class="input" id="a-nome" autocomplete="name" placeholder="Como você quer ser chamado"></div>` : ''}
      <div class="field"><label for="a-mail">E-mail</label>
        <input class="input" id="a-mail" type="email" autocomplete="email" placeholder="voce@exemplo.com"></div>
      <div class="field"><label for="a-senha">Senha</label>
        <input class="input" id="a-senha" type="password" autocomplete="${modo === 'criar' ? 'new-password' : 'current-password'}" placeholder="mínimo de 6 caracteres"></div>
      ${modo === 'criar' ? `<div class="field"><label>Tipo de perfil</label>
        <div class="seg">
          <button type="button" data-tipo="aluno" aria-pressed="true">Aluno</button>
          <button type="button" data-tipo="admin" aria-pressed="false">Administrador</button>
        </div>
        <span class="help">Administrador cadastra disciplinas, questões e simulados.</span>
      </div>` : ''}
      <button class="btn btn-primary btn-lg btn-block" data-ok>${modo === 'entrar' ? 'Entrar' : 'Criar conta'}</button>
      <button class="btn btn-quiet btn-block" data-trocar>${modo === 'entrar' ? 'Não tenho conta' : 'Já tenho conta'}</button>
      ${modo === 'criar' ? `<button class="btn btn-ghost btn-block" data-demo>${icon('play', 18)} Entrar com dados de exemplo</button>` : ''}`;

    let tipo = 'aluno';
    form.querySelectorAll('[data-tipo]').forEach(b => b.addEventListener('click', () => {
      tipo = b.dataset.tipo;
      form.querySelectorAll('[data-tipo]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    }));
    form.querySelector('[data-trocar]').addEventListener('click', () => { modo = modo === 'entrar' ? 'criar' : 'entrar'; pinta(); });
    form.querySelector('[data-ok]').addEventListener('click', () => enviar(tipo));
    form.querySelector('[data-demo]')?.addEventListener('click', () => demo());
    form.querySelectorAll('input').forEach(i => i.addEventListener('keydown', e => { if (e.key === 'Enter') enviar(tipo); }));
  }

  async function enviar(tipo) {
    const mail = form.querySelector('#a-mail').value.trim();
    const senha = form.querySelector('#a-senha').value;
    if (!mail || !senha) { toast('Informe e-mail e senha.'); return; }
    try {
      if (modo === 'criar') {
        const nome = form.querySelector('#a-nome').value.trim();
        if (!nome) { toast('Informe seu nome.'); return; }
        if (senha.length < 6) { toast('A senha precisa de ao menos 6 caracteres.'); return; }
        await S.registrar({ nome, email: mail, senha, perfilTipo: tipo });
      } else {
        await S.login(mail, senha);
      }
      aoEntrar();
    } catch (e) { toast(e.message); }
  }

  async function demo() {
    const mail = `demo${Date.now().toString(36)}@exemplo.com`;
    await S.registrar({ nome: 'Ana Demonstração', email: mail, senha: 'demo1234', perfilTipo: 'aluno' });
    S.semearDemo();
    toast('Conta de demonstração criada com plano, questões e estatísticas.');
    aoEntrar();
  }

  return node;
}

/* ---------------- onboarding ---------------- */

export function viewOnboarding(aoConcluir) {
  const p = S.state.data.perfil;
  p.nome = p.nome || S.state.user.nome;
  p.nivel = 'superior';
  p.cargo = CARGO_ALVO.nome;
  p.dataProva = EDITAL.dataProva;
  if (!p.diasSemana?.length) p.diasSemana = [1, 2, 3, 4, 5];

  let passo = 0;
  const passos = [etapaBoas, etapaCargo, etapaTempo, etapaNiveis, etapaMeta, etapaFinal];

  const node = el(`<div class="onb"><div class="onb-card">
    <div class="onb-steps" data-steps></div>
    <div data-corpo></div>
  </div></div>`);
  const corpo = node.querySelector('[data-corpo]');
  render();

  function render() {
    node.querySelector('[data-steps]').innerHTML =
      passos.map((_, i) => `<i class="${i < passo ? 'done' : i === passo ? 'now' : ''}"></i>`).join('');
    corpo.innerHTML = '';
    corpo.appendChild(passos[passo]());
    corpo.scrollIntoView({ block: 'nearest' });
  }

  function navegacao({ voltar = true, rotulo = 'Continuar', onOk } = {}) {
    const n = el(`<div class="row" style="margin-top:22px">
      ${voltar ? '<button class="btn btn-ghost" data-voltar>Voltar</button>' : ''}
      <button class="btn btn-primary btn-lg spacer" data-ok>${esc(rotulo)} ${icon('seta', 18)}</button>
    </div>`);
    n.querySelector('[data-voltar]')?.addEventListener('click', () => { passo--; render(); });
    n.querySelector('[data-ok]').addEventListener('click', () => {
      if (onOk && onOk() === false) return;
      S.persist();
      if (passo < passos.length - 1) { passo++; render(); } else concluir();
    });
    return n;
  }

  function concluir() {
    S.state.data.onboarding = true;
    S.gerarPlano();
    S.persist();
    aoConcluir();
  }

  /* etapas */

  function etapaBoas() {
    const n = el(`<div>
      <div class="brand" style="padding:0 0 14px">
        <span class="brand-mark">ES</span>
        <div><div class="brand-name">Executivo em Saúde</div><div class="brand-sub">SES-TO · Preparatório</div></div>
      </div>
      <h1>Vamos montar o seu plano</h1>
      <p class="muted">Poucas perguntas. Com elas o app monta o cronograma até
      ${S.dataExtenso(EDITAL.dataProva)}, dia da prova objetiva, na ordem que o edital cobra.</p>
      <div class="callout info" style="margin-top:12px">
        <div class="callout-title">${esc(EDITAL.numero)}</div>
        <div class="small">${EDITAL.totalQuestoes} questões de ${EDITAL.alternativasPorQuestao} alternativas ·
        ${Math.round(EDITAL.duracaoMinutos / 60)} horas de prova · ${EDITAL.vagas.toLocaleString('pt-BR')} vagas ·
        aprovação com ${EDITAL.aprovacao.modulo2Min} pontos no Módulo II e ${EDITAL.aprovacao.totalMin} no total.</div>
      </div>
      <div class="grid grid-2" style="margin-top:16px">
        <div class="callout info"><div class="callout-title">Ciclo adaptativo</div>
          <div class="small">Teoria → questões → correção comentada → registro do erro → revisão em 24h, 7, 15 e 30 dias.</div></div>
        <div class="callout fgv"><div class="callout-title">Foco na FGV</div>
          <div class="small">Enunciados longos, alternativas próximas, termos absolutos e gestão de tempo.</div></div>
      </div>
    </div>`);
    n.appendChild(navegacao({ voltar: false, rotulo: 'Começar' }));
    return n;
  }

  function etapaCargo() {
    const comp = S.EDITAL.niveis.superior;
    const m1 = comp.disciplinas.filter(d => d.modulo === 1).reduce((a, d) => a + d.questoes, 0);
    const v = CARGO_ALVO.vagas;
    const n = el(`<div>
      <h1>Seu cargo: ${esc(CARGO_ALVO.nome)}</h1>
      <p class="muted small">Nível superior. Os ${comp.questoesEspecificos} itens de Conhecimentos Específicos valem
      ${comp.questoesEspecificos * EDITAL.pontos.modulo2} dos ${EDITAL.aprovacao.totalMax} pontos da prova.</p>
      <div class="stack" style="margin-top:16px">
        <div class="field"><label for="o-nome">Seu nome</label>
          <input class="input" id="o-nome" value="${esc(p.nome)}"></div>
        <div class="callout info">
          <div class="callout-title">${v.total} vagas em ${esc(v.lotacao)} · ${esc(CARGO_ALVO.vencimento)} · ${esc(CARGO_ALVO.cargaHoraria)}</div>
          <div class="small">Ampla concorrência ${v.ampla} · pessoas negras ${v.negros} · PcD ${v.pcd} ·
          indígenas ${v.indigenas} · quilombolas ${v.quilombolas}.</div>
          <div class="small" style="margin-top:6px"><b>Requisito:</b> ${esc(CARGO_ALVO.requisito)}</div>
        </div>
        <div class="field"><label>Composição da prova</label>
          <span class="help">Módulo I: ${m1} questões (1 ponto cada) · Módulo II: ${comp.questoesEspecificos} questões (2 pontos cada).</span></div>
        <div class="field"><label>Data da prova objetiva</label>
          <input class="input" type="date" value="${EDITAL.dataProva}" disabled>
          <span class="help">Definida no edital: ${S.dataExtenso(EDITAL.dataProva)}.</span></div>
      </div>
    </div>`);

    n.appendChild(navegacao({
      onOk: () => {
        p.nome = n.querySelector('#o-nome').value.trim() || p.nome;
        p.nivel = 'superior';
        p.cargo = CARGO_ALVO.nome;
        p.dataProva = EDITAL.dataProva;
      }
    }));
    return n;
  }

  function etapaTempo() {
    const n = el(`<div>
      <h1>Quanto tempo você tem?</h1>
      <p class="muted small">O plano preenche exatamente essa carga, sem prometer o que não cabe na sua rotina.</p>
      <div class="field" style="margin-top:16px"><label for="o-horas">Horas por dia</label>
        <input class="input" type="number" id="o-horas" min="0.5" max="14" step="0.5" value="${p.horasDia}"></div>
      <div class="field" style="margin-top:14px"><label>Dias da semana disponíveis</label>
        <div class="row">${S.DOW_NOMES.map((d, i) =>
          `<button class="chip" data-d="${i}" aria-pressed="${p.diasSemana.includes(i)}">${esc(d)}</button>`).join('')}</div>
      </div>
      <div class="callout info" style="margin-top:16px">
        <div class="callout-title">Dica</div>
        <div class="small">Prefira menos horas em mais dias. A revisão espaçada rende mais que maratona de fim de semana.</div>
      </div>
    </div>`);
    n.querySelectorAll('[data-d]').forEach(b => b.addEventListener('click', () => {
      const i = Number(b.dataset.d);
      const on = b.getAttribute('aria-pressed') === 'true';
      b.setAttribute('aria-pressed', String(!on));
      p.diasSemana = on ? p.diasSemana.filter(x => x !== i) : [...p.diasSemana, i].sort();
    }));
    n.appendChild(navegacao({
      onOk: () => {
        p.horasDia = Number(n.querySelector('#o-horas').value) || 2;
        if (!p.diasSemana.length) { toast('Escolha ao menos um dia da semana.'); return false; }
      }
    }));
    return n;
  }

  function etapaNiveis() {
    const ds = S.disciplinas();
    const n = el(`<div>
      <h1>Seu nível em cada disciplina</h1>
      <p class="muted small">Estas são as disciplinas da sua prova, com o peso que o edital dá a cada uma.
      Quem está no início recebe mais blocos de teoria; quem já domina recebe mais questões.</p>
      <div class="stack" style="margin-top:16px">
        ${ds.map(d => `<div class="row" style="border:1px solid var(--border);border-radius:12px;padding:10px 12px">
          <span style="flex:1;min-width:140px">
            <span class="b">${esc(d.nome)}</span>
            <span class="xsmall dim"> · ${d.questoes} questões · Módulo ${d.modulo === 2 ? 'II' : 'I'}</span>
          </span>
          <div class="seg">
            ${NIVEIS.map(nv => `<button data-n="${d.id}:${nv.id}" aria-pressed="${(p.niveis[d.id] || 'intermediario') === nv.id}">${nv.nome}</button>`).join('')}
          </div>
        </div>`).join('')}
      </div>
    </div>`);
    n.querySelectorAll('[data-n]').forEach(b => b.addEventListener('click', () => {
      const [dId, nv] = b.dataset.n.split(':');
      p.niveis[dId] = nv;
      b.closest('.seg').querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    }));
    n.appendChild(navegacao());
    return n;
  }

  function etapaMeta() {
    const n = el(`<div>
      <h1>Pontos fortes, dificuldades e meta</h1>
      <div class="stack" style="margin-top:16px">
        <div class="field"><label for="o-fortes">Onde você já vai bem</label>
          <input class="input" id="o-fortes" value="${esc(p.fortes || '')}" placeholder="Ex.: interpretação de texto, ética"></div>
        <div class="field"><label for="o-dif">Principais dificuldades</label>
          <input class="input" id="o-dif" value="${esc(p.dificuldades || '')}" placeholder="Ex.: Lei 14.133, Portarias de Consolidação"></div>
        <div class="field"><label for="o-meta">Meta de acerto (%)</label>
          <input class="input" type="number" id="o-meta" min="40" max="100" step="5" value="${p.metaAcerto}">
          <span class="help">Referência para aprovação em provas da FGV: entre 70% e 80%.</span></div>
      </div>
    </div>`);
    n.appendChild(navegacao({
      onOk: () => {
        p.fortes = n.querySelector('#o-fortes').value.trim();
        p.dificuldades = n.querySelector('#o-dif').value.trim();
        p.metaAcerto = Number(n.querySelector('#o-meta').value) || 70;
      }
    }));
    return n;
  }

  function etapaFinal() {
    const dias = Math.max(0, S.diffDias(S.hoje(), p.dataProva));
    const semanas = Math.max(1, Math.round(dias / 7));
    const horas = Math.round((p.horasDia * p.diasSemana.length * dias) / 7);
    const n = el(`<div>
      <h1>Tudo pronto, ${esc((p.nome || '').split(' ')[0])}</h1>
      <p class="muted">Seu plano vai de hoje até a véspera da prova.</p>
      <div class="grid grid-3" style="margin-top:16px">
        <div class="stat"><div class="label">Dias</div><div class="value">${dias}</div><div class="hint">até a prova</div></div>
        <div class="stat"><div class="label">Semanas</div><div class="value">${semanas}</div><div class="hint">de preparação</div></div>
        <div class="stat"><div class="label">Horas</div><div class="value">${horas}</div><div class="hint">previstas no total</div></div>
      </div>
      <div class="callout ok" style="margin-top:16px">
        <div class="callout-title">O que o app fará por você</div>
        <ul class="small" style="padding-left:18px;margin:0">
          <li>Distribui teoria, questões e revisão em blocos diários.</li>
          <li>Agenda simulado semanal e prova completa de ${EDITAL.totalQuestoes} questões a cada quatro semanas.</li>
          <li>Reforça sozinho os assuntos em que você erra mais.</li>
          <li>Reorganiza o cronograma quando você perde um dia, sem descartar revisões.</li>
        </ul>
      </div>
      <div class="row" style="margin-top:16px">
        <button class="chip" data-demo>Preencher com dados de exemplo para conhecer o app</button>
      </div>
    </div>`);
    n.querySelector('[data-demo]').addEventListener('click', () => {
      S.semearDemo();
      toast('Dados de exemplo carregados.');
      aoConcluir();
    });
    n.appendChild(navegacao({ rotulo: 'Gerar meu plano' }));
    return n;
  }

  return node;
}
