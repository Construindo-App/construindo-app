'use client'

import { useEffect, useRef, useState } from 'react'

const STEPS = [
  {
    num: '01',
    title: 'Controle financeiro',
    text: 'Acompanhe orçado vs. realizado em tempo real. Identifique desvios antes que virem problema — não no fim do mês.',
  },
  {
    num: '02',
    title: 'Diário de obra',
    text: 'Cada etapa documentada com fotos e anotações. Seu cliente acompanha o avanço real da obra sem precisar ligar ou visitar o canteiro.',
  },
  {
    num: '03',
    title: 'Equipes e fornecedores',
    text: 'Gerencie presença, produtividade e pagamentos de subempreiteiros direto do app. Histórico completo de cada profissional.',
  },
]

const financeRows = [
  { date: '24/01/2025', name: 'Porcelanatos Sala Estar', cat: '#E85440', val: 'R$1.271,38' },
  { date: '24/01/2025', name: 'Serviço de Pedreiro', cat: '#E8407E', val: 'R$1.800,00' },
  { date: '23/01/2025', name: 'Cimento Portland CP-II', cat: '#E85440', val: 'R$890,00' },
  { date: '23/01/2025', name: 'Areia e Brita', cat: '#F5A020', val: 'R$620,50' },
  { date: '22/01/2025', name: 'Instalação Elétrica', cat: '#E8407E', val: 'R$2.400,00' },
  { date: '22/01/2025', name: 'Vergalhão CA-50', cat: '#F5A020', val: 'R$3.180,00' },
]

const teamRows = [
  { name: 'Carlos Silva', role: 'Pedreiro', present: true, pay: 'R$320/dia' },
  { name: 'João Oliveira', role: 'Eletricista', present: true, pay: 'R$380/dia' },
  { name: 'Pedro Costa', role: 'Servente', present: true, pay: 'R$200/dia' },
  { name: 'Ana Ferreira', role: 'Pintora', present: false, pay: 'R$280/dia' },
  { name: 'Lucas Mendes', role: 'Encanador', present: true, pay: 'R$350/dia' },
]

const tag = (
  <path d="M0 7.25V2.75C0 1.233 1.233 0 2.75 0H8.956C9.552 0 10.101 0.298 10.426 0.799L12.88 4.593C13.04 4.841 13.04 5.16 12.88 5.407L10.425 9.201C10.101 9.701 9.552 9.999 8.956 9.999H2.75C1.233 9.999 0 8.766 0 7.249V7.25Z" />
)

export default function WhySection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let ticking = false
    const update = () => {
      ticking = false
      const rect = track.getBoundingClientRect()
      const total = track.offsetHeight - window.innerHeight
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0
      const phase = p * STEPS.length
      const idx = Math.min(STEPS.length - 1, Math.floor(phase))
      setActive(idx)
      // Continuous fill of the active step's progress bar — written straight to
      // the DOM so it animates every frame without re-rendering React.
      const local = Math.min(1, Math.max(0, phase - idx))
      const dots = dotsRef.current?.children
      if (dots) {
        for (let i = 0; i < dots.length; i++) {
          const fill = i < idx ? 1 : i === idx ? local : 0
          ;(dots[i] as HTMLElement).style.setProperty('--fill', String(fill))
        }
      }
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    update()
    if (!reduce) {
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll, { passive: true })
    }
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const goToStep = (i: number) => {
    const track = trackRef.current
    if (!track) return
    const total = track.offsetHeight - window.innerHeight
    const targetWithin = ((i + 0.5) / STEPS.length) * total
    const top = track.offsetTop + targetWithin
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section className="why why-pin" id="por-que">
      <div className="why-pin-track" ref={trackRef}>
        <div className="why-pin-stage">
          <div className="why-pin-inner">
            {/* LEFT — scrolling text */}
            <div className="why-pin-text">
              <h2 className="sec-h2 why-pin-h2">Gestão de obra sem cara de ERP.</h2>
              <div className="why-pin-bottom-block">
                <div className="why-pin-slides">
                  {STEPS.map((s, i) => (
                    <div className={`why-pin-slide${i === active ? ' is-active' : ''}`} key={s.num}>
                      <div className="why-step-num">
                        {s.num} <span className="why-sep">/ 03</span>
                        <span className="why-ttl">{s.title}</span>
                      </div>
                      <p>{s.text}</p>
                    </div>
                  ))}
                </div>
                <div className="why-pin-dots" ref={dotsRef}>
                  {STEPS.map((s, i) => (
                    <button
                      type="button"
                      key={s.num}
                      className={`why-pin-dot${i === active ? ' is-active' : ''}`}
                      onClick={() => goToStep(i)}
                      aria-label={`Ir para ${s.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — fixed phone whose screen morphs */}
            <div className="why-pin-visual">
              <div className={`why-pin-bg ws-bg-1${active === 0 ? ' is-active' : ''}`} />
              <div className={`why-pin-bg ws-bg-2${active === 1 ? ' is-active' : ''}`} />
              <div className={`why-pin-bg ws-bg-3${active === 2 ? ' is-active' : ''}`} />

              <div className="iphone-frame why-pin-phone">
                <div className="iphone-inner">
                  <div className="why-pin-screens">
                    {/* Screen 1 — Finance */}
                    <div className={`iphone-screen ws-screen-finance why-pin-screen${active === 0 ? ' is-active' : ''}`}>
                      <div className="wsf-budget">
                        <div className="wsf-budget-row">
                          <span className="wsf-budget-used">R$107.834,71</span>
                          <span className="wsf-budget-total">R$220.000,00</span>
                        </div>
                        <div className="wsf-budget-bar"><div className="wsf-budget-fill"></div></div>
                      </div>
                      <div className="wsf-donut-wrap">
                        <svg className="wsf-donut" viewBox="0 0 120 120">
                          <circle cx="60" cy="60" r="46" fill="none" stroke="#5B7EF5" strokeWidth="16" strokeLinecap="round" className="wsf-seg-1" strokeDashoffset="-10" />
                          <circle cx="60" cy="60" r="46" fill="none" stroke="#E8407E" strokeWidth="16" strokeLinecap="round" className="wsf-seg-2" strokeDashoffset="-124" />
                          <circle cx="60" cy="60" r="46" fill="none" stroke="#E85440" strokeWidth="16" strokeLinecap="round" className="wsf-seg-3" strokeDashoffset="-196" />
                          <circle cx="60" cy="60" r="46" fill="none" stroke="#F5A020" strokeWidth="16" strokeLinecap="round" className="wsf-seg-4" strokeDashoffset="-258" />
                        </svg>
                        <div className="wsf-donut-center">
                          <div className="wsf-donut-num">472</div>
                          <div className="wsf-donut-lbl">NOTAS</div>
                        </div>
                      </div>
                      <div className="wsf-legend">
                        <div className="wsf-leg-item"><svg className="wsf-tag" viewBox="0 0 14 10" style={{ fill: '#5B7EF5' }}>{tag}</svg>Terreno 45.1%</div>
                        <div className="wsf-leg-item"><svg className="wsf-tag" viewBox="0 0 14 10" style={{ fill: '#E8407E' }}>{tag}</svg>Mão de obra 24.9%</div>
                        <div className="wsf-leg-item"><svg className="wsf-tag" viewBox="0 0 14 10" style={{ fill: '#E85440' }}>{tag}</svg>Materiais</div>
                        <div className="wsf-leg-item"><svg className="wsf-tag" viewBox="0 0 14 10" style={{ fill: '#F5A020' }}>{tag}</svg>Fundação</div>
                      </div>
                      <div className="wsf-bottom">
                        <div className="wsf-search">
                          <div className="wsf-search-bar">
                            <svg className="wsf-search-icon" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                            <span className="wsf-search-placeholder">Buscar por nome ou empresa</span>
                          </div>
                          <div className="wsf-search-filter">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8"><line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="11" y1="18" x2="13" y2="18" /></svg>
                          </div>
                        </div>
                        <div className="wsf-list">
                          {financeRows.map((item, i) => (
                            <div key={i}>
                              {(i === 0 || item.date !== financeRows[i - 1]?.date) && (
                                <div className="wsf-date">{item.date}</div>
                              )}
                              <div className={`wsf-row wsf-row--anim${Math.min(i + 1, 6)}`}>
                                <div className="wsf-row-icon">
                                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 17H8" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 13H16" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V8.41421C20 8.149 19.8946 7.89465 19.7071 7.70711L15.2929 3.29289C15.1054 3.10536 14.851 3 14.5858 3H6C5.46957 3 4.96086 3.21071 4.58579 3.58579C4.21071 3.96086 4 4.46957 4 5V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21Z" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 9H16C15.4696 9 14.9609 8.78929 14.5858 8.41421C14.2107 8.03914 14 7.53043 14 7V3" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </div>
                                <div className="wsf-row-info">
                                  <div className="wsf-row-name">{item.name}</div>
                                  <div className="wsf-row-sub"><svg className="wsf-tag wsf-tag--sm" viewBox="0 0 14 10" style={{ fill: item.cat }}>{tag}</svg>{item.val} · Bigolin</div>
                                </div>
                                <div className="wsf-row-eye"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Screen 2 — Diary */}
                    <div className={`iphone-screen ws-screen-diary why-pin-screen${active === 1 ? ' is-active' : ''}`}>
                      <div className="wsd-path">
                        <img src="/photo-path.png" alt="Progresso" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                      </div>
                      <div className="wsd-card">
                        <div className="wsd-title">Diário da Obra</div>
                        <div className="wsd-feed">
                          <div className="wsd-entry wsd-entry--anim1">
                            <div className="wsd-date-row">
                              <span className="wsd-diamond">◆</span>
                              <span className="wsd-date">8 de Janeiro, 2025</span>
                            </div>
                            <div className="wsd-photo">
                              <img src="/log-1.png" alt="Fundação" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                              <div className="wsd-photo-overlay">
                                <span className="wsd-photo-tag">Fundação</span>
                              </div>
                            </div>
                            <p className="wsd-desc">Formas e armadura das vigas baldrame posicionadas. Terreno preparado para concretagem.</p>
                          </div>
                          <div className="wsd-entry wsd-entry--anim2">
                            <div className="wsd-date-row">
                              <span className="wsd-diamond">◆</span>
                              <span className="wsd-date">2 de Janeiro, 2025</span>
                            </div>
                            <div className="wsd-photo-row">
                              <div className="wsd-photo wsd-photo--half">
                                <img src="/log-2-1.png" alt="Acabamento" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                <div className="wsd-photo-overlay">
                                  <span className="wsd-photo-tag">Acabamento</span>
                                </div>
                              </div>
                              <div className="wsd-photo wsd-photo--half">
                                <img src="/log-2-2.png" alt="Sanca" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                              </div>
                            </div>
                            <p className="wsd-desc">Gesso e sanca com LED instalados. Porcelanato aplicado na sala principal.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Screen 3 — Team */}
                    <div className={`iphone-screen ws-screen-team why-pin-screen${active === 2 ? ' is-active' : ''}`}>
                      <div className="wst-header">
                        <div className="wst-title">Equipe</div>
                        <div className="wst-badge">8 ativos hoje</div>
                      </div>
                      <div className="wst-list">
                        {teamRows.map((p, i) => (
                          <div className={`wst-row wst-row--anim${i + 1}`} key={i}>
                            <div className="wst-avatar" style={{ background: ['#818CF8', '#E8407E', '#5B7EF5', '#F5A020', '#34d399'][i] }}>
                              {p.name.charAt(0)}
                            </div>
                            <div className="wst-info">
                              <div className="wst-name">{p.name}</div>
                              <div className="wst-role">{p.role} · {p.pay}</div>
                            </div>
                            <div className={`wst-status ${p.present ? 'present' : 'absent'}`}>
                              {p.present ? '✓' : '○'}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="wst-section">Fornecedores</div>
                      <div className="wst-row wst-row--anim6">
                        <div className="wst-avatar" style={{ background: '#6b7280', fontSize: '5px', fontWeight: 700 }}>BM</div>
                        <div className="wst-info">
                          <div className="wst-name">Bigolin Materiais</div>
                          <div className="wst-role">Última entrega: 24/01</div>
                        </div>
                        <div className="wst-status present">✓</div>
                      </div>
                    </div>
                  </div>
                  <div className="iphone-home"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
