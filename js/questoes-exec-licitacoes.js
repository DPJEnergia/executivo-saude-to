/* questoes-exec-licitacoes.js — Conhecimentos Específicos do cargo Executivo em Saúde, item 10
 * do Anexo I: Lei nº 14.133/2021 (Licitações e Contratos Administrativos).
 * Questões inéditas, 4 alternativas, padrão FGV. */

const T = n => `espec-executivo-em-saude-${n}`;

export const QUESTOES_EXEC_LICITACOES = [
  {
    id: "e191", disciplinaId: "espec", topicos: [T(10)], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "modalidades"],
    contexto: "Um servidor recém-chegado à área de compras de um hospital estadual sugeriu usar a modalidade “tomada de preços” para adquirir mobiliário.",
    comando: "Segundo a Lei nº 14.133/2021, são modalidades de licitação",
    alternativas: [
      { k: "A", texto: "pregão, concorrência, concurso, leilão e diálogo competitivo.", porqueErrada: "" },
      { k: "B", texto: "concorrência, tomada de preços, convite, concurso e leilão.", porqueErrada: "Tomada de preços e convite, previstos na Lei nº 8.666/1993, não existem na nova lei." },
      { k: "C", texto: "pregão, concorrência, convite e credenciamento.", porqueErrada: "Credenciamento é procedimento auxiliar; convite foi extinto." },
      { k: "D", texto: "pregão, concorrência e regime diferenciado de contratações.", porqueErrada: "O RDC não é modalidade da Lei nº 14.133/2021." },
    ],
    correta: "A",
    justificativa: "O art. 28 da Lei nº 14.133/2021 prevê cinco modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo, vedada a criação de outras modalidades ou a combinação delas. Tomada de preços e convite deixaram de existir.",
    dicaFGV: "A FGV mistura nomes da lei antiga com os da nova. Decore as cinco: PCCLD (Pregão, Concorrência, Concurso, Leilão, Diálogo competitivo).",
    tags: ["licitação"]
  },
  {
    id: "e192", disciplinaId: "espec", topicos: [T(10)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "pregão", "bens comuns"],
    contexto: "A Secretaria de Saúde precisa comprar seringas descartáveis, com especificações usuais de mercado e padrões de desempenho objetivamente definidos no edital.",
    comando: "Nessa hipótese, a modalidade e o critério de julgamento adequados são",
    alternativas: [
      { k: "A", texto: "concurso, com critério de melhor técnica.", porqueErrada: "Concurso destina-se à escolha de trabalho técnico, científico ou artístico." },
      { k: "B", texto: "pregão, com critério de menor preço ou de maior desconto.", porqueErrada: "" },
      { k: "C", texto: "leilão, com critério de maior lance.", porqueErrada: "Leilão serve para alienação de bens, não para aquisição." },
      { k: "D", texto: "diálogo competitivo, com critério de técnica e preço.", porqueErrada: "Diálogo competitivo é reservado a objetos inovadores ou que exigem adaptação de soluções; não a bens comuns." },
    ],
    correta: "B",
    justificativa: "O pregão é a modalidade obrigatória para aquisição de bens e serviços comuns — aqueles cujos padrões de desempenho e qualidade podem ser objetivamente definidos pelo edital por meio de especificações usuais de mercado —, com critério de julgamento de menor preço ou de maior desconto (arts. 6º, XLI, e 29 da Lei nº 14.133/2021).",
    dicaFGV: "“Especificações usuais de mercado” é o sinal verbal de bem comum. Ao vê-lo, procure pregão + menor preço/maior desconto.",
    tags: ["licitação"]
  },
  {
    id: "e193", disciplinaId: "espec", topicos: [T(10)], dificuldade: "media", tempoAlvo: 160,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "inexigibilidade", "fornecedor exclusivo"],
    contexto: "Um hospital precisa adquirir peças de reposição para um tomógrafo. Apenas o representante comercial exclusivo do fabricante as fornece no país, conforme declaração do fabricante.",
    comando: "A contratação direta, nesse caso, enquadra-se como",
    alternativas: [
      { k: "A", texto: "dispensa de licitação, por se tratar de equipamento de saúde.", porqueErrada: "Não há hipótese genérica de dispensa para “equipamento de saúde”; o fundamento é a inviabilidade de competição." },
      { k: "B", texto: "inexigibilidade de licitação, por inviabilidade de competição decorrente de fornecedor exclusivo.", porqueErrada: "" },
      { k: "C", texto: "licitação deserta, autorizando a escolha livre do fornecedor.", porqueErrada: "Licitação deserta pressupõe certame anterior sem interessados." },
      { k: "D", texto: "dispensa por emergência, independentemente de prazo.", porqueErrada: "Não há emergência descrita; e a dispensa emergencial tem prazo máximo de um ano." },
    ],
    correta: "B",
    justificativa: "O art. 74, I, da Lei nº 14.133/2021 declara inexigível a licitação quando inviável a competição, em especial na aquisição de materiais, equipamentos ou gêneros, ou contratação de serviços, que só possam ser fornecidos por produtor, empresa ou representante comercial exclusivos. A exclusividade deve ser comprovada por documento idôneo, vedada a preferência por marca específica.",
    dicaFGV: "Inexigibilidade = competição IMPOSSÍVEL. Dispensa = competição possível, mas a lei permite não licitar. Ao ler “só um fornecedor”, a resposta é inexigibilidade.",
    tags: ["contratação direta"]
  },
  {
    id: "e194", disciplinaId: "espec", topicos: [T(10)], dificuldade: "dificil", tempoAlvo: 180,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "dispensa", "emergência"],
    contexto: "Após enchente que destruiu parte de um hospital regional, o Estado contratou, por dispensa emergencial, uma empresa para recuperar a ala de internação. Passados onze meses, a obra não estava concluída, e o gestor cogitou prorrogar o contrato por mais seis meses.",
    comando: "De acordo com a Lei nº 14.133/2021, a prorrogação cogitada é",
    alternativas: [
      { k: "A", texto: "possível, desde que justificada pelo gestor e publicada no Portal Nacional de Contratações Públicas.", porqueErrada: "A lei veda a prorrogação dos contratos emergenciais, qualquer que seja a justificativa." },
      { k: "B", texto: "vedada, pois a contratação emergencial abrange parcelas que possam ser concluídas em até um ano da ocorrência, vedadas a prorrogação e a recontratação da mesma empresa com base nesse fundamento.", porqueErrada: "" },
      { k: "C", texto: "possível por até 180 dias, prazo máximo da dispensa emergencial.", porqueErrada: "O prazo de 180 dias era o da Lei nº 8.666/1993; a nova lei fixa um ano." },
      { k: "D", texto: "obrigatória, para não interromper serviço essencial.", porqueErrada: "A continuidade deve ser garantida por nova contratação regular, não por prorrogação vedada." },
    ],
    correta: "B",
    justificativa: "O art. 75, VIII, da Lei nº 14.133/2021 admite a dispensa em emergência ou calamidade pública apenas para os bens necessários e para as parcelas de obras e serviços que possam ser concluídas no prazo máximo de um ano, contado da ocorrência, vedadas a prorrogação dos contratos e a recontratação de empresa já contratada com base nesse inciso.",
    dicaFGV: "Pegadinha de lei antiga x lei nova: 180 dias (8.666) virou 1 ano (14.133). A FGV adora a alternativa com o prazo revogado.",
    tags: ["contratação direta"]
  },
  {
    id: "e195", disciplinaId: "espec", topicos: [T(10)], dificuldade: "media", tempoAlvo: 160,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "fases", "habilitação"],
    contexto: "Ao elaborar o fluxograma do processo licitatório da Secretaria, o executivo precisa respeitar a sequência de fases prevista na Lei nº 14.133/2021.",
    comando: "Em regra, a sequência das fases é:",
    alternativas: [
      { k: "A", texto: "preparatória; divulgação do edital; apresentação de propostas e lances; julgamento; habilitação; recursal; homologação.", porqueErrada: "" },
      { k: "B", texto: "preparatória; habilitação; divulgação do edital; julgamento; homologação; recursal.", porqueErrada: "A habilitação não antecede a divulgação do edital, e a fase recursal precede a homologação." },
      { k: "C", texto: "divulgação do edital; habilitação; apresentação de propostas; julgamento; adjudicação; homologação.", porqueErrada: "Falta a fase preparatória, e a regra é julgar antes de habilitar." },
      { k: "D", texto: "preparatória; julgamento; divulgação do edital; habilitação; homologação; recursal.", porqueErrada: "Não se julga antes de divulgar o edital e receber propostas." },
    ],
    correta: "A",
    justificativa: "O art. 17 da Lei nº 14.133/2021 estabelece a sequência: preparatória; divulgação do edital; apresentação de propostas e lances, quando for o caso; julgamento; habilitação; recursal; e homologação. A habilitação pode anteceder a apresentação de propostas e o julgamento, mediante ato motivado e previsão expressa no edital.",
    dicaFGV: "A inversão “julgamento antes da habilitação” é a regra na nova lei. Questões que trazem a habilitação logo após o edital descrevem a exceção ou estão erradas.",
    tags: ["licitação"]
  },
  {
    id: "e196", disciplinaId: "espec", topicos: [T(10)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "agente de contratação", "pregoeiro"],
    contexto: "A direção de um hospital estadual pretende designar um assessor ocupante exclusivamente de cargo em comissão, sem vínculo efetivo, para conduzir um pregão eletrônico.",
    comando: "Segundo a Lei nº 14.133/2021, a designação é",
    alternativas: [
      { k: "A", texto: "regular, pois o pregoeiro pode ser qualquer pessoa de confiança da autoridade.", porqueErrada: "A lei exige que o agente seja servidor efetivo ou empregado público dos quadros permanentes." },
      { k: "B", texto: "irregular, pois o agente de contratação — no pregão, chamado pregoeiro — deve ser designado entre servidores efetivos ou empregados públicos dos quadros permanentes da Administração.", porqueErrada: "" },
      { k: "C", texto: "regular, desde que o assessor seja acompanhado por comissão de três membros.", porqueErrada: "A comissão não supre o requisito de vínculo permanente do agente." },
      { k: "D", texto: "irregular, pois o pregão deve ser conduzido pela autoridade máxima do órgão.", porqueErrada: "A condução cabe ao agente de contratação designado, não à autoridade máxima." },
    ],
    correta: "B",
    justificativa: "O art. 8º da Lei nº 14.133/2021 determina que a licitação seja conduzida por agente de contratação, designado pela autoridade competente entre servidores efetivos ou empregados públicos dos quadros permanentes da Administração. Na modalidade pregão, o agente é designado pregoeiro (§ 5º).",
    dicaFGV: "Requisito de vínculo PERMANENTE é tema frequente. A nova lei reforça a profissionalização da área de compras — guarde a palavra “efetivo”.",
    tags: ["governança"]
  },
  {
    id: "e197", disciplinaId: "espec", topicos: [T(10)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "princípios", "segregação de funções"],
    contexto: "Em auditoria, verificou-se que o mesmo servidor elaborava o termo de referência, conduzia a licitação, fiscalizava o contrato e atestava as notas fiscais.",
    comando: "A situação viola, de forma mais direta, o princípio expresso na Lei nº 14.133/2021 da",
    alternativas: [
      { k: "A", texto: "segregação de funções.", porqueErrada: "" },
      { k: "B", texto: "publicidade.", porqueErrada: "Não há falha de divulgação descrita." },
      { k: "C", texto: "vinculação ao edital.", porqueErrada: "Não há descumprimento das regras do edital." },
      { k: "D", texto: "competitividade.", porqueErrada: "O problema descrito é de concentração de funções, não de restrição à disputa." },
    ],
    correta: "A",
    justificativa: "O art. 5º da Lei nº 14.133/2021 inclui expressamente a segregação de funções entre os princípios das licitações. O art. 7º, § 1º, veda a designação do mesmo agente público para atuação simultânea em funções mais suscetíveis a riscos, de modo a reduzir a possibilidade de ocultação de erros e de fraudes.",
    dicaFGV: "Uma pessoa acumulando planejar, licitar, fiscalizar e pagar = segregação de funções. Princípio novo, explícito na lei de 2021 e queridinho da banca.",
    tags: ["princípios"]
  },
  {
    id: "e198", disciplinaId: "espec", topicos: [T(10)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "alteração unilateral", "acréscimos"],
    contexto: "Um contrato de reforma de um centro cirúrgico precisa de acréscimo de serviços. O gestor pretende impor a alteração unilateralmente ao contratado.",
    comando: "Segundo a Lei nº 14.133/2021, nas alterações unilaterais, o contratado é obrigado a aceitar, nas mesmas condições, acréscimos de até",
    alternativas: [
      { k: "A", texto: "10% do valor inicial atualizado, em qualquer caso.", porqueErrada: "O limite geral é 25%." },
      { k: "B", texto: "25% do valor inicial atualizado, e, no caso de reforma de edifício ou de equipamento, de até 50%.", porqueErrada: "" },
      { k: "C", texto: "50% do valor inicial em qualquer contrato, e de até 100% nas reformas.", porqueErrada: "Valores dobrados: o correto é 25% e 50% para reformas." },
      { k: "D", texto: "30% do valor inicial, limite igual ao da garantia contratual.", porqueErrada: "Mistura o limite da garantia com seguro-garantia em obras de grande vulto." },
    ],
    correta: "B",
    justificativa: "O art. 125 da Lei nº 14.133/2021 obriga o contratado a aceitar, nas mesmas condições, acréscimos ou supressões de até 25% do valor inicial atualizado do contrato em obras, serviços ou compras; no caso de reforma de edifício ou de equipamento, o limite para os acréscimos é de 50%.",
    dicaFGV: "25 e 50 são os números. Note que os 50% valem só para ACRÉSCIMOS em REFORMA; supressões continuam limitadas a 25%.",
    tags: ["contratos"]
  },
  {
    id: "e199", disciplinaId: "espec", topicos: [T(10)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "sanções", "inidoneidade"],
    contexto: "Uma empresa fornecedora de medicamentos apresentou documentação falsa em licitação estadual. A comissão discute a sanção aplicável e seus efeitos.",
    comando: "Sobre as sanções da Lei nº 14.133/2021, é correto afirmar que a declaração de inidoneidade para licitar ou contratar",
    alternativas: [
      { k: "A", texto: "impede o responsável de licitar ou contratar apenas no âmbito do ente que a aplicou, pelo prazo máximo de 3 anos.", porqueErrada: "Essa é a descrição do impedimento de licitar e contratar." },
      { k: "B", texto: "impede o responsável de licitar ou contratar no âmbito da Administração Pública direta e indireta de todos os entes federativos, pelo prazo mínimo de 3 e máximo de 6 anos.", porqueErrada: "" },
      { k: "C", texto: "é aplicada por prazo indeterminado, até que a empresa repare o dano.", porqueErrada: "A lei fixa prazo de 3 a 6 anos; a reabilitação tem requisitos próprios." },
      { k: "D", texto: "equivale a uma multa de até 30% do valor do contrato.", porqueErrada: "Multa é sanção distinta, entre 0,5% e 30% do valor do contrato." },
    ],
    correta: "B",
    justificativa: "O art. 156 da Lei nº 14.133/2021 prevê advertência, multa, impedimento de licitar e contratar e declaração de inidoneidade. O impedimento vale no âmbito do ente que o aplicou, por até 3 anos; a inidoneidade vale para a Administração de todos os entes federativos, por no mínimo 3 e no máximo 6 anos. A multa varia de 0,5% a 30% do valor do contrato.",
    dicaFGV: "Impedimento = 1 ente, até 3 anos. Inidoneidade = todos os entes, 3 a 6 anos. A banca troca alcance e prazo entre as duas.",
    tags: ["sanções"]
  },
  {
    id: "e200", disciplinaId: "espec", topicos: [T(10)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "registro de preços", "ata"],
    contexto: "A Secretaria Estadual de Saúde registrou preços de luvas de procedimento para atender todas as unidades durante o ano, comprando conforme a demanda.",
    comando: "De acordo com a Lei nº 14.133/2021, a vigência da ata de registro de preços é de",
    alternativas: [
      { k: "A", texto: "1 ano, podendo ser prorrogada por igual período, desde que comprovado o preço vantajoso.", porqueErrada: "" },
      { k: "B", texto: "6 meses, improrrogáveis.", porqueErrada: "O prazo é de 1 ano, prorrogável." },
      { k: "C", texto: "5 anos, como os contratos de fornecimento contínuo.", porqueErrada: "Confunde a ata com o prazo dos contratos de serviços e fornecimentos contínuos." },
      { k: "D", texto: "indeterminado, enquanto houver saldo de quantitativos.", porqueErrada: "A ata tem prazo certo de vigência." },
    ],
    correta: "A",
    justificativa: "O art. 84 da Lei nº 14.133/2021 fixa em 1 ano o prazo de vigência da ata de registro de preços, que pode ser prorrogado por igual período, desde que comprovado o preço vantajoso. O contrato decorrente da ata tem vigência própria, definida no instrumento.",
    dicaFGV: "Ata (1 + 1 ano) e contrato contínuo (até 5, prorrogável até 10) são confundidos de propósito. Separe: ata registra preço; contrato executa.",
    tags: ["procedimentos auxiliares"]
  },
  {
    id: "e201", disciplinaId: "espec", topicos: [T(10)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "serviços contínuos", "vigência"],
    contexto: "O contrato de serviço contínuo de limpeza hospitalar foi celebrado por 5 anos e o gestor quer saber até quando pode prorrogá-lo.",
    comando: "Pela Lei nº 14.133/2021, os contratos de serviços e fornecimentos contínuos",
    alternativas: [
      { k: "A", texto: "podem ser celebrados por até 5 anos e prorrogados sucessivamente, respeitada a vigência máxima decenal.", porqueErrada: "" },
      { k: "B", texto: "têm vigência máxima de 12 meses, vedada qualquer prorrogação.", porqueErrada: "A nova lei permite contratos plurianuais e prorrogações." },
      { k: "C", texto: "podem ser prorrogados indefinidamente, desde que haja crédito orçamentário.", porqueErrada: "Há limite máximo de 10 anos." },
      { k: "D", texto: "têm vigência máxima de 60 meses, incluídas todas as prorrogações.", porqueErrada: "Esse era o regime da Lei nº 8.666/1993; a nova lei admite até 10 anos." },
    ],
    correta: "A",
    justificativa: "O art. 106 da Lei nº 14.133/2021 permite celebrar contratos de serviços e fornecimentos contínuos com prazo de até 5 anos, observadas as condições legais. O art. 107 admite prorrogações sucessivas, respeitada a vigência máxima decenal, desde que haja previsão no edital e que a autoridade ateste que as condições e os preços permanecem vantajosos.",
    dicaFGV: "Lei antiga: 60 meses no total. Lei nova: 5 anos iniciais, total de 10. Alternativas com 60 meses “incluídas todas as prorrogações” são pegadinha de lei revogada.",
    tags: ["contratos"]
  },
  {
    id: "e202", disciplinaId: "espec", topicos: [T(10)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "PNCP", "estudo técnico preliminar"],
    contexto: "Na fase preparatória de uma contratação de serviços de manutenção de equipamentos médicos, a equipe precisa produzir o documento que caracteriza o interesse público envolvido e a melhor solução para atendê-lo, servindo de base ao termo de referência.",
    comando: "Esse documento é o",
    alternativas: [
      { k: "A", texto: "estudo técnico preliminar.", porqueErrada: "" },
      { k: "B", texto: "edital de licitação.", porqueErrada: "O edital é posterior e se baseia nos estudos e no termo de referência." },
      { k: "C", texto: "relatório anual de gestão.", porqueErrada: "Instrumento de planejamento do SUS, sem relação com a fase preparatória da licitação." },
      { k: "D", texto: "atestado de capacidade técnica.", porqueErrada: "Documento de habilitação apresentado pelo licitante." },
    ],
    correta: "A",
    justificativa: "O art. 6º, XX, da Lei nº 14.133/2021 define o estudo técnico preliminar como o documento constitutivo da primeira etapa do planejamento de uma contratação, que caracteriza o interesse público envolvido e a sua melhor solução e dá base ao anteprojeto, ao termo de referência ou ao projeto básico.",
    dicaFGV: "Ordem do planejamento: ETP → termo de referência (ou projeto básico) → edital. Se a questão fala em “primeira etapa” ou “melhor solução”, é o ETP.",
    tags: ["planejamento"]
  },
];
