'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const DURATION = 6000

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

function renderStage(i: number) {
  if (i === 0) {
    return (
      <div className="cf-stage cf-stage--diario cf-stage-anim" key={i}>
        <div className="cf-dy-path">
          <Image src="/photo-path.png" alt="Trilha da obra" width={576} height={292} style={{ width: 'auto', height: '100%' }} />
        </div>
        <div className="cf-dy-feed">
          <div className="cf-dy-card">
            <div className="cf-dy-date">8 de Janeiro, 2026</div>
            <div className="cf-dy-photo-row">
              <div className="cf-dy-photo">
                <Image src="/diary/post-1-2.jpg" alt="" width={260} height={240} style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="cf-dy-photo">
                <Image src="/diary/post-1-1.jpg" alt="" width={260} height={240} style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
            <p className="cf-dy-desc">Finalizando a etapa de alvenaria e iniciando vigas superiores e laje essa semana.</p>
          </div>
          <div className="cf-dy-card">
            <div className="cf-dy-date">2 de Janeiro, 2026</div>
            <div className="cf-dy-photo-row">
              <div className="cf-dy-photo">
                <Image src="/log-2-1.png" alt="" width={260} height={240} style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="cf-dy-photo">
                <Image src="/log-2-2.png" alt="" width={260} height={240} style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
            <p className="cf-dy-desc">Gesso e sanca com LED instalados. Porcelanato aplicado na sala principal.</p>
          </div>
        </div>
      </div>
    )
  }
  if (i === 1) {
    return (
      <div className="cf-stage cf-stage--pagamentos cf-stage-anim" key={i}>
        <div className="cf-sum">
          <div className="cf-sum-top">
            <span className="cf-sum-lbl">Plano de pagamento</span>
            <span className="cf-sum-val">3 de 12 parcelas</span>
          </div>
          <div className="cf-sum-bar"><div className="cf-sum-fill" /></div>
        </div>
        <div className="cf-card">
          <div className="cf-card-date"><span className="m">Nov</span><span className="d">05</span></div>
          <div className="cf-card-main">
            <div className="cf-card-title">Parcela 3 · R$1.271</div>
            <div className="cf-card-sub live">Vence hoje</div>
          </div>
          <div className="cf-card-act"><span className="cf-btn-join">Pagar</span></div>
        </div>
        <div className="cf-card">
          <div className="cf-card-date"><span className="m">Dez</span><span className="d">05</span></div>
          <div className="cf-card-main">
            <div className="cf-card-title">Parcela 4 · R$7.500</div>
            <div className="cf-card-sub">A vencer · em 1 mês</div>
          </div>
          <div className="cf-card-act"><span className="cf-badge">Agendada</span></div>
        </div>
        <div className="cf-card">
          <div className="cf-card-date"><span className="m">Jan</span><span className="d">05</span></div>
          <div className="cf-card-main">
            <div className="cf-card-title">Parcela 5 · R$7.500</div>
            <div className="cf-card-sub">A vencer · em 2 meses</div>
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
          <span className="cf-doc-l title" /><span className="cf-doc-l" /><span className="cf-doc-l" /><span className="cf-doc-l short" />
        </div>
        <div className="cf-doc cf-doc--1">
          <span className="cf-doc-l title" /><span className="cf-doc-l" /><span className="cf-doc-l" /><span className="cf-doc-l" /><span className="cf-doc-l short" />
        </div>
        <div className="cf-doc cf-doc--2">
          <span className="cf-doc-l title" /><span className="cf-doc-l" /><span className="cf-doc-l" /><span className="cf-doc-l short" />
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
