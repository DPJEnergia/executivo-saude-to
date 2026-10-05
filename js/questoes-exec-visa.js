/* questoes-exec-visa.js — Conhecimentos Específicos do cargo Executivo em Saúde, itens 6 a 9
 * do Anexo I: evolução da vigilância sanitária, conceitos e funções, Lei nº 9.782/1999 e
 * Decreto nº 3.029/1999. Questões inéditas, 4 alternativas, padrão FGV. */

const T = n => `espec-executivo-em-saude-${n}`;

export const QUESTOES_EXEC_VISA = [
  /* ---------- 6. Evolução da vigilância sanitária no Brasil ---------- */
  {
    id: "e151", disciplinaId: "espec", topicos: [T(6)], dificuldade: "media", tempoAlvo: 160,
    assunto: "Evolução da vigilância sanitária", palavras: ["evolução", "histórico", "linha do tempo"],
    contexto: "Para uma capacitação de novos servidores, a equipe montou uma linha do tempo com quatro marcos normativos da vigilância sanitária brasileira: (1) Lei nº 9.782/1999; (2) Lei nº 6.360/1976; (3) Constituição Federal de 1988; (4) Lei nº 8.080/1990.",
    comando: "A ordem cronológica correta dos marcos é",
    alternativas: [
      { k: "A", texto: "2 – 3 – 4 – 1.", porqueErrada: "" },
      { k: "B", texto: "3 – 2 – 4 – 1.", porqueErrada: "A Lei nº 6.360 é de 1976, anterior à Constituição de 1988." },
      { k: "C", texto: "2 – 4 – 3 – 1.", porqueErrada: "A Lei nº 8.080 é de 1990, posterior à Constituição." },
      { k: "D", texto: "1 – 2 – 3 – 4.", porqueErrada: "A Lei nº 9.782, que criou a Anvisa, é de 1999, o marco mais recente." },
    ],
    correta: "A",
    justificativa: "A Lei nº 6.360/1976 tratou da vigilância sanitária de medicamentos, cosméticos, saneantes e outros produtos; a Constituição de 1988 atribuiu ao SUS a execução das ações de vigilância sanitária (art. 200); a Lei nº 8.080/1990 conceituou a vigilância sanitária; e a Lei nº 9.782/1999 definiu o Sistema Nacional de Vigilância Sanitária e criou a Anvisa.",
    dicaFGV: "Em questões de ordenação, ancore o primeiro e o último itens antes de olhar o meio. Aqui, 1976 abre e 1999 fecha: só sobra uma alternativa.",
    tags: ["histórico"]
  },
  {
    id: "e152", disciplinaId: "espec", topicos: [T(6)], dificuldade: "media", tempoAlvo: 140,
    assunto: "Evolução da vigilância sanitária", palavras: ["Lei 6.437", "infrações sanitárias", "evolução"],
    contexto: "Durante uma inspeção, a equipe municipal constatou a venda de alimentos com prazo de validade vencido e lavrou auto de infração, aplicando a penalidade de multa.",
    comando: "A norma federal de 1977 que configura as infrações à legislação sanitária federal e estabelece as respectivas sanções é a",
    alternativas: [
      { k: "A", texto: "Lei nº 6.437/1977.", porqueErrada: "" },
      { k: "B", texto: "Lei nº 5.991/1973.", porqueErrada: "A Lei nº 5.991/1973 trata do controle sanitário do comércio de drogas, medicamentos, insumos farmacêuticos e correlatos." },
      { k: "C", texto: "Lei nº 9.782/1999.", porqueErrada: "A Lei nº 9.782/1999 define o SNVS e cria a Anvisa." },
      { k: "D", texto: "Lei nº 8.078/1990.", porqueErrada: "A Lei nº 8.078/1990 é o Código de Defesa do Consumidor." },
    ],
    correta: "A",
    justificativa: "A Lei nº 6.437/1977 configura as infrações à legislação sanitária federal e estabelece as sanções respectivas, como advertência, multa, apreensão e inutilização de produto, interdição e cancelamento de licença. Ela integra o conjunto de leis da década de 1970 que estruturou a vigilância sanitária no país.",
    dicaFGV: "Década de 1970, três leis-chave: 5.991/73 (comércio de medicamentos), 6.360/76 (registro e controle de produtos) e 6.437/77 (infrações e sanções). Decore pelo ano.",
    tags: ["histórico", "sanções"]
  },
  {
    id: "e153", disciplinaId: "espec", topicos: [T(6)], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Evolução da vigilância sanitária", palavras: ["Constituição", "art. 200", "evolução"],
    contexto: "Um texto sobre a história da vigilância sanitária afirma que a Constituição de 1988 representou um marco ao inserir essas ações no rol de atribuições do sistema público de saúde.",
    comando: "Segundo o art. 200 da Constituição Federal, compete ao SUS, entre outras atribuições,",
    alternativas: [
      { k: "A", texto: "executar as ações de vigilância sanitária e epidemiológica, bem como as de saúde do trabalhador.", porqueErrada: "" },
      { k: "B", texto: "regular os planos privados de assistência à saúde.", porqueErrada: "A regulação da saúde suplementar cabe à ANS, por lei específica; não está no art. 200." },
      { k: "C", texto: "executar a política de previdência dos servidores da saúde.", porqueErrada: "Previdência não é atribuição do SUS." },
      { k: "D", texto: "fixar o preço de venda de todos os produtos alimentícios.", porqueErrada: "O SUS fiscaliza alimentos quanto ao teor nutricional, bebidas e águas, mas não fixa preços." },
    ],
    correta: "A",
    justificativa: "O art. 200 da Constituição atribui ao SUS, entre outras competências, controlar e fiscalizar procedimentos, produtos e substâncias de interesse para a saúde; executar as ações de vigilância sanitária e epidemiológica, bem como as de saúde do trabalhador; e fiscalizar e inspecionar alimentos, compreendido o controle de seu teor nutricional, bem como bebidas e águas para consumo humano.",
    dicaFGV: "A FGV inclui alternativas plausíveis, mas atribuídas a outro órgão (ANS, Previdência). Pergunte: isso é SUS ou é outra política?",
    tags: ["constitucional"]
  },
  {
    id: "e154", disciplinaId: "espec", topicos: [T(6)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Evolução da vigilância sanitária", palavras: ["Secretaria Nacional de Vigilância Sanitária", "evolução"],
    contexto: "Antes da criação da Anvisa, as ações federais de vigilância sanitária eram conduzidas por uma unidade da administração direta, integrante da estrutura do Ministério da Saúde.",
    comando: "Com a Lei nº 9.782/1999, essas atribuições passaram a ser exercidas por",
    alternativas: [
      { k: "A", texto: "uma autarquia sob regime especial, vinculada ao Ministério da Saúde.", porqueErrada: "" },
      { k: "B", texto: "uma empresa pública de direito privado, subordinada ao Ministério da Saúde.", porqueErrada: "A Anvisa é autarquia (direito público) e é vinculada, não subordinada hierarquicamente." },
      { k: "C", texto: "um órgão da administração direta, sem personalidade jurídica própria.", porqueErrada: "A Anvisa tem personalidade jurídica de direito público, como toda autarquia." },
      { k: "D", texto: "uma fundação privada sem fins lucrativos, qualificada como organização social.", porqueErrada: "Organização social é entidade privada; o poder de polícia sanitária permaneceu em entidade pública." },
    ],
    correta: "A",
    justificativa: "A Lei nº 9.782/1999 criou a Agência Nacional de Vigilância Sanitária como autarquia sob regime especial, vinculada ao Ministério da Saúde, com sede e foro no Distrito Federal, prazo de duração indeterminado e atuação em todo o território nacional. A antiga Secretaria de Vigilância Sanitária era órgão da administração direta.",
    dicaFGV: "Vinculação (supervisão ministerial) é diferente de subordinação (hierarquia). Sempre que aparecer “subordinada” associado a agência reguladora, desconfie.",
    tags: ["histórico", "Anvisa"]
  },
  {
    id: "e155", disciplinaId: "espec", topicos: [T(6)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Evolução da vigilância sanitária", palavras: ["período colonial", "portos", "evolução"],
    contexto: "Historiadores da saúde pública descrevem que, no Brasil colônia e no Império, as práticas sanitárias tinham caráter de polícia e se voltavam sobretudo a certos objetos de controle.",
    comando: "Nesse período, as ações sanitárias concentravam-se principalmente",
    alternativas: [
      { k: "A", texto: "no controle sanitário de portos e embarcações, na fiscalização do comércio de alimentos e no controle do exercício das profissões de cura, como a medicina e a farmácia.", porqueErrada: "" },
      { k: "B", texto: "no registro de medicamentos industrializados e na farmacovigilância.", porqueErrada: "Registro de medicamentos industrializados e farmacovigilância são práticas do século XX." },
      { k: "C", texto: "na regulação de planos privados e no controle de tecnologias de alto custo.", porqueErrada: "Temas contemporâneos, sem relação com a polícia sanitária colonial." },
      { k: "D", texto: "na vigilância de serviços hospitalares de alta complexidade.", porqueErrada: "Não havia rede hospitalar dessa natureza no período." },
    ],
    correta: "A",
    justificativa: "As primeiras ações de vigilância sanitária no Brasil, nos períodos colonial e imperial, tinham caráter de polícia sanitária e se dirigiam ao controle dos portos e embarcações (para evitar a entrada de epidemias), à fiscalização de alimentos e ao controle do exercício profissional de médicos, cirurgiões e boticários.",
    dicaFGV: "Em questões históricas, elimine as alternativas anacrônicas: tecnologias e instituições que não existiam na época são a forma mais rápida de reduzir as opções.",
    tags: ["histórico"]
  },
  {
    id: "e156", disciplinaId: "espec", topicos: [T(6)], dificuldade: "media", tempoAlvo: 140,
    assunto: "Evolução da vigilância sanitária", palavras: ["Lei 6.360", "registro de produtos", "evolução"],
    contexto: "Uma empresa pretende iniciar a comercialização de um novo saneante. O analista lembra que a lei de 1976 que dispõe sobre a vigilância sanitária a que ficam sujeitos medicamentos, drogas, insumos farmacêuticos e correlatos, cosméticos, saneantes e outros produtos exige registro prévio.",
    comando: "A lei mencionada é a",
    alternativas: [
      { k: "A", texto: "Lei nº 6.437/1976, que dispõe sobre infrações sanitárias.", porqueErrada: "A Lei nº 6.437 é de 1977 e trata de infrações e sanções." },
      { k: "B", texto: "Lei nº 6.360/1976.", porqueErrada: "" },
      { k: "C", texto: "Lei nº 5.991/1976, que dispõe sobre o comércio de medicamentos.", porqueErrada: "A Lei nº 5.991 é de 1973 e trata do comércio farmacêutico." },
      { k: "D", texto: "Lei nº 8.080/1976, que regula a vigilância de produtos.", porqueErrada: "A Lei nº 8.080 é de 1990." },
    ],
    correta: "B",
    justificativa: "A Lei nº 6.360/1976 dispõe sobre a vigilância sanitária a que ficam sujeitos os medicamentos, as drogas, os insumos farmacêuticos e correlatos, cosméticos, saneantes e outros produtos, e estabelece que nenhum desses produtos pode ser industrializado, exposto à venda ou entregue ao consumo antes de registrado no órgão federal competente.",
    dicaFGV: "A banca troca números e anos de leis vizinhas. Quando duas alternativas trazem o mesmo ano, confira se o número da lei casa com ele.",
    tags: ["histórico", "registro"]
  },

  /* ---------- 7. Vigilância sanitária: conceitos, abrangência e funções ---------- */
  {
    id: "e161", disciplinaId: "espec", topicos: [T(7)], dificuldade: "facil", tempoAlvo: 130,
    assunto: "Vigilância sanitária: conceitos e funções", palavras: ["conceito", "riscos à saúde", "abrangência"],
    contexto: "Em um concurso interno, os servidores foram solicitados a reconhecer o conceito legal de vigilância sanitária.",
    comando: "Segundo a Lei nº 8.080/1990, vigilância sanitária é",
    alternativas: [
      { k: "A", texto: "o conjunto de ações que proporcionam o conhecimento, a detecção ou prevenção de qualquer mudança nos fatores determinantes e condicionantes de saúde individual ou coletiva.", porqueErrada: "Esse é o conceito de vigilância EPIDEMIOLÓGICA." },
      { k: "B", texto: "o conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde e de intervir nos problemas sanitários decorrentes do meio ambiente, da produção e circulação de bens e da prestação de serviços de interesse da saúde.", porqueErrada: "" },
      { k: "C", texto: "o conjunto de atividades destinadas à promoção e proteção da saúde dos trabalhadores.", porqueErrada: "Esse é o núcleo do conceito de saúde do trabalhador." },
      { k: "D", texto: "a atividade exclusiva de registro de medicamentos e alimentos industrializados.", porqueErrada: "O conceito é muito mais amplo e abrange bens e serviços." },
    ],
    correta: "B",
    justificativa: "O art. 6º, § 1º, da Lei nº 8.080/1990 define vigilância sanitária como o conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde e de intervir nos problemas sanitários decorrentes do meio ambiente, da produção e circulação de bens e da prestação de serviços de interesse da saúde, abrangendo o controle de bens de consumo (da produção ao consumo) e o controle da prestação de serviços.",
    dicaFGV: "Sanitária = RISCO (eliminar, diminuir, prevenir) + bens e serviços. Epidemiológica = CONHECIMENTO e DETECÇÃO de mudanças nos determinantes. Essa distinção cai em quase toda prova do SUS.",
    tags: ["conceitos"]
  },
  {
    id: "e162", disciplinaId: "espec", topicos: [T(7)], dificuldade: "media", tempoAlvo: 160,
    assunto: "Vigilância sanitária: conceitos e funções", palavras: ["poder de polícia", "autoexecutoriedade", "interdição"],
    contexto: "Fiscais da vigilância sanitária encontraram, em uma clínica de hemodiálise, água tratada fora dos padrões e com risco iminente aos pacientes. Interditaram cautelarmente o setor no ato da inspeção, sem prévia autorização judicial.",
    comando: "O atributo do poder de polícia que fundamenta a atuação imediata, sem necessidade de ordem judicial, é a",
    alternativas: [
      { k: "A", texto: "autoexecutoriedade.", porqueErrada: "" },
      { k: "B", texto: "tipicidade, que exige prévia previsão contratual.", porqueErrada: "Tipicidade é atributo do ato administrativo em geral e não se relaciona a contrato." },
      { k: "C", texto: "presunção absoluta de legitimidade, que impede o controle judicial posterior.", porqueErrada: "A presunção de legitimidade é relativa e não afasta o controle judicial." },
      { k: "D", texto: "delegabilidade, que permite a execução por particulares sem vínculo.", porqueErrada: "Não é atributo do poder de polícia; e a interdição foi feita pelo próprio Poder Público." },
    ],
    correta: "A",
    justificativa: "A vigilância sanitária exerce poder de polícia administrativa, cujos atributos clássicos são a discricionariedade (em regra), a autoexecutoriedade e a coercibilidade. A autoexecutoriedade permite que a Administração execute diretamente suas decisões, sem prévia autorização judicial, especialmente diante de risco iminente à saúde.",
    dicaFGV: "A FGV gosta de “presunção absoluta”. Lembre: no Direito Administrativo, a presunção de legitimidade é RELATIVA (admite prova em contrário).",
    tags: ["poder de polícia"]
  },
  {
    id: "e163", disciplinaId: "espec", topicos: [T(7)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Vigilância sanitária: conceitos e funções", palavras: ["abrangência", "bens de consumo", "prestação de serviços"],
    contexto: "Ao planejar o ano, a coordenação estadual de vigilância sanitária listou objetos de atuação. Um dos itens foi questionado pelo Conselho Estadual de Saúde por não pertencer ao campo da vigilância sanitária.",
    comando: "O item que NÃO pertence ao campo de atuação da vigilância sanitária é",
    alternativas: [
      { k: "A", texto: "o controle sanitário de serviços de hemoterapia.", porqueErrada: "Sangue e serviços de saúde integram o campo da vigilância sanitária." },
      { k: "B", texto: "a inspeção de indústrias de cosméticos.", porqueErrada: "Cosméticos são produtos submetidos à vigilância sanitária." },
      { k: "C", texto: "a fixação dos reajustes das mensalidades dos planos privados de saúde.", porqueErrada: "" },
      { k: "D", texto: "a fiscalização de estabelecimentos que manipulam alimentos.", porqueErrada: "Alimentos são objeto clássico da vigilância sanitária." },
    ],
    correta: "C",
    justificativa: "A vigilância sanitária abrange o controle de bens de consumo relacionados à saúde, em todas as etapas, da produção ao consumo, e o controle da prestação de serviços de interesse da saúde. A regulação econômica dos planos privados, inclusive reajustes, é atribuição da Agência Nacional de Saúde Suplementar (ANS).",
    dicaFGV: "Anvisa e ANS são confundidas de propósito. Anvisa = risco sanitário de produtos e serviços. ANS = mercado de planos de saúde.",
    tags: ["abrangência"]
  },
  {
    id: "e164", disciplinaId: "espec", topicos: [T(7)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Vigilância sanitária: conceitos e funções", palavras: ["risco sanitário", "prevenção", "conceito"],
    contexto: "Um gestor afirmou que a vigilância sanitária só pode agir depois que houver vítimas, pois “sem dano comprovado não há o que fiscalizar”.",
    comando: "A afirmação está",
    alternativas: [
      { k: "A", texto: "correta, porque o poder de polícia exige dano concreto e individualizado.", porqueErrada: "O poder de polícia sanitária atua sobre o risco, antes do dano." },
      { k: "B", texto: "incorreta, porque a vigilância sanitária atua sobre o risco, com finalidade preventiva, para eliminar, diminuir ou prevenir agravos à saúde.", porqueErrada: "" },
      { k: "C", texto: "correta, porque a prevenção cabe apenas à vigilância epidemiológica.", porqueErrada: "O próprio conceito legal de vigilância sanitária fala em prevenir riscos." },
      { k: "D", texto: "incorreta, porque a vigilância sanitária atua apenas após denúncia formal do consumidor.", porqueErrada: "A atuação é de ofício, programada ou por demanda; não depende de denúncia." },
    ],
    correta: "B",
    justificativa: "O conceito legal de vigilância sanitária está centrado no risco: o conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde. A atuação é essencialmente preventiva, exercida de ofício por meio de normatização, licenciamento, inspeção, monitoramento e educação sanitária.",
    dicaFGV: "Verbos do conceito legal — eliminar, diminuir, prevenir — derrubam qualquer alternativa que condicione a atuação a dano já ocorrido.",
    tags: ["conceitos"]
  },
  {
    id: "e165", disciplinaId: "espec", topicos: [T(7)], dificuldade: "media", tempoAlvo: 160,
    assunto: "Vigilância sanitária: conceitos e funções", palavras: ["licenciamento", "registro", "funções", "descentralização das ações"],
    contexto: "Uma farmácia de manipulação recém-instalada em Palmas precisa de licença sanitária para funcionar. Ao mesmo tempo, um laboratório farmacêutico do Estado de São Paulo pede o registro de um novo medicamento.",
    comando: "Considerando a divisão de funções no Sistema Nacional de Vigilância Sanitária, em regra,",
    alternativas: [
      { k: "A", texto: "ambos os atos cabem à vigilância sanitária municipal do local do estabelecimento.", porqueErrada: "O registro de medicamentos é competência federal, da Anvisa." },
      { k: "B", texto: "o licenciamento do estabelecimento local é feito pela vigilância sanitária local (municipal ou estadual, conforme a pactuação), e o registro do medicamento cabe à Anvisa.", porqueErrada: "" },
      { k: "C", texto: "o licenciamento cabe à Anvisa, e o registro do medicamento, ao Estado onde o produto será fabricado.", porqueErrada: "Inverte as competências." },
      { k: "D", texto: "ambos os atos cabem exclusivamente à Anvisa, que não delega funções.", porqueErrada: "A Lei nº 9.782/1999 permite à Anvisa delegar a execução de diversas atribuições; e o licenciamento local é descentralizado." },
    ],
    correta: "B",
    justificativa: "No SNVS, a concessão de registro de produtos é atribuição da Anvisa e não pode ser delegada. O licenciamento sanitário e a inspeção de estabelecimentos locais são executados de forma descentralizada pelas vigilâncias sanitárias estaduais e municipais, conforme a pactuação entre os entes.",
    dicaFGV: "Produto que circula no país inteiro = registro federal. Estabelecimento com endereço = licença local. Esse raciocínio resolve a maioria das questões de competência no SNVS.",
    tags: ["funções", "SNVS"]
  },
  {
    id: "e166", disciplinaId: "espec", topicos: [T(7)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Vigilância sanitária: conceitos e funções", palavras: ["INCQS", "laboratórios", "componentes do SNVS"],
    contexto: "Para avaliar suspeita de falsificação de um lote de medicamento apreendido, a vigilância sanitária estadual encaminhou amostras para análise fiscal em laboratório oficial integrante do Sistema Nacional de Vigilância Sanitária.",
    comando: "Compõem o Sistema Nacional de Vigilância Sanitária, entre outros,",
    alternativas: [
      { k: "A", texto: "a Anvisa, as vigilâncias sanitárias estaduais e municipais, os Laboratórios Centrais de Saúde Pública (Lacen) e o Instituto Nacional de Controle de Qualidade em Saúde (INCQS).", porqueErrada: "" },
      { k: "B", texto: "apenas a Anvisa, já que estados e municípios exercem vigilância epidemiológica, e não sanitária.", porqueErrada: "Estados e municípios executam a maior parte das ações de vigilância sanitária." },
      { k: "C", texto: "a Anvisa e a Agência Nacional de Saúde Suplementar, que dividem o controle de produtos.", porqueErrada: "A ANS não integra o SNVS; regula o mercado de planos de saúde." },
      { k: "D", texto: "as entidades de defesa do consumidor, que exercem poder de polícia sanitária.", porqueErrada: "Órgãos de defesa do consumidor atuam em parceria, mas não exercem poder de polícia sanitária." },
    ],
    correta: "A",
    justificativa: "O SNVS compreende o conjunto de ações executado por instituições da administração direta e indireta da União, Estados, DF e Municípios que exerçam atividades de regulação, normatização, controle e fiscalização em vigilância sanitária. Integram-no a Anvisa, as vigilâncias estaduais e municipais e a rede de laboratórios oficiais, como os Lacen e o INCQS/Fiocruz.",
    dicaFGV: "Alternativas com “apenas” em questões sobre sistemas federativos costumam estar erradas: o SNVS é, por definição, das três esferas.",
    tags: ["SNVS"]
  },

  /* ---------- 8. Lei nº 9.782/1999 ---------- */
  {
    id: "e171", disciplinaId: "espec", topicos: [T(8)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 9.782/1999", palavras: ["9.782", "natureza", "autarquia especial"],
    contexto: "Em parecer sobre a autonomia da Anvisa, a assessoria jurídica da Secretaria descreveu a natureza de autarquia especial conferida à Agência.",
    comando: "Segundo a Lei nº 9.782/1999 combinada com a Lei Geral das Agências Reguladoras (Lei nº 13.848/2019), a natureza especial da Anvisa é caracterizada, entre outros aspectos, pela",
    alternativas: [
      { k: "A", texto: "subordinação hierárquica direta ao Ministro da Saúde em todas as decisões técnicas.", porqueErrada: "A lei afasta a tutela e a subordinação hierárquica." },
      { k: "B", texto: "ausência de tutela ou de subordinação hierárquica, autonomia funcional, decisória, administrativa e financeira e investidura a termo de seus dirigentes, com estabilidade durante os mandatos.", porqueErrada: "" },
      { k: "C", texto: "possibilidade de exoneração imotivada de seus diretores a qualquer tempo.", porqueErrada: "A estabilidade dos dirigentes durante o mandato é característica do regime especial." },
      { k: "D", texto: "personalidade jurídica de direito privado e regime celetista obrigatório.", porqueErrada: "Autarquia tem personalidade de direito público." },
    ],
    correta: "B",
    justificativa: "A Lei nº 9.782/1999 cria a Anvisa como autarquia sob regime especial, e o art. 3º da Lei nº 13.848/2019 (Lei Geral das Agências Reguladoras) dispõe que essa natureza especial é caracterizada pela ausência de tutela ou de subordinação hierárquica, pela autonomia funcional, decisória, administrativa e financeira e pela investidura a termo de seus dirigentes e estabilidade durante os mandatos.",
    dicaFGV: "As características do regime especial formam um bloco: sem subordinação + autonomias + mandato estável. Qualquer alternativa que quebre um elemento do bloco está errada.",
    tags: ["Anvisa"]
  },
  {
    id: "e172", disciplinaId: "espec", topicos: [T(8)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 9.782/1999", palavras: ["9.782", "finalidade institucional"],
    contexto: "Na elaboração do planejamento estratégico, a equipe precisava citar literalmente a finalidade institucional da Anvisa.",
    comando: "De acordo com a Lei nº 9.782/1999, a Anvisa tem por finalidade institucional",
    alternativas: [
      { k: "A", texto: "promover a proteção da saúde da população, por intermédio do controle sanitário da produção e do consumo de produtos e serviços submetidos à vigilância sanitária, inclusive dos ambientes, processos, insumos e tecnologias a eles relacionados, bem como o controle de portos, aeroportos, fronteiras e recintos alfandegados.", porqueErrada: "" },
      { k: "B", texto: "regular o mercado de planos privados de saúde e as relações entre operadoras e consumidores.", porqueErrada: "É a finalidade da ANS." },
      { k: "C", texto: "executar diretamente toda a assistência hospitalar do SUS.", porqueErrada: "A Anvisa não presta assistência; regula e fiscaliza riscos sanitários." },
      { k: "D", texto: "coordenar exclusivamente a vigilância epidemiológica das doenças transmissíveis.", porqueErrada: "A vigilância epidemiológica é coordenada pelo Ministério da Saúde, não pela Anvisa." },
    ],
    correta: "A",
    justificativa: "O art. 6º da Lei nº 9.782/1999 define a finalidade institucional da Anvisa: promover a proteção da saúde da população por meio do controle sanitário da produção e do consumo de produtos e serviços submetidos à vigilância sanitária, inclusive dos ambientes, processos, insumos e tecnologias relacionados, bem como o controle de portos, aeroportos, fronteiras e recintos alfandegados.",
    dicaFGV: "A alternativa mais longa e detalhada nem sempre é a certa, mas em questões de “texto da lei” costuma ser. Confirme pelos termos-chave: controle sanitário, produção e consumo, portos e aeroportos.",
    tags: ["Anvisa"]
  },
  {
    id: "e173", disciplinaId: "espec", topicos: [T(8)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Lei nº 9.782/1999", palavras: ["9.782", "delegação", "registro de produtos"],
    contexto: "Uma Secretaria Estadual de Saúde solicitou à Anvisa a delegação de algumas atribuições para agilizar processos regionais.",
    comando: "Segundo a Lei nº 9.782/1999, a Anvisa pode delegar aos Estados, DF e Municípios a execução de atribuições que lhe são próprias, com exceções. Entre as atribuições que NÃO podem ser delegadas está",
    alternativas: [
      { k: "A", texto: "a concessão de registro de produtos.", porqueErrada: "" },
      { k: "B", texto: "a fiscalização de estabelecimentos comerciais de medicamentos.", porqueErrada: "A execução de fiscalização local é descentralizada e pode ser delegada." },
      { k: "C", texto: "a coleta de amostras para análise fiscal.", porqueErrada: "Ato de execução, comumente realizado pelas vigilâncias locais." },
      { k: "D", texto: "a inspeção sanitária de serviços de saúde.", porqueErrada: "A inspeção de serviços é executada de forma descentralizada." },
    ],
    correta: "A",
    justificativa: "O art. 7º, § 1º, da Lei nº 9.782/1999 permite à Anvisa delegar aos Estados, DF e Municípios a execução de atribuições que lhe são próprias, excetuadas algumas, entre elas a coordenação do SNVS, a anuência de importação e exportação e a concessão de registros de produtos. Essas atribuições permanecem com a Agência.",
    dicaFGV: "Registro de produto é o ato federal por excelência: vale para todo o país. Na dúvida sobre delegação, pergunte se o ato tem efeito nacional.",
    tags: ["Anvisa", "delegação"]
  },
  {
    id: "e174", disciplinaId: "espec", topicos: [T(8)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 9.782/1999", palavras: ["9.782", "produtos submetidos", "art. 8º"],
    contexto: "Um analista revisava a lista de bens e produtos submetidos ao controle e fiscalização sanitária pela Anvisa.",
    comando: "NÃO se inclui entre os bens e produtos submetidos ao controle e fiscalização sanitária pela Anvisa, nos termos da Lei nº 9.782/1999,",
    alternativas: [
      { k: "A", texto: "o sangue e os hemoderivados.", porqueErrada: "Constam expressamente do art. 8º." },
      { k: "B", texto: "os cigarros, cigarrilhas, charutos e qualquer outro produto fumígero.", porqueErrada: "Constam expressamente do art. 8º." },
      { k: "C", texto: "os medicamentos de uso veterinário.", porqueErrada: "" },
      { k: "D", texto: "os saneantes destinados a higienização, desinfecção ou desinfestação em ambientes domiciliares, hospitalares e coletivos.", porqueErrada: "Constam expressamente do art. 8º." },
    ],
    correta: "C",
    justificativa: "O art. 8º da Lei nº 9.782/1999 relaciona os bens e produtos submetidos à Anvisa, entre eles medicamentos de USO HUMANO, alimentos, cosméticos, saneantes, equipamentos e materiais médico-hospitalares, imunobiológicos, sangue e hemoderivados, órgãos e tecidos para transplante, radioisótopos e produtos fumígeros. Produtos de uso veterinário estão sob o Ministério da Agricultura.",
    dicaFGV: "A FGV adora o qualificador escondido: a lei fala em medicamentos de uso HUMANO. Basta trocar por “veterinário” para criar a alternativa correta numa questão com NÃO.",
    tags: ["Anvisa"]
  },
  {
    id: "e175", disciplinaId: "espec", topicos: [T(8)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 9.782/1999", palavras: ["9.782", "Diretoria Colegiada", "dirigentes"],
    contexto: "Durante um seminário sobre agências reguladoras, discutiu-se a composição da direção da Anvisa.",
    comando: "Conforme a Lei nº 9.782/1999, a Anvisa é dirigida por",
    alternativas: [
      { k: "A", texto: "um Diretor-Geral nomeado pelo Ministro da Saúde, sem aprovação do Senado.", porqueErrada: "A direção é colegiada, e os diretores são nomeados pelo Presidente da República após aprovação do Senado." },
      { k: "B", texto: "uma Diretoria Colegiada composta de até cinco membros, sendo um deles o seu Diretor-Presidente, nomeados pelo Presidente da República após aprovação do Senado Federal.", porqueErrada: "" },
      { k: "C", texto: "um Conselho Deliberativo formado por representantes de Estados e Municípios eleitos na CIT.", porqueErrada: "Não há esse conselho; a participação da sociedade se dá pelo Conselho Consultivo." },
      { k: "D", texto: "uma Diretoria Colegiada eleita pelos servidores de carreira da Agência.", porqueErrada: "Os diretores são indicados e nomeados pelo Presidente da República, com aprovação do Senado." },
    ],
    correta: "B",
    justificativa: "A Lei nº 9.782/1999 estabelece que a Anvisa é dirigida por uma Diretoria Colegiada composta de até cinco membros, sendo um deles o Diretor-Presidente. Os diretores são brasileiros, indicados e nomeados pelo Presidente da República após aprovação prévia do Senado Federal.",
    dicaFGV: "Agência reguladora = direção colegiada + nomeação presidencial + sabatina no Senado. Alternativas com nomeação ministerial ou eleição interna caem por esse tripé.",
    tags: ["Anvisa"]
  },
  {
    id: "e176", disciplinaId: "espec", topicos: [T(8)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Lei nº 9.782/1999", palavras: ["9.782", "Sistema Nacional de Vigilância Sanitária", "competências da União"],
    contexto: "Em uma oficina sobre o Sistema Nacional de Vigilância Sanitária, foram apresentadas quatro competências atribuídas à União pela Lei nº 9.782/1999.",
    comando: "Assinale a competência que NÃO é atribuída à União no âmbito do SNVS.",
    alternativas: [
      { k: "A", texto: "Definir a política nacional de vigilância sanitária.", porqueErrada: "É competência da União (art. 2º)." },
      { k: "B", texto: "Normatizar, controlar e fiscalizar produtos, substâncias e serviços de interesse para a saúde.", porqueErrada: "É competência da União (art. 2º)." },
      { k: "C", texto: "Executar diretamente, com exclusividade, a inspeção de todos os estabelecimentos comerciais de alimentos do país.", porqueErrada: "" },
      { k: "D", texto: "Prestar cooperação técnica e financeira aos Estados, ao Distrito Federal e aos Municípios.", porqueErrada: "É competência da União (art. 2º)." },
    ],
    correta: "C",
    justificativa: "O art. 2º da Lei nº 9.782/1999 atribui à União, no âmbito do SNVS, entre outras competências, definir a política nacional e o próprio SNVS; normatizar, controlar e fiscalizar produtos, substâncias e serviços de interesse para a saúde; exercer a vigilância sanitária de portos, aeroportos e fronteiras; acompanhar e coordenar as ações estaduais, distritais e municipais; prestar cooperação técnica e financeira; e manter sistema de informações. A inspeção do comércio local de alimentos é executada de forma descentralizada.",
    dicaFGV: "“Diretamente, com exclusividade, de todos” — três exageros num só período. Em questões federativas, esse padrão de linguagem quase sempre marca a alternativa incorreta.",
    tags: ["SNVS"]
  },

  /* ---------- 9. Decreto nº 3.029/1999 ---------- */
  {
    id: "e181", disciplinaId: "espec", topicos: [T(9)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Decreto nº 3.029/1999", palavras: ["3.029", "estrutura", "regulamento"],
    contexto: "Ao desenhar o organograma da Anvisa para um curso, o instrutor consultou o Regulamento aprovado pelo Decreto nº 3.029/1999.",
    comando: "Integram a estrutura da Agência, além da Diretoria Colegiada,",
    alternativas: [
      { k: "A", texto: "a Procuradoria, a Corregedoria, a Ouvidoria e o Conselho Consultivo.", porqueErrada: "" },
      { k: "B", texto: "o Conselho Fiscal, o Tribunal Administrativo Sanitário e a Assembleia de Acionistas.", porqueErrada: "Órgãos típicos de empresas ou inexistentes na Anvisa." },
      { k: "C", texto: "o Conselho Nacional de Saúde e a Comissão Intergestores Tripartite.", porqueErrada: "São instâncias do SUS, não órgãos da estrutura da Anvisa." },
      { k: "D", texto: "a Secretaria de Vigilância em Saúde e o Fundo Nacional de Saúde.", porqueErrada: "São estruturas do Ministério da Saúde." },
    ],
    correta: "A",
    justificativa: "A Anvisa é dirigida por uma Diretoria Colegiada e conta com Procuradoria, Corregedoria e Ouvidoria, além de unidades especializadas, e com um Conselho Consultivo, órgão de participação institucional da sociedade, conforme a Lei nº 9.782/1999 e o Regulamento aprovado pelo Decreto nº 3.029/1999.",
    dicaFGV: "Distratores com órgãos de outra natureza (empresa privada, instância do SUS) são comuns. Pergunte: esse órgão pertence à autarquia ou ao sistema?",
    tags: ["Anvisa", "estrutura"]
  },
  {
    id: "e182", disciplinaId: "espec", topicos: [T(9)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Decreto nº 3.029/1999", palavras: ["3.029", "Conselho Consultivo"],
    contexto: "Uma associação de consumidores quer participar formalmente da Anvisa e pergunta qual instância permite essa representação institucional.",
    comando: "O Conselho Consultivo da Anvisa deve contar, no mínimo, com representantes",
    alternativas: [
      { k: "A", texto: "apenas do Ministério da Saúde e do setor produtivo.", porqueErrada: "A composição mínima é bem mais ampla." },
      { k: "B", texto: "da União, dos Estados, do Distrito Federal, dos Municípios, dos produtores, dos comerciantes, da comunidade científica e dos usuários.", porqueErrada: "" },
      { k: "C", texto: "exclusivamente dos servidores efetivos da Agência.", porqueErrada: "O Conselho é instância de participação da sociedade, não dos servidores." },
      { k: "D", texto: "das operadoras de planos de saúde e dos hospitais privados.", porqueErrada: "Não há essa composição; mistura atores da saúde suplementar." },
    ],
    correta: "B",
    justificativa: "A Anvisa conta com um Conselho Consultivo que deve ter, no mínimo, representantes da União, dos Estados, do Distrito Federal, dos Municípios, dos produtores, dos comerciantes, da comunidade científica e dos usuários, na forma do regulamento (Decreto nº 3.029/1999).",
    dicaFGV: "O Conselho Consultivo espelha todos os interessados: três esferas + mercado (produtores e comerciantes) + ciência + usuários. Alternativas que excluem um grupo estão erradas.",
    tags: ["participação"]
  },
  {
    id: "e183", disciplinaId: "espec", topicos: [T(9)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Decreto nº 3.029/1999", palavras: ["3.029", "recurso", "Diretoria Colegiada"],
    contexto: "Uma empresa teve o pedido de registro de um produto indeferido por área técnica da Anvisa e pretende recorrer administrativamente.",
    comando: "No âmbito do Regulamento da Anvisa, cabe à Diretoria Colegiada, entre outras atribuições,",
    alternativas: [
      { k: "A", texto: "julgar, em grau de recurso, as decisões da Agência, mediante provocação dos interessados.", porqueErrada: "" },
      { k: "B", texto: "homologar as decisões do Conselho Nacional de Saúde.", porqueErrada: "Homologação das decisões dos Conselhos cabe ao chefe do poder em cada esfera." },
      { k: "C", texto: "aprovar o orçamento do Ministério da Saúde.", porqueErrada: "A Diretoria não aprova o orçamento do Ministério." },
      { k: "D", texto: "eleger os membros do Conselho Consultivo entre os servidores.", porqueErrada: "O Conselho Consultivo é formado por representantes externos, na forma do regulamento." },
    ],
    correta: "A",
    justificativa: "Entre as competências da Diretoria Colegiada previstas na Lei nº 9.782/1999 (art. 15, VI) e no Regulamento da Anvisa estão definir as diretrizes estratégicas da Agência, editar normas sobre matérias de sua competência e julgar, em grau de recurso, as decisões da Agência, mediante provocação dos interessados, funcionando como última instância administrativa.",
    dicaFGV: "Órgão colegiado de cúpula costuma ser a instância recursal final. Quando a questão fala em “recorrer” dentro da autarquia, a Diretoria Colegiada é a resposta provável.",
    tags: ["Anvisa", "processo administrativo"]
  },
  {
    id: "e184", disciplinaId: "espec", topicos: [T(9)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Decreto nº 3.029/1999", palavras: ["3.029", "Ouvidoria", "regulamento"],
    contexto: "Um cidadão quer apresentar reclamação sobre a demora da Anvisa em responder a uma consulta e teme que o setor encarregado de recebê-la sofra pressão dos diretores.",
    comando: "Quanto à Ouvidoria das agências reguladoras, como a Anvisa, é correto afirmar que o ouvidor",
    alternativas: [
      { k: "A", texto: "é subordinado diretamente ao Diretor-Presidente, que pode arquivar as reclamações.", porqueErrada: "O ouvidor atua sem subordinação hierárquica." },
      { k: "B", texto: "atua sem subordinação hierárquica e exerce suas atribuições sem acumulação com outras funções.", porqueErrada: "" },
      { k: "C", texto: "é escolhido pelos regulados, para garantir a representação do setor produtivo.", porqueErrada: "O ouvidor não é representante dos regulados." },
      { k: "D", texto: "tem competência para anular as decisões da Diretoria Colegiada.", porqueErrada: "A Ouvidoria recebe e encaminha manifestações e avalia a atuação, mas não anula decisões." },
    ],
    correta: "B",
    justificativa: "A Lei nº 13.848/2019, que rege as agências reguladoras federais, prevê em cada agência um ouvidor que atua sem subordinação hierárquica e exerce suas atribuições sem acumulação com outras funções. A Ouvidoria integra a estrutura da Anvisa prevista na Lei nº 9.782/1999 e no Decreto nº 3.029/1999.",
    dicaFGV: "Independência é a palavra que define ouvidorias de agências. Alternativas que submetem o ouvidor a um diretor ou ao regulado caem por esse critério.",
    tags: ["Anvisa", "participação"]
  },
  {
    id: "e185", disciplinaId: "espec", topicos: [T(9)], dificuldade: "media", tempoAlvo: 140,
    assunto: "Decreto nº 3.029/1999", palavras: ["3.029", "taxa de fiscalização", "receitas"],
    contexto: "Um fabricante de cosméticos recebeu cobrança pela Anvisa ao protocolar pedido de registro de produto.",
    comando: "A cobrança corresponde à",
    alternativas: [
      { k: "A", texto: "Taxa de Fiscalização de Vigilância Sanitária, administrada e arrecadada pela própria Agência.", porqueErrada: "" },
      { k: "B", texto: "contribuição previdenciária patronal, recolhida ao INSS.", porqueErrada: "Não se relaciona a atos de vigilância sanitária." },
      { k: "C", texto: "tarifa de serviço público, fixada livremente pela empresa.", porqueErrada: "Taxa é tributo vinculado ao exercício do poder de polícia; não é tarifa livre." },
      { k: "D", texto: "multa por infração sanitária, aplicada a todo pedido de registro.", porqueErrada: "Multa é sanção e depende de infração; o pedido de registro não é infração." },
    ],
    correta: "A",
    justificativa: "A Lei nº 9.782/1999 instituiu a Taxa de Fiscalização de Vigilância Sanitária, cobrada pela prática dos atos de competência da Anvisa constantes de seu anexo (como registro, renovação e autorização de funcionamento). Compete à Agência administrar e arrecadar a taxa, que constitui uma de suas receitas.",
    dicaFGV: "Taxa = tributo pelo exercício do poder de polícia ou serviço público específico. Ao ver “cobrança pela Anvisa ao protocolar pedido”, pense em taxa, não em multa.",
    tags: ["Anvisa", "receitas"]
  },
  {
    id: "e186", disciplinaId: "espec", topicos: [T(9)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Decreto nº 3.029/1999", palavras: ["3.029", "competências", "interdição"],
    contexto: "Diante de suspeita de contaminação de um lote de soro fisiológico distribuído nacionalmente, a Anvisa avaliou as medidas cabíveis.",
    comando: "Entre as competências da Anvisa previstas na Lei nº 9.782/1999 e reproduzidas no seu Regulamento, está",
    alternativas: [
      { k: "A", texto: "proibir a fabricação, a importação, o armazenamento, a distribuição e a comercialização de produtos e insumos, em caso de violação da legislação pertinente ou de risco iminente à saúde.", porqueErrada: "" },
      { k: "B", texto: "decretar a falência da empresa fabricante.", porqueErrada: "Falência é decretada pelo Poder Judiciário." },
      { k: "C", texto: "aplicar pena de prisão aos responsáveis técnicos.", porqueErrada: "Penas privativas de liberdade só podem ser aplicadas pelo Judiciário." },
      { k: "D", texto: "suspender os direitos políticos dos sócios da empresa.", porqueErrada: "Suspensão de direitos políticos depende de decisão judicial." },
    ],
    correta: "A",
    justificativa: "A Lei nº 9.782/1999 (art. 7º) e o Regulamento da Anvisa atribuem à Agência, entre outras competências, interditar locais de fabricação, controle, importação, armazenamento, distribuição e venda, e proibir a fabricação, importação, armazenamento, distribuição e comercialização de produtos e insumos em caso de violação da legislação ou de risco iminente à saúde.",
    dicaFGV: "O poder de polícia administrativa não alcança sanções reservadas ao Judiciário (prisão, falência, direitos políticos). Essa fronteira elimina três alternativas de uma vez.",
    tags: ["Anvisa", "poder de polícia"]
  },
];
