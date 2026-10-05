/* questoes-exec-lote3.js — terceiro lote do Módulo II do Executivo em Saúde: completa os itens
 * 1 a 9 do Anexo I até pelo menos 10 questões cada e retoma a hemoterapia da PRC nº 5 pelas
 * regras da Portaria GM/MS nº 11.685/2026 (vigente desde 30/09/2026).
 * Questões inéditas, 4 alternativas, padrão FGV. */

const T = n => `espec-executivo-em-saude-${n}`;

export const QUESTOES_EXEC_LOTE3 = [
  /* ---------- 1. Lei nº 8.080/1990 ---------- */
  {
    id: "e107", disciplinaId: "espec", topicos: [T(1)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 8.080/1990", palavras: ["8.080", "epidemiologia", "prioridades"],
    contexto: "Na revisão do Plano Estadual de Saúde, a equipe decidiu concentrar recursos nas regiões com maior mortalidade materna e maior incidência de tuberculose, com base em indicadores dos sistemas de informação.",
    comando: "A decisão aplica o princípio da Lei nº 8.080/1990 que prevê a",
    alternativas: [
      { k: "A", texto: "utilização da epidemiologia para o estabelecimento de prioridades, a alocação de recursos e a orientação programática.", porqueErrada: "" },
      { k: "B", texto: "participação complementar da iniciativa privada.", porqueErrada: "Não se relaciona à definição de prioridades por indicadores." },
      { k: "C", texto: "gratuidade das ações e serviços.", porqueErrada: "Trata da não cobrança, não da escolha de prioridades." },
      { k: "D", texto: "centralização das decisões no Ministério da Saúde.", porqueErrada: "A lei prevê descentralização, não centralização." },
    ],
    correta: "A",
    justificativa: "O art. 7º da Lei nº 8.080/1990 inclui entre os princípios do SUS a utilização da epidemiologia para o estabelecimento de prioridades, a alocação de recursos e a orientação programática.",
    dicaFGV: "Indicadores + decisão de onde investir = epidemiologia como base do planejamento. Princípio pouco lembrado, mas cobrado.",
    tags: ["princípios", "planejamento"]
  },
  {
    id: "e108", disciplinaId: "espec", topicos: [T(1)], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Lei nº 8.080/1990", palavras: ["8.080", "acompanhante", "parto"],
    contexto: "Uma maternidade conveniada ao SUS impediu a entrada do companheiro de uma parturiente durante o trabalho de parto, alegando falta de espaço.",
    comando: "Segundo a Lei nº 8.080/1990, a parturiente tem direito a",
    alternativas: [
      { k: "A", texto: "um acompanhante de sua livre indicação durante o trabalho de parto, o parto e o pós-parto imediato.", porqueErrada: "" },
      { k: "B", texto: "acompanhante apenas no pós-parto, a critério da maternidade.", porqueErrada: "O direito alcança trabalho de parto, parto e pós-parto imediato, e a indicação é da parturiente." },
      { k: "C", texto: "acompanhante somente se for menor de idade.", porqueErrada: "O direito vale para toda parturiente." },
      { k: "D", texto: "acompanhante apenas em serviços públicos, não nos conveniados.", porqueErrada: "O direito vale nos serviços do SUS, próprios ou conveniados." },
    ],
    correta: "A",
    justificativa: "O art. 19-J da Lei nº 8.080/1990 obriga os serviços do SUS, da rede própria ou conveniada, a permitir a presença, junto à parturiente, de um acompanhante durante todo o período de trabalho de parto, parto e pós-parto imediato, indicado pela própria parturiente.",
    dicaFGV: "Quem indica é a parturiente; o período é todo o trabalho de parto, parto e pós-parto imediato; vale para próprios e conveniados.",
    tags: ["direitos"]
  },
  {
    id: "e109", disciplinaId: "espec", topicos: [T(1)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 8.080/1990", palavras: ["8.080", "Subsistema de Atenção à Saúde Indígena"],
    contexto: "Em reunião sobre a saúde dos povos Karajá e Javaé da Ilha do Bananal, discutiu-se quem financia o Subsistema de Atenção à Saúde Indígena.",
    comando: "Segundo a Lei nº 8.080/1990, cabe",
    alternativas: [
      { k: "A", texto: "à União, com seus recursos próprios, financiar o Subsistema, podendo Estados, Municípios e outras instituições atuar complementarmente.", porqueErrada: "" },
      { k: "B", texto: "exclusivamente aos Municípios onde se localizam as aldeias.", porqueErrada: "O financiamento é da União; os demais entes atuam complementarmente." },
      { k: "C", texto: "às próprias comunidades indígenas, por meio de cooperativas.", porqueErrada: "A lei atribui o financiamento à União." },
      { k: "D", texto: "aos Estados, por se tratar de população de abrangência regional.", porqueErrada: "Os Estados podem atuar complementarmente, mas o financiamento cabe à União." },
    ],
    correta: "A",
    justificativa: "O art. 19-C da Lei nº 8.080/1990 atribui à União, com seus recursos próprios, o financiamento do Subsistema de Atenção à Saúde Indígena. Estados, Municípios e outras instituições governamentais e não governamentais podem atuar complementarmente no custeio e na execução das ações. O Subsistema tem como base os Distritos Sanitários Especiais Indígenas.",
    dicaFGV: "Saúde indígena = União financia. Os demais entes complementam.",
    tags: ["subsistemas"]
  },
  {
    id: "e110", disciplinaId: "espec", topicos: [T(1)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 8.080/1990", palavras: ["8.080", "gratuidade"],
    contexto: "Um hospital privado contratado pelo SUS passou a cobrar dos pacientes uma “taxa de conforto” pelo uso de leitos de enfermaria contratados.",
    comando: "Segundo a Lei nº 8.080/1990, a cobrança",
    alternativas: [
      { k: "A", texto: "é vedada, pois a lei preserva a gratuidade das ações e serviços de saúde nos serviços públicos contratados, ressalvadas as cláusulas dos contratos ou convênios com as entidades privadas, e o usuário do SUS não paga pelo atendimento.", porqueErrada: "" },
      { k: "B", texto: "é lícita, por se tratar de serviço privado.", porqueErrada: "O serviço contratado pelo SUS está sujeito à gratuidade." },
      { k: "C", texto: "é lícita, desde que o valor seja simbólico.", porqueErrada: "Não há exceção por valor." },
      { k: "D", texto: "é lícita se aprovada pelo Conselho Municipal de Saúde.", porqueErrada: "O Conselho não pode autorizar cobrança vedada por lei." },
    ],
    correta: "A",
    justificativa: "O art. 43 da Lei nº 8.080/1990 assegura a gratuidade das ações e serviços de saúde nos serviços públicos contratados, ressalvando-se as cláusulas dos contratos ou convênios estabelecidos com as entidades privadas. Cobrar do usuário do SUS por leito contratado contraria a lei.",
    dicaFGV: "Serviço contratado pelo SUS = gratuito para o usuário. O prestador é remunerado pelo gestor, não pelo paciente.",
    tags: ["gratuidade"]
  },

  /* ---------- 2. Organização do SUS ---------- */
  {
    id: "e117", disciplinaId: "espec", topicos: [T(2)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Organização e funcionamento do SUS", palavras: ["Mapa da Saúde", "Decreto 7.508"],
    contexto: "Para planejar a expansão da oferta de ressonância magnética, a Secretaria Estadual precisa de uma descrição geográfica da distribuição de recursos humanos e de ações e serviços ofertados pelo SUS e pela iniciativa privada.",
    comando: "Segundo o Decreto nº 7.508/2011, esse instrumento é o",
    alternativas: [
      { k: "A", texto: "Mapa da Saúde.", porqueErrada: "" },
      { k: "B", texto: "Relatório Anual de Gestão.", porqueErrada: "O RAG apresenta resultados da gestão, não a distribuição geográfica dos serviços." },
      { k: "C", texto: "Cartão Nacional de Saúde.", porqueErrada: "O cartão identifica o usuário." },
      { k: "D", texto: "Contrato de Gestão.", porqueErrada: "Contrato de gestão é instrumento de relação com entidades, não diagnóstico de oferta." },
    ],
    correta: "A",
    justificativa: "O Decreto nº 7.508/2011 define o Mapa da Saúde como a descrição geográfica da distribuição de recursos humanos e de ações e serviços de saúde ofertados pelo SUS e pela iniciativa privada, considerando a capacidade instalada, os investimentos e o desempenho aferido a partir dos indicadores de saúde. Ele é utilizado na identificação das necessidades de saúde e orienta o planejamento.",
    dicaFGV: "“Descrição geográfica” é a expressão-chave do Mapa da Saúde. Note que ele inclui também a oferta privada.",
    tags: ["planejamento", "decreto"]
  },

  /* ---------- 3. Processo saúde-doença ---------- */
  {
    id: "e127", disciplinaId: "espec", topicos: [T(3)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Processo saúde-doença", palavras: ["determinação social", "medicina social latino-americana"],
    contexto: "Um texto da saúde coletiva critica a lista de “fatores de risco” isolados e afirma que o adoecimento deve ser compreendido a partir da forma como a sociedade organiza a produção e a reprodução da vida, com diferenças entre classes e grupos sociais.",
    comando: "A abordagem descrita corresponde à",
    alternativas: [
      { k: "A", texto: "determinação social do processo saúde-doença, associada à medicina social latino-americana.", porqueErrada: "" },
      { k: "B", texto: "teoria miasmática.", porqueErrada: "Atribuía as doenças a emanações do ar e de matéria em decomposição." },
      { k: "C", texto: "teoria unicausal.", porqueErrada: "Explica a doença por um agente etiológico específico." },
      { k: "D", texto: "concepção mágico-religiosa.", porqueErrada: "Atribui a doença a forças sobrenaturais." },
    ],
    correta: "A",
    justificativa: "A determinação social do processo saúde-doença, desenvolvida pela medicina social latino-americana (com autores como Asa Cristina Laurell e Jaime Breilh), entende o adoecimento como processo social e histórico, determinado pela forma de organização da sociedade, e critica a redução a fatores de risco isolados.",
    dicaFGV: "“Organização da sociedade”, “classes sociais” e “processo histórico” são marcas da determinação social, que vai além da lista de determinantes.",
    tags: ["modelos"]
  },
  {
    id: "e128", disciplinaId: "espec", topicos: [T(3)], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Processo saúde-doença", palavras: ["teoria miasmática", "modelos explicativos"],
    contexto: "No século XIX, médicos defendiam que epidemias de cólera surgiam do ar contaminado por matéria orgânica em decomposição, os “maus ares”, e recomendavam drenar pântanos e remover lixo.",
    comando: "Essa explicação corresponde à",
    alternativas: [
      { k: "A", texto: "teoria miasmática.", porqueErrada: "" },
      { k: "B", texto: "teoria microbiana.", porqueErrada: "Associa a doença a microrganismos específicos." },
      { k: "C", texto: "determinação social.", porqueErrada: "Relaciona adoecimento à organização da sociedade." },
      { k: "D", texto: "história natural da doença.", porqueErrada: "Modelo do século XX, de Leavell e Clark." },
    ],
    correta: "A",
    justificativa: "A teoria miasmática atribuía as doenças aos miasmas, emanações de matéria orgânica em decomposição. Embora equivocada quanto à causa, orientou medidas de saneamento que reduziram doenças. John Snow, ao estudar a cólera em Londres, mostrou a transmissão pela água contaminada.",
    dicaFGV: "Miasma = mau ar. A teoria errou a causa, mas acertou parte da solução (saneamento). Isso aparece em itens interpretativos.",
    tags: ["modelos"]
  },

  /* ---------- 4. Níveis de prevenção ---------- */
  {
    id: "e137", disciplinaId: "espec", topicos: [T(4)], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Níveis de prevenção em saúde", palavras: ["proteção específica", "capacete"],
    contexto: "Uma campanha estadual distribuiu capacetes e fiscalizou seu uso por motociclistas para reduzir traumatismos cranianos.",
    comando: "No modelo de Leavell e Clark, a medida corresponde a",
    alternativas: [
      { k: "A", texto: "proteção específica, na prevenção primária.", porqueErrada: "" },
      { k: "B", texto: "promoção da saúde, na prevenção primária.", porqueErrada: "A medida mira um agravo determinado (trauma craniano), o que a torna específica." },
      { k: "C", texto: "diagnóstico precoce, na prevenção secundária.", porqueErrada: "Não há doença a diagnosticar." },
      { k: "D", texto: "reabilitação, na prevenção terciária.", porqueErrada: "A medida atua antes do trauma." },
    ],
    correta: "A",
    justificativa: "Medidas dirigidas a um agravo determinado, aplicadas antes de sua ocorrência — como vacinas, preservativos, capacetes e cintos de segurança —, são proteção específica, componente da prevenção primária no modelo de Leavell e Clark.",
    dicaFGV: "Equipamento de proteção contra um agravo definido = proteção específica.",
    tags: ["prevenção"]
  },
  {
    id: "e138", disciplinaId: "espec", topicos: [T(4)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Níveis de prevenção em saúde", palavras: ["promoção da saúde", "prevenção primária"],
    contexto: "Um programa municipal ampliou praças com equipamentos de ginástica, hortas comunitárias e oficinas de alimentação saudável, sem foco em uma doença específica.",
    comando: "Segundo Leavell e Clark, essas ações correspondem à",
    alternativas: [
      { k: "A", texto: "promoção da saúde, no nível de prevenção primária.", porqueErrada: "" },
      { k: "B", texto: "proteção específica, por reduzir o diabetes.", porqueErrada: "As ações são inespecíficas, voltadas às condições de vida em geral." },
      { k: "C", texto: "prevenção secundária, por detectar obesidade.", porqueErrada: "Não há rastreamento ou diagnóstico." },
      { k: "D", texto: "prevenção quaternária, por evitar medicamentos.", porqueErrada: "A quaternária trata de evitar intervenções desnecessárias." },
    ],
    correta: "A",
    justificativa: "A promoção da saúde, no modelo de Leavell e Clark, reúne medidas gerais e inespecíficas voltadas a melhorar as condições de vida e a saúde como um todo — alimentação, moradia, educação, lazer e atividade física —, no período pré-patogênico.",
    dicaFGV: "Sem doença-alvo definida = promoção. Com doença-alvo = proteção específica.",
    tags: ["prevenção"]
  },
  {
    id: "e139", disciplinaId: "espec", topicos: [T(4)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Níveis de prevenção em saúde", palavras: ["rastreamento", "critérios", "Wilson e Jungner"],
    contexto: "Um deputado propôs que o Estado oferecesse anualmente a toda a população um exame de imagem para detectar um tipo raro de câncer, sem tratamento eficaz na fase inicial.",
    comando: "Segundo os critérios clássicos para programas de rastreamento (Wilson e Jungner), a proposta é frágil porque",
    alternativas: [
      { k: "A", texto: "o rastreamento só se justifica para doença que seja problema de saúde importante, com fase pré-clínica detectável e tratamento eficaz quando detectada precocemente.", porqueErrada: "" },
      { k: "B", texto: "qualquer exame de imagem é proibido no SUS para assintomáticos.", porqueErrada: "Não há proibição genérica; há critérios de indicação." },
      { k: "C", texto: "o rastreamento só pode ser feito em hospitais universitários.", porqueErrada: "Não há essa restrição." },
      { k: "D", texto: "o rastreamento é prevenção terciária e não cabe ao Estado.", porqueErrada: "Rastreamento é prevenção secundária." },
    ],
    correta: "A",
    justificativa: "Os critérios de Wilson e Jungner exigem, entre outros, que a doença seja problema de saúde importante, que exista fase latente ou pré-clínica detectável, que haja teste aceitável e tratamento eficaz na fase precoce, e que o custo seja equilibrado. Doença rara sem tratamento eficaz precoce não atende aos critérios e o rastreamento pode gerar mais danos que benefícios.",
    dicaFGV: "Rastrear sem tratamento eficaz é gerar ansiedade e procedimentos sem benefício — tema que dialoga com a prevenção quaternária.",
    tags: ["prevenção", "rastreamento"]
  },
  {
    id: "e140", disciplinaId: "espec", topicos: [T(4)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Níveis de prevenção em saúde", palavras: ["prevenção primordial", "fatores de risco"],
    contexto: "Um país aprovou leis que restringem a publicidade de alimentos ultraprocessados para crianças, buscando evitar que hábitos de risco cardiovascular se instalem na população.",
    comando: "A medida que atua para impedir o próprio surgimento dos fatores de risco em nível populacional é chamada de prevenção",
    alternativas: [
      { k: "A", texto: "primordial.", porqueErrada: "" },
      { k: "B", texto: "terciária.", porqueErrada: "A terciária atua após a doença instalada." },
      { k: "C", texto: "secundária.", porqueErrada: "A secundária detecta a doença precocemente." },
      { k: "D", texto: "quaternária.", porqueErrada: "A quaternária evita danos de intervenções desnecessárias." },
    ],
    correta: "A",
    justificativa: "A prevenção primordial busca evitar o surgimento e a consolidação de fatores de risco na população, por meio de políticas sociais, econômicas e ambientais — antes mesmo da exposição individual. A prevenção primária atua sobre fatores de risco já presentes, para evitar a doença.",
    dicaFGV: "Primordial impede o FATOR DE RISCO de surgir; primária impede a DOENÇA. A diferença está no alvo.",
    tags: ["prevenção"]
  },

  /* ---------- 5. Lei nº 8.142/1990 ---------- */
  {
    id: "e147", disciplinaId: "espec", topicos: [T(5)], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Lei nº 8.142/1990", palavras: ["8.142", "composição do Conselho"],
    contexto: "Na renovação do Conselho Estadual de Saúde, um partido político pediu uma vaga própria no colegiado.",
    comando: "Segundo a Lei nº 8.142/1990, o Conselho de Saúde é composto por representantes",
    alternativas: [
      { k: "A", texto: "do governo, dos prestadores de serviço, dos profissionais de saúde e dos usuários.", porqueErrada: "" },
      { k: "B", texto: "dos partidos políticos com representação na Assembleia.", porqueErrada: "Partidos não integram os segmentos previstos." },
      { k: "C", texto: "apenas do governo e dos usuários.", porqueErrada: "Faltam prestadores e profissionais de saúde." },
      { k: "D", texto: "dos três Poderes e do Ministério Público.", porqueErrada: "Não são esses os segmentos previstos." },
    ],
    correta: "A",
    justificativa: "O art. 1º, § 2º, da Lei nº 8.142/1990 define o Conselho de Saúde como órgão colegiado, permanente e deliberativo, composto por representantes do governo, prestadores de serviço, profissionais de saúde e usuários, com representação paritária dos usuários em relação ao conjunto dos demais segmentos.",
    dicaFGV: "Quatro segmentos: governo, prestadores, profissionais e usuários (50%).",
    tags: ["controle social"]
  },
  {
    id: "e148", disciplinaId: "espec", topicos: [T(5)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 8.142/1990", palavras: ["8.142", "aspectos econômicos e financeiros"],
    contexto: "O Secretário Municipal afirmou que o Conselho Municipal de Saúde pode discutir ações assistenciais, mas não tem competência sobre o uso dos recursos financeiros da saúde.",
    comando: "Segundo a Lei nº 8.142/1990, a afirmação está",
    alternativas: [
      { k: "A", texto: "incorreta, pois o Conselho atua na formulação de estratégias e no controle da execução da política de saúde, inclusive nos aspectos econômicos e financeiros.", porqueErrada: "" },
      { k: "B", texto: "correta, pois as finanças cabem só ao Tribunal de Contas.", porqueErrada: "O controle externo não exclui o controle social sobre os recursos." },
      { k: "C", texto: "correta, pois o Conselho é órgão apenas consultivo.", porqueErrada: "O Conselho é deliberativo." },
      { k: "D", texto: "incorreta apenas nos municípios com mais de 100 mil habitantes.", porqueErrada: "Não há corte populacional." },
    ],
    correta: "A",
    justificativa: "O art. 1º, § 2º, da Lei nº 8.142/1990 dispõe que o Conselho de Saúde atua na formulação de estratégias e no controle da execução da política de saúde na instância correspondente, inclusive nos aspectos econômicos e financeiros, cujas decisões são homologadas pelo chefe do poder legalmente constituído.",
    dicaFGV: "“Inclusive nos aspectos econômicos e financeiros” é trecho literal muito cobrado.",
    tags: ["controle social", "financiamento"]
  },
  {
    id: "e149", disciplinaId: "espec", topicos: [T(5)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 8.142/1990", palavras: ["8.142", "consórcio", "remanejamento"],
    contexto: "Três municípios consorciados querem que parte dos recursos federais destinados a um deles financie o centro de especialidades mantido pelo consórcio.",
    comando: "Segundo a Lei nº 8.142/1990, os municípios",
    alternativas: [
      { k: "A", texto: "podem estabelecer consórcio para execução de ações e serviços de saúde, remanejando entre si parcelas dos recursos destinados à cobertura das ações e serviços.", porqueErrada: "" },
      { k: "B", texto: "não podem remanejar recursos, que são individuais e intransferíveis.", porqueErrada: "A lei autoriza expressamente o remanejamento entre consorciados." },
      { k: "C", texto: "podem remanejar apenas com autorização judicial.", porqueErrada: "Não há exigência de autorização judicial." },
      { k: "D", texto: "devem devolver os recursos à União para redistribuição ao consórcio.", porqueErrada: "O remanejamento ocorre entre os próprios municípios consorciados." },
    ],
    correta: "A",
    justificativa: "O art. 3º, § 3º, da Lei nº 8.142/1990 prevê que os Municípios poderão estabelecer consórcio para execução de ações e serviços de saúde, remanejando, entre si, parcelas de recursos previstos no inciso IV do art. 2º (cobertura das ações e serviços de saúde).",
    dicaFGV: "Consórcio aparece em duas leis: a 8.080 permite constituí-lo; a 8.142 permite remanejar recursos entre os consorciados.",
    tags: ["financiamento", "consórcios"]
  },
  {
    id: "e150", disciplinaId: "espec", topicos: [T(5)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Lei nº 8.142/1990", palavras: ["8.142", "critério populacional", "repasse"],
    contexto: "Um técnico do Fundo Nacional de Saúde explicava a regra transitória da Lei nº 8.142/1990 para os repasses a Estados e Municípios.",
    comando: "Segundo a Lei nº 8.142/1990, enquanto não regulamentada a aplicação dos critérios do art. 35 da Lei nº 8.080/1990, os recursos serão repassados",
    alternativas: [
      { k: "A", texto: "segundo o critério populacional (quociente da divisão pelo número de habitantes), de forma regular e automática.", porqueErrada: "" },
      { k: "B", texto: "conforme negociação política anual entre governadores e o Ministério da Saúde.", porqueErrada: "O repasse é regular e automático, com critério objetivo." },
      { k: "C", texto: "exclusivamente conforme a produção de serviços hospitalares.", porqueErrada: "A regra transitória é populacional." },
      { k: "D", texto: "apenas mediante convênios específicos.", porqueErrada: "A lei estabelece repasse regular e automático." },
    ],
    correta: "A",
    justificativa: "O art. 3º, § 1º, da Lei nº 8.142/1990 determina que, enquanto não for regulamentada a aplicação dos critérios previstos no art. 35 da Lei nº 8.080/1990, será utilizado, para o repasse de recursos, exclusivamente o critério estabelecido no § 1º daquele artigo — a distribuição segundo o quociente de sua divisão pelo número de habitantes.",
    dicaFGV: "Regra transitória = critério POPULACIONAL. Repasse = REGULAR E AUTOMÁTICO.",
    tags: ["financiamento"]
  },

  /* ---------- 6. Evolução da vigilância sanitária ---------- */
  {
    id: "e157", disciplinaId: "espec", topicos: [T(6)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Evolução da vigilância sanitária", palavras: ["evolução", "genéricos", "1999"],
    contexto: "O ano de 1999 é lembrado como marco da regulação sanitária no Brasil por duas leis federais: uma que criou a agência reguladora da vigilância sanitária e outra que instituiu o medicamento genérico.",
    comando: "Essas leis são, respectivamente,",
    alternativas: [
      { k: "A", texto: "Lei nº 9.782/1999 e Lei nº 9.787/1999.", porqueErrada: "" },
      { k: "B", texto: "Lei nº 9.787/1999 e Lei nº 9.782/1999.", porqueErrada: "Ordem invertida." },
      { k: "C", texto: "Lei nº 6.360/1976 e Lei nº 9.782/1999.", porqueErrada: "A Lei nº 6.360 é de 1976 e não criou a Anvisa." },
      { k: "D", texto: "Lei nº 8.080/1990 e Lei nº 5.991/1973.", porqueErrada: "Nenhuma das duas é de 1999." },
    ],
    correta: "A",
    justificativa: "A Lei nº 9.782, de janeiro de 1999, definiu o Sistema Nacional de Vigilância Sanitária e criou a Anvisa. A Lei nº 9.787, de fevereiro de 1999, alterou a Lei nº 6.360/1976 para instituir o medicamento genérico e dispor sobre a utilização de nomes genéricos em produtos farmacêuticos.",
    dicaFGV: "9.782 (Anvisa) e 9.787 (genéricos): números vizinhos, mesmo ano. Associe o 7 final ao genérico.",
    tags: ["histórico"]
  },
  {
    id: "e158", disciplinaId: "espec", topicos: [T(6)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Evolução da vigilância sanitária", palavras: ["evolução", "Código de Defesa do Consumidor"],
    contexto: "Um texto sobre a década de 1990 afirma que a vigilância sanitária ganhou um aliado na proteção do cidadão diante de produtos e serviços perigosos, com uma lei que reconheceu a vulnerabilidade do consumidor.",
    comando: "A lei mencionada é o",
    alternativas: [
      { k: "A", texto: "Código de Defesa do Consumidor (Lei nº 8.078/1990).", porqueErrada: "" },
      { k: "B", texto: "Código Penal de 1940.", porqueErrada: "Não é lei da década de 1990 nem trata da vulnerabilidade do consumidor." },
      { k: "C", texto: "Estatuto da Cidade.", porqueErrada: "Trata de política urbana." },
      { k: "D", texto: "Lei de Licitações (Lei nº 14.133/2021).", porqueErrada: "Trata de contratações públicas." },
    ],
    correta: "A",
    justificativa: "O Código de Defesa do Consumidor (Lei nº 8.078/1990), do mesmo ano da Lei nº 8.080, reconheceu a vulnerabilidade do consumidor e o direito à proteção da vida, saúde e segurança contra riscos de produtos e serviços, fortalecendo as ações de vigilância sanitária.",
    dicaFGV: "1990 trouxe 8.078 (CDC) e 8.080 (SUS). Os números colados ajudam a lembrar que nasceram juntos.",
    tags: ["histórico"]
  },
  {
    id: "e159", disciplinaId: "espec", topicos: [T(6)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Evolução da vigilância sanitária", palavras: ["evolução", "falsificação de medicamentos", "contexto"],
    contexto: "Analistas da história da regulação sanitária costumam associar a criação da Anvisa a um contexto específico do fim da década de 1990.",
    comando: "Entre os fatores frequentemente apontados para a criação da Anvisa, está",
    alternativas: [
      { k: "A", texto: "a repercussão de casos de falsificação de medicamentos e a busca por um órgão regulador com maior autonomia e capacidade técnica.", porqueErrada: "" },
      { k: "B", texto: "a extinção do SUS e a transferência da saúde à iniciativa privada.", porqueErrada: "O SUS não foi extinto; a Anvisa integra o SNVS no âmbito do SUS." },
      { k: "C", texto: "a necessidade de regular exclusivamente os planos privados de saúde.", porqueErrada: "Essa é a finalidade da ANS, criada em 2000." },
      { k: "D", texto: "a unificação da vigilância sanitária com a Previdência Social.", porqueErrada: "Não houve essa unificação." },
    ],
    correta: "A",
    justificativa: "A criação da Anvisa, em 1999, ocorreu no contexto da reforma do Estado e da criação de agências reguladoras, e após grande repercussão de casos de falsificação de medicamentos em 1998, que evidenciaram a fragilidade da estrutura anterior e motivaram a busca por um órgão com autonomia e capacidade técnica.",
    dicaFGV: "Contexto da Anvisa: agências reguladoras dos anos 1990 + crise dos medicamentos falsificados.",
    tags: ["histórico"]
  },
  {
    id: "e160", disciplinaId: "espec", topicos: [T(6)], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Evolução da vigilância sanitária", palavras: ["evolução", "Lei 8.080", "conceito legal"],
    contexto: "Uma linha do tempo da vigilância sanitária registra o momento em que, pela primeira vez, uma lei orgânica da saúde trouxe o conceito de vigilância sanitária como conjunto de ações sobre riscos.",
    comando: "Esse marco é a",
    alternativas: [
      { k: "A", texto: "Lei nº 8.080/1990.", porqueErrada: "" },
      { k: "B", texto: "Lei nº 6.437/1977.", porqueErrada: "Trata de infrações e sanções." },
      { k: "C", texto: "Lei nº 9.782/1999.", porqueErrada: "Define o SNVS e cria a Anvisa, mas o conceito legal vem da Lei nº 8.080." },
      { k: "D", texto: "Lei nº 14.133/2021.", porqueErrada: "Lei de licitações." },
    ],
    correta: "A",
    justificativa: "A Lei nº 8.080/1990, Lei Orgânica da Saúde, trouxe no art. 6º, § 1º, o conceito de vigilância sanitária como conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde. A Lei nº 9.782/1999 remete a esse dispositivo ao definir o SNVS.",
    dicaFGV: "Conceito = 8.080. Sistema e Anvisa = 9.782. Infrações = 6.437.",
    tags: ["histórico", "conceitos"]
  },

  /* ---------- 7. Vigilância sanitária: conceitos e funções ---------- */
  {
    id: "e167", disciplinaId: "espec", topicos: [T(7)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Vigilância sanitária: conceitos e funções", palavras: ["sanções", "Lei 6.437", "penalidades"],
    contexto: "Na revisão de um auto de infração sanitária, o fiscal relacionou as penalidades aplicáveis pela legislação sanitária federal.",
    comando: "NÃO é penalidade prevista na Lei nº 6.437/1977:",
    alternativas: [
      { k: "A", texto: "interdição parcial ou total do estabelecimento.", porqueErrada: "Prevista na lei." },
      { k: "B", texto: "apreensão e inutilização de produto.", porqueErrada: "Previstas na lei." },
      { k: "C", texto: "prisão do responsável técnico pela autoridade sanitária.", porqueErrada: "" },
      { k: "D", texto: "cancelamento de registro de produto.", porqueErrada: "Previsto na lei." },
    ],
    correta: "C",
    justificativa: "A Lei nº 6.437/1977 prevê penalidades administrativas como advertência, multa, apreensão, inutilização e interdição de produto, suspensão de vendas ou de fabricação, cancelamento de registro, interdição do estabelecimento, proibição de propaganda e cancelamento de autorização e de alvará. Prisão é sanção penal, aplicada só pelo Poder Judiciário.",
    dicaFGV: "Poder de polícia administrativa não prende. Qualquer pena privativa de liberdade é estranha ao rol sanitário.",
    tags: ["sanções"]
  },
  {
    id: "e168", disciplinaId: "espec", topicos: [T(7)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Vigilância sanitária: conceitos e funções", palavras: ["tecnovigilância", "pós-comercialização"],
    contexto: "Vários hospitais relataram falhas em bombas de infusão de um mesmo fabricante, com risco de administração de doses erradas.",
    comando: "O ramo da vigilância pós-comercialização que trata desse tipo de evento é a",
    alternativas: [
      { k: "A", texto: "tecnovigilância.", porqueErrada: "" },
      { k: "B", texto: "farmacovigilância.", porqueErrada: "Trata de eventos adversos de medicamentos." },
      { k: "C", texto: "hemovigilância.", porqueErrada: "Trata de eventos do ciclo do sangue." },
      { k: "D", texto: "cosmetovigilância.", porqueErrada: "Trata de eventos com cosméticos." },
    ],
    correta: "A",
    justificativa: "A tecnovigilância monitora eventos adversos e queixas técnicas relacionados a produtos para a saúde, como equipamentos, materiais e artigos médico-hospitalares. A farmacovigilância cuida de medicamentos; a hemovigilância, do sangue e hemocomponentes; a cosmetovigilância, de cosméticos.",
    dicaFGV: "Tecno = equipamento. Farmaco = medicamento. Hemo = sangue. Cosmeto = cosmético.",
    tags: ["pós-comercialização"]
  },
  {
    id: "e169", disciplinaId: "espec", topicos: [T(7)], dificuldade: "media", tempoAlvo: 160,
    assunto: "Vigilância sanitária: conceitos e funções", palavras: ["surto alimentar", "integração das vigilâncias"],
    contexto: "Após uma festa, 40 pessoas apresentaram vômitos e diarreia. Todas comeram salgados do mesmo buffet.",
    comando: "Na resposta ao surto, a divisão de papéis adequada é:",
    alternativas: [
      { k: "A", texto: "a vigilância epidemiológica investiga os casos e a cadeia de transmissão; a vigilância sanitária inspeciona o estabelecimento, coleta amostras dos alimentos e adota medidas sobre o local e os produtos.", porqueErrada: "" },
      { k: "B", texto: "a vigilância sanitária investiga os doentes, e a epidemiológica interdita o buffet.", porqueErrada: "Os papéis estão invertidos." },
      { k: "C", texto: "apenas a vigilância sanitária atua, pois envolve alimentos.", porqueErrada: "Surto exige atuação integrada, com investigação epidemiológica dos casos." },
      { k: "D", texto: "apenas a polícia atua, por se tratar de possível crime.", porqueErrada: "A resposta sanitária e epidemiológica independe de investigação criminal." },
    ],
    correta: "A",
    justificativa: "Surtos de doenças transmitidas por alimentos exigem atuação integrada: a vigilância epidemiológica investiga os casos, identifica a fonte provável e a cadeia de transmissão; a vigilância sanitária inspeciona o estabelecimento, coleta amostras para análise laboratorial e adota medidas como interdição e apreensão.",
    dicaFGV: "Pessoas = epidemiológica. Local e produto = sanitária. Juntas, explicam e controlam o surto.",
    tags: ["integração"]
  },

  /* ---------- 8. Lei nº 9.782/1999 ---------- */
  {
    id: "e177", disciplinaId: "espec", topicos: [T(8)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Lei nº 9.782/1999", palavras: ["9.782", "intervenção", "indelegável"],
    contexto: "Uma fundação pública estadual que produz soros e vacinas, mantida com recursos públicos, apresentou graves falhas de boas práticas. A Secretaria Estadual quis assumir, por delegação da Anvisa, a intervenção temporária na administração da fundação.",
    comando: "Segundo a Lei nº 9.782/1999, a intervenção temporária na administração de entidades produtoras financiadas com recursos públicos",
    alternativas: [
      { k: "A", texto: "é competência da Anvisa que não pode ser delegada aos Estados, ao DF ou aos Municípios.", porqueErrada: "" },
      { k: "B", texto: "pode ser delegada a qualquer Secretaria Estadual de Saúde.", porqueErrada: "Essa atribuição está entre as exceções à delegação." },
      { k: "C", texto: "é competência exclusiva do Poder Judiciário.", porqueErrada: "A lei a atribui à Anvisa, como medida administrativa." },
      { k: "D", texto: "não existe na legislação sanitária.", porqueErrada: "Está prevista no art. 7º, V." },
    ],
    correta: "A",
    justificativa: "O art. 7º, V, da Lei nº 9.782/1999 atribui à Anvisa intervir, temporariamente, na administração de entidades produtoras financiadas, subsidiadas ou mantidas com recursos públicos. O § 1º do mesmo artigo exclui expressamente o inciso V das atribuições que podem ser delegadas aos Estados, DF e Municípios.",
    dicaFGV: "Indelegáveis (art. 7º, § 1º): incisos I, V, VIII, IX, XV a XIX — coordenação do SNVS, intervenção, anuência de importação/exportação, registro, proibições e cancelamentos, laboratórios, vigilância toxicológica e farmacopeia.",
    tags: ["Anvisa", "delegação"]
  },
  {
    id: "e178", disciplinaId: "espec", topicos: [T(8)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 9.782/1999", palavras: ["9.782", "autorização de funcionamento"],
    contexto: "Uma distribuidora de medicamentos quer iniciar atividades em Palmas e pergunta qual ato federal é necessário, além da licença sanitária local.",
    comando: "Segundo a Lei nº 9.782/1999, compete à Anvisa",
    alternativas: [
      { k: "A", texto: "autorizar o funcionamento de empresas de fabricação, distribuição e importação dos produtos sujeitos à vigilância sanitária e de comercialização de medicamentos.", porqueErrada: "" },
      { k: "B", texto: "emitir o alvará de construção do galpão da distribuidora.", porqueErrada: "Alvará de construção é ato urbanístico municipal." },
      { k: "C", texto: "registrar o contrato social da empresa.", porqueErrada: "Registro empresarial é feito na Junta Comercial." },
      { k: "D", texto: "fixar o preço de venda dos medicamentos distribuídos.", porqueErrada: "A regulação de preços cabe à CMED, não é competência do art. 7º da Lei 9.782." },
    ],
    correta: "A",
    justificativa: "O art. 7º, VII, da Lei nº 9.782/1999 atribui à Anvisa autorizar o funcionamento de empresas de fabricação, distribuição e importação dos produtos mencionados no art. 8º e de comercialização de medicamentos. A licença sanitária local é concedida pela vigilância estadual ou municipal.",
    dicaFGV: "AFE (autorização de funcionamento de empresa) é federal; licença do estabelecimento é local. Empresa precisa das duas.",
    tags: ["Anvisa"]
  },
  {
    id: "e179", disciplinaId: "espec", topicos: [T(8)], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Lei nº 9.782/1999", palavras: ["9.782", "sede", "atuação"],
    contexto: "Um candidato confundiu a Anvisa com órgão regional e afirmou que ela teria sede no Rio de Janeiro e atuação restrita ao Sudeste.",
    comando: "Segundo a Lei nº 9.782/1999, a Anvisa tem",
    alternativas: [
      { k: "A", texto: "sede e foro no Distrito Federal, prazo de duração indeterminado e atuação em todo o território nacional.", porqueErrada: "" },
      { k: "B", texto: "sede no Rio de Janeiro e atuação regional.", porqueErrada: "A sede é no Distrito Federal e a atuação é nacional." },
      { k: "C", texto: "prazo de duração de dez anos, renovável por lei.", porqueErrada: "O prazo de duração é indeterminado." },
      { k: "D", texto: "atuação apenas em portos e aeroportos.", porqueErrada: "Portos e aeroportos são parte da atuação, que é muito mais ampla." },
    ],
    correta: "A",
    justificativa: "O art. 3º da Lei nº 9.782/1999 cria a Anvisa como autarquia sob regime especial, vinculada ao Ministério da Saúde, com sede e foro no Distrito Federal, prazo de duração indeterminado e atuação em todo o território nacional, por intermédio de unidades descentralizadas.",
    dicaFGV: "DF, indeterminado, nacional. Três dados literais do art. 3º.",
    tags: ["Anvisa"]
  },
  {
    id: "e180", disciplinaId: "espec", topicos: [T(8)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 9.782/1999", palavras: ["9.782", "anuência de importação"],
    contexto: "Um hospital estadual quer importar diretamente um equipamento de radioterapia e pergunta se a Secretaria Estadual de Saúde pode autorizar a entrada do produto no país.",
    comando: "Segundo a Lei nº 9.782/1999, a anuência com a importação dos produtos sujeitos à vigilância sanitária",
    alternativas: [
      { k: "A", texto: "é competência da Anvisa e não pode ser delegada aos Estados, ao DF ou aos Municípios.", porqueErrada: "" },
      { k: "B", texto: "é competência da Secretaria Estadual de Saúde do destino do produto.", porqueErrada: "A anuência é federal." },
      { k: "C", texto: "dispensa manifestação sanitária quando o comprador é órgão público.", porqueErrada: "Não há dispensa pelo fato de o comprador ser público." },
      { k: "D", texto: "é competência exclusiva da Receita Federal.", porqueErrada: "A Receita atua no despacho aduaneiro; a anuência sanitária é da Anvisa." },
    ],
    correta: "A",
    justificativa: "O art. 7º, VIII, da Lei nº 9.782/1999 atribui à Anvisa anuir com a importação e exportação dos produtos mencionados no art. 8º, atribuição que o § 1º exclui da possibilidade de delegação aos Estados, DF e Municípios.",
    dicaFGV: "Fronteira e comércio exterior são temas federais por natureza: anuência de importação fica com a Anvisa.",
    tags: ["Anvisa", "delegação"]
  },

  /* ---------- 9. Decreto nº 3.029/1999 ---------- */
  {
    id: "e187", disciplinaId: "espec", topicos: [T(9)], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Decreto nº 3.029/1999", palavras: ["3.029", "RDC", "atos normativos"],
    contexto: "Ao citar uma norma da Anvisa sobre boas práticas em serviços de saúde, o analista escreveu “RDC nº 63/2011”.",
    comando: "A sigla RDC designa",
    alternativas: [
      { k: "A", texto: "Resolução da Diretoria Colegiada, ato normativo editado pela Diretoria Colegiada da Anvisa.", porqueErrada: "" },
      { k: "B", texto: "Regulamento do Conselho Deliberativo, editado pelo Conselho Nacional de Saúde.", porqueErrada: "Não é ato do CNS." },
      { k: "C", texto: "Relatório de Controle, emitido pela Corregedoria.", porqueErrada: "A Corregedoria não edita normas." },
      { k: "D", texto: "Resolução do Conselho Consultivo, de caráter vinculante.", porqueErrada: "O Conselho Consultivo não edita normas vinculantes." },
    ],
    correta: "A",
    justificativa: "Cabe à Diretoria Colegiada da Anvisa editar normas sobre matérias de competência da Agência, o que se faz principalmente por meio de Resoluções da Diretoria Colegiada (RDC), conforme a Lei nº 9.782/1999 e o Regulamento aprovado pelo Decreto nº 3.029/1999.",
    dicaFGV: "RDC = Resolução da Diretoria Colegiada. Quem normatiza na Anvisa é a Diretoria, não o Conselho Consultivo.",
    tags: ["Anvisa", "normas"]
  },
  {
    id: "e188", disciplinaId: "espec", topicos: [T(9)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Decreto nº 3.029/1999", palavras: ["3.029", "Corregedoria"],
    contexto: "Denúncia aponta que um servidor da Anvisa recebia vantagens de empresa regulada para acelerar processos.",
    comando: "Na estrutura da Anvisa, a unidade incumbida de fiscalizar a legalidade das atividades funcionais dos servidores e apurar irregularidades é a",
    alternativas: [
      { k: "A", texto: "Corregedoria.", porqueErrada: "" },
      { k: "B", texto: "Ouvidoria.", porqueErrada: "A Ouvidoria recebe manifestações; a apuração disciplinar cabe à Corregedoria." },
      { k: "C", texto: "Conselho Consultivo.", porqueErrada: "Órgão de participação da sociedade, sem função disciplinar." },
      { k: "D", texto: "Procuradoria.", porqueErrada: "A Procuradoria atua na representação judicial e no assessoramento jurídico." },
    ],
    correta: "A",
    justificativa: "Na estrutura da Anvisa prevista na Lei nº 9.782/1999 e no Regulamento aprovado pelo Decreto nº 3.029/1999, a Corregedoria fiscaliza a legalidade das atividades funcionais dos servidores e apura irregularidades, instaurando os procedimentos disciplinares cabíveis.",
    dicaFGV: "Corregedoria corrige (disciplinar); Ouvidoria ouve (manifestações); Procuradoria procura em juízo (jurídico).",
    tags: ["Anvisa", "estrutura"]
  },
  {
    id: "e189", disciplinaId: "espec", topicos: [T(9)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Decreto nº 3.029/1999", palavras: ["3.029", "Procuradoria"],
    contexto: "Uma empresa ajuizou ação contra a Anvisa para suspender o cancelamento do registro de um produto.",
    comando: "Na estrutura da Agência, a representação judicial e o assessoramento jurídico cabem à",
    alternativas: [
      { k: "A", texto: "Procuradoria.", porqueErrada: "" },
      { k: "B", texto: "Corregedoria.", porqueErrada: "Cuida de assuntos disciplinares." },
      { k: "C", texto: "Ouvidoria.", porqueErrada: "Recebe e encaminha manifestações dos cidadãos." },
      { k: "D", texto: "Diretoria Colegiada, pessoalmente, sem órgão jurídico.", porqueErrada: "A Agência conta com Procuradoria para essa função." },
    ],
    correta: "A",
    justificativa: "A Procuradoria da Anvisa, prevista na Lei nº 9.782/1999 e no Regulamento aprovado pelo Decreto nº 3.029/1999, é responsável pela representação judicial e extrajudicial da Agência e pelo assessoramento jurídico de seus órgãos.",
    dicaFGV: "Ação judicial contra autarquia = Procuradoria. Associação direta.",
    tags: ["Anvisa", "estrutura"]
  },
  {
    id: "e190", disciplinaId: "espec", topicos: [T(9)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Decreto nº 3.029/1999", palavras: ["3.029", "Conselho Consultivo", "natureza"],
    contexto: "Um conselheiro consultivo da Anvisa, representante da comunidade científica, pretendia votar o deferimento do registro de um medicamento.",
    comando: "Considerando a natureza do Conselho Consultivo, é correto afirmar que ele",
    alternativas: [
      { k: "A", texto: "é instância de participação institucional da sociedade, que opina, acompanha e propõe, sem competência para deliberar sobre registros de produtos.", porqueErrada: "" },
      { k: "B", texto: "é a instância máxima de decisão sobre registros.", porqueErrada: "Decisões e recursos cabem à Diretoria Colegiada." },
      { k: "C", texto: "substitui a Diretoria Colegiada nas suas ausências.", porqueErrada: "Não há essa substituição." },
      { k: "D", texto: "aprova as RDC antes de sua publicação.", porqueErrada: "As RDC são editadas pela Diretoria Colegiada." },
    ],
    correta: "A",
    justificativa: "O Conselho Consultivo é o órgão de participação institucional da sociedade na Anvisa, com representantes da União, Estados, DF, Municípios, produtores, comerciantes, comunidade científica e usuários. Tem papel consultivo — requerer informações, propor diretrizes e recomendações, apreciar relatórios —, sem competência para decidir sobre registros, que cabem às áreas técnicas e, em recurso, à Diretoria Colegiada.",
    dicaFGV: "O nome diz tudo: consultivo opina, não decide. A FGV tenta atribuir-lhe poder deliberativo.",
    tags: ["Anvisa", "participação"]
  },

  /* ---------- 15. PRC nº 5 — hemoterapia (Portaria GM/MS nº 11.685/2026) ---------- */
  {
    id: "e305", disciplinaId: "espec", topicos: [T(15)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 5/2017", palavras: ["PRC 5", "doação de sangue", "idade do doador"],
    contexto: "Um aposentado de 72 anos, doador de sangue há décadas e com boa saúde, foi informado de que não poderia mais doar por causa da idade. A regra que ele ouviu era a anterior a 30 de setembro de 2026.",
    comando: "Com a atualização do regulamento técnico de hemoterapia da PRC nº 5/2017 pela Portaria GM/MS nº 11.685/2026,",
    alternativas: [
      { k: "A", texto: "doadores de repetição podem continuar doando após os 70 anos, mediante avaliação clínica, mantido o limite de cerca de 60 anos para a primeira doação.", porqueErrada: "" },
      { k: "B", texto: "qualquer pessoa pode fazer a primeira doação após os 70 anos, sem avaliação clínica.", porqueErrada: "O limite para a primeira doação foi mantido e a avaliação clínica é exigida." },
      { k: "C", texto: "a doação passou a ser proibida para maiores de 60 anos.", porqueErrada: "A mudança ampliou, e não restringiu, a possibilidade de doação dos mais velhos." },
      { k: "D", texto: "a idade deixou de ser critério, inclusive para menores de 16 anos.", porqueErrada: "A idade continua sendo critério de aptidão." },
    ],
    correta: "A",
    justificativa: "A Portaria GM/MS nº 11.685/2026, em vigor desde 30/09/2026, redefiniu o regulamento técnico de procedimentos hemoterápicos da PRC nº 5/2017. Entre as mudanças, doadores de repetição saudáveis passaram a poder continuar doando após os 70 anos, mediante avaliação clínica, mantido o limite de 60 anos, 11 meses e 29 dias para a primeira doação.",
    dicaFGV: "Novidade normativa recente costuma cair: repetição pode passar dos 70; primeira doação continua até cerca de 60.",
    tags: ["hemoterapia", "atualização"]
  },
  {
    id: "e306", disciplinaId: "espec", topicos: [T(15)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 5/2017", palavras: ["PRC 5", "doação de sangue", "intervalo entre doações"],
    contexto: "Um homem e uma mulher, ambos de 30 anos, doaram sangue total no mesmo dia em um hemocentro do Tocantins.",
    comando: "Pelo regulamento técnico de hemoterapia vigente, o intervalo mínimo entre doações de sangue total é de",
    alternativas: [
      { k: "A", texto: "60 dias para homens (até 4 doações por ano) e 90 dias para mulheres (até 3 por ano).", porqueErrada: "" },
      { k: "B", texto: "90 dias para homens e 60 dias para mulheres.", porqueErrada: "Intervalos invertidos." },
      { k: "C", texto: "30 dias para ambos.", porqueErrada: "Intervalo curto demais para a reposição do ferro." },
      { k: "D", texto: "180 dias para ambos.", porqueErrada: "Não é o intervalo previsto." },
    ],
    correta: "A",
    justificativa: "O regulamento técnico de procedimentos hemoterápicos manteve, na atualização de 2026, o intervalo mínimo de 60 dias para homens, com até 4 doações anuais, e de 90 dias para mulheres, com até 3 doações anuais, entre doações de sangue total.",
    dicaFGV: "Homem 60/4; mulher 90/3. A inversão é a pegadinha clássica.",
    tags: ["hemoterapia"]
  },
  /* ---------- 11 e 16. PRC nº 1 e nº 6 — fechamento ---------- */
  {
    id: "e307", disciplinaId: "espec", topicos: [T(11)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 1/2017", palavras: ["PRC 1", "prontuário", "direitos dos usuários"],
    contexto: "Uma usuária mudou de cidade e pediu à unidade de saúde cópia do seu prontuário para continuar o tratamento. A recepção negou, dizendo que o prontuário “pertence ao serviço”.",
    comando: "Segundo os direitos dos usuários consolidados na PRC nº 1/2017, a usuária tem direito",
    alternativas: [
      { k: "A", texto: "de acesso ao conteúdo do seu prontuário e ao fornecimento de cópia em caso de encaminhamento a outro serviço ou mudança de domicílio.", porqueErrada: "" },
      { k: "B", texto: "apenas a um resumo verbal, vedada a cópia.", porqueErrada: "A Carta garante acesso ao conteúdo e fornecimento de cópia." },
      { k: "C", texto: "de acesso somente mediante ordem judicial.", porqueErrada: "O acesso é direito do usuário, sem necessidade de ordem judicial." },
      { k: "D", texto: "de acesso desde que pague taxa de emissão.", porqueErrada: "Não há cobrança no SUS por esse direito." },
    ],
    correta: "A",
    justificativa: "A Carta dos Direitos dos Usuários da Saúde, consolidada na PRC nº 1/2017, assegura o acesso da pessoa ao conteúdo do seu prontuário, ou de pessoa por ela autorizada, e a garantia de envio e fornecimento de cópia, em caso de encaminhamento a outro serviço ou mudança de domicílio.",
    dicaFGV: "O serviço guarda o prontuário, mas a informação é do paciente. Negar acesso ou cobrar por ele contraria a Carta.",
    tags: ["direitos do usuário"]
  },
  {
    id: "e308", disciplinaId: "espec", topicos: [T(16)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Portaria de Consolidação nº 6/2017", palavras: ["PRC 6", "servidores ativos", "exceção"],
    contexto: "Um município contratou, por concurso, enfermeiros exclusivamente para atuar nas equipes de Saúde da Família previstas no Plano Municipal de Saúde e quer pagá-los com recursos federais do Bloco de Manutenção.",
    comando: "Segundo as regras consolidadas na PRC nº 6/2017, o pagamento é",
    alternativas: [
      { k: "A", texto: "admitido, pois a vedação ao pagamento de servidores ativos não alcança os contratados exclusivamente para desempenhar funções relacionadas aos serviços previstos no Plano de Saúde.", porqueErrada: "" },
      { k: "B", texto: "vedado, pois nenhum servidor ativo pode ser pago com recursos federais.", porqueErrada: "A norma ressalva os servidores contratados exclusivamente para os serviços do Plano de Saúde." },
      { k: "C", texto: "vedado, pois pessoal só pode ser pago com o Bloco de Estruturação.", porqueErrada: "Estruturação financia equipamentos e obras, não pessoal." },
      { k: "D", texto: "admitido, inclusive para servidores aposentados da saúde.", porqueErrada: "Pagamento de inativos é vedado." },
    ],
    correta: "A",
    justificativa: "As regras de financiamento consolidadas na PRC nº 6/2017 vedam o pagamento de servidores inativos e de servidores ativos com os recursos de custeio/manutenção, exceto aqueles contratados exclusivamente para desempenhar funções relacionadas aos serviços previstos no respectivo Plano de Saúde.",
    dicaFGV: "Regra com exceção: ativo vedado, SALVO se contratado exclusivamente para serviço do Plano. Inativo, nunca.",
    tags: ["financiamento"]
  },
];
