import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PlansCards from '@/components/PlansCards'

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
        <PlansCards />
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
