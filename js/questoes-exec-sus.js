/* questoes-exec-sus.js — Conhecimentos Específicos do cargo Executivo em Saúde, itens 1 a 5
 * do Anexo I: Lei nº 8.080/1990, organização do SUS, processo saúde-doença, níveis de
 * prevenção e Lei nº 8.142/1990. Questões inéditas, 4 alternativas, padrão FGV.
 *
 * `topicos` vincula a questão ao item do edital (ver edital-especificos.js). */

const T = n => `espec-executivo-em-saude-${n}`;

export const QUESTOES_EXEC_SUS = [
  /* ---------- 1. Lei nº 8.080/1990 ---------- */
  {
    id: "e101", disciplinaId: "espec", topicos: [T(1)], dificuldade: "media", tempoAlvo: 170,
    assunto: "Lei nº 8.080/1990", palavras: ["8.080", "planejamento", "orçamento"],
    contexto: "A Secretaria Estadual de Saúde recebeu do Ministério da Saúde a proposta de transferir recursos para custear um programa de rastreamento que não consta do Plano Estadual de Saúde. Não há situação de emergência nem calamidade pública. O executivo responsável pela área de planejamento precisa emitir parecer.",
    comando: "De acordo com a Lei nº 8.080/1990, o parecer deve registrar que",
    alternativas: [
      { k: "A", texto: "a transferência é lícita, pois o planejamento do SUS é descendente e cabe à União definir as prioridades dos planos estaduais.", porqueErrada: "O processo de planejamento e orçamento do SUS é ASCENDENTE, do nível local até o federal." },
      { k: "B", texto: "é vedada a transferência de recursos para financiar ações não previstas nos planos de saúde, salvo em situações emergenciais ou de calamidade pública.", porqueErrada: "" },
      { k: "C", texto: "a transferência depende apenas de aprovação da Comissão Intergestores Tripartite, dispensada a previsão no plano.", porqueErrada: "A pactuação intergestores não afasta a vedação legal: a ação precisa constar do plano de saúde." },
      { k: "D", texto: "a transferência é permitida desde que o Conselho Estadual de Saúde seja informado no relatório de gestão do ano seguinte.", porqueErrada: "Comunicar depois não supre a exigência; a lei veda a transferência fora do plano, com as únicas exceções de emergência e calamidade." },
    ],
    correta: "B",
    justificativa: "O art. 36 da Lei nº 8.080/1990 estabelece que o processo de planejamento e orçamento do SUS é ascendente, do nível local até o federal, ouvidos os órgãos deliberativos, compatibilizando as necessidades da política de saúde com a disponibilidade de recursos nos planos de saúde. O § 2º veda a transferência de recursos para o financiamento de ações não previstas nos planos de saúde, exceto em situações emergenciais ou de calamidade pública.",
    dicaFGV: "A FGV gosta de inverter a direção do planejamento: “descendente” é a palavra-isca. Lembre: o plano nasce no município e sobe. Depois procure a exceção literal (emergência ou calamidade) — qualquer outra exceção inventada elimina a alternativa.",
    tags: ["planejamento", "financiamento"]
  },
  {
    id: "e102", disciplinaId: "espec", topicos: [T(1)], dificuldade: "media", tempoAlvo: 160,
    assunto: "Lei nº 8.080/1990", palavras: ["8.080", "competências", "direção estadual", "direção nacional"],
    contexto: "Na reunião de diretoria de uma Secretaria Estadual de Saúde, discute-se a quem cabe estabelecer normas e executar a vigilância sanitária de portos, aeroportos e fronteiras no território do Estado.",
    comando: "Segundo a Lei nº 8.080/1990, essa competência é",
    alternativas: [
      { k: "A", texto: "da direção estadual do SUS, cabendo à União apenas a coordenação técnica.", porqueErrada: "A lei atribui ao Estado apenas COLABORAR com a União nessa execução." },
      { k: "B", texto: "da direção municipal, por se tratar de ação executada no território do município.", porqueErrada: "Portos, aeroportos e fronteiras são competência da direção nacional, não municipal." },
      { k: "C", texto: "da direção nacional do SUS, podendo a execução ser complementada pelos Estados, pelo Distrito Federal e pelos Municípios.", porqueErrada: "" },
      { k: "D", texto: "exclusiva da Agência Nacional de Vigilância Sanitária, vedada qualquer participação dos demais entes.", porqueErrada: "A lei admite a complementação pelos Estados, DF e Municípios; não há exclusividade absoluta." },
    ],
    correta: "C",
    justificativa: "O art. 16 da Lei nº 8.080/1990 atribui à direção nacional do SUS estabelecer normas e executar a vigilância sanitária de portos, aeroportos e fronteiras, podendo a execução ser complementada pelos Estados, Distrito Federal e Municípios. À direção estadual cabe colaborar com a União nessa execução (art. 17).",
    dicaFGV: "Termos absolutos como “exclusiva” e “vedada qualquer participação” quase sempre denunciam a alternativa errada em questões de competência. A lei costuma prever cooperação entre esferas.",
    tags: ["competências", "vigilância sanitária"]
  },
  {
    id: "e103", disciplinaId: "espec", topicos: [T(1)], dificuldade: "dificil", tempoAlvo: 180,
    assunto: "Lei nº 8.080/1990", palavras: ["8.080", "Conitec", "incorporação de tecnologias"],
    contexto: "Uma associação de pacientes protocolou no Ministério da Saúde pedido de incorporação de um medicamento ao SUS. Passados quatro meses, a associação pergunta ao setor jurídico da Secretaria Estadual qual é o prazo legal para a conclusão do processo e quem assessora o Ministério nessa decisão.",
    comando: "Conforme a Lei nº 8.080/1990, a resposta correta é:",
    alternativas: [
      { k: "A", texto: "o processo deve ser concluído em até 180 dias, prorrogáveis por 90 dias, e o Ministério é assessorado pela Comissão Nacional de Incorporação de Tecnologias no SUS.", porqueErrada: "" },
      { k: "B", texto: "o processo deve ser concluído em até 90 dias, improrrogáveis, e a decisão cabe à Anvisa.", porqueErrada: "Prazo e órgão trocados. A Anvisa registra o produto; a incorporação ao SUS é atribuição do Ministério da Saúde, assessorado pela Conitec." },
      { k: "C", texto: "não há prazo legal, e a decisão é tomada pela Comissão Intergestores Tripartite.", porqueErrada: "A lei fixa prazo de 180 dias, prorrogáveis por 90. A CIT pactua aspectos operacionais, mas não decide a incorporação." },
      { k: "D", texto: "o processo deve ser concluído em até 180 dias, e a decisão cabe ao Conselho Nacional de Saúde, de forma deliberativa.", porqueErrada: "O CNS integra a Conitec, mas a incorporação é atribuição do Ministério da Saúde." },
    ],
    correta: "A",
    justificativa: "O art. 19-Q atribui ao Ministério da Saúde, assessorado pela Comissão Nacional de Incorporação de Tecnologias no SUS (Conitec), a incorporação, exclusão ou alteração de medicamentos, produtos e procedimentos e a constituição ou alteração de protocolos clínicos. O art. 19-R fixa prazo não superior a 180 dias para a conclusão do processo, admitida a prorrogação por 90 dias corridos quando as circunstâncias o exigirem.",
    dicaFGV: "Em itens com dois dados (prazo + órgão), a FGV faz alternativas que acertam um e erram o outro. Confira os dois antes de marcar.",
    tags: ["assistência farmacêutica", "tecnologia"]
  },
  {
    id: "e104", disciplinaId: "espec", topicos: [T(1)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 8.080/1990", palavras: ["8.080", "serviços privados", "contratados"],
    contexto: "Um hospital filantrópico contratado pela Secretaria Estadual de Saúde indicou seu diretor administrativo para ocupar, cumulativamente, a função de chefia da regulação estadual de leitos.",
    comando: "À luz da Lei nº 8.080/1990, a indicação é",
    alternativas: [
      { k: "A", texto: "válida, porque entidades filantrópicas têm preferência na participação complementar do SUS.", porqueErrada: "A preferência na contratação não autoriza o dirigente a exercer chefia no SUS." },
      { k: "B", texto: "válida, desde que o diretor não receba remuneração pela função de chefia.", porqueErrada: "A vedação não depende de remuneração." },
      { k: "C", texto: "vedada, pois os dirigentes de entidades contratadas não podem exercer cargo de chefia ou função de confiança no SUS.", porqueErrada: "" },
      { k: "D", texto: "vedada apenas se o hospital tiver fins lucrativos.", porqueErrada: "A vedação alcança proprietários, administradores e dirigentes de qualquer entidade ou serviço contratado." },
    ],
    correta: "C",
    justificativa: "O art. 26, § 4º, da Lei nº 8.080/1990 dispõe que aos proprietários, administradores e dirigentes de entidades ou serviços contratados é vedado exercer cargo de chefia ou função de confiança no Sistema Único de Saúde. A regra protege a imparcialidade da gestão diante do prestador.",
    dicaFGV: "A alternativa A mistura uma informação verdadeira (preferência das filantrópicas) com uma conclusão falsa. A FGV usa muito esse “verdadeiro + porque falso”: avalie o nexo, não só a premissa.",
    tags: ["participação complementar", "conflito de interesses"]
  },
  {
    id: "e105", disciplinaId: "espec", topicos: [T(1)], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Lei nº 8.080/1990", palavras: ["8.080", "atendimento domiciliar", "acompanhante"],
    contexto: "Ao revisar o protocolo de um serviço de atenção domiciliar, a equipe de gestão encontrou a regra: “a internação domiciliar será instituída sempre que a família solicitar”.",
    comando: "Segundo a Lei nº 8.080/1990, o atendimento e a internação domiciliares só podem ser realizados",
    alternativas: [
      { k: "A", texto: "a pedido da família, independentemente de avaliação profissional.", porqueErrada: "A lei exige indicação médica." },
      { k: "B", texto: "por indicação médica, com expressa concordância do paciente e de sua família.", porqueErrada: "" },
      { k: "C", texto: "por decisão do gestor municipal, após parecer do Conselho de Saúde.", porqueErrada: "A lei não condiciona o atendimento domiciliar a parecer do Conselho." },
      { k: "D", texto: "por indicação de qualquer profissional de nível superior da equipe, dispensada a concordância do paciente.", porqueErrada: "A indicação é médica e a concordância do paciente e da família é expressa e obrigatória." },
    ],
    correta: "B",
    justificativa: "O art. 19-I, § 3º, da Lei nº 8.080/1990 estabelece que o atendimento e a internação domiciliares só poderão ser realizados por indicação médica, com expressa concordância do paciente e de sua família. A modalidade inclui procedimentos médicos, de enfermagem, fisioterapêuticos, psicológicos e de assistência social.",
    dicaFGV: "Note o conectivo da resposta: indicação médica E concordância. Alternativas que mantêm só um dos requisitos são a forma clássica de erro por omissão.",
    tags: ["subsistemas"]
  },
  {
    id: "e106", disciplinaId: "espec", topicos: [T(1)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 8.080/1990", palavras: ["8.080", "conta especial", "fiscalização"],
    contexto: "Uma auditoria verificou que os recursos do SUS de um município estavam depositados na conta geral do Tesouro municipal e eram movimentados sem qualquer acompanhamento do Conselho Municipal de Saúde.",
    comando: "A Lei nº 8.080/1990 determina que os recursos financeiros do SUS sejam",
    alternativas: [
      { k: "A", texto: "depositados em conta especial, em cada esfera de atuação, e movimentados sob fiscalização dos respectivos Conselhos de Saúde.", porqueErrada: "" },
      { k: "B", texto: "depositados na conta única do Tesouro, cabendo ao Tribunal de Contas autorizar cada movimentação.", porqueErrada: "A lei exige conta especial e fiscalização pelo Conselho de Saúde; o controle externo não substitui essa regra." },
      { k: "C", texto: "geridos exclusivamente pelo Ministério da Saúde, que efetua os pagamentos diretamente aos prestadores.", porqueErrada: "Cada esfera gere seus recursos; o repasse fundo a fundo é a regra." },
      { k: "D", texto: "movimentados livremente pelo gestor, com prestação de contas anual apenas ao Poder Legislativo.", porqueErrada: "A movimentação é sob fiscalização dos Conselhos de Saúde." },
    ],
    correta: "A",
    justificativa: "O art. 33 da Lei nº 8.080/1990 determina que os recursos financeiros do SUS sejam depositados em conta especial, em cada esfera de sua atuação, e movimentados sob fiscalização dos respectivos Conselhos de Saúde. Na esfera federal, os recursos são administrados pelo Ministério da Saúde por meio do Fundo Nacional de Saúde.",
    dicaFGV: "Itens de financiamento costumam ter uma alternativa que transfere o controle para um órgão externo (Tribunal de Contas, Legislativo). A lei do SUS privilegia o controle social: procure o Conselho de Saúde.",
    tags: ["financiamento", "controle social"]
  },

  /* ---------- 2. Organização e funcionamento do SUS ---------- */
  {
    id: "e111", disciplinaId: "espec", topicos: [T(2)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Organização e funcionamento do SUS", palavras: ["integralidade", "princípios"],
    contexto: "Um paciente com diabetes acompanhado na Unidade Básica precisou de consulta com endocrinologista e de exame de fundo de olho. O município alegou que só responde pela atenção básica e que os demais procedimentos “não são problema da saúde municipal”.",
    comando: "O princípio do SUS que melhor fundamenta a crítica a essa resposta é a",
    alternativas: [
      { k: "A", texto: "universalidade, entendida como gratuidade de todos os procedimentos.", porqueErrada: "Universalidade é o acesso a todos, em todos os níveis; não é o conceito que trata da continuidade entre níveis de complexidade." },
      { k: "B", texto: "integralidade, entendida como conjunto articulado e contínuo das ações e serviços preventivos e curativos, individuais e coletivos, exigidos para cada caso em todos os níveis de complexidade.", porqueErrada: "" },
      { k: "C", texto: "hierarquização, que obriga o município a ofertar todos os níveis de complexidade em seu território.", porqueErrada: "Hierarquizar é organizar níveis e fluxos de referência; não obriga cada município a ter todos os serviços." },
      { k: "D", texto: "descentralização, que transfere à esfera federal a responsabilidade pela atenção especializada.", porqueErrada: "A descentralização dá ênfase aos municípios, não transfere responsabilidades à União." },
    ],
    correta: "B",
    justificativa: "O art. 7º, II, da Lei nº 8.080/1990 define a integralidade de assistência como o conjunto articulado e contínuo das ações e serviços preventivos e curativos, individuais e coletivos, exigidos para cada caso em todos os níveis de complexidade do sistema. Garantir o acesso não significa ofertar tudo no próprio território, mas organizar a referência na rede.",
    dicaFGV: "A alternativa C é a armadilha mais forte: usa um princípio verdadeiro com consequência falsa (ofertar tudo no território). Em questões de princípios, a FGV testa a DEFINIÇÃO, não só o nome.",
    tags: ["princípios"]
  },
  {
    id: "e112", disciplinaId: "espec", topicos: [T(2)], dificuldade: "media", tempoAlvo: 160,
    assunto: "Organização e funcionamento do SUS", palavras: ["região de saúde", "Decreto 7.508", "regionalização"],
    contexto: "O Estado do Tocantins pretende instituir uma nova Região de Saúde no sudeste do Estado. Um técnico propõe que a região seja criada mesmo sem serviços de atenção psicossocial, porque eles “podem ser ofertados por outra região”.",
    comando: "De acordo com o Decreto nº 7.508/2011, para ser instituída, a Região de Saúde deve conter, no mínimo, ações e serviços de",
    alternativas: [
      { k: "A", texto: "atenção primária, urgência e emergência, atenção psicossocial, atenção ambulatorial especializada e hospitalar, e vigilância em saúde.", porqueErrada: "" },
      { k: "B", texto: "atenção primária e vigilância em saúde, sendo os demais ofertados por pactuação com outras regiões.", porqueErrada: "O rol mínimo é mais amplo e inclui urgência, psicossocial e atenção especializada/hospitalar." },
      { k: "C", texto: "atenção primária, urgência e emergência e atenção hospitalar de alta complexidade.", porqueErrada: "Alta complexidade não é exigência mínima; atenção psicossocial e vigilância em saúde são." },
      { k: "D", texto: "quaisquer níveis de atenção, desde que previstos no Contrato Organizativo da Ação Pública.", porqueErrada: "O decreto fixa conteúdo mínimo; o contrato não o dispensa." },
    ],
    correta: "A",
    justificativa: "O art. 5º do Decreto nº 7.508/2011 exige que a Região de Saúde contenha, no mínimo, ações e serviços de atenção primária, urgência e emergência, atenção psicossocial, atenção ambulatorial especializada e hospitalar, e vigilância em saúde. A proposta do técnico, portanto, não atende ao requisito mínimo.",
    dicaFGV: "Rol mínimo da região: “PUPAV” — Primária, Urgência, Psicossocial, Ambulatorial especializada e hospitalar, Vigilância. Não confunda com as portas de entrada, que trocam vigilância e especializada por serviços especiais de acesso aberto.",
    tags: ["regionalização"]
  },
  {
    id: "e113", disciplinaId: "espec", topicos: [T(2)], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Organização e funcionamento do SUS", palavras: ["comissões intergestores", "CONASS", "CONASEMS"],
    contexto: "Ao apresentar a governança do SUS a novos servidores, a coordenadora explica que existem foros de negociação e pactuação entre gestores quanto aos aspectos operacionais do sistema.",
    comando: "A Lei nº 8.080/1990, com a redação dada pela Lei nº 12.466/2011, reconhece como esses foros",
    alternativas: [
      { k: "A", texto: "os Conselhos de Saúde e as Conferências de Saúde.", porqueErrada: "Conselhos e Conferências são instâncias de participação da comunidade (controle social), não de pactuação entre gestores." },
      { k: "B", texto: "as Comissões Intergestores Bipartite e Tripartite.", porqueErrada: "" },
      { k: "C", texto: "o CONASS e o CONASEMS, que deliberam em nome de Estados e Municípios.", porqueErrada: "CONASS e CONASEMS são entidades representativas dos entes, não os foros de pactuação." },
      { k: "D", texto: "as Agências Reguladoras federais da área da saúde.", porqueErrada: "Anvisa e ANS regulam; não são foros de pactuação intergestores." },
    ],
    correta: "B",
    justificativa: "O art. 14-A da Lei nº 8.080/1990 reconhece as Comissões Intergestores Bipartite (CIB) e Tripartite (CIT) como foros de negociação e pactuação entre gestores quanto aos aspectos operacionais do SUS. O art. 14-B reconhece o CONASS e o CONASEMS como entidades representativas dos entes estaduais e municipais.",
    dicaFGV: "Separe dois mundos: pactuação entre GESTORES (CIT, CIB, CIR) e participação da COMUNIDADE (Conselhos e Conferências). A FGV troca um pelo outro com frequência.",
    tags: ["governança"]
  },
  {
    id: "e114", disciplinaId: "espec", topicos: [T(2)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Organização e funcionamento do SUS", palavras: ["descentralização", "direção única", "municipalização"],
    contexto: "Um assessor afirmou em reunião: “A descentralização do SUS significa que cada esfera de governo pode ter mais de um órgão dirigindo o sistema, desde que haja pactuação”.",
    comando: "Considerando os princípios organizativos do SUS, a afirmação está",
    alternativas: [
      { k: "A", texto: "correta, pois a pactuação intergestores substitui a direção única.", porqueErrada: "A pactuação não substitui a direção única, que é exigência legal." },
      { k: "B", texto: "incorreta, pois a descentralização ocorre com direção única em cada esfera, com ênfase na descentralização dos serviços para os municípios.", porqueErrada: "" },
      { k: "C", texto: "incorreta, pois a descentralização concentra a direção do sistema no Ministério da Saúde.", porqueErrada: "Concentrar na União é o oposto de descentralizar." },
      { k: "D", texto: "correta, desde que os órgãos dirigentes estejam vinculados ao mesmo Conselho de Saúde.", porqueErrada: "Não existe tal exceção; a direção é única em cada esfera." },
    ],
    correta: "B",
    justificativa: "O art. 7º, IX, da Lei nº 8.080/1990 estabelece a descentralização político-administrativa com direção única em cada esfera de governo, com ênfase na descentralização dos serviços para os municípios, e regionalização e hierarquização da rede. O art. 9º define a direção única: Ministério da Saúde, Secretarias Estaduais e Secretarias Municipais (ou órgãos equivalentes).",
    dicaFGV: "Direção única + ênfase nos municípios: guarde a dupla. Alternativas com “mais de um órgão” ou “concentra na União” caem por contradição direta.",
    tags: ["princípios"]
  },
  {
    id: "e115", disciplinaId: "espec", topicos: [T(2)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Organização e funcionamento do SUS", palavras: ["RENASES", "RENAME", "Decreto 7.508"],
    contexto: "Em um processo judicial, discute-se se o SUS é obrigado a fornecer determinado procedimento. A defesa do Estado sustenta que o acesso universal e igualitário à assistência se dá nos termos da relação nacional que compreende todas as ações e serviços que o SUS oferece.",
    comando: "A relação mencionada pela defesa, prevista no Decreto nº 7.508/2011, é a",
    alternativas: [
      { k: "A", texto: "Relação Nacional de Medicamentos Essenciais (RENAME).", porqueErrada: "A RENAME relaciona medicamentos, não todas as ações e serviços." },
      { k: "B", texto: "Relação Nacional de Ações e Serviços de Saúde (RENASES).", porqueErrada: "" },
      { k: "C", texto: "Programação Pactuada e Integrada (PPI).", porqueErrada: "A PPI é instrumento de programação e alocação de recursos, não a relação de ações e serviços." },
      { k: "D", texto: "Lista Nacional de Notificação Compulsória.", porqueErrada: "Essa lista trata de doenças e agravos de notificação obrigatória." },
    ],
    correta: "B",
    justificativa: "O Decreto nº 7.508/2011 define a RENASES como a relação que compreende todas as ações e serviços que o SUS oferece ao usuário para atendimento da integralidade da assistência. A RENAME compreende a seleção e a padronização de medicamentos indicados para o atendimento de doenças ou agravos no âmbito do SUS.",
    dicaFGV: "Siglas parecidas são o terreno preferido da banca: RENASES = ações e Serviços; RENAME = MEdicamentos. Associe a última sílaba ao conteúdo.",
    tags: ["decreto"]
  },
  {
    id: "e116", disciplinaId: "espec", topicos: [T(2)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Organização e funcionamento do SUS", palavras: ["consórcios", "municípios", "direção municipal"],
    contexto: "Três municípios vizinhos, cada um com menos de 10 mil habitantes, querem manter juntos um centro de especialidades e um laboratório de análises clínicas.",
    comando: "Segundo a Lei nº 8.080/1990, esses municípios podem",
    alternativas: [
      { k: "A", texto: "constituir consórcios para desenvolver em conjunto as ações e os serviços de saúde que lhes correspondam.", porqueErrada: "" },
      { k: "B", texto: "transferir ao Estado, por decreto municipal, a direção do SUS em seus territórios.", porqueErrada: "A direção única municipal não é transferível por decreto; o Estado pode atuar supletivamente." },
      { k: "C", texto: "contratar diretamente uma entidade privada para assumir a gestão do sistema municipal.", porqueErrada: "A participação privada é complementar e não alcança a direção do SUS." },
      { k: "D", texto: "atuar em conjunto apenas se houver autorização prévia do Ministério da Saúde.", porqueErrada: "A lei não exige autorização ministerial para o consórcio." },
    ],
    correta: "A",
    justificativa: "O art. 10 da Lei nº 8.080/1990 prevê que os municípios poderão constituir consórcios para desenvolver em conjunto as ações e os serviços de saúde que lhes correspondam, aplicando-se aos consórcios administrativos intermunicipais o princípio da direção única. A Lei nº 8.142/1990 também permite o remanejamento de recursos entre municípios consorciados.",
    dicaFGV: "Quando o enunciado descreve municípios pequenos que querem somar forças, a FGV costuma testar consórcio. Alternativas que transferem a direção do SUS violam a direção única e podem ser eliminadas logo.",
    tags: ["gestão"]
  },

  /* ---------- 3. Processo saúde-doença ---------- */
  {
    id: "e121", disciplinaId: "espec", topicos: [T(3)], dificuldade: "media", tempoAlvo: 160,
    assunto: "Processo saúde-doença", palavras: ["determinantes sociais", "Dahlgren", "Whitehead"],
    contexto: "Em uma oficina de planejamento, a equipe usou um diagrama em camadas concêntricas: no centro, idade, sexo e fatores hereditários; ao redor, estilo de vida; depois, redes sociais e comunitárias; em seguida, condições de vida e de trabalho; e, na camada externa, condições socioeconômicas, culturais e ambientais gerais.",
    comando: "O diagrama corresponde ao modelo de determinantes sociais da saúde proposto por",
    alternativas: [
      { k: "A", texto: "Leavell e Clark, na história natural da doença.", porqueErrada: "Leavell e Clark descrevem períodos pré-patogênico e patogênico e níveis de prevenção, não camadas de determinantes." },
      { k: "B", texto: "Dahlgren e Whitehead.", porqueErrada: "" },
      { k: "C", texto: "Lalonde, no modelo do campo da saúde com quatro componentes.", porqueErrada: "Lalonde propôs quatro componentes (biologia, ambiente, estilo de vida e organização dos serviços), sem camadas concêntricas." },
      { k: "D", texto: "Snow, na teoria miasmática.", porqueErrada: "John Snow ficou conhecido justamente por contestar a explicação miasmática da cólera com dados epidemiológicos." },
    ],
    correta: "B",
    justificativa: "O modelo de Dahlgren e Whitehead, adotado pela Comissão Nacional sobre Determinantes Sociais da Saúde, dispõe os determinantes em camadas: características individuais no centro, depois estilo de vida, redes sociais e comunitárias, condições de vida e trabalho e, na camada mais distal, os macrodeterminantes socioeconômicos, culturais e ambientais.",
    dicaFGV: "Camadas concêntricas = Dahlgren e Whitehead. Períodos e níveis de prevenção = Leavell e Clark. A FGV põe os dois lado a lado para testar se você memorizou a imagem do modelo.",
    tags: ["determinantes"]
  },
  {
    id: "e122", disciplinaId: "espec", topicos: [T(3)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Processo saúde-doença", palavras: ["conceito ampliado", "8ª Conferência"],
    contexto: "“Em sentido amplo, a saúde é a resultante das condições de alimentação, habitação, educação, renda, meio ambiente, trabalho, transporte, emprego, lazer, liberdade, acesso e posse da terra e acesso a serviços de saúde.”",
    comando: "O trecho transcrito expressa o conceito ampliado de saúde consagrado",
    alternativas: [
      { k: "A", texto: "na Constituição da Organização Mundial da Saúde, de 1946.", porqueErrada: "A OMS definiu saúde como completo bem-estar físico, mental e social, e não apenas ausência de doença." },
      { k: "B", texto: "no relatório final da 8ª Conferência Nacional de Saúde, de 1986.", porqueErrada: "" },
      { k: "C", texto: "na Declaração de Alma-Ata, de 1978.", porqueErrada: "Alma-Ata é o marco da atenção primária à saúde; não é a fonte dessa formulação." },
      { k: "D", texto: "na Lei nº 8.142/1990, ao tratar das Conferências de Saúde.", porqueErrada: "A Lei nº 8.142/1990 trata de participação da comunidade e transferências, sem definir saúde." },
    ],
    correta: "B",
    justificativa: "O conceito ampliado de saúde, como resultante das condições de vida, foi formulado no relatório final da 8ª Conferência Nacional de Saúde (1986), marco da Reforma Sanitária brasileira, e influenciou a Constituição de 1988 e o art. 3º da Lei nº 8.080/1990.",
    dicaFGV: "Três definições caem juntas: OMS 1946 (bem-estar completo), 8ª CNS 1986 (resultante das condições de vida) e Lei 8.080 art. 3º (determinantes e condicionantes). Reconheça cada uma pela palavra-chave.",
    tags: ["conceitos"]
  },
  {
    id: "e123", disciplinaId: "espec", topicos: [T(3)], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Processo saúde-doença", palavras: ["unicausal", "multicausal", "modelos explicativos"],
    contexto: "Um texto técnico afirma que o modelo explicativo da doença surgido com a microbiologia do século XIX, segundo o qual cada doença tem um agente etiológico específico, mostrou-se insuficiente para explicar doenças crônicas como hipertensão e diabetes.",
    comando: "O modelo criticado no texto e o que melhor responde à limitação apontada são, respectivamente,",
    alternativas: [
      { k: "A", texto: "o modelo unicausal e o modelo multicausal.", porqueErrada: "" },
      { k: "B", texto: "o modelo mágico-religioso e o modelo unicausal.", porqueErrada: "O modelo da microbiologia é o unicausal, não o mágico-religioso." },
      { k: "C", texto: "o modelo multicausal e o modelo miasmático.", porqueErrada: "Inverte a ordem e propõe como solução uma teoria anterior à microbiologia." },
      { k: "D", texto: "o modelo miasmático e o modelo unicausal.", porqueErrada: "A teoria miasmática atribuía as doenças a emanações do ar, não a agentes específicos." },
    ],
    correta: "A",
    justificativa: "A teoria microbiana consolidou o modelo unicausal (um agente, uma doença). As doenças crônicas não transmissíveis exigiram o modelo multicausal, que considera a interação de múltiplos fatores — biológicos, comportamentais e ambientais — e abriu caminho para a abordagem dos determinantes sociais.",
    dicaFGV: "A ordem importa em “respectivamente”. Leia a pergunta duas vezes e numere mentalmente: primeiro o criticado, depois a resposta.",
    tags: ["modelos"]
  },
  {
    id: "e124", disciplinaId: "espec", topicos: [T(3)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Processo saúde-doença", palavras: ["história natural da doença", "período pré-patogênico"],
    contexto: "Em uma comunidade com saneamento precário, crianças vivem em contato com água contaminada, mas ainda não apresentam infecção. A equipe de vigilância classifica a situação de acordo com o modelo da história natural da doença.",
    comando: "A situação descrita corresponde ao período",
    alternativas: [
      { k: "A", texto: "patogênico, na fase de doença precoce discernível.", porqueErrada: "Ainda não há infecção; o período patogênico começa com a interação do agente no hospedeiro." },
      { k: "B", texto: "pré-patogênico, em que agente, hospedeiro e ambiente interagem antes do estímulo desencadear a doença.", porqueErrada: "" },
      { k: "C", texto: "de convalescença, que antecede a reabilitação.", porqueErrada: "Convalescença é posterior à doença." },
      { k: "D", texto: "patogênico, na fase de cronicidade.", porqueErrada: "Não há doença instalada, muito menos crônica." },
    ],
    correta: "B",
    justificativa: "No modelo de Leavell e Clark, o período pré-patogênico corresponde à interação entre agente, hospedeiro e meio ambiente antes do início do processo patológico no ser humano. O período patogênico começa quando o estímulo atua no hospedeiro e evolui por fases subclínicas e clínicas até a cura, a cronicidade, a invalidez ou a morte.",
    dicaFGV: "Pergunte-se: o organismo já foi afetado? Se não, é pré-patogênico. Essa única pergunta resolve a maior parte das questões sobre a história natural.",
    tags: ["epidemiologia"]
  },
  {
    id: "e125", disciplinaId: "espec", topicos: [T(3)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Processo saúde-doença", palavras: ["transição epidemiológica", "tripla carga"],
    contexto: "Um relatório da Secretaria Estadual aponta que, no mesmo território, convivem doenças infecciosas ainda não superadas (como dengue e tuberculose), alta prevalência de doenças crônicas e elevado número de mortes por causas externas, sobretudo acidentes de trânsito e violência.",
    comando: "O quadro descrito caracteriza",
    alternativas: [
      { k: "A", texto: "a conclusão da transição epidemiológica, com substituição completa das doenças infecciosas pelas crônicas.", porqueErrada: "O quadro mostra justamente a não substituição: as infecciosas persistem." },
      { k: "B", texto: "a tripla carga de doenças, típica de uma transição epidemiológica prolongada e polarizada, como a brasileira.", porqueErrada: "" },
      { k: "C", texto: "a transição demográfica, definida pela queda da mortalidade infantil.", porqueErrada: "Transição demográfica trata de natalidade, mortalidade e estrutura etária, não do perfil de doenças." },
      { k: "D", texto: "uma epidemia, pois várias doenças ocorrem acima do esperado ao mesmo tempo.", porqueErrada: "Epidemia é a ocorrência de uma doença acima do esperado em tempo e lugar definidos; o quadro descreve o perfil de morbimortalidade." },
    ],
    correta: "B",
    justificativa: "No Brasil, a transição epidemiológica não seguiu o modelo clássico de substituição. Convivem doenças infecciosas e parasitárias, doenças crônicas não transmissíveis e causas externas — a chamada tripla carga de doenças —, num processo prolongado e com polarização entre regiões e grupos sociais.",
    dicaFGV: "Ao ver “convivem” ou “no mesmo território” combinado a três grupos de causas, pense em tripla carga. A alternativa da “substituição completa” descreve o modelo clássico dos países centrais.",
    tags: ["epidemiologia"]
  },
  {
    id: "e126", disciplinaId: "espec", topicos: [T(3)], dificuldade: "media", tempoAlvo: 140,
    assunto: "Processo saúde-doença", palavras: ["determinantes e condicionantes", "art. 3º"],
    contexto: "Em uma audiência pública, um vereador afirmou que investir em transporte, lazer e atividade física “não tem relação com saúde” e que a Secretaria deveria cuidar apenas de hospitais.",
    comando: "A Lei nº 8.080/1990 contradiz a afirmação ao estabelecer que",
    alternativas: [
      { k: "A", texto: "os níveis de saúde expressam a organização social e econômica do País, tendo como determinantes e condicionantes, entre outros, alimentação, moradia, saneamento, meio ambiente, trabalho, renda, educação, atividade física, transporte, lazer e acesso aos bens e serviços essenciais.", porqueErrada: "" },
      { k: "B", texto: "a saúde é exclusivamente o resultado da oferta de serviços assistenciais.", porqueErrada: "A lei afirma o contrário: a saúde é condicionada por fatores sociais, econômicos e ambientais." },
      { k: "C", texto: "o dever do Estado exclui o das pessoas, da família, das empresas e da sociedade.", porqueErrada: "O art. 2º, § 2º, diz que o dever do Estado NÃO exclui o das pessoas, da família, das empresas e da sociedade." },
      { k: "D", texto: "as ações de transporte e lazer são de competência exclusiva do SUS.", porqueErrada: "A lei reconhece esses fatores como determinantes, mas não os transfere à competência do SUS." },
    ],
    correta: "A",
    justificativa: "O art. 3º da Lei nº 8.080/1990 dispõe que os níveis de saúde expressam a organização social e econômica do País, tendo a saúde como determinantes e condicionantes, entre outros, a alimentação, a moradia, o saneamento básico, o meio ambiente, o trabalho, a renda, a educação, a atividade física, o transporte, o lazer e o acesso aos bens e serviços essenciais.",
    dicaFGV: "Alternativa D é a armadilha de quem acertou o conceito: reconhecer um determinante não significa atribuir sua execução ao SUS.",
    tags: ["determinantes"]
  },

  /* ---------- 4. Níveis de prevenção ---------- */
  {
    id: "e131", disciplinaId: "espec", topicos: [T(4)], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Níveis de prevenção em saúde", palavras: ["prevenção primária", "proteção específica", "vacinação"],
    contexto: "Uma Secretaria Municipal organizou campanha de vacinação contra o HPV para adolescentes.",
    comando: "Segundo o modelo de Leavell e Clark, a ação corresponde à prevenção",
    alternativas: [
      { k: "A", texto: "primária, no nível de proteção específica.", porqueErrada: "" },
      { k: "B", texto: "primária, no nível de promoção da saúde.", porqueErrada: "Promoção é inespecífica (educação, moradia, alimentação); a vacina protege contra um agente determinado." },
      { k: "C", texto: "secundária, no nível de diagnóstico precoce.", porqueErrada: "Diagnóstico precoce pressupõe doença já iniciada; a vacina age antes." },
      { k: "D", texto: "terciária, por reduzir complicações futuras.", porqueErrada: "A prevenção terciária trata da reabilitação após a doença." },
    ],
    correta: "A",
    justificativa: "No modelo de Leavell e Clark, a prevenção primária, no período pré-patogênico, divide-se em promoção da saúde (medidas gerais, inespecíficas) e proteção específica (medidas dirigidas a um agravo, como imunização, uso de preservativo e fluoretação). A vacina contra o HPV é proteção específica.",
    dicaFGV: "Pergunte: a medida mira um agravo determinado? Se sim, proteção específica. Se melhora condições de vida em geral, promoção.",
    tags: ["prevenção"]
  },
  {
    id: "e132", disciplinaId: "espec", topicos: [T(4)], dificuldade: "media", tempoAlvo: 140,
    assunto: "Níveis de prevenção em saúde", palavras: ["prevenção secundária", "rastreamento", "diagnóstico precoce"],
    contexto: "A Rede de Atenção à Saúde da Mulher ampliou a oferta de exame citopatológico do colo do útero para mulheres assintomáticas da faixa etária preconizada.",
    comando: "No modelo de Leavell e Clark, a ação se classifica como prevenção",
    alternativas: [
      { k: "A", texto: "primária, por ocorrer antes dos sintomas.", porqueErrada: "Ausência de sintomas não significa ausência de doença: o rastreamento busca lesão já existente em fase inicial." },
      { k: "B", texto: "secundária, por buscar o diagnóstico precoce e o tratamento imediato.", porqueErrada: "" },
      { k: "C", texto: "terciária, por evitar a progressão para o câncer invasivo.", porqueErrada: "Terciária é reabilitação; evitar progressão de lesão precoce é secundária." },
      { k: "D", texto: "quaternária, por evitar intervenções desnecessárias.", porqueErrada: "A quaternária busca evitar sobremedicalização; o rastreamento indicado não é essa finalidade." },
    ],
    correta: "B",
    justificativa: "A prevenção secundária, no período patogênico, compreende o diagnóstico precoce e o tratamento imediato e a limitação da incapacidade. O rastreamento do câncer do colo do útero detecta lesões precursoras em pessoas assintomáticas, permitindo tratamento antes da progressão.",
    dicaFGV: "Assintomático não é sinônimo de pré-patogênico. A FGV explora essa confusão para empurrar o candidato para a prevenção primária.",
    tags: ["prevenção"]
  },
  {
    id: "e133", disciplinaId: "espec", topicos: [T(4)], dificuldade: "media", tempoAlvo: 140,
    assunto: "Níveis de prevenção em saúde", palavras: ["prevenção quaternária", "sobremedicalização", "iatrogenia"],
    contexto: "Uma médica de família deixa de solicitar uma bateria de exames de imagem para um paciente sem sinais de alerta, explicando que os resultados poderiam gerar achados incidentais, novos procedimentos invasivos e ansiedade, sem benefício comprovado.",
    comando: "A conduta é exemplo de prevenção",
    alternativas: [
      { k: "A", texto: "primária, por evitar o aparecimento de doenças.", porqueErrada: "Não se trata de evitar uma doença, e sim os danos da própria intervenção." },
      { k: "B", texto: "secundária, por evitar o diagnóstico tardio.", porqueErrada: "A conduta deixa de investigar, justamente porque não há indicação." },
      { k: "C", texto: "terciária, por limitar sequelas.", porqueErrada: "Não há sequela a reabilitar." },
      { k: "D", texto: "quaternária, por proteger o paciente da medicalização excessiva e de intervenções desnecessárias.", porqueErrada: "" },
    ],
    correta: "D",
    justificativa: "A prevenção quaternária, proposta por Marc Jamoulle, consiste em identificar pessoas em risco de medicalização excessiva, protegê-las de novas intervenções médicas desnecessárias e sugerir alternativas eticamente aceitáveis. Ela complementa os três níveis clássicos de Leavell e Clark.",
    dicaFGV: "Quando o enunciado elogia NÃO fazer algo para evitar dano ao paciente, pense em prevenção quaternária. É conceito recorrente nas provas recentes.",
    tags: ["prevenção"]
  },
  {
    id: "e134", disciplinaId: "espec", topicos: [T(4)], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Níveis de prevenção em saúde", palavras: ["prevenção terciária", "reabilitação"],
    contexto: "Após um acidente vascular cerebral, um paciente iniciou programa de fisioterapia e terapia ocupacional para recuperar a marcha e as atividades de vida diária.",
    comando: "A intervenção corresponde ao nível de prevenção",
    alternativas: [
      { k: "A", texto: "terciária, voltada à reabilitação.", porqueErrada: "" },
      { k: "B", texto: "secundária, voltada ao tratamento imediato.", porqueErrada: "O tratamento imediato do AVC já ocorreu; a fase descrita é de reabilitação." },
      { k: "C", texto: "primária, voltada à promoção da saúde.", porqueErrada: "Promoção atua antes do adoecimento." },
      { k: "D", texto: "quaternária, voltada à redução de danos.", porqueErrada: "Quaternária trata de evitar intervenções desnecessárias." },
    ],
    correta: "A",
    justificativa: "A prevenção terciária atua após a instalação da doença e de suas sequelas, buscando a reabilitação física, psicológica e social e a reintegração da pessoa, reduzindo incapacidades.",
    dicaFGV: "Sequela instalada + recuperar função = terciária. Questão fácil; não perca tempo, ganhe o ponto e siga.",
    tags: ["prevenção"]
  },
  {
    id: "e135", disciplinaId: "espec", topicos: [T(4)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Níveis de prevenção em saúde", palavras: ["paradoxo da prevenção", "estratégia populacional", "Rose"],
    contexto: "Para reduzir a mortalidade por doença cardiovascular, a Secretaria discute duas estratégias: (I) tratar intensivamente apenas os indivíduos com pressão arterial muito elevada; (II) reduzir o consumo de sal de toda a população por meio de acordos com a indústria de alimentos.",
    comando: "Segundo Geoffrey Rose, a estratégia II",
    alternativas: [
      { k: "A", texto: "é ineficaz, porque a maioria da população tem risco baixo e não se beneficia individualmente.", porqueErrada: "O benefício individual pequeno é justamente o paradoxo; o ganho populacional é grande." },
      { k: "B", texto: "pode evitar mais casos no total, embora traga pouco benefício para cada indivíduo — o chamado paradoxo da prevenção.", porqueErrada: "" },
      { k: "C", texto: "é classificada como prevenção terciária, por atuar sobre toda a população.", porqueErrada: "Atuar sobre a população antes do adoecimento é prevenção primária." },
      { k: "D", texto: "só é aceitável quando combinada com rastreamento universal anual.", porqueErrada: "Rose não condiciona a estratégia populacional ao rastreamento." },
    ],
    correta: "B",
    justificativa: "Geoffrey Rose demonstrou que um grande número de pessoas expostas a risco pequeno pode gerar mais casos do que o pequeno número de pessoas de alto risco. Por isso, medidas populacionais que deslocam a distribuição do fator de risco evitam mais casos no total, embora ofereçam pouco benefício para cada pessoa — o paradoxo da prevenção.",
    dicaFGV: "A alternativa A reproduz o senso comum que o paradoxo refuta. Em questões de conceito “contraintuitivo”, desconfie da alternativa que parece óbvia.",
    tags: ["prevenção", "epidemiologia"]
  },
  {
    id: "e136", disciplinaId: "espec", topicos: [T(4)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Níveis de prevenção em saúde", palavras: ["limitação da incapacidade", "prevenção secundária"],
    contexto: "Paciente diabético com úlcera no pé recebe desbridamento, antibioticoterapia e controle glicêmico intensivo para evitar a amputação.",
    comando: "No modelo de Leavell e Clark, essas medidas correspondem a",
    alternativas: [
      { k: "A", texto: "proteção específica, na prevenção primária.", porqueErrada: "A doença e a complicação já estão instaladas." },
      { k: "B", texto: "limitação da incapacidade, na prevenção secundária.", porqueErrada: "" },
      { k: "C", texto: "reabilitação, na prevenção terciária.", porqueErrada: "Reabilitação ocorre após a sequela; aqui se busca evitar que ela se instale." },
      { k: "D", texto: "promoção da saúde, na prevenção primária.", porqueErrada: "Promoção é inespecífica e anterior ao adoecimento." },
    ],
    correta: "B",
    justificativa: "No modelo original de Leavell e Clark, a prevenção secundária reúne o diagnóstico precoce e tratamento imediato e a limitação da incapacidade — medidas para impedir que a doença evolua para sequelas permanentes. A reabilitação, depois de instalada a incapacidade, é prevenção terciária.",
    dicaFGV: "Pegadinha clássica: “limitação da incapacidade” soa como terciária, mas Leavell e Clark a colocam na secundária. A fronteira é a sequela: evitar = secundária; recuperar = terciária.",
    tags: ["prevenção"]
  },

  /* ---------- 5. Lei nº 8.142/1990 ---------- */
  {
    id: "e141", disciplinaId: "espec", topicos: [T(5)], dificuldade: "media", tempoAlvo: 160,
    assunto: "Lei nº 8.142/1990", palavras: ["8.142", "requisitos", "fundo de saúde"],
    contexto: "Um município recém-criado quer passar a receber os recursos do Fundo Nacional de Saúde de forma regular e automática. O executivo designado elaborou uma lista de pendências.",
    comando: "Segundo a Lei nº 8.142/1990, NÃO é requisito para o recebimento desses recursos",
    alternativas: [
      { k: "A", texto: "contar com Fundo de Saúde e com Conselho de Saúde de composição paritária.", porqueErrada: "É requisito previsto no art. 4º." },
      { k: "B", texto: "apresentar plano de saúde e relatórios de gestão.", porqueErrada: "É requisito previsto no art. 4º." },
      { k: "C", texto: "prever contrapartida de recursos para a saúde no respectivo orçamento.", porqueErrada: "É requisito previsto no art. 4º." },
      { k: "D", texto: "possuir hospital próprio de média complexidade em funcionamento.", porqueErrada: "" },
    ],
    correta: "D",
    justificativa: "O art. 4º da Lei nº 8.142/1990 exige Fundo de Saúde, Conselho de Saúde paritário, plano de saúde, relatórios de gestão, contrapartida de recursos no orçamento e Comissão de elaboração do Plano de Carreira, Cargos e Salários, com prazo de dois anos para implantação. Não há exigência de hospital próprio.",
    dicaFGV: "Questões com NÃO pedem a alternativa estranha ao rol. Memorize o rol do art. 4º pela sigla FCPRCC: Fundo, Conselho, Plano, Relatório, Contrapartida, Comissão de PCCS.",
    tags: ["financiamento"]
  },
  {
    id: "e142", disciplinaId: "espec", topicos: [T(5)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 8.142/1990", palavras: ["8.142", "70%", "municípios"],
    contexto: "Na partilha dos recursos federais destinados à cobertura das ações e serviços de saúde de Estados, Distrito Federal e Municípios, um técnico propôs dividir igualmente os valores entre o Estado e seus municípios.",
    comando: "A Lei nº 8.142/1990 determina que, desses recursos,",
    alternativas: [
      { k: "A", texto: "no mínimo 50% sejam destinados aos Estados.", porqueErrada: "A lei garante percentual mínimo aos Municípios, não aos Estados." },
      { k: "B", texto: "pelo menos 70% sejam destinados aos Municípios, afetando-se o restante aos Estados.", porqueErrada: "" },
      { k: "C", texto: "a divisão seja definida livremente pela Comissão Intergestores Bipartite.", porqueErrada: "A lei fixa o mínimo de 70% para os Municípios." },
      { k: "D", texto: "a totalidade seja repassada ao Estado, que a redistribui aos Municípios.", porqueErrada: "O repasse é regular e automático, com destinação mínima direta aos Municípios." },
    ],
    correta: "B",
    justificativa: "O art. 3º, § 2º, da Lei nº 8.142/1990 determina que pelo menos 70% dos recursos destinados à cobertura das ações e serviços de saúde sejam destinados aos Municípios, afetando-se o restante aos Estados. O § 3º permite que Municípios consorciados remanejem entre si parcelas desses recursos.",
    dicaFGV: "70% aos Municípios é número fixo em prova. A FGV costuma trocar o destinatário (Estados) ou transformar “pelo menos” em “exatamente”.",
    tags: ["financiamento"]
  },
  {
    id: "e143", disciplinaId: "espec", topicos: [T(5)], dificuldade: "facil", tempoAlvo: 130,
    assunto: "Lei nº 8.142/1990", palavras: ["8.142", "conferência", "convocação"],
    contexto: "O Conselho Estadual de Saúde, diante de uma crise na rede hospitalar, decidiu convocar uma Conferência Estadual de Saúde extraordinária, sem aguardar o ciclo quadrienal.",
    comando: "De acordo com a Lei nº 8.142/1990, a convocação é",
    alternativas: [
      { k: "A", texto: "inválida, pois somente o Poder Executivo pode convocar a Conferência.", porqueErrada: "A lei permite a convocação extraordinária pela própria Conferência ou pelo Conselho." },
      { k: "B", texto: "válida, pois a Conferência é convocada pelo Poder Executivo ou, extraordinariamente, por ela própria ou pelo Conselho de Saúde.", porqueErrada: "" },
      { k: "C", texto: "válida apenas se aprovada pela Comissão Intergestores Bipartite.", porqueErrada: "A CIB não participa da convocação da Conferência." },
      { k: "D", texto: "inválida, pois a Conferência só pode ocorrer a cada quatro anos.", porqueErrada: "O ciclo ordinário é quadrienal, mas há previsão de convocação extraordinária." },
    ],
    correta: "B",
    justificativa: "O art. 1º, § 1º, da Lei nº 8.142/1990 dispõe que a Conferência de Saúde se reúne a cada quatro anos, convocada pelo Poder Executivo ou, extraordinariamente, por esta ou pelo Conselho de Saúde.",
    dicaFGV: "A palavra “extraordinariamente” é a chave. Quem lembra só dos quatro anos cai na alternativa D.",
    tags: ["controle social"]
  },
  {
    id: "e144", disciplinaId: "espec", topicos: [T(5)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 8.142/1990", palavras: ["8.142", "não atendimento", "requisitos"],
    contexto: "Um município deixou de instituir o Conselho Municipal de Saúde e não apresentou relatório de gestão.",
    comando: "Conforme a Lei nº 8.142/1990, o não atendimento dos requisitos implica que os recursos concernentes",
    alternativas: [
      { k: "A", texto: "sejam devolvidos ao Tesouro Nacional e definitivamente perdidos.", porqueErrada: "A lei prevê a administração dos recursos por outra esfera, não a perda." },
      { k: "B", texto: "sejam administrados, respectivamente, pelos Estados ou pela União.", porqueErrada: "" },
      { k: "C", texto: "sejam bloqueados até decisão judicial.", porqueErrada: "A consequência é administrativa e está prevista na própria lei." },
      { k: "D", texto: "sejam repassados diretamente aos prestadores privados contratados.", porqueErrada: "Não há previsão de repasse direto a prestadores." },
    ],
    correta: "B",
    justificativa: "O parágrafo único do art. 4º da Lei nº 8.142/1990 determina que o não atendimento, pelos Municípios, Estados ou Distrito Federal, dos requisitos do artigo implicará que os recursos concernentes sejam administrados, respectivamente, pelos Estados ou pela União.",
    dicaFGV: "“Respectivamente” liga Município → Estado e Estado → União. A FGV pode inverter a correspondência em alternativas mais difíceis.",
    tags: ["financiamento"]
  },
  {
    id: "e145", disciplinaId: "espec", topicos: [T(5)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 8.142/1990", palavras: ["8.142", "Fundo Nacional de Saúde", "alocação"],
    contexto: "Ao elaborar a programação orçamentária, o executivo precisa explicar como os recursos do Fundo Nacional de Saúde podem ser alocados.",
    comando: "Entre as alocações previstas no art. 2º da Lei nº 8.142/1990, está",
    alternativas: [
      { k: "A", texto: "a cobertura das ações e serviços de saúde a serem implementados pelos Municípios, Estados e Distrito Federal.", porqueErrada: "" },
      { k: "B", texto: "o pagamento de benefícios previdenciários a servidores da saúde.", porqueErrada: "Benefícios previdenciários são custeados pela Previdência, não pelo FNS." },
      { k: "C", texto: "a subvenção a instituições privadas com fins lucrativos.", porqueErrada: "A Lei nº 8.080/1990 veda auxílios e subvenções a instituições com fins lucrativos." },
      { k: "D", texto: "o custeio de ações de assistência social não relacionadas à saúde.", porqueErrada: "Os recursos do FNS são vinculados às ações e serviços de saúde." },
    ],
    correta: "A",
    justificativa: "O art. 2º da Lei nº 8.142/1990 prevê que os recursos do FNS sejam alocados como despesas de custeio e de capital do Ministério da Saúde, investimentos previstos em lei orçamentária, investimentos previstos no Plano Quinquenal do Ministério e cobertura das ações e serviços de saúde a serem implementados pelos Municípios, Estados e Distrito Federal.",
    dicaFGV: "Alternativas com “fins lucrativos” em contexto de recursos públicos do SUS quase sempre estão erradas: a vedação de subvenção está na Lei nº 8.080/1990.",
    tags: ["financiamento"]
  },
  {
    id: "e146", disciplinaId: "espec", topicos: [T(5)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Lei nº 8.142/1990", palavras: ["8.142", "CONASS", "CONASEMS", "regimento"],
    contexto: "Na revisão do regimento do Conselho Nacional de Saúde, foram apresentadas quatro afirmações sobre a Lei nº 8.142/1990.",
    comando: "Assinale a afirmativa correta.",
    alternativas: [
      { k: "A", texto: "O CONASS e o CONASEMS terão representação no Conselho Nacional de Saúde.", porqueErrada: "" },
      { k: "B", texto: "A organização e as normas de funcionamento das Conferências e dos Conselhos são definidas por decreto do Ministro da Saúde.", porqueErrada: "São definidas em regimento próprio, aprovado pelo respectivo conselho." },
      { k: "C", texto: "A representação dos usuários equivale a um terço do total de conselheiros.", porqueErrada: "A representação dos usuários é paritária em relação ao conjunto dos demais segmentos (50%)." },
      { k: "D", texto: "As decisões do Conselho produzem efeitos independentemente de homologação.", porqueErrada: "As decisões são homologadas pelo chefe do poder legalmente constituído em cada esfera." },
    ],
    correta: "A",
    justificativa: "O art. 1º da Lei nº 8.142/1990 prevê, no § 3º, que o CONASS e o CONASEMS terão representação no Conselho Nacional de Saúde; no § 4º, a representação paritária dos usuários; e, no § 5º, que Conferências e Conselhos terão organização e normas de funcionamento definidas em regimento próprio, aprovadas pelo respectivo conselho. As decisões do Conselho são homologadas pelo chefe do poder legalmente constituído.",
    dicaFGV: "Em “assinale a correta” com quatro afirmações técnicas, cada alternativa errada costuma ter UMA palavra trocada (decreto/regimento, um terço/paritária). Leia procurando a palavra trocada.",
    tags: ["controle social"]
  },
];
