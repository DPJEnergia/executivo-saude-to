/* questoes-superior.js — complemento do Módulo I do nível superior: itens de Língua
 * Portuguesa e de Raciocínio Lógico e Matemático do Anexo I que ainda não tinham questão
 * no banco herdado. Questões inéditas, 4 alternativas, padrão FGV. */

export const QUESTOES_SUPERIOR = [
  /* ---------- Língua Portuguesa ---------- */
  {
    id: "s101", disciplinaId: "port", topicos: ["port-ortografia-oficial"], dificuldade: "media", tempoAlvo: 140,
    assunto: "Ortografia oficial", palavras: ["ortografia"],
    contexto: "Um ofício interno da Secretaria precisava ser revisado antes do envio. O revisor recebeu quatro versões de uma mesma frase.",
    comando: "Assinale a versão escrita de acordo com a ortografia oficial.",
    alternativas: [
      { k: "A", texto: "O gestor quis analisar a paralisação e pesquisar a exceção prevista no contrato.", porqueErrada: "" },
      { k: "B", texto: "O gestor quiz analisar a paralisação e pesquisar a exceção prevista no contrato.", porqueErrada: "O verbo querer grafa-se com s: quis." },
      { k: "C", texto: "O gestor quis analizar a paralisação e pesquisar a exceção prevista no contrato.", porqueErrada: "Analisar vem de análise: grafa-se com s." },
      { k: "D", texto: "O gestor quis analisar a paralização e pesquizar a excessão prevista no contrato.", porqueErrada: "Paralisação (de paralisar), pesquisar (de pesquisa) e exceção (de exceto) estão grafadas incorretamente." },
    ],
    correta: "A",
    justificativa: "Grafam-se com s: quis (verbo querer), analisar (de análise), paralisação (de paralisar), pesquisar (de pesquisa). Exceção escreve-se com ç, pois deriva de exceto.",
    dicaFGV: "Procure a palavra primitiva: análise → analisar; pesquisa → pesquisar; paralisia → paralisar. A família da palavra resolve a maioria das dúvidas de s/z.",
    tags: ["ortografia"]
  },
  {
    id: "s102", disciplinaId: "port", topicos: ["port-acentuacao-grafica"], dificuldade: "media", tempoAlvo: 140,
    assunto: "Acentuação gráfica", palavras: ["acentuação"],
    contexto: "Em uma campanha da Secretaria, a frase do cartaz precisava seguir as regras de acentuação vigentes após o Acordo Ortográfico.",
    comando: "A frase corretamente acentuada é:",
    alternativas: [
      { k: "A", texto: "Eles têm uma ideia heroica para pôr fim à fila.", porqueErrada: "" },
      { k: "B", texto: "Eles tem uma idéia heroica para pôr fim à fila.", porqueErrada: "O plural de ter leva acento (têm), e ideia perdeu o acento no ditongo aberto da paroxítona." },
      { k: "C", texto: "Eles têm uma ideia heróica para por fim à fila.", porqueErrada: "Heroica perdeu o acento; e o verbo pôr mantém o acento diferencial." },
      { k: "D", texto: "Eles têm uma idéia heróica para pôr fim a fila.", porqueErrada: "Ideia e heroica não têm mais acento; e há crase em “à fila”." },
    ],
    correta: "A",
    justificativa: "O verbo ter na 3ª pessoa do plural recebe acento (têm). Após o Acordo, os ditongos abertos “ei” e “oi” das paroxítonas deixaram de ser acentuados (ideia, heroica). O verbo pôr mantém o acento diferencial em relação à preposição por. Em “pôr fim à fila”, há crase (fim a + a fila).",
    dicaFGV: "Três regras numa frase só: têm (plural), ditongo aberto em paroxítona sem acento, pôr diferencial. A FGV adora frases que concentram várias regras.",
    tags: ["acentuação"]
  },
  {
    id: "s103", disciplinaId: "port", topicos: ["port-estrutura-e-formacao-de-pala"], dificuldade: "media", tempoAlvo: 150,
    assunto: "Estrutura e formação de palavras", palavras: ["formação de palavras", "parassíntese"],
    contexto: "Em um texto sobre o fim do expediente nas unidades de saúde, aparecem as palavras: infelizmente, entardecer, pontapé e planalto.",
    comando: "A palavra formada por parassíntese é",
    alternativas: [
      { k: "A", texto: "infelizmente.", porqueErrada: "Formada por prefixação e sufixação: existem “infeliz” e “felizmente”." },
      { k: "B", texto: "entardecer.", porqueErrada: "" },
      { k: "C", texto: "pontapé.", porqueErrada: "Composição por justaposição (ponta + pé)." },
      { k: "D", texto: "planalto.", porqueErrada: "Composição por aglutinação (plano + alto, com perda de som)." },
    ],
    correta: "B",
    justificativa: "Na parassíntese, prefixo e sufixo são acrescentados simultaneamente ao radical, de modo que não existe a forma só com o prefixo nem só com o sufixo: en + tarde + ecer (não existem “entarde” nem “tardecer”). Em infelizmente, as formas intermediárias existem, o que caracteriza prefixação e sufixação.",
    dicaFGV: "Teste da parassíntese: retire o prefixo; depois retire o sufixo. Se nenhuma das duas formas existe, é parassíntese.",
    tags: ["morfologia"]
  },
  {
    id: "s104", disciplinaId: "port", topicos: ["port-redacao-oficial"], dificuldade: "media", tempoAlvo: 140,
    assunto: "Redação oficial", palavras: ["redação oficial", "pronomes de tratamento"],
    contexto: "Em um ofício dirigido ao Secretário de Estado da Saúde, o redator escreveu: “Vossa Excelência deverá indicar ___ representante e informar se ___ presença está confirmada.”",
    comando: "Segundo as normas de redação oficial, as lacunas devem ser preenchidas por",
    alternativas: [
      { k: "A", texto: "vosso / vossa.", porqueErrada: "Os pronomes de tratamento exigem concordância na 3ª pessoa." },
      { k: "B", texto: "seu / sua.", porqueErrada: "" },
      { k: "C", texto: "vosso / sua.", porqueErrada: "Mistura 2ª e 3ª pessoas; a concordância deve ser uniforme na 3ª." },
      { k: "D", texto: "teu / tua.", porqueErrada: "Tratamento íntimo, incompatível com a comunicação oficial." },
    ],
    correta: "B",
    justificativa: "Embora se refiram à 2ª pessoa gramatical (a quem se fala), os pronomes de tratamento levam o verbo e os possessivos para a 3ª pessoa: “Vossa Excelência deverá indicar seu representante e informar se sua presença está confirmada”.",
    dicaFGV: "Vossa = com quem se fala; Sua = de quem se fala. Mas os possessivos que acompanham “Vossa Excelência” são sempre “seu/sua”.",
    tags: ["redação oficial"]
  },
  {
    id: "s105", disciplinaId: "port", topicos: ["port-redacao-oficial"], dificuldade: "facil", tempoAlvo: 120,
    assunto: "Redação oficial", palavras: ["redação oficial", "fecho"],
    contexto: "Uma servidora vai encaminhar ofício a uma autoridade de hierarquia superior à sua e precisa escolher o fecho.",
    comando: "Segundo o Manual de Redação da Presidência da República, o fecho adequado é",
    alternativas: [
      { k: "A", texto: "Atenciosamente.", porqueErrada: "Usado para autoridades de mesma hierarquia ou de hierarquia inferior." },
      { k: "B", texto: "Respeitosamente.", porqueErrada: "" },
      { k: "C", texto: "Cordialmente, sem mais para o momento.", porqueErrada: "Fórmula não prevista e prolixa." },
      { k: "D", texto: "Sem mais, subscrevo-me com elevada estima e distinta consideração.", porqueErrada: "Fórmula rebuscada, contrária à concisão da redação oficial." },
    ],
    correta: "B",
    justificativa: "O Manual de Redação da Presidência da República prevê apenas dois fechos para comunicações oficiais: “Respeitosamente”, para autoridades de hierarquia superior, e “Atenciosamente”, para autoridades de mesma hierarquia ou de hierarquia inferior.",
    dicaFGV: "Dois fechos, duas situações. As alternativas floreadas violam a concisão e a padronização, princípios da redação oficial.",
    tags: ["redação oficial"]
  },

  /* ---------- Raciocínio Lógico e Matemático ---------- */
  {
    id: "s201", disciplinaId: "mat", topicos: ["mat-juros-simples-e-compostos"], dificuldade: "facil", tempoAlvo: 150,
    assunto: "Juros simples e compostos", palavras: ["juros simples"],
    contexto: "Uma fornecedora atrasou a entrega e, por acordo, pagará à Secretaria R$ 20.000,00 corrigidos a juros simples de 1,5% ao mês, por 8 meses.",
    comando: "O montante a ser pago será de",
    alternativas: [
      { k: "A", texto: "R$ 21.200,00.", porqueErrada: "Corresponde a apenas 4 meses de juros." },
      { k: "B", texto: "R$ 22.400,00.", porqueErrada: "" },
      { k: "C", texto: "R$ 22.531,00.", porqueErrada: "Aproxima o regime composto, não o simples." },
      { k: "D", texto: "R$ 24.000,00.", porqueErrada: "Usa taxa de 2,5% ao mês." },
    ],
    correta: "B",
    justificativa: "Nos juros simples, J = C · i · t = 20.000 × 0,015 × 8 = 2.400. O montante é M = C + J = 20.000 + 2.400 = R$ 22.400,00.",
    dicaFGV: "Juros simples crescem em linha reta: calcule o juro de um mês (R$ 300) e multiplique pelos meses. É mais rápido que a fórmula.",
    tags: ["matemática financeira"]
  },
  {
    id: "s202", disciplinaId: "mat", topicos: ["mat-juros-simples-e-compostos"], dificuldade: "media", tempoAlvo: 170,
    assunto: "Juros simples e compostos", palavras: ["juros compostos"],
    contexto: "Um fundo municipal aplicou R$ 10.000,00 por 2 anos a 10% ao ano. Um conselheiro quer saber quanto a mais o fundo obteria se a aplicação fosse a juros compostos em vez de juros simples.",
    comando: "A diferença entre os montantes é de",
    alternativas: [
      { k: "A", texto: "R$ 0,00.", porqueErrada: "Com mais de um período, os regimes produzem montantes diferentes." },
      { k: "B", texto: "R$ 100,00.", porqueErrada: "" },
      { k: "C", texto: "R$ 1.000,00.", porqueErrada: "Corresponde ao juro de um ano, não à diferença entre os regimes." },
      { k: "D", texto: "R$ 2.100,00.", porqueErrada: "É o juro total no regime composto, não a diferença." },
    ],
    correta: "B",
    justificativa: "Juros simples: M = 10.000 × (1 + 0,10 × 2) = 12.000. Juros compostos: M = 10.000 × 1,10² = 12.100. A diferença é R$ 100,00 — o juro do segundo ano sobre o juro do primeiro (10% de 1.000).",
    dicaFGV: "Para 2 períodos, a diferença entre compostos e simples é sempre C · i². Aqui: 10.000 × 0,01 = 100.",
    tags: ["matemática financeira"]
  },
  {
    id: "s203", disciplinaId: "mat", topicos: ["mat-funcoes"], dificuldade: "media", tempoAlvo: 160,
    assunto: "Funções", palavras: ["função afim"],
    contexto: "O custo mensal de um serviço de transporte sanitário é composto de um valor fixo mais um valor por paciente transportado. Com 0 paciente, o custo é R$ 1.200,00; com 100 pacientes, R$ 4.700,00.",
    comando: "Supondo que o custo seja função afim do número de pacientes, o custo para 60 pacientes é",
    alternativas: [
      { k: "A", texto: "R$ 2.820,00.", porqueErrada: "Calcula 60% de 4.700, ignorando o custo fixo." },
      { k: "B", texto: "R$ 3.300,00.", porqueErrada: "" },
      { k: "C", texto: "R$ 3.500,00.", porqueErrada: "Usa taxa de R$ 38,33 por paciente." },
      { k: "D", texto: "R$ 4.200,00.", porqueErrada: "Soma 60 × 50, com taxa incorreta." },
    ],
    correta: "B",
    justificativa: "Na função afim C(x) = a·x + b, b = 1.200 (custo com 0 paciente). A taxa é a = (4.700 − 1.200) ÷ 100 = 35. Logo, C(60) = 35 × 60 + 1.200 = 2.100 + 1.200 = R$ 3.300,00.",
    dicaFGV: "Função afim não é proporcional: não aplique regra de três direta sobre o total quando há parcela fixa. Separe fixo e variável.",
    tags: ["funções"]
  },
  {
    id: "s204", disciplinaId: "mat", topicos: ["mat-matrizes-e-determinantes"], dificuldade: "dificil", tempoAlvo: 170,
    assunto: "Matrizes e determinantes", palavras: ["determinante"],
    contexto: "Considere a matriz quadrada de ordem 2: A = [2 3; 1 4], em que a primeira linha é (2, 3) e a segunda linha é (1, 4).",
    comando: "O determinante da matriz 2A é",
    alternativas: [
      { k: "A", texto: "5.", porqueErrada: "É o determinante de A, não de 2A." },
      { k: "B", texto: "10.", porqueErrada: "Multiplica o determinante por 2, esquecendo que cada uma das duas linhas é multiplicada por 2." },
      { k: "C", texto: "20.", porqueErrada: "" },
      { k: "D", texto: "40.", porqueErrada: "Usa o fator 2³, próprio de matriz de ordem 3." },
    ],
    correta: "C",
    justificativa: "det(A) = 2·4 − 3·1 = 5. Multiplicar a matriz de ordem n por k multiplica o determinante por kⁿ. Para n = 2 e k = 2: det(2A) = 2² × 5 = 20. Conferindo: 2A = [4 6; 2 8], det = 32 − 12 = 20.",
    dicaFGV: "det(kA) = kⁿ · det(A). A banca oferece k·det(A) como alternativa sedutora.",
    tags: ["matrizes"]
  },
  {
    id: "s205", disciplinaId: "mat", topicos: ["mat-estatistica-descritiva"], dificuldade: "media", tempoAlvo: 160,
    assunto: "Estatística descritiva", palavras: ["média", "mediana", "moda"],
    contexto: "Em uma semana, uma UPA registrou os seguintes números diários de atendimentos de urgência odontológica: 12, 15, 15, 18, 20, 22 e 45.",
    comando: "Sobre esses dados, é correto afirmar que",
    alternativas: [
      { k: "A", texto: "a média é 21, a mediana é 18 e a moda é 15.", porqueErrada: "" },
      { k: "B", texto: "a média é 18, a mediana é 21 e a moda é 15.", porqueErrada: "Troca média e mediana." },
      { k: "C", texto: "a média, a mediana e a moda são iguais.", porqueErrada: "O valor 45 desloca a média para cima." },
      { k: "D", texto: "a média é 21, a mediana é 20 e não há moda.", porqueErrada: "A mediana é o 4º valor (18), e 15 aparece duas vezes (moda)." },
    ],
    correta: "A",
    justificativa: "Soma: 12 + 15 + 15 + 18 + 20 + 22 + 45 = 147; média = 147 ÷ 7 = 21. Com os dados ordenados, a mediana é o 4º valor: 18. A moda é 15, que aparece duas vezes. A média supera a mediana por influência do valor extremo 45.",
    dicaFGV: "Valor extremo puxa a média, não a mediana. Se a questão pede a medida mais representativa com outlier, a resposta costuma ser a mediana.",
    tags: ["estatística"]
  },
  {
    id: "s206", disciplinaId: "mat", topicos: ["mat-tabelas-verdade"], dificuldade: "media", tempoAlvo: 160,
    assunto: "Tabelas-verdade", palavras: ["tabela-verdade", "condicional"],
    contexto: "Considere a proposição: “Se o paciente tem febre e tosse, então ele será testado”.",
    comando: "Na tabela-verdade dessa proposição, construída com as três proposições simples, o número de linhas em que ela é verdadeira é",
    alternativas: [
      { k: "A", texto: "1.", porqueErrada: "Esse é o número de linhas em que ela é FALSA." },
      { k: "B", texto: "4.", porqueErrada: "Não corresponde à contagem." },
      { k: "C", texto: "6.", porqueErrada: "Não corresponde à contagem." },
      { k: "D", texto: "7.", porqueErrada: "" },
    ],
    correta: "D",
    justificativa: "Com três proposições simples, a tabela tem 2³ = 8 linhas. A condicional (p ∧ q) → r só é falsa quando o antecedente é verdadeiro e o consequente é falso: p V, q V e r F — uma única linha. Logo, é verdadeira em 7 linhas.",
    dicaFGV: "Condicional: conte as linhas falsas (antecedente V e consequente F) e subtraia do total. É mais rápido do que montar a tabela inteira.",
    tags: ["lógica"]
  },
];
