/* conteudo.js — teoria objetiva, flashcards e mapas mentais.
 * Vinculados às disciplinas do edital e a assuntos em texto livre. O material do
 * Módulo II do Executivo em Saúde fica em `conteudo-executivo.js`. */

import { RESUMOS_EXEC, FLASHCARDS_EXEC, MAPAS_EXEC } from './conteudo-executivo.js';

const RESUMOS_BASE = [
  {
    id: "r-sus-8080", disciplinaId: "leg", assunto: "Lei nº 8.080/1990",
    palavras: ["8.080","lei","orgânica","princípios","diretrizes"],
    titulo: "Lei 8.080/1990 — o que a FGV cobra", minutos: 12,
    pontos: [
      "Princípios doutrinários: universalidade, integralidade e equidade (a equidade aparece na lei como \"igualdade da assistência, sem preconceitos ou privilégios de qualquer espécie\").",
      "Princípios organizativos: descentralização com direção única em cada esfera, regionalização, hierarquização e participação da comunidade.",
      "Direção única: União = Ministério da Saúde; Estado = Secretaria Estadual; Município = Secretaria Municipal. A FGV troca as esferas para induzir ao erro.",
      "Campo de atuação do SUS inclui vigilância sanitária, vigilância epidemiológica, saúde do trabalhador e assistência terapêutica integral, inclusive farmacêutica.",
      "A iniciativa privada participa de forma COMPLEMENTAR, com preferência para entidades filantrópicas e sem fins lucrativos — nunca \"de forma suplementar e prioritária\".",
    ],
    armadilhas: [
      "Trocar \"complementar\" por \"suplementar\".",
      "Afirmar que a direção do SUS é colegiada em cada esfera (é única).",
      "Dizer que a saúde do trabalhador está fora do campo de atuação do SUS.",
    ]
  },
  {
    id: "r-sus-8142", disciplinaId: "leg", assunto: "Lei nº 8.142/1990",
    palavras: ["8.142","controle social","conselhos","conferências"],
    titulo: "Lei 8.142/1990 — Conferência x Conselho", minutos: 8,
    pontos: [
      "Duas instâncias colegiadas: Conferência de Saúde e Conselho de Saúde.",
      "Conferência: a cada QUATRO anos, avalia a situação de saúde e PROPÕE diretrizes.",
      "Conselho: caráter PERMANENTE e DELIBERATIVO, atua na formulação de estratégias e no CONTROLE da execução da política, inclusive nos aspectos econômicos e financeiros.",
      "Composição paritária: 50% de usuários; os outros 50% divididos entre governo, prestadores de serviço e profissionais de saúde.",
      "As decisões do Conselho são homologadas pelo chefe do poder legalmente constituído em cada esfera.",
    ],
    armadilhas: [
      "Inverter os prazos ou dizer que a Conferência é deliberativa e permanente.",
      "Afirmar paridade \"50% governo / 50% usuários\".",
    ]
  },
  {
    id: "r-pps-pnab", disciplinaId: "espec", assunto: "Atenção básica e Saúde da Família",
    palavras: ["atenção básica","atenção primária","saúde da família","acolhimento","territorialização"],
    titulo: "Atenção Básica — porta de entrada preferencial", minutos: 10,
    pontos: [
      "A Atenção Básica é a principal porta de entrada e centro de comunicação da Rede de Atenção à Saúde, ordenadora do cuidado.",
      "Atributos: acesso de primeiro contato, longitudinalidade, integralidade, coordenação do cuidado, orientação familiar e comunitária, competência cultural.",
      "Equipe de Saúde da Família: território adscrito, população definida, trabalho multiprofissional e visita domiciliar.",
      "Ordenar o cuidado não significa concentrar todos os procedimentos: significa organizar fluxos e referências na rede.",
    ],
    armadilhas: [
      "Dizer que a atenção básica resolve \"todos\" os casos — a FGV adora termos absolutos.",
      "Confundir \"porta de entrada preferencial\" com \"porta de entrada exclusiva\".",
    ]
  },
  {
    id: "r-rlm-neg", disciplinaId: "mat", assunto: "Equivalências e negações",
    palavras: ["equivalências","negações","proposições","lógica"],
    titulo: "Negação de proposições — tabela de bolso", minutos: 9,
    pontos: [
      "~(p ∧ q) = ~p ∨ ~q (De Morgan).",
      "~(p ∨ q) = ~p ∧ ~q.",
      "~(p → q) = p ∧ ~q. Este é o mais cobrado: mantém a primeira e nega a segunda.",
      "p → q equivale a ~q → ~p (contrapositiva) e a ~p ∨ q.",
      "Negação de \"todo A é B\" = \"algum A não é B\"; negação de \"algum\" = \"nenhum\".",
    ],
    armadilhas: [
      "Negar a condicional trocando por \"~p → ~q\", que é apenas a inversa, não equivalente.",
      "Negar \"todo\" com \"nenhum\".",
    ]
  },
  {
    id: "r-port-crase", disciplinaId: "port", assunto: "Crase, regência e concordância",
    palavras: ["crase","regência","concordância","colocação"],
    titulo: "Crase — os três testes rápidos", minutos: 6,
    pontos: [
      "Teste da substituição por palavra masculina: \"refiro-me à norma\" / \"refiro-me ao regulamento\" → há crase.",
      "Não há crase antes de palavra masculina, verbo, pronome pessoal e a maioria dos pronomes indefinidos.",
      "Antes de nome de lugar: \"vou a\" / \"volto da\" → há crase; \"vou a\" / \"volto de\" → não há.",
      "É facultativa antes de nome próprio feminino, pronome possessivo feminino e após \"até\".",
    ],
    armadilhas: [
      "Marcar crase em \"a partir de\" — nunca ocorre.",
      "Esquecer que \"à distância\" com o termo determinado exige crase (\"à distância de dois metros\").",
    ]
  },
  {
    id: "r-legto-sus", disciplinaId: "espec", assunto: "Organização regionalizada do SUS",
    palavras: ["regionalização","região de saúde","redes de atenção","referência"],
    titulo: "SUS no Tocantins — regionalização", minutos: 7,
    fonteNecessaria: true,
    pontos: [
      "O estado organiza a atenção em regiões de saúde, com hospitais de referência regional e macrorregiões.",
      "A Comissão Intergestores Bipartite (CIB) pactua no âmbito estadual; a Comissão Intergestores Regional (CIR) pactua na região de saúde.",
      "O Conselho Estadual de Saúde é a instância de controle social no estado.",
      "Palmas concentra parte da referência de média e alta complexidade; Araguaína é o polo norte de referência.",
    ],
    armadilhas: [
      "Confundir CIB (estadual) com CIT (nacional) e CIR (regional).",
    ]
  },
];

const FLASHCARDS_BASE = [
  { id: "f1", disciplinaId: "leg", assunto: "Lei nº 8.142/1990", frente: "Conferência de Saúde: periodicidade e natureza", verso: "A cada 4 anos; avalia a situação de saúde e PROPÕE diretrizes. Não é deliberativa permanente." },
  { id: "f2", disciplinaId: "leg", assunto: "Lei nº 8.142/1990", frente: "Conselho de Saúde: natureza e composição", verso: "Permanente e deliberativo. Paritário: 50% usuários; 50% divididos entre governo, prestadores e profissionais." },
  { id: "f3", disciplinaId: "leg", assunto: "Lei nº 8.080/1990", frente: "Iniciativa privada no SUS", verso: "Participação COMPLEMENTAR, por contrato de direito público ou convênio, com preferência a filantrópicas e sem fins lucrativos." },
  { id: "f4", disciplinaId: "leg", assunto: "Financiamento do SUS", frente: "Pisos da saúde: União, Estados, Municípios", verso: "Estados/DF: 12%. Municípios/DF: 15%. (Educação: União 18%, demais 25% — não confundir.)" },
  { id: "f5", disciplinaId: "mat", assunto: "Equivalências e negações", frente: "Negação de p → q", verso: "p ∧ ~q. Mantém a primeira, nega a segunda. Não é ~p → ~q." },
  { id: "f6", disciplinaId: "mat", assunto: "Proposições lógicas e conectivos", frente: "Equivalências de p → q", verso: "~q → ~p (contrapositiva) e ~p ∨ q." },
  { id: "f7", disciplinaId: "port", assunto: "Crase, regência e concordância", frente: "Onde nunca há crase", verso: "Antes de masculino, verbo, pronome pessoal, \"a partir de\", \"a distância\" (sem determinante) e Vossa/Sua + tratamento." },
  { id: "f8", disciplinaId: "espec", topicos: ["espec-executivo-em-saude-12"], assunto: "Atenção básica e Saúde da Família", frente: "Papel da Atenção Básica na rede", verso: "Porta de entrada PREFERENCIAL, centro de comunicação e ordenadora do cuidado. Preferencial ≠ exclusiva." },
  { id: "f12", disciplinaId: "espec", topicos: ["espec-executivo-em-saude-2"], assunto: "Organização regionalizada do SUS", frente: "CIR, CIB e CIT", verso: "CIR = região de saúde. CIB = estadual. CIT = nacional." },
  { id: "f14", disciplinaId: "leg", assunto: "Decreto nº 7.508/2011", frente: "Portas de entrada (Decreto 7.508)", verso: "Atenção primária; urgência e emergência; atenção psicossocial; serviços especiais de acesso aberto." },
];

const MAPAS_BASE = [
  {
    "id": "m1",
    "disciplinaId": "leg",
    "titulo": "Princípios do SUS",
    "raiz": {
      "nome": "Princípios do SUS",
      "filhos": [
        {
          "nome": "Doutrinários",
          "filhos": [
            {
              "nome": "Universalidade — acesso a todos"
            },
            {
              "nome": "Integralidade — promoção, proteção e recuperação"
            },
            {
              "nome": "Equidade — igualdade da assistência, sem privilégios"
            }
          ]
        },
        {
          "nome": "Organizativos",
          "filhos": [
            {
              "nome": "Descentralização com direção única por esfera"
            },
            {
              "nome": "Regionalização e hierarquização"
            },
            {
              "nome": "Participação da comunidade"
            }
          ]
        },
        {
          "nome": "Pegadinhas FGV",
          "filhos": [
            {
              "nome": "Complementar ≠ suplementar"
            },
            {
              "nome": "Preferencial ≠ exclusiva"
            },
            {
              "nome": "Igualdade (oferta) ≠ equidade (necessidade)"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "m2",
    "disciplinaId": "mat",
    "titulo": "Lógica proposicional",
    "raiz": {
      "nome": "p → q",
      "filhos": [
        {
          "nome": "Equivalências",
          "filhos": [
            {
              "nome": "~q → ~p"
            },
            {
              "nome": "~p ∨ q"
            }
          ]
        },
        {
          "nome": "Negação",
          "filhos": [
            {
              "nome": "p ∧ ~q"
            }
          ]
        },
        {
          "nome": "Não equivalentes",
          "filhos": [
            {
              "nome": "q → p (recíproca)"
            },
            {
              "nome": "~p → ~q (inversa)"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "m3",
    "disciplinaId": "espec",
    "titulo": "Vigilância em Saúde",
    "raiz": {
      "nome": "Vigilância em Saúde",
      "filhos": [
        {
          "nome": "Epidemiológica",
          "filhos": [
            {
              "nome": "Notificação e investigação"
            },
            {
              "nome": "Contatos e cadeia de transmissão"
            }
          ]
        },
        {
          "nome": "Sanitária",
          "filhos": [
            {
              "nome": "Inspeção e licenciamento"
            },
            {
              "nome": "Interdição cautelar"
            }
          ]
        },
        {
          "nome": "Ambiental",
          "filhos": [
            {
              "nome": "Água, ar, solo"
            },
            {
              "nome": "Vetores e zoonoses"
            }
          ]
        },
        {
          "nome": "Saúde do trabalhador",
          "filhos": [
            {
              "nome": "Acidentes e doenças ocupacionais"
            }
          ]
        }
      ]
    }
  }
];

export const RESUMOS = [...RESUMOS_BASE, ...RESUMOS_EXEC];
export const FLASHCARDS = [...FLASHCARDS_BASE, ...FLASHCARDS_EXEC];
export const MAPAS = [...MAPAS_BASE, ...MAPAS_EXEC];
