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
    label: 'Obras ativas',
    iniciante: '1',
    profissional: 'Até 3',
    escritorio: 'Ilimitadas',
  },
  { label: 'Financeiro',           iniciante: true,  profissional: true,  escritorio: true  },
  { label: 'Diário de obra',       iniciante: true,  profissional: true,  escritorio: true  },
  { label: 'Leitor de notas IA',   ai: true,         iniciante: false, profissional: false, escritorio: true  },
  { label: 'Gerenciamento de venda', iniciante: true,  profissional: true,  escritorio: true  },
  {
    label: 'Gestão de documentos',
    iniciante: '10 documentos',
    profissional: 'Ilimitado',
    escritorio: 'Ilimitado',
  },
  { label: 'Checklist / Etapas',   iniciante: true,  profissional: true,  escritorio: true  },
  { label: 'Relatórios simples',   iniciante: false, profissional: true,  escritorio: true  },
  {
    label: 'Múltiplos usuários',
    iniciante: false,
    profissional: '2 usuários',
    escritorio: 'Ilimitados',
  },
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
          <p className="plans-sub">Comece de graça e escale conforme sua operação cresce.</p>
        </div>
        <div className="plans-cards-inner">

          {/* Iniciante */}
          <div className="plan-card">
            <div className="plan-card-top">
              <div className="plan-name">Iniciante</div>
              <div className="plan-price"><span className="plan-price-val">R$0</span><span className="plan-price-per">/mês</span></div>
              <div className="plan-price-note">Para sempre gratuito · 1 obra</div>
            </div>
            <Link href="https://apps.apple.com/us/app/construindo/id6767595567" className="plan-cta plan-cta--outline" target="_blank" rel="noopener noreferrer">
              Começar grátis
            </Link>
            <ul className="plan-perks">
              <li>1 obra ativa</li>
              <li>Financeiro limitado</li>
              <li>Diário da obra</li>
              <li>Cadastrar venda</li>
              <li>Controle de pagamentos</li>
              <li>Gestão de documentos</li>
            </ul>
          </div>

          {/* Profissional */}
          <div className="plan-card plan-card--featured">
            <div className="plan-badge-featured">Mais popular</div>
            <div className="plan-card-top">
              <div className="plan-name">Profissional</div>
              <div className="plan-price"><span className="plan-price-val">R$49</span><span className="plan-price-per">/mês</span></div>
              <div className="plan-price-note">R$490/ano · economize 2 meses</div>
            </div>
            <Link href="https://apps.apple.com/us/app/construindo/id6767595567" className="plan-cta plan-cta--primary" target="_blank" rel="noopener noreferrer">
              Assinar agora
            </Link>
            <ul className="plan-perks">
              <li>Até 3 obras ativas</li>
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
              <div className="plan-price"><span className="plan-price-val">R$129</span><span className="plan-price-per">/mês</span></div>
              <div className="plan-price-note">R$1.290/ano · economize 2 meses</div>
            </div>
            <Link href="https://apps.apple.com/us/app/construindo/id6767595567" className="plan-cta plan-cta--outline" target="_blank" rel="noopener noreferrer">
              Assinar agora
            </Link>
            <ul className="plan-perks">
              <li>Obras ilimitadas</li>
              <li>Tudo do Profissional</li>
              <li>Usuários ilimitados</li>
              <li>Permissões de equipe</li>
              <li>Dashboard consolidado</li>
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
