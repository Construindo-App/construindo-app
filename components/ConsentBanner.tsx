'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CONSENT_EVENT, readConsent, writeConsent } from '@/lib/consent'

/**
 * Banner de consentimento para cookies de publicidade e mensuração.
 *
 * Opt-in: aparece enquanto não houver escolha registrada, e o Pixel da Meta
 * só carrega após "Aceitar". "Recusar" tem o mesmo peso visual que "Aceitar",
 * como exige a LGPD — recusar não pode ser mais difícil que aceitar.
 */
export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const sync = () => setVisible(readConsent() === null)
    sync()
    window.addEventListener(CONSENT_EVENT, sync)
    return () => window.removeEventListener(CONSENT_EVENT, sync)
  }, [])

  if (!visible) return null

  return (
    <div className="consent" role="dialog" aria-label="Consentimento de cookies">
      <p className="consent-text">
        Usamos cookies de publicidade da Meta para medir o desempenho dos nossos
        anúncios. Eles não são necessários para o site funcionar.{' '}
        <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
      </p>
      <div className="consent-actions">
        <button
          type="button"
          className="consent-btn consent-btn--ghost"
          onClick={() => writeConsent('denied')}
        >
          Recusar
        </button>
        <button
          type="button"
          className="consent-btn consent-btn--primary"
          onClick={() => writeConsent('granted')}
        >
          Aceitar
        </button>
      </div>
    </div>
  )
}
