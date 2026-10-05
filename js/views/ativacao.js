/* views/ativacao.js — tela de ativação por chave, exibida antes do acesso. */

import { el, esc, icon, toast, sheet } from '../ui.js';
import { validarChave, salvarLicenca, ativarDemo, DEMO_LIMITE } from '../licenca.js';
import { EDITAL } from '../data.js';

/** @param aoLiberar chamado quando o acesso é concedido (modo 'ativo' ou 'demo'). */
export function viewAtivacao(aoLiberar, { motivo = '' } = {}) {
  const faltam = Math.max(0, Math.round((Date.parse(EDITAL.dataProva) - Date.now()) / 86400000));

  const node = el(`<div class="onb"><div class="onb-card">
    <div class="brand" style="padding:0 0 18px">
      <span class="brand-mark">ES</span>
      <div>
        <div class="brand-name">Executivo em Saúde</div>
        <div class="brand-sub">SES-TO · Preparatório</div>
      </div>
    </div>

    <h1>Ativar o aplicativo</h1>
    <p class="muted small">
      Informe a chave que você recebeu após a compra. Ela ativa este aparelho e vale até a data da prova.
    </p>

    ${motivo ? `<div class="callout bad" style="margin-top:14px">
      <div class="callout-title">Não foi possível continuar</div>
      <div class="small">${esc(motivo)}</div>
    </div>` : ''}

    <div class="stack" style="margin-top:16px">
      <div class="field">
        <label for="lic-chave">Chave de ativação</label>
        <input class="input" id="lic-chave" placeholder="EXS-XXXX-XXXX-XXXX"
          autocapitalize="characters" autocomplete="off" spellcheck="false"
          style="font-family:ui-monospace,Menlo,Consolas,monospace;letter-spacing:.06em">
        <span class="help">Não diferencia maiúsculas de minúsculas. Cole a chave inteira, com os traços.</span>
      </div>
      <button class="btn btn-primary btn-lg btn-block" data-ativar>${icon('check', 20)} Ativar</button>
      <button class="btn btn-ghost btn-block" data-demo>${icon('play', 18)} Ver demonstração gratuita</button>
    </div>

    <div class="grid grid-2" style="margin-top:18px">
      <div class="callout info">
        <div class="callout-title">O que você recebe</div>
        <div class="small">Plano de estudos até ${new Date(EDITAL.dataProva + 'T12:00:00').toLocaleDateString('pt-BR')},
        banco de questões comentadas, caderno de erros com revisão espaçada, simulados cronometrados e painel de desempenho.</div>
      </div>
      <div class="callout fgv">
        <div class="callout-title">Faltam ${faltam} dias</div>
        <div class="small">Prova objetiva: ${EDITAL.totalQuestoes} questões de ${EDITAL.alternativasPorQuestao} alternativas,
        ${Math.round(EDITAL.duracaoMinutos / 60)} horas, ${EDITAL.aprovacao.totalMax} pontos.</div>
      </div>
    </div>

    <p class="xsmall dim" style="margin-top:18px">
      Material de estudo independente, sem vínculo com a organizadora do concurso ou com a Secretaria da Saúde do Tocantins.
      Não há garantia de aprovação.
      <button class="btn btn-quiet xsmall" data-termos style="padding:2px 6px;min-height:auto">Termos de uso e privacidade</button>
    </p>
  </div></div>`);

  const campo = node.querySelector('#lic-chave');

  async function tentar() {
    const txt = campo.value.trim();
    if (!txt) { toast('Digite a chave de ativação.'); return; }
    const r = await validarChave(txt);
    if (!r.ok) { toast(r.motivo); campo.focus(); campo.select(); return; }
    salvarLicenca({ modo: 'ativo', chave: txt.toUpperCase(), ativadoEm: new Date().toISOString() });
    toast(`Aplicativo ativado. Válido até ${new Date(r.validade + 'T12:00:00').toLocaleDateString('pt-BR')}.`);
    aoLiberar();
  }

  node.querySelector('[data-ativar]').addEventListener('click', tentar);
  campo.addEventListener('keydown', e => { if (e.key === 'Enter') tentar(); });
  node.querySelector('[data-demo]').addEventListener('click', () => {
    ativarDemo();
    toast(DEMO_LIMITE.mensagem, 5200);
    aoLiberar();
  });
  node.querySelector('[data-termos]').addEventListener('click', () => mostrarTermos());

  return node;
}

export function mostrarTermos() {
  sheet('Termos de uso e política de privacidade', `
    <div class="stack small muted">
      <div>
        <h3>1. O que é este aplicativo</h3>
        <p>Material de estudo independente para o concurso da Secretaria da Saúde do Tocantins.
        Não possui vínculo, patrocínio ou aval da banca organizadora, da Secretaria ou do Governo do Estado.
        As questões são de autoria própria, escritas no estilo da banca, e não reproduzem provas anteriores.</p>
      </div>
      <div>
        <h3>2. Licença de uso</h3>
        <p>A chave de ativação concede uso pessoal e intransferível até a data indicada na compra.
        É vedada a revenda, a distribuição ou o compartilhamento do acesso e do conteúdo.</p>
      </div>
      <div>
        <h3>3. Resultado</h3>
        <p>O aplicativo organiza o estudo e mede o desempenho. Não há promessa nem garantia de aprovação,
        classificação ou nota. As projeções exibidas são estimativas estatísticas baseadas no seu histórico dentro do app.</p>
      </div>
      <div>
        <h3>4. Dados pessoais</h3>
        <p>Nome, e-mail e dados de estudo ficam armazenados <b>no seu próprio aparelho</b>, no navegador,
        e não são enviados a nenhum servidor. A senha é guardada apenas como resumo criptográfico.
        Para apagar tudo, use Ajustes &rsaquo; Apagar meu progresso ou limpe os dados do site no navegador.
        Para exportar, use Ajustes &rsaquo; Exportar meus dados.
        Pedidos relativos a dados pessoais podem ser feitos ao responsável indicado no fim desta página.</p>
      </div>
      <div>
        <h3>5. Conteúdo e atualizações</h3>
        <p>O conteúdo programático segue o edital publicado. Alterações, retificações ou adiamentos
        divulgados pela organizadora prevalecem sobre o que estiver no aplicativo; confira sempre a fonte oficial.</p>
      </div>
      <div>
        <h3>6. Arrependimento e suporte</h3>
        <p>Compras feitas pela internet podem ser canceladas em até 7 dias corridos, conforme o
        Código de Defesa do Consumidor, com devolução integral do valor pago.
        Suporte, dúvidas e pedidos de cancelamento pelo e-mail
        <a href="mailto:donato.petronella@hotmail.com">donato.petronella@hotmail.com</a>,
        respondidos em até 2 dias úteis.</p>
      </div>
      <div class="callout" style="margin-top:6px">
        <div class="callout-title">Responsável</div>
        <div class="small">
          Donato Petronella Júnior<br>
          CPF 170.828.308-07<br>
          Contato e suporte: <a href="mailto:donato.petronella@hotmail.com">donato.petronella@hotmail.com</a>
        </div>
      </div>
    </div>`);
}
