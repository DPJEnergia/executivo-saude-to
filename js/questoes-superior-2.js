/* questoes-superior-2.js — reforço do Módulo I do nível superior nos assuntos que tinham uma
 * única questão: sintaxe, coesão, equações, sequências, conectivos, Tocantins (demografia,
 * clima, vegetação, relevo, desenvolvimento, matrizes, povos) e saúde do trabalhador.
 * Questões inéditas, 4 alternativas, padrão FGV. */

export const QUESTOES_SUPERIOR_2 = [
  /* ---------- Língua Portuguesa ---------- */
  {
    id: "s106", disciplinaId: "port", topicos: ["port-sintaxe-da-oracao-e-do-perio"], dificuldade: "media", tempoAlvo: 150,
    assunto: "Sintaxe da oração e do período", palavras: ["oração subordinada", "concessiva"],
    contexto: "“Embora a unidade tenha recebido novos equipamentos, o tempo de espera não diminuiu.”",
    comando: "A oração introduzida por “embora” estabelece com a principal relação de",
    alternativas: [
      { k: "A", texto: "concessão.", porqueErrada: "" },
      { k: "B", texto: "causa.", porqueErrada: "Causa explicaria o motivo da espera; aqui há um fato que não impediu o outro." },
      { k: "C", texto: "condição.", porqueErrada: "Condição seria “se” ou “caso”." },
      { k: "D", texto: "finalidade.", porqueErrada: "Finalidade seria “para que”." },
    ],
    correta: "A",
    justificativa: "A oração subordinada adverbial concessiva expressa um fato que, embora contrário ao da oração principal, não impede sua realização. “Embora”, “ainda que”, “mesmo que” e “se bem que” são conjunções concessivas.",
    dicaFGV: "Teste: troque por “apesar de”. Se o sentido se mantém, é concessão.",
    tags: ["sintaxe"]
  },
  {
    id: "s107", disciplinaId: "port", topicos: ["port-coesao-e-coerencia-textual"], dificuldade: "media", tempoAlvo: 150,
    assunto: "Coesão e coerência textual", palavras: ["conectivo", "coesão sequencial"],
    contexto: "“A cobertura vacinal caiu nos últimos anos; ___, casos de sarampo voltaram a ser registrados.”",
    comando: "O conectivo que preenche a lacuna mantendo a relação de consequência é",
    alternativas: [
      { k: "A", texto: "por isso.", porqueErrada: "" },
      { k: "B", texto: "no entanto.", porqueErrada: "Indica oposição, que não há entre as orações." },
      { k: "C", texto: "a menos que.", porqueErrada: "Indica condição negativa." },
      { k: "D", texto: "ou seja.", porqueErrada: "Indica explicação ou reformulação." },
    ],
    correta: "A",
    justificativa: "A segunda oração apresenta consequência da primeira (queda da vacinação → retorno do sarampo). “Por isso”, “portanto”, “consequentemente” e “assim” estabelecem essa relação de coesão sequencial.",
    dicaFGV: "Antes de olhar as alternativas, diga com suas palavras a relação entre as orações (causa, oposição, conclusão). Depois procure o conectivo.",
    tags: ["coesão"]
  },

  /* ---------- Raciocínio Lógico e Matemático ---------- */
  {
    id: "s207", disciplinaId: "mat", topicos: ["mat-equacoes-inequacoes-e-sistem"], dificuldade: "media", tempoAlvo: 160,
    assunto: "Equações, inequações e sistemas", palavras: ["sistema de equações"],
    contexto: "Uma UBS recebeu 120 frascos de vacina, entre doses de influenza e de hepatite B. Há 30 frascos de influenza a mais do que de hepatite B.",
    comando: "O número de frascos de hepatite B é",
    alternativas: [
      { k: "A", texto: "45.", porqueErrada: "" },
      { k: "B", texto: "75.", porqueErrada: "É o número de frascos de influenza." },
      { k: "C", texto: "60.", porqueErrada: "Divide igualmente, ignorando a diferença." },
      { k: "D", texto: "30.", porqueErrada: "É a diferença, não a quantidade." },
    ],
    correta: "A",
    justificativa: "Sendo h os frascos de hepatite B e i os de influenza: i + h = 120 e i = h + 30. Substituindo: 2h + 30 = 120, logo h = 45 e i = 75.",
    dicaFGV: "Confira a resposta nas duas condições: 45 + 75 = 120 e 75 − 45 = 30.",
    tags: ["equações"]
  },
  {
    id: "s208", disciplinaId: "mat", topicos: ["mat-sequencias"], dificuldade: "media", tempoAlvo: 160,
    assunto: "Sequências", palavras: ["progressão aritmética"],
    contexto: "Um programa de caminhada orienta 10 minutos no primeiro dia e 3 minutos a mais a cada dia seguinte.",
    comando: "No 15º dia, a caminhada durará",
    alternativas: [
      { k: "A", texto: "52 minutos.", porqueErrada: "" },
      { k: "B", texto: "55 minutos.", porqueErrada: "Soma 15 acréscimos, mas o primeiro dia não tem acréscimo." },
      { k: "C", texto: "45 minutos.", porqueErrada: "Multiplica 15 × 3, esquecendo os 10 minutos iniciais." },
      { k: "D", texto: "49 minutos.", porqueErrada: "Usa 13 acréscimos." },
    ],
    correta: "A",
    justificativa: "Trata-se de progressão aritmética com a₁ = 10 e razão r = 3. O termo geral é aₙ = a₁ + (n − 1)·r. Logo, a₁₅ = 10 + 14 × 3 = 52 minutos.",
    dicaFGV: "Do 1º ao 15º dia há 14 saltos, não 15. Esse “menos um” é a pegadinha das PAs.",
    tags: ["sequências"]
  },
  {
    id: "s209", disciplinaId: "mat", topicos: ["mat-conectivos"], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Conectivos", palavras: ["disjunção exclusiva"],
    contexto: "Considere a proposição: “Ou o paciente fica internado, ou recebe alta”, entendida como disjunção exclusiva.",
    comando: "A proposição é verdadeira quando",
    alternativas: [
      { k: "A", texto: "exatamente uma das proposições simples é verdadeira.", porqueErrada: "" },
      { k: "B", texto: "ambas as proposições simples são verdadeiras.", porqueErrada: "Na disjunção exclusiva, ambas verdadeiras torna a proposição falsa." },
      { k: "C", texto: "ambas as proposições simples são falsas.", porqueErrada: "Ambas falsas também torna a proposição falsa." },
      { k: "D", texto: "pelo menos uma das proposições simples é verdadeira, inclusive as duas.", porqueErrada: "Esse é o comportamento da disjunção inclusiva (“ou”)." },
    ],
    correta: "A",
    justificativa: "A disjunção exclusiva (“ou p, ou q”) é verdadeira apenas quando as proposições têm valores lógicos diferentes, isto é, quando exatamente uma delas é verdadeira. A disjunção inclusiva (“p ou q”) é verdadeira quando pelo menos uma é verdadeira.",
    dicaFGV: "“Ou… ou…” = só um. “… ou …” = pelo menos um. O conectivo exclusivo é falso quando os valores coincidem.",
    tags: ["lógica"]
  },

  /* ---------- História e Geografia do Tocantins ---------- */
  {
    id: "s301", disciplinaId: "to", topicos: ["to-aspectos-demograficos"], dificuldade: "media", tempoAlvo: 140,
    assunto: "Aspectos demográficos", palavras: ["migração", "Palmas"],
    contexto: "Palmas, fundada em 1989, tornou-se em poucas décadas a cidade mais populosa do Tocantins.",
    comando: "O fator que mais contribuiu para esse crescimento acelerado foi",
    alternativas: [
      { k: "A", texto: "a migração de pessoas de outras regiões do Estado e do país, atraídas pela nova capital e pelos empregos públicos e privados.", porqueErrada: "" },
      { k: "B", texto: "a taxa de natalidade, a mais alta do mundo no período.", porqueErrada: "O crescimento foi sobretudo migratório." },
      { k: "C", texto: "a transferência compulsória de populações indígenas para a capital.", porqueErrada: "Não houve tal transferência." },
      { k: "D", texto: "a instalação de grandes indústrias automobilísticas.", porqueErrada: "A economia de Palmas é marcada pelo setor público, comércio e serviços." },
    ],
    correta: "A",
    justificativa: "Palmas foi planejada e construída como capital após a criação do Estado. Seu crescimento acelerado resultou principalmente da migração, interna e de outros Estados, atraída pela instalação da máquina administrativa, pelos serviços e pela expansão urbana.",
    dicaFGV: "Capital planejada e recente = crescimento migratório. A FGV costuma cobrar a relação entre criação do Estado e dinâmica populacional.",
    tags: ["demografia"]
  },
  {
    id: "s302", disciplinaId: "to", topicos: ["to-clima"], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Clima", palavras: ["clima tropical", "estação seca"],
    contexto: "O planejamento de campanhas contra queimadas no Tocantins concentra esforços entre junho e setembro.",
    comando: "Isso se explica porque o clima do Tocantins é",
    alternativas: [
      { k: "A", texto: "tropical, com estação chuvosa de outubro a abril e estação seca de maio a setembro.", porqueErrada: "" },
      { k: "B", texto: "equatorial, com chuvas abundantes o ano inteiro.", porqueErrada: "Não há chuva regular o ano todo; a estação seca é marcada." },
      { k: "C", texto: "semiárido, com chuvas escassas em todos os meses.", porqueErrada: "O Estado tem estação chuvosa bem definida." },
      { k: "D", texto: "subtropical, com inverno frio e geadas.", porqueErrada: "Clima típico do Sul do país." },
    ],
    correta: "A",
    justificativa: "O Tocantins tem clima tropical, com duas estações bem definidas: chuvosa, aproximadamente de outubro a abril, e seca, de maio a setembro. A estiagem e a baixa umidade do inverno favorecem as queimadas.",
    dicaFGV: "Clima tropical de Cerrado: verão chuvoso, inverno seco. Esse padrão explica queimadas, cheias e calendário agrícola.",
    tags: ["clima"]
  },
  {
    id: "s303", disciplinaId: "to", topicos: ["to-vegetacao"], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Vegetação", palavras: ["Cerrado", "transição amazônica"],
    contexto: "Um mapa da cobertura vegetal original do Tocantins mostra predomínio de um bioma e uma faixa de transição no norte do Estado.",
    comando: "O bioma predominante e o bioma com que ele faz transição no norte são, respectivamente,",
    alternativas: [
      { k: "A", texto: "Cerrado e Amazônia.", porqueErrada: "" },
      { k: "B", texto: "Caatinga e Pantanal.", porqueErrada: "Não são os biomas do Tocantins." },
      { k: "C", texto: "Amazônia e Cerrado.", porqueErrada: "Ordem invertida: o Cerrado predomina." },
      { k: "D", texto: "Mata Atlântica e Pampa.", porqueErrada: "Biomas do litoral e do Sul." },
    ],
    correta: "A",
    justificativa: "O Cerrado ocupa a maior parte do território tocantinense. No norte e no noroeste, especialmente na região do Bico do Papagaio, há áreas de transição para a Amazônia, com florestas mais densas.",
    dicaFGV: "Tocantins = Cerrado com borda amazônica ao norte.",
    tags: ["vegetação"]
  },
  {
    id: "s304", disciplinaId: "to", topicos: ["to-relevo"], dificuldade: "media", tempoAlvo: 140,
    assunto: "Relevo", palavras: ["Jalapão", "chapadas", "dunas"],
    contexto: "Turistas que visitam o leste do Tocantins encontram serras com topos planos, paredões de arenito e dunas alaranjadas no meio do Cerrado.",
    comando: "A paisagem descrita corresponde à região do",
    alternativas: [
      { k: "A", texto: "Jalapão, onde as dunas resultam da erosão de serras e chapadas de arenito.", porqueErrada: "" },
      { k: "B", texto: "Bico do Papagaio, marcado por planícies alagadas.", porqueErrada: "O Bico do Papagaio fica no extremo norte, em área de transição amazônica." },
      { k: "C", texto: "litoral tocantinense, com dunas costeiras.", porqueErrada: "O Tocantins não tem litoral." },
      { k: "D", texto: "Ilha do Bananal, formada por montanhas.", porqueErrada: "A Ilha do Bananal é uma planície fluvial." },
    ],
    correta: "A",
    justificativa: "O Jalapão, no leste do Estado, apresenta chapadas, serras e paredões de arenito, cuja erosão forma dunas no interior do Cerrado, como as próximas à Serra do Espírito Santo.",
    dicaFGV: "Dunas no Tocantins não são costeiras: vêm da erosão do arenito no Jalapão.",
    tags: ["relevo"]
  },
  {
    id: "s305", disciplinaId: "to", topicos: ["to-desenvolvimento-regional"], dificuldade: "media", tempoAlvo: 140,
    assunto: "Desenvolvimento regional", palavras: ["MATOPIBA", "fronteira agrícola"],
    contexto: "A expansão recente da produção de grãos no Tocantins faz parte de uma fronteira agrícola que envolve parte de quatro Estados.",
    comando: "Essa região é conhecida pela sigla",
    alternativas: [
      { k: "A", texto: "MATOPIBA, formada por Maranhão, Tocantins, Piauí e Bahia.", porqueErrada: "" },
      { k: "B", texto: "AMACRO, formada por Amazonas, Acre e Rondônia.", porqueErrada: "É outra área de expansão, no oeste da Amazônia." },
      { k: "C", texto: "SUDENE, formada pelos Estados do Nordeste.", porqueErrada: "SUDENE é autarquia de desenvolvimento, não sigla de fronteira agrícola." },
      { k: "D", texto: "MERCOSUL, formada por países sul-americanos.", porqueErrada: "Bloco econômico internacional." },
    ],
    correta: "A",
    justificativa: "MATOPIBA designa a área de expansão agrícola, sobretudo de soja e outros grãos, no Cerrado do Maranhão, Tocantins, Piauí e Bahia. O Tocantins é o único Estado inteiramente incluído na região.",
    dicaFGV: "MA-TO-PI-BA: as iniciais dos quatro Estados, na ordem.",
    tags: ["economia"]
  },
  {
    id: "s306", disciplinaId: "to", topicos: ["to-matriz-energetica"], dificuldade: "media", tempoAlvo: 140,
    assunto: "Matriz energética", palavras: ["hidrelétricas", "rio Tocantins"],
    contexto: "O lago que margeia Palmas foi formado pelo represamento do rio Tocantins para geração de energia.",
    comando: "Esse lago resulta da usina hidrelétrica",
    alternativas: [
      { k: "A", texto: "Luís Eduardo Magalhães, conhecida como Usina de Lajeado.", porqueErrada: "" },
      { k: "B", texto: "de Itaipu.", porqueErrada: "Itaipu fica no rio Paraná, na fronteira com o Paraguai." },
      { k: "C", texto: "de Belo Monte.", porqueErrada: "Belo Monte fica no rio Xingu, no Pará." },
      { k: "D", texto: "de Sobradinho.", porqueErrada: "Sobradinho fica no rio São Francisco, na Bahia." },
    ],
    correta: "A",
    justificativa: "O lago de Palmas foi formado pela Usina Hidrelétrica Luís Eduardo Magalhães (Lajeado), no rio Tocantins. O Estado tem outras hidrelétricas no mesmo rio, como Peixe Angical e Estreito, o que faz da hidroeletricidade a base de sua matriz de geração.",
    dicaFGV: "Palmas + lago = Lajeado. As outras alternativas são usinas famosas de outros rios.",
    tags: ["energia"]
  },
  {
    id: "s307", disciplinaId: "to", topicos: ["to-matriz-produtiva"], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Matriz produtiva", palavras: ["agronegócio", "soja", "pecuária"],
    contexto: "A pauta de exportações do Tocantins é concentrada em poucos produtos do agronegócio.",
    comando: "As atividades que mais se destacam na matriz produtiva do Estado são",
    alternativas: [
      { k: "A", texto: "a produção de grãos, sobretudo soja, e a pecuária bovina.", porqueErrada: "" },
      { k: "B", texto: "a extração de petróleo em plataformas marítimas.", porqueErrada: "O Estado não tem litoral nem produção offshore." },
      { k: "C", texto: "a indústria automobilística e a de eletrônicos.", porqueErrada: "Não são atividades centrais na economia tocantinense." },
      { k: "D", texto: "a pesca oceânica e o turismo de praia.", porqueErrada: "O Tocantins não tem costa oceânica." },
    ],
    correta: "A",
    justificativa: "A economia do Tocantins tem forte base no agronegócio, com destaque para a produção de grãos — principalmente soja, mas também milho e arroz — e para a pecuária bovina, além do setor de serviços e da administração pública.",
    dicaFGV: "Elimine o que exige litoral. Sobra o agronegócio.",
    tags: ["economia"]
  },
  {
    id: "s308", disciplinaId: "to", topicos: ["to-povos-indigenas-e-comunidade"], dificuldade: "media", tempoAlvo: 140,
    assunto: "Povos indígenas e comunidades quilombolas", palavras: ["Karajá", "Javaé", "Mumbuca"],
    contexto: "Um roteiro cultural do Tocantins inclui uma visita à Ilha do Bananal e outra a uma comunidade do Jalapão conhecida pelo artesanato em capim dourado.",
    comando: "Os povos e a comunidade relacionados a esses lugares são, respectivamente,",
    alternativas: [
      { k: "A", texto: "Karajá e Javaé, na Ilha do Bananal, e a comunidade quilombola Mumbuca, no Jalapão.", porqueErrada: "" },
      { k: "B", texto: "Guarani, na Ilha do Bananal, e Yanomami, no Jalapão.", porqueErrada: "Esses povos vivem em outras regiões do país." },
      { k: "C", texto: "Xerente, na Ilha do Bananal, e Karajá, no Jalapão.", porqueErrada: "Os Xerente vivem na região de Tocantínia; o Jalapão é associado à comunidade Mumbuca." },
      { k: "D", texto: "Pataxó, na Ilha do Bananal, e Kalapalo, no Jalapão.", porqueErrada: "Povos da Bahia e do Xingu, respectivamente." },
    ],
    correta: "A",
    justificativa: "A Ilha do Bananal, maior ilha fluvial do mundo, é território tradicional dos povos Karajá e Javaé. No Jalapão, a comunidade quilombola Mumbuca, em Mateiros, tornou-se conhecida pelo artesanato em capim dourado.",
    dicaFGV: "Bananal = Karajá e Javaé. Capim dourado = Mumbuca. Associações diretas que caem em provas regionais.",
    tags: ["povos tradicionais"]
  },

  /* ---------- Legislação ---------- */
  {
    id: "s401", disciplinaId: "leg", topicos: ["leg-politica-nacional-de-saude-d"], dificuldade: "media", tempoAlvo: 150,
    assunto: "Política Nacional de Saúde do Trabalhador e da Trabalhadora", palavras: ["saúde do trabalhador", "abrangência"],
    contexto: "Um gestor municipal afirmou que as ações de saúde do trabalhador só alcançam empregados com carteira assinada.",
    comando: "Segundo a Política Nacional de Saúde do Trabalhador e da Trabalhadora, a afirmação está",
    alternativas: [
      { k: "A", texto: "incorreta, pois a política alcança todos os trabalhadores, homens e mulheres, independentemente da localização urbana ou rural, da forma de inserção no mercado de trabalho, formal ou informal, e do vínculo empregatício.", porqueErrada: "" },
      { k: "B", texto: "correta, pois trabalhadores informais são atendidos pela Previdência.", porqueErrada: "A política do SUS inclui expressamente os informais." },
      { k: "C", texto: "correta apenas para trabalhadores rurais.", porqueErrada: "A política alcança trabalhadores urbanos e rurais." },
      { k: "D", texto: "incorreta, mas a política só alcança servidores públicos.", porqueErrada: "Não há restrição a servidores públicos." },
    ],
    correta: "A",
    justificativa: "A Política Nacional de Saúde do Trabalhador e da Trabalhadora tem como sujeitos todos os trabalhadores, homens e mulheres, independentemente de sua localização, urbana ou rural, de sua forma de inserção no mercado de trabalho, formal ou informal, e de seu vínculo empregatício, público ou privado, assalariado, autônomo, avulso, temporário, cooperativado, aprendiz, estagiário, doméstico, aposentado ou desempregado.",
    dicaFGV: "Política do SUS é universal: informal, autônomo, desempregado e aposentado também estão incluídos.",
    tags: ["saúde do trabalhador"]
  },
  /* ---------- reforço final: um segundo item para cada assunto que tinha só um ---------- */
  {
    id: "s108", disciplinaId: "port", topicos: ["port-ortografia-oficial"], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Ortografia oficial", palavras: ["mal", "mau"],
    contexto: "Um relatório de ouvidoria precisa registrar a queixa de um usuário.",
    comando: "Assinale a frase correta quanto ao emprego de mal/mau e mas/mais.",
    alternativas: [
      { k: "A", texto: "O paciente passou mal após o mau atendimento, mas não registrou mais reclamações.", porqueErrada: "" },
      { k: "B", texto: "O paciente passou mau após o mal atendimento, mas não registrou mais reclamações.", porqueErrada: "“Passou mal” (advérbio, oposto de bem) e “mau atendimento” (adjetivo, oposto de bom)." },
      { k: "C", texto: "O paciente passou mal após o mau atendimento, mais não registrou mas reclamações.", porqueErrada: "“Mas” é conjunção adversativa; “mais” indica quantidade." },
      { k: "D", texto: "O paciente passou mau após o mau atendimento, mas não registrou mais reclamações.", porqueErrada: "Passar mal: advérbio, com l." },
    ],
    correta: "A",
    justificativa: "Mal é advérbio (oposto de bem) ou substantivo; mau é adjetivo (oposto de bom). Mas é conjunção adversativa (equivale a porém); mais indica quantidade ou intensidade.",
    dicaFGV: "Troque por bem/bom e por porém/menos: o par que fizer sentido revela a grafia.",
    tags: ["ortografia"]
  },
  {
    id: "s109", disciplinaId: "port", topicos: ["port-acentuacao-grafica"], dificuldade: "dificil", tempoAlvo: 150,
    assunto: "Acentuação gráfica", palavras: ["acentuação", "hiato"],
    contexto: "Na revisão de um cartaz, discutiu-se quais palavras mantêm o acento após o Acordo Ortográfico.",
    comando: "Está corretamente grafada, conforme as regras vigentes, a palavra",
    alternativas: [
      { k: "A", texto: "feiura.", porqueErrada: "" },
      { k: "B", texto: "saude.", porqueErrada: "O u tônico do hiato continua acentuado: saúde." },
      { k: "C", texto: "pais (no sentido de nação).", porqueErrada: "O i tônico do hiato é acentuado: país." },
      { k: "D", texto: "ciume.", porqueErrada: "O u tônico do hiato é acentuado: ciúme." },
    ],
    correta: "A",
    justificativa: "Após o Acordo Ortográfico, deixaram de ser acentuados o i e o u tônicos de paroxítonas quando precedidos de ditongo decrescente, como em feiura e baiuca. Continuam acentuados os hiatos em i e u tônicos não precedidos de ditongo, como saúde, país e ciúme.",
    dicaFGV: "Hiato com i/u tônico mantém acento — exceto depois de ditongo em paroxítona (feiura). Regra fina e muito cobrada.",
    tags: ["acentuação"]
  },
  {
    id: "s110", disciplinaId: "port", topicos: ["port-estrutura-e-formacao-de-pala"], dificuldade: "media", tempoAlvo: 140,
    assunto: "Estrutura e formação de palavras", palavras: ["composição", "aglutinação"],
    contexto: "Considere as palavras: girassol, aguardente, passatempo e guarda-chuva.",
    comando: "A palavra formada por composição por aglutinação é",
    alternativas: [
      { k: "A", texto: "aguardente.", porqueErrada: "" },
      { k: "B", texto: "girassol.", porqueErrada: "Justaposição: os radicais se unem sem perda de fonemas (gira + sol, com duplicação gráfica do s)." },
      { k: "C", texto: "passatempo.", porqueErrada: "Justaposição: passa + tempo, sem perda." },
      { k: "D", texto: "guarda-chuva.", porqueErrada: "Justaposição com hífen." },
    ],
    correta: "A",
    justificativa: "Na aglutinação, os radicais se fundem com perda de fonemas: água + ardente → aguardente (perde-se um a). Na justaposição, os elementos mantêm sua integridade fonética, como em girassol, passatempo e guarda-chuva.",
    dicaFGV: "Perdeu som = aglutinação (aguardente, planalto, embora). Não perdeu = justaposição.",
    tags: ["morfologia"]
  },
  {
    id: "s210", disciplinaId: "mat", topicos: ["mat-funcoes"], dificuldade: "media", tempoAlvo: 150,
    assunto: "Funções", palavras: ["função composta"],
    contexto: "Considere a função f(x) = 2x + 3.",
    comando: "O valor de f(f(1)) é",
    alternativas: [
      { k: "A", texto: "13.", porqueErrada: "" },
      { k: "B", texto: "5.", porqueErrada: "É apenas f(1)." },
      { k: "C", texto: "10.", porqueErrada: "Calcula 2 × 5, esquecendo de somar 3." },
      { k: "D", texto: "25.", porqueErrada: "Eleva f(1) ao quadrado." },
    ],
    correta: "A",
    justificativa: "Primeiro, f(1) = 2 × 1 + 3 = 5. Em seguida, f(f(1)) = f(5) = 2 × 5 + 3 = 13.",
    dicaFGV: "Função composta se resolve de dentro para fora, um passo de cada vez.",
    tags: ["funções"]
  },
  {
    id: "s211", disciplinaId: "mat", topicos: ["mat-matrizes-e-determinantes"], dificuldade: "media", tempoAlvo: 140,
    assunto: "Matrizes e determinantes", palavras: ["produto de matrizes", "ordem"],
    contexto: "Uma matriz A tem ordem 2 × 3 e uma matriz B tem ordem 3 × 4.",
    comando: "Sobre o produto A · B, é correto afirmar que",
    alternativas: [
      { k: "A", texto: "existe e tem ordem 2 × 4.", porqueErrada: "" },
      { k: "B", texto: "não existe, pois as matrizes têm ordens diferentes.", porqueErrada: "O produto existe quando o número de colunas de A é igual ao de linhas de B (3 = 3)." },
      { k: "C", texto: "existe e tem ordem 3 × 3.", porqueErrada: "A ordem do produto é (linhas de A) × (colunas de B)." },
      { k: "D", texto: "existe e tem ordem 4 × 2.", porqueErrada: "Ordem invertida." },
    ],
    correta: "A",
    justificativa: "O produto A·B existe quando o número de colunas de A é igual ao número de linhas de B. Aqui, 3 = 3. A matriz resultante tem o número de linhas de A e o número de colunas de B: 2 × 4.",
    dicaFGV: "(2 × 3)·(3 × 4): os “de dentro” devem ser iguais; os “de fora” dão a ordem do resultado.",
    tags: ["matrizes"]
  },
];
