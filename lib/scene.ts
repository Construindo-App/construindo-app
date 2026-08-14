'use client'

import { useEffect, useRef, useState } from 'react'

/* Miolo compartilhado das cenas portadas do Claude Design (os steps da seção
   "Gestão de obra sem cara de ERP"). O runtime original — CompositionStage,
   useComposition, Easing — ficou de fora: aqui sobraram só as easings que as
   composições realmente usam, o interpolador de keyframes e os dois ganchos
   que cada cena precisa (o palco escalado e o clock próprio). */

export const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v))

export type Ease = (t: number) => number

export const easeOutCubic: Ease = (t) => {
  const u = t - 1
  return u * u * u + 1
}
export const easeInOutCubic: Ease = (t) =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
export const easeInOutSine: Ease = (t) => -(Math.cos(Math.PI * t) - 1) / 2
export const easeInQuad: Ease = (t) => t * t
export const easeOutBack: Ease = (t) => {
  const c1 = 1.70158
  const c3 = c1 + 1
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)
}

export type Keyframes = readonly (readonly [number, number])[]

/* Interpola uma curva de keyframes [tempo, valor] no instante T. */
export function kf(T: number, pts: Keyframes, ease: Ease = easeInOutCubic): number {
  if (T <= pts[0][0]) return pts[0][1]
  for (let i = 0; i < pts.length - 1; i++) {
    const [t0, v0] = pts[i]
    const [t1, v1] = pts[i + 1]
    if (T <= t1) {
      const k = t1 === t0 ? 1 : (T - t0) / (t1 - t0)
      return v0 + (v1 - v0) * ease(clamp(k, 0, 1))
    }
  }
  return pts[pts.length - 1][1]
}

/* Rampa 0→1 entre dois instantes. */
export const ramp = (T: number, a: number, b: number, ease: Ease = easeOutCubic) =>
  ease(clamp((T - a) / (b - a), 0, 1))

/* Palco virtual: altura fixa (as coordenadas em que a cena foi desenhada) e
   largura acompanhando o telefone real, para o conteúdo não ficar em
   letterbox. Devolve o ref da caixa da tela e a escala medida. */
export function useSceneStage(stageH: number) {
  const ref = useRef<HTMLDivElement>(null)
  /* Padrão = caso desktop (tela de 276×460), trocado na primeira medida. */
  const [stage, setStage] = useState(() => {
    const scale = 460 / stageH
    return { scale, vw: 276 / scale }
  })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const measure = () => {
      const { width, height } = el.getBoundingClientRect()
      if (width <= 0 || height <= 0) return
      const scale = height / stageH
      setStage({ scale, vw: width / scale })
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [stageH])

  return [ref, stage] as const
}

/* Clock da cena: só roda enquanto `playing`, e congela num instante
   representativo quando o visitante pediu menos movimento. */
export function useSceneClock(playing: boolean, total: number, stillT: number) {
  const [T, setT] = useState(0)

  useEffect(() => {
    if (!playing) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setT(stillT)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      setT(((now - start) / 1000) % total)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [playing, total, stillT])

  return T
}
