'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { CONSENT_EVENT, readConsent } from '@/lib/consent'

// O Pixel ID é público (aparece no HTML de qualquer forma). Fica fixo para não
// depender de variável de ambiente; a env sobrescreve quando presente, o que
// permite apontar preview para outro dataset ou desligar o pixel.
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '1964939817558572'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

/**
 * Pixel da Meta para a landing page.
 *
 * Só carrega DEPOIS do consentimento explícito (ver `lib/consent`). Antes
 * disso nada é requisitado da Meta e nenhum cookie de terceiro é criado.
 *
 * Dispara SOMENTE PageView e eventos de clique (DownloadClick / PlanCtaClick).
 *
 * NÃO dispara Purchase nem Subscribe — a assinatura é reportada server-side
 * pelo webhook do Stripe (repo bella-obra) via Conversions API, com
 * event_name "Subscribe", event_id `subscribe_<stripe_subscription_id>` e
 * external_id = SHA-256 do companyId. Adicionar Subscribe aqui contaria a
 * mesma venda duas vezes.
 *
 * O clique é capturado por delegação em [data-fb-event], para não precisar
 * envolver cada CTA num componente cliente.
 */
export default function MetaPixel() {
  const [granted, setGranted] = useState(false)

  // Começa `false` no servidor e no primeiro render do cliente — sem
  // divergência de hidratação. A leitura real acontece no efeito.
  useEffect(() => {
    const sync = () => setGranted(readConsent() === 'granted')
    sync()
    window.addEventListener(CONSENT_EVENT, sync)
    window.addEventListener('storage', sync) // escolha feita em outra aba
    return () => {
      window.removeEventListener(CONSENT_EVENT, sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  useEffect(() => {
    if (!granted) return

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const el = target?.closest<HTMLElement>('[data-fb-event]')
      if (!el) return

      const name = el.dataset.fbEvent
      if (!name) return

      const params: Record<string, string> = {}
      if (el.dataset.fbPlatform) params.platform = el.dataset.fbPlatform
      if (el.dataset.fbPlan) params.plan = el.dataset.fbPlan
      if (el.dataset.fbBilling) params.billing = el.dataset.fbBilling

      window.fbq?.('trackCustom', name, params)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [granted])

  if (!granted || !PIXEL_ID) return null

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}
