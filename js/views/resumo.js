/* views/resumo.js — resumo rápido: teoria objetiva, flashcards, mapas mentais e medalhas. */

import * as S from '../store.js';
import { el, esc, icon, toast, stat, vazio } from '../ui.js';
import { MAPAS } from '../data.js';

let aba = 'teoria';

export function viewResumo(ir, params = {}) {
  if (params.aba) aba = params.aba;
  if (params.resumoId || params.topicoId) return teoriaDetalhe(ir, params, params.tarefaId);

  const node = el(`
  <div class="stack">
    <div class="card">
      <div class="seg" role="group" aria-label="Seções">
        <button data-aba="teoria" aria-pressed="${aba === 'teoria'}">Teoria objetiva</button>
        <button data-aba="flash" aria-pressed="${aba === 'flash'}">Flashcards</button>
        <button data-aba="mapas" aria-pressed="${aba === 'mapas'}">Mapas mentais</button>
        <button data-aba="medalhas" aria-pressed="${aba === 'medalhas'}">Conquistas</button>
      </div>
    </div>
    <div data-corpo></div>
  </div>`);

  const corpo = node.querySelector('[data-corpo]');
  if (aba === 'teoria') montarTeoria(corpo, ir);
  else if (aba === 'flash') montarFlash(corpo);
  else if (aba === 'mapas') montarMapas(corpo);
  else montarMedalhas(corpo);

  node.querySelectorAll('[data-aba]').forEach(b => b.addEventListener('click', () => { aba = b.dataset.aba; ir('resumo'); }));
  return node;
}

/* ---------------- teoria ---------------- */

function montarTeoria(corpo, ir) {
  const rs = S.resumos();
  if (!rs.length) { corpo.innerHTML = `<div class="card">${vazio('Sem resumos', 'Cadastre resumos na área de administração.')}</div>`; return; }
  const porDisc = {};
  for (const r of rs) (porDisc[r.disciplinaId] = porDisc[r.disciplinaId] || []).push(r);
  corpo.innerHTML = Object.entries(porDisc).map(([d, itens]) => `
    <div class="card">
      <div class="card-head"><h2 style="color:${S.corDisciplina(d)}">${esc(S.rotuloDisciplina(d))}</h2></div>
      ${itens.map(r => `<button class="task" data-r="${r.id}" style="width:100%;text-align:left;cursor:pointer" data-tipo="teoria">
        <span class="task-bar"></span>
        <div style="flex:1;min-width:0">
          <div class="task-title">${esc(r.titulo)}</div>
          <div class="task-sub">${esc(r.assunto || '')} · ${r.minutos} min de leitura</div>
        </div>
        <span class="chip static">abrir</span>
      </button>`).join('')}
    </div>`).join('');
  corpo.querySelectorAll('[data-r]').forEach(b => b.addEventListener('click', () => ir('resumo', { resumoId: b.dataset.r })));
}

function teoriaDetalhe(ir, params, tarefaId) {
  const t = params.topicoId ? S.topico(params.topicoId) : null;
  const r = params.resumoId
    ? S.resumos().find(x => x.id === params.resumoId)
    : (t ? melhorResumo(t) : null);
  const lista = t ? S.questoesDoTopico(t)
    : (r ? S.questoes().filter(q => q.assunto === r.assunto || q.disciplinaId === r.disciplinaId) : []);
  const titulo = r?.titulo || t?.nome || 'Assunto';
  const disciplinaId = r?.disciplinaId || t?.disciplinaId;

  const node = el(`
  <div class="stack q-wrap">
    <div class="card">
      <div class="card-head">
        <div>
          <span class="tag">${esc(S.rotuloDisciplina(disciplinaId))}</span>
          <h1 style="margin-top:4px">${esc(titulo)}</h1>
        </div>
        ${r ? `<span class="chip static spacer">${r.minutos} min</span>` : ''}
      </div>
      ${t && r && t.nome !== r.titulo ? `<p class="small dim">Assunto do edital: ${esc(t.nome)}</p>` : ''}
      ${r ? `
        <ol class="muted" style="padding-left:20px;line-height:1.7">
          ${r.pontos.map(p => `<li style="margin-bottom:10px">${esc(p)}</li>`).join('')}
        </ol>
        ${r.armadilhas?.length ? `<div class="callout fgv">
          <div class="callout-title">Como a FGV costuma cobrar isso</div>
          <ul class="small" style="padding-left:18px;margin:0">${r.armadilhas.map(a => `<li style="margin-bottom:4px">${esc(a)}</li>`).join('')}</ul>
        </div>` : ''}
        ${r.fonteNecessaria ? `<div class="callout" style="margin-top:12px">
          <div class="callout-title">Confirme na fonte oficial</div>
          <div class="small muted">Conteúdo sujeito a alteração. Confira no edital e na legislação publicada.</div>
        </div>` : ''}`
      : `<div class="callout info">
          <div class="callout-title">Resumo ainda não cadastrado</div>
          <div class="small">Este assunto consta do edital, mas o resumo não foi escrito. Resolva as questões da disciplina
          para treinar o tema ou cadastre o conteúdo na área de administração.</div>
        </div>`}
      <div class="row" style="margin-top:16px">
        <button class="btn btn-ghost" data-voltar>Voltar</button>
        <button class="btn btn-primary spacer" data-questoes ${lista.length ? '' : 'disabled'}>
          ${icon('play', 18)} Resolver ${lista.length} ${lista.length === 1 ? 'questão' : 'questões'}
        </button>
      </div>
    </div>
  </div>`);

  node.querySelector('[data-voltar]').addEventListener('click', () => ir('resumo'));
  node.querySelector('[data-questoes]').addEventListener('click', () => {
    if (tarefaId) S.concluirTarefa(tarefaId, true);
    ir('questoes', { sessao: true, modo: 'treino', lista: S.embaralhar(lista) });
  });
  return node;
}

/** Resumo mais aderente ao tópico do edital. */
function melhorResumo(t) {
  const cands = S.resumos().filter(r => r.disciplinaId === t.disciplinaId);
  let melhor = null, score = 0;
  for (const r of cands) {
    const s = S.aderencia({ palavras: r.palavras || [], assunto: r.assunto || r.titulo, topicos: r.topicos }, t);
    if (s > score) { score = s; melhor = r; }
  }
  return score > 0 ? melhor : null;
}

/* ---------------- flashcards ---------------- */

function montarFlash(corpo) {
  const cards = S.flashcards();
  if (!cards.length) { corpo.innerHTML = `<div class="card">${vazio('Sem flashcards', 'Cadastre flashcards na área de administração.')}</div>`; return; }
  let i = 0;
  corpo.innerHTML = `
    <div class="card">
      <div class="card-head">
        <h2>Flashcards</h2>
        <span class="chip static spacer" data-pos>1 / ${cards.length}</span>
      </div>
      <div class="flash" data-flash>
        <div class="flash-inner">
          <div class="flash-face" data-frente></div>
          <div class="flash-face back" data-verso></div>
        </div>
      </div>
      <p class="xsmall dim center" style="margin:10px 0 0">Toque no cartão para virar.</p>
      <div class="row" style="margin-top:14px">
        <button class="btn btn-ghost" data-ant>Anterior</button>
        <button class="btn btn-danger" data-dificil>Não lembrei</button>
        <button class="btn btn-accent" data-facil>Lembrei</button>
        <button class="btn btn-ghost spacer" data-prox>Próximo</button>
      </div>
    </div>`;

  const flash = corpo.querySelector('[data-flash]');
  const frente = corpo.querySelector('[data-frente]');
  const verso = corpo.querySelector('[data-verso]');
  const pos = corpo.querySelector('[data-pos]');

  function pinta() {
    const c = cards[i];
    flash.classList.remove('flipped');
    frente.innerHTML = `<div><div class="tag">${esc(S.rotuloDisciplina(c.disciplinaId))}</div>
      <h2 style="margin-top:8px">${esc(c.frente)}</h2></div>`;
    verso.innerHTML = `<div class="muted">${esc(c.verso)}</div>`;
    pos.textContent = `${i + 1} / ${cards.length}`;
  }
  flash.addEventListener('click', () => flash.classList.toggle('flipped'));
  corpo.querySelector('[data-ant]').addEventListener('click', () => { i = (i - 1 + cards.length) % cards.length; pinta(); });
  corpo.querySelector('[data-prox]').addEventListener('click', () => { i = (i + 1) % cards.length; pinta(); });
  corpo.querySelector('[data-facil]').addEventListener('click', () => { registra(true); });
  corpo.querySelector('[data-dificil]').addEventListener('click', () => { registra(false); });

  function registra(ok) {
    const c = cards[i];
    const p = S.state.data.flashcards[c.id] || { acertos: 0, erros: 0 };
    ok ? p.acertos++ : p.erros++;
    p.ultimaVez = S.hoje();
    S.state.data.flashcards[c.id] = p;
    S.persist();
    toast(ok ? 'Marcado como lembrado.' : 'Vai voltar com mais frequência.');
    i = (i + 1) % cards.length;
    pinta();
  }
  pinta();
}

/* ---------------- mapas mentais ---------------- */

function montarMapas(corpo) {
  corpo.innerHTML = MAPAS.map(m => `
    <div class="card">
      <div class="card-head">
        <h2>${esc(m.titulo)}</h2>
        <span class="chip static spacer" style="color:${S.corDisciplina(m.disciplinaId)}">${esc(S.rotuloDisciplina(m.disciplinaId))}</span>
      </div>
      <div class="mindmap">${no(m.raiz)}</div>
    </div>`).join('');

  function no(n) {
    return `<ul><li><span class="node">${esc(n.nome)}</span>${(n.filhos || []).map(f => no(f)).join('')}</li></ul>`;
  }
}

/* ---------------- medalhas ---------------- */

function montarMedalhas(corpo) {
  const ms = S.medalhas();
  const g = S.resumoGeral();
  const gam = S.state.data.gamif;
  corpo.innerHTML = `
    <div class="grid grid-3">
      ${stat('Sequência atual', `${gam.streak || 0} dias`, 'dias seguidos estudando')}
      ${stat('Dias com estudo', (gam.dias || []).length, 'registrados')}
      ${stat('Conquistas', `${ms.filter(m => m.ganha).length}/${ms.length}`, 'desbloqueadas')}
    </div>
    <div class="card">
      <div class="card-head"><h2>Medalhas</h2></div>
      <div class="medals">
        ${ms.map(m => `<div class="medal ${m.ganha ? '' : 'locked'}" title="${esc(m.nome)}">
          <div class="emo">${m.emo}</div><div class="nm">${esc(m.nome)}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-head"><h2>Números gerais</h2></div>
      <table class="data">
        <tbody>
          <tr><td>Questões respondidas</td><td class="num b">${g.total}</td></tr>
          <tr><td>Acertos</td><td class="num b">${g.acertos}</td></tr>
          <tr><td>Tempo total em questões</td><td class="num b">${Math.round(g.tempoTotal / 60)} min</td></tr>
          <tr><td>Simulados realizados</td><td class="num b">${S.state.data.simulados.length}</td></tr>
          <tr><td>Erros no caderno</td><td class="num b">${S.state.data.erros.filter(e => !e.dominado).length}</td></tr>
          <tr><td>Erros dominados</td><td class="num b">${S.state.data.erros.filter(e => e.dominado).length}</td></tr>
        </tbody>
      </table>
    </div>`;
}
