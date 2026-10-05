/* views/config.js — perfil, composição da prova, assuntos próprios, aparência e dados. */

import * as S from '../store.js';
import { el, esc, icon, toast, confirmar } from '../ui.js';
import { NIVEIS, EDITAL, CARGO_ALVO } from '../data.js';
import { mostrarTermos } from './ativacao.js';

export function viewConfig(ir) {
  const p = S.state.data.perfil;
  const c = S.state.data.config;
  const faltam = Math.max(0, S.diffDias(S.hoje(), EDITAL.dataProva));

  const node = el(`
  <div class="stack">
    <div class="card">
      <div class="card-head"><h2>Meu perfil</h2>
        <span class="chip static spacer">${esc(EDITAL.numero)}</span>
      </div>
      <div class="grid grid-2">
        <div class="field"><label for="c-nome">Nome</label>
          <input class="input" id="c-nome" value="${esc(p.nome)}"></div>
        <div class="field"><label>Cargo</label>
          <input class="input" value="${esc(CARGO_ALVO.nome)} · nível superior" disabled>
          <span class="help">${CARGO_ALVO.vagas.total} vagas em ${esc(CARGO_ALVO.vagas.lotacao)} · ${esc(CARGO_ALVO.vencimento)}</span></div>
        <div class="field"><label>Data da prova objetiva</label>
          <input class="input" type="date" value="${EDITAL.dataProva}" disabled>
          <span class="help">${S.dataExtenso(EDITAL.dataProva)} · faltam ${faltam} dias</span></div>
        <div class="field"><label for="c-horas">Horas de estudo por dia</label>
          <input class="input" type="number" id="c-horas" min="0.5" max="14" step="0.5" value="${p.horasDia}"></div>
        <div class="field"><label for="c-meta">Meta de acerto (%)</label>
          <input class="input" type="number" id="c-meta" min="40" max="100" step="5" value="${p.metaAcerto}"></div>
        <div class="field"><label for="c-dif">Principais dificuldades</label>
          <input class="input" id="c-dif" value="${esc(p.dificuldades || '')}"></div>
        <div class="field"><label for="c-fortes">Onde você já vai bem</label>
          <input class="input" id="c-fortes" value="${esc(p.fortes || '')}"></div>
      </div>
      <div class="field" style="margin-top:12px">
        <label>Dias disponíveis</label>
        <div class="row" data-dias>
          ${S.DOW_NOMES.map((n, i) => `<button class="chip" data-dia="${i}" aria-pressed="${p.diasSemana.includes(i)}">${esc(n)}</button>`).join('')}
        </div>
      </div>
      <button class="btn btn-primary btn-block" style="margin-top:14px" data-salvar-perfil>Salvar e recalcular plano</button>
    </div>

    <div class="card">
      <div class="card-head"><h2>Composição da sua prova</h2>
        <span class="chip static spacer">${EDITAL.totalQuestoes} questões · ${EDITAL.aprovacao.totalMax} pontos</span>
      </div>
      <p class="small muted">Definida pelo edital para os cargos de nível superior. O nível que você declara em cada
      disciplina altera quanto tempo de teoria o plano reserva para ela.</p>
      <div class="stack" style="margin-top:12px">
        ${S.disciplinas().map(d => `
          <div class="row" style="padding:10px;border:1px solid var(--border);border-radius:12px">
            <div style="flex:1;min-width:170px">
              <div class="b" style="color:${d.cor}">${esc(d.nome)}</div>
              <div class="xsmall dim">${d.questoes} ${d.questoes === 1 ? 'questão' : 'questões'} ·
                Módulo ${d.modulo === 2 ? 'II (2 pontos cada)' : 'I (1 ponto cada)'} ·
                ${d.topicos.length} ${d.topicos.length === 1 ? 'assunto' : 'assuntos'}</div>
            </div>
            <select class="input" data-nivel-disc="${d.id}" style="max-width:170px;min-height:42px">
              ${NIVEIS.map(n => `<option value="${n.id}" ${(p.niveis[d.id] || 'intermediario') === n.id ? 'selected' : ''}>${n.nome}</option>`).join('')}
            </select>
          </div>`).join('')}
      </div>
      <div class="callout info" style="margin-top:12px">
        <div class="callout-title">Critério de aprovação</div>
        <div class="small">Mínimo de ${EDITAL.aprovacao.modulo2Min} pontos no Módulo II (40% dele) e
        ${EDITAL.aprovacao.totalMin} pontos no total (40% da prova). O desempate começa pelo Módulo II.</div>
      </div>
    </div>

    <div class="card">
      <div class="card-head"><h2>Assuntos próprios</h2>
        ${S.state.data.edital.atualizadoEm ? `<span class="chip ok static spacer">salvo em ${S.dataExtenso(S.state.data.edital.atualizadoEm.slice(0, 10))}</span>` : ''}
      </div>
      <p class="small muted">
        O conteúdo programático oficial já está carregado. Use este campo para acrescentar assuntos seus —
        um por linha, no formato <code>Disciplina | Assunto</code>. Disciplinas válidas:
        Língua Portuguesa, Raciocínio Lógico e Matemático,
        História e Geografia do Tocantins, Legislação, Conhecimentos Específicos.
      </p>
      <div class="field" style="margin-top:10px">
        <textarea class="input" id="c-edital" style="min-height:120px"
          placeholder="Legislação | Lei Complementar nº 141/2012&#10;Conhecimentos Específicos | Lei nº 13.848/2019 (agências reguladoras)">${esc(S.state.data.edital.texto || '')}</textarea>
      </div>
      <div class="row" style="margin-top:12px">
        <button class="btn btn-ghost" data-salvar-edital>Salvar texto</button>
        <button class="btn btn-primary spacer" data-importar-edital>${icon('upload', 18)} Acrescentar ao plano</button>
      </div>
    </div>

    <div class="card">
      <div class="card-head"><h2>Aparência e acessibilidade</h2></div>
      <div class="grid grid-2">
        <div class="field"><label>Tema</label>
          <div class="seg">
            ${[['auto', 'Automático'], ['light', 'Claro'], ['dark', 'Escuro']].map(([v, n]) =>
              `<button data-tema="${v}" aria-pressed="${c.tema === v}">${n}</button>`).join('')}
          </div>
        </div>
        <div class="field"><label>Tamanho da letra</label>
          <div class="seg">
            ${[['m', 'Padrão'], ['g', 'Grande'], ['gg', 'Maior']].map(([v, n]) =>
              `<button data-fonte="${v}" aria-pressed="${c.fonte === v}">${n}</button>`).join('')}
          </div>
        </div>
        <div class="field"><label for="c-foco">Pomodoro — foco (min)</label>
          <input class="input" type="number" id="c-foco" min="10" max="90" step="5" value="${c.pomodoroFoco}"></div>
        <div class="field"><label for="c-pausa">Pomodoro — pausa (min)</label>
          <input class="input" type="number" id="c-pausa" min="3" max="30" value="${c.pomodoroPausa}"></div>
      </div>
      <div class="row" style="margin-top:12px">
        <button class="chip" data-notif aria-pressed="${c.notificacoes}">${icon('clock', 15)} Notificações de estudo e revisão</button>
      </div>
      <p class="xsmall dim" style="margin-top:8px">No iPad e no iPhone, as notificações funcionam com o app instalado na tela inicial.</p>
    </div>

    <div class="card">
      <div class="card-head"><h2>Conta e dados</h2></div>
      <p class="small muted">Conta: <b>${esc(S.state.user.email)}</b> · perfil <b>${esc(S.state.user.perfilTipo)}</b></p>
      <div class="row" style="margin-top:12px">
        <button class="btn btn-ghost" data-exportar>${icon('download', 18)} Exportar meus dados</button>
        <button class="btn btn-ghost" data-importar>${icon('upload', 18)} Importar backup</button>
        <input type="file" accept="application/json" data-arquivo class="hide">
        <button class="btn btn-ghost" data-demo>Recarregar dados de exemplo</button>
        <button class="btn btn-danger spacer" data-zerar>Apagar meu progresso</button>
      </div>
      <p class="xsmall dim" style="margin-top:10px">
        Os dados ficam neste dispositivo. Para levar seu progresso a outro aparelho, exporte o arquivo aqui
        e importe-o lá. A sincronização automática exige o servidor configurado em <code>api.base</code>.
      </p>
      <div class="row" style="margin-top:12px;border-top:1px solid var(--border);padding-top:12px">
        <div class="xsmall dim" style="flex:1;min-width:180px">
          Responsável: Donato Petronella Júnior · CPF 170.828.308-07<br>
          Suporte: <a href="mailto:donato.petronella@hotmail.com">donato.petronella@hotmail.com</a>
        </div>
        <button class="btn btn-quiet" data-termos>Termos de uso e privacidade</button>
      </div>
    </div>
  </div>`);

  /* perfil */
  node.querySelectorAll('[data-dia]').forEach(b => b.addEventListener('click', () => {
    const i = Number(b.dataset.dia);
    const on = b.getAttribute('aria-pressed') === 'true';
    b.setAttribute('aria-pressed', String(!on));
    p.diasSemana = on ? p.diasSemana.filter(x => x !== i) : [...p.diasSemana, i].sort();
  }));
  node.querySelector('[data-salvar-perfil]').addEventListener('click', () => {
    p.nome = node.querySelector('#c-nome').value.trim() || p.nome;
    p.nivel = 'superior';
    p.cargo = CARGO_ALVO.nome;
    p.dataProva = EDITAL.dataProva;
    p.horasDia = Number(node.querySelector('#c-horas').value) || 2;
    p.metaAcerto = Number(node.querySelector('#c-meta').value) || 70;
    p.dificuldades = node.querySelector('#c-dif').value.trim();
    p.fortes = node.querySelector('#c-fortes').value.trim();
    if (!p.diasSemana.length) p.diasSemana = [1, 2, 3, 4, 5];
    S.gerarPlano();
    toast('Perfil salvo e plano recalculado.');
    ir('config');
  });
  node.querySelectorAll('[data-nivel-disc]').forEach(sel => sel.addEventListener('change', () => {
    p.niveis[sel.dataset.nivelDisc] = sel.value;
    S.persist();
    toast('Nível atualizado. Use "Salvar e recalcular plano" para refletir no cronograma.');
  }));

  /* assuntos próprios */
  node.querySelector('[data-salvar-edital]').addEventListener('click', () => {
    S.salvarEdital(node.querySelector('#c-edital').value);
    toast('Texto salvo.');
  });
  node.querySelector('[data-importar-edital]').addEventListener('click', async () => {
    const txt = node.querySelector('#c-edital').value.trim();
    if (!txt) { toast('Escreva ao menos uma linha no formato Disciplina | Assunto.'); return; }
    if (!await confirmar('Acrescentar assuntos',
      'Os assuntos novos entram no plano junto com os do edital. Nada existente é apagado.',
      { okLabel: 'Acrescentar' })) return;
    const n = S.importarTopicos(txt);
    S.salvarEdital(txt);
    S.gerarPlano();
    toast(n ? `${n} ${n === 1 ? 'assunto acrescentado' : 'assuntos acrescentados'}.` : 'Nenhuma linha válida encontrada.');
    ir('config');
  });

  /* aparência */
  node.querySelectorAll('[data-tema]').forEach(b => b.addEventListener('click', () => { S.setConfig('tema', b.dataset.tema); ir('config'); }));
  node.querySelectorAll('[data-fonte]').forEach(b => b.addEventListener('click', () => { S.setConfig('fonte', b.dataset.fonte); ir('config'); }));
  node.querySelector('#c-foco').addEventListener('change', e => S.setConfig('pomodoroFoco', Number(e.target.value) || 25));
  node.querySelector('#c-pausa').addEventListener('change', e => S.setConfig('pomodoroPausa', Number(e.target.value) || 5));
  node.querySelector('[data-notif]').addEventListener('click', async e => {
    const on = e.currentTarget.getAttribute('aria-pressed') !== 'true';
    if (on && 'Notification' in window) {
      const perm = await Notification.requestPermission();
      if (perm !== 'granted') { toast('Permissão de notificação negada pelo navegador.'); return; }
    }
    S.setConfig('notificacoes', on);
    e.currentTarget.setAttribute('aria-pressed', String(on));
    toast(on ? 'Notificações ativadas.' : 'Notificações desativadas.');
  });

  /* dados */
  node.querySelector('[data-exportar]').addEventListener('click', () => {
    const blob = new Blob([S.exportarDados()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `executivo-saude-${S.hoje()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  });
  node.querySelector('[data-termos]').addEventListener('click', () => mostrarTermos());
  node.querySelector('[data-importar]').addEventListener('click', () => node.querySelector('[data-arquivo]').click());
  node.querySelector('[data-arquivo]').addEventListener('change', async e => {
    const f = e.target.files[0];
    if (!f) return;
    if (!await confirmar('Importar backup',
      'Seu progresso atual neste dispositivo será substituído pelo conteúdo do arquivo.',
      { okLabel: 'Importar', perigo: true })) { e.target.value = ''; return; }
    try {
      const r = S.importarDados(await f.text());
      toast(`Importado: ${r.respostas} respostas, ${r.erros} erros e ${r.simulados} simulados.`);
      ir('inicio');
    } catch (err) {
      toast(`Erro: ${err.message}`);
    } finally { e.target.value = ''; }
  });
  node.querySelector('[data-demo]').addEventListener('click', async () => {
    if (!await confirmar('Recarregar dados de exemplo', 'Seu progresso atual será substituído pelo conjunto demonstrativo.', { okLabel: 'Recarregar', perigo: true })) return;
    S.semearDemo(); toast('Dados de exemplo recarregados.'); ir('inicio');
  });
  node.querySelector('[data-zerar]').addEventListener('click', async () => {
    if (!await confirmar('Apagar progresso', 'Respostas, erros, simulados e plano serão apagados. O perfil é mantido.', { okLabel: 'Apagar', perigo: true })) return;
    Object.assign(S.state.data, { plano: [], respostas: [], erros: [], simulados: [], anotacoes: {}, favoritos: [], gamif: { streak: 0, ultimoDia: null, dias: [] } });
    S.gerarPlano(); toast('Progresso apagado.'); ir('inicio');
  });

  return node;
}
