'use client'

import { useEffect, useRef, useState } from 'react'
import ProgressScreen from '@/components/ProgressScreen'
import ReceiptReaderScreen from '@/components/ReceiptReaderScreen'

const STEPS = [
  {
    num: '01',
    title: 'Leitor de notas com IA',
    text: 'Fotografe a nota fiscal e pronto: a IA lê fornecedor, itens e total, e lança tudo na obra certa. Sem digitar, sem guardar papel no porta-luvas.',
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

const teamRows = [
  { name: 'Carlos Silva', role: 'Pedreiro', present: true, pay: 'R$320/dia' },
  { name: 'João Oliveira', role: 'Eletricista', present: true, pay: 'R$380/dia' },
  { name: 'Pedro Costa', role: 'Servente', present: true, pay: 'R$200/dia' },
  { name: 'Ana Ferreira', role: 'Pintora', present: false, pay: 'R$280/dia' },
  { name: 'Lucas Mendes', role: 'Encanador', present: true, pay: 'R$350/dia' },
]

export default function WhySection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [onScreen, setOnScreen] = useState(false)

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

  // O step 1 conta como ativo mesmo antes da seção entrar na tela (o progresso
  // fica preso em 0), então a animação do leitor de notas só roda quando o
  // trecho fixado está de fato visível.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting))
    io.observe(track)
    return () => io.disconnect()
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
                    {/* Screen 1 — Leitor de notas com IA */}
                    <ReceiptReaderScreen active={active === 0} playing={active === 0 && onScreen} />

                    {/* Screen 2 — Diário de obra */}
                    <ProgressScreen active={active === 1} playing={active === 1 && onScreen} />

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
