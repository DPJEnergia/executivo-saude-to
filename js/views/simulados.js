/* views/simulados.js — simulados rápidos e completos, com tempo regressivo. */

import * as S from '../store.js';
import { el, esc, icon, toast, stat, corTaxa, barras, linha, anel, vazio, confirmar, hhmm } from '../ui.js';
import { questaoCard, explicar } from '../questao.js';

const SEG_POR_QUESTAO = S.SEG_POR_QUESTAO;   // 240s: 4 horas para 60 questões

export function viewSimulados(ir, params = {}) {
  if (params.iniciar) return executar(ir, Number(params.iniciar), { completo: !!params.completo, tarefaId: params.tarefaId });
  if (params.resultado) return resultado(ir, S.state.data.simulados.find(s => s.id === params.resultado));

  const sims = [...S.state.data.simulados].reverse();
  const serie = S.state.data.simulados.map((s, i) => ({ rotulo: `#${i + 1}`, valor: s.taxa }));
  const prev = S.previsaoProva();
  const meta = S.state.data.perfil.metaAcerto || 70;

  const node = el(`
  <div class="stack">
    <div class="card">
      <div class="card-head"><h2>Novo simulado</h2></div>
      <div class="grid grid-4">
        ${[10, 20, 30].map(n => `
          <button class="btn btn-ghost btn-lg" data-qtd="${n}">
            <div><div class="b">${n} questões</div><div class="xsmall dim">${Math.round(n * SEG_POR_QUESTAO / 60)} min</div></div>
          </button>`).join('')}
        <button class="btn btn-primary btn-lg" data-qtd="${S.EDITAL.totalQuestoes}" data-completo="1">
          <div><div class="b">Prova completa</div><div class="xsmall dim">${S.EDITAL.totalQuestoes} questões · ${Math.round(S.EDITAL.duracaoMinutos / 60)}h</div></div>
        </button>
      </div>
      <div class="row" style="margin-top:12px">
        <button class="chip" data-fracos aria-pressed="false">Focar nos meus pontos fracos</button>
        <span class="xsmall dim spacer">As questões são sorteadas com peso maior para disciplinas de alta incidência e para os assuntos em que você erra mais.</span>
      </div>
    </div>

    <div class="grid grid-4">
      ${stat('Simulados', sims.length, 'realizados')}
      ${stat('Última taxa', sims[0] ? `${sims[0].taxa}%` : '—', sims[0] ? S.dataExtenso(sims[0].data) : 'nenhum ainda', sims[0] ? corTaxa(sims[0].taxa) : null)}
      ${stat('Melhor', sims.length ? `${Math.max(...sims.map(s => s.taxa))}%` : '—', 'marca pessoal', 'var(--ok)')}
      ${stat('Previsão', prev === null ? '—' : `${prev}%`, `meta: ${meta}%`, prev === null ? null : corTaxa(prev))}
    </div>

    ${sims.length >= 2 ? `
    <div class="card">
      <div class="card-head"><h2>Evolução entre simulados</h2><span class="chip static spacer">meta ${meta}%</span></div>
      ${linha(serie, { meta })}
      <div class="legend" style="margin-top:8px">
        <span><i style="background:var(--brand)"></i>Taxa por simulado</span>
        <span><i style="background:var(--accent)"></i>Sua meta</span>
      </div>
    </div>` : ''}

    <div class="card">
      <div class="card-head"><h2>Histórico</h2></div>
      ${sims.length ? sims.map(s => `
        <button class="task" data-ver="${s.id}" style="width:100%;text-align:left;cursor:pointer" data-tipo="simulado">
          <span class="task-bar"></span>
          <div style="flex:1;min-width:0">
            <div class="task-title">${s.completo ? 'Simulado completo' : 'Simulado'} · ${s.total} questões</div>
            <div class="task-sub">${S.dataExtenso(s.data)} · ${Math.round(s.tempoTotal / 60)} min · média ${Math.round(s.tempoTotal / s.total)}s por questão</div>
          </div>
          <span class="chip ${s.taxa >= meta ? 'ok' : s.taxa >= meta - 15 ? 'warn' : 'bad'} static">${s.taxa}%</span>
        </button>`).join('')
        : vazio('Nenhum simulado ainda', 'O simulado é o único jeito de treinar gestão de tempo no ritmo da FGV. Comece por um de 20 questões.')}
    </div>
  </div>`);

  let fracos = false;
  node.querySelector('[data-fracos]').addEventListener('click', e => {
    fracos = !fracos;
    e.currentTarget.setAttribute('aria-pressed', String(fracos));
  });
  node.querySelectorAll('[data-qtd]').forEach(b => b.addEventListener('click', () => {
    ir('simulados', { iniciar: Number(b.dataset.qtd), completo: !!b.dataset.completo, fracos });
  }));
  node.querySelectorAll('[data-ver]').forEach(b => b.addEventListener('click', () => ir('simulados', { resultado: b.dataset.ver })));

  return node;
}

/* ---------------- execução ---------------- */

function executar(ir, qtd, { completo = false, tarefaId = null, fracos = false } = {}) {
  const qs = S.montarSimulado(qtd, { completo, apenasFracos: fracos });
  if (!qs.length) { toast('Não há questões suficientes no banco.'); return el('<div class="card">Banco de questões vazio.</div>'); }

  let i = 0;
  const respostas = new Array(qs.length).fill(null);
  const tempos = new Array(qs.length).fill(0);
  const marcadas = new Set();
  let restante = qs.length * SEG_POR_QUESTAO;
  const t0 = Date.now();
  let tick, atual = null, encerrado = false;

  const node = el(`<div class="stack">
    <div class="card" style="position:sticky;top:0;z-index:20">
      <div class="row">
        <div>
          <span class="tag">${completo ? 'Simulado completo' : 'Simulado'}</span>
          <h2 data-cont>Questão 1 de ${qs.length}</h2>
        </div>
        <span class="spacer"></span>
        <span class="chip static timer" data-relogio style="font-size:1.05rem">${hhmm(restante)}</span>
        <button class="btn btn-ghost" data-entregar>Entregar</button>
      </div>
      <div class="progress brand" style="margin-top:10px"><i data-prog style="--p:0"></i></div>
      <div class="scroll-x" style="margin-top:12px">
        <div class="row" style="flex-wrap:nowrap" data-nav></div>
      </div>
    </div>
    <div data-slot></div>
  </div>`);

  const slot = node.querySelector('[data-slot]');
  const nav = node.querySelector('[data-nav]');
  const relogio = node.querySelector('[data-relogio]');

  function pintarNav() {
    nav.innerHTML = qs.map((q, idx) => {
      const r = respostas[idx];
      const cls = idx === i ? 'on' : r ? 'ok' : marcadas.has(q.id) ? 'warn' : '';
      return `<button class="chip ${cls}" data-n="${idx}" style="min-width:42px;justify-content:center">${idx + 1}${marcadas.has(q.id) ? '•' : ''}</button>`;
    }).join('');
    nav.querySelectorAll('[data-n]').forEach(b => b.addEventListener('click', () => { i = Number(b.dataset.n); render(); }));
  }

  function render() {
    atual?.destruir();
    slot.innerHTML = '';
    const q = qs[i];
    const tIni = Date.now();
    atual = questaoCard(q, {
      modo: 'prova', index: i, total: qs.length, cronometro: false, mostrarPosicao: false,
      respostaInicial: respostas[i],
      marcada: marcadas.has(q.id),
      onMarcar: on => { on ? marcadas.add(q.id) : marcadas.delete(q.id); pintarNav(); },
      onResponder: (escolha) => {
        respostas[i] = escolha;
        tempos[i] += Math.round((Date.now() - tIni) / 1000);
      },
      onAnterior: i > 0 ? () => { i--; render(); } : null,
      onProxima: () => { if (i < qs.length - 1) { i++; render(); } else entregar(); },
      rotuloProxima: i === qs.length - 1 ? 'Entregar simulado' : null
    });
    slot.appendChild(atual.node);
    node.querySelector('[data-cont]').textContent = `Questão ${i + 1} de ${qs.length}`;
    node.querySelector('[data-prog]').style.setProperty('--p', respostas.filter(Boolean).length / qs.length);
    pintarNav();
    window.scrollTo({ top: 0 });
  }

  tick = setInterval(() => {
    restante--;
    relogio.textContent = hhmm(Math.max(0, restante));
    relogio.classList.toggle('low', restante < 300);
    if (restante <= 0) { toast('Tempo esgotado. Simulado entregue.'); entregar(); }
  }, 1000);

  async function entregar(forcado = false) {
    if (encerrado) return;
    const naoRespondidas = respostas.filter(r => !r).length;
    if (!forcado && naoRespondidas && restante > 0) {
      const ok = await confirmar('Entregar simulado',
        `${naoRespondidas} ${naoRespondidas === 1 ? 'questão ficou' : 'questões ficaram'} sem resposta. Entregar assim mesmo?`,
        { okLabel: 'Entregar' });
      if (!ok) return;
    }
    encerrado = true;
    clearInterval(tick);
    atual?.destruir();

    const detalhes = qs.map((q, idx) => ({
      qid: q.id, escolha: respostas[idx] || null,
      correta: respostas[idx] === q.correta,
      seg: tempos[idx] || 0,
      disciplinaId: q.disciplinaId, assunto: q.assunto
    }));
    detalhes.forEach(d => {
      if (d.escolha) S.registrarResposta({ qid: d.qid, escolha: d.escolha, segundos: d.seg, modo: 'prova' });
    });

    const acertos = detalhes.filter(d => d.correta).length;
    const porDisc = {};
    for (const d of detalhes) {
      porDisc[d.disciplinaId] = porDisc[d.disciplinaId] || { id: d.disciplinaId, nome: S.nomeDisciplina(d.disciplinaId), total: 0, acertos: 0, seg: 0 };
      porDisc[d.disciplinaId].total++;
      if (d.correta) porDisc[d.disciplinaId].acertos++;
      porDisc[d.disciplinaId].seg += d.seg;
    }
    const pont = S.pontuar(detalhes);
    const sim = {
      id: S.uid('s'), data: S.hoje(), total: qs.length, acertos,
      taxa: Math.round((acertos / qs.length) * 100),
      tempoTotal: Math.round((Date.now() - t0) / 1000),
      completo, pontuacao: pont, aprovado: completo && pont.aprovado,
      porDisciplina: Object.values(porDisc), respostas: detalhes
    };
    S.salvarSimulado(sim);
    if (tarefaId) S.concluirTarefa(tarefaId, true);
    ir('simulados', { resultado: sim.id });
  }

  node.querySelector('[data-entregar]').addEventListener('click', () => entregar());
  render();

  const wrapped = node;
  wrapped.__destruir = () => { clearInterval(tick); atual?.destruir(); };
  return wrapped;
}

/* ---------------- resultado ---------------- */

function resultado(ir, sim) {
  if (!sim) { toast('Simulado não encontrado.'); return el('<div class="card">Simulado não encontrado.</div>'); }
  const meta = S.state.data.perfil.metaAcerto || 70;
  const anterior = S.state.data.simulados[S.state.data.simulados.findIndex(s => s.id === sim.id) - 1];
  const delta = anterior ? sim.taxa - anterior.taxa : null;
  const discs = [...sim.porDisciplina].map(d => ({ ...d, taxa: d.total ? Math.round((d.acertos / d.total) * 100) : 0 }))
    .sort((a, b) => a.taxa - b.taxa);
  const erradas = (sim.respostas || []).filter(r => !r.correta);
  const topicosRuins = [...new Set(erradas.map(r => S.questao(r.qid)?.assunto).filter(Boolean))].slice(0, 6);
  const lentas = (sim.respostas || []).filter(r => r.seg > SEG_POR_QUESTAO).length;

  const node = el(`
  <div class="stack">
    <div class="card center">
      <span class="tag">${sim.completo ? 'Simulado completo' : 'Simulado'} · ${S.dataExtenso(sim.data)}</span>
      <div style="display:flex;justify-content:center;margin:14px 0">
        ${anel(sim.taxa, { tamanho: 150, cor: corTaxa(sim.taxa), sub: `${sim.acertos} de ${sim.total}` })}
      </div>
      <h1>${sim.taxa >= meta ? 'Meta atingida' : `Faltaram ${meta - sim.taxa} pontos percentuais para a meta`}</h1>
      ${sim.pontuacao ? `<div class="row" style="justify-content:center;margin:10px 0">
        <span class="chip ${sim.pontuacao.aprovado ? 'ok' : 'bad'} static">
          ${sim.pontuacao.total} de ${sim.pontuacao.maximo} pontos ·
          Módulo II: ${sim.pontuacao.modulo2}/${sim.pontuacao.maximoModulo2} ·
          ${sim.pontuacao.aprovado ? 'acima do corte' : 'abaixo do corte'}
        </span>
      </div>` : ''}
      <p class="muted">
        ${sim.tempoTotal < 60 ? `${sim.tempoTotal} segundos` : `${Math.round(sim.tempoTotal / 60)} minutos`} · ${Math.round(sim.tempoTotal / sim.total)}s por questão
        ${delta !== null ? ` · <b style="color:${delta >= 0 ? 'var(--ok)' : 'var(--bad)'}">${delta >= 0 ? '+' : ''}${delta} pontos</b> em relação ao anterior` : ''}
      </p>
    </div>

    <div class="grid grid-4">
      ${stat('Pontos', sim.pontuacao ? `${sim.pontuacao.total}` : `${sim.acertos}`,
        sim.pontuacao ? `de ${sim.pontuacao.maximo} · Módulo II vale 2` : `${sim.acertos}/${sim.total} acertos`,
        corTaxa(sim.taxa))}
      ${stat('Tempo médio', `${Math.round(sim.tempoTotal / sim.total)}s`, `alvo: ${SEG_POR_QUESTAO}s`)}
      ${stat('Acima do tempo', lentas, 'questões lentas', lentas > sim.total / 3 ? 'var(--warn)' : null)}
      ${stat('Em branco', (sim.respostas || []).filter(r => !r.escolha).length, 'sem resposta')}
    </div>

    <div class="card">
      <div class="card-head"><h2>Desempenho por disciplina</h2></div>
      ${barras(discs.map(d => ({ nome: `${d.nome} (${d.acertos}/${d.total})`, valor: d.taxa, cor: corTaxa(d.taxa) })))}
    </div>

    <div class="card">
      <div class="card-head"><h2>O que revisar antes do próximo simulado</h2></div>
      ${topicosRuins.length ? `
        <ol class="muted" style="padding-left:20px;margin:0">
          ${topicosRuins.map(t => `<li style="margin-bottom:8px"><b>${esc(t)}</b></li>`).join('')}
        </ol>
        <div class="row" style="margin-top:14px">
          <button class="btn btn-primary" data-treinar>${icon('play', 18)} Treinar esses assuntos</button>
          <button class="btn btn-ghost" data-caderno>Ver caderno de erros</button>
        </div>`
        : '<div class="callout ok">Nenhum erro. Suba a dificuldade e aumente o volume de questões por sessão.</div>'}
      ${lentas > sim.total / 3 ? `<div class="callout fgv" style="margin-top:14px">
        <div class="callout-title">Gestão de tempo</div>
        <div class="small">${lentas} questões passaram de ${SEG_POR_QUESTAO}s. Na FGV, enunciado longo é regra: treine leitura em duas passadas — comando primeiro, contexto depois.</div>
      </div>` : ''}
    </div>

    ${erradas.length ? `
    <div class="card">
      <div class="card-head"><h2>Suas ${erradas.length} ${erradas.length === 1 ? 'questão errada' : 'questões erradas'}</h2></div>
      ${erradas.map(r => {
        const q = S.questao(r.qid); if (!q) return '';
        return `<div class="task" data-tipo="revisao" style="cursor:pointer" data-exp="${q.id}">
          <span class="task-bar"></span>
          <div style="flex:1;min-width:0">
            <div class="task-title">${esc(q.comando.slice(0, 88))}${q.comando.length > 88 ? '…' : ''}</div>
            <div class="task-sub">${esc(q.assunto || '')} · marcou ${esc(r.escolha || '—')} · correta ${q.correta}</div>
          </div>
          <span class="chip static">ver</span>
        </div>`;
      }).join('')}
      <button class="btn btn-accent btn-block" style="margin-top:12px" data-add-todas>
        ${icon('mais', 18)} Adicionar todas ao caderno de erros
      </button>
    </div>` : ''}

    <div class="row">
      <button class="btn btn-ghost" data-voltar>Voltar aos simulados</button>
      <button class="btn btn-primary spacer" data-novo>Fazer outro simulado</button>
    </div>
  </div>`);

  node.querySelector('[data-voltar]').addEventListener('click', () => ir('simulados'));
  node.querySelector('[data-novo]').addEventListener('click', () => ir('simulados'));
  node.querySelector('[data-caderno]')?.addEventListener('click', () => ir('erros'));
  node.querySelector('[data-treinar]')?.addEventListener('click', () => {
    const lista = S.questoes().filter(q => topicosRuins.includes(q.assunto));
    ir('questoes', { sessao: true, modo: 'treino', lista: S.embaralhar(lista) });
  });
  node.querySelectorAll('[data-exp]').forEach(b => b.addEventListener('click', () => explicar(S.questao(b.dataset.exp))));
  node.querySelector('[data-add-todas]')?.addEventListener('click', e => {
    erradas.forEach(r => S.adicionarErro({ qid: r.qid, escolha: r.escolha, motivo: '', comentario: '' }));
    toast(`${erradas.length} ${erradas.length === 1 ? 'questão adicionada' : 'questões adicionadas'} ao caderno.`);
    e.currentTarget.disabled = true;
  });

  return node;
}
