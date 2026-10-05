/* edital.js — estrutura oficial do concurso, extraída do Edital nº 001/2026 – SECAD/SES/TO
 * (versão consolidada de 18/09/2026, banca FGV). Este app é dedicado a um único cargo,
 * Executivo em Saúde (nível superior): contém o Módulo I do nível superior, a Legislação
 * e os dados do cargo. O programa do Módulo II fica em `edital-especificos.js`. */

export const EDITAL = {
  id: 'ses-to-2026',
  nome: 'SES-TO 2026 — Secretaria da Saúde do Tocantins',
  numero: 'Edital nº 001/2026 – SECAD/SES/TO (consolidado em 18/09/2026)',
  banca: 'FGV',
  dataProva: '2026-11-01',
  duracaoMinutos: 240,
  totalQuestoes: 60,
  alternativasPorQuestao: 4,
  vagas: 5124,
  cidades: ['Palmas', 'Araguaína', 'Gurupi', 'Porto Nacional', 'Paraíso do Tocantins', 'Araguatins', 'Augustinópolis', 'Arraias', 'Dianópolis'],
  /* Aprovação cumulativa: 40% do Módulo II e 40% do total. */
  aprovacao: { modulo2Min: 24, totalMin: 36, totalMax: 90 },
  /* Módulo I vale 1 ponto por questão; Módulo II vale 2. */
  pontos: { modulo1: 1, modulo2: 2 },
  desempate: [
    'Maior pontuação no Módulo II',
    'Maior pontuação no Módulo I',
    'Maior nota em Língua Portuguesa',
    'Maior nota em Legislação (SUS)'
  ],
  niveis: {
    superior: {
      nome: "Nível Superior",
      questoesEspecificos: 30,
      disciplinas: [
        { id: "port", nome: "Língua Portuguesa", cor: "#1A73C7", modulo: 1, questoes: 10,
          topicos: [
            { id: "port-leitura-compreensao-e-interp", nome: "Leitura, compreensão e interpretação de textos de diferentes gêneros", peso: 2 },
            { id: "port-tipologia-e-generos-textuais", nome: "Tipologia e gêneros textuais", peso: 2 },
            { id: "port-ortografia-oficial", nome: "Ortografia oficial", peso: 2 },
            { id: "port-acentuacao-grafica", nome: "Acentuação gráfica", peso: 2 },
            { id: "port-emprego-da-pontuacao", nome: "Emprego da pontuação", peso: 2 },
            { id: "port-classes-de-palavras-e-suas-f", nome: "Classes de palavras e suas flexões", peso: 2 },
            { id: "port-estrutura-e-formacao-de-pala", nome: "Estrutura e formação de palavras", peso: 2 },
            { id: "port-concordancia-verbal-e-nomina", nome: "Concordância verbal e nominal", peso: 2 },
            { id: "port-regencia-verbal-e-nominal", nome: "Regência verbal e nominal", peso: 2 },
            { id: "port-colocacao-pronominal", nome: "Colocação pronominal", peso: 2 },
            { id: "port-emprego-do-sinal-indicativo", nome: "Emprego do sinal indicativo de crase", peso: 2 },
            { id: "port-sintaxe-da-oracao-e-do-perio", nome: "Sintaxe da oração e do período", peso: 2 },
            { id: "port-coesao-e-coerencia-textual", nome: "Coesão e coerência textual", peso: 2 },
            { id: "port-significacao-das-palavras", nome: "Significação das palavras", peso: 2 },
            { id: "port-reescrita-de-frases-e-su-bst", nome: "Reescrita de frases e su bstituição de palavras ou trechos", peso: 2 },
            { id: "port-correspondencia-entre-tempos", nome: "Correspondência entre tempos e modos verbais", peso: 2 },
            { id: "port-redacao-oficial", nome: "Redação oficial", peso: 2 },
          ] },
        { id: "mat", nome: "Raciocínio Lógico e Matemático", cor: "#7A45C7", modulo: 1, questoes: 8,
          topicos: [
            { id: "mat-conjuntos-numericos", nome: "Conjuntos numéricos", peso: 2 },
            { id: "mat-razoes-e-proporcoes", nome: "Razões e proporções", peso: 2 },
            { id: "mat-regra-de-tres-simples-e-comp", nome: "Regra de três simples e composta", peso: 2 },
            { id: "mat-porcentagem", nome: "Porcentagem", peso: 2 },
            { id: "mat-juros-simples-e-compostos", nome: "Juros simples e compostos", peso: 2 },
            { id: "mat-equacoes-inequacoes-e-sistem", nome: "Equações, inequações e sistemas de equações", peso: 2 },
            { id: "mat-funcoes", nome: "Funções", peso: 2 },
            { id: "mat-sequencias", nome: "Sequências", peso: 2 },
            { id: "mat-matrizes-e-determinantes", nome: "Matrizes e determinantes", peso: 2 },
            { id: "mat-probabilidade-11-analise-com", nome: "Probabilidade; 11 . Análise combinatória", peso: 2 },
            { id: "mat-estatistica-descritiva", nome: "Estatística descritiva", peso: 2 },
            { id: "mat-proposicoes-logicas", nome: "Proposições lógicas", peso: 2 },
            { id: "mat-conectivos", nome: "Conectivos", peso: 2 },
            { id: "mat-tabelas-verdade", nome: "Tabelas-verdade", peso: 2 },
            { id: "mat-equivalencias-e-negacoes", nome: "Equivalências e negações", peso: 2 },
            { id: "mat-argumentacao-logica", nome: "Argumentação lógica", peso: 2 },
            { id: "mat-diagramas-logicos", nome: "Diagramas lógicos", peso: 2 },
            { id: "mat-resolucao-de-problemas-envol", nome: "Resolução de problemas envolvendo raciocínio lógico-matemático", peso: 2 },
          ] },
        { id: "to", nome: "História e Geografia do Estado do Tocantins", cor: "#C7457F", modulo: 1, questoes: 6,
          topicos: [
            { id: "to-processo-historico-de-criaca", nome: "Processo histórico de criação do Estado do Tocantins", peso: 2 },
            { id: "to-organizacao-politica-e-admin", nome: "Organização política e administrativa", peso: 2 },
            { id: "to-formacao-territorial", nome: "Formação territorial", peso: 2 },
            { id: "to-aspectos-demograficos", nome: "Aspectos demográficos", peso: 2 },
            { id: "to-povos-indigenas-e-comunidade", nome: "Povos indígenas e comunidades quilombolas", peso: 2 },
            { id: "to-patrimonio-historico-cultura", nome: "Patrimônio histórico, cultural e ambiental", peso: 2 },
            { id: "to-clima", nome: "Clima", peso: 2 },
            { id: "to-vegetacao", nome: "Vegetação", peso: 2 },
            { id: "to-relevo", nome: "Relevo", peso: 2 },
            { id: "to-hidrografia", nome: "Hidrografia", peso: 2 },
            { id: "to-recursos-naturais", nome: "Recursos naturais", peso: 2 },
            { id: "to-unidades-de-conservacao", nome: "Unidades de Conservação", peso: 2 },
            { id: "to-economia-do-estado", nome: "Economia do Estado", peso: 2 },
            { id: "to-desenvolvimento-regional", nome: "Desenvolvimento regional", peso: 2 },
            { id: "to-matriz-produtiva", nome: "Matriz produtiva", peso: 2 },
            { id: "to-matriz-energetica", nome: "Matriz energética", peso: 2 },
          ] },
        { id: "leg", nome: "Legislação", cor: "#1E9E6A", modulo: 1, questoes: 6,
          topicos: [
            { id: "leg-sistema-unico-de-saude-sus-p", nome: "Sistema Único de Saúde (SUS): princípios, diretrizes, organização, regionalização, financiamento e gestão", peso: 2 },
            { id: "leg-participacao-e-controle-soci", nome: "Participação e controle social no SUS", peso: 2 },
            { id: "leg-conselhos-de-saude-conferenc", nome: "Conselhos de Saúde, Conferências de Saúde e Comissões Intergestores", peso: 2 },
            { id: "leg-constituicao-da-republica-fe", nome: "Constituição da República Fed erativa do Brasil de 1988 – Capítulo II da Seguridade Social, Seção II – Da Saúde", peso: 2 },
            { id: "leg-lei-federal-n-8-080-de-19-de", nome: "Lei Federal nº 8.080, de 19 de setembro de 1990", peso: 2 },
            { id: "leg-lei-federal-n-8-142-de-28-de", nome: "Lei Federal nº 8.142, de 28 de dezembro de 1990", peso: 2 },
            { id: "leg-decreto-federal-n-7-508-de-2", nome: "Decreto Federal nº 7.508, de 28 de junho de 2011", peso: 2 },
            { id: "leg-politica-nacional-de-humaniz", nome: "Política Nacional de Humanização (PNH)", peso: 2 },
            { id: "leg-politica-nacional-de-saude-d", nome: "Política Nacional de Saúde do Trabalhador e da Trabalhadora", peso: 2 },
          ] },
      ],
      cargos: [
        { nome: "Executivo em Saúde", programa: "Executivo em Saúde" },
      ]
    }
  }
};

/** Todos os cargos, com o nível a que pertencem. */
export const CARGOS = EDITAL.niveis.superior.cargos.map(c => ({ ...c, nivel: 'superior' }));

/** O cargo deste app, conforme os Anexos II a V do edital consolidado. */
export const CARGO_ALVO = {
  nome: 'Executivo em Saúde',
  nivel: 'superior',
  vagas: { total: 17, ampla: 11, negros: 2, pcd: 2, indigenas: 1, quilombolas: 1, lotacao: 'Palmas' },
  cargaHoraria: '40h semanais',
  vencimento: 'R$ 5.980,71',
  requisito: 'Curso superior em qualquer área do conhecimento, com pós-graduação lato sensu ou stricto sensu em Saúde Pública ou Saúde Coletiva.',
  atribuicoes: 'Planejar, executar, acompanhar, avaliar e controlar atividades da administração e da gestão dos programas multidisciplinares da área da saúde, respeitados os regulamentos do serviço.'
};

/** Disciplinas do Módulo I + Legislação para o nível informado. */
export function disciplinasDoNivel(nivel) {
  return EDITAL.niveis[nivel]?.disciplinas || EDITAL.niveis.superior.disciplinas;
}

/** Composição oficial da prova objetiva, usada para montar o simulado completo. */
export function composicaoProva(nivel) {
  const n = EDITAL.niveis[nivel] || EDITAL.niveis.superior;
  return [
    ...n.disciplinas.map(d => ({ disciplinaId: d.id, nome: d.nome, questoes: d.questoes, modulo: d.modulo })),
    { disciplinaId: 'espec', nome: 'Conhecimentos Específicos do cargo', questoes: n.questoesEspecificos, modulo: 2 }
  ];
}

/** Cargo pelo nome, em qualquer nível. */
export function cargo(nome) {
  return CARGOS.find(c => c.nome === nome) || null;
}
