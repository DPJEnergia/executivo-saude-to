/* data.js — parâmetros do método de estudo e dados de apoio.
 *
 * A estrutura do concurso (disciplinas, tópicos, cargos, pontuação) vem do
 * edital oficial, em `edital.js` e `edital-especificos.js`.
 * O banco de questões está em `questoes.js` e o material de apoio em `conteudo.js`.
 */

import { QUESTOES as QUESTOES_BASE } from './questoes.js';
import { QUESTOES_TOCANTINS } from './questoes-tocantins.js';
import { QUESTOES_MODULO1 } from './questoes-modulo1.js';
import { QUESTOES_SUPERIOR } from './questoes-superior.js';
import { QUESTOES_EXEC_SUS } from './questoes-exec-sus.js';
import { QUESTOES_EXEC_VISA } from './questoes-exec-visa.js';
import { QUESTOES_EXEC_LICITACOES } from './questoes-exec-licitacoes.js';
import { QUESTOES_EXEC_PORTARIAS } from './questoes-exec-portarias.js';
import { QUESTOES_EXEC_LICITACOES_2 } from './questoes-exec-licitacoes-2.js';
import { QUESTOES_EXEC_PORTARIAS_2 } from './questoes-exec-portarias-2.js';
import { QUESTOES_EXEC_LOTE3 } from './questoes-exec-lote3.js';
import { QUESTOES_SUPERIOR_2 } from './questoes-superior-2.js';

/* Questões genéricas de Conhecimentos Específicos herdadas do banco-base que cabem no
   programa do Executivo em Saúde, com o item do edital a que se vinculam. As demais
   (enfermagem, ética do servidor, urgência etc.) ficam de fora: não constam do programa. */
const ESPEC_HERDADAS = {
  q005: [12], q114: [12], q122: [12],   // PNAB → PRC nº 2
  q113: [13], q119: [13],               // Redes de Atenção → PRC nº 3
  q115: [14],                           // notificação compulsória → PRC nº 4
  q006: [7], q120: [3],                 // vigilância
  q017: [2], q123: [2], q023: [2],      // organização regionalizada, equidade
  q118: [3]                             // determinantes sociais
};
const vinculo = n => `espec-executivo-em-saude-${n}`;

/* Informática Básica não cai no nível superior. */
const doNivelSuperior = q => q.disciplinaId !== 'info';

const herdadas = [...QUESTOES_BASE, ...QUESTOES_TOCANTINS, ...QUESTOES_MODULO1]
  .filter(doNivelSuperior)
  .filter(q => q.disciplinaId !== 'espec' || ESPEC_HERDADAS[q.id])
  .map(q => q.disciplinaId === 'espec' ? { ...q, topicos: ESPEC_HERDADAS[q.id].map(vinculo) } : q);

/** Banco completo: Módulo I do nível superior + Módulo II do Executivo em Saúde. */
export const QUESTOES = [
  ...herdadas,
  ...QUESTOES_SUPERIOR, ...QUESTOES_SUPERIOR_2,
  ...QUESTOES_EXEC_SUS, ...QUESTOES_EXEC_VISA, ...QUESTOES_EXEC_LICITACOES, ...QUESTOES_EXEC_PORTARIAS,
  ...QUESTOES_EXEC_LICITACOES_2, ...QUESTOES_EXEC_PORTARIAS_2, ...QUESTOES_EXEC_LOTE3
];
export { RESUMOS, FLASHCARDS, MAPAS } from './conteudo.js';
export { EDITAL, CARGOS, CARGO_ALVO, disciplinasDoNivel, composicaoProva } from './edital.js';

/* Versão do banco de conteúdo. Ao subir este número, o store mescla no banco já
   salvo no dispositivo as questões e o material novos, sem apagar o que o
   administrador tiver cadastrado. A versão 1 é a primeira do app do Executivo em Saúde. */
export const BANCO_VERSAO = 4;

export const NIVEIS = [
  { id: 'iniciante', nome: 'Iniciante', peso: 1.6 },
  { id: 'intermediario', nome: 'Intermediário', peso: 1.0 },
  { id: 'avancado', nome: 'Avançado', peso: 0.6 }
];

export const DIFICULDADES = [
  { id: 'facil', nome: 'Fácil' },
  { id: 'media', nome: 'Média' },
  { id: 'dificil', nome: 'Difícil' }
];

export const MOTIVOS_ERRO = [
  { id: 'conteudo', nome: 'Falta de conteúdo', dica: 'Volte à teoria do assunto antes de resolver mais questões.' },
  { id: 'interpretacao', nome: 'Interpretação', dica: 'Releia o comando da questão sublinhando o verbo e o recorte temporal.' },
  { id: 'desatencao', nome: 'Desatenção', dica: 'Marque no rascunho a palavra-chave antes de olhar as alternativas.' },
  { id: 'pegadinha', nome: 'Pegadinha', dica: 'Circule termos absolutos: sempre, nunca, exclusivamente, apenas.' },
  { id: 'tempo', nome: 'Falta de tempo', dica: 'Treine com cronômetro: a prova dá 4 minutos por questão, mas as fáceis precisam sair em 2.' }
];

/* Intervalos de revisão espaçada, em dias. */
export const INTERVALOS_REVISAO = [1, 7, 15, 30];

export const MEDALHAS = [
  { id: 'primeira', emo: '🎯', nome: 'Primeira questão', teste: (s) => s.totalResp >= 1 },
  { id: 'q50', emo: '📚', nome: '50 questões', teste: (s) => s.totalResp >= 50 },
  { id: 'q200', emo: '🏛️', nome: '200 questões', teste: (s) => s.totalResp >= 200 },
  { id: 'streak3', emo: '🔥', nome: '3 dias seguidos', teste: (s) => s.streak >= 3 },
  { id: 'streak7', emo: '⚡', nome: '7 dias seguidos', teste: (s) => s.streak >= 7 },
  { id: 'streak30', emo: '👑', nome: '30 dias seguidos', teste: (s) => s.streak >= 30 },
  { id: 'meta', emo: '🎖️', nome: 'Meta atingida', teste: (s) => s.totalResp >= 20 && s.taxa >= s.meta },
  { id: 'simulado', emo: '⏱️', nome: 'Primeiro simulado', teste: (s) => s.simulados >= 1 },
  { id: 'simulado5', emo: '📈', nome: '5 simulados', teste: (s) => s.simulados >= 5 },
  { id: 'aprovado', emo: '🏅', nome: 'Nota de aprovação', teste: (s) => s.simuladoAprovado },
  { id: 'erros', emo: '🧠', nome: 'Caderno ativo', teste: (s) => s.errosRevisados >= 10 }
];

export const FRASES = [
  'Constância vence intensidade. Uma hora bem feita hoje vale mais que seis amanhã.',
  'A FGV não cobra o que você decorou. Cobra o que você entendeu.',
  'Erro registrado é erro que não se repete na prova.',
  'Leia o comando duas vezes. A banca escreve para quem lê uma só.',
  'Revisão não é repetição: é a diferença entre lembrar e saber.',
  'Prova de concurso premia quem elimina, não quem adivinha.',
  'Hoje você não precisa ser brilhante. Precisa estar presente.',
  'Cada questão comentada vale por três resolvidas no automático.',
  'No Módulo II cada questão vale o dobro: 30 questões, 60 dos 90 pontos.',
  'Lei seca se aprende lendo o artigo, não o resumo do resumo.',
  'São quatro alternativas: eliminar duas já dobra a sua chance.'
];

/* Aluno demonstrativo, usado no botão "Entrar com dados de exemplo". */
export const DEMO = {
  perfil: {
    nome: 'Ana Demonstração',
    nivel: 'superior',
    cargo: 'Executivo em Saúde',
    dataProva: '2026-11-01',
    horasDia: 3,
    diasSemana: [1, 2, 3, 4, 5, 6],
    metaAcerto: 75,
    dificuldades: 'Lei de Licitações e Portarias de Consolidação',
    fortes: 'Interpretação de texto e Lei 8.080',
    niveis: { port: 'intermediario', mat: 'iniciante', to: 'iniciante', leg: 'intermediario', espec: 'iniciante' }
  }
};
