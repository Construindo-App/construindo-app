'use client'

import { writeConsent } from '@/lib/consent'

/**
 * Reabre o banner de consentimento, permitindo revogar ou conceder de novo.
 * A LGPD exige que revogar seja tão simples quanto consentir.
 */
export default function ConsentLink() {
  return (
    <button type="button" className="footer-linkbtn" onClick={() => writeConsent(null)}>
      Cookies
    </button>
  )
}
