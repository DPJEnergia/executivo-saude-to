/* app.js — shell, navegação, modo foco e inicialização do PWA. */

import * as S from './store.js';
import { el, esc, icon, toast, sheet, confirmar } from './ui.js';
import { viewInicio } from './views/home.js';
import { viewPlano } from './views/plano.js';
import { viewQuestoes } from './views/questoes.js';
import { viewErros } from './views/erros.js';
import { viewSimulados } from './views/simulados.js';
import { viewDesempenho } from './views/desempenho.js';
import { viewResumo } from './views/resumo.js';
import { viewConfig } from './views/config.js';
import { viewAdmin } from './views/admin.js';
import { viewAcesso, viewOnboarding } from './views/onboarding.js';
import { viewAtivacao, mostrarTermos } from './views/ativacao.js';
import { estadoAcesso, limparLicenca, DEMO_LIMITE } from './licenca.js';

const app = document.getElementById('app');

const ROTAS = [
  { id: 'inicio', nome: 'Início', ico: 'home', curto: 'Início', render: viewInicio },
  { id: 'plano', nome: 'Meu plano', ico: 'plano', curto: 'Plano', render: viewPlano },
  { id: 'questoes', nome: 'Banco de questões', ico: 'questoes', curto: 'Questões', render: viewQuestoes },
  { id: 'erros', nome: 'Caderno de erros', ico: 'erros', curto: 'Erros', render: viewErros },
  { id: 'simulados', nome: 'Simulados', ico: 'simulado', curto: 'Simulados', render: viewSimulados },
  { id: 'desempenho', nome: 'Desempenho', ico: 'desempenho', curto: 'Dados', render: viewDesempenho },
  { id: 'resumo', nome: 'Resumo rápido', ico: 'resumo', curto: 'Resumo', render: viewResumo },
  { id: 'config', nome: 'Ajustes', ico: 'config', curto: 'Ajustes', render: viewConfig },
  { id: 'admin', nome: 'Administração', ico: 'admin', curto: 'Admin', render: viewAdmin }
];

let rotaAtual = 'inicio';
let viewAtiva = null;

/* ---------------- boot ---------------- */

let acesso = { modo: 'bloqueado' };

S.loadBanco();
iniciar();

async function iniciar() {
  acesso = await estadoAcesso();
  if (acesso.modo === 'bloqueado') { telaAtivacao(acesso.motivo); return; }
  if (S.restaurarSessao()) { S.aplicarConfig(); iniciarApp(); }
  else telaAcesso();
}

function telaAtivacao(motivo) {
  app.innerHTML = '';
  app.appendChild(viewAtivacao(() => iniciar(), { motivo }));
}

const demo = () => acesso.modo === 'demo';

function telaAcesso() {
  app.innerHTML = '';
  app.appendChild(viewAcesso(() => { S.aplicarConfig(); iniciarApp(); }));
}

function iniciarApp() {
  if (!S.state.data.onboarding) {
    app.innerHTML = '';
    app.appendChild(viewOnboarding(() => { montarShell(); ir('inicio'); }));
    return;
  }
  S.sincronizarRevisoes();
  montarShell();
  ir(location.hash.replace('#', '') || 'inicio');
  agendarNotificacoes();
}

/* ---------------- shell ---------------- */

function montarShell() {
  const admin = S.state.user.perfilTipo === 'admin';
  const rotas = ROTAS.filter(r => r.id !== 'admin' || admin);
  const tabs = ['inicio', 'plano', 'questoes', 'erros', 'simulados', 'desempenho'];

  app.innerHTML = '';
  app.appendChild(el(`
  <div class="shell">
    <aside class="sidebar">
      <div class="brand">
        <span class="brand-mark">ES</span>
        <div><div class="brand-name">Executivo em Saúde</div><div class="brand-sub">SES-TO · Preparatório</div></div>
      </div>
      <nav data-nav>
        ${rotas.map(r => `<button class="nav-item" data-rota="${r.id}">
          <span class="ico">${icon(r.ico, 21)}</span><span>${esc(r.nome)}</span>
          ${r.id === 'erros' ? '<span class="nav-badge hide" data-badge-erros>0</span>' : ''}
        </button>`).join('')}
      </nav>
      <div class="sidebar-foot">
        <button class="btn btn-ghost btn-block" data-foco>${icon('foco', 18)} Modo foco</button>
        <div class="row" style="gap:8px">
          <div style="flex:1;min-width:0">
            <div class="small b" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap" data-user-nome></div>
            <div class="xsmall dim">${esc(S.state.user.perfilTipo)}</div>
          </div>
          <button class="btn btn-quiet" data-licenca aria-label="Licença">${icon('admin', 18)}</button>
        <button class="btn btn-quiet" data-sair aria-label="Sair">${icon('sair', 18)}</button>
        </div>
      </div>
    </aside>

    <main class="main">
      <header class="topbar">
        <h1 data-titulo>Início</h1>
        <div class="topbar-actions">
          <button class="btn btn-icon btn-ghost" data-foco-top aria-label="Modo foco">${icon('foco', 19)}</button>
          <button class="btn btn-icon btn-ghost" data-tema aria-label="Alternar tema">${icon('tema', 19)}</button>
          <button class="btn btn-icon btn-ghost" data-ajustes aria-label="Ajustes">${icon('config', 19)}</button>
        </div>
      </header>
      <div class="content" data-content></div>
    </main>

    <nav class="tabbar" aria-label="Navegação principal">
      ${tabs.map(id => {
        const r = ROTAS.find(x => x.id === id);
        return `<button data-rota="${id}">
          ${icon(r.ico, 21)}<span>${esc(r.curto)}</span>
          ${id === 'erros' ? '<span class="dot hide" data-dot-erros></span>' : ''}
        </button>`;
      }).join('')}
    </nav>
  </div>`));

  app.querySelector('[data-user-nome]').textContent = S.state.user.nome;

  if (demo()) {
    const faixa = el(`<div class="row" style="background:var(--warn-soft);color:var(--warn);padding:8px 16px;gap:10px;font-weight:700;font-size:.85rem">
      <span>Versão de demonstração — ${DEMO_LIMITE.questoes} questões liberadas</span>
      <button class="btn btn-quiet spacer" data-ativar-agora style="color:var(--warn)">Ativar com minha chave</button>
    </div>`);
    faixa.querySelector('[data-ativar-agora]').addEventListener('click', () => { limparLicenca(); location.reload(); });
    app.querySelector('.main').insertBefore(faixa, app.querySelector('.topbar'));
  }
  app.querySelectorAll('[data-rota]').forEach(b => b.addEventListener('click', () => ir(b.dataset.rota)));
  app.querySelector('[data-ajustes]').addEventListener('click', () => ir('config'));
  app.querySelector('[data-foco]').addEventListener('click', modoFoco);
  app.querySelector('[data-foco-top]').addEventListener('click', modoFoco);
  app.querySelector('[data-tema]').addEventListener('click', () => {
    const ordem = ['auto', 'light', 'dark'];
    const atual = S.state.data.config.tema;
    const prox = ordem[(ordem.indexOf(atual) + 1) % 3];
    S.setConfig('tema', prox);
    toast(`Tema: ${{ auto: 'automático', light: 'claro', dark: 'escuro' }[prox]}.`);
  });
  app.querySelector('[data-licenca]').addEventListener('click', () => {
    const l = acesso;
    sheet('Licença deste aparelho', `
      <div class="stack">
        <div class="row">
          <span class="chip ${l.modo === 'ativo' ? 'ok' : 'warn'} static">
            ${l.modo === 'ativo' ? 'Ativado' : 'Demonstração'}
          </span>
          ${l.validade ? `<span class="chip static">válido até ${new Date(l.validade + 'T12:00:00').toLocaleDateString('pt-BR')}</span>` : ''}
          ${l.serie !== undefined ? `<span class="chip static">série ${l.serie}</span>` : ''}
        </div>
        ${l.chave ? `<div class="field"><label>Chave</label>
          <input class="input" value="${esc(l.chave)}" readonly style="font-family:ui-monospace,Menlo,Consolas,monospace"></div>` : ''}
        <p class="xsmall dim">Guarde esta chave: ela é necessária para ativar o aplicativo em outro aparelho.</p>
      </div>`, {
      acoes: `<button class="btn btn-ghost" data-ver-termos>Termos de uso</button>
              <button class="btn btn-danger spacer" data-trocar>Trocar chave</button>`
    }).node.addEventListener('click', e => {
      if (e.target.closest('[data-ver-termos]')) mostrarTermos();
      if (e.target.closest('[data-trocar]')) { limparLicenca(); location.reload(); }
    });
  });
  app.querySelector('[data-sair]').addEventListener('click', async () => {
    if (!await confirmar('Sair da conta', 'Seus dados continuam salvos neste dispositivo.', { okLabel: 'Sair' })) return;
    S.logout(); telaAcesso();
  });
}

function ir(rota, params = {}) {
  let r = ROTAS.find(x => x.id === rota) || ROTAS[0];
  if (demo() && !DEMO_LIMITE.telas.includes(r.id)) { telaBloqueada(r); return; }
  rotaAtual = r.id;
  history.replaceState(null, '', `#${r.id}`);

  const content = app.querySelector('[data-content]');
  if (!content) { iniciarApp(); return; }

  viewAtiva?.__destruir?.();
  content.innerHTML = '';
  let node;
  try {
    node = r.render(ir, params);
  } catch (e) {
    console.error(e);
    node = el(`<div class="card"><h2>Algo deu errado nesta tela</h2>
      <p class="muted small">${esc(e.message)}</p>
      <button class="btn btn-primary" onclick="location.reload()">Recarregar o app</button></div>`);
  }
  viewAtiva = node;
  content.appendChild(node);

  app.querySelector('[data-titulo]').textContent = r.nome;
  app.querySelectorAll('[data-rota]').forEach(b =>
    b.setAttribute('aria-current', b.dataset.rota === r.id ? 'page' : 'false'));
  atualizarBadges();
  if (!params.semScroll) window.scrollTo({ top: 0 });
}

/** Aviso no lugar da tela, quando o aplicativo está em demonstração. */
function telaBloqueada(r) {
  const content = app.querySelector('[data-content]');
  if (!content) return;
  viewAtiva?.__destruir?.();
  content.innerHTML = '';
  const n = el(`<div class="card center">
    <span class="tag">Disponível na versão completa</span>
    <h1 style="margin:8px 0">${esc(r.nome)}</h1>
    <p class="muted" style="max-width:52ch;margin:0 auto">${esc(DEMO_LIMITE.mensagem)}</p>
    <div class="row" style="justify-content:center;margin-top:18px">
      <button class="btn btn-ghost" data-voltar>Voltar às questões</button>
      <button class="btn btn-primary" data-ativar>${icon('check', 18)} Tenho uma chave</button>
    </div>
  </div>`);
  n.querySelector('[data-voltar]').addEventListener('click', () => ir('questoes'));
  n.querySelector('[data-ativar]').addEventListener('click', () => { limparLicenca(); location.reload(); });
  content.appendChild(n);
  viewAtiva = n;
  app.querySelector('[data-titulo]').textContent = r.nome;
  app.querySelectorAll('[data-rota]').forEach(b =>
    b.setAttribute('aria-current', b.dataset.rota === r.id ? 'page' : 'false'));
}

function atualizarBadges() {
  const n = S.revisoesPendentes().length;
  const badge = app.querySelector('[data-badge-erros]');
  const dot = app.querySelector('[data-dot-erros]');
  if (badge) { badge.textContent = n; badge.classList.toggle('hide', !n); }
  if (dot) dot.classList.toggle('hide', !n);
}

/* ---------------- modo foco (Pomodoro) ---------------- */

function modoFoco() {
  const cfg = S.state.data.config;
  let fase = 'foco';
  let restante = cfg.pomodoroFoco * 60;
  let ciclos = 0;
  let rodando = true;

  const ov = el(`<div class="focus-overlay">
    <div>
      <div class="phase" data-fase>Foco</div>
      <div class="big" data-tempo>00:00</div>
      <p style="opacity:.75;max-width:34ch;margin:8px auto 22px" data-dica>
        Silencie notificações, deixe só o material da questão à vista e resolva sem consultar.
      </p>
      <div class="row" style="justify-content:center">
        <button class="btn btn-ghost" data-pausar style="color:#fff;border-color:rgba(255,255,255,.4)">Pausar</button>
        <button class="btn btn-ghost" data-pular style="color:#fff;border-color:rgba(255,255,255,.4)">Pular etapa</button>
        <button class="btn" data-sair style="background:#fff;color:var(--azul-900)">Sair do foco</button>
      </div>
      <p class="xsmall" style="opacity:.6;margin-top:18px" data-ciclos>Ciclos concluídos: 0</p>
    </div>
  </div>`);

  const elTempo = ov.querySelector('[data-tempo]');
  const elFase = ov.querySelector('[data-fase]');
  const elDica = ov.querySelector('[data-dica]');

  function pinta() {
    const m = Math.floor(restante / 60), s = restante % 60;
    elTempo.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    elFase.textContent = fase === 'foco' ? 'Foco' : 'Pausa';
    elDica.textContent = fase === 'foco'
      ? 'Silencie notificações, deixe só o material da questão à vista e resolva sem consultar.'
      : 'Levante, beba água e olhe para longe. A pausa faz parte do método.';
    ov.querySelector('[data-ciclos]').textContent = `Ciclos concluídos: ${ciclos}`;
  }

  const t = setInterval(() => {
    if (!rodando) return;
    restante--;
    if (restante <= 0) {
      if (fase === 'foco') { ciclos++; fase = 'pausa'; restante = cfg.pomodoroPausa * 60; notificar('Pausa', 'Ciclo de foco concluído. Faça a pausa.'); }
      else { fase = 'foco'; restante = cfg.pomodoroFoco * 60; notificar('Foco', 'Pausa encerrada. Retome o estudo.'); }
    }
    pinta();
  }, 1000);

  ov.querySelector('[data-pausar]').addEventListener('click', e => {
    rodando = !rodando;
    e.currentTarget.textContent = rodando ? 'Pausar' : 'Retomar';
  });
  ov.querySelector('[data-pular]').addEventListener('click', () => {
    restante = 1;
  });
  ov.querySelector('[data-sair]').addEventListener('click', () => { clearInterval(t); ov.remove(); });

  pinta();
  document.body.appendChild(ov);
}

/* ---------------- notificações ---------------- */

function notificar(titulo, corpo) {
  if (!S.state.data?.config?.notificacoes) return;
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  try { new Notification(`Executivo em Saúde · ${titulo}`, { body: corpo, icon: 'icons/icon-180.png', tag: 'execsaude' }); }
  catch { /* alguns navegadores exigem service worker; ignorado silenciosamente */ }
}

function agendarNotificacoes() {
  // lembrete único por sessão, 10 minutos após abrir, se houver pendência
  setTimeout(() => {
    const rev = S.revisoesPendentes().length;
    const tarefas = S.tarefasDe(S.hoje()).filter(t => !t.done).length;
    if (rev) notificar('Revisão pendente', `${rev} ${rev === 1 ? 'questão venceu' : 'questões venceram'} o intervalo de revisão.`);
    else if (tarefas) notificar('Plano de hoje', `${tarefas} ${tarefas === 1 ? 'tarefa pendente' : 'tarefas pendentes'} no seu plano.`);
  }, 10 * 60 * 1000);
}

/* ---------------- atalhos de teclado ---------------- */

document.addEventListener('keydown', e => {
  if (e.target.matches('input, textarea, select')) return;
  if (!S.state.user || !app.querySelector('[data-content]')) return;
  const mapa = { 1: 'inicio', 2: 'plano', 3: 'questoes', 4: 'erros', 5: 'simulados', 6: 'desempenho' };
  if (mapa[e.key]) { ir(mapa[e.key]); return; }
  if (e.key.toLowerCase() === 'f' && (e.metaKey || e.ctrlKey) === false) modoFoco();
});

/* ---------------- PWA ---------------- */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(err => console.warn('SW não registrado', err));
  });
}

let promptInstalar = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  promptInstalar = e;
  if (S.appFlag('instalarDispensado')) return;
  const b = el(`<button class="btn btn-primary" style="position:fixed;right:16px;bottom:calc(var(--tabbar-h) + 16px);z-index:60;box-shadow:var(--shadow)">
    ${icon('download', 18)} Instalar app</button>`);
  b.addEventListener('click', async () => {
    b.remove();
    promptInstalar.prompt();
    await promptInstalar.userChoice;
    S.appFlag('instalarDispensado', true);
  });
  document.body.appendChild(b);
  setTimeout(() => b.remove(), 20000);
});

/* Dica de instalação no iPad/iPhone, onde não existe beforeinstallprompt. */
window.addEventListener('load', () => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  if (iOS && !standalone && !S.appFlag('dicaIOS')) {
    setTimeout(() => {
      S.appFlag('dicaIOS', true);
      sheet('Instalar na tela de início', `
        <div class="stack">
          <p class="muted">No Safari, toque em <b>Compartilhar</b> e escolha <b>Adicionar à Tela de Início</b>.
          O app abre em tela cheia, sem barra do navegador, e continua funcionando com conexão instável.</p>
          <div class="callout info"><div class="callout-title">Por que instalar</div>
          <div class="small">Tela cheia no iPad, resposta mais rápida e acesso ao plano mesmo offline.</div></div>
        </div>`, { acoes: '<button class="btn btn-primary btn-block" data-close-2>Entendi</button>' })
        .node.querySelector('[data-close-2]').addEventListener('click', () => document.querySelector('.sheet-backdrop')?.remove());
    }, 4000);
  }
});
