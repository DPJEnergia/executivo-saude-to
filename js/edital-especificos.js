/* edital-especificos.js — conteúdo programático do Módulo II do cargo Executivo em Saúde
 * (Anexo I do Edital nº 001/2026 – SECAD/SES/TO, consolidado em 18/09/2026, item 10).
 *
 * Os 16 itens seguem a ordem do edital. Nas Portarias de Consolidação, o nome traz também
 * o assunto de cada uma: o edital cita apenas o número, e sem o assunto as seis seriam
 * indistinguíveis para o casamento entre questões e tópicos. */

export const ESPECIFICOS = {
  "Executivo em Saúde": [
    "Lei nº 8.080/1990 (Lei Orgânica da Saúde)",
    "Organização e funcionamento do Sistema Único de Saúde (SUS)",
    "Processo saúde-doença",
    "Níveis de prevenção em saúde",
    "Lei nº 8.142/1990 – Participação da comunidade na gestão do SUS e transferências intergovernamentais de recursos financeiros na área da saúde",
    "Evolução da vigilância sanitária no Brasil",
    "Vigilância sanitária: conceitos, áreas de abrangência e funções",
    "Lei nº 9.782/1999 – Define o Sistema Nacional de Vigilância Sanitária, cria a Agência Nacional de Vigilância Sanitária (Anvisa) e dá outras providências",
    "Decreto nº 3.029/1999 – Aprova o Regulamento da Agência Nacional de Vigilância Sanitária (Anvisa)",
    "Lei nº 14.133, de 1º de abril de 2021 (Lei de Licitações e Contratos Administrativos)",
    "Portaria de Consolidação GM/MS nº 1/2017 – direitos e deveres dos usuários, organização e funcionamento do SUS",
    "Portaria de Consolidação GM/MS nº 2/2017 – políticas nacionais de saúde do SUS",
    "Portaria de Consolidação GM/MS nº 3/2017 – redes do SUS",
    "Portaria de Consolidação GM/MS nº 4/2017 – sistemas e subsistemas do SUS",
    "Portaria de Consolidação GM/MS nº 5/2017 – ações e serviços de saúde do SUS",
    "Portaria de Consolidação GM/MS nº 6/2017 – financiamento e transferência dos recursos federais",
  ],
};

/** Tópicos de Conhecimentos Específicos do cargo, no formato usado pelo app. */
export function topicosDoCargo(programa) {
  const itens = ESPECIFICOS[programa] || [];
  const base = slugify(programa);
  return itens.map((nome, i) => ({ id: `espec-${base}-${i + 1}`, nome, peso: 2 }));
}

function slugify(s) {
  return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 24);
}
