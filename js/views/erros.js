/* views/erros.js — caderno de erros e revisão espaçada. */

import * as S from '../store.js';
import { el, esc, icon, toast, stat, barras, corTaxa, vazio, sheet, confirmar } from '../ui.js';
import { sessao } from './questoes.js';
import { MOTIVOS_ERRO, INTERVALOS_REVISAO } from '../data.js';

export function viewErros(ir, params = {}) {
  const erros = S.state.data.erros.filter(e => !e.dominado);
  const pendentes = S.revisoesPendentes();

  if (params.revisar) {
    const alvo = params.qids
      ? erros.filter(e => params.qids.includes(e.qid))
      : (pendentes.length ? pendentes : erros);
    const lista = alvo.map(e => S.questao(e.qid)).filter(Boolean);
    if (!lista.length) { toast('Nenhuma revisão pendente agora.'); }
    else return sessao(ir, S.embaralhar(lista), {
      modo: 'revisao', tarefaId: params.tarefaId, titulo: 'Revisão do caderno de erros'
    });
  }

  const porDisc = agrupar(erros);
  const dominados = S.state.data.erros.filter(e => e.dominado).length;
  const motivos = contarMotivos(erros);
  const topAssuntos = assuntosCriticos(erros);

  const node = el(`
  <div class="stack">
    <div class="grid grid-4">
      ${stat('Erros ativos', erros.length, 'no caderno')}
      ${stat('Revisões hoje', pendentes.length, pendentes.length ? 'vencidas ou do dia' : 'nada pendente', pendentes.length ? 'var(--bad)' : null)}
      ${stat('Dominados', dominados, 'ciclo completo de 30 dias', 'var(--ok)')}
      ${stat('Assuntos', Object.keys(porDisc).length, 'disciplinas envolvidas')}
    </div>

    ${pendentes.length ? `
    <div class="card" style="border-color:var(--bad)">
      <div class="row">
        <div style="flex:1;min-width:220px">
          <h2>${pendentes.length} ${pendentes.length === 1 ? 'questão para revisar' : 'questões para revisar'}</h2>
          <p class="small muted" style="margin:4px 0 0">Ciclo: 24 horas, 7, 15 e 30 dias. Acertar avança a etapa; errar reinicia o ciclo.</p>
        </div>
        <button class="btn btn-danger btn-lg" data-revisar>${icon('play', 20)} Revisar agora</button>
      </div>
    </div>` : erros.length ? `
    <div class="card">
      <div class="row">
        <div style="flex:1;min-width:220px">
          <h2>Nenhuma revisão vencida</h2>
          <p class="small muted" style="margin:4px 0 0">Próxima revisão em ${proximaEm(erros)}. Você pode antecipar se quiser.</p>
        </div>
        <button class="btn btn-ghost" data-revisar-tudo>Revisar mesmo assim</button>
      </div>
    </div>` : ''}

    ${erros.length ? `
    <div class="grid grid-2">
      <div class="card">
        <div class="card-head"><h2>Por que você erra</h2></div>
        ${barras(motivos.map(m => ({ nome: m.nome, valor: m.qtd, cor: 'var(--warn)' })), { max: Math.max(1, ...motivos.map(m => m.qtd)), sufixo: '' })}
        ${motivos[0] ? `<div class="callout fgv" style="margin-top:12px">
          <div class="callout-title">Recomendação</div>
          <div class="small">${esc(MOTIVOS_ERRO.find(m => m.nome === motivos[0].nome)?.dica || '')}</div>
        </div>` : ''}
      </div>
      <div class="card">
        <div class="card-head"><h2>Assuntos que mais precisam de revisão</h2></div>
        ${topAssuntos.length ? barras(topAssuntos.map(a => ({ nome: a.nome, valor: a.qtd, cor: 'var(--bad)' })), { max: Math.max(1, ...topAssuntos.map(a => a.qtd)), sufixo: '' })
          : '<p class="dim small">Sem concentração de erros ainda.</p>'}
      </div>
    </div>` : ''}

    <div data-lista>
      ${erros.length ? Object.entries(porDisc).map(([dId, itens]) => `
        <div class="card">
          <div class="card-head">
            <h2 style="color:${S.corDisciplina(dId)}">${esc(S.nomeDisciplina(dId))}</h2>
            <span class="chip static spacer">${itens.length}</span>
            <button class="btn btn-quiet" data-revisar-disc="${dId}">Revisar esta disciplina</button>
          </div>
          ${itens.map(htmlErro).join('')}
        </div>`).join('')
        : vazio('Caderno vazio', 'Ao errar uma questão, use o botão "Adicionar ao caderno de erros". O app agenda as revisões automaticamente.',
          `<button class="btn btn-primary" data-ir-questoes style="margin-top:12px">Ir ao banco de questões</button>`)}
    </div>
  </div>`);

  node.querySelector('[data-revisar]')?.addEventListener('click', () => ir('erros', { revisar: true }));
  node.querySelector('[data-revisar-tudo]')?.addEventListener('click', () => ir('erros', { revisar: true, qids: erros.map(e => e.qid) }));
  node.querySelector('[data-ir-questoes]')?.addEventListener('click', () => ir('questoes'));
  node.querySelectorAll('[data-revisar-disc]').forEach(b => b.addEventListener('click', () => {
    const qids = erros.filter(e => S.questao(e.qid)?.disciplinaId === b.dataset.revisarDisc).map(e => e.qid);
    ir('erros', { revisar: true, qids });
  }));
  node.querySelectorAll('[data-abrir-erro]').forEach(b => b.addEventListener('click', () => abrirErro(b.dataset.abrirErro, ir)));

  return node;
}

function htmlErro(e) {
  const q = S.questao(e.qid);
  if (!q) return '';
  const prox = S.proximaRevisao(e);
  const dias = prox ? S.diffDias(S.hoje(), prox) : null;
  const venceu = dias !== null && dias <= 0;
  const motivo = MOTIVOS_ERRO.find(m => m.id === e.motivo);
  return `<button class="task" data-abrir-erro="${e.id}" style="width:100%;text-align:left;cursor:pointer" data-tipo="revisao">
    <span class="task-bar"></span>
    <div style="flex:1;min-width:0">
      <div class="task-title">${esc(q.comando.slice(0, 90))}${q.comando.length > 90 ? '…' : ''}</div>
      <div class="task-sub">
        ${esc(q.assunto || S.rotuloDisciplina(q.disciplinaId))} · marcou <b>${esc(e.escolha || '—')}</b>, correta <b>${q.correta}</b>
        ${motivo ? ` · ${esc(motivo.nome)}` : ''}
      </div>
    </div>
    <span class="chip ${venceu ? 'bad' : 'static'}">
      ${prox === null ? 'Concluído' : venceu ? 'Revisar' : `em ${dias}d`}
    </span>
    <span class="chip static xsmall">etapa ${Math.min((e.etapa || 0) + 1, INTERVALOS_REVISAO.length)}/${INTERVALOS_REVISAO.length}</span>
  </button>`;
}

function abrirErro(id, ir) {
  const e = S.state.data.erros.find(x => x.id === id);
  const q = e && S.questao(e.qid);
  if (!q) return;
  const prox = S.proximaRevisao(e);
  const s = sheet('Erro registrado', `
    <div class="stack">
      <div class="row">
        <span class="chip static" style="color:${S.corDisciplina(q.disciplinaId)}">${esc(S.nomeDisciplina(q.disciplinaId))}</span>
        <span class="chip static">${esc(q.assunto || '')}</span>
        <span class="chip static">Registrado em ${S.dataExtenso(e.criadoEm.slice(0, 10))}</span>
      </div>
      <div class="q-stem">
        ${q.contexto ? `<div class="contexto">${esc(q.contexto)}</div>` : ''}
        <div class="comando">${esc(q.comando)}</div>
      </div>
      <div class="grid grid-2">
        <div class="callout bad"><div class="callout-title">Você marcou</div><div><b>${esc(e.escolha || '—')}</b> ${esc(q.alternativas.find(a => a.k === e.escolha)?.texto || '')}</div></div>
        <div class="callout ok"><div class="callout-title">Correta</div><div><b>${q.correta}</b> ${esc(q.alternativas.find(a => a.k === q.correta)?.texto || '')}</div></div>
      </div>
      <div class="callout info"><div class="callout-title">Justificativa</div><div>${esc(q.justificativa)}</div></div>
      ${q.dicaFGV ? `<div class="callout fgv"><div class="callout-title">Padrão da banca</div><div>${esc(q.dicaFGV)}</div></div>` : ''}

      <div class="field">
        <label>Motivo do erro</label>
        <div class="row" data-motivos>
          ${MOTIVOS_ERRO.map(m => `<button class="chip" data-m="${m.id}" aria-pressed="${e.motivo === m.id}">${esc(m.nome)}</button>`).join('')}
        </div>
      </div>
      <div class="field">
        <label for="com">Meu comentário</label>
        <textarea class="input" id="com" placeholder="O que eu preciso lembrar na próxima vez?">${esc(e.comentario || '')}</textarea>
      </div>
      <div class="callout">
        <div class="callout-title">Agenda de revisão</div>
        <div class="small">
          Etapa atual: ${Math.min((e.etapa || 0) + 1, INTERVALOS_REVISAO.length)} de ${INTERVALOS_REVISAO.length}
          (${INTERVALOS_REVISAO.map((d, i) => `<span ${i === (e.etapa || 0) ? 'class="b"' : ''}>${d}d</span>`).join(' · ')})<br>
          Próxima revisão: <b>${prox ? S.dataExtenso(prox) : 'ciclo concluído'}</b>
        </div>
      </div>
    </div>`, {
    acoes: `<button class="btn btn-danger" data-remover>${icon('lixo', 16)} Remover</button>
            <button class="btn btn-ghost" data-dominado>Marcar como dominado</button>
            <button class="btn btn-primary spacer" data-refazer>${icon('play', 18)} Refazer agora</button>`
  });

  s.node.querySelectorAll('[data-m]').forEach(b => b.addEventListener('click', () => {
    e.motivo = b.dataset.m;
    s.node.querySelectorAll('[data-m]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    S.persist();
  }));
  s.node.querySelector('#com').addEventListener('change', ev => { e.comentario = ev.target.value; S.persist(); });
  s.node.querySelector('[data-remover]').addEventListener('click', async () => {
    if (!await confirmar('Remover do caderno', 'A questão sai do caderno e as revisões agendadas são canceladas.', { okLabel: 'Remover', perigo: true })) return;
    S.removerErro(e.id); s.close(); toast('Removida do caderno.'); ir('erros');
  });
  s.node.querySelector('[data-dominado]').addEventListener('click', () => {
    e.dominado = true; S.sincronizarRevisoes(); S.persist(); s.close(); toast('Marcada como dominada.'); ir('erros');
  });
  s.node.querySelector('[data-refazer]').addEventListener('click', () => {
    s.close(); ir('erros', { revisar: true, qids: [e.qid] });
  });
}

function agrupar(erros) {
  const o = {};
  for (const e of erros) {
    const q = S.questao(e.qid); if (!q) continue;
    (o[q.disciplinaId] = o[q.disciplinaId] || []).push(e);
  }
  for (const k of Object.keys(o)) {
    o[k].sort((a, b) => {
      const pa = S.proximaRevisao(a) || '9999-12-31';
      const pb = S.proximaRevisao(b) || '9999-12-31';
      return pa.localeCompare(pb);
    });
  }
  return o;
}

function contarMotivos(erros) {
  const c = {};
  for (const e of erros) {
    const nome = MOTIVOS_ERRO.find(m => m.id === e.motivo)?.nome || 'Não classificado';
    c[nome] = (c[nome] || 0) + 1;
  }
  return Object.entries(c).map(([nome, qtd]) => ({ nome, qtd })).sort((a, b) => b.qtd - a.qtd);
}

function assuntosCriticos(erros) {
  const c = {};
  for (const e of erros) {
    const q = S.questao(e.qid); if (!q) continue;
    const nome = q.assunto || S.rotuloDisciplina(q.disciplinaId);
    c[nome] = (c[nome] || 0) + 1;
  }
  return Object.entries(c).map(([nome, qtd]) => ({ nome, qtd })).sort((a, b) => b.qtd - a.qtd).slice(0, 6);
}

function proximaEm(erros) {
  const datas = erros.map(S.proximaRevisao).filter(Boolean).sort();
  if (!datas.length) return '—';
  const d = S.diffDias(S.hoje(), datas[0]);
  return d <= 0 ? 'hoje' : d === 1 ? 'amanhã' : `${d} dias`;
}
