/* views/plano.js — calendário diário, semanal e mensal com arrastar-e-soltar. */

import * as S from '../store.js';
import { el, esc, icon, toast, sheet, confirmar } from '../ui.js';
import { iniciarTarefa } from './home.js';

let modo = 'semana';
let refData = null;

export function viewPlano(ir, params = {}) {
  refData = params.data || refData || S.hoje();
  if (params.modo) modo = params.modo;

  const node = el(`
  <div class="stack">
    <div class="card">
      <div class="row">
        <div class="seg" role="group" aria-label="Visão do calendário">
          <button data-modo="dia" aria-pressed="${modo === 'dia'}">Dia</button>
          <button data-modo="semana" aria-pressed="${modo === 'semana'}">Semana</button>
          <button data-modo="mes" aria-pressed="${modo === 'mes'}">Mês</button>
        </div>
        <span class="spacer"></span>
        <button class="btn btn-quiet" data-hoje>Hoje</button>
        <button class="btn btn-icon btn-ghost" data-ant aria-label="Anterior">${icon('setaEsq', 18)}</button>
        <button class="btn btn-icon btn-ghost" data-prox aria-label="Próximo">${icon('seta', 18)}</button>
      </div>
      <div class="row" style="margin-top:12px">
        <b>${esc(titulo())}</b>
        <span class="spacer"></span>
        <button class="btn btn-ghost" data-nova>${icon('mais', 18)} Nova tarefa</button>
        <button class="btn btn-ghost" data-replanejar>Replanejar</button>
        <button class="btn btn-primary" data-regerar>Regerar plano</button>
      </div>
      <div class="legend" style="margin-top:12px">
        <span><i style="background:var(--azul-500)"></i>Teoria</span>
        <span><i style="background:var(--verde-500)"></i>Questões</span>
        <span><i style="background:var(--ambar-500)"></i>Revisão</span>
        <span><i style="background:#7A45C7"></i>Simulado</span>
        <span><i style="background:#C7457F"></i>Redação</span>
      </div>
    </div>
    <div data-corpo></div>
  </div>`);

  const corpo = node.querySelector('[data-corpo]');
  corpo.innerHTML = modo === 'dia' ? htmlDia(refData) : modo === 'semana' ? htmlSemana() : htmlMes();
  ligar(corpo, ir, node);

  node.querySelectorAll('[data-modo]').forEach(b => b.addEventListener('click', () => {
    modo = b.dataset.modo; ir('plano');
  }));
  node.querySelector('[data-hoje]').addEventListener('click', () => { refData = S.hoje(); ir('plano'); });
  node.querySelector('[data-ant]').addEventListener('click', () => { refData = S.addDias(refData, passo() * -1); ir('plano'); });
  node.querySelector('[data-prox]').addEventListener('click', () => { refData = S.addDias(refData, passo()); ir('plano'); });
  node.querySelector('[data-replanejar]').addEventListener('click', () => {
    const n = S.replanejar();
    toast(n ? `${n} ${n === 1 ? 'tarefa redistribuída' : 'tarefas redistribuídas'}.` : 'Nada atrasado. Plano em dia.');
    ir('plano');
  });
  node.querySelector('[data-regerar]').addEventListener('click', async () => {
    if (!await confirmar('Regerar plano', 'As tarefas não concluídas serão recriadas a partir de hoje, com novas prioridades conforme seu desempenho. As concluídas e as revisões pendentes são mantidas.', { okLabel: 'Regerar' })) return;
    S.gerarPlano();
    toast('Plano recalculado com base no seu desempenho.');
    ir('plano');
  });
  node.querySelector('[data-nova]').addEventListener('click', () => novaTarefa(ir));

  return node;

  function passo() { return modo === 'dia' ? 1 : modo === 'semana' ? 7 : 30; }

  function titulo() {
    if (modo === 'dia') return `${S.DOW_NOMES[S.dow(refData)]}, ${S.dataExtenso(refData)}`;
    if (modo === 'semana') {
      const i = S.inicioSemana(refData);
      return `Semana de ${S.dataExtenso(i)} a ${S.dataExtenso(S.addDias(i, 6))}`;
    }
    const d = S.parseISO(refData);
    return `${S.MES_NOMES[d.getMonth()]} de ${d.getFullYear()}`;
  }
}

/* ---------------- renderizações ---------------- */

function htmlDia(data) {
  const ts = S.tarefasDe(data);
  const min = ts.reduce((a, t) => a + t.minutos, 0);
  const feitos = ts.filter(t => t.done).reduce((a, t) => a + t.minutos, 0);
  return `<div class="card">
    <div class="card-head">
      <h2>${data === S.hoje() ? 'Hoje' : S.DOW_NOMES[S.dow(data)]}</h2>
      <span class="chip static spacer">${feitos}/${min} min</span>
    </div>
    <div class="progress" style="margin-bottom:14px"><i style="width:${min ? (feitos / min) * 100 : 0}%"></i></div>
    <div data-drop="${data}">
      ${ts.length ? ts.map(htmlTarefa).join('') : '<p class="dim small">Dia livre. Você pode arrastar tarefas de outros dias para cá.</p>'}
    </div>
  </div>`;
}

function htmlSemana() {
  const ini = S.inicioSemana(refData);
  const dias = Array.from({ length: 7 }, (_, i) => S.addDias(ini, i));
  return `<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(230px,1fr))">
    ${dias.map(d => {
      const ts = S.tarefasDe(d);
      const min = ts.reduce((a, t) => a + t.minutos, 0);
      const ok = ts.filter(t => t.done).length;
      return `<div class="day-col ${d === S.hoje() ? 'today' : ''}" data-drop="${d}">
        <div class="day-head">
          <span class="dow">${S.DOW_NOMES[S.dow(d)]}</span>
          <span class="dnum">${S.parseISO(d).getDate()}/${S.parseISO(d).getMonth() + 1}</span>
          <span class="spacer"></span>
          <span class="xsmall dim">${ok}/${ts.length}</span>
        </div>
        ${min ? `<div class="progress" style="margin-bottom:10px"><i style="width:${(ts.filter(t => t.done).reduce((a, t) => a + t.minutos, 0) / min) * 100}%"></i></div>` : ''}
        ${ts.length ? ts.map(htmlTarefa).join('') : '<p class="xsmall dim">Sem tarefas.</p>'}
      </div>`;
    }).join('')}
  </div>`;
}

function htmlMes() {
  const d0 = S.parseISO(refData);
  const primeiro = new Date(d0.getFullYear(), d0.getMonth(), 1);
  const ini = S.addDias(S.iso(primeiro), -primeiro.getDay());
  const prova = S.state.data.perfil.dataProva;
  const cels = Array.from({ length: 42 }, (_, i) => S.addDias(ini, i));
  return `<div class="card">
    <div class="cal-month" style="margin-bottom:8px">
      ${S.DOW_CURTO.map(l => `<div class="xsmall dim center b">${l}</div>`).join('')}
    </div>
    <div class="cal-month">
      ${cels.map(d => {
        const ts = S.tarefasDe(d);
        const fora = S.parseISO(d).getMonth() !== d0.getMonth();
        return `<button class="cal-cell ${fora ? 'out' : ''} ${d === S.hoje() ? 'today' : ''} ${d === prova ? 'prova' : ''}" data-dia="${d}">
          <span class="b">${S.parseISO(d).getDate()}</span>
          ${d === prova ? '<span class="xsmall b" style="color:var(--bad)">PROVA</span>' : ''}
          <span class="pips">${ts.slice(0, 6).map(t => `<i class="${t.done ? 'done' : ''}"></i>`).join('')}</span>
        </button>`;
      }).join('')}
    </div>
  </div>`;
}

function htmlTarefa(t) {
  return `<div class="task ${t.done ? 'done' : ''}" data-tipo="${t.tipo}" data-id="${t.id}" draggable="true">
    <span class="task-bar"></span>
    <div style="flex:1;min-width:0">
      <div class="task-title">${esc(t.titulo)}</div>
      <div class="task-sub">${esc(t.sub || '')} · ${t.minutos} min${t.replanejada ? ' · remarcada' : ''}</div>
    </div>
    <button class="task-check" data-check="${t.id}" aria-label="${t.done ? 'Desmarcar' : 'Concluir'}">${icon('check', 16)}</button>
  </div>`;
}

/* ---------------- interações ---------------- */

function ligar(corpo, ir, root) {
  corpo.querySelectorAll('[data-check]').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const t = S.state.data.plano.find(x => x.id === b.dataset.check);
    S.concluirTarefa(b.dataset.check, !t.done);
    toast(t.done ? 'Tarefa concluída.' : 'Tarefa reaberta.');
    ir('plano');
  }));

  corpo.querySelectorAll('.task').forEach(n => {
    n.addEventListener('click', e => {
      if (e.target.closest('[data-check]')) return;
      abrirTarefa(n.dataset.id, ir);
    });
    n.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', n.dataset.id);
      e.dataTransfer.effectAllowed = 'move';
      n.classList.add('dragging');
    });
    n.addEventListener('dragend', () => n.classList.remove('dragging'));
  });

  corpo.querySelectorAll('[data-drop]').forEach(z => {
    z.addEventListener('dragover', e => { e.preventDefault(); z.style.outline = '2px dashed var(--brand)'; });
    z.addEventListener('dragleave', () => { z.style.outline = ''; });
    z.addEventListener('drop', e => {
      e.preventDefault();
      z.style.outline = '';
      const id = e.dataTransfer.getData('text/plain');
      if (!id) return;
      S.moverTarefa(id, z.dataset.drop);
      toast(`Tarefa movida para ${S.dataExtenso(z.dataset.drop)}.`);
      ir('plano');
    });
  });

  corpo.querySelectorAll('[data-dia]').forEach(b => b.addEventListener('click', () => {
    refData = b.dataset.dia;
    ir('plano', { modo: 'dia', data: b.dataset.dia });
  }));
}

function abrirTarefa(id, ir) {
  const t = S.state.data.plano.find(x => x.id === id);
  if (!t) return;
  const s = sheet(t.titulo, `
    <div class="stack">
      <div class="row">
        <span class="chip static">${rotuloTipo(t.tipo)}</span>
        <span class="chip static">${t.minutos} min</span>
        <span class="chip static">${S.dataExtenso(t.data)}</span>
        ${t.done ? '<span class="chip ok static">Concluída</span>' : ''}
      </div>
      <p class="muted">${esc(t.sub || '')}</p>
      <div class="field">
        <label for="rem">Remarcar para</label>
        <input class="input" type="date" id="rem" value="${t.data}">
      </div>
    </div>`, {
    acoes: `
      <button class="btn btn-danger" data-excluir>${icon('lixo', 16)} Excluir</button>
      <button class="btn btn-ghost" data-toggle>${t.done ? 'Reabrir' : 'Concluir'}</button>
      <button class="btn btn-primary spacer" data-iniciar>${icon('play', 18)} Iniciar</button>`
  });
  s.node.querySelector('#rem').addEventListener('change', e => {
    if (!e.target.value) return;
    S.moverTarefa(t.id, e.target.value);
    toast('Tarefa remarcada.');
    s.close(); ir('plano');
  });
  s.node.querySelector('[data-toggle]').addEventListener('click', () => {
    S.concluirTarefa(t.id, !t.done); s.close(); ir('plano');
  });
  s.node.querySelector('[data-excluir]').addEventListener('click', async () => {
    if (!await confirmar('Excluir tarefa', 'A tarefa será removida do plano. O conteúdo continua disponível no banco de questões.', { okLabel: 'Excluir', perigo: true })) return;
    S.state.data.plano = S.state.data.plano.filter(x => x.id !== t.id);
    S.persist(); s.close(); ir('plano');
  });
  s.node.querySelector('[data-iniciar]').addEventListener('click', () => { s.close(); iniciarTarefa(t, ir); });
}

function novaTarefa(ir) {
  const ds = S.disciplinas();
  const s = sheet('Nova tarefa', `
    <div class="stack">
      <div class="field"><label for="nt-tit">Título</label>
        <input class="input" id="nt-tit" placeholder="Ex.: Redação — estrutura dissertativa"></div>
      <div class="grid grid-2">
        <div class="field"><label for="nt-tipo">Tipo</label>
          <select class="input" id="nt-tipo">
            <option value="teoria">Teoria</option>
            <option value="questoes">Questões</option>
            <option value="revisao">Revisão</option>
            <option value="simulado">Simulado</option>
            <option value="redacao">Redação</option>
          </select></div>
        <div class="field"><label for="nt-disc">Disciplina</label>
          <select class="input" id="nt-disc"><option value="">—</option>
            ${ds.map(d => `<option value="${d.id}">${esc(d.nome)}</option>`).join('')}
          </select></div>
        <div class="field"><label for="nt-data">Data</label>
          <input class="input" type="date" id="nt-data" value="${S.hoje()}"></div>
        <div class="field"><label for="nt-min">Duração (min)</label>
          <input class="input" type="number" id="nt-min" value="30" min="5" max="300" step="5"></div>
      </div>
    </div>`, { acoes: `<button class="btn btn-primary btn-block" data-salvar>Adicionar ao plano</button>` });

  s.node.querySelector('[data-salvar]').addEventListener('click', () => {
    const tit = s.node.querySelector('#nt-tit').value.trim();
    if (!tit) { toast('Informe o título da tarefa.'); return; }
    const dId = s.node.querySelector('#nt-disc').value || null;
    S.state.data.plano.push({
      id: S.uid('t'), data: s.node.querySelector('#nt-data').value,
      tipo: s.node.querySelector('#nt-tipo').value,
      minutos: Number(s.node.querySelector('#nt-min').value) || 30,
      titulo: tit, sub: dId ? S.nomeDisciplina(dId) : 'Tarefa manual',
      disciplinaId: dId, topicoId: null, meta: null, done: false, doneAt: null, origem: 'manual'
    });
    S.persist(); s.close(); toast('Tarefa adicionada.'); ir('plano');
  });
}

function rotuloTipo(t) {
  return { teoria: 'Teoria', questoes: 'Questões', revisao: 'Revisão', simulado: 'Simulado', redacao: 'Redação' }[t] || t;
}
