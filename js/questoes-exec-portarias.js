/* questoes-exec-portarias.js — Conhecimentos Específicos do cargo Executivo em Saúde, itens 11
 * a 16 do Anexo I: Portarias de Consolidação GM/MS nº 1 a 6, de 28 de setembro de 2017.
 * Questões inéditas, 4 alternativas, padrão FGV.
 *
 * As portarias consolidaram normas anteriores do Ministério da Saúde; quando a questão cita
 * a norma de origem (por exemplo, a Carta dos Direitos dos Usuários), é porque o texto
 * dela foi incorporado à consolidação. */

const T = n => `espec-executivo-em-saude-${n}`;

export const QUESTOES_EXEC_PORTARIAS = [
  /* ---------- 11. PRC nº 1/2017 — usuários, organização e funcionamento ---------- */
  {
    id: "e211", disciplinaId: "espec", topicos: [T(11)], dificuldade: "facil", tempoAlvo: 130,
    assunto: "Portaria de Consolidação nº 1/2017", palavras: ["PRC 1", "direitos dos usuários", "nome social"],
    contexto: "Uma usuária trans foi chamada, na recepção de um ambulatório estadual, pelo nome que consta do registro civil, embora tivesse informado seu nome social. A ouvidoria recebeu a reclamação.",
    comando: "Segundo os direitos dos usuários da saúde consolidados na Portaria de Consolidação nº 1/2017, a pessoa tem direito a",
    alternativas: [
      { k: "A", texto: "ser identificada pelo nome e sobrenome civil, devendo existir em todo documento do usuário campo para registrar o nome social, independentemente do registro civil.", porqueErrada: "" },
      { k: "B", texto: "ser identificada exclusivamente pelo número do Cartão Nacional de Saúde.", porqueErrada: "O cartão não substitui a identificação nominal nem o respeito ao nome social." },
      { k: "C", texto: "ter o nome social registrado somente após a alteração do registro civil.", porqueErrada: "O direito ao nome social independe de alteração do registro civil." },
      { k: "D", texto: "ser atendida apenas em serviço especializado para a população LGBT.", porqueErrada: "O atendimento deve ocorrer em qualquer serviço, livre de discriminação." },
    ],
    correta: "A",
    justificativa: "Os direitos e deveres dos usuários da saúde (antiga Portaria nº 1.820/2009), incorporados à PRC nº 1/2017, asseguram atendimento humanizado, acolhedor e livre de discriminação, com identificação pelo nome e sobrenome civil e campo para o nome social em todo documento do usuário, independentemente do registro civil.",
    dicaFGV: "Direitos do usuário em prova vêm quase sempre em casos de discriminação. Procure a alternativa que AMPLIA o direito sem condicioná-lo a requisito externo.",
    tags: ["direitos do usuário"]
  },
  {
    id: "e212", disciplinaId: "espec", topicos: [T(11)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 1/2017", palavras: ["PRC 1", "planejamento", "instrumentos de planejamento"],
    contexto: "Ao assumir a coordenação de planejamento de uma Secretaria Estadual de Saúde, o executivo precisa organizar os instrumentos de planejamento do SUS consolidados na PRC nº 1/2017.",
    comando: "São instrumentos de planejamento do SUS, interligados entre si:",
    alternativas: [
      { k: "A", texto: "Plano de Saúde, Programações Anuais de Saúde e Relatório de Gestão.", porqueErrada: "" },
      { k: "B", texto: "Plano Plurianual, Lei de Diretrizes Orçamentárias e Lei Orçamentária Anual.", porqueErrada: "São instrumentos de planejamento orçamentário de governo; dialogam com os do SUS, mas não são os instrumentos próprios do sistema." },
      { k: "C", texto: "Termo de Referência, Estudo Técnico Preliminar e Edital.", porqueErrada: "São documentos de contratação pública (Lei nº 14.133/2021)." },
      { k: "D", texto: "Cartão Nacional de Saúde, CNES e prontuário eletrônico.", porqueErrada: "São sistemas de informação e cadastro, não instrumentos de planejamento." },
    ],
    correta: "A",
    justificativa: "A PRC nº 1/2017 incorporou as regras de planejamento do SUS (antiga Portaria nº 2.135/2013), que definem como instrumentos o Plano de Saúde (base de todas as iniciativas, com vigência de quatro anos), as Programações Anuais de Saúde, que operacionalizam o plano, e o Relatório de Gestão, que apresenta os resultados alcançados.",
    dicaFGV: "Tríade do planejamento SUS: PS (4 anos) → PAS (anual) → RAG (anual, resultado). A FGV mistura com PPA/LDO/LOA, que são instrumentos orçamentários.",
    tags: ["planejamento"]
  },
  {
    id: "e213", disciplinaId: "espec", topicos: [T(11)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Portaria de Consolidação nº 1/2017", palavras: ["PRC 1", "Relatório Anual de Gestão", "Conselho de Saúde"],
    contexto: "O Secretário Estadual quer apresentar o Relatório Anual de Gestão (RAG) de 2025 apenas ao Tribunal de Contas, sem submetê-lo ao Conselho Estadual de Saúde.",
    comando: "Segundo as regras de planejamento do SUS e a Lei Complementar nº 141/2012, o RAG deve ser",
    alternativas: [
      { k: "A", texto: "enviado ao respectivo Conselho de Saúde até 30 de março do ano seguinte ao da execução financeira, para apreciação.", porqueErrada: "" },
      { k: "B", texto: "publicado apenas no Diário Oficial, dispensada qualquer apreciação.", porqueErrada: "O Conselho de Saúde deve apreciar o relatório." },
      { k: "C", texto: "enviado ao Ministério da Saúde, que o aprova em substituição ao Conselho.", porqueErrada: "A apreciação cabe ao Conselho de Saúde da respectiva esfera." },
      { k: "D", texto: "apresentado ao Conselho de Saúde a cada quatro anos, junto com o Plano de Saúde.", porqueErrada: "O relatório é anual." },
    ],
    correta: "A",
    justificativa: "O Relatório Anual de Gestão deve ser enviado pelo gestor ao respectivo Conselho de Saúde até 30 de março do ano seguinte ao da execução financeira, cabendo ao Conselho emitir parecer conclusivo (LC nº 141/2012, art. 36, § 1º), regra refletida nas normas de planejamento consolidadas na PRC nº 1/2017.",
    dicaFGV: "Data-chave: 30 de março. E o controle é SOCIAL (Conselho), sem prejuízo do controle externo. Alternativas que substituem o Conselho por outro órgão estão erradas.",
    tags: ["planejamento", "controle social"]
  },
  {
    id: "e214", disciplinaId: "espec", topicos: [T(11)], dificuldade: "media", tempoAlvo: 140,
    assunto: "Portaria de Consolidação nº 1/2017", palavras: ["PRC 1", "deveres dos usuários", "responsabilidades"],
    contexto: "Em uma campanha educativa, a ouvidoria quer divulgar não apenas os direitos, mas também as responsabilidades da pessoa usuária do SUS.",
    comando: "Entre as responsabilidades da pessoa usuária previstas nos direitos e deveres consolidados na PRC nº 1/2017, está",
    alternativas: [
      { k: "A", texto: "prestar informações apropriadas nos atendimentos, como queixas, enfermidades e hospitalizações anteriores, uso de medicamentos e outras condições de saúde.", porqueErrada: "" },
      { k: "B", texto: "pagar taxa de participação nos procedimentos de média complexidade.", porqueErrada: "Não há cobrança do usuário pelos serviços do SUS." },
      { k: "C", texto: "renunciar ao direito de recusar tratamento.", porqueErrada: "O usuário tem direito ao consentimento livre e esclarecido, inclusive à recusa." },
      { k: "D", texto: "apresentar comprovante de contribuição previdenciária a cada atendimento.", porqueErrada: "O acesso ao SUS não é contributivo." },
    ],
    correta: "A",
    justificativa: "Entre as responsabilidades da pessoa usuária estão prestar informações apropriadas nos atendimentos (queixas, enfermidades e hospitalizações anteriores, medicamentos e outras condições), manifestar a compreensão sobre as informações recebidas, seguir o plano de tratamento acordado ou assumir a responsabilidade pela recusa, e adotar comportamento respeitoso com os profissionais e demais usuários.",
    dicaFGV: "Responsabilidade do usuário nunca é financeira nem implica perda de direito. Elimine primeiro as alternativas que criam cobrança ou renúncia.",
    tags: ["direitos do usuário"]
  },
  {
    id: "e215", disciplinaId: "espec", topicos: [T(11)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 1/2017", palavras: ["PRC 1", "CNES", "cadastro de estabelecimentos"],
    contexto: "Uma clínica privada passou a atender pacientes do SUS por convênio, mas não constava em nenhum cadastro oficial, o que impediu o faturamento dos procedimentos.",
    comando: "O cadastro oficial de todos os estabelecimentos de saúde do país, públicos e privados, regulado nas normas de organização e funcionamento do SUS consolidadas na PRC nº 1/2017, é o",
    alternativas: [
      { k: "A", texto: "Cadastro Nacional de Estabelecimentos de Saúde (CNES).", porqueErrada: "" },
      { k: "B", texto: "Sistema de Informação de Agravos de Notificação (SINAN).", porqueErrada: "O SINAN registra notificações de doenças e agravos." },
      { k: "C", texto: "Sistema de Informações sobre Mortalidade (SIM).", porqueErrada: "O SIM registra óbitos." },
      { k: "D", texto: "Cadastro Nacional de Pessoas Jurídicas da Receita Federal.", porqueErrada: "É cadastro tributário, não sanitário-assistencial." },
    ],
    correta: "A",
    justificativa: "O Cadastro Nacional de Estabelecimentos de Saúde (CNES) é o cadastro oficial de todos os estabelecimentos de saúde do país, independentemente de natureza jurídica ou de integrarem o SUS, e é base para o faturamento, a programação e o planejamento. Suas regras estão entre as normas de organização e funcionamento consolidadas na PRC nº 1/2017.",
    dicaFGV: "Cada sistema de informação tem um objeto: CNES (estabelecimentos), SINAN (notificação), SIM (óbitos), SINASC (nascidos vivos), SIH (internações), SIA (ambulatorial).",
    tags: ["sistemas de informação"]
  },

  /* ---------- 12. PRC nº 2/2017 — políticas nacionais de saúde ---------- */
  {
    id: "e221", disciplinaId: "espec", topicos: [T(12)], dificuldade: "media", tempoAlvo: 160,
    assunto: "Portaria de Consolidação nº 2/2017", palavras: ["PRC 2", "Política Nacional de Regulação", "regulação do acesso"],
    contexto: "A Secretaria Estadual quer reorganizar a regulação em três frentes: (I) definir regras e monitorar o sistema estadual de saúde; (II) contratar, controlar e avaliar prestadores e a produção assistencial; (III) organizar o acesso dos pacientes às consultas, exames e leitos por meio de complexos reguladores.",
    comando: "De acordo com a Política Nacional de Regulação do SUS, consolidada na PRC nº 2/2017, as frentes I, II e III correspondem, respectivamente, à regulação",
    alternativas: [
      { k: "A", texto: "de sistemas de saúde, da atenção à saúde e do acesso à assistência.", porqueErrada: "" },
      { k: "B", texto: "do acesso, de sistemas de saúde e da atenção à saúde.", porqueErrada: "Ordem trocada." },
      { k: "C", texto: "econômica, sanitária e assistencial.", porqueErrada: "Não são as dimensões da Política Nacional de Regulação." },
      { k: "D", texto: "da atenção à saúde, do acesso e de sistemas.", porqueErrada: "Ordem trocada." },
    ],
    correta: "A",
    justificativa: "A Política Nacional de Regulação do SUS organiza-se em três dimensões integradas: regulação de sistemas de saúde (macrodiretrizes e monitoramento do sistema), regulação da atenção à saúde (contratação, controle e avaliação dos prestadores e da produção) e regulação do acesso à assistência (organização, controle e gerenciamento dos fluxos, por meio de complexos reguladores e centrais de regulação).",
    dicaFGV: "Do macro ao micro: sistema → atenção (prestadores) → acesso (paciente). A sequência ajuda a responder questões com “respectivamente”.",
    tags: ["regulação"]
  },
  {
    id: "e222", disciplinaId: "espec", topicos: [T(12)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 2/2017", palavras: ["PRC 2", "PNAB", "atenção básica", "longitudinalidade"],
    contexto: "Uma equipe de Saúde da Família acompanha os mesmos usuários ao longo dos anos, construindo vínculo e responsabilização mútua, independentemente da presença de doença.",
    comando: "Na Política Nacional de Atenção Básica, consolidada na PRC nº 2/2017, essa característica corresponde à diretriz da",
    alternativas: [
      { k: "A", texto: "longitudinalidade do cuidado.", porqueErrada: "" },
      { k: "B", texto: "hierarquização.", porqueErrada: "Hierarquização refere-se aos níveis de complexidade da rede." },
      { k: "C", texto: "regionalização.", porqueErrada: "Regionalização trata da organização territorial em regiões de saúde." },
      { k: "D", texto: "resolutividade.", porqueErrada: "Resolutividade é a capacidade de resolver a maioria das necessidades; o enunciado descreve continuidade no tempo." },
    ],
    correta: "A",
    justificativa: "A PNAB prevê entre suas diretrizes a longitudinalidade do cuidado: a continuidade da relação de cuidado, com construção de vínculo e responsabilização entre profissionais e usuários ao longo do tempo e de modo permanente, acompanhando os efeitos das intervenções e de outros elementos na vida das pessoas.",
    dicaFGV: "“Ao longo do tempo” + “vínculo” = longitudinalidade. Atributos da APS caem em todas as provas de saúde coletiva.",
    tags: ["atenção básica"]
  },
  {
    id: "e223", disciplinaId: "espec", topicos: [T(12)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 2/2017", palavras: ["PRC 2", "população negra", "racismo institucional"],
    contexto: "Um levantamento mostrou que mulheres negras recebem menos analgesia no parto e têm maior mortalidade materna do que mulheres brancas na mesma rede.",
    comando: "A política consolidada na PRC nº 2/2017 que reconhece o racismo, as desigualdades étnico-raciais e o racismo institucional como determinantes sociais das condições de saúde é a",
    alternativas: [
      { k: "A", texto: "Política Nacional de Saúde Integral da População Negra.", porqueErrada: "" },
      { k: "B", texto: "Política Nacional de Práticas Integrativas e Complementares.", porqueErrada: "Trata de práticas como acupuntura, fitoterapia e homeopatia." },
      { k: "C", texto: "Política Nacional de Medicamentos.", porqueErrada: "Trata do acesso a medicamentos essenciais e da promoção do uso racional." },
      { k: "D", texto: "Política Nacional de Educação Permanente em Saúde.", porqueErrada: "Trata da formação e do desenvolvimento dos trabalhadores." },
    ],
    correta: "A",
    justificativa: "A Política Nacional de Saúde Integral da População Negra, consolidada na PRC nº 2/2017, tem como marca o reconhecimento do racismo, das desigualdades étnico-raciais e do racismo institucional como determinantes sociais das condições de saúde, com vistas à promoção da equidade em saúde.",
    dicaFGV: "Equidade aplicada a grupo específico costuma ter política própria. Identifique o grupo no enunciado e procure a política nominal.",
    tags: ["equidade"]
  },
  {
    id: "e224", disciplinaId: "espec", topicos: [T(12)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 2/2017", palavras: ["PRC 2", "educação permanente"],
    contexto: "Uma maternidade estadual decidiu substituir palestras avulsas por encontros em que as equipes analisam casos reais do serviço e reorganizam suas práticas a partir dos problemas identificados.",
    comando: "A iniciativa expressa a concepção da",
    alternativas: [
      { k: "A", texto: "educação continuada, centrada na atualização técnica individual por cursos padronizados.", porqueErrada: "A educação continuada tem foco em atualização disciplinar, desvinculada do processo de trabalho." },
      { k: "B", texto: "Política Nacional de Educação Permanente em Saúde, baseada na aprendizagem no trabalho e na problematização do processo de trabalho.", porqueErrada: "" },
      { k: "C", texto: "Política Nacional de Regulação, voltada ao controle do acesso.", porqueErrada: "Regulação não trata de formação dos trabalhadores." },
      { k: "D", texto: "auditoria assistencial, voltada à responsabilização dos profissionais.", porqueErrada: "Auditoria verifica conformidade; não é estratégia pedagógica." },
    ],
    correta: "B",
    justificativa: "A Política Nacional de Educação Permanente em Saúde, consolidada na PRC nº 2/2017, entende a educação permanente como aprendizagem no trabalho, em que aprender e ensinar se incorporam ao cotidiano das organizações, a partir da problematização do processo de trabalho e das necessidades de saúde das pessoas.",
    dicaFGV: "Permanente = no trabalho, a partir de problemas reais. Continuada = cursos de atualização. A banca opõe as duas com frequência.",
    tags: ["gestão do trabalho"]
  },
  {
    id: "e225", disciplinaId: "espec", topicos: [T(12)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Portaria de Consolidação nº 2/2017", palavras: ["PRC 2", "Política Nacional de Promoção da Saúde", "temas prioritários"],
    contexto: "Ao elaborar o plano municipal de promoção da saúde, a equipe consultou os temas prioritários da Política Nacional de Promoção da Saúde (PNPS), consolidada na PRC nº 2/2017.",
    comando: "É tema prioritário da PNPS:",
    alternativas: [
      { k: "A", texto: "a ampliação de leitos de UTI em hospitais de grande porte.", porqueErrada: "Medida assistencial hospitalar, não de promoção." },
      { k: "B", texto: "a promoção da mobilidade segura e a promoção da cultura da paz e dos direitos humanos.", porqueErrada: "" },
      { k: "C", texto: "a incorporação de medicamentos biológicos de alto custo.", porqueErrada: "Tema de incorporação de tecnologias e assistência farmacêutica." },
      { k: "D", texto: "a terceirização da gestão das unidades básicas.", porqueErrada: "Modelo de gestão, não tema de promoção da saúde." },
    ],
    correta: "B",
    justificativa: "A PNPS elenca temas prioritários como formação e educação permanente, alimentação adequada e saudável, práticas corporais e atividades físicas, enfrentamento do uso do tabaco e de seus derivados, enfrentamento do uso abusivo de álcool e outras drogas, promoção da mobilidade segura, promoção da cultura da paz e dos direitos humanos e promoção do desenvolvimento sustentável.",
    dicaFGV: "Promoção da saúde atua sobre condições de vida, não sobre leitos e medicamentos. Elimine as alternativas assistenciais.",
    tags: ["promoção da saúde"]
  },

  /* ---------- 13. PRC nº 3/2017 — redes do SUS ---------- */
  {
    id: "e231", disciplinaId: "espec", topicos: [T(13)], dificuldade: "media", tempoAlvo: 160,
    assunto: "Portaria de Consolidação nº 3/2017", palavras: ["PRC 3", "Redes de Atenção à Saúde", "poliárquica"],
    contexto: "Em uma oficina de regionalização, um técnico defendeu organizar a rede estadual como uma pirâmide rígida, com a atenção primária na base e o hospital no topo, cada nível subordinado ao seguinte.",
    comando: "Segundo as diretrizes para a organização das Redes de Atenção à Saúde, consolidadas na PRC nº 3/2017, a proposta",
    alternativas: [
      { k: "A", texto: "é adequada, pois as RAS se estruturam de forma hierárquica e piramidal.", porqueErrada: "As diretrizes substituem a pirâmide por uma organização poliárquica." },
      { k: "B", texto: "é inadequada, pois as RAS se organizam de forma poliárquica, com pontos de atenção de diferentes densidades tecnológicas sem hierarquia entre si, tendo a atenção primária como centro de comunicação.", porqueErrada: "" },
      { k: "C", texto: "é adequada, desde que o hospital coordene o cuidado de toda a rede.", porqueErrada: "A coordenação do cuidado cabe à atenção primária, centro de comunicação da rede." },
      { k: "D", texto: "é inadequada, pois as RAS dispensam a atenção primária quando há hospital na região.", porqueErrada: "A atenção primária é indispensável e ordena a rede." },
    ],
    correta: "B",
    justificativa: "As diretrizes da RAS (antiga Portaria nº 4.279/2010, consolidada na PRC nº 3/2017) definem-na como arranjos organizativos de ações e serviços de diferentes densidades tecnológicas, integrados por sistemas de apoio técnico, logístico e de gestão. A organização é poliárquica — os pontos de atenção não têm hierarquia entre si — e a atenção primária é o centro de comunicação, coordenadora do cuidado e ordenadora da rede.",
    dicaFGV: "“Densidade tecnológica diferente” não significa “importância diferente”. Poliarquia é a palavra que derruba a pirâmide nas questões de RAS.",
    tags: ["redes"]
  },
  {
    id: "e232", disciplinaId: "espec", topicos: [T(13)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 3/2017", palavras: ["PRC 3", "elementos constitutivos", "estrutura operacional"],
    contexto: "Ao modelar a rede de atenção às pessoas com doenças crônicas de uma região de saúde, a equipe precisa identificar os elementos constitutivos de uma Rede de Atenção à Saúde.",
    comando: "São elementos constitutivos das RAS:",
    alternativas: [
      { k: "A", texto: "população, estrutura operacional e modelo de atenção à saúde.", porqueErrada: "" },
      { k: "B", texto: "hospital, ambulatório e laboratório.", porqueErrada: "São pontos de atenção ou sistemas de apoio, partes da estrutura operacional, não os elementos constitutivos." },
      { k: "C", texto: "conselho, conferência e ouvidoria.", porqueErrada: "São instâncias de participação e escuta." },
      { k: "D", texto: "plano de saúde, programação anual e relatório de gestão.", porqueErrada: "São instrumentos de planejamento." },
    ],
    correta: "A",
    justificativa: "As RAS têm três elementos constitutivos: a população (sob responsabilidade sanitária, conhecida e registrada), a estrutura operacional (centro de comunicação na atenção primária, pontos de atenção secundária e terciária, sistemas de apoio, sistemas logísticos e sistema de governança) e o modelo de atenção à saúde.",
    dicaFGV: "Três elementos (população, estrutura, modelo) e cinco componentes da estrutura operacional. A banca tenta confundir componentes com elementos.",
    tags: ["redes"]
  },
  {
    id: "e233", disciplinaId: "espec", topicos: [T(13)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 3/2017", palavras: ["PRC 3", "RAPS", "desinstitucionalização"],
    contexto: "Pessoas egressas de longa internação psiquiátrica, sem vínculos familiares, passaram a morar em casas inseridas na comunidade, com apoio de cuidadores, como parte do processo de reinserção social.",
    comando: "Na Rede de Atenção Psicossocial (RAPS), consolidada na PRC nº 3/2017, essas moradias são os",
    alternativas: [
      { k: "A", texto: "Serviços Residenciais Terapêuticos, integrantes das estratégias de desinstitucionalização.", porqueErrada: "" },
      { k: "B", texto: "Centros de Atenção Psicossocial do tipo III.", porqueErrada: "CAPS são serviços de atenção psicossocial especializada, não moradias." },
      { k: "C", texto: "leitos de saúde mental em hospital geral.", porqueErrada: "Componente da atenção hospitalar, para internações de curta duração." },
      { k: "D", texto: "Unidades de Pronto Atendimento.", porqueErrada: "Integram o componente de urgência e emergência." },
    ],
    correta: "A",
    justificativa: "A RAPS é composta por atenção básica, atenção psicossocial especializada (CAPS), atenção de urgência e emergência, atenção residencial de caráter transitório, atenção hospitalar, estratégias de desinstitucionalização e reabilitação psicossocial. Os Serviços Residenciais Terapêuticos, moradias inseridas na comunidade para egressos de internações de longa permanência, integram as estratégias de desinstitucionalização.",
    dicaFGV: "Moradia permanente para egressos = SRT (desinstitucionalização). Acolhimento temporário = atenção residencial de caráter transitório. Não confunda os dois componentes.",
    tags: ["saúde mental", "redes"]
  },
  {
    id: "e234", disciplinaId: "espec", topicos: [T(13)], dificuldade: "facil", tempoAlvo: 130,
    assunto: "Portaria de Consolidação nº 3/2017", palavras: ["PRC 3", "Rede de Atenção às Urgências", "SAMU"],
    contexto: "Na revisão do plano regional da Rede de Atenção às Urgências e Emergências (RUE), a equipe listou seus componentes.",
    comando: "Integram a RUE, conforme as normas consolidadas na PRC nº 3/2017:",
    alternativas: [
      { k: "A", texto: "SAMU 192 e centrais de regulação, sala de estabilização, UPA 24h, atenção hospitalar e atenção domiciliar, entre outros.", porqueErrada: "" },
      { k: "B", texto: "apenas os prontos-socorros hospitalares de alta complexidade.", porqueErrada: "A RUE tem vários componentes, inclusive pré-hospitalares e a atenção básica." },
      { k: "C", texto: "exclusivamente o SAMU, por ser a porta de entrada única das urgências.", porqueErrada: "Há várias portas de entrada para urgências." },
      { k: "D", texto: "CAPS, Serviços Residenciais Terapêuticos e Unidades de Acolhimento.", porqueErrada: "São componentes da RAPS." },
    ],
    correta: "A",
    justificativa: "A Rede de Atenção às Urgências e Emergências tem como componentes promoção, prevenção e vigilância à saúde; atenção básica; SAMU 192 e centrais de regulação médica das urgências; sala de estabilização; Força Nacional de Saúde do SUS; UPA 24h e o conjunto de serviços de urgência 24 horas; atenção hospitalar; e atenção domiciliar.",
    dicaFGV: "“Apenas” e “exclusivamente” em redes de atenção são sinais quase certos de alternativa errada: rede pressupõe vários pontos.",
    tags: ["urgência", "redes"]
  },
  {
    id: "e235", disciplinaId: "espec", topicos: [T(13)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Portaria de Consolidação nº 3/2017", palavras: ["PRC 3", "Rede Alyne", "Rede Cegonha", "mortalidade materna"],
    contexto: "Em 2024, o Ministério da Saúde alterou a PRC nº 3/2017 para reestruturar a rede voltada ao cuidado materno e infantil, com meta de reduzir a mortalidade materna e enfrentar as desigualdades étnico-raciais nesse indicador.",
    comando: "A rede que passou a substituir a Rede Cegonha é a",
    alternativas: [
      { k: "A", texto: "Rede Alyne.", porqueErrada: "" },
      { k: "B", texto: "Rede de Cuidados à Pessoa com Deficiência.", porqueErrada: "Rede distinta, voltada à reabilitação." },
      { k: "C", texto: "Rede de Atenção Psicossocial.", porqueErrada: "Rede voltada à saúde mental e ao uso de álcool e outras drogas." },
      { k: "D", texto: "Rede de Atenção às Pessoas com Doenças Crônicas.", porqueErrada: "Rede voltada às condições crônicas." },
    ],
    correta: "A",
    justificativa: "Em 2024, a Rede Alyne foi instituída por portaria que alterou a PRC nº 3/2017, reestruturando a antiga Rede Cegonha. O nome homenageia Alyne Pimentel, mulher negra cuja morte materna evitável levou à condenação do Brasil pelo Comitê CEDAW da ONU, e a rede tem foco na redução da mortalidade materna e das desigualdades étnico-raciais.",
    dicaFGV: "Normas consolidadas continuam sendo alteradas. A FGV cobra atualizações recentes; Rede Alyne é um exemplo típico.",
    tags: ["materno-infantil", "redes"]
  },

  /* ---------- 14. PRC nº 4/2017 — sistemas e subsistemas ---------- */
  {
    id: "e241", disciplinaId: "espec", topicos: [T(14)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 4/2017", palavras: ["PRC 4", "notificação compulsória imediata", "24 horas"],
    contexto: "Um hospital de Araguaína atendeu caso suspeito de doença que consta da lista de notificação compulsória imediata.",
    comando: "Segundo as normas de notificação compulsória consolidadas na PRC nº 4/2017, a notificação imediata deve ser realizada em até",
    alternativas: [
      { k: "A", texto: "24 horas a partir do conhecimento da ocorrência, pelo meio de comunicação mais rápido disponível.", porqueErrada: "" },
      { k: "B", texto: "7 dias, por meio da ficha de notificação semanal.", porqueErrada: "Esse é o prazo da notificação semanal." },
      { k: "C", texto: "30 dias, após confirmação laboratorial.", porqueErrada: "A notificação não aguarda confirmação; casos suspeitos também são notificados." },
      { k: "D", texto: "72 horas, somente se houver óbito.", porqueErrada: "Não há essa condição." },
    ],
    correta: "A",
    justificativa: "As normas de notificação compulsória, incorporadas à PRC nº 4/2017 (Anexo V), definem a notificação compulsória imediata como aquela realizada em até 24 horas a partir do conhecimento da ocorrência de doença, agravo ou evento de saúde pública, pelo meio de comunicação mais rápido disponível; a semanal deve ser feita em até 7 dias.",
    dicaFGV: "Imediata = 24 horas. Semanal = 7 dias. Suspeita também se notifica: não espere confirmação.",
    tags: ["vigilância epidemiológica"]
  },
  {
    id: "e242", disciplinaId: "espec", topicos: [T(14)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 4/2017", palavras: ["PRC 4", "notificação compulsória", "obrigatoriedade"],
    contexto: "A direção de um hospital privado afirmou que a notificação compulsória é responsabilidade exclusiva dos serviços públicos e que, por isso, não a realizaria.",
    comando: "De acordo com as normas consolidadas na PRC nº 4/2017, a notificação compulsória é obrigatória para",
    alternativas: [
      { k: "A", texto: "os médicos, outros profissionais de saúde ou responsáveis pelos serviços públicos e privados de saúde que prestam assistência ao paciente.", porqueErrada: "" },
      { k: "B", texto: "apenas os médicos dos serviços públicos.", porqueErrada: "A obrigação alcança outros profissionais e os serviços privados." },
      { k: "C", texto: "somente os laboratórios de saúde pública.", porqueErrada: "Laboratórios também comunicam, mas a obrigação é mais ampla." },
      { k: "D", texto: "qualquer cidadão, sob pena de multa.", porqueErrada: "O cidadão PODE comunicar, mas a obrigação legal recai sobre profissionais e serviços de saúde." },
    ],
    correta: "A",
    justificativa: "A notificação compulsória é obrigatória para os médicos, outros profissionais de saúde ou responsáveis pelos serviços públicos e privados de saúde que prestam assistência ao paciente, nos termos da Lei nº 6.259/1975. A comunicação pode ser feita por qualquer cidadão que tenha conhecimento da ocorrência, sem caráter obrigatório.",
    dicaFGV: "Obrigatória para profissionais e serviços (públicos E privados); facultativa para o cidadão. A FGV troca “pode” por “deve” na alternativa sobre cidadãos.",
    tags: ["vigilância epidemiológica"]
  },
  {
    id: "e243", disciplinaId: "espec", topicos: [T(14)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Portaria de Consolidação nº 4/2017", palavras: ["PRC 4", "notificação negativa", "conceitos"],
    contexto: "Uma unidade sentinela informou à vigilância municipal que, na semana epidemiológica, não houve nenhum caso suspeito das doenças monitoradas.",
    comando: "A comunicação descrita é denominada",
    alternativas: [
      { k: "A", texto: "notificação negativa.", porqueErrada: "" },
      { k: "B", texto: "investigação epidemiológica.", porqueErrada: "Investigação é o procedimento posterior à notificação de um caso." },
      { k: "C", texto: "busca ativa.", porqueErrada: "Busca ativa é a procura de casos pela vigilância, não a informação de ausência." },
      { k: "D", texto: "notificação compulsória imediata.", porqueErrada: "Não há caso a notificar; a comunicação é de ausência." },
    ],
    correta: "A",
    justificativa: "A notificação negativa é a comunicação semanal, realizada pelo responsável pelo estabelecimento de saúde à autoridade de saúde, informando que na semana epidemiológica não foi identificada nenhuma doença, agravo ou evento de saúde pública constante da lista de notificação compulsória. Ela demonstra que a vigilância está ativa.",
    dicaFGV: "Notificação negativa ≠ ausência de notificação. É informar ativamente que não houve casos — prova de que o serviço está atento.",
    tags: ["vigilância epidemiológica"]
  },
  {
    id: "e244", disciplinaId: "espec", topicos: [T(14)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 4/2017", palavras: ["PRC 4", "Sistema Nacional de Transplantes", "lista única"],
    contexto: "Um deputado estadual pediu à Secretaria de Saúde que um paciente de sua cidade fosse transplantado à frente de outros, por ter “urgência social”.",
    comando: "Considerando as regras do Sistema Nacional de Transplantes, consolidadas na PRC nº 4/2017, o pedido deve ser",
    alternativas: [
      { k: "A", texto: "negado, pois a distribuição de órgãos segue lista única de potenciais receptores, com critérios técnicos e cronológicos gerenciados pelas Centrais de Transplantes.", porqueErrada: "" },
      { k: "B", texto: "atendido, se aprovado pelo Conselho Estadual de Saúde.", porqueErrada: "O Conselho não altera a ordem da lista." },
      { k: "C", texto: "atendido, pois o gestor estadual pode reordenar a lista em casos de repercussão social.", porqueErrada: "Não há essa discricionariedade; a lista segue critérios técnicos." },
      { k: "D", texto: "encaminhado ao hospital transplantador, que decide livremente quem receberá o órgão.", porqueErrada: "A distribuição é coordenada pelas Centrais, segundo a lista." },
    ],
    correta: "A",
    justificativa: "O Regulamento Técnico do Sistema Nacional de Transplantes, consolidado na PRC nº 4/2017, organiza a captação e a distribuição de órgãos e tecidos por meio das Centrais Estaduais de Transplantes, com base em lista única de potenciais receptores e em critérios técnicos (compatibilidade, gravidade, tempo de espera), sem espaço para preferências pessoais ou políticas.",
    dicaFGV: "Princípios de impessoalidade e equidade aparecem em sistemas de alocação de recursos escassos. Qualquer “reordenar por pedido” está errado.",
    tags: ["transplantes"]
  },
  {
    id: "e245", disciplinaId: "espec", topicos: [T(14)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 4/2017", palavras: ["PRC 4", "SISLAB", "Lacen"],
    contexto: "Amostras de um surto de doença diarreica em Gurupi precisam ser analisadas em laboratório de referência estadual, integrante da rede nacional de laboratórios de saúde pública.",
    comando: "No Sistema Nacional de Laboratórios de Saúde Pública (SISLAB), cujas normas estão consolidadas na PRC nº 4/2017, o laboratório de referência estadual é o",
    alternativas: [
      { k: "A", texto: "Laboratório Central de Saúde Pública (Lacen).", porqueErrada: "" },
      { k: "B", texto: "laboratório de análises clínicas de qualquer hospital privado.", porqueErrada: "Laboratórios privados podem colaborar, mas não são a referência estadual da rede." },
      { k: "C", texto: "Instituto Nacional do Câncer.", porqueErrada: "O INCA é instituição de referência em oncologia, não o laboratório estadual do SISLAB." },
      { k: "D", texto: "laboratório da Agência Nacional de Saúde Suplementar.", porqueErrada: "A ANS não integra a rede de laboratórios de saúde pública." },
    ],
    correta: "A",
    justificativa: "O SISLAB é o conjunto de redes nacionais de laboratórios organizadas por agravos ou programas, de forma hierarquizada por grau de complexidade. Os Laboratórios Centrais de Saúde Pública (Lacen), vinculados às Secretarias Estaduais, são as referências estaduais, coordenando a rede de laboratórios do Estado.",
    dicaFGV: "Lacen = laboratório de saúde pública do Estado. Aparece em questões de vigilância epidemiológica, sanitária e ambiental.",
    tags: ["laboratórios"]
  },

  /* ---------- 15. PRC nº 5/2017 — ações e serviços de saúde ---------- */
  {
    id: "e251", disciplinaId: "espec", topicos: [T(15)], dificuldade: "media", tempoAlvo: 160,
    assunto: "Portaria de Consolidação nº 5/2017", palavras: ["PRC 5", "água para consumo humano", "Vigiagua"],
    contexto: "Após reclamações de turbidez, discute-se quem responde pelo controle da qualidade da água distribuída pela concessionária e quem exerce a vigilância dessa qualidade.",
    comando: "Segundo as normas de potabilidade da água consolidadas na PRC nº 5/2017,",
    alternativas: [
      { k: "A", texto: "o controle da qualidade cabe ao responsável pelo sistema ou solução alternativa de abastecimento, e a vigilância da qualidade cabe à autoridade de saúde pública.", porqueErrada: "" },
      { k: "B", texto: "o controle e a vigilância cabem ambos à concessionária, que se autofiscaliza.", porqueErrada: "A vigilância é atribuição da autoridade de saúde, independente do prestador." },
      { k: "C", texto: "o controle cabe à autoridade de saúde, e a vigilância, ao consumidor.", porqueErrada: "Inverte e desloca as responsabilidades." },
      { k: "D", texto: "ambos cabem exclusivamente à Anvisa, inclusive nos municípios.", porqueErrada: "A vigilância da qualidade da água é executada pelas três esferas, com forte atuação municipal." },
    ],
    correta: "A",
    justificativa: "As normas de controle e vigilância da qualidade da água para consumo humano e seu padrão de potabilidade (Anexo XX da PRC nº 5/2017) distinguem o controle — exercido pelo responsável pelo sistema ou solução alternativa coletiva de abastecimento — da vigilância, exercida pela autoridade de saúde pública para verificar se a água atende ao padrão e avaliar os riscos à saúde.",
    dicaFGV: "Controle = quem produz a água. Vigilância = quem fiscaliza (saúde pública). A FGV inverte os papéis nas alternativas.",
    tags: ["vigilância ambiental"]
  },
  {
    id: "e252", disciplinaId: "espec", topicos: [T(15)], dificuldade: "facil", tempoAlvo: 130,
    assunto: "Portaria de Consolidação nº 5/2017", palavras: ["PRC 5", "doação de sangue", "hemoterapia"],
    contexto: "Para aumentar os estoques do hemocentro estadual, um vereador propôs oferecer pagamento em dinheiro a cada doador.",
    comando: "Segundo o regulamento técnico de procedimentos hemoterápicos consolidado na PRC nº 5/2017, a proposta é",
    alternativas: [
      { k: "A", texto: "lícita, desde que o valor seja igual para todos.", porqueErrada: "A doação deve ser não remunerada, direta ou indiretamente." },
      { k: "B", texto: "ilícita, pois a doação de sangue deve ser voluntária, anônima, altruísta e não remunerada, direta ou indiretamente.", porqueErrada: "" },
      { k: "C", texto: "lícita, se aprovada pelo Conselho Municipal de Saúde.", porqueErrada: "O Conselho não pode afastar a regra de não remuneração." },
      { k: "D", texto: "lícita apenas para doadores de plaquetas por aférese.", porqueErrada: "A regra de não remuneração vale para todas as modalidades de doação." },
    ],
    correta: "B",
    justificativa: "O regulamento técnico de procedimentos hemoterápicos (Anexo IV da PRC nº 5/2017, redefinido pela Portaria GM/MS nº 11.685/2026), em consonância com o art. 199, § 4º, da Constituição, estabelece que a doação de sangue deve ser voluntária, anônima, altruísta e não remunerada, direta ou indiretamente, vedada a comercialização.",
    dicaFGV: "Sangue no Brasil é proibido de comercializar por força da Constituição. Qualquer alternativa que admita pagamento está errada.",
    tags: ["hemoterapia"]
  },
  {
    id: "e253", disciplinaId: "espec", topicos: [T(15)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Portaria de Consolidação nº 5/2017", palavras: ["PRC 5", "segurança do paciente", "evento adverso"],
    contexto: "Em um hospital estadual, foi administrado ao paciente do leito 4 um antibiótico prescrito para o paciente do leito 5. O paciente não teve nenhuma reação nem dano. Em outro caso, um paciente caiu da maca e fraturou o punho.",
    comando: "Segundo os conceitos do Programa Nacional de Segurança do Paciente, os dois casos são, respectivamente,",
    alternativas: [
      { k: "A", texto: "incidente sem dano e evento adverso.", porqueErrada: "" },
      { k: "B", texto: "evento adverso e incidente sem dano.", porqueErrada: "Ordem invertida: o primeiro caso não causou dano." },
      { k: "C", texto: "dois eventos adversos, pois ambos violaram protocolos.", porqueErrada: "Evento adverso exige dano ao paciente; o primeiro caso não o produziu." },
      { k: "D", texto: "dois incidentes sem dano, pois a fratura não decorreu de medicamento.", porqueErrada: "A queda causou dano (fratura): é evento adverso, qualquer que seja a causa." },
    ],
    correta: "A",
    justificativa: "O Programa Nacional de Segurança do Paciente define incidente como evento ou circunstância que poderia ter resultado, ou resultou, em dano desnecessário ao paciente, e evento adverso como o incidente que resulta em dano à saúde. O erro de medicação sem consequência é incidente sem dano; a queda com fratura é evento adverso.",
    dicaFGV: "A chave é o DANO: incidente é o gênero; evento adverso é o incidente que causou dano. Violação de protocolo, sozinha, não define a categoria.",
    tags: ["segurança do paciente"]
  },
  {
    id: "e254", disciplinaId: "espec", topicos: [T(15)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 5/2017", palavras: ["PRC 5", "segurança do paciente", "protocolos"],
    contexto: "O núcleo de segurança do paciente de um hospital estadual vai implantar os protocolos básicos do Programa Nacional de Segurança do Paciente.",
    comando: "Entre esses protocolos básicos, inclui-se o de",
    alternativas: [
      { k: "A", texto: "identificação do paciente.", porqueErrada: "" },
      { k: "B", texto: "redução do tempo de espera em ambulatórios.", porqueErrada: "Indicador de acesso, não protocolo básico de segurança do paciente." },
      { k: "C", texto: "terceirização da hotelaria hospitalar.", porqueErrada: "Medida de gestão, sem relação com os protocolos de segurança." },
      { k: "D", texto: "auditoria de faturamento hospitalar.", porqueErrada: "Controle financeiro, não protocolo de segurança." },
    ],
    correta: "A",
    justificativa: "O Programa Nacional de Segurança do Paciente, cujas normas integram as ações e serviços consolidados na PRC nº 5/2017, tem como protocolos básicos: identificação do paciente; higiene das mãos; cirurgia segura; segurança na prescrição, uso e administração de medicamentos; prevenção de quedas; e prevenção de lesões por pressão.",
    dicaFGV: "Seis protocolos: identificação, mãos, cirurgia, medicamentos, quedas, lesão por pressão. Itens de gestão financeira ou de acesso não entram.",
    tags: ["segurança do paciente"]
  },
  {
    id: "e255", disciplinaId: "espec", topicos: [T(15)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 5/2017", palavras: ["PRC 5", "segurança do paciente", "objetivo"],
    contexto: "Um diretor de hospital privado conveniado afirmou que o Programa Nacional de Segurança do Paciente vale apenas para hospitais públicos de grande porte.",
    comando: "Segundo as normas do Programa, consolidadas na PRC nº 5/2017, seu objetivo geral é contribuir para a qualificação do cuidado em saúde",
    alternativas: [
      { k: "A", texto: "apenas nos hospitais públicos federais.", porqueErrada: "O Programa não se limita à esfera federal nem aos serviços públicos." },
      { k: "B", texto: "em todos os estabelecimentos de saúde do território nacional.", porqueErrada: "" },
      { k: "C", texto: "somente nos serviços com mais de 50 leitos.", porqueErrada: "Não há corte por porte." },
      { k: "D", texto: "exclusivamente nas unidades de terapia intensiva.", porqueErrada: "O alcance é todo o cuidado em saúde, não apenas a UTI." },
    ],
    correta: "B",
    justificativa: "O Programa Nacional de Segurança do Paciente (originalmente instituído pela Portaria nº 529/2013 e consolidado na PRC nº 5/2017) tem como objetivo geral contribuir para a qualificação do cuidado em saúde em todos os estabelecimentos de saúde do território nacional, públicos e privados.",
    dicaFGV: "Restrições de porte, esfera ou setor (“apenas”, “somente”, “exclusivamente”) são os distratores típicos quando a norma é universal.",
    tags: ["segurança do paciente"]
  },

  /* ---------- 16. PRC nº 6/2017 — financiamento e transferência ---------- */
  {
    id: "e261", disciplinaId: "espec", topicos: [T(16)], dificuldade: "media", tempoAlvo: 160,
    assunto: "Portaria de Consolidação nº 6/2017", palavras: ["PRC 6", "blocos de financiamento", "manutenção", "estruturação"],
    contexto: "Ao elaborar a prestação de contas, a equipe precisa classificar os repasses federais recebidos fundo a fundo pela Secretaria Estadual de Saúde.",
    comando: "Segundo a PRC nº 6/2017, com as alterações posteriores, os recursos federais destinados às ações e serviços públicos de saúde são organizados e transferidos na forma dos blocos de",
    alternativas: [
      { k: "A", texto: "Manutenção das Ações e Serviços Públicos de Saúde e Estruturação da Rede de Serviços Públicos de Saúde.", porqueErrada: "" },
      { k: "B", texto: "Atenção Básica, Média e Alta Complexidade, Vigilância em Saúde, Assistência Farmacêutica, Gestão e Investimentos.", porqueErrada: "Os seis blocos antigos foram substituídos pelo modelo de dois blocos." },
      { k: "C", texto: "Custeio de Pessoal e Custeio de Obras.", porqueErrada: "Não existe essa divisão." },
      { k: "D", texto: "Fundo de Participação dos Municípios e Fundo de Participação dos Estados.", porqueErrada: "São transferências constitucionais gerais, não blocos do SUS." },
    ],
    correta: "A",
    justificativa: "A PRC nº 6/2017, alterada pela Portaria nº 3.992/2017, reduziu os antigos blocos a dois: Custeio e Investimento. Em 2020, eles passaram a se chamar Bloco de Manutenção das Ações e Serviços Públicos de Saúde e Bloco de Estruturação da Rede de Serviços Públicos de Saúde. Os recursos são transferidos fundo a fundo, em conta financeira específica para cada bloco.",
    dicaFGV: "Antigamente eram seis blocos; hoje são dois (Manutenção e Estruturação). Alternativas com a lista antiga são a pegadinha de norma revogada.",
    tags: ["financiamento"]
  },
  {
    id: "e262", disciplinaId: "espec", topicos: [T(16)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Portaria de Consolidação nº 6/2017", palavras: ["PRC 6", "vedações", "bloco de manutenção"],
    contexto: "Um município pretende usar recursos do Bloco de Manutenção para construir uma nova Unidade Básica de Saúde em terreno vazio.",
    comando: "Segundo as regras de financiamento consolidadas na PRC nº 6/2017, a utilização pretendida é",
    alternativas: [
      { k: "A", texto: "permitida, pois toda despesa com saúde pode ser paga por qualquer bloco.", porqueErrada: "Cada bloco tem finalidade própria e vedações." },
      { k: "B", texto: "vedada, pois recursos de custeio/manutenção não podem financiar obras de construções novas, admitidas apenas reformas e adequações de imóveis já existentes utilizados em ações e serviços de saúde.", porqueErrada: "" },
      { k: "C", texto: "permitida, desde que o Conselho Municipal aprove.", porqueErrada: "A aprovação do Conselho não afasta a vedação normativa." },
      { k: "D", texto: "vedada, pois nenhum recurso federal pode ser usado em infraestrutura.", porqueErrada: "O Bloco de Estruturação existe justamente para obras e equipamentos." },
    ],
    correta: "B",
    justificativa: "As regras de financiamento consolidadas na PRC nº 6/2017 vedam o uso de recursos do bloco de custeio/manutenção em obras de construções novas, exceto reformas e adequações de imóveis já existentes utilizados para ações e serviços de saúde. Obras novas e aquisição de equipamentos são financiadas pelo Bloco de Estruturação.",
    dicaFGV: "Obra NOVA = Estruturação. Reforma de prédio existente = pode sair da Manutenção. A diferença entre “construir” e “reformar” decide a questão.",
    tags: ["financiamento"]
  },
  {
    id: "e263", disciplinaId: "espec", topicos: [T(16)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 6/2017", palavras: ["PRC 6", "fundo a fundo", "transferência"],
    contexto: "Um gestor municipal recém-empossado pergunta como os recursos federais do SUS chegam ao município para custear as ações de saúde.",
    comando: "Segundo a PRC nº 6/2017, a regra para essas transferências é que sejam realizadas",
    alternativas: [
      { k: "A", texto: "do Fundo Nacional de Saúde diretamente aos Fundos de Saúde estaduais, distrital e municipais, de forma regular e automática.", porqueErrada: "" },
      { k: "B", texto: "por meio de convênios negociados caso a caso, sem regularidade.", porqueErrada: "Convênios existem para situações específicas, mas a regra para o custeio é a transferência fundo a fundo." },
      { k: "C", texto: "por depósito na conta pessoal do Secretário Municipal de Saúde.", porqueErrada: "Recursos públicos vão para o Fundo de Saúde, nunca para conta pessoal." },
      { k: "D", texto: "por meio de pagamento direto aos servidores municipais pelo Ministério da Saúde.", porqueErrada: "O Ministério não paga diretamente os servidores municipais." },
    ],
    correta: "A",
    justificativa: "A PRC nº 6/2017 disciplina o financiamento e a transferência dos recursos federais para as ações e serviços de saúde, que ocorre, em regra, na modalidade fundo a fundo: do Fundo Nacional de Saúde para os Fundos de Saúde dos Estados, do Distrito Federal e dos Municípios, de forma regular e automática, em contas vinculadas aos blocos de financiamento.",
    dicaFGV: "“Fundo a fundo, regular e automático” é a expressão-chave, presente também na Lei nº 8.142/1990.",
    tags: ["financiamento"]
  },
  {
    id: "e264", disciplinaId: "espec", topicos: [T(16)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Portaria de Consolidação nº 6/2017", palavras: ["PRC 6", "vedações", "servidores"],
    contexto: "A Secretaria Municipal quer usar recursos federais do Bloco de Manutenção para pagar a folha de servidores aposentados da saúde.",
    comando: "Segundo as vedações consolidadas na PRC nº 6/2017, o pagamento é",
    alternativas: [
      { k: "A", texto: "permitido, por se tratar de despesa de pessoal da área da saúde.", porqueErrada: "A norma veda expressamente o pagamento de servidores inativos." },
      { k: "B", texto: "vedado, pois os recursos não podem ser usados para pagamento de servidores inativos.", porqueErrada: "" },
      { k: "C", texto: "permitido, desde que limitado a 10% do repasse.", porqueErrada: "Não há percentual que autorize esse pagamento." },
      { k: "D", texto: "obrigatório, por se tratar de despesa continuada.", porqueErrada: "Despesas previdenciárias não são ações e serviços públicos de saúde." },
    ],
    correta: "B",
    justificativa: "As regras de financiamento consolidadas na PRC nº 6/2017 vedam a utilização dos recursos do bloco de custeio/manutenção para pagamento de servidores inativos, e também de servidores ativos, salvo os contratados exclusivamente para desempenhar funções relacionadas aos serviços previstos no Plano de Saúde. Aposentadorias não são ações e serviços públicos de saúde.",
    dicaFGV: "A LC nº 141/2012 também exclui inativos das despesas com ações e serviços públicos de saúde. Inativo + recurso da saúde = vedado.",
    tags: ["financiamento"]
  },
  {
    id: "e265", disciplinaId: "espec", topicos: [T(16)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 6/2017", palavras: ["PRC 6", "bloco de estruturação", "equipamentos"],
    contexto: "Um hospital estadual recebeu recursos federais destinados à aquisição de um aparelho de ressonância magnética e à ampliação da ala de imagem.",
    comando: "Esses recursos são típicos do",
    alternativas: [
      { k: "A", texto: "Bloco de Estruturação da Rede de Serviços Públicos de Saúde.", porqueErrada: "" },
      { k: "B", texto: "Bloco de Manutenção das Ações e Serviços Públicos de Saúde.", porqueErrada: "Manutenção custeia o funcionamento cotidiano, não obras novas nem ampliações e equipamentos permanentes." },
      { k: "C", texto: "Fundo de Combate à Pobreza.", porqueErrada: "Não é fonte do SUS." },
      { k: "D", texto: "Piso da Atenção Básica fixo.", porqueErrada: "Modelo antigo de custeio da atenção básica, sem relação com equipamentos de alta tecnologia." },
    ],
    correta: "A",
    justificativa: "O Bloco de Estruturação da Rede de Serviços Públicos de Saúde (antigo Bloco de Investimento) destina-se à aquisição de equipamentos, a obras de construção nova e a ampliação de imóveis, ou seja, à estruturação da rede. O Bloco de Manutenção custeia o funcionamento cotidiano das ações e serviços.",
    dicaFGV: "Capital (equipamento, obra) = Estruturação. Custeio (funcionamento) = Manutenção. Mesma lógica de despesa de capital x corrente do orçamento público.",
    tags: ["financiamento"]
  },
];
