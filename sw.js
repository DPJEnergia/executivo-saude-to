/* sw.js — cache do app shell.
 * Estratégia: cache-first para os arquivos do app (o conteúdo vive no localStorage),
 * network-first com fallback ao cache para navegação. */

const VERSAO = 'execsaude-v2';
const ARQUIVOS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/styles.css',
  './js/app.js',
  './js/store.js',
  './js/ui.js',
  './js/data.js',
  './js/questoes.js',
  './js/questoes-tocantins.js',
  './js/questoes-modulo1.js',
  './js/questoes-superior.js',
  './js/questoes-exec-sus.js',
  './js/questoes-exec-visa.js',
  './js/questoes-exec-licitacoes.js',
  './js/questoes-exec-portarias.js',
  './js/conteudo.js',
  './js/conteudo-executivo.js',
  './js/edital.js',
  './js/edital-especificos.js',
  './js/questao.js',
  './js/licenca.js',
  './js/chaves-validas.js',
  './js/views/ativacao.js',
  './js/views/home.js',
  './js/views/plano.js',
  './js/views/questoes.js',
  './js/views/erros.js',
  './js/views/simulados.js',
  './js/views/desempenho.js',
  './js/views/resumo.js',
  './js/views/config.js',
  './js/views/admin.js',
  './js/views/onboarding.js',
  './icons/icon.svg',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSAO)
      .then(c => Promise.allSettled(ARQUIVOS.map(a => c.add(a))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).catch(() => caches.match('./index.html'))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copia = res.clone();
      caches.open(VERSAO).then(c => c.put(req, copia)).catch(() => {});
      return res;
    }).catch(() => hit))
  );
});
