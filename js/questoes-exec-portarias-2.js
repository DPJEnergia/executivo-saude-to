/* questoes-exec-portarias-2.js — segundo lote dos itens 11 a 16 do Anexo I: Portarias de
 * Consolidação GM/MS nº 1 a 6/2017. Quatro questões novas por portaria.
 * Questões inéditas, 4 alternativas, padrão FGV.
 *
 * Fica de fora, de propósito, a hemoterapia da PRC nº 5: o regulamento foi redefinido pela
 * Portaria GM/MS nº 11.685/2026, e os critérios novos ainda não foram conferidos no texto. */

const T = n => `espec-executivo-em-saude-${n}`;

export const QUESTOES_EXEC_PORTARIAS_2 = [
  /* ---------- PRC nº 1 ---------- */
  {
    id: "e281", disciplinaId: "espec", topicos: [T(11)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 1/2017", palavras: ["PRC 1", "consentimento", "direitos dos usuários"],
    contexto: "Um paciente internado recusou a realização de uma endoscopia que havia consentido na véspera. A equipe afirmou que, uma vez dado, o consentimento não poderia ser retirado.",
    comando: "Segundo os direitos dos usuários consolidados na PRC nº 1/2017, a afirmação da equipe está",
    alternativas: [
      { k: "A", texto: "correta, pois o consentimento é irrevogável após assinado.", porqueErrada: "O consentimento pode ser revogado a qualquer instante." },
      { k: "B", texto: "incorreta, pois o consentimento livre, voluntário e esclarecido pode ser revogado a qualquer instante, salvo nos casos que acarretem risco à saúde pública.", porqueErrada: "" },
      { k: "C", texto: "correta, salvo se o paciente pagar pelo procedimento.", porqueErrada: "Não há relação entre pagamento e revogação do consentimento; e o SUS não cobra do usuário." },
      { k: "D", texto: "incorreta, mas a revogação depende de autorização judicial.", porqueErrada: "A revogação é ato do próprio usuário, sem necessidade de autorização judicial." },
    ],
    correta: "B",
    justificativa: "Os direitos dos usuários da saúde, consolidados na PRC nº 1/2017, asseguram o consentimento livre, voluntário e esclarecido a quaisquer procedimentos diagnósticos, preventivos ou terapêuticos, salvo nos casos que acarretem risco à saúde pública, considerando que o consentimento anteriormente dado poderá ser revogado a qualquer instante, por decisão livre e esclarecida.",
    dicaFGV: "Autonomia do usuário: consentir, recusar e revogar. A exceção é o risco à saúde pública.",
    tags: ["direitos do usuário"]
  },
  {
    id: "e282", disciplinaId: "espec", topicos: [T(11)], dificuldade: "facil", tempoAlvo: 130,
    assunto: "Portaria de Consolidação nº 1/2017", palavras: ["PRC 1", "Programação Anual de Saúde"],
    contexto: "O Plano Estadual de Saúde 2024–2027 prevê ampliar a cobertura de mamografia. A equipe precisa definir, para 2027, as ações, metas e recursos que darão concretude a esse objetivo.",
    comando: "O instrumento de planejamento adequado para isso é a",
    alternativas: [
      { k: "A", texto: "Programação Anual de Saúde, que operacionaliza as intenções expressas no Plano de Saúde.", porqueErrada: "" },
      { k: "B", texto: "Conferência Estadual de Saúde, que fixa metas anuais.", porqueErrada: "A Conferência propõe diretrizes a cada quatro anos; não é instrumento anual de programação." },
      { k: "C", texto: "Relatório Anual de Gestão, que define as metas do ano seguinte.", porqueErrada: "O RAG apresenta os RESULTADOS alcançados; não programa." },
      { k: "D", texto: "Lei de Diretrizes Orçamentárias, que substitui o plano setorial.", porqueErrada: "A LDO é instrumento orçamentário de governo e não substitui os instrumentos do SUS." },
    ],
    correta: "A",
    justificativa: "Nas normas de planejamento do SUS consolidadas na PRC nº 1/2017, a Programação Anual de Saúde é o instrumento que operacionaliza as intenções expressas no Plano de Saúde, anualizando metas e prevendo a alocação de recursos orçamentários. O Relatório de Gestão apresenta os resultados.",
    dicaFGV: "Plano = intenção de 4 anos. Programação = o que fazer neste ano. Relatório = o que foi feito.",
    tags: ["planejamento"]
  },
  {
    id: "e283", disciplinaId: "espec", topicos: [T(11)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Portaria de Consolidação nº 1/2017", palavras: ["PRC 1", "relatório quadrimestral", "audiência pública"],
    contexto: "Um vereador cobrou da Secretaria Municipal de Saúde a prestação de contas da execução do primeiro quadrimestre do ano, na Câmara.",
    comando: "Segundo a Lei Complementar nº 141/2012, refletida nas normas de planejamento do SUS, o gestor deve apresentar o Relatório Detalhado do Quadrimestre Anterior",
    alternativas: [
      { k: "A", texto: "em audiência pública na Casa Legislativa do respectivo ente, até o final dos meses de maio, setembro e fevereiro.", porqueErrada: "" },
      { k: "B", texto: "apenas ao Ministério da Saúde, por meio eletrônico, uma vez por ano.", porqueErrada: "O relatório é quadrimestral e apresentado em audiência pública no Legislativo." },
      { k: "C", texto: "somente ao Tribunal de Contas, em sessão reservada.", porqueErrada: "A apresentação é pública e na Casa Legislativa." },
      { k: "D", texto: "na Conferência Municipal de Saúde, a cada quatro anos.", porqueErrada: "A periodicidade é quadrimestral." },
    ],
    correta: "A",
    justificativa: "A LC nº 141/2012 (art. 36, § 5º) determina que o gestor do SUS apresente, até o final dos meses de maio, setembro e fevereiro, em audiência pública na Casa Legislativa do respectivo ente, o Relatório Detalhado referente ao quadrimestre anterior, com montante e fonte dos recursos aplicados, auditorias realizadas e oferta e produção de serviços.",
    dicaFGV: "Quadrimestre termina em abril, agosto e dezembro; o relatório vem no mês seguinte: maio, setembro e fevereiro.",
    tags: ["planejamento", "transparência"]
  },
  {
    id: "e284", disciplinaId: "espec", topicos: [T(11)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 1/2017", palavras: ["PRC 1", "comprometimento dos gestores", "direitos dos usuários"],
    contexto: "A Carta dos Direitos dos Usuários, incorporada à PRC nº 1/2017, não trata apenas de direitos e deveres das pessoas usuárias, mas também de compromissos de quem administra o sistema.",
    comando: "Entre esses compromissos, inclui-se o de os gestores do SUS",
    alternativas: [
      { k: "A", texto: "garantirem que as ouvidorias sejam extintas onde houver Conselho de Saúde.", porqueErrada: "Ouvidoria e Conselho são canais complementares; nenhum substitui o outro." },
      { k: "B", texto: "assumirem a responsabilidade pelo cumprimento dos princípios da Carta, promovendo o respeito e o cumprimento desses direitos e deveres.", porqueErrada: "" },
      { k: "C", texto: "cobrarem taxa de quem descumprir os deveres de usuário.", porqueErrada: "Não há sanção pecuniária ao usuário." },
      { k: "D", texto: "restringirem o acesso a quem não apresentar comprovante de residência no município.", porqueErrada: "Restrição incompatível com a universalidade." },
    ],
    correta: "B",
    justificativa: "A Carta dos Direitos dos Usuários da Saúde, consolidada na PRC nº 1/2017, estabelece que toda pessoa tem direito ao comprometimento dos gestores da saúde para que os princípios da Carta sejam cumpridos, cabendo aos gestores das três esferas promover o respeito e o cumprimento desses direitos e deveres.",
    dicaFGV: "A Carta tem três atores: usuário (direitos e deveres), trabalhador e gestor (compromisso de fazer cumprir).",
    tags: ["direitos do usuário"]
  },

  /* ---------- PRC nº 2 ---------- */
  {
    id: "e285", disciplinaId: "espec", topicos: [T(12)], dificuldade: "facil", tempoAlvo: 130,
    assunto: "Portaria de Consolidação nº 2/2017", palavras: ["PRC 2", "PNAB", "equipe de Saúde da Família"],
    contexto: "Um município vai credenciar nova equipe de Saúde da Família e precisa saber a composição mínima exigida pela Política Nacional de Atenção Básica, consolidada na PRC nº 2/2017.",
    comando: "A composição mínima da equipe de Saúde da Família é:",
    alternativas: [
      { k: "A", texto: "médico, enfermeiro, auxiliar ou técnico de enfermagem e agente comunitário de saúde.", porqueErrada: "" },
      { k: "B", texto: "médico, dentista e farmacêutico.", porqueErrada: "Profissionais de saúde bucal podem compor a equipe, mas não integram o mínimo; farmacêutico não está no mínimo." },
      { k: "C", texto: "enfermeiro e agente comunitário de saúde, sem médico.", porqueErrada: "O médico integra a composição mínima." },
      { k: "D", texto: "médico especialista em clínica médica, pediatra e ginecologista.", porqueErrada: "A eSF é composta por médico preferencialmente de família e comunidade, não por especialistas focais." },
    ],
    correta: "A",
    justificativa: "A PNAB define como composição mínima da equipe de Saúde da Família: médico, preferencialmente da especialidade medicina de família e comunidade; enfermeiro, preferencialmente especialista em saúde da família; auxiliar ou técnico de enfermagem; e agente comunitário de saúde. Podem ser acrescentados agente de combate às endemias e profissionais de saúde bucal.",
    dicaFGV: "Mínimo da eSF: médico + enfermeiro + auxiliar/técnico de enfermagem + ACS. Saúde bucal é acréscimo possível, não exigência.",
    tags: ["atenção básica"]
  },
  {
    id: "e286", disciplinaId: "espec", topicos: [T(12)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 2/2017", palavras: ["PRC 2", "Política Nacional de Medicamentos", "RENAME"],
    contexto: "Ao revisar a lista estadual de medicamentos, a equipe tomou como referência uma diretriz da Política Nacional de Medicamentos, consolidada na PRC nº 2/2017.",
    comando: "É diretriz da Política Nacional de Medicamentos:",
    alternativas: [
      { k: "A", texto: "a adoção de relação de medicamentos essenciais e a promoção do uso racional de medicamentos.", porqueErrada: "" },
      { k: "B", texto: "a liberação da venda de antimicrobianos sem prescrição.", porqueErrada: "Contraria o uso racional de medicamentos." },
      { k: "C", texto: "a extinção da regulamentação sanitária de medicamentos.", porqueErrada: "A regulamentação sanitária é diretriz da política." },
      { k: "D", texto: "a substituição da assistência farmacêutica pela compra direta pelos usuários.", porqueErrada: "A política reorienta a assistência farmacêutica, não a extingue." },
    ],
    correta: "A",
    justificativa: "A Política Nacional de Medicamentos tem como diretrizes, entre outras, a adoção de relação de medicamentos essenciais, a regulamentação sanitária de medicamentos, a reorientação da assistência farmacêutica, a promoção do uso racional de medicamentos, o desenvolvimento científico e tecnológico, a promoção da produção de medicamentos e a garantia da segurança, eficácia e qualidade.",
    dicaFGV: "RENAME e uso racional são as duas diretrizes mais cobradas. Alternativas que liberam, extinguem ou substituem contrariam o espírito da política.",
    tags: ["assistência farmacêutica"]
  },
  {
    id: "e287", disciplinaId: "espec", topicos: [T(12)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 2/2017", palavras: ["PRC 2", "práticas integrativas", "PNPIC"],
    contexto: "Uma Unidade Básica de Saúde passou a oferecer acupuntura, auriculoterapia e grupos de plantas medicinais, integrados ao cuidado da equipe de Saúde da Família.",
    comando: "A política consolidada na PRC nº 2/2017 que fundamenta essa oferta é a",
    alternativas: [
      { k: "A", texto: "Política Nacional de Práticas Integrativas e Complementares no SUS (PNPIC).", porqueErrada: "" },
      { k: "B", texto: "Política Nacional de Atenção Hospitalar.", porqueErrada: "Trata da organização dos hospitais na rede." },
      { k: "C", texto: "Política Nacional de Regulação.", porqueErrada: "Trata da regulação de sistemas, atenção e acesso." },
      { k: "D", texto: "Política Nacional de Saúde do Trabalhador e da Trabalhadora.", porqueErrada: "Trata da saúde relacionada ao trabalho." },
    ],
    correta: "A",
    justificativa: "A PNPIC, consolidada na PRC nº 2/2017, institucionaliza no SUS práticas como medicina tradicional chinesa/acupuntura, homeopatia, plantas medicinais e fitoterapia, termalismo social/crenoterapia e medicina antroposófica, ampliadas posteriormente com outras práticas, preferencialmente ofertadas na atenção básica.",
    dicaFGV: "Acupuntura, homeopatia, fitoterapia no SUS = PNPIC. Associação direta.",
    tags: ["políticas"]
  },
  {
    id: "e288", disciplinaId: "espec", topicos: [T(12)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 2/2017", palavras: ["PRC 2", "saúde do trabalhador", "CEREST", "RENAST"],
    contexto: "Uma série de casos de intoxicação por agrotóxicos em trabalhadores rurais exige apoio técnico especializado em saúde do trabalhador para a rede de uma região do Tocantins.",
    comando: "No âmbito da Política Nacional de Saúde do Trabalhador e da Trabalhadora, consolidada na PRC nº 2/2017, o serviço de retaguarda técnica especializada é o",
    alternativas: [
      { k: "A", texto: "Centro de Referência em Saúde do Trabalhador (CEREST), integrante da RENAST.", porqueErrada: "" },
      { k: "B", texto: "Centro de Atenção Psicossocial (CAPS).", porqueErrada: "Integra a RAPS, voltada à saúde mental." },
      { k: "C", texto: "Laboratório Central de Saúde Pública, que substitui a vigilância em saúde do trabalhador.", porqueErrada: "O Lacen apoia com análises, mas não é a retaguarda especializada em saúde do trabalhador." },
      { k: "D", texto: "Instituto Nacional do Seguro Social (INSS).", porqueErrada: "O INSS é órgão previdenciário, fora do SUS." },
    ],
    correta: "A",
    justificativa: "A Política Nacional de Saúde do Trabalhador e da Trabalhadora tem como estratégia central a Rede Nacional de Atenção Integral à Saúde do Trabalhador (RENAST), da qual os Centros de Referência em Saúde do Trabalhador (CEREST) são o suporte técnico especializado e polos irradiadores das ações de vigilância e assistência na rede do SUS.",
    dicaFGV: "CEREST = retaguarda técnica em saúde do trabalhador, dentro da RENAST. Não confunda com CAPS nem com INSS.",
    tags: ["saúde do trabalhador"]
  },

  /* ---------- PRC nº 3 ---------- */
  {
    id: "e289", disciplinaId: "espec", topicos: [T(13)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 3/2017", palavras: ["PRC 3", "RAPS", "CAPS"],
    contexto: "Uma região de saúde precisa de serviço especializado para atender adolescentes com sofrimento psíquico grave e outro para adultos com uso problemático de crack e álcool.",
    comando: "Na RAPS, consolidada na PRC nº 3/2017, os serviços adequados são, respectivamente,",
    alternativas: [
      { k: "A", texto: "CAPSi e CAPS AD.", porqueErrada: "" },
      { k: "B", texto: "CAPS AD e CAPSi.", porqueErrada: "Ordem invertida." },
      { k: "C", texto: "Unidade de Acolhimento e hospital psiquiátrico.", porqueErrada: "Não correspondem à atenção psicossocial especializada descrita." },
      { k: "D", texto: "Serviço Residencial Terapêutico e UPA.", porqueErrada: "SRT é moradia para egressos de internação longa; UPA é urgência." },
    ],
    correta: "A",
    justificativa: "A RAPS prevê modalidades de Centro de Atenção Psicossocial: o CAPSi atende crianças e adolescentes com sofrimento psíquico grave e persistente, inclusive pelo uso de substâncias; o CAPS AD atende pessoas com necessidades decorrentes do uso de álcool e outras drogas.",
    dicaFGV: "i = infantojuvenil; AD = álcool e drogas. Em “respectivamente”, siga a ordem do enunciado.",
    tags: ["saúde mental", "redes"]
  },
  {
    id: "e290", disciplinaId: "espec", topicos: [T(13)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 3/2017", palavras: ["PRC 3", "sistemas logísticos", "sistemas de apoio"],
    contexto: "No desenho da RAS de uma macrorregião, a equipe precisou classificar o transporte sanitário, o cartão de identificação do usuário, o prontuário clínico e a central de regulação.",
    comando: "Na estrutura operacional das RAS, esses elementos compõem os",
    alternativas: [
      { k: "A", texto: "sistemas logísticos.", porqueErrada: "" },
      { k: "B", texto: "sistemas de apoio diagnóstico e terapêutico.", porqueErrada: "Sistemas de apoio incluem diagnóstico, assistência farmacêutica e informação em saúde." },
      { k: "C", texto: "pontos de atenção terciária.", porqueErrada: "Pontos de atenção são os locais de prestação de serviço." },
      { k: "D", texto: "sistema de governança.", porqueErrada: "Governança é o arranjo de gestão da rede, como as comissões intergestores." },
    ],
    correta: "A",
    justificativa: "Na estrutura operacional das RAS, os sistemas logísticos são soluções em saúde baseadas em tecnologias de informação e ligadas à integração e ao fluxo de pessoas e informações: identificação e acompanhamento do usuário (cartão), prontuário clínico, sistemas de acesso regulado (centrais de regulação) e transporte sanitário.",
    dicaFGV: "Logístico = faz a pessoa e a informação CIRCULAREM (cartão, prontuário, regulação, transporte). Apoio = serviços comuns a vários pontos (exames, farmácia, informação).",
    tags: ["redes"]
  },
  {
    id: "e291", disciplinaId: "espec", topicos: [T(13)], dificuldade: "facil", tempoAlvo: 130,
    assunto: "Portaria de Consolidação nº 3/2017", palavras: ["PRC 3", "pessoa com deficiência", "CER"],
    contexto: "Um município quer encaminhar crianças com deficiência física e intelectual para reabilitação especializada multiprofissional em serviço de referência regional.",
    comando: "Na Rede de Cuidados à Pessoa com Deficiência, consolidada na PRC nº 3/2017, esse serviço é o",
    alternativas: [
      { k: "A", texto: "Centro Especializado em Reabilitação (CER), no componente de atenção especializada.", porqueErrada: "" },
      { k: "B", texto: "CAPS III, no componente de atenção psicossocial.", porqueErrada: "O CAPS integra a RAPS." },
      { k: "C", texto: "SAMU 192, no componente pré-hospitalar.", porqueErrada: "O SAMU integra a rede de urgências." },
      { k: "D", texto: "Unidade Básica de Saúde, como único ponto da rede.", porqueErrada: "A UBS integra a rede, mas não é o serviço especializado de reabilitação nem o único ponto." },
    ],
    correta: "A",
    justificativa: "A Rede de Cuidados à Pessoa com Deficiência organiza-se nos componentes de atenção básica; atenção especializada em reabilitação auditiva, física, intelectual, visual, ostomia e múltiplas deficiências, na qual se inserem os Centros Especializados em Reabilitação (CER); e atenção hospitalar e de urgência e emergência.",
    dicaFGV: "Cada rede temática tem seu serviço-símbolo: RAPS → CAPS; RUE → SAMU e UPA; Pessoa com Deficiência → CER.",
    tags: ["redes"]
  },
  {
    id: "e292", disciplinaId: "espec", topicos: [T(13)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 3/2017", palavras: ["PRC 3", "SAMU", "regulação médica das urgências"],
    contexto: "Uma chamada ao 192 relata acidente de trânsito com vítima inconsciente na BR-153.",
    comando: "No componente SAMU 192 da RUE, consolidada na PRC nº 3/2017, a decisão sobre o recurso enviado e o destino do paciente cabe à",
    alternativas: [
      { k: "A", texto: "Central de Regulação Médica das Urgências.", porqueErrada: "" },
      { k: "B", texto: "equipe da UBS mais próxima.", porqueErrada: "A UBS não regula o atendimento móvel de urgência." },
      { k: "C", texto: "direção do hospital que receberá o paciente, após a chegada.", porqueErrada: "O destino é definido pela regulação médica, antes do transporte." },
      { k: "D", texto: "Polícia Rodoviária, por se tratar de rodovia federal.", porqueErrada: "A decisão clínica e de destino é da regulação médica do SAMU." },
    ],
    correta: "A",
    justificativa: "O SAMU 192 é o componente da RUE que presta atendimento pré-hospitalar móvel de urgência, acionado pelo número 192 e operado por Central de Regulação Médica das Urgências, que avalia o chamado, define o recurso a ser enviado e o serviço de destino do paciente.",
    dicaFGV: "No SAMU, quem decide é o médico regulador. Alternativas que transferem a decisão para outro ator estão erradas.",
    tags: ["urgência", "redes"]
  },

  /* ---------- PRC nº 4 ---------- */
  {
    id: "e293", disciplinaId: "espec", topicos: [T(14)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Portaria de Consolidação nº 4/2017", palavras: ["PRC 4", "violência sexual", "notificação imediata"],
    contexto: "Uma adolescente foi atendida em pronto-socorro após violência sexual. A equipe discute se a notificação pode ser feita no fechamento semanal.",
    comando: "Segundo as normas de notificação compulsória consolidadas na PRC nº 4/2017, nesse caso a notificação é",
    alternativas: [
      { k: "A", texto: "imediata (em até 24 horas) à Secretaria Municipal de Saúde.", porqueErrada: "" },
      { k: "B", texto: "semanal, como as demais violências.", porqueErrada: "Violência sexual é de notificação imediata ao município." },
      { k: "C", texto: "dispensada, por envolver sigilo.", porqueErrada: "O sigilo protege a identidade, mas não dispensa a notificação." },
      { k: "D", texto: "condicionada à confirmação policial do fato.", porqueErrada: "A notificação em saúde independe de investigação policial." },
    ],
    correta: "A",
    justificativa: "Na Lista Nacional de Notificação Compulsória (Anexo 1 do Anexo V da PRC nº 4/2017), a violência sexual e a tentativa de suicídio são de notificação imediata, em até 24 horas, à Secretaria Municipal de Saúde, para garantir o acesso oportuno à profilaxia e à rede de proteção. As demais formas de violência interpessoal e autoprovocada são de notificação semanal.",
    dicaFGV: "Exceções imediatas dentro de violências: sexual e tentativa de suicídio. O motivo é clínico: profilaxias têm janela curta.",
    tags: ["vigilância epidemiológica", "violência"]
  },
  {
    id: "e294", disciplinaId: "espec", topicos: [T(14)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 4/2017", palavras: ["PRC 4", "vigilância sentinela"],
    contexto: "Para monitorar a circulação de vírus respiratórios, o Estado selecionou algumas unidades de saúde que coletam amostras de uma parcela dos casos de síndrome gripal e informam semanalmente.",
    comando: "Essa estratégia corresponde à",
    alternativas: [
      { k: "A", texto: "vigilância sentinela.", porqueErrada: "" },
      { k: "B", texto: "notificação compulsória universal de todos os casos.", porqueErrada: "A estratégia descrita é amostral, em unidades selecionadas." },
      { k: "C", texto: "busca ativa domiciliar.", porqueErrada: "Busca ativa é a procura de casos na comunidade." },
      { k: "D", texto: "investigação de surto.", porqueErrada: "Investigação de surto é resposta a evento específico, não monitoramento contínuo." },
    ],
    correta: "A",
    justificativa: "A vigilância sentinela utiliza unidades selecionadas (sentinelas) para monitorar, de forma amostral e contínua, determinadas doenças ou agravos, gerando informação de tendência e de agentes circulantes. As normas consolidadas na PRC nº 4/2017 preveem lista própria de doenças e agravos monitorados por essa estratégia.",
    dicaFGV: "Algumas unidades + amostra + tendência = sentinela. Todos os casos em todos os serviços = notificação universal.",
    tags: ["vigilância epidemiológica"]
  },
  {
    id: "e295", disciplinaId: "espec", topicos: [T(14)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 4/2017", palavras: ["PRC 4", "morte encefálica", "transplantes"],
    contexto: "Em uma UTI, foi concluído o diagnóstico de morte encefálica de um paciente. A família ainda não foi abordada sobre doação de órgãos.",
    comando: "Segundo as regras do Sistema Nacional de Transplantes, o estabelecimento deve",
    alternativas: [
      { k: "A", texto: "notificar obrigatoriamente o diagnóstico de morte encefálica à Central Estadual de Transplantes, independentemente da decisão da família.", porqueErrada: "" },
      { k: "B", texto: "notificar apenas se a família autorizar a doação.", porqueErrada: "A notificação é obrigatória; a autorização da família é etapa posterior para a doação." },
      { k: "C", texto: "aguardar o óbito por parada cardíaca antes de qualquer comunicação.", porqueErrada: "A morte encefálica é morte; a notificação deve ser feita após o diagnóstico." },
      { k: "D", texto: "comunicar o caso diretamente a um hospital transplantador de sua escolha.", porqueErrada: "A comunicação é feita à Central, que coordena a distribuição." },
    ],
    correta: "A",
    justificativa: "A Lei nº 9.434/1997 e o regulamento do Sistema Nacional de Transplantes, consolidado na PRC nº 4/2017, tornam obrigatória a notificação dos diagnósticos de morte encefálica às Centrais de Transplantes, independentemente de a família vir a autorizar a doação. A Central coordena o processo de doação e a distribuição dos órgãos.",
    dicaFGV: "Notificar é obrigatório; doar depende da família. A FGV junta as duas coisas para confundir.",
    tags: ["transplantes"]
  },
  {
    id: "e296", disciplinaId: "espec", topicos: [T(14)], dificuldade: "facil", tempoAlvo: 130,
    assunto: "Portaria de Consolidação nº 4/2017", palavras: ["PRC 4", "sistemas e subsistemas", "conteúdo"],
    contexto: "Um executivo precisa localizar rapidamente, entre as Portarias de Consolidação de 2017, a que reúne as normas sobre os sistemas e subsistemas do SUS.",
    comando: "Essa portaria é a PRC nº 4/2017, que reúne, entre outras, as normas sobre",
    alternativas: [
      { k: "A", texto: "o Sistema Nacional de Transplantes, o Sistema Nacional de Laboratórios de Saúde Pública e a notificação compulsória de doenças e agravos.", porqueErrada: "" },
      { k: "B", texto: "os blocos de financiamento e as transferências fundo a fundo.", porqueErrada: "São objeto da PRC nº 6." },
      { k: "C", texto: "a Carta dos Direitos dos Usuários e os instrumentos de planejamento.", porqueErrada: "São objeto da PRC nº 1." },
      { k: "D", texto: "a Rede de Atenção Psicossocial e a Rede de Urgência e Emergência.", porqueErrada: "São objeto da PRC nº 3." },
    ],
    correta: "A",
    justificativa: "A PRC nº 4/2017 consolida as normas sobre os sistemas e os subsistemas do SUS, entre eles o Sistema Nacional de Transplantes, o Sistema Nacional de Laboratórios de Saúde Pública (SISLAB) e o sistema de vigilância epidemiológica, com a Lista Nacional de Notificação Compulsória.",
    dicaFGV: "Mapa das PRC: 1 usuários e organização; 2 políticas; 3 redes; 4 sistemas; 5 ações e serviços; 6 financiamento.",
    tags: ["consolidação"]
  },

  /* ---------- PRC nº 5 ---------- */
  {
    id: "e297", disciplinaId: "espec", topicos: [T(15)], dificuldade: "facil", tempoAlvo: 130,
    assunto: "Portaria de Consolidação nº 5/2017", palavras: ["PRC 5", "identificação do paciente"],
    contexto: "Para agilizar a rotina, uma enfermaria passou a identificar os pacientes apenas pelo número do leito na pulseira.",
    comando: "Segundo o protocolo de identificação do paciente do Programa Nacional de Segurança do Paciente, a prática é",
    alternativas: [
      { k: "A", texto: "adequada, desde que o leito seja conferido pela equipe a cada plantão.", porqueErrada: "O número do leito não pode ser usado como identificador." },
      { k: "B", texto: "inadequada, pois devem ser usados pelo menos dois identificadores, como nome completo e data de nascimento, e nunca o número do leito ou do quarto.", porqueErrada: "" },
      { k: "C", texto: "adequada em enfermarias, sendo inadequada só em UTI.", porqueErrada: "A regra vale para todos os setores." },
      { k: "D", texto: "inadequada, pois a única forma válida é a fotografia do paciente.", porqueErrada: "O protocolo exige ao menos dois identificadores, não exclusivamente fotografia." },
    ],
    correta: "B",
    justificativa: "O protocolo de identificação do paciente, um dos protocolos básicos do Programa Nacional de Segurança do Paciente, exige o uso de pelo menos dois identificadores (por exemplo, nome completo e data de nascimento ou nome da mãe) e veda o uso do número do leito ou do quarto como identificador, pois o paciente pode mudar de lugar.",
    dicaFGV: "Dois identificadores, nunca o leito. É uma das regras mais cobradas em segurança do paciente.",
    tags: ["segurança do paciente"]
  },
  {
    id: "e298", disciplinaId: "espec", topicos: [T(15)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 5/2017", palavras: ["PRC 5", "higiene das mãos", "cinco momentos"],
    contexto: "Uma auditoria observou que os profissionais higienizavam as mãos só ao sair do quarto do paciente.",
    comando: "Segundo o protocolo de higiene das mãos, são momentos para a higienização:",
    alternativas: [
      { k: "A", texto: "antes de tocar o paciente, antes de procedimento limpo ou asséptico, após risco de exposição a fluidos corporais, após tocar o paciente e após tocar superfícies próximas ao paciente.", porqueErrada: "" },
      { k: "B", texto: "apenas no início e no fim do plantão.", porqueErrada: "A higienização deve ocorrer em cada um dos cinco momentos da assistência." },
      { k: "C", texto: "somente após contato com fluidos corporais visíveis.", porqueErrada: "Esse é apenas um dos cinco momentos." },
      { k: "D", texto: "apenas antes de procedimentos cirúrgicos.", porqueErrada: "A higienização vale para toda a assistência, não só para cirurgias." },
    ],
    correta: "A",
    justificativa: "O protocolo de higiene das mãos do Programa Nacional de Segurança do Paciente adota os cinco momentos: antes de tocar o paciente; antes de realizar procedimento limpo ou asséptico; após risco de exposição a fluidos corporais; após tocar o paciente; e após tocar superfícies próximas ao paciente.",
    dicaFGV: "Dois ANTES (tocar, procedimento) e três APÓS (fluidos, paciente, superfícies).",
    tags: ["segurança do paciente"]
  },
  {
    id: "e299", disciplinaId: "espec", topicos: [T(15)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 5/2017", palavras: ["PRC 5", "cirurgia segura", "checklist"],
    contexto: "Um hospital estadual vai implantar a lista de verificação do protocolo de cirurgia segura.",
    comando: "A lista de verificação de cirurgia segura é aplicada em três momentos:",
    alternativas: [
      { k: "A", texto: "antes da indução anestésica, antes da incisão cirúrgica e antes de o paciente sair da sala de cirurgia.", porqueErrada: "" },
      { k: "B", texto: "na internação, na alta e no retorno ambulatorial.", porqueErrada: "Os momentos da lista se concentram no ato cirúrgico." },
      { k: "C", texto: "apenas após o término da cirurgia, para fins de faturamento.", porqueErrada: "A lista é preventiva e começa antes da anestesia." },
      { k: "D", texto: "somente antes da incisão, quando toda a equipe está presente.", porqueErrada: "A pausa antes da incisão é só um dos três momentos." },
    ],
    correta: "A",
    justificativa: "O protocolo de cirurgia segura do Programa Nacional de Segurança do Paciente adota a lista de verificação em três momentos: antes da indução anestésica (entrada), antes da incisão cirúrgica (pausa cirúrgica) e antes de o paciente sair da sala de cirurgia (saída).",
    dicaFGV: "Entrada, pausa e saída. Alternativas que reduzem a um momento ou deslocam para fora da sala estão erradas.",
    tags: ["segurança do paciente"]
  },
  {
    id: "e300", disciplinaId: "espec", topicos: [T(15)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 5/2017", palavras: ["PRC 5", "água para consumo humano", "desinfecção"],
    contexto: "Uma comunidade rural abastecida por poço coletivo, com distribuição para várias casas, não fazia nenhum tratamento da água por considerá-la “de boa qualidade natural”.",
    comando: "Segundo as normas de potabilidade consolidadas na PRC nº 5/2017, a água fornecida coletivamente",
    alternativas: [
      { k: "A", texto: "deve passar por processo de desinfecção ou cloração.", porqueErrada: "" },
      { k: "B", texto: "dispensa tratamento quando captada de poço.", porqueErrada: "A origem subterrânea não dispensa a desinfecção da água fornecida coletivamente." },
      { k: "C", texto: "só precisa de tratamento se houver surto de diarreia.", porqueErrada: "A desinfecção é preventiva e contínua." },
      { k: "D", texto: "é de responsabilidade exclusiva de cada morador.", porqueErrada: "No fornecimento coletivo, há responsável pelo sistema ou solução alternativa." },
    ],
    correta: "A",
    justificativa: "O padrão de potabilidade consolidado no Anexo XX da PRC nº 5/2017 determina que toda água para consumo humano fornecida coletivamente passe por processo de desinfecção ou cloração, sob responsabilidade de quem opera o sistema ou a solução alternativa coletiva, com vigilância pela autoridade de saúde.",
    dicaFGV: "Fornecimento coletivo = desinfecção obrigatória. “Boa qualidade natural” é argumento de senso comum, não de norma.",
    tags: ["vigilância ambiental"]
  },

  /* ---------- PRC nº 6 ---------- */
  {
    id: "e301", disciplinaId: "espec", topicos: [T(16)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 6/2017", palavras: ["PRC 6", "contas bancárias", "instituição financeira oficial"],
    contexto: "Para render mais, o Secretário Municipal quer receber os repasses federais do SUS em conta de banco privado escolhido pela prefeitura.",
    comando: "Segundo as regras de transferência consolidadas na PRC nº 6/2017, os recursos são creditados",
    alternativas: [
      { k: "A", texto: "em conta corrente específica para cada bloco de financiamento, mantida em instituição financeira oficial federal.", porqueErrada: "" },
      { k: "B", texto: "em qualquer instituição financeira escolhida pelo gestor.", porqueErrada: "As contas são mantidas em instituições financeiras oficiais federais." },
      { k: "C", texto: "em conta única do Tesouro municipal, misturada aos demais recursos.", porqueErrada: "Os recursos ficam em contas específicas, vinculadas aos blocos." },
      { k: "D", texto: "em conta pessoal do gestor, com prestação de contas anual.", porqueErrada: "Recursos públicos nunca são depositados em conta pessoal." },
    ],
    correta: "A",
    justificativa: "As regras de financiamento consolidadas na PRC nº 6/2017 (com a redação dada pela Portaria nº 3.992/2017) determinam que os recursos de cada bloco sejam transferidos fundo a fundo, em conta corrente específica e única para cada bloco, mantida em instituições financeiras oficiais federais.",
    dicaFGV: "Conta por bloco + banco oficial federal. Qualquer alternativa que mistura recursos ou permite banco à escolha do gestor está errada.",
    tags: ["financiamento"]
  },
  {
    id: "e302", disciplinaId: "espec", topicos: [T(16)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Portaria de Consolidação nº 6/2017", palavras: ["PRC 6", "comprovação", "Relatório Anual de Gestão"],
    contexto: "O Ministério da Saúde pediu ao município a comprovação da aplicação dos recursos transferidos fundo a fundo no exercício anterior.",
    comando: "Segundo as regras de financiamento consolidadas na PRC nº 6/2017, a comprovação da aplicação dos recursos é feita por meio do",
    alternativas: [
      { k: "A", texto: "Relatório Anual de Gestão, submetido ao Conselho de Saúde.", porqueErrada: "" },
      { k: "B", texto: "envio de todas as notas fiscais ao Fundo Nacional de Saúde.", porqueErrada: "A comprovação se faz pelo instrumento de gestão, sem prejuízo da guarda dos documentos." },
      { k: "C", texto: "relatório do Tribunal de Contas, dispensado o Conselho.", porqueErrada: "O controle externo não substitui o instrumento de gestão nem a apreciação do Conselho." },
      { k: "D", texto: "Plano de Saúde do quadriênio seguinte.", porqueErrada: "O plano é prospectivo; a comprovação é retrospectiva." },
    ],
    correta: "A",
    justificativa: "As regras de financiamento consolidadas na PRC nº 6/2017 estabelecem que a comprovação da aplicação dos recursos transferidos fundo a fundo seja feita por meio do Relatório Anual de Gestão, apreciado pelo respectivo Conselho de Saúde, o que integra o financiamento ao planejamento do SUS.",
    dicaFGV: "Comprovar = olhar para trás = Relatório de Gestão. Planejar = olhar para frente = Plano e Programação.",
    tags: ["financiamento", "planejamento"]
  },
  {
    id: "e303", disciplinaId: "espec", topicos: [T(16)], dificuldade: "media", tempoAlvo: 150,
    assunto: "Portaria de Consolidação nº 6/2017", palavras: ["PRC 6", "vedações", "consultoria"],
    contexto: "A Secretaria Municipal quer usar recursos federais do Bloco de Manutenção para pagar “consultoria” prestada por servidores efetivos da própria prefeitura, como complemento salarial.",
    comando: "Segundo as vedações consolidadas na PRC nº 6/2017, o pagamento é",
    alternativas: [
      { k: "A", texto: "vedado, pois não se admite pagamento de assessorias ou consultorias prestadas por servidores públicos do quadro do próprio ente.", porqueErrada: "" },
      { k: "B", texto: "permitido, por se tratar de serviço técnico especializado.", porqueErrada: "A natureza do serviço não afasta a vedação." },
      { k: "C", texto: "permitido, se aprovado pela Câmara Municipal.", porqueErrada: "A aprovação legislativa não afasta a vedação da norma de financiamento." },
      { k: "D", texto: "obrigatório, para valorizar o servidor.", porqueErrada: "Valorização do servidor se faz pelo plano de carreira, não por consultoria paga com recursos vinculados." },
    ],
    correta: "A",
    justificativa: "Entre as vedações de uso dos recursos de custeio/manutenção consolidadas na PRC nº 6/2017 está o pagamento de assessorias ou consultorias prestadas por servidores públicos pertencentes ao quadro do próprio município ou do estado, além do pagamento de inativos e de gratificações de cargos comissionados não ligados aos serviços do Plano de Saúde.",
    dicaFGV: "As vedações combatem complemento salarial disfarçado. Servidor do próprio quadro + “consultoria” = vedado.",
    tags: ["financiamento"]
  },
  {
    id: "e304", disciplinaId: "espec", topicos: [T(16)], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Portaria de Consolidação nº 6/2017", palavras: ["PRC 6", "blocos antigos", "Portaria 3.992"],
    contexto: "Um técnico afirmou que os repasses federais ainda seguem seis blocos, entre eles Atenção Básica, Média e Alta Complexidade, Vigilância em Saúde, Assistência Farmacêutica, Gestão do SUS e Investimentos.",
    comando: "Sobre a afirmação, é correto dizer que",
    alternativas: [
      { k: "A", texto: "está desatualizada: desde a Portaria nº 3.992/2017, que alterou a PRC nº 6/2017, os recursos passaram a ser organizados em dois blocos, hoje denominados Manutenção e Estruturação.", porqueErrada: "" },
      { k: "B", texto: "está correta, pois a PRC nº 6/2017 manteve os seis blocos sem alteração.", porqueErrada: "A PRC nº 6 foi alterada ainda em 2017 para o modelo de dois blocos." },
      { k: "C", texto: "está desatualizada, pois hoje há um bloco único, sem qualquer vinculação.", porqueErrada: "São dois blocos, com vinculação à finalidade." },
      { k: "D", texto: "está desatualizada, pois os blocos foram substituídos por convênios negociados caso a caso.", porqueErrada: "A transferência continua fundo a fundo, regular e automática." },
    ],
    correta: "A",
    justificativa: "A Portaria nº 3.992/2017 alterou a PRC nº 6/2017 e substituiu os seis blocos de financiamento (Atenção Básica, Média e Alta Complexidade, Vigilância em Saúde, Assistência Farmacêutica, Gestão do SUS e Investimentos) por dois: Custeio e Investimento, renomeados em 2020 como Manutenção das Ações e Serviços Públicos de Saúde e Estruturação da Rede de Serviços Públicos de Saúde.",
    dicaFGV: "Seis → dois (2017) → novos nomes (2020). A banca adora o candidato que estudou por material antigo.",
    tags: ["financiamento"]
  },
];
