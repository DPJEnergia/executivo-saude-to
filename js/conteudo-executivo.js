/* conteudo-executivo.js — teoria objetiva, flashcards e mapas mentais dos 16 itens de
 * Conhecimentos Específicos do cargo Executivo em Saúde (Anexo I, item 10).
 * `topicos` vincula cada material ao item do edital (ver edital-especificos.js). */

const T = n => `espec-executivo-em-saude-${n}`;

export const RESUMOS_EXEC = [
  {
    id: "rx-8080", disciplinaId: "espec", topicos: [T(1)], assunto: "Lei nº 8.080/1990",
    titulo: "Lei 8.080/1990 — o que cai para gestão", minutos: 12,
    pontos: [
      "Art. 4º: o SUS é o conjunto de ações e serviços prestados por órgãos e instituições públicas federais, estaduais e municipais, da administração direta e indireta e das fundações mantidas pelo Poder Público. A iniciativa privada participa em caráter COMPLEMENTAR.",
      "Art. 6º: campo de atuação inclui vigilância sanitária, epidemiológica, saúde do trabalhador, assistência terapêutica integral (inclusive farmacêutica), saneamento (participação), sangue e hemoderivados, medicamentos e equipamentos.",
      "Competências: União estabelece normas e EXECUTA a vigilância de portos, aeroportos e fronteiras (Estados colaboram); Estado coordena e executa supletivamente; Município planeja, gere e executa os serviços.",
      "Art. 19-Q e 19-R: incorporação de tecnologias pelo Ministério da Saúde, assessorado pela Conitec, em até 180 dias prorrogáveis por 90.",
      "Art. 26, § 4º: dirigentes de entidades contratadas não podem exercer chefia ou função de confiança no SUS.",
      "Arts. 33 e 36: recursos em conta especial, sob fiscalização dos Conselhos; planejamento ASCENDENTE; vedada transferência para ações fora do plano, salvo emergência ou calamidade.",
    ],
    armadilhas: [
      "Dizer que o planejamento é descendente.",
      "Afirmar que a vigilância de portos e aeroportos é estadual.",
      "Trocar Conitec por Anvisa na incorporação de tecnologias.",
    ]
  },
  {
    id: "rx-org", disciplinaId: "espec", topicos: [T(2)], assunto: "Organização e funcionamento do SUS",
    titulo: "Organização do SUS — princípios, regiões e governança", minutos: 10,
    pontos: [
      "Princípios doutrinários: universalidade, integralidade e equidade. Organizativos: descentralização com direção única em cada esfera, regionalização e hierarquização, participação da comunidade.",
      "Integralidade (art. 7º, II): conjunto articulado e contínuo de ações preventivas e curativas, individuais e coletivas, em todos os níveis de complexidade.",
      "Direção única: Ministério da Saúde (União), Secretaria Estadual (Estado), Secretaria Municipal (Município).",
      "Decreto 7.508/2011: Região de Saúde deve ter, no mínimo, atenção primária, urgência e emergência, atenção psicossocial, atenção ambulatorial especializada e hospitalar, e vigilância em saúde.",
      "Pactuação entre gestores: CIT (nacional), CIB (estadual), CIR (regional). CONASS e CONASEMS representam Estados e Municípios.",
      "RENASES = todas as ações e serviços; RENAME = medicamentos. Municípios podem formar consórcios (art. 10).",
    ],
    armadilhas: [
      "Confundir pactuação entre gestores (Comissões) com controle social (Conselhos e Conferências).",
      "Dizer que hierarquização obriga cada município a ofertar todos os níveis.",
    ]
  },
  {
    id: "rx-saude-doenca", disciplinaId: "espec", topicos: [T(3)], assunto: "Processo saúde-doença",
    titulo: "Processo saúde-doença — modelos e conceitos", minutos: 10,
    pontos: [
      "Modelos explicativos em sequência histórica: mágico-religioso, miasmático, unicausal (microbiologia), multicausal, história natural da doença e determinação social.",
      "OMS (1946): completo bem-estar físico, mental e social, e não apenas ausência de doença — criticado por ser estático e inatingível.",
      "8ª Conferência (1986): saúde como RESULTANTE das condições de alimentação, habitação, educação, renda, meio ambiente, trabalho, transporte, emprego, lazer, liberdade, acesso e posse da terra e acesso a serviços.",
      "Lei 8.080, art. 3º: determinantes e condicionantes — alimentação, moradia, saneamento, meio ambiente, trabalho, renda, educação, atividade física, transporte, lazer, acesso a bens e serviços.",
      "Dahlgren e Whitehead: camadas concêntricas — indivíduo, estilo de vida, redes sociais e comunitárias, condições de vida e trabalho, macrodeterminantes.",
      "Brasil: transição epidemiológica prolongada e polarizada, com tripla carga (infecciosas, crônicas e causas externas).",
    ],
    armadilhas: [
      "Atribuir as camadas concêntricas a Leavell e Clark.",
      "Confundir o conceito da OMS com o conceito ampliado da 8ª CNS.",
    ]
  },
  {
    id: "rx-prevencao", disciplinaId: "espec", topicos: [T(4)], assunto: "Níveis de prevenção em saúde",
    titulo: "Níveis de prevenção — Leavell e Clark e além", minutos: 8,
    pontos: [
      "Primária (período pré-patogênico): promoção da saúde (inespecífica) e proteção específica (vacina, preservativo, fluoretação).",
      "Secundária (período patogênico): diagnóstico precoce e tratamento imediato, e LIMITAÇÃO DA INCAPACIDADE.",
      "Terciária: reabilitação e reintegração após a sequela instalada.",
      "Quaternária (Jamoulle): proteger da medicalização excessiva e de intervenções desnecessárias.",
      "Paradoxo da prevenção (Rose): medidas populacionais evitam mais casos no total, com pouco benefício individual.",
    ],
    armadilhas: [
      "Classificar rastreamento de assintomáticos como prevenção primária (é secundária).",
      "Pôr a limitação da incapacidade na prevenção terciária.",
    ]
  },
  {
    id: "rx-8142", disciplinaId: "espec", topicos: [T(5)], assunto: "Lei nº 8.142/1990",
    titulo: "Lei 8.142/1990 — controle social e repasses", minutos: 8,
    pontos: [
      "Conferência: a cada 4 anos; avalia a situação e PROPÕE diretrizes; convocada pelo Executivo ou, extraordinariamente, por ela própria ou pelo Conselho.",
      "Conselho: permanente e deliberativo; governo, prestadores, profissionais e usuários; usuários paritários (50%); decisões homologadas pelo chefe do poder.",
      "CONASS e CONASEMS têm representação no Conselho Nacional de Saúde. Regimento próprio aprovado pelo respectivo conselho.",
      "Repasse regular e automático; pelo menos 70% aos Municípios, restante aos Estados; Municípios consorciados podem remanejar recursos.",
      "Requisitos (art. 4º): Fundo de Saúde, Conselho paritário, plano de saúde, relatório de gestão, contrapartida no orçamento, comissão de PCCS (prazo de 2 anos).",
      "Sem os requisitos, os recursos são administrados pelo Estado (no caso do Município) ou pela União (no caso do Estado).",
    ],
    armadilhas: [
      "Inverter os papéis de Conferência e Conselho.",
      "Dizer que os recursos são perdidos quando faltam os requisitos.",
    ]
  },
  {
    id: "rx-visa-hist", disciplinaId: "espec", topicos: [T(6)], assunto: "Evolução da vigilância sanitária",
    titulo: "Vigilância sanitária no Brasil — linha do tempo", minutos: 8,
    pontos: [
      "Colônia e Império: polícia sanitária de portos e embarcações, fiscalização de alimentos e do exercício de médicos, cirurgiões e boticários.",
      "Década de 1970: Lei 5.991/1973 (comércio de medicamentos), Lei 6.360/1976 (registro e controle de produtos), Lei 6.437/1977 (infrações e sanções) e Secretaria Nacional de Vigilância Sanitária no Ministério.",
      "1988: a Constituição (art. 200) atribui ao SUS executar a vigilância sanitária e epidemiológica e a saúde do trabalhador.",
      "1990: a Lei 8.080 conceitua a vigilância sanitária (art. 6º, § 1º); no mesmo ano surge o Código de Defesa do Consumidor.",
      "1999: a Lei 9.782 define o SNVS e cria a Anvisa, autarquia sob regime especial.",
    ],
    armadilhas: [
      "Trocar números e anos das leis da década de 1970.",
      "Dizer que a Anvisa substituiu um órgão estadual (substituiu a secretaria federal do Ministério).",
    ]
  },
  {
    id: "rx-visa-conceito", disciplinaId: "espec", topicos: [T(7)], assunto: "Vigilância sanitária: conceitos e funções",
    titulo: "Vigilância sanitária — conceito, alcance e poder de polícia", minutos: 9,
    pontos: [
      "Conceito legal: ações capazes de ELIMINAR, DIMINUIR ou PREVENIR riscos à saúde e intervir nos problemas sanitários do meio ambiente, da produção e circulação de bens e da prestação de serviços.",
      "Abrange bens de consumo (da produção ao consumo) e serviços de interesse da saúde. Atua sobre o RISCO, antes do dano.",
      "Exerce poder de polícia administrativa: discricionariedade, autoexecutoriedade e coercibilidade. Interdição cautelar dispensa ordem judicial.",
      "Funções: normatização, registro, licenciamento, inspeção e fiscalização, monitoramento, análise laboratorial, educação e comunicação de risco.",
      "Registro de produtos é federal (Anvisa); licenciamento de estabelecimentos é local, conforme pactuação.",
      "SNVS: Anvisa, vigilâncias estaduais e municipais e laboratórios oficiais (Lacen, INCQS).",
    ],
    armadilhas: [
      "Usar o conceito de vigilância epidemiológica no lugar do de sanitária.",
      "Atribuir à vigilância sanitária a regulação econômica dos planos de saúde (é da ANS).",
    ]
  },
  {
    id: "rx-9782", disciplinaId: "espec", topicos: [T(8)], assunto: "Lei nº 9.782/1999",
    titulo: "Lei 9.782/1999 — SNVS e Anvisa", minutos: 10,
    pontos: [
      "Anvisa: autarquia sob regime especial, VINCULADA ao Ministério da Saúde, sede e foro no DF, prazo indeterminado, atuação nacional.",
      "Regime especial (Lei 13.848/2019, art. 3º): ausência de tutela ou subordinação hierárquica, autonomia funcional, decisória, administrativa e financeira, mandato fixo e estabilidade dos dirigentes.",
      "Finalidade: proteção da saúde pelo controle sanitário da produção e consumo de produtos e serviços, inclusive ambientes, processos, insumos e tecnologias, e controle de portos, aeroportos, fronteiras e recintos alfandegados.",
      "União (art. 2º): define a política nacional e o SNVS, normatiza, controla e fiscaliza, faz a vigilância de portos, aeroportos e fronteiras, coopera técnica e financeiramente.",
      "Delegação (art. 7º, § 1º): a Anvisa pode delegar a execução de atribuições, EXCETO, entre outras, coordenar o SNVS, anuir importação e exportação e conceder registro.",
      "Art. 8º: medicamentos de uso HUMANO, alimentos, cosméticos, saneantes, equipamentos médicos, imunobiológicos, sangue, órgãos e tecidos, radioisótopos e fumígeros.",
      "Diretoria Colegiada de até cinco membros, um deles o Diretor-Presidente, nomeados pelo Presidente da República após aprovação do Senado. Taxa de Fiscalização de Vigilância Sanitária.",
    ],
    armadilhas: [
      "Dizer que a Anvisa é subordinada ao Ministério (é vinculada).",
      "Incluir medicamentos veterinários (são do Ministério da Agricultura).",
    ]
  },
  {
    id: "rx-3029", disciplinaId: "espec", topicos: [T(9)], assunto: "Decreto nº 3.029/1999",
    titulo: "Decreto 3.029/1999 — Regulamento da Anvisa", minutos: 7,
    pontos: [
      "Aprova o Regulamento da Anvisa: natureza, finalidade, competências, estrutura e funcionamento, repetindo e detalhando a Lei 9.782.",
      "Estrutura: Diretoria Colegiada, Procuradoria, Corregedoria, Ouvidoria e Conselho Consultivo, além de unidades especializadas.",
      "Diretoria Colegiada: diretrizes estratégicas, edição de normas e julgamento, em grau de recurso, das decisões da Agência.",
      "Conselho Consultivo: no mínimo, União, Estados, DF, Municípios, produtores, comerciantes, comunidade científica e usuários.",
      "Ouvidor atua sem subordinação hierárquica (Lei 13.848/2019).",
      "Competências incluem interditar locais e proibir fabricação e comercialização em caso de violação ou risco iminente, e administrar e arrecadar a Taxa de Fiscalização.",
    ],
    armadilhas: [
      "Incluir CNS ou CIT na estrutura da Anvisa.",
      "Atribuir caráter deliberativo ao Conselho Consultivo.",
    ]
  },
  {
    id: "rx-14133", disciplinaId: "espec", topicos: [T(10)], assunto: "Lei nº 14.133/2021",
    titulo: "Lei 14.133/2021 — números e conceitos que mais caem", minutos: 15,
    pontos: [
      "Modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo. Tomada de preços e convite foram extintos.",
      "Pregão: obrigatório para bens e serviços comuns, critério menor preço ou maior desconto.",
      "Fases: preparatória, edital, propostas e lances, julgamento, HABILITAÇÃO, recursal e homologação (habilitação depois do julgamento, como regra).",
      "Agente de contratação: servidor efetivo ou empregado permanente; no pregão, pregoeiro. Comissão de no mínimo 3 em bens e serviços especiais e no diálogo competitivo.",
      "Inexigibilidade: competição inviável (fornecedor exclusivo, artista consagrado, serviço técnico especializado com notória especialização, credenciamento, imóvel com características únicas).",
      "Dispensa emergencial: até 1 ano da ocorrência, vedadas prorrogação e recontratação.",
      "Alteração unilateral: 25% (acréscimos e supressões); 50% para acréscimos em reforma de edifício ou equipamento.",
      "Contínuos: até 5 anos, prorrogáveis até 10. Ata de registro de preços: 1 ano, prorrogável por igual período.",
      "Sanções: advertência; multa de 0,5% a 30%; impedimento (ente que aplicou, até 3 anos); inidoneidade (todos os entes, 3 a 6 anos).",
      "ETP: primeira etapa do planejamento. PNCP: divulgação centralizada e obrigatória.",
    ],
    armadilhas: [
      "Usar prazos da Lei 8.666 (180 dias na emergência, 60 meses nos contínuos).",
      "Trocar alcance e prazo entre impedimento e inidoneidade.",
    ]
  },
  {
    id: "rx-prc1", disciplinaId: "espec", topicos: [T(11)], assunto: "Portaria de Consolidação nº 1/2017",
    titulo: "PRC nº 1 — usuários, planejamento e funcionamento", minutos: 9,
    pontos: [
      "Consolida as normas sobre direitos e deveres dos usuários da saúde e sobre a organização e o funcionamento do SUS.",
      "Direitos do usuário: acesso ordenado, tratamento adequado e efetivo, atendimento humanizado e sem discriminação, nome social em todo documento, consentimento livre e esclarecido.",
      "Deveres do usuário: prestar informações sobre sua saúde, seguir o plano acordado ou assumir a recusa, respeitar profissionais e usuários.",
      "Planejamento: Plano de Saúde (4 anos), Programação Anual de Saúde e Relatório de Gestão; RAG ao Conselho até 30 de março.",
      "Cadastros e sistemas de organização, como o CNES, cadastro oficial de todos os estabelecimentos de saúde.",
    ],
    armadilhas: [
      "Confundir instrumentos do SUS (PS, PAS, RAG) com instrumentos orçamentários (PPA, LDO, LOA).",
      "Condicionar o nome social à alteração do registro civil.",
    ]
  },
  {
    id: "rx-prc2", disciplinaId: "espec", topicos: [T(12)], assunto: "Portaria de Consolidação nº 2/2017",
    titulo: "PRC nº 2 — políticas nacionais de saúde", minutos: 10,
    pontos: [
      "Consolida as políticas nacionais: Atenção Básica (PNAB), Promoção da Saúde, Regulação, Educação Permanente, Saúde do Trabalhador, Medicamentos, Práticas Integrativas, Atenção Hospitalar e políticas de equidade (população negra, LGBT, povos indígenas, homem, mulher, criança, pessoa idosa).",
      "PNAB: atenção básica como porta de entrada preferencial, centro de comunicação e ordenadora; diretrizes como territorialização, população adscrita, longitudinalidade, coordenação do cuidado e resolutividade.",
      "Regulação: de sistemas, da atenção à saúde e do acesso à assistência.",
      "PNPS: temas como alimentação saudável, práticas corporais, tabaco, álcool, mobilidade segura, cultura de paz e desenvolvimento sustentável.",
      "Educação permanente: aprendizagem no trabalho a partir da problematização do processo de trabalho.",
      "População negra: reconhece o racismo e o racismo institucional como determinantes sociais.",
    ],
    armadilhas: [
      "Dizer que a atenção básica é porta de entrada exclusiva.",
      "Trocar a ordem das dimensões da regulação.",
    ]
  },
  {
    id: "rx-prc3", disciplinaId: "espec", topicos: [T(13)], assunto: "Portaria de Consolidação nº 3/2017",
    titulo: "PRC nº 3 — Redes de Atenção à Saúde", minutos: 10,
    pontos: [
      "Consolida as normas das redes do SUS, inclusive as diretrizes das RAS.",
      "RAS: arranjos de ações e serviços de diferentes densidades tecnológicas, integrados por sistemas de apoio técnico, logístico e de gestão. Organização POLIÁRQUICA, com a atenção primária como centro de comunicação.",
      "Elementos constitutivos: população, estrutura operacional e modelo de atenção.",
      "Redes temáticas: materno-infantil (Rede Cegonha, reestruturada como Rede Alyne em 2024), Urgência e Emergência, Atenção Psicossocial, Pessoa com Deficiência e Doenças Crônicas.",
      "RAPS: atenção básica, CAPS, urgência, residencial transitória, hospitalar, desinstitucionalização (SRT) e reabilitação psicossocial.",
      "RUE: promoção e vigilância, atenção básica, SAMU 192, sala de estabilização, Força Nacional, UPA 24h, hospitalar e domiciliar.",
    ],
    armadilhas: [
      "Descrever a RAS como pirâmide hierárquica.",
      "Confundir SRT (moradia) com atenção residencial transitória.",
    ]
  },
  {
    id: "rx-prc4", disciplinaId: "espec", topicos: [T(14)], assunto: "Portaria de Consolidação nº 4/2017",
    titulo: "PRC nº 4 — sistemas e subsistemas do SUS", minutos: 9,
    pontos: [
      "Consolida as normas dos sistemas e subsistemas, como o Sistema Nacional de Transplantes, o SISLAB e a vigilância epidemiológica (notificação compulsória).",
      "Notificação imediata: até 24 horas, pelo meio mais rápido. Semanal: até 7 dias. Suspeitos também são notificados.",
      "Obrigação de notificar: médicos, demais profissionais e responsáveis por serviços públicos e privados; o cidadão pode comunicar.",
      "Notificação negativa: comunicação semanal de que não houve casos.",
      "Transplantes: Centrais Estaduais e lista única com critérios técnicos.",
      "SISLAB: redes de laboratórios por complexidade; Lacen como referência estadual.",
    ],
    armadilhas: [
      "Exigir confirmação laboratorial para notificar.",
      "Restringir a obrigação de notificar aos serviços públicos.",
    ]
  },
  {
    id: "rx-prc5", disciplinaId: "espec", topicos: [T(15)], assunto: "Portaria de Consolidação nº 5/2017",
    titulo: "PRC nº 5 — ações e serviços de saúde", minutos: 9,
    pontos: [
      "Consolida as normas de ações e serviços, como o padrão de potabilidade da água, o regulamento técnico de hemoterapia e o Programa Nacional de Segurança do Paciente.",
      "Água: controle da qualidade pelo responsável pelo abastecimento; vigilância pela autoridade de saúde pública (Vigiagua).",
      "Sangue: doação voluntária, anônima, altruísta e não remunerada. O regulamento técnico foi redefinido pela Portaria GM/MS nº 11.685/2026 (vigente desde 30/09/2026), que mudou critérios de doadores, como a idade dos doadores de repetição: confira o texto novo antes de decorar números antigos.",
      "Segurança do paciente: incidente é o evento que poderia ter causado ou causou dano; evento adverso é o incidente que resultou em dano.",
      "Segurança do paciente: identificação, higiene das mãos, cirurgia segura, medicamentos, quedas e lesão por pressão.",
    ],
    armadilhas: [
      "Inverter controle e vigilância da água.",
      "Estudar critérios de doação pela norma antiga (Portaria nº 158/2016), revogada.",
    ]
  },
  {
    id: "rx-prc6", disciplinaId: "espec", topicos: [T(16)], assunto: "Portaria de Consolidação nº 6/2017",
    titulo: "PRC nº 6 — financiamento e transferências", minutos: 9,
    pontos: [
      "Consolida as normas sobre o financiamento e a transferência dos recursos federais para as ações e serviços de saúde.",
      "Transferência fundo a fundo, regular e automática, do Fundo Nacional aos Fundos estaduais, distrital e municipais.",
      "Dois blocos: Manutenção das Ações e Serviços Públicos de Saúde (antigo Custeio) e Estruturação da Rede de Serviços Públicos de Saúde (antigo Investimento). Os seis blocos antigos foram extintos em 2017.",
      "Estruturação: equipamentos, obras novas e ampliações. Manutenção: funcionamento; admite reforma de imóvel existente, não obra nova.",
      "Vedações: inativos; ativos só se contratados exclusivamente para ações do Plano de Saúde; consultoria de servidores do próprio quadro.",
    ],
    armadilhas: [
      "Citar os seis blocos antigos como vigentes.",
      "Permitir obra nova com recurso de manutenção.",
    ]
  },
];

export const FLASHCARDS_EXEC = [
  { id: "fx1", disciplinaId: "espec", topicos: [T(1)], assunto: "Lei nº 8.080/1990", frente: "Planejamento e orçamento no SUS (art. 36)", verso: "ASCENDENTE, do local ao federal. Vedado financiar ação fora do plano, salvo emergência ou calamidade." },
  { id: "fx2", disciplinaId: "espec", topicos: [T(1)], assunto: "Lei nº 8.080/1990", frente: "Incorporação de tecnologia no SUS", verso: "Ministério da Saúde, assessorado pela Conitec. Prazo: 180 dias + 90 de prorrogação." },
  { id: "fx3", disciplinaId: "espec", topicos: [T(2)], assunto: "Organização e funcionamento do SUS", frente: "Rol mínimo da Região de Saúde (Decreto 7.508)", verso: "Atenção primária; urgência e emergência; psicossocial; ambulatorial especializada e hospitalar; vigilância em saúde." },
  { id: "fx4", disciplinaId: "espec", topicos: [T(2)], assunto: "Organização e funcionamento do SUS", frente: "RENASES x RENAME", verso: "RENASES = ações e serviços. RENAME = medicamentos." },
  { id: "fx5", disciplinaId: "espec", topicos: [T(3)], assunto: "Processo saúde-doença", frente: "Modelo em camadas concêntricas", verso: "Dahlgren e Whitehead: indivíduo → estilo de vida → redes sociais → condições de vida e trabalho → macrodeterminantes." },
  { id: "fx6", disciplinaId: "espec", topicos: [T(3)], assunto: "Processo saúde-doença", frente: "Conceito ampliado de saúde (1986)", verso: "8ª CNS: saúde como resultante das condições de alimentação, habitação, educação, renda, trabalho, lazer, acesso à terra e a serviços." },
  { id: "fx7", disciplinaId: "espec", topicos: [T(4)], assunto: "Níveis de prevenção em saúde", frente: "Os 5 níveis de Leavell e Clark", verso: "Promoção e proteção específica (1ª); diagnóstico precoce/tratamento imediato e limitação da incapacidade (2ª); reabilitação (3ª)." },
  { id: "fx8", disciplinaId: "espec", topicos: [T(4)], assunto: "Níveis de prevenção em saúde", frente: "Prevenção quaternária", verso: "Jamoulle: evitar sobremedicalização e intervenções desnecessárias." },
  { id: "fx9", disciplinaId: "espec", topicos: [T(5)], assunto: "Lei nº 8.142/1990", frente: "Requisitos para receber recursos (art. 4º)", verso: "Fundo, Conselho paritário, Plano, Relatório de gestão, Contrapartida, Comissão de PCCS (2 anos)." },
  { id: "fx10", disciplinaId: "espec", topicos: [T(5)], assunto: "Lei nº 8.142/1990", frente: "Partilha dos recursos de cobertura", verso: "Pelo menos 70% aos Municípios; o restante aos Estados." },
  { id: "fx11", disciplinaId: "espec", topicos: [T(6)], assunto: "Evolução da vigilância sanitária", frente: "Leis da década de 1970", verso: "5.991/73: comércio de medicamentos. 6.360/76: registro de produtos. 6.437/77: infrações e sanções." },
  { id: "fx12", disciplinaId: "espec", topicos: [T(6)], assunto: "Evolução da vigilância sanitária", frente: "Marco de 1999", verso: "Lei 9.782: define o SNVS e cria a Anvisa, autarquia sob regime especial." },
  { id: "fx13", disciplinaId: "espec", topicos: [T(7)], assunto: "Vigilância sanitária: conceitos e funções", frente: "Verbos do conceito legal de VISA", verso: "ELIMINAR, DIMINUIR ou PREVENIR riscos — sobre meio ambiente, bens e serviços." },
  { id: "fx14", disciplinaId: "espec", topicos: [T(7)], assunto: "Vigilância sanitária: conceitos e funções", frente: "Atributos do poder de polícia", verso: "Discricionariedade, autoexecutoriedade e coercibilidade." },
  { id: "fx15", disciplinaId: "espec", topicos: [T(8)], assunto: "Lei nº 9.782/1999", frente: "Natureza da Anvisa", verso: "Autarquia sob regime especial, VINCULADA (não subordinada) ao Ministério da Saúde; sede no DF." },
  { id: "fx16", disciplinaId: "espec", topicos: [T(8)], assunto: "Lei nº 9.782/1999", frente: "O que a Anvisa NÃO delega", verso: "Entre outras: coordenar o SNVS, anuir importação/exportação e conceder registro de produtos." },
  { id: "fx17", disciplinaId: "espec", topicos: [T(9)], assunto: "Decreto nº 3.029/1999", frente: "Estrutura da Anvisa", verso: "Diretoria Colegiada, Procuradoria, Corregedoria, Ouvidoria e Conselho Consultivo." },
  { id: "fx18", disciplinaId: "espec", topicos: [T(9)], assunto: "Decreto nº 3.029/1999", frente: "Composição mínima do Conselho Consultivo", verso: "União, Estados, DF, Municípios, produtores, comerciantes, comunidade científica e usuários." },
  { id: "fx19", disciplinaId: "espec", topicos: [T(10)], assunto: "Lei nº 14.133/2021", frente: "Modalidades de licitação", verso: "Pregão, concorrência, concurso, leilão e diálogo competitivo." },
  { id: "fx20", disciplinaId: "espec", topicos: [T(10)], assunto: "Lei nº 14.133/2021", frente: "Dispensa emergencial", verso: "Até 1 ano da ocorrência; vedadas prorrogação e recontratação da mesma empresa." },
  { id: "fx21", disciplinaId: "espec", topicos: [T(10)], assunto: "Lei nº 14.133/2021", frente: "Impedimento x inidoneidade", verso: "Impedimento: ente que aplicou, até 3 anos. Inidoneidade: todos os entes, 3 a 6 anos." },
  { id: "fx22", disciplinaId: "espec", topicos: [T(10)], assunto: "Lei nº 14.133/2021", frente: "Limites da alteração unilateral", verso: "25% (acréscimos e supressões); 50% para acréscimos em reforma de edifício ou equipamento." },
  { id: "fx23", disciplinaId: "espec", topicos: [T(11)], assunto: "Portaria de Consolidação nº 1/2017", frente: "Instrumentos de planejamento do SUS", verso: "Plano de Saúde (4 anos), Programação Anual de Saúde e Relatório de Gestão (ao Conselho até 30/03)." },
  { id: "fx24", disciplinaId: "espec", topicos: [T(12)], assunto: "Portaria de Consolidação nº 2/2017", frente: "Dimensões da Política Nacional de Regulação", verso: "Regulação de sistemas, da atenção à saúde e do acesso à assistência." },
  { id: "fx25", disciplinaId: "espec", topicos: [T(13)], assunto: "Portaria de Consolidação nº 3/2017", frente: "Elementos constitutivos das RAS", verso: "População, estrutura operacional e modelo de atenção. Organização poliárquica." },
  { id: "fx26", disciplinaId: "espec", topicos: [T(14)], assunto: "Portaria de Consolidação nº 4/2017", frente: "Prazos da notificação compulsória", verso: "Imediata: até 24 horas. Semanal: até 7 dias." },
  { id: "fx27", disciplinaId: "espec", topicos: [T(15)], assunto: "Portaria de Consolidação nº 5/2017", frente: "Água: controle x vigilância", verso: "Controle: responsável pelo abastecimento. Vigilância: autoridade de saúde pública." },
  { id: "fx28", disciplinaId: "espec", topicos: [T(15)], assunto: "Portaria de Consolidação nº 5/2017", frente: "Incidente x evento adverso", verso: "Incidente: poderia ter causado ou causou dano. Evento adverso: incidente que resultou em dano." },
  { id: "fx29", disciplinaId: "espec", topicos: [T(16)], assunto: "Portaria de Consolidação nº 6/2017", frente: "Blocos de financiamento vigentes", verso: "Manutenção das Ações e Serviços Públicos de Saúde e Estruturação da Rede de Serviços Públicos de Saúde." },
  { id: "fx30", disciplinaId: "espec", topicos: [T(16)], assunto: "Portaria de Consolidação nº 6/2017", frente: "Obra nova com recurso de manutenção?", verso: "Vedado. Manutenção admite só reforma de imóvel já existente; obra nova é Estruturação." },
];

export const MAPAS_EXEC = [
  {
    id: "mx1", disciplinaId: "espec", titulo: "Vigilância sanitária: SNVS e Anvisa",
    raiz: { nome: "Vigilância sanitária", filhos: [
      { nome: "Conceito (Lei 8.080)", filhos: [
        { nome: "Eliminar, diminuir, prevenir riscos" },
        { nome: "Bens de consumo: da produção ao consumo" },
        { nome: "Prestação de serviços de saúde" } ] },
      { nome: "SNVS (Lei 9.782)", filhos: [
        { nome: "União: política, normas, portos e aeroportos" },
        { nome: "Estados e Municípios: execução descentralizada" },
        { nome: "Laboratórios: Lacen e INCQS" } ] },
      { nome: "Anvisa", filhos: [
        { nome: "Autarquia especial, vinculada ao MS" },
        { nome: "Diretoria Colegiada (até 5)" },
        { nome: "Procuradoria, Corregedoria, Ouvidoria" },
        { nome: "Conselho Consultivo" } ] },
      { nome: "Poder de polícia", filhos: [
        { nome: "Autoexecutoriedade" },
        { nome: "Coercibilidade" },
        { nome: "Discricionariedade" } ] }
    ] }
  },
  {
    id: "mx2", disciplinaId: "espec", titulo: "Lei 14.133/2021",
    raiz: { nome: "Licitações e contratos", filhos: [
      { nome: "Modalidades", filhos: [
        { nome: "Pregão: bens e serviços comuns" },
        { nome: "Concorrência" },
        { nome: "Concurso: trabalho técnico ou artístico" },
        { nome: "Leilão: alienação" },
        { nome: "Diálogo competitivo: inovação" } ] },
      { nome: "Contratação direta", filhos: [
        { nome: "Inexigibilidade: competição inviável" },
        { nome: "Dispensa: emergência até 1 ano" } ] },
      { nome: "Contratos", filhos: [
        { nome: "Contínuos: 5 anos, até 10" },
        { nome: "Alteração unilateral: 25% / 50%" },
        { nome: "Ata de registro de preços: 1 + 1 ano" } ] },
      { nome: "Sanções", filhos: [
        { nome: "Advertência" },
        { nome: "Multa: 0,5% a 30%" },
        { nome: "Impedimento: até 3 anos, um ente" },
        { nome: "Inidoneidade: 3 a 6 anos, todos" } ] }
    ] }
  },
  {
    id: "mx3", disciplinaId: "espec", titulo: "Portarias de Consolidação 1 a 6",
    raiz: { nome: "PRC GM/MS de 28/09/2017", filhos: [
      { nome: "nº 1: usuários, organização e funcionamento", filhos: [
        { nome: "Direitos e deveres dos usuários" },
        { nome: "Planejamento: PS, PAS, RAG" } ] },
      { nome: "nº 2: políticas nacionais", filhos: [
        { nome: "PNAB, PNPS, Regulação" },
        { nome: "Políticas de equidade" } ] },
      { nome: "nº 3: redes", filhos: [
        { nome: "RAS, RUE, RAPS" },
        { nome: "Rede Alyne (antiga Cegonha)" } ] },
      { nome: "nº 4: sistemas e subsistemas", filhos: [
        { nome: "Notificação compulsória" },
        { nome: "Transplantes, SISLAB" } ] },
      { nome: "nº 5: ações e serviços", filhos: [
        { nome: "Água para consumo humano" },
        { nome: "Hemoterapia (Portaria 11.685/2026), segurança do paciente" } ] },
      { nome: "nº 6: financiamento", filhos: [
        { nome: "Fundo a fundo" },
        { nome: "Blocos: Manutenção e Estruturação" } ] }
    ] }
  },
];
