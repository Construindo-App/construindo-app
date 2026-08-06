'use client'

import { useEffect, useState } from 'react'
import { CONSENT_EVENT, readConsent, writeConsent } from '@/lib/consent'

/**
 * Opção de saída dos cookies de publicidade.
 *
 * O pixel carrega por padrão; este link é o mecanismo de oposição exigido
 * pelo art. 18, § 2.º, da LGPD para tratamento baseado em legítimo interesse.
 * Sem ele, a base legal declarada na Política de Privacidade não se sustenta.
 */
export default function ConsentLink() {
  // Começa no padrão (rastreando) para bater com o HTML do servidor; o efeito
  // corrige para quem já optou por sair.
  const [denied, setDenied] = useState(false)

  useEffect(() => {
    const sync = () => setDenied(readConsent() === 'denied')
    sync()
    window.addEventListener(CONSENT_EVENT, sync)
    return () => window.removeEventListener(CONSENT_EVENT, sync)
  }, [])

  return (
    <button
      type="button"
      className="footer-linkbtn"
      onClick={() => writeConsent(denied ? null : 'denied')}
    >
      {denied ? 'Ativar cookies de anúncios' : 'Desativar cookies de anúncios'}
    </button>
  )
}
