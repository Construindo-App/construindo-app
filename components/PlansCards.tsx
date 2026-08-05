'use client'

import Link from 'next/link'
import { useState } from 'react'

const DOWNLOAD_URL = 'https://api.construindo.app/link/download'

/** O redirecionamento por plataforma (iOS / Android) é feito pelo backend. */
function downloadHref(plan: string, annual: boolean) {
  const params = new URLSearchParams({
    utm_source: 'lp',
    utm_medium: 'planos',
    utm_content: plan,
    utm_term: annual ? 'annual' : 'monthly',
  })
  return `${DOWNLOAD_URL}?${params}`
}

/**
 * Desconto real do anual sobre o mensal:
 *   Profissional  12 × R$49  = R$588   → R$490   (16,7%)
 *   Escritório    12 × R$129 = R$1.548 → R$1.290 (16,7%)
 * Ou seja, os mesmos "2 meses grátis" já anunciados nos cards.
 */
const ANNUAL_DISCOUNT = '17% desconto'

type Price = { val: string; per: string; note: string; alt: string }

type Plan = {
  id: string
  name: string
  featured?: boolean
  monthly: Price
  annual: Price
  cta: string
  ctaVariant: 'primary' | 'outline'
  perks: string[]
}

const FREE: Price = {
  val: 'R$0',
  per: '/sempre',
  note: 'Sem cartão, sem prazo de teste',
  alt: '1 obra, para você começar hoje',
}

const PLANS: Plan[] = [
  {
    id: 'iniciante',
    name: 'Iniciante',
    monthly: FREE,
    annual: FREE,
    cta: 'Começar grátis',
    ctaVariant: 'outline',
    perks: [
      '1 obra',
      'Financeiro da obra',
      'Diário da obra',
      'Cadastrar venda',
      'Controle de pagamentos',
      '6 documentos por obra',
      '10 leituras de nota com IA',
    ],
  },
  {
    id: 'profissional',
    name: 'Profissional',
    featured: true,
    monthly: {
      val: 'R$49',
      per: '/mês',
      note: 'Cobrado todo mês',
      alt: 'cancele quando quiser',
    },
    annual: {
      val: 'R$490',
      per: '/ano',
      note: 'Equivale a R$40,83/mês',
      alt: '2 meses grátis no anual',
    },
    cta: 'Assinar agora',
    ctaVariant: 'primary',
    perks: [
      '5 obras',
      'Leitor de notas com IA ilimitado',
      'Documentos ilimitados',
      'Tudo do Iniciante',
      'Relatórios simples',
      '2 usuários',
      'Exportação PDF/Excel',
    ],
  },
  {
    id: 'escritorio',
    name: 'Escritório',
    monthly: {
      val: 'R$129',
      per: '/mês',
      note: 'Cobrado todo mês',
      alt: 'cancele quando quiser',
    },
    annual: {
      val: 'R$1.290',
      per: '/ano',
      note: 'Equivale a R$107,50/mês',
      alt: '2 meses grátis no anual',
    },
    cta: 'Assinar agora',
    ctaVariant: 'outline',
    perks: [
      'Usuários ilimitados',
      'Permissões por membro da equipe',
      'Dashboard com todas as obras juntas',
      'Tudo do Profissional',
      'Suporte prioritário',
    ],
  },
]

export default function PlansCards() {
  // Anual por padrão: é o alvo comercial.
  const [annual, setAnnual] = useState(true)

  return (
    <>
      <div className="billing-toggle">
        <button
          type="button"
          className={`billing-opt${annual ? '' : ' is-active'}`}
          onClick={() => setAnnual(false)}
        >
          Mensal
        </button>

        <button
          type="button"
          role="switch"
          aria-checked={annual}
          aria-label="Cobrança anual"
          className={`billing-switch${annual ? ' is-on' : ''}`}
          onClick={() => setAnnual((a) => !a)}
        >
          <span className="billing-switch-knob" />
        </button>

        <button
          type="button"
          className={`billing-opt${annual ? ' is-active' : ''}`}
          onClick={() => setAnnual(true)}
        >
          Anual
        </button>

        <span className="billing-badge">{ANNUAL_DISCOUNT}</span>
      </div>

      <div className="plans-cards-inner">
        {PLANS.map((plan) => {
          const price = annual ? plan.annual : plan.monthly
          return (
            <div
              key={plan.id}
              className={`plan-card${plan.featured ? ' plan-card--featured' : ''}`}
            >
              {plan.featured && <div className="plan-badge-featured">Mais popular</div>}
              <div className="plan-card-top">
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">
                  <span className="plan-price-val">{price.val}</span>
                  <span className="plan-price-per">{price.per}</span>
                </div>
                <div className="plan-price-note">{price.note}</div>
                <div className="plan-price-alt">{price.alt}</div>
              </div>
              <Link
                href={downloadHref(plan.id, annual)}
                className={`plan-cta plan-cta--${plan.ctaVariant}`}
                target="_blank"
                rel="noopener noreferrer"
                data-fb-event="PlanCtaClick"
                data-fb-plan={plan.id}
                data-fb-billing={annual ? 'annual' : 'monthly'}
              >
                {plan.cta}
              </Link>
              <ul className="plan-perks">
                {plan.perks.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </>
  )
}
