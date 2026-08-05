/**
 * Consentimento para cookies de publicidade e mensuração (LGPD).
 *
 * Opt-in: nada de terceiro carrega antes do aceite explícito. A base legal
 * declarada na Política de Privacidade (seção 4.3) é o consentimento do
 * art. 7.º, I, da LGPD — este módulo é o que torna essa declaração verdadeira.
 */

export type Consent = 'granted' | 'denied'

const KEY = 'construindo:consent:marketing'

/** Emitido quando o consentimento muda, para os componentes reagirem na hora. */
export const CONSENT_EVENT = 'construindo:consent'

export function readConsent(): Consent | null {
  if (typeof window === 'undefined') return null
  try {
    const v = window.localStorage.getItem(KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    // localStorage pode estar bloqueado (modo privado, cookies de terceiros
    // desativados). Sem registro legível, tratamos como "ainda não decidiu".
    return null
  }
}

/** `null` limpa a escolha e faz o banner reaparecer (revogação). */
export function writeConsent(value: Consent | null) {
  if (typeof window === 'undefined') return
  try {
    if (value === null) window.localStorage.removeItem(KEY)
    else window.localStorage.setItem(KEY, value)
  } catch {
    // Se não dá para persistir, a escolha vale só para esta sessão.
  }
  window.dispatchEvent(new Event(CONSENT_EVENT))
}
