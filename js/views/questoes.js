/* views/questoes.js — banco de questões: filtros, modo treino e sessão de resolução. */

import * as S from '../store.js';
import { el, esc, icon, toast, stat, corTaxa, barras, vazio } from '../ui.js';
import { questaoCard } from '../questao.js';
import { DIFICULDADES } from '../data.js';
import { ehDemo, DEMO_LIMITE } from '../licenca.js';

const filtros = {
  disciplinaId: '', assunto: '', dificuldade: '',
  apenasErradas: false, apenasFavoritas: false, naoRespondidas: false, busca: ''
};

export function viewQuestoes(ir, params = {}) {
  if (params.disciplinaId !== undefined) filtros.disciplinaId = params.disciplinaId || '';
  if (params.assunto !== undefined) filtros.assunto = params.assunto || '';

  if (params.auto || params.sessao) {
    const doTopico = params.topicoId ? S.questoesDoTopico(S.topico(params.topicoId)) : null;
    let lista = params.lista || S.embaralhar(doTopico?.length ? doTopico : S.filtrarQuestoes(filtros));
    if (ehDemo()) lista = lista.slice(0, DEMO_LIMITE.questoes);
    if (lista.length) return sessao(ir, lista, {
      qtd: params.qtd || lista.length, tarefaId: params.tarefaId, modo: params.modo || 'treino'
    });
    toast('Nenhuma questão encontrada com esses filtros.');
  }

  const todas = S.filtrarQuestoes(filtros);
  const lista = ehDemo() ? todas.slice(0, DEMO_LIMITE.questoes) : todas;
  const ds = S.disciplinas();
  const assuntos = S.assuntosDisponiveis(filtros.disciplinaId);
  const porDisc = S.porDisciplina().filter(d => d.total > 0).sort((a, b) => (a.taxa ?? 101) - (b.taxa ?? 101));

  const node = el(`
  <div class="stack">
    <div class="card">
      <div class="card-head"><h2>Filtros</h2>
        <span class="chip static spacer">${lista.length} ${lista.length === 1 ? 'questão' : 'questões'}</span>
        ${ehDemo() ? `<span class="chip warn static">demonstração: ${DEMO_LIMITE.questoes} de ${todas.length}</span>` : ''}
      </div>
      <div class="grid grid-3">
        <div class="field"><label for="f-disc">Disciplina</label>
          <select class="input" id="f-disc">
            <option value="">Todas</option>
            ${ds.map(d => `<option value="${d.id}" ${filtros.disciplinaId === d.id ? 'selected' : ''}>${esc(d.nome)}</option>`).join('')}
          </select></div>
        <div class="field"><label for="f-top">Assunto</label>
          <select class="input" id="f-top">
            <option value="">Todos</option>
            ${assuntos.map(a => `<option value="${esc(a)}" ${filtros.assunto === a ? 'selected' : ''}>${esc(a)}</option>`).join('')}
          </select></div>
        <div class="field"><label for="f-dif">Dificuldade</label>
          <select class="input" id="f-dif">
            <option value="">Todas</option>
            ${DIFICULDADES.map(d => `<option value="${d.id}" ${filtros.dificuldade === d.id ? 'selected' : ''}>${esc(d.nome)}</option>`).join('')}
          </select></div>
      </div>
      <div class="field" style="margin-top:12px"><label for="f-busca">Buscar no enunciado</label>
        <input class="input" id="f-busca" value="${esc(filtros.busca)}" placeholder="Ex.: conselho de saúde, crase, mortalidade infantil"></div>
      <div class="row" style="margin-top:12px">
        <button class="chip" data-t="apenasErradas" aria-pressed="${filtros.apenasErradas}">Só erradas</button>
        <button class="chip" data-t="apenasFavoritas" aria-pressed="${filtros.apenasFavoritas}">Favoritas</button>
        <button class="chip" data-t="naoRespondidas" aria-pressed="${filtros.naoRespondidas}">Inéditas para mim</button>
        <button class="btn btn-quiet spacer" data-limpar>Limpar filtros</button>
      </div>
    </div>

    <div class="card">
      <div class="card-head"><h2>Como você quer resolver?</h2></div>
      <div class="grid grid-3">
        <button class="btn btn-primary btn-lg" data-modo="treino" ${lista.length ? '' : 'disabled'}>
          ${icon('play', 20)} Modo treino
        </button>
        <button class="btn btn-ghost btn-lg" data-modo="prova" ${lista.length ? '' : 'disabled'}>
          ${icon('clock', 20)} Modo prova
        </button>
        <button class="btn btn-ghost btn-lg" data-modo="revisao" ${S.revisoesPendentes().length ? '' : 'disabled'}>
          ${icon('erros', 20)} Revisão de erros
        </button>
      </div>
      <p class="xsmall dim" style="margin:12px 0 0">
        Treino: correção e comentário a cada questão. Prova: sem gabarito até o final, com cronômetro.
        Revisão: só o que está no caderno de erros e venceu o intervalo.
      </p>
    </div>

    <div class="grid grid-4">
      ${stat('Disponíveis', lista.length, 'com os filtros atuais')}
      ${stat('Respondidas', S.state.data.respostas.length, 'no total')}
      ${stat('No caderno', S.state.data.erros.filter(e => !e.dominado).length, 'erros ativos')}
      ${stat('Favoritas', S.state.data.favoritos.length, 'marcadas')}
    </div>

    <div class="card">
      <div class="card-head"><h2>Seu desempenho por disciplina</h2>
        <span class="chip static spacer">peso na nota: Módulo II vale o dobro</span>
      </div>
      ${porDisc.length ? barras(porDisc.map(d => ({ nome: d.nome, valor: d.taxa, cor: corTaxa(d.taxa) })))
        : '<p class="dim small">Sem histórico ainda. Resolva um bloco de questões para começar a medir.</p>'}
    </div>

    <div class="card">
      <div class="card-head"><h2>Questões</h2></div>
      ${lista.length ? `<div class="stack">${lista.slice(0, 25).map(q => cardMini(q)).join('')}</div>
        ${lista.length > 25 ? `<p class="xsmall dim center" style="margin-top:12px">Mostrando 25 de ${lista.length}. Use os filtros para refinar.</p>` : ''}`
        : vazio('Nenhuma questão encontrada', 'Ajuste os filtros ou cadastre novas questões na área de administração.')}
    </div>
  </div>`);

  node.querySelector('#f-disc').addEventListener('change', e => {
    filtros.disciplinaId = e.target.value; filtros.assunto = ''; ir('questoes');
  });
  node.querySelector('#f-top').addEventListener('change', e => { filtros.assunto = e.target.value; ir('questoes'); });
  node.querySelector('#f-dif').addEventListener('change', e => { filtros.dificuldade = e.target.value; ir('questoes'); });
  let deb;
  node.querySelector('#f-busca').addEventListener('input', e => {
    clearTimeout(deb);
    const v = e.target.value;
    deb = setTimeout(() => { filtros.busca = v; ir('questoes'); }, 400);
  });
  node.querySelectorAll('[data-t]').forEach(b => b.addEventListener('click', () => {
    filtros[b.dataset.t] = !filtros[b.dataset.t]; ir('questoes');
  }));
  node.querySelector('[data-limpar]').addEventListener('click', () => {
    Object.assign(filtros, { disciplinaId: '', assunto: '', dificuldade: '', apenasErradas: false, apenasFavoritas: false, naoRespondidas: false, busca: '' });
    ir('questoes');
  });
  node.querySelectorAll('[data-modo]').forEach(b => b.addEventListener('click', () => {
    const m = b.dataset.modo;
    if (m === 'revisao') { ir('erros', { revisar: true }); return; }
    ir('questoes', { sessao: true, modo: m, lista: S.embaralhar(lista) });
  }));
  node.querySelectorAll('[data-abrir]').forEach(b => b.addEventListener('click', () => {
    const q = S.questao(b.dataset.abrir);
    ir('questoes', { sessao: true, modo: 'treino', lista: [q] });
  }));

  return node;
}

function cardMini(q) {
  const r = [...S.state.data.respostas].reverse().find(r => r.qid === q.id);
  const noCaderno = S.state.data.erros.some(e => e.qid === q.id && !e.dominado);
  return `<button class="task" data-abrir="${q.id}" style="width:100%;cursor:pointer;text-align:left" data-tipo="questoes">
    <span class="task-bar" style="background:${S.corDisciplina(q.disciplinaId)}"></span>
    <div style="flex:1;min-width:0">
      <div class="task-title">${esc(q.comando.slice(0, 96))}${q.comando.length > 96 ? '…' : ''}</div>
      <div class="task-sub">${esc(S.rotuloDisciplina(q.disciplinaId))} · ${esc(q.assunto || '')} · ${esc(q.dificuldade)}</div>
    </div>
    ${r ? `<span class="chip ${r.correta ? 'ok' : 'bad'} static">${r.correta ? 'Acertou' : 'Errou'}</span>` : ''}
    ${noCaderno ? `<span class="chip warn static">Caderno</span>` : ''}
  </button>`;
}

/* ---------------- sessão de resolução ---------------- */

export function sessao(ir, lista, { qtd = 999, tarefaId = null, modo = 'treino', titulo = 'Sessão de questões' } = {}) {
  const qs = lista.slice(0, qtd);
  let i = 0;
  const respostas = new Array(qs.length).fill(null);
  const marcadas = new Set();
  const t0 = Date.now();

  const node = el(`<div class="stack">
    <div class="card">
      <div class="row">
        <div>
          <span class="tag">${modo === 'prova' ? 'Modo prova' : modo === 'revisao' ? 'Revisão de erros' : 'Modo treino'}</span>
          <h2 data-titulo>${esc(titulo)}</h2>
        </div>
        <span class="spacer"></span>
        <span class="chip static" data-contador>1 / ${qs.length}</span>
        <button class="btn btn-ghost" data-sair>Encerrar</button>
      </div>
      <div class="progress brand" style="margin-top:12px"><i data-prog style="--p:${1 / qs.length}"></i></div>
    </div>
    <div data-slot></div>
  </div>`);

  const slot = node.querySelector('[data-slot]');
  let atual = null;

  function render() {
    atual?.destruir();
    slot.innerHTML = '';
    if (i >= qs.length) return finalizar();
    const q = qs[i];
    atual = questaoCard(q, {
      modo, index: i, total: qs.length, mostrarPosicao: false,
      respostaInicial: respostas[i]?.escolha || null,
      marcada: marcadas.has(q.id),
      onMarcar: on => on ? marcadas.add(q.id) : marcadas.delete(q.id),
      onResponder: (escolha, seg, correta) => {
        respostas[i] = { qid: q.id, escolha, seg, correta: correta ?? (escolha === q.correta) };
        if (modo === 'prova') S.registrarResposta({ qid: q.id, escolha, segundos: seg, modo: 'prova' });
      },
      onAnterior: i > 0 ? () => { i--; render(); } : null,
      onProxima: () => { i++; render(); },
      rotuloProxima: i === qs.length - 1 ? 'Ver resultado' : null
    });
    slot.appendChild(atual.node);
    node.querySelector('[data-contador]').textContent = `${i + 1} / ${qs.length}`;
    node.querySelector('[data-prog]').style.setProperty('--p', (i + 1) / qs.length);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function finalizar() {
    atual?.destruir();
    const feitas = respostas.filter(Boolean);
    const acertos = feitas.filter(r => r.correta).length;
    const taxa = feitas.length ? Math.round((acertos / feitas.length) * 100) : 0;
    const min = Math.round((Date.now() - t0) / 60000);
    if (tarefaId) S.concluirTarefa(tarefaId, true);

    const erradas = feitas.filter(r => !r.correta);
    slot.innerHTML = `
      <div class="card center">
        <h2>Sessão concluída</h2>
        <p class="muted">${feitas.length} ${feitas.length === 1 ? 'questão respondida' : 'questões respondidas'} em ${min} min.</p>
        <div class="grid grid-3" style="margin-top:16px">
          ${stat('Acertos', `${acertos}/${feitas.length}`, '', corTaxa(taxa))}
          ${stat('Taxa', `${taxa}%`, '', corTaxa(taxa))}
          ${stat('Tempo médio', feitas.length ? `${Math.round(feitas.reduce((a, r) => a + r.seg, 0) / feitas.length)}s` : '—')}
        </div>
        ${erradas.length ? `<div class="callout bad" style="margin-top:16px;text-align:left">
          <div class="callout-title">Para revisar</div>
          <ul class="small" style="padding-left:18px;margin:0">
            ${[...new Set(erradas.map(r => S.questao(r.qid).assunto))].map(t => `<li>${esc(t)}</li>`).join('')}
          </ul>
        </div>` : '<div class="callout ok" style="margin-top:16px">Nenhum erro nesta sessão. Aumente a dificuldade no filtro.</div>'}
        <div class="row" style="margin-top:16px">
          <button class="btn btn-ghost" data-voltar>Voltar ao banco</button>
          <button class="btn btn-primary spacer" data-erros>Ir ao caderno de erros</button>
        </div>
      </div>`;
    slot.querySelector('[data-voltar]').addEventListener('click', () => ir('questoes'));
    slot.querySelector('[data-erros]').addEventListener('click', () => ir('erros'));
    node.querySelector('[data-contador]').textContent = `${feitas.length} / ${qs.length}`;
  }

  node.querySelector('[data-sair]').addEventListener('click', () => { atual?.destruir(); ir('questoes'); });
  render();
  return node;
}
