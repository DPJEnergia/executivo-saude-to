/* views/desempenho.js — gráficos e diagnóstico. */

import * as S from '../store.js';
import { el, esc, icon, stat, barras, linha, anel, corTaxa, vazio } from '../ui.js';

export function viewDesempenho(ir) {
  const g = S.resumoGeral();
  if (!g.total) {
    const n = el(`<div class="card">${vazio('Ainda sem dados',
      'Resolva ao menos uma sessão de questões para o app medir seu desempenho e recalcular as prioridades do plano.',
      '<button class="btn btn-primary" data-ir style="margin-top:12px">Ir ao banco de questões</button>')}</div>`);
    n.querySelector('[data-ir]').addEventListener('click', () => ir('questoes'));
    return n;
  }

  const meta = S.state.data.perfil.metaAcerto || 70;
  const discs = S.porDisciplina().filter(d => d.total > 0).sort((a, b) => b.taxa - a.taxa);
  const semanas = S.porSemana(8);
  const fracos = S.pontosFracos(6);
  const fortes = S.pontosFortes(5);
  const prev = S.previsaoProva();
  const proj = S.previsaoPontos();
  const faltam = S.state.data.perfil.dataProva ? S.diffDias(S.hoje(), S.state.data.perfil.dataProva) : null;
  const tops = S.porAssunto().sort((a, b) => b.total - a.total);

  const node = el(`
  <div class="stack">
    <div class="grid grid-4">
      ${stat('Taxa geral', `${g.taxa}%`, `${g.acertos}/${g.total} questões`, corTaxa(g.taxa))}
      ${stat('Tempo médio', `${g.tempoMedio}s`, 'por questão', g.tempoMedio > 160 ? 'var(--warn)' : 'var(--ok)')}
      ${stat('Horas acumuladas', `${Math.round(g.tempoTotal / 3600)}h`, 'só em questões')}
      ${stat('Projeção de pontos', proj ? `${proj.pontos}` : '—', proj ? `de ${proj.maximo} · corte ${S.EDITAL.aprovacao.totalMin}` : `meta ${meta}%`,
        proj ? (proj.aprovado ? 'var(--ok)' : 'var(--bad)') : null)}
    </div>

    <div class="card">
      <div class="card-head"><h2>Evolução semanal</h2><span class="chip static spacer">últimas 8 semanas</span></div>
      ${linha(semanas.map(s => ({ rotulo: s.inicio, valor: s.taxa })), { meta })}
      <div class="legend" style="margin-top:8px">
        <span><i style="background:var(--brand)"></i>Taxa de acerto semanal</span>
        <span><i style="background:var(--accent)"></i>Meta (${meta}%)</span>
      </div>
      <div class="scroll-x" style="margin-top:12px">
        <table class="data">
          <thead><tr><th>Semana</th><th class="num">Questões</th><th class="num">Acertos</th><th class="num">Taxa</th><th class="num">Tempo</th></tr></thead>
          <tbody>
            ${semanas.map(s => `<tr>
              <td>${S.parseISO(s.inicio).getDate()}/${S.parseISO(s.inicio).getMonth() + 1}</td>
              <td class="num">${s.total}</td>
              <td class="num">${s.acertos}</td>
              <td class="num" style="color:${corTaxa(s.taxa)}">${s.taxa === null ? '—' : s.taxa + '%'}</td>
              <td class="num">${s.minutos} min</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div class="grid grid-2">
      <div class="card">
        <div class="card-head"><h2>Por disciplina</h2></div>
        ${barras(discs.map(d => ({ nome: `${d.nome} (${d.total})`, valor: d.taxa, cor: corTaxa(d.taxa) })))}
      </div>
      <div class="card">
        <div class="card-head"><h2>Tempo médio por disciplina</h2></div>
        ${barras(discs.map(d => ({ nome: d.nome, valor: d.tempoMedio, cor: d.tempoMedio > 160 ? 'var(--warn)' : 'var(--brand)' })),
          { max: Math.max(180, ...discs.map(d => d.tempoMedio)), sufixo: 's' })}
        <p class="xsmall dim" style="margin-top:10px">Ritmo de referência na FGV: 150 segundos por questão.</p>
      </div>
    </div>

    <div class="grid grid-2">
      <div class="card" style="border-color:var(--bad)">
        <div class="card-head"><h2>Ranking de pontos fracos</h2></div>
        ${fracos.length ? `<ol style="padding-left:20px;margin:0" class="muted">
          ${fracos.map(t => `<li style="margin-bottom:8px">
            <b>${esc(t.nome)}</b> — <span style="color:${corTaxa(t.taxa)}">${t.taxa}%</span>
            <span class="xsmall dim">(${t.acertos}/${t.total}) · ${esc(S.nomeDisciplina(t.disciplinaId))}</span>
          </li>`).join('')}
        </ol>
        <button class="btn btn-primary btn-block" style="margin-top:14px" data-treinar-fracos>
          ${icon('play', 18)} Treinar os pontos fracos
        </button>` : '<p class="dim small">Sem concentração de erros: continue ampliando o volume.</p>'}
      </div>
      <div class="card" style="border-color:var(--ok)">
        <div class="card-head"><h2>Matérias fortes</h2></div>
        ${fortes.length ? `<ol style="padding-left:20px;margin:0" class="muted">
          ${fortes.map(t => `<li style="margin-bottom:8px"><b>${esc(t.nome)}</b> — <span style="color:${corTaxa(t.taxa)}">${t.taxa}%</span>
            <span class="xsmall dim">(${t.acertos}/${t.total})</span></li>`).join('')}
        </ol>
        <p class="xsmall dim" style="margin-top:12px">Manutenção: uma rodada curta de revisão por semana basta para não perder o domínio.</p>`
        : '<p class="dim small">Ainda não há assunto consolidado.</p>'}
      </div>
    </div>

    <div class="card">
      <div class="card-head"><h2>Projeção para a prova</h2>
        ${faltam !== null ? `<span class="chip static spacer">${faltam} dias restantes</span>` : ''}
      </div>
      <div class="row" style="gap:22px;align-items:center">
        ${anel(proj ? (proj.pontos / proj.maximo) * 100 : 0, {
          tamanho: 130, cor: proj ? (proj.aprovado ? 'var(--ok)' : 'var(--bad)') : 'var(--text-3)',
          texto: proj ? `${proj.pontos}` : '—', sub: proj ? `de ${proj.maximo} pontos` : 'sem dados'
        })}
        <div style="flex:1;min-width:220px">
          ${proj ? `<p class="small ${proj.aprovado ? '' : 'b'}" style="color:${proj.aprovado ? 'var(--ok)' : 'var(--bad)'}">
            ${proj.aprovado
              ? `Acima do corte: ${proj.pontos} pontos no total e ${proj.modulo2} no Módulo II.`
              : `Abaixo do corte. O edital exige ${S.EDITAL.aprovacao.totalMin} pontos no total e ${S.EDITAL.aprovacao.modulo2Min} no Módulo II; sua projeção é ${proj.pontos} e ${proj.modulo2}.`}
          </p>` : ''}
          <p class="muted">
            A projeção aplica a sua taxa de acerto de cada disciplina à quantidade de questões que o edital reserva a ela.
            ${prev === null ? 'Faça um simulado para gerar a primeira projeção.'
              : prev >= meta ? 'Você está no ritmo da meta. Priorize manutenção e gestão de tempo.'
              : `Para alcançar ${meta}%, concentre esforço nos assuntos abaixo de 60% e mantenha o ciclo de revisão em dia.`}
          </p>
          <div class="progress" style="margin-top:10px"><i style="width:${Math.min(100, ((prev || 0) / meta) * 100)}%;background:${corTaxa(prev)}"></i></div>
          <p class="xsmall dim" style="margin-top:8px">Projeção estatística baseada no seu histórico no app; não substitui o desempenho real na prova.</p>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-head"><h2>Detalhe por assunto</h2></div>
      <div class="scroll-x">
        <table class="data">
          <thead><tr><th>Assunto</th><th>Disciplina</th><th class="num">Questões</th><th class="num">Acertos</th><th class="num">Taxa</th></tr></thead>
          <tbody>
            ${tops.map(t => `<tr>
              <td>${esc(t.nome)}</td>
              <td class="dim">${esc(S.rotuloDisciplina(t.disciplinaId))}</td>
              <td class="num">${t.total}</td>
              <td class="num">${t.acertos}</td>
              <td class="num b" style="color:${corTaxa(t.taxa)}">${t.taxa}%</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>`);

  node.querySelector('[data-treinar-fracos]')?.addEventListener('click', () => {
    const ids = fracos.map(t => t.id);
    const lista = S.questoes().filter(q => ids.includes(q.assunto));
    ir('questoes', { sessao: true, modo: 'treino', lista: S.embaralhar(lista) });
  });

  return node;
}
