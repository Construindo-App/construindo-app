'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const DURATION = 6000
const REEL_DURATION = 3000

const DIARY_POSTS = [
  { img: '/diary/post-1-1.jpg', date: '8 de Janeiro, 2026', text: 'Finalizando a alvenaria e iniciando as vigas superiores e a laje essa semana.' },
  { img: '/diary/post-1-2.jpg', date: '2 de Janeiro, 2026', text: 'Fundação concluída e estrutura de pilares erguida dentro do prazo previsto.' },
  { img: '/log-2-1.png', date: '26 de Dezembro, 2025', text: 'Gesso e sanca com iluminação em LED instalados na sala principal.' },
  { img: '/log-2-2.png', date: '20 de Dezembro, 2025', text: 'Porcelanato aplicado e acabamentos da área social em andamento.' },
]

const FEATURES = [
  {
    id: 'diario',
    title: 'Diário de obra',
    desc: 'Registros diários com fotos e anotações. Seu cliente acompanha o avanço real da obra em tempo real, sem precisar ligar.',
  },
  {
    id: 'pagamentos',
    title: 'Gestão de pagamentos',
    desc: 'Cronograma financeiro, parcelas e boletos organizados. Histórico completo de cada pagamento, sempre à mão.',
  },
  {
    id: 'documentos',
    title: 'Gestão de documentos',
    desc: 'Contratos, plantas e alvarás sempre disponíveis. Você escolhe o que compartilhar — sem e-mail perdido, sem pasta física.',
  },
]

const N = DIARY_POSTS.length
// três cópias encadeadas para o loop infinito sem emenda visível
const REEL_LOOP = [...DIARY_POSTS, ...DIARY_POSTS, ...DIARY_POSTS]

function DiaryReel() {
  const [idx, setIdx] = useState(N) // começa na cópia do meio
  const [anim, setAnim] = useState(true)

  // avança continuamente, sempre para a frente
  useEffect(() => {
    const t = setTimeout(() => setIdx((p) => p + 1), REEL_DURATION)
    return () => clearTimeout(t)
  }, [idx])

  // ao entrar na última cópia, salta de volta para a do meio sem transição
  useEffect(() => {
    if (idx < 2 * N) return
    const t = setTimeout(() => {
      setAnim(false)
      setIdx((p) => p - N)
    }, 760)
    return () => clearTimeout(t)
  }, [idx])

  // reabilita a transição um frame após o salto
  useEffect(() => {
    if (anim) return
    const r = requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)))
    return () => cancelAnimationFrame(r)
  }, [anim])

  const real = idx % N

  return (
    <div className="cf-reel">
      <div
        className={`cf-reel-track${anim ? '' : ' no-anim'}`}
        style={{ transform: `translateX(calc(18% - ${idx * 64}%))` }}
      >
        {REEL_LOOP.map((p, j) => (
          <div key={j} className={`cf-reel-item${j === idx ? ' is-active' : ''}`}>
            <Image src={p.img} alt="" fill sizes="440px" style={{ objectFit: 'cover' }} />
            <div className="cf-reel-cap">
              <div className="cf-reel-date">{p.date}</div>
              <p className="cf-reel-text">{p.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cf-reel-timeline">
        {DIARY_POSTS.map((_, i) => (
          <div className="cf-reel-seg" key={i}>
            <span
              className={`cf-reel-seg-fill${i < real ? ' is-done' : ''}${i === real ? ' is-active' : ''}`}
              style={i === real ? { animationDuration: `${REEL_DURATION}ms` } : undefined}
              key={i === real ? `a-${idx}` : i}
            />
          </div>
        ))}
      </div>

      <div className="cf-reel-head">
        <span className="cf-reel-avatar" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" width="15" height="15"><path d="M14.5 4h-5L8 6H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-4z" /><circle cx="12" cy="12.5" r="3.2" /></svg>
        </span>
        <div className="cf-reel-id">
          <span className="cf-reel-name">Diário de obra</span>
          <span className="cf-reel-loc">Residência Jardim das Acácias</span>
        </div>
        <span className="cf-reel-live">Ao vivo</span>
      </div>
    </div>
  )
}

function renderStage(i: number) {
  if (i === 0) {
    return (
      <div className="cf-stage cf-stage--diario cf-stage-anim" key={i}>
        <DiaryReel />
      </div>
    )
  }
  if (i === 1) {
    return (
      <div className="cf-stage cf-stage--pagamentos cf-stage-anim" key={i}>
        <div className="cf-prop">
          <Image className="cf-prop-bg" src="/img-fachada.jpg" alt="Residência Jardim das Acácias" width={560} height={420} />
          <div className="cf-prop-body">
            <div className="cf-prop-name">Residência Jardim das Acácias</div>
            <div className="cf-prop-addr">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              Rua das Acácias, 525 · Maringá, PR
            </div>
            <div className="cf-prop-stats">
              <span className="cf-prop-stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="15" height="15"><path d="M3 12V7a1 1 0 0 1 1-1h6a2 2 0 0 1 2 2v4" /><path d="M12 9h7a2 2 0 0 1 2 2v1" /><path d="M2 12h20M3 12v5M21 12v5M3 17h18" /></svg>
                3 quartos
              </span>
              <span className="cf-prop-stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="15" height="15"><path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" /><path d="M5 12V6.5A2.5 2.5 0 0 1 9.8 5.4" /><path d="M6 19l-1.5 2M18 19l1.5 2" /></svg>
                2 banheiros
              </span>
              <span className="cf-prop-stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="15" height="15"><path d="M4 9V5a1 1 0 0 1 1-1h4M20 9V5a1 1 0 0 0-1-1h-4M4 15v4a1 1 0 0 0 1 1h4M20 15v4a1 1 0 0 1-1 1h-4" /></svg>
                180 m²
              </span>
            </div>
            <div className="cf-prop-pay">
              <div className="cf-prop-meta"><span className="cf-prop-paid">3</span> de 12 parcelas pagas</div>
              <div className="cf-prop-bar"><div className="cf-prop-fill" /></div>
            </div>
          </div>
        </div>
        <div className="cf-card">
          <div className="cf-card-date"><span className="m">Nov</span><span className="d">05</span></div>
          <div className="cf-card-main">
            <div className="cf-card-title">Parcela 3 · R$2.200,00</div>
            <div className="cf-card-sub live">Vence hoje</div>
          </div>
          <div className="cf-card-act"><span className="cf-btn-join">Pagar</span></div>
        </div>
        <div className="cf-card">
          <div className="cf-card-date"><span className="m">Dez</span><span className="d">05</span></div>
          <div className="cf-card-main">
            <div className="cf-card-title">Parcela 4 · R$2.200,00</div>
            <div className="cf-card-sub">A vencer · em 1 mês</div>
          </div>
          <div className="cf-card-act"><span className="cf-badge">Agendada</span></div>
        </div>
        <div className="cf-card">
          <div className="cf-card-date"><span className="m">Jan</span><span className="d">05</span></div>
          <div className="cf-card-main">
            <div className="cf-card-title">Parcela 5 · R$2.200,00</div>
            <div className="cf-card-sub">A vencer · em 2 meses</div>
          </div>
          <div className="cf-card-act"><span className="cf-badge">Agendada</span></div>
        </div>
        <div className="cf-card">
          <div className="cf-card-date"><span className="m">Fev</span><span className="d">05</span></div>
          <div className="cf-card-main">
            <div className="cf-card-title">Parcela 6 · R$2.200,00</div>
            <div className="cf-card-sub">A vencer · em 3 meses</div>
          </div>
          <div className="cf-card-act"><span className="cf-badge">Agendada</span></div>
        </div>
      </div>
    )
  }
  return (
    <div className="cf-stage cf-stage--documentos cf-stage-anim" key={i}>
      <div className="cf-folder">
        <div className="cf-folder-back" />
        <div className="cf-doc cf-doc--3">
          <span className="cf-doc-badge cf-doc-badge--jpg">JPG</span>
          <span className="cf-doc-name">Planta Baixa</span>
          <span className="cf-doc-lines"><i /><i /><i className="short" /></span>
        </div>
        <div className="cf-doc cf-doc--1">
          <span className="cf-doc-badge cf-doc-badge--pdf">PDF</span>
          <span className="cf-doc-name">Contrato de Venda</span>
          <span className="cf-doc-lines"><i /><i /><i /><i className="short" /></span>
        </div>
        <div className="cf-doc cf-doc--2">
          <span className="cf-doc-badge cf-doc-badge--doc">DOC</span>
          <span className="cf-doc-name">Manual do Proprietário</span>
          <span className="cf-doc-lines"><i /><i /><i className="short" /></span>
        </div>
        <div className="cf-folder-front" />
      </div>
    </div>
  )
}

export default function ClientPortal() {
  const [active, setActive] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setActive((a) => (a + 1) % FEATURES.length)
    }, DURATION)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [active])

  return (
    <section className="sec client-feat" id="como-funciona">
      <div className="sec-inner">
        <div className="cf-header" data-anim="fade-up">
          <h2 className="sec-h2">Transparência total para seus clientes</h2>
          <p className="sec-sub cf-sub">Seus clientes acompanham a obra em tempo real — sem telefonemas, sem WhatsApp. Tudo num portal dedicado, simples e seguro.</p>
        </div>

        <div className="cf-layout">
          <div className="cf-list">
            {FEATURES.map((f, i) => (
              <button
                key={f.id}
                className={`cf-item${active === i ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
              >
                <div className="cf-item-row">
                  <h3 className="cf-item-title">{f.title}</h3>
                  <span className="cf-item-toggle" aria-hidden="true" />
                </div>
                <div className="cf-item-desc">
                  <div>
                    <p>{f.desc}</p>
                    <div className="cf-item-foot">
                      <div className="cf-item-track">
                        {active === i && (
                          <span key={active} className="cf-item-bar" style={{ animationDuration: `${DURATION}ms` }} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
            <a href="#download" className="cf-getstarted">Começar agora</a>
          </div>

          <div className="cf-visual">
            {renderStage(active)}
          </div>
        </div>
      </div>
    </section>
  )
}
