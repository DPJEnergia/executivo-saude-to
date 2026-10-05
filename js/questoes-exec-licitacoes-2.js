/* questoes-exec-licitacoes-2.js — segundo lote do item 10 do Anexo I (Lei nº 14.133/2021):
 * modalidades especiais, critérios de julgamento, impugnação e recursos, PNCP, garantias,
 * contratação direta, procedimentos auxiliares e execução contratual.
 * Questões inéditas, 4 alternativas, padrão FGV. */

const T = n => `espec-executivo-em-saude-${n}`;

export const QUESTOES_EXEC_LICITACOES_2 = [
  {
    id: "e203", disciplinaId: "espec", topicos: [T(10)], dificuldade: "dificil", tempoAlvo: 180,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "diálogo competitivo"],
    contexto: "A Secretaria de Saúde quer uma solução para integrar os prontuários de todos os hospitais estaduais, mas não consegue definir com precisão as especificações técnicas, e nenhuma solução pronta do mercado atende sem adaptação.",
    comando: "Considerando a Lei nº 14.133/2021, a modalidade adequada e a exigência quanto à condução são:",
    alternativas: [
      { k: "A", texto: "pregão, conduzido por pregoeiro, por se tratar de serviço de informática.", porqueErrada: "Pregão exige objeto comum, com especificações usuais de mercado — o oposto do caso." },
      { k: "B", texto: "diálogo competitivo, conduzido por comissão de contratação composta de pelo menos 3 servidores efetivos ou empregados públicos dos quadros permanentes.", porqueErrada: "" },
      { k: "C", texto: "concurso, conduzido por comissão julgadora formada por especialistas externos.", porqueErrada: "Concurso serve para escolher trabalho técnico, científico ou artístico mediante prêmio ou remuneração." },
      { k: "D", texto: "diálogo competitivo, conduzido por agente de contratação único, ocupante de cargo em comissão.", porqueErrada: "A lei exige comissão de, no mínimo, 3 servidores efetivos ou empregados permanentes." },
    ],
    correta: "B",
    justificativa: "O art. 32 da Lei nº 14.133/2021 reserva o diálogo competitivo a objetos que envolvam inovação tecnológica ou técnica, que exijam adaptação de soluções disponíveis no mercado ou cujas especificações não possam ser definidas com precisão suficiente pela Administração. O § 1º, XI, exige condução por comissão de contratação composta de pelo menos 3 servidores efetivos ou empregados públicos pertencentes aos quadros permanentes.",
    dicaFGV: "“Não sabe especificar” + “mercado não tem pronto” = diálogo competitivo. Depois confira a condução: comissão de 3 efetivos.",
    tags: ["licitação"]
  },
  {
    id: "e204", disciplinaId: "espec", topicos: [T(10)], dificuldade: "facil", tempoAlvo: 130,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "leilão", "concurso"],
    contexto: "Um hospital estadual quer vender ambulâncias inservíveis. Em outra frente, a Secretaria quer premiar o melhor projeto arquitetônico para uma nova policlínica.",
    comando: "As modalidades adequadas são, respectivamente,",
    alternativas: [
      { k: "A", texto: "leilão e concurso.", porqueErrada: "" },
      { k: "B", texto: "concorrência e pregão.", porqueErrada: "Concorrência não é a modalidade de alienação de bens; pregão não premia projeto." },
      { k: "C", texto: "pregão e leilão.", porqueErrada: "Pregão destina-se a aquisições de bens e serviços comuns." },
      { k: "D", texto: "concurso e leilão.", porqueErrada: "Ordem invertida." },
    ],
    correta: "A",
    justificativa: "Leilão é a modalidade para alienação de bens imóveis ou de bens móveis inservíveis ou legalmente apreendidos, a quem oferecer o maior lance. Concurso é a modalidade para escolha de trabalho técnico, científico ou artístico, com critério de melhor técnica ou conteúdo artístico e concessão de prêmio ou remuneração ao vencedor (art. 6º, XXXIX e XL, da Lei nº 14.133/2021).",
    dicaFGV: "Vender = leilão. Premiar trabalho intelectual ou artístico = concurso. Em “respectivamente”, confira a ordem antes de marcar.",
    tags: ["licitação"]
  },
  {
    id: "e205", disciplinaId: "espec", topicos: [T(10)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "critérios de julgamento"],
    contexto: "Ao revisar a minuta de um edital, o executivo encontrou como critério de julgamento “menor prazo de entrega”.",
    comando: "Entre os critérios de julgamento previstos na Lei nº 14.133/2021, NÃO consta",
    alternativas: [
      { k: "A", texto: "maior desconto.", porqueErrada: "Consta do art. 33." },
      { k: "B", texto: "maior retorno econômico.", porqueErrada: "Consta do art. 33, usado nos contratos de eficiência." },
      { k: "C", texto: "menor prazo de entrega.", porqueErrada: "" },
      { k: "D", texto: "técnica e preço.", porqueErrada: "Consta do art. 33." },
    ],
    correta: "C",
    justificativa: "O art. 33 da Lei nº 14.133/2021 prevê como critérios de julgamento: menor preço; maior desconto; melhor técnica ou conteúdo artístico; técnica e preço; maior lance, no caso de leilão; e maior retorno econômico. Prazo de entrega pode ser exigência do edital, mas não é critério de julgamento.",
    dicaFGV: "Seis critérios, que você pode agrupar: preço (menor preço, maior desconto, maior lance), técnica (melhor técnica, técnica e preço) e resultado (maior retorno econômico).",
    tags: ["licitação"]
  },
  {
    id: "e206", disciplinaId: "espec", topicos: [T(10)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "orçamento sigiloso"],
    contexto: "Para evitar que os licitantes ancorem suas propostas no valor estimado, a equipe decidiu manter em sigilo o orçamento de uma licitação de medicamentos. O controle interno pediu acesso ao valor antes do julgamento.",
    comando: "Segundo a Lei nº 14.133/2021, o orçamento estimado",
    alternativas: [
      { k: "A", texto: "nunca pode ser sigiloso, por força do princípio da publicidade.", porqueErrada: "A lei admite o sigilo, desde que justificado." },
      { k: "B", texto: "pode ter caráter sigiloso, desde que justificado, mas o sigilo não prevalece para os órgãos de controle interno e externo, e o valor deve ser divulgado após o julgamento.", porqueErrada: "" },
      { k: "C", texto: "pode ser sigiloso inclusive para os órgãos de controle, até a homologação.", porqueErrada: "O sigilo não alcança os órgãos de controle." },
      { k: "D", texto: "é sempre sigiloso nas compras de medicamentos, por determinação legal.", porqueErrada: "O sigilo é facultativo e depende de justificativa." },
    ],
    correta: "B",
    justificativa: "O art. 24 da Lei nº 14.133/2021 permite que o orçamento estimado tenha caráter sigiloso, desde que justificado, sem prejuízo da divulgação do detalhamento dos quantitativos. O sigilo não prevalece para os órgãos de controle interno e externo, e o valor é tornado público imediatamente após o julgamento das propostas.",
    dicaFGV: "Sigilo do orçamento é FACULTATIVO, JUSTIFICADO e TEMPORÁRIO — e nunca vale para o controle. Qualquer alternativa que o torne obrigatório ou oponível ao controle está errada.",
    tags: ["licitação", "transparência"]
  },
  {
    id: "e207", disciplinaId: "espec", topicos: [T(10)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "impugnação"],
    contexto: "Um cidadão, que não pretende participar da licitação, identificou cláusula restritiva no edital de compra de equipamentos de raio X e quer impugná-lo. A abertura do certame está marcada para daqui a dez dias úteis.",
    comando: "De acordo com a Lei nº 14.133/2021,",
    alternativas: [
      { k: "A", texto: "apenas licitantes cadastrados podem impugnar o edital.", porqueErrada: "Qualquer pessoa é parte legítima para impugnar." },
      { k: "B", texto: "qualquer pessoa pode impugnar o edital até 3 dias úteis antes da data de abertura do certame, e a resposta deve ser divulgada em até 3 dias úteis, limitada ao último dia útil anterior à abertura.", porqueErrada: "" },
      { k: "C", texto: "a impugnação só pode ser feita após a abertura das propostas, na fase recursal.", porqueErrada: "A impugnação é anterior à abertura." },
      { k: "D", texto: "qualquer pessoa pode impugnar até 10 dias úteis antes da abertura, com resposta em 30 dias.", porqueErrada: "Os prazos são de 3 dias úteis." },
    ],
    correta: "B",
    justificativa: "O art. 164 da Lei nº 14.133/2021 dispõe que qualquer pessoa é parte legítima para impugnar edital por irregularidade ou para pedir esclarecimento, devendo protocolar o pedido até 3 dias úteis antes da data de abertura do certame. A resposta será divulgada em sítio eletrônico oficial em até 3 dias úteis, limitada ao último dia útil anterior à data da abertura.",
    dicaFGV: "Na nova lei, quase todos os prazos de impugnação e recurso são de 3 dias úteis. Desconfie de alternativas com 5, 10 ou 30 dias.",
    tags: ["licitação"]
  },
  {
    id: "e208", disciplinaId: "espec", topicos: [T(10)], dificuldade: "media", tempoAlvo: 160,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "recursos", "intenção de recorrer"],
    contexto: "No pregão eletrônico para compra de cateteres, uma empresa inabilitada ficou em silêncio na sessão e, dois dias depois, apresentou recurso contra a habilitação da vencedora.",
    comando: "Segundo a Lei nº 14.133/2021, quanto ao recurso contra julgamento das propostas ou habilitação,",
    alternativas: [
      { k: "A", texto: "a intenção de recorrer deve ser manifestada imediatamente, sob pena de preclusão, e o prazo para apresentação das razões é de 3 dias úteis.", porqueErrada: "" },
      { k: "B", texto: "o prazo é de 15 dias corridos, contados da homologação.", porqueErrada: "O prazo é de 3 dias úteis, contado da intimação ou da lavratura da ata." },
      { k: "C", texto: "não há necessidade de manifestar intenção na sessão; basta apresentar razões em até 5 dias úteis.", porqueErrada: "A intenção imediata é exigida, sob pena de preclusão." },
      { k: "D", texto: "só cabe recurso após a assinatura do contrato.", porqueErrada: "O recurso é anterior à homologação e ao contrato." },
    ],
    correta: "A",
    justificativa: "O art. 165 da Lei nº 14.133/2021 prevê recurso no prazo de 3 dias úteis, contado da intimação ou da lavratura da ata. Contra o julgamento das propostas e a habilitação, a intenção de recorrer deve ser manifestada imediatamente, sob pena de preclusão, e o prazo para as razões começa na data de intimação ou de lavratura da ata de habilitação ou inabilitação.",
    dicaFGV: "Dois passos: manifestar na hora (senão preclui) e arrazoar em 3 dias úteis. Quem ficou calado na sessão perdeu o direito.",
    tags: ["licitação"]
  },
  {
    id: "e209", disciplinaId: "espec", topicos: [T(10)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "PNCP", "eficácia do contrato"],
    contexto: "Um contrato de manutenção de equipamentos hospitalares, precedido de licitação, foi assinado, mas não foi divulgado no Portal Nacional de Contratações Públicas (PNCP).",
    comando: "Segundo a Lei nº 14.133/2021, a divulgação no PNCP é",
    alternativas: [
      { k: "A", texto: "facultativa, por se tratar de contrato estadual.", porqueErrada: "A divulgação no PNCP é obrigatória para todos os entes sujeitos à lei." },
      { k: "B", texto: "condição indispensável para a eficácia do contrato e de seus aditamentos, devendo ocorrer em até 20 dias úteis da assinatura, no caso de licitação.", porqueErrada: "" },
      { k: "C", texto: "condição de validade da licitação, a ser feita antes da abertura das propostas.", porqueErrada: "O dispositivo trata da eficácia do contrato, após a assinatura." },
      { k: "D", texto: "exigida apenas para contratos acima do valor de grande vulto.", porqueErrada: "Não há esse corte de valor." },
    ],
    correta: "B",
    justificativa: "O art. 94 da Lei nº 14.133/2021 estabelece que a divulgação no PNCP é condição indispensável para a eficácia do contrato e de seus aditamentos, devendo ocorrer em até 20 dias úteis da assinatura, no caso de licitação, e em até 10 dias úteis, no caso de contratação direta.",
    dicaFGV: "Validade ≠ eficácia. O contrato não divulgado é válido, mas não produz efeitos. A FGV troca as duas palavras.",
    tags: ["contratos", "transparência"]
  },
  {
    id: "e210", disciplinaId: "espec", topicos: [T(10)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "garantia contratual"],
    contexto: "O edital de um serviço contínuo de lavanderia hospitalar exigiu garantia contratual. A empresa vencedora quer apresentar fiança bancária, mas o fiscal insiste em caução em dinheiro.",
    comando: "Segundo a Lei nº 14.133/2021,",
    alternativas: [
      { k: "A", texto: "cabe à Administração escolher a modalidade de garantia.", porqueErrada: "A escolha é do contratado." },
      { k: "B", texto: "cabe ao contratado optar por uma das modalidades previstas, e a garantia será, em regra, de até 5% do valor inicial do contrato, podendo chegar a 10% com justificativa.", porqueErrada: "" },
      { k: "C", texto: "a garantia é sempre de 30% do valor do contrato.", porqueErrada: "30% é limite especial para obras e serviços de engenharia de grande vulto com seguro-garantia." },
      { k: "D", texto: "a caução em dinheiro é a única modalidade admitida.", porqueErrada: "A lei admite caução, seguro-garantia, fiança bancária e título de capitalização." },
    ],
    correta: "B",
    justificativa: "O art. 96 da Lei nº 14.133/2021 permite exigir garantia e atribui ao contratado a opção entre as modalidades (caução em dinheiro ou títulos da dívida pública, seguro-garantia, fiança bancária e título de capitalização). O art. 98 limita a garantia a até 5% do valor inicial do contrato, admitindo até 10% conforme a complexidade técnica e os riscos, mediante justificativa.",
    dicaFGV: "Quem escolhe a modalidade é o CONTRATADO. Percentuais: 5% regra, 10% justificado, 30% só grande vulto de engenharia com seguro-garantia.",
    tags: ["contratos"]
  },
  {
    id: "e271", disciplinaId: "espec", topicos: [T(10)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "dispensa por valor", "consórcio público"],
    contexto: "Um consórcio público intermunicipal de saúde quer saber se os limites de dispensa de licitação em razão do valor são os mesmos aplicados a um município isolado.",
    comando: "De acordo com a Lei nº 14.133/2021, os valores de dispensa em razão do valor",
    alternativas: [
      { k: "A", texto: "são duplicados para compras, obras e serviços contratados por consórcio público ou por autarquia ou fundação qualificadas como agências executivas.", porqueErrada: "" },
      { k: "B", texto: "são reduzidos à metade para consórcios públicos.", porqueErrada: "A lei os duplica, não os reduz." },
      { k: "C", texto: "não se aplicam a consórcios, que sempre devem licitar.", porqueErrada: "Consórcios podem usar a dispensa, com valores duplicados." },
      { k: "D", texto: "são fixos e não sofrem atualização.", porqueErrada: "Os valores são atualizados anualmente pelo Poder Executivo federal." },
    ],
    correta: "A",
    justificativa: "O art. 75, § 2º, da Lei nº 14.133/2021 determina que os valores de dispensa em razão do valor (incisos I e II) sejam duplicados para compras, obras e serviços contratados por consórcio público ou por autarquia ou fundação qualificadas como agências executivas. Os valores são atualizados anualmente por ato do Poder Executivo federal.",
    dicaFGV: "Não decore só os valores, que mudam todo ano: decore a regra de duplicação para consórcios e agências executivas, que não muda.",
    tags: ["contratação direta"]
  },
  {
    id: "e272", disciplinaId: "espec", topicos: [T(10)], dificuldade: "media", tempoAlvo: 160,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "licitação deserta", "fracassada"],
    contexto: "Uma licitação para compra de cadeiras de rodas, realizada há cinco meses, não teve nenhum interessado. A Secretaria quer contratar diretamente, mantendo as mesmas condições do edital.",
    comando: "Segundo a Lei nº 14.133/2021, a contratação direta é",
    alternativas: [
      { k: "A", texto: "possível, por dispensa, pois a licitação foi realizada há menos de 1 ano e não surgiram licitantes interessados, mantidas todas as condições do edital.", porqueErrada: "" },
      { k: "B", texto: "possível, por inexigibilidade, porque a ausência de interessados prova a inviabilidade de competição.", porqueErrada: "Licitação deserta é hipótese de dispensa, não de inexigibilidade." },
      { k: "C", texto: "possível, desde que as condições do edital sejam alteradas para atrair fornecedores.", porqueErrada: "A dispensa exige a manutenção de todas as condições do edital." },
      { k: "D", texto: "vedada, devendo a Administração repetir a licitação indefinidamente.", porqueErrada: "A lei prevê expressamente a dispensa nessa hipótese." },
    ],
    correta: "A",
    justificativa: "O art. 75, III, da Lei nº 14.133/2021 permite a dispensa para contratação que mantenha todas as condições definidas em edital de licitação realizada há menos de 1 ano, quando não surgirem licitantes interessados ou não forem apresentadas propostas válidas, ou quando as propostas consignarem preços manifestamente superiores aos de mercado.",
    dicaFGV: "Três requisitos: menos de 1 ano, mesmas condições, ausência de interessados ou de propostas válidas. Alterar o edital derruba a dispensa.",
    tags: ["contratação direta"]
  },
  {
    id: "e273", disciplinaId: "espec", topicos: [T(10)], dificuldade: "facil", tempoAlvo: 130,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "procedimentos auxiliares"],
    contexto: "Em capacitação sobre a nova lei, o instrutor listou os procedimentos auxiliares das licitações e contratações.",
    comando: "NÃO é procedimento auxiliar previsto na Lei nº 14.133/2021:",
    alternativas: [
      { k: "A", texto: "o credenciamento.", porqueErrada: "É procedimento auxiliar (art. 78)." },
      { k: "B", texto: "o sistema de registro de preços.", porqueErrada: "É procedimento auxiliar (art. 78)." },
      { k: "C", texto: "o pregão.", porqueErrada: "" },
      { k: "D", texto: "a pré-qualificação.", porqueErrada: "É procedimento auxiliar (art. 78)." },
    ],
    correta: "C",
    justificativa: "O art. 78 da Lei nº 14.133/2021 relaciona os procedimentos auxiliares: credenciamento, pré-qualificação, procedimento de manifestação de interesse, sistema de registro de preços e registro cadastral. O pregão é modalidade de licitação, não procedimento auxiliar.",
    dicaFGV: "Modalidade (como se disputa) ≠ procedimento auxiliar (ferramenta de apoio). Os cinco auxiliares: credenciamento, pré-qualificação, PMI, SRP e registro cadastral.",
    tags: ["procedimentos auxiliares"]
  },
  {
    id: "e274", disciplinaId: "espec", topicos: [T(10)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "matriz de riscos"],
    contexto: "A Secretaria vai licitar a construção de um hospital regional pelo regime de contratação integrada.",
    comando: "Nesse caso, a Lei nº 14.133/2021 determina que o edital",
    alternativas: [
      { k: "A", texto: "contemple obrigatoriamente matriz de alocação de riscos entre contratante e contratado.", porqueErrada: "" },
      { k: "B", texto: "dispense o anteprojeto, já que o contratado elaborará todos os projetos.", porqueErrada: "Na contratação integrada, a Administração elabora o anteprojeto." },
      { k: "C", texto: "adote obrigatoriamente o critério de menor preço.", porqueErrada: "A lei não impõe esse critério à contratação integrada." },
      { k: "D", texto: "transfira todos os riscos à Administração.", porqueErrada: "A matriz distribui riscos; não os concentra na Administração." },
    ],
    correta: "A",
    justificativa: "O art. 22, § 3º, da Lei nº 14.133/2021 determina que, quando a contratação se referir a obras e serviços de grande vulto ou forem adotados os regimes de contratação integrada e semi-integrada, o edital contemple obrigatoriamente matriz de alocação de riscos entre o contratante e o contratado.",
    dicaFGV: "Matriz de riscos obrigatória: grande vulto OU contratação integrada OU semi-integrada. Nos demais casos, é facultativa.",
    tags: ["planejamento", "contratos"]
  },
  {
    id: "e275", disciplinaId: "espec", topicos: [T(10)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "fiscal do contrato"],
    contexto: "O contrato de manutenção de tomógrafos exige conhecimento técnico que o servidor designado como fiscal não possui.",
    comando: "Segundo a Lei nº 14.133/2021, a Administração pode",
    alternativas: [
      { k: "A", texto: "dispensar a fiscalização, por falta de pessoal qualificado.", porqueErrada: "A fiscalização é obrigatória." },
      { k: "B", texto: "contratar terceiros para assistir e subsidiar o fiscal com informações pertinentes a essa atribuição, mantida a fiscalização por representante da Administração.", porqueErrada: "" },
      { k: "C", texto: "transferir integralmente a fiscalização à própria empresa contratada.", porqueErrada: "O contratado não fiscaliza a si mesmo; viola a segregação de funções." },
      { k: "D", texto: "delegar a fiscalização ao Conselho Estadual de Saúde.", porqueErrada: "O Conselho exerce controle social, não fiscalização contratual." },
    ],
    correta: "B",
    justificativa: "O art. 117 da Lei nº 14.133/2021 determina que a execução do contrato seja acompanhada e fiscalizada por um ou mais fiscais, representantes da Administração especialmente designados, permitida a contratação de terceiros para assisti-los e subsidiá-los com informações pertinentes a essa atribuição.",
    dicaFGV: "Terceiro APOIA, não substitui. A responsabilidade continua com o fiscal designado pela Administração.",
    tags: ["contratos"]
  },
  {
    id: "e276", disciplinaId: "espec", topicos: [T(10)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 14.133/2021", palavras: ["14.133", "ordem cronológica", "pagamentos"],
    contexto: "O diretor financeiro de um hospital estadual quer pagar primeiro um fornecedor que entregou ontem, passando à frente de outros que aguardam há semanas, por “afinidade comercial”.",
    comando: "De acordo com a Lei nº 14.133/2021, a conduta",
    alternativas: [
      { k: "A", texto: "é lícita, pois a ordem de pagamento é discricionária.", porqueErrada: "A lei impõe ordem cronológica." },
      { k: "B", texto: "viola a obrigação de observar a ordem cronológica de pagamentos para cada fonte de recursos, que só pode ser alterada em hipóteses legais, mediante justificativa e comunicação aos órgãos de controle.", porqueErrada: "" },
      { k: "C", texto: "é lícita, desde que o valor seja inferior ao limite de dispensa.", porqueErrada: "Não há exceção por valor baixo." },
      { k: "D", texto: "é lícita se autorizada verbalmente pelo Secretário.", porqueErrada: "A alteração exige justificativa formal e comunicação aos órgãos de controle." },
    ],
    correta: "B",
    justificativa: "O art. 141 da Lei nº 14.133/2021 obriga a Administração a observar, para cada fonte diferenciada de recursos, a ordem cronológica dos pagamentos, subdividida pelas categorias de contratos (bens, locações, serviços e obras). A ordem só pode ser alterada nas hipóteses legais, mediante prévia justificativa da autoridade competente e posterior comunicação ao controle interno e ao tribunal de contas.",
    dicaFGV: "Impessoalidade aplicada ao pagamento: fila cronológica. “Afinidade” e “autorização verbal” são marcadores de alternativa errada.",
    tags: ["contratos", "princípios"]
  },
];
