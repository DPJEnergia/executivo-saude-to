/* licenca.js — ativação por chave, sem servidor.
 *
 * COMO FUNCIONA
 *   As chaves são sorteadas no seu computador pelo gerador
 *   (`ferramentas/gerar-chaves.mjs`). O aplicativo NÃO guarda as chaves nem
 *   qualquer segredo: ele guarda apenas o resumo criptográfico (SHA-256) de
 *   cada chave válida, em `chaves-validas.js`. Ao digitar a chave, o app
 *   calcula o resumo e compara com a lista.
 *
 *   Resumo não pode ser revertido: mesmo lendo todo o código publicado,
 *   ninguém consegue descobrir as chaves nem fabricar novas. A chave tem 60
 *   bits de aleatoriedade, o que torna a tentativa por força bruta inviável.
 *
 * O QUE ISSO RESOLVE E O QUE NÃO RESOLVE
 *   Resolve: chave inventada não funciona, e você pode revogar uma chave
 *   específica removendo o resumo dela e republicando o app.
 *   Não resolve: se um comprador repassar a própria chave, ela funciona no
 *   aparelho do amigo. Bloqueio por pessoa exige backend com contas.
 */

import { CHAVES_VALIDAS } from './chaves-validas.js';

/* Alfabeto sem letras ambíguas (I, L, O, U) para não haver erro de digitação. */
export const ALFABETO = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
export const PREFIXO = 'EXS';

/** Resumo SHA-256 da chave, truncado — é o que fica publicado. */
export async function resumo(chave) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(normalizar(chave)));
  return [...new Uint8Array(buf)].slice(0, 8).map(b => b.toString(16).padStart(2, '0')).join('');
}

export function normalizar(txt) {
  return String(txt || '').toUpperCase().replace(/[^0-9A-Z]/g, '');
}

/** Formata para exibição: EXS-XXXX-XXXX-XXXX. */
export function formatar(txt) {
  const limpo = normalizar(txt).replace(new RegExp(`^${PREFIXO}`), '');
  const blocos = limpo.match(/.{1,4}/g) || [];
  return [PREFIXO, ...blocos].join('-');
}

/**
 * Valida a chave contra a lista publicada.
 * Devolve { ok, motivo, validade, serie }.
 */
export async function validarChave(texto, { hoje = new Date(), lista = CHAVES_VALIDAS } = {}) {
  const limpo = normalizar(texto);
  if (!limpo.startsWith(PREFIXO) || limpo.length !== PREFIXO.length + 12) {
    return { ok: false, motivo: `Formato inválido. A chave tem 12 caracteres após ${PREFIXO}.` };
  }
  const h = await resumo(limpo);
  const registro = lista.find(r => r.h === h);
  if (!registro) {
    return { ok: false, motivo: 'Chave não encontrada. Confira a digitação ou fale com o suporte.' };
  }
  if (registro.v && hoje > new Date(registro.v + 'T23:59:59')) {
    return { ok: false, motivo: `Esta chave expirou em ${new Date(registro.v + 'T12:00:00').toLocaleDateString('pt-BR')}.` };
  }
  return { ok: true, validade: registro.v, serie: registro.s ?? null };
}

/* ---------------- estado da licença no aparelho ---------------- */

const LS = 'execsaude:licenca';

export function licencaAtual() {
  try { return JSON.parse(localStorage.getItem(LS) || 'null'); }
  catch { return null; }
}

export function salvarLicenca(dados) {
  localStorage.setItem(LS, JSON.stringify(dados));
}

export function limparLicenca() {
  localStorage.removeItem(LS);
}

/** Estado do acesso: 'ativo', 'demo' ou 'bloqueado'. */
export async function estadoAcesso() {
  const l = licencaAtual();
  if (!l) return { modo: 'bloqueado' };
  if (l.modo === 'demo') return { modo: 'demo', desde: l.desde };
  const r = await validarChave(l.chave);
  if (!r.ok) return { modo: 'bloqueado', motivo: r.motivo };
  return { modo: 'ativo', validade: r.validade, serie: r.serie, chave: formatar(l.chave) };
}

/** Verificação síncrona, para as telas limitarem conteúdo sem esperar a validação. */
export function ehDemo() {
  return licencaAtual()?.modo === 'demo';
}

export function ativarDemo() {
  salvarLicenca({ modo: 'demo', desde: new Date().toISOString() });
}

/** Limites da demonstração. */
export const DEMO_LIMITE = {
  questoes: 15,
  telas: ['inicio', 'questoes', 'config'],
  mensagem: 'Esta é a demonstração: 15 questões liberadas. O plano de estudos, o caderno de erros, os simulados e o painel de desempenho ficam disponíveis com a chave de ativação.'
};
