/* views/admin.js — área do administrador: questões, resumos, flashcards e importação. */

import * as S from '../store.js';
import { el, esc, icon, toast, sheet, confirmar, stat, vazio } from '../ui.js';
import { DIFICULDADES } from '../data.js';

let abaAdmin = 'questoes';

export function viewAdmin(ir, params = {}) {
  if (S.state.user.perfilTipo !== 'admin') {
    return el(`<div class="card">${vazio('Área restrita', 'Esta seção é exclusiva do perfil administrador. Crie uma conta de administrador na tela de acesso.')}</div>`);
  }
  if (params.aba) abaAdmin = params.aba;

  const node = el(`
  <div class="stack">
    <div class="grid grid-4">
      ${stat('Questões', S.questoes().length, 'no banco')}
      ${stat('Disciplinas', S.disciplinas().length, `${S.disciplinas().reduce((a, d) => a + d.topicos.length, 0)} assuntos do edital`)}
      ${stat('Resumos', S.resumos().length, 'teoria cadastrada')}
      ${stat('Flashcards', S.flashcards().length, 'cartões')}
    </div>

    <div class="card">
      <div class="seg">
        <button data-aba="questoes" aria-pressed="${abaAdmin === 'questoes'}">Questões</button>
        <button data-aba="importar" aria-pressed="${abaAdmin === 'importar'}">Importar</button>
      </div>
    </div>

    <div data-corpo></div>
  </div>`);

  const corpo = node.querySelector('[data-corpo]');
  if (abaAdmin === 'questoes') montarQuestoes(corpo, ir); else montarImportar(corpo, ir);
  node.querySelectorAll('[data-aba]').forEach(b => b.addEventListener('click', () => { abaAdmin = b.dataset.aba; ir('admin'); }));
  return node;
}

function montarQuestoes(corpo, ir) {
  const qs = S.questoes();
  corpo.innerHTML = `
    <div class="card">
      <div class="card-head"><h2>Banco de questões</h2>
        <button class="btn btn-primary spacer" data-nova>${icon('mais', 18)} Nova questão</button>
      </div>
      <p class="xsmall dim">
        Cadastre apenas questões próprias ou com licença. O app não distribui questões protegidas de terceiros.
      </p>
      <div class="stack" style="margin-top:12px">
        ${qs.map(q => `<div class="task" data-tipo="questoes">
          <span class="task-bar" style="background:${S.corDisciplina(q.disciplinaId)}"></span>
          <div style="flex:1;min-width:0">
            <div class="task-title">${esc(q.comando.slice(0, 80))}${q.comando.length > 80 ? '…' : ''}</div>
            <div class="task-sub">${esc(q.id)} · ${esc(S.rotuloDisciplina(q.disciplinaId))} · ${esc(q.assunto || 'sem assunto')} · gabarito ${q.correta}</div>
          </div>
          <button class="btn btn-quiet" data-edit="${q.id}">${icon('lapis', 16)}</button>
          <button class="btn btn-quiet" data-del="${q.id}">${icon('lixo', 16)}</button>
        </div>`).join('')}
      </div>
    </div>`;

  corpo.querySelector('[data-nova]').addEventListener('click', () => editarQuestao(null, ir));
  corpo.querySelectorAll('[data-edit]').forEach(b => b.addEventListener('click', () => editarQuestao(b.dataset.edit, ir)));
  corpo.querySelectorAll('[data-del]').forEach(b => b.addEventListener('click', async () => {
    if (!await confirmar('Excluir questão', 'A questão sai do banco. Respostas já registradas são mantidas no histórico.', { okLabel: 'Excluir', perigo: true })) return;
    S.removerQuestao(b.dataset.del); toast('Questão excluída.'); ir('admin');
  }));
}

function editarQuestao(id, ir) {
  const nova = !id;
  const q = id ? structuredClone(S.questao(id)) : {
    id: S.uid('q'), disciplinaId: S.disciplinas()[0]?.id || 'leg', assunto: '', palavras: [],
    dificuldade: 'media', tempoAlvo: S.SEG_POR_QUESTAO, contexto: '', comando: '',
    alternativas: ['A', 'B', 'C', 'D'].map(k => ({ k, texto: '', porqueErrada: '' })),
    correta: 'A', justificativa: '', dicaFGV: '', tags: []
  };
  const ds = S.disciplinas();

  const s = sheet(nova ? 'Nova questão' : 'Editar questão', `
    <div class="stack">
      <div class="grid grid-2">
        <div class="field"><label for="q-disc">Disciplina</label>
          <select class="input" id="q-disc">${ds.map(d => `<option value="${d.id}" ${q.disciplinaId === d.id ? 'selected' : ''}>${esc(d.nome)}</option>`).join('')}</select></div>
        <div class="field"><label for="q-top">Assunto</label>
          <input class="input" id="q-top" list="assuntos-lista" value="${esc(q.assunto || '')}" placeholder="Ex.: Lei nº 8.080/1990">
          <datalist id="assuntos-lista"></datalist></div>
        <div class="field"><label for="q-dif">Dificuldade</label>
          <select class="input" id="q-dif">${DIFICULDADES.map(d => `<option value="${d.id}" ${q.dificuldade === d.id ? 'selected' : ''}>${esc(d.nome)}</option>`).join('')}</select></div>
        <div class="field"><label for="q-tempo">Tempo alvo (s)</label>
          <input class="input" type="number" id="q-tempo" value="${q.tempoAlvo}" min="30" max="600" step="10"></div>
      </div>
      <div class="field"><label for="q-ctx">Contexto (enunciado longo, estilo FGV)</label>
        <textarea class="input" id="q-ctx">${esc(q.contexto)}</textarea></div>
      <div class="field"><label for="q-cmd">Comando</label>
        <textarea class="input" id="q-cmd" style="min-height:70px">${esc(q.comando)}</textarea></div>
      <div class="field"><label>Alternativas e justificativa de cada erro</label>
        <div class="stack">
          ${q.alternativas.map(a => `
            <div class="card" style="padding:12px" data-alt="${a.k}">
              <div class="row">
                <button class="chip" data-correta="${a.k}" aria-pressed="${q.correta === a.k}">${a.k} — correta</button>
              </div>
              <textarea class="input" data-texto style="min-height:60px;margin-top:8px" placeholder="Texto da alternativa ${a.k}">${esc(a.texto)}</textarea>
              <textarea class="input" data-erro style="min-height:56px;margin-top:8px" placeholder="Por que está errada (deixe vazio na correta)">${esc(a.porqueErrada)}</textarea>
            </div>`).join('')}
        </div>
      </div>
      <div class="field"><label for="q-just">Justificativa técnica</label>
        <textarea class="input" id="q-just">${esc(q.justificativa)}</textarea></div>
      <div class="field"><label for="q-dica">Dica: como a FGV tentou confundir</label>
        <textarea class="input" id="q-dica">${esc(q.dicaFGV || '')}</textarea></div>
      <div class="field"><label for="q-palavras">Palavras-chave (separadas por vírgula)</label>
        <input class="input" id="q-palavras" value="${esc((q.palavras || []).join(', '))}"
          placeholder="Ex.: 8.080, princípios, organização">
        <span class="help">Usadas para casar a questão com os assuntos do edital ao montar o plano.</span></div>
    </div>`, { acoes: `<button class="btn btn-primary btn-block" data-salvar>Salvar questão</button>` });

  const selDisc = s.node.querySelector('#q-disc');
  const inpTop = s.node.querySelector('#q-top');
  const lista = s.node.querySelector('#assuntos-lista');
  function pintaAssuntos() {
    const d = S.disciplina(selDisc.value);
    const sugestoes = [...new Set([...S.assuntosDisponiveis(selDisc.value), ...(d?.topicos || []).map(t => t.nome)])];
    lista.innerHTML = sugestoes.map(a => `<option value="${esc(a)}"></option>`).join('');
  }
  selDisc.addEventListener('change', pintaAssuntos);
  pintaAssuntos();

  let correta = q.correta;
  s.node.querySelectorAll('[data-correta]').forEach(b => b.addEventListener('click', () => {
    correta = b.dataset.correta;
    s.node.querySelectorAll('[data-correta]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
  }));

  s.node.querySelector('[data-salvar]').addEventListener('click', () => {
    const alts = [...s.node.querySelectorAll('[data-alt]')].map(n => ({
      k: n.dataset.alt,
      texto: n.querySelector('[data-texto]').value.trim(),
      porqueErrada: n.querySelector('[data-erro]').value.trim()
    }));
    if (alts.some(a => !a.texto)) { toast('Preencha as quatro alternativas.'); return; }
    const cmd = s.node.querySelector('#q-cmd').value.trim();
    if (!cmd) { toast('Informe o comando da questão.'); return; }
    S.salvarQuestao({
      ...q,
      disciplinaId: selDisc.value,
      assunto: inpTop.value.trim(),
      palavras: s.node.querySelector('#q-palavras').value.split(',').map(x => x.trim()).filter(Boolean),
      dificuldade: s.node.querySelector('#q-dif').value,
      tempoAlvo: Number(s.node.querySelector('#q-tempo').value) || S.SEG_POR_QUESTAO,
      contexto: s.node.querySelector('#q-ctx').value.trim(),
      comando: cmd, alternativas: alts, correta,
      justificativa: s.node.querySelector('#q-just').value.trim(),
      dicaFGV: s.node.querySelector('#q-dica').value.trim()
    });
    s.close(); toast('Questão salva.'); ir('admin');
  });
}

function montarImportar(corpo, ir) {
  corpo.innerHTML = `
    <div class="card">
      <div class="card-head"><h2>Importar questões (JSON)</h2></div>
      <p class="small muted">Lista de objetos no mesmo formato do banco. Campos obrigatórios:
        <code>id, disciplinaId, assunto, comando, alternativas (4), correta, justificativa</code>.</p>
      <div class="field" style="margin-top:10px">
        <textarea class="input" id="imp-json" style="min-height:200px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.84rem"
          placeholder='[{"id":"q100","disciplinaId":"leg","assunto":"Lei nº 8.080/1990","palavras":["8.080"],"dificuldade":"media","contexto":"...","comando":"...","alternativas":[{"k":"A","texto":"...","porqueErrada":"..."}],"correta":"A","justificativa":"...","dicaFGV":"..."}]'></textarea>
      </div>
      <div class="row" style="margin-top:12px">
        <input type="file" accept="application/json" id="imp-file" class="input" style="max-width:260px">
        <button class="btn btn-primary spacer" data-importar>${icon('upload', 18)} Importar</button>
      </div>
      <div class="callout" style="margin-top:14px">
        <div class="callout-title">Uso autorizado</div>
        <div class="small muted">Importe somente questões próprias ou licenciadas. Questões de bancas e cursinhos são protegidas por direito autoral.</div>
      </div>
    </div>

    <div class="card">
      <div class="card-head"><h2>Exportar banco</h2></div>
      <p class="small muted">Gera um arquivo com disciplinas, questões, resumos e flashcards para backup ou migração.</p>
      <button class="btn btn-ghost" data-exportar style="margin-top:10px">${icon('download', 18)} Baixar banco</button>
    </div>`;

  corpo.querySelector('#imp-file').addEventListener('change', async e => {
    const f = e.target.files[0]; if (!f) return;
    corpo.querySelector('#imp-json').value = await f.text();
  });
  corpo.querySelector('[data-importar]').addEventListener('click', () => {
    try {
      const n = S.importarQuestoesJSON(corpo.querySelector('#imp-json').value);
      toast(`${n} ${n === 1 ? 'questão importada' : 'questões importadas'}.`);
      ir('admin');
    } catch (err) { toast(`Erro: ${err.message}`); }
  });
  corpo.querySelector('[data-exportar]').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(S.state.banco, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `banco-executivo-saude-${S.hoje()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  });
}
