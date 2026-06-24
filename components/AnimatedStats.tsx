'use client'

import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, decimals: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(parseFloat((eased * target).toFixed(decimals)))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration, decimals])
  return value
}

const stats = [
  { prefix: '',    suffix: 'K+', target: 50,   decimals: 0, label: 'Obras gerenciadas na plataforma' },
  { prefix: 'R$',  suffix: 'B+', target: 2,    decimals: 0, label: 'Em custos de obras controlados'  },
  { prefix: '',    suffix: '+',  target: 1200, decimals: 0, label: 'Construtoras ativas'             },
  { prefix: '',    suffix: '★',  target: 4.9,  decimals: 1, label: 'Avaliação média nas lojas'       },
]

function StatItem({ stat, active, delay }: { stat: typeof stats[0]; active: boolean; delay: number }) {
  const val = useCountUp(stat.target, stat.decimals, 1600, active)
  const display = stat.decimals > 0
    ? val.toFixed(stat.decimals)
    : stat.target >= 1000
      ? val.toLocaleString('pt-BR')
      : val.toString()

  return (
    <div
      className="stat-item-anim"
      style={{ animationDelay: `${delay}ms` } as React.CSSProperties}
    >
      <div className="stat-num">
        {stat.prefix}{display}{stat.suffix === '★' ? <span className="stat-star">{stat.suffix}</span> : stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  )
}

export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`stats-inner${active ? ' stats-visible' : ''}`}>
      {stats.map((s, i) => (
        <StatItem key={s.label} stat={s} active={active} delay={i * 100} />
      ))}
    </div>
  )
}
