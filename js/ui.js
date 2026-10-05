/* ui.js — helpers de renderização, ícones, gráficos e componentes reutilizáveis. */

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

export function on(root, sel, evt, fn) {
  root.querySelectorAll(sel).forEach(n => n.addEventListener(evt, fn));
}

let toastTimer;
export function toast(msg, ms = 2600) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), ms);
}

export function sheet(titulo, conteudoHTML, { acoes = '' } = {}) {
  const back = el(`
    <div class="sheet-backdrop" role="dialog" aria-modal="true" aria-label="${esc(titulo)}">
      <div class="sheet">
        <div class="card-head">
          <h2>${esc(titulo)}</h2>
          <button class="btn btn-quiet spacer" data-close aria-label="Fechar">${icon('x')}</button>
        </div>
        <div class="sheet-body">${conteudoHTML}</div>
        ${acoes ? `<div class="row" style="margin-top:16px">${acoes}</div>` : ''}
      </div>
    </div>`);
  const close = () => { back.remove(); document.removeEventListener('keydown', onKey); };
  const onKey = e => { if (e.key === 'Escape') close(); };
  back.addEventListener('click', e => { if (e.target === back) close(); });
  back.querySelector('[data-close]').addEventListener('click', close);
  document.addEventListener('keydown', onKey);
  document.body.appendChild(back);
  back.querySelector('.sheet').scrollTop = 0;
  return { node: back, close };
}

export function confirmar(titulo, texto, { okLabel = 'Confirmar', perigo = false } = {}) {
  return new Promise(resolve => {
    const s = sheet(titulo, `<p class="muted">${esc(texto)}</p>`, {
      acoes: `<button class="btn btn-ghost" data-no>Cancelar</button>
              <button class="btn ${perigo ? 'btn-danger' : 'btn-primary'} spacer" data-yes>${esc(okLabel)}</button>`
    });
    s.node.querySelector('[data-no]').addEventListener('click', () => { s.close(); resolve(false); });
    s.node.querySelector('[data-yes]').addEventListener('click', () => { s.close(); resolve(true); });
  });
}

/* ---------------- ícones (traço, 24px) ---------------- */

const ICONS = {
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
  plano: '<rect x="3" y="4.5" width="18" height="16" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',
  questoes: '<path d="M4 4.5h16v15H4z"/><path d="M8 9.5h8M8 13.5h5"/>',
  erros: '<path d="M12 3.5 21 20H3z"/><path d="M12 10v4.5M12 17.2v.3"/>',
  simulado: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9 2.5h6"/>',
  desempenho: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  resumo: '<path d="M5 4.5h11l3.5 3.5V20H5z"/><path d="M15.5 4.5V8H19"/><path d="M8.5 12h7M8.5 15.5h5"/>',
  config: '<circle cx="12" cy="12" r="3"/><path d="M19.4 14a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V20a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 7 18.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0-1.2-2.9H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.3 7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 10 3v-.1a2 2 0 1 1 4 0V3a1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0 1.2 2.9H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.1z"/>',
  admin: '<path d="M12 3 4 6.5v5c0 5 3.4 8.4 8 9.5 4.6-1.1 8-4.5 8-9.5v-5z"/><path d="M9.5 12l1.8 1.8 3.4-3.6"/>',
  play: '<path d="M7 4.5 19 12 7 19.5z"/>',
  check: '<path d="M4.5 12.5 9.5 17.5 19.5 7"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.3 2"/>',
  fogo: '<path d="M12 3s5 4.2 5 8.6A5 5 0 0 1 7 12c0-1.4.6-2.6 1.4-3.6.3 1.3 1.1 2 2 2C10.2 7.3 12 5 12 3z"/>',
  alvo: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
  foco: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v5h4"/>',
  estrela: '<path d="m12 3.6 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
  mais: '<path d="M12 5v14M5 12h14"/>',
  seta: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  setaEsq: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  lapis: '<path d="M4 20h4L20 8l-4-4L4 16z"/>',
  lixo: '<path d="M4 7h16M9 7V4.5h6V7M6.5 7l1 13h9l1-13"/>',
  sair: '<path d="M14 5.5V4H5v16h9v-1.5M10 12h11M18 8.5l3.5 3.5L18 15.5"/>',
  filtro: '<path d="M3.5 5.5h17l-6.5 8v5.5l-4 2V13.5z"/>',
  livro: '<path d="M4 5c2.5-1 5.5-1 8 .5V21c-2.5-1.5-5.5-1.5-8-.5z"/><path d="M20 5c-2.5-1-5.5-1-8 .5V21c2.5-1.5 5.5-1.5 8-.5z"/>',
  upload: '<path d="M12 16V4M8 8l4-4 4 4M4 16v3.5h16V16"/>',
  download: '<path d="M12 4v12M8 12l4 4 4-4M4 16v3.5h16V16"/>',
  bandeira: '<path d="M5 21V4M5 4h11l-2 3.5L16 11H5"/>',
  tema: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.5 1.5M18.3 18.3l1.5 1.5M2.5 12h2M19.5 12h2M4.2 19.8l1.5-1.5M18.3 5.7l1.5-1.5"/>',
  cerebro: '<path d="M9 5.5a2.5 2.5 0 0 0-4.2 1.8A2.6 2.6 0 0 0 3.5 12a2.6 2.6 0 0 0 1.3 4.7A2.5 2.5 0 0 0 9 18.5zM15 5.5a2.5 2.5 0 0 1 4.2 1.8A2.6 2.6 0 0 1 20.5 12a2.6 2.6 0 0 1-1.3 4.7A2.5 2.5 0 0 1 15 18.5z"/><path d="M12 4v16"/>'
};

export function icon(name, size = 22) {
  const p = ICONS[name] || ICONS.home;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
}

/* ---------------- gráficos ---------------- */

export function barras(itens, { max = 100, sufixo = '%', cor } = {}) {
  if (!itens.length) return `<p class="dim small">Sem dados suficientes ainda.</p>`;
  return `<div class="bars">${itens.map(i => {
    const v = i.valor;
    const pct = v === null || v === undefined ? 0 : Math.max(0, Math.min(100, (v / max) * 100));
    const c = i.cor || cor || 'var(--brand)';
    return `<div class="bar-row">
      <span class="name" title="${esc(i.nome)}">${esc(i.nome)}</span>
      <span class="progress"><i style="width:${pct}%;background:${c}"></i></span>
      <span class="val">${v === null || v === undefined ? '—' : v + sufixo}</span>
    </div>`;
  }).join('')}</div>`;
}

/** Linha de evolução em SVG, sem dependências. */
export function linha(serie, { alturaLabel = 'Taxa de acerto', meta = null } = {}) {
  const pts = serie.filter(p => p.valor !== null && p.valor !== undefined);
  if (pts.length < 2) return `<p class="dim small">Resolva questões em ao menos duas semanas para ver a evolução.</p>`;
  const w = 600, h = 130, pad = 22;
  const n = serie.length;
  const x = i => pad + (i * (w - pad * 2)) / Math.max(1, n - 1);
  const y = v => h - pad - ((v / 100) * (h - pad * 2));
  let d = '', area = '';
  serie.forEach((p, i) => {
    if (p.valor === null || p.valor === undefined) return;
    const cmd = d ? 'L' : 'M';
    d += `${cmd}${x(i).toFixed(1)},${y(p.valor).toFixed(1)} `;
  });
  const first = serie.findIndex(p => p.valor !== null && p.valor !== undefined);
  const last = serie.length - 1 - [...serie].reverse().findIndex(p => p.valor !== null && p.valor !== undefined);
  area = `${d} L${x(last).toFixed(1)},${h - pad} L${x(first).toFixed(1)},${h - pad} Z`;
  const metaY = meta ? y(meta) : null;
  return `<svg class="spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" role="img" aria-label="${esc(alturaLabel)}">
    <defs><linearGradient id="gl" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="var(--brand)" stop-opacity=".28"/>
      <stop offset="100%" stop-color="var(--brand)" stop-opacity="0"/>
    </linearGradient></defs>
    ${[0, 25, 50, 75, 100].map(v => `<line x1="${pad}" y1="${y(v)}" x2="${w - pad}" y2="${y(v)}" stroke="var(--border)" stroke-width="1"/>`).join('')}
    ${metaY !== null ? `<line x1="${pad}" y1="${metaY}" x2="${w - pad}" y2="${metaY}" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="5 4"/>` : ''}
    <path d="${area}" fill="url(#gl)"/>
    <path d="${d}" fill="none" stroke="var(--brand)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    ${serie.map((p, i) => p.valor === null || p.valor === undefined ? '' :
      `<circle cx="${x(i).toFixed(1)}" cy="${y(p.valor).toFixed(1)}" r="3.6" fill="var(--surface)" stroke="var(--brand)" stroke-width="2.2"/>`).join('')}
  </svg>`;
}

export function anel(pct, { tamanho = 108, texto = null, sub = '', cor = 'var(--brand)' } = {}) {
  const r = (tamanho - 14) / 2, c = 2 * Math.PI * r;
  const v = Math.max(0, Math.min(100, pct || 0));
  return `<div class="ring" style="width:${tamanho}px;height:${tamanho}px">
    <svg width="${tamanho}" height="${tamanho}">
      <circle cx="${tamanho / 2}" cy="${tamanho / 2}" r="${r}" fill="none" stroke="var(--surface-3)" stroke-width="9"/>
      <circle cx="${tamanho / 2}" cy="${tamanho / 2}" r="${r}" fill="none" stroke="${cor}" stroke-width="9"
        stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - v / 100)}"/>
    </svg>
    <div class="ring-label">
      <div style="font-size:${tamanho > 90 ? '1.35rem' : '1rem'}">${texto ?? Math.round(v) + '%'}</div>
      ${sub ? `<div class="xsmall dim" style="font-weight:600">${esc(sub)}</div>` : ''}
    </div>
  </div>`;
}

export function corTaxa(t) {
  if (t === null || t === undefined) return 'var(--text-3)';
  if (t >= 75) return 'var(--ok)';
  if (t >= 55) return 'var(--warn)';
  return 'var(--bad)';
}

export function classeTaxa(t) {
  if (t === null || t === undefined) return '';
  return t >= 75 ? 'ok' : t >= 55 ? 'warn' : 'bad';
}

export function stat(label, value, hint = '', cor = null) {
  return `<div class="stat">
    <div class="label">${esc(label)}</div>
    <div class="value" ${cor ? `style="color:${cor}"` : ''}>${value}</div>
    ${hint ? `<div class="hint">${hint}</div>` : ''}
  </div>`;
}

export function vazio(titulo, texto, acaoHTML = '') {
  return `<div class="empty"><h3>${esc(titulo)}</h3><p class="small">${esc(texto)}</p>${acaoHTML}</div>`;
}

export function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }

/* Reexport utilitário de tempo, para os componentes que já importam daqui. */
export { hhmm } from "./store.js";
