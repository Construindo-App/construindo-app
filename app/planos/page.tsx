import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Planos — Construindo',
  description: 'Escolha o plano ideal para gerenciar suas obras. Iniciante gratuito, Profissional e Escritório.',
}

const features = [
  {
    label: 'Obras',
    iniciante: '1',
    profissional: '5',
    escritorio: 'Ilimitadas',
  },
  {
    label: 'Unidades por empreendimento',
    iniciante: '2',
    profissional: '5',
    escritorio: 'Ilimitadas',
  },
  {
    label: 'Usuários',
    iniciante: '1',
    profissional: '2',
    escritorio: 'Ilimitados',
  },
  { label: 'Financeiro',           iniciante: true,  profissional: true,  escritorio: true  },
  { label: 'Diário de obra',       iniciante: true,  profissional: true,  escritorio: true  },
  {
    label: 'Leitor de notas IA',
    ai: true,
    iniciante: '10 leituras',
    profissional: 'Ilimitado',
    escritorio: 'Ilimitado',
  },
  { label: 'Gerenciamento de venda', iniciante: true,  profissional: true,  escritorio: true  },
  {
    label: 'Documentos por obra',
    iniciante: '6',
    profissional: 'Ilimitado',
    escritorio: 'Ilimitado',
  },
  { label: 'Checklist / Etapas',   iniciante: true,  profissional: true,  escritorio: true  },
  { label: 'Relatórios simples',   iniciante: false, profissional: true,  escritorio: true  },
  { label: 'Permissões de equipe', iniciante: false, profissional: false, escritorio: true  },
  { label: 'Dashboard consolidado',iniciante: false, profissional: false, escritorio: true  },
  { label: 'Exportação PDF/Excel', iniciante: false, profissional: true,  escritorio: true  },
  { label: 'Suporte prioritário',  iniciante: false, profissional: false, escritorio: true  },
]

function Cell({ value }: { value: boolean | string }) {
  if (value === true)  return <span className="plan-check">✓</span>
  if (value === false) return <span className="plan-cross">✕</span>
  return <span className="plan-text">{value}</span>
}

export default function PlanosPage() {
  return (
    <>
      <Nav />

      <div className="plans-hero">
        <div className="plans-hero-inner">
          <h1 className="plans-h1">Simples, transparente,<br /><span className="grad">sem surpresas.</span></h1>
          <p className="plans-sub">Comece de graça. Quando a segunda obra chegar, você já sabe quanto custa.</p>
        </div>
        <div className="plans-cards-inner">

          {/* Iniciante */}
          <div className="plan-card">
            <div className="plan-card-top">
              <div className="plan-name">Iniciante</div>
              <div className="plan-price"><span className="plan-price-val">R$0</span><span className="plan-price-per">/sempre</span></div>
              <div className="plan-price-note">Sem cartão, sem prazo de teste</div>
              <div className="plan-price-alt">1 obra, para você começar hoje</div>
            </div>
            <Link href="https://apps.apple.com/us/app/construindo/id6767595567" className="plan-cta plan-cta--outline" target="_blank" rel="noopener noreferrer" data-fb-event="PlanCtaClick" data-fb-plan="iniciante">
              Começar grátis
            </Link>
            <ul className="plan-perks">
              <li>1 obra, até 2 unidades</li>
              <li>Financeiro da obra</li>
              <li>Diário da obra</li>
              <li>Cadastrar venda</li>
              <li>Controle de pagamentos</li>
              <li>6 documentos por obra</li>
              <li>10 leituras de nota com IA</li>
            </ul>
          </div>

          {/* Profissional */}
          <div className="plan-card plan-card--featured">
            <div className="plan-badge-featured">Mais popular</div>
            <div className="plan-card-top">
              <div className="plan-name">Profissional</div>
              <div className="plan-price"><span className="plan-price-val">R$490</span><span className="plan-price-per">/ano</span></div>
              <div className="plan-price-note">Equivale a R$40,83/mês · 2 meses grátis</div>
              <div className="plan-price-alt">ou R$49/mês no plano mensal</div>
            </div>
            <Link href="https://apps.apple.com/us/app/construindo/id6767595567" className="plan-cta plan-cta--primary" target="_blank" rel="noopener noreferrer" data-fb-event="PlanCtaClick" data-fb-plan="profissional">
              Assinar agora
            </Link>
            <ul className="plan-perks">
              <li>5 obras, até 5 unidades cada</li>
              <li>Leitor de notas com IA ilimitado</li>
              <li>Documentos ilimitados</li>
              <li>Tudo do Iniciante</li>
              <li>Relatórios simples</li>
              <li>2 usuários</li>
              <li>Exportação PDF/Excel</li>
            </ul>
          </div>

          {/* Escritório */}
          <div className="plan-card">
            <div className="plan-card-top">
              <div className="plan-name">Escritório</div>
              <div className="plan-price"><span className="plan-price-val">R$1.290</span><span className="plan-price-per">/ano</span></div>
              <div className="plan-price-note">Equivale a R$107,50/mês · 2 meses grátis</div>
              <div className="plan-price-alt">ou R$129/mês no plano mensal</div>
            </div>
            <Link href="https://apps.apple.com/us/app/construindo/id6767595567" className="plan-cta plan-cta--outline" target="_blank" rel="noopener noreferrer" data-fb-event="PlanCtaClick" data-fb-plan="escritorio">
              Assinar agora
            </Link>
            <ul className="plan-perks">
              <li>Usuários ilimitados</li>
              <li>Permissões por membro da equipe</li>
              <li>Dashboard com todas as obras juntas</li>
              <li>Tudo do Profissional</li>
              <li>Suporte prioritário</li>
            </ul>
          </div>

        </div>
      </div>

      {/* COMPARISON TABLE */}
      <section className="plans-table-sec">
        <div className="plans-table-inner">
          <h2 className="plans-table-title">Compare todos os recursos</h2>
          <div className="plans-table-wrap">
            <table className="plans-table">
              <thead>
                <tr>
                  <th className="plans-th-feat">Funcionalidade</th>
                  <th>Iniciante</th>
                  <th className="plans-th-featured">Profissional</th>
                  <th>Escritório</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f) => (
                  <tr key={f.label}>
                    <td className="plans-td-feat">
                      {'ai' in f && f.ai && <span className="plan-ai-mark">✦</span>}
                      {f.label}
                    </td>
                    <td><Cell value={f.iniciante} /></td>
                    <td className="plans-td-featured"><Cell value={f.profissional} /></td>
                    <td><Cell value={f.escritorio} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer variant="main" />
    </>
  )
}
