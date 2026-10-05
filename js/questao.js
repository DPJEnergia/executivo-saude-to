/* questao.js — componente de resolução de questão no padrão FGV.
 * Usado pelo Banco de Questões, pelo Caderno de Erros e pelos Simulados. */

import * as S from './store.js';
import { el, esc, icon, toast, sheet, hhmm } from './ui.js';
import { MOTIVOS_ERRO, DIFICULDADES } from './data.js';

const LABEL_DIF = id => DIFICULDADES.find(d => d.id === id)?.nome || '—';

/**
 * @param {object} q            questão
 * @param {object} opts
 *   modo: 'treino' | 'prova' | 'revisao'
 *   index, total                posição no conjunto
 *   respostaInicial             letra já marcada (modo prova, ao navegar)
 *   cronometro                  mostra tempo decorrido na questão
 *   onResponder(letra, seg)     chamado ao confirmar
 *   onProxima()                 botão avançar
 *   onAnterior()                botão voltar (modo prova)
 *   onMarcar(bool)              marcar para revisar (modo prova)
 *   marcada                     estado inicial do marcador
 *   rotuloProxima               texto do botão avançar
 */
export function questaoCard(q, opts = {}) {
  const modo = opts.modo || 'treino';
  const provaMode = modo === 'prova';
  const cronometro = opts.cronometro !== false;
  let escolha = opts.respostaInicial || null;
  let respondida = false;
  let inicio = Date.now();
  let tick = null;

  const favorita = S.state.data.favoritos.includes(q.id);
  const anotacao = S.state.data.anotacoes[q.id] || '';

  const node = el(`
  <div class="q-wrap">
    <div class="q-meta">
      ${opts.total && opts.mostrarPosicao !== false ? `<span class="chip static">${(opts.index ?? 0) + 1} / ${opts.total}</span>` : ''}
      <span class="chip static" style="color:${S.corDisciplina(q.disciplinaId)}">${esc(S.nomeDisciplina(q.disciplinaId))}</span>
      <span class="chip static">${esc(q.assunto || '')}</span>
      <span class="chip static">Módulo ${S.moduloDe(q.disciplinaId) === 2 ? 'II · 2 pontos' : 'I · 1 ponto'}</span>
      <span class="chip static">${esc(LABEL_DIF(q.dificuldade))}</span>
      ${modo === 'revisao' ? '<span class="chip warn static">Revisão de erro</span>' : ''}
      <span class="spacer"></span>
      ${cronometro ? `<span class="chip static timer" data-timer>00:00</span>` : ''}
      ${provaMode ? `<button class="chip" data-marcar aria-pressed="${!!opts.marcada}">${icon('bandeira', 15)} Marcar</button>` : ''}
      <button class="chip" data-fav aria-pressed="${favorita}">${icon('estrela', 15)} Favorita</button>
    </div>

    <div class="q-stem">
      ${q.contexto ? `<div class="contexto">${esc(q.contexto)}</div>` : ''}
      <div class="comando">${esc(q.comando)}</div>
    </div>

    <div class="alts" role="group" aria-label="Alternativas">
      ${q.alternativas.map(a => `
        <button class="alt" type="button" data-k="${a.k}" aria-pressed="${escolha === a.k}">
          <span class="key">${a.k}</span>
          <span class="txt">${esc(a.texto)}</span>
        </button>`).join('')}
    </div>

    <div class="row" style="margin-top:16px" data-acoes>
      ${opts.onAnterior ? `<button class="btn btn-ghost" data-ant>${icon('setaEsq', 18)} Anterior</button>` : ''}
      <button class="btn btn-primary spacer" data-confirmar ${escolha ? '' : 'disabled'}>
        ${provaMode ? 'Salvar e avançar' : 'Responder'} ${icon('seta', 18)}
      </button>
    </div>

    <div class="feedback hide" data-feedback></div>

    <details class="card" style="margin-top:16px">
      <summary class="b" style="cursor:pointer">Anotações e rascunho</summary>
      <div class="stack" style="margin-top:12px">
        <div class="field">
          <label for="anot-${q.id}">Minha anotação sobre esta questão</label>
          <textarea class="input" id="anot-${q.id}" data-anot placeholder="Ex.: confundi complementar com suplementar.">${esc(anotacao)}</textarea>
        </div>
        <div class="scratch">
          <canvas data-canvas></canvas>
          <div class="scratch-bar">
            <span class="xsmall dim">Rascunho livre — funciona com dedo e Apple Pencil.</span>
            <span class="spacer"></span>
            <button class="btn btn-quiet" data-limpar>${icon('lixo', 16)} Limpar</button>
          </div>
        </div>
      </div>
    </details>
  </div>`);

  const alts = [...node.querySelectorAll('.alt')];
  const btnConfirmar = node.querySelector('[data-confirmar]');
  const fb = node.querySelector('[data-feedback]');
  const elTimer = node.querySelector('[data-timer]');

  if (cronometro && elTimer) {
    tick = setInterval(() => {
      const seg = (Date.now() - inicio) / 1000;
      elTimer.textContent = hhmm(seg);
      elTimer.classList.toggle('low', q.tempoAlvo && seg > q.tempoAlvo);
    }, 500);
  }

  alts.forEach(b => b.addEventListener('click', () => {
    if (respondida && !provaMode) return;
    escolha = b.dataset.k;
    alts.forEach(x => x.setAttribute('aria-pressed', String(x.dataset.k === escolha)));
    btnConfirmar.disabled = false;
  }));

  node.querySelector('[data-fav]').addEventListener('click', e => {
    const on = S.alternarFavorito(q.id);
    e.currentTarget.setAttribute('aria-pressed', String(on));
    toast(on ? 'Questão adicionada aos favoritos.' : 'Removida dos favoritos.');
  });

  node.querySelector('[data-marcar]')?.addEventListener('click', e => {
    const on = e.currentTarget.getAttribute('aria-pressed') !== 'true';
    e.currentTarget.setAttribute('aria-pressed', String(on));
    opts.onMarcar?.(on);
  });

  node.querySelector('[data-ant]')?.addEventListener('click', () => { limpar(); opts.onAnterior?.(); });

  node.querySelector('[data-anot]').addEventListener('change', e => {
    S.state.data.anotacoes[q.id] = e.target.value;
    S.persist();
  });

  btnConfirmar.addEventListener('click', () => {
    if (!escolha) return;
    const seg = (Date.now() - inicio) / 1000;
    if (provaMode) { opts.onResponder?.(escolha, seg); limpar(); opts.onProxima?.(); return; }
    if (!respondida) { responder(seg); return; }
    limpar();
    opts.onProxima?.();
  });

  function responder(seg) {
    respondida = true;
    clearInterval(tick);
    const correta = escolha === q.correta;
    S.registrarResposta({ qid: q.id, escolha, segundos: seg, modo });
    opts.onResponder?.(escolha, seg, correta);

    alts.forEach(b => {
      b.classList.add('locked');
      const k = b.dataset.k;
      const alt = q.alternativas.find(a => a.k === k);
      if (k === q.correta) b.classList.add('correct');
      else if (k === escolha) b.classList.add('wrong');
      if (alt?.porqueErrada && k !== q.correta) {
        b.querySelector('.txt').insertAdjacentHTML('beforeend',
          `<span class="why"><b>Por que está errada:</b> ${esc(alt.porqueErrada)}</span>`);
      }
    });

    fb.classList.remove('hide');
    fb.innerHTML = `
      <div class="callout ${correta ? 'ok' : 'bad'}">
        <div class="callout-title">${correta ? 'Você acertou' : 'Resposta incorreta'}</div>
        <div>Gabarito: <b>${q.correta}</b> · seu tempo: <b>${hhmm(seg)}</b>${q.tempoAlvo ? ` · tempo alvo: ${hhmm(q.tempoAlvo)}` : ''}</div>
      </div>
      <div class="callout info">
        <div class="callout-title">Justificativa</div>
        <div>${esc(q.justificativa)}</div>
      </div>
      ${q.dicaFGV ? `<div class="callout fgv">
        <div class="callout-title">Como a FGV tentou confundir o candidato</div>
        <div>${esc(q.dicaFGV)}</div>
      </div>` : ''}
      ${q.fonteNecessaria ? `<div class="callout">
        <div class="callout-title">Confirme na fonte oficial</div>
        <div class="small muted">Este item depende de norma estadual ou de ato que pode ter sido alterado. Confira no edital e na legislação publicada antes de fixar o entendimento.</div>
      </div>` : ''}
      ${correta ? '' : `
      <div class="card">
        <div class="card-head"><h3>Qual foi o motivo do meu erro?</h3></div>
        <div class="row" data-motivos>
          ${MOTIVOS_ERRO.map(m => `<button class="chip" data-motivo="${m.id}" aria-pressed="false">${esc(m.nome)}</button>`).join('')}
        </div>
        <p class="xsmall dim" data-dica-motivo style="margin-top:10px">Classificar o erro muda a recomendação de estudo.</p>
        <button class="btn btn-accent btn-block" style="margin-top:12px" data-add-erro>
          ${icon('mais', 18)} Adicionar ao caderno de erros
        </button>
      </div>`}
      <div class="row">
        <button class="btn btn-ghost" data-explicar>${icon('cerebro', 18)} Explicar melhor</button>
        <button class="btn btn-primary spacer" data-proxima>Próxima questão ${icon('seta', 18)}</button>
      </div>`;

    btnConfirmar.closest('[data-acoes]').classList.add('hide');

    let motivoSel = '';
    fb.querySelectorAll('[data-motivo]').forEach(b => b.addEventListener('click', () => {
      motivoSel = b.dataset.motivo;
      fb.querySelectorAll('[data-motivo]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      const m = MOTIVOS_ERRO.find(m => m.id === motivoSel);
      fb.querySelector('[data-dica-motivo]').textContent = m ? m.dica : '';
    }));

    fb.querySelector('[data-add-erro]')?.addEventListener('click', () => {
      S.adicionarErro({ qid: q.id, escolha, motivo: motivoSel, comentario: S.state.data.anotacoes[q.id] || '' });
      toast('Adicionada ao caderno. Revisão em 24h, 7, 15 e 30 dias.');
      fb.querySelector('[data-add-erro]').disabled = true;
      fb.querySelector('[data-add-erro]').textContent = 'No caderno de erros';
    });

    if (!correta) {
      // erro em modo revisão já pertence ao caderno: o agendamento é recalculado no store
      const jaNoCaderno = S.state.data.erros.some(e => e.qid === q.id && !e.dominado);
      if (jaNoCaderno) {
        const b = fb.querySelector('[data-add-erro]');
        if (b) { b.disabled = true; b.textContent = 'Já está no caderno de erros'; }
      }
    }

    fb.querySelector('[data-explicar]').addEventListener('click', () => explicar(q));
    fb.querySelector('[data-proxima]').addEventListener('click', () => { limpar(); opts.onProxima?.(); });
    if (opts.rotuloProxima) fb.querySelector('[data-proxima]').innerHTML = `${esc(opts.rotuloProxima)} ${icon('seta', 18)}`;

    node.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* rascunho a mão livre (dedo / Apple Pencil) */
  const canvas = node.querySelector('[data-canvas]');
  let ctx, desenhando = false, ultimo = null, iniciado = false;
  function initCanvas() {
    if (iniciado) return;
    iniciado = true;
    const dpr = window.devicePixelRatio || 1;
    const r = canvas.getBoundingClientRect();
    canvas.width = r.width * dpr;
    canvas.height = r.height * dpr;
    ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  }
  function pos(e) {
    const r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top, p: e.pressure || 0.5 };
  }
  canvas.addEventListener('pointerdown', e => {
    initCanvas();
    desenhando = true; ultimo = pos(e);
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', e => {
    if (!desenhando) return;
    const p = pos(e);
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--text').trim() || '#10233A';
    ctx.lineWidth = e.pointerType === 'pen' ? Math.max(1, p.p * 4) : 2.2;
    ctx.beginPath(); ctx.moveTo(ultimo.x, ultimo.y); ctx.lineTo(p.x, p.y); ctx.stroke();
    ultimo = p;
  });
  ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev =>
    canvas.addEventListener(ev, () => { desenhando = false; }));
  node.querySelector('[data-limpar]').addEventListener('click', () => {
    initCanvas();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
  node.querySelector('details').addEventListener('toggle', e => { if (e.target.open) setTimeout(initCanvas, 30); });

  function limpar() { clearInterval(tick); }

  return {
    node,
    destruir: limpar,
    get escolha() { return escolha; },
    reiniciarCronometro() { inicio = Date.now(); }
  };
}

/** Explicação adicional — sempre derivada do conteúdo cadastrado, nunca inventada. */
export function explicar(q) {
  const res = S.resumos().find(r => r.assunto && r.assunto === q.assunto)
    || S.resumos().find(r => r.disciplinaId === q.disciplinaId);
  const alt = q.alternativas.find(a => a.k === q.correta);
  sheet('Explicação detalhada', `
    <div class="stack">
      <div class="callout info">
        <div class="callout-title">Alternativa correta (${q.correta})</div>
        <div>${esc(alt?.texto || '')}</div>
      </div>
      <div>
        <h3>Raciocínio</h3>
        <p class="muted">${esc(q.justificativa)}</p>
      </div>
      <div>
        <h3>Eliminação das demais</h3>
        <ul class="muted small" style="padding-left:18px;margin:0">
          ${q.alternativas.filter(a => a.k !== q.correta).map(a =>
            `<li style="margin-bottom:6px"><b>${a.k})</b> ${esc(a.porqueErrada || 'Não corresponde ao conteúdo cobrado no comando.')}</li>`).join('')}
        </ul>
      </div>
      ${q.dicaFGV ? `<div class="callout fgv"><div class="callout-title">Padrão da banca</div><div>${esc(q.dicaFGV)}</div></div>` : ''}
      ${res ? `<div class="card">
        <div class="card-head"><h3>${esc(res.titulo)}</h3><span class="chip static spacer">${res.minutos} min</span></div>
        <ul class="muted small" style="padding-left:18px;margin:0 0 10px">
          ${res.pontos.map(p => `<li style="margin-bottom:6px">${esc(p)}</li>`).join('')}
        </ul>
        ${res.armadilhas?.length ? `<div class="callout fgv"><div class="callout-title">Armadilhas frequentes</div>
          <ul class="small" style="padding-left:18px;margin:0">${res.armadilhas.map(a => `<li>${esc(a)}</li>`).join('')}</ul></div>` : ''}
      </div>` : ''}
      <p class="xsmall dim">Esta explicação usa apenas o conteúdo cadastrado no app. Para questões de norma estadual ou de ato recente, confirme no edital e na legislação oficial antes de fixar o entendimento.</p>
    </div>`);
}
