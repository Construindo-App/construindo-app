'use client'

import {
  easeInOutCubic,
  easeInQuad,
  easeOutBack,
  easeOutCubic,
  kf,
  ramp,
  useSceneClock,
  useSceneStage,
  type Keyframes,
} from '@/lib/scene'

/* Cena "Progresso da Obra", portada do Claude Design com o mesmo tratamento do
   leitor de notas: a composição roda num clock próprio (ver lib/scene) sobre um
   palco virtual de 910px de altura escalado para a tela do iPhone. As
   coordenadas são as da cena original — que já eram relativas à tela, então
   entram aqui sem conversão. */

/* Igual a var(--orange), mas precisa ser hex literal: a cena compõe alfa
   concatenando (`${ACCENT}22`), o que não funciona com custom property. */
const ACCENT = '#DE6333'

const C = {
  ink: '#0D0D0D',
  ink2: '#3A4048',
  mute: '#6B6760',
  line: 'rgba(13,13,13,0.10)',
  photo: '#E6DED3',
  white: '#FFFFFF',
  /* Verde de "concluído", o mesmo dos avatares da tela de equipe. */
  done: '#34D399',
} as const

const SANS = 'var(--font-jakarta), system-ui, sans-serif'
const SERIF = 'var(--font-cardo), Georgia, serif'

/* Uma cena por etapa: 1,8s cada, 2,4s na última para o relatório subir. */
const CUES = [0, 1.8, 3.6, 5.4, 7.2] as const
const TOTAL = 9.6
/* Estado congelado quando o visitante pediu menos movimento: relatório enviado. */
const STILL_T = 8.3

const STAGE_H = 910
/* Distância entre os topos de dois cards do feed. */
const PITCH = 372
const FEED = { top: 372, h: 518 }

const PHASES = [
  {
    title: 'Fundação',
    date: '12 fev',
    note: 'Sapatas e baldrame concretados',
    by: 'Mestre Jorge · 4 fotos',
    img: '/log-1.png',
    pct: 20,
    etapas: 1,
    restante: 322,
    done: true,
  },
  {
    title: 'Alvenaria',
    date: '03 mar',
    note: 'Paredes do térreo levantadas',
    by: 'Mestre Jorge · 6 fotos',
    img: '/diary/post-1-1.jpg',
    pct: 40,
    etapas: 2,
    restante: 268,
    done: true,
  },
  {
    title: 'Estrutura e laje',
    date: '21 mar',
    note: 'Laje do pavimento concretada',
    by: 'Eng. Carla · 5 fotos',
    img: '/tm-obra-aerea.jpg',
    pct: 57.2,
    etapas: 3,
    restante: 214,
    done: true,
  },
  {
    title: 'Instalações',
    date: '14 abr',
    note: 'Elétrica e hidráulica embutidas',
    by: 'Mestre Jorge · 3 fotos',
    img: '/diary/post-1-2.jpg',
    pct: 78.4,
    etapas: 4,
    restante: 172,
    done: true,
  },
  {
    title: 'Acabamento',
    date: '02 mai',
    note: 'Reboco interno e porcelanato',
    by: 'Eng. Carla · 7 fotos',
    img: '/log-2-1.png',
    pct: 92.8,
    etapas: 4,
    restante: 150,
    done: false,
  },
] as const

type Phase = (typeof PHASES)[number]

/* ── Um post do feed: foto, selo de status e o quanto a obra andou ── */
function Card({ p, cue, T, top }: { p: Phase; cue: number; T: number; top: number }) {
  const a = ramp(T, cue - 0.7, cue - 0.1)
  const lift = (1 - a) * 26

  return (
    <div style={{ position: 'absolute', left: 76, right: 22, top, height: 336 }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: C.white,
          borderRadius: 22,
          boxShadow: `0 ${10 + 14 * a}px ${26 + 18 * a}px -16px rgba(13,13,13,${0.22 + 0.18 * a})`,
          overflow: 'hidden',
          opacity: 0.55 + 0.45 * a,
          transform: `translateY(${lift}px)`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 196,
            background: C.photo,
            overflow: 'hidden',
          }}
        >
          <img
            src={p.img}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: `saturate(${0.72 + 0.28 * a}) contrast(1.02)`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 14,
              top: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(13,13,13,0.72)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              borderRadius: 999,
              padding: '7px 13px',
            }}
          >
            <div
              style={{ width: 9, height: 9, borderRadius: 5, background: p.done ? C.done : ACCENT }}
            />
            <span
              style={{
                fontFamily: SANS,
                fontSize: 14,
                fontWeight: 600,
                color: '#fff',
                letterSpacing: '0.2px',
              }}
            >
              {p.done ? 'Concluído' : 'Em andamento'}
            </span>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            left: 20,
            right: 20,
            top: 214,
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: 10,
          }}
        >
          <span
            style={{
              fontFamily: SANS,
              fontSize: 23,
              fontWeight: 700,
              color: C.ink,
              letterSpacing: '-0.3px',
              whiteSpace: 'nowrap',
            }}
          >
            {p.title}
          </span>
          <span style={{ fontFamily: SANS, fontSize: 15, fontWeight: 600, color: C.mute }}>
            {p.date}
          </span>
        </div>
        <div
          style={{
            position: 'absolute',
            left: 20,
            right: 20,
            top: 250,
            fontFamily: SANS,
            fontSize: 17,
            lineHeight: 1.3,
            color: C.ink2,
          }}
        >
          {p.note}
        </div>
        <div
          style={{
            position: 'absolute',
            left: 20,
            right: 20,
            top: 296,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontFamily: SANS, fontSize: 15, color: C.mute }}>{p.by}</span>
          <span style={{ fontFamily: SANS, fontSize: 15, fontWeight: 700, color: ACCENT }}>
            {p.pct.toFixed(1).replace('.', ',')}%
          </span>
        </div>
      </div>
    </div>
  )
}

/* ── A linha do tempo à esquerda do feed, que acende etapa a etapa ── */
function Spine({ T }: { T: number }) {
  const last = PHASES.length - 1
  const lastTop = last * PITCH + 34
  const fill = PHASES.reduce((acc, _p, i) => {
    const a = ramp(T, CUES[i] - 0.7, CUES[i] - 0.1)
    return Math.max(acc, i * PITCH + 34 + a * (i === last ? 0 : PITCH))
  }, 0)

  return (
    <div style={{ position: 'absolute', left: 40, top: 0, width: 4, height: lastTop + 300 }}>
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 34,
          bottom: 0,
          width: 4,
          borderRadius: 2,
          background: C.line,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 34,
          width: 4,
          height: Math.max(0, fill - 34),
          borderRadius: 2,
          background: ACCENT,
        }}
      />
      {PHASES.map((p, i) => {
        const a = ramp(T, CUES[i] - 0.7, CUES[i] - 0.15, easeOutBack)
        const on = a > 0.5
        return (
          <div
            key={p.title}
            style={{
              position: 'absolute',
              left: -9,
              top: i * PITCH + 34 - 11,
              width: 22,
              height: 22,
              borderRadius: 11,
              background: on ? ACCENT : '#F6F3EE',
              border: `4px solid ${on ? ACCENT : 'rgba(13,13,13,0.16)'}`,
              boxShadow: on ? `0 0 0 ${6 * a}px ${ACCENT}22` : 'none',
              transform: `scale(${0.8 + 0.2 * a})`,
            }}
          />
        )
      })}
    </div>
  )
}

/* ── A interface do app: cabeçalho, medidor de avanço e o feed que rola ── */
function ScreenUI({ T }: { T: number }) {
  const lastCue = CUES[CUES.length - 1]

  /* O feed sobe uma etapa por cena; na última sobra mais espaço em branco
     embaixo para o relatório entrar sem cobrir o card. */
  const scrollPts = PHASES.map(
    (_p, i) => [CUES[i], -(i * PITCH) + (i === PHASES.length - 1 ? 150 : 18)] as const,
  )
  const scroll = kf(T, [[0, scrollPts[0][1] + 40], ...scrollPts], easeInOutCubic)

  /* O número grande segura o valor da etapa e salta pouco antes da próxima. */
  const pctPts: (readonly [number, number])[] = [[0, PHASES[0].pct]]
  PHASES.forEach((p, i) => {
    if (i === 0) return
    pctPts.push([CUES[i] - 0.5, PHASES[i - 1].pct], [CUES[i] - 0.05, p.pct])
  })
  const pct = kf(T, pctPts as Keyframes, easeOutCubic)
  const shown = pct.toFixed(1).replace('.', ',')

  const stage = PHASES.reduce((acc, _p, i) => (T >= CUES[i] - 0.35 ? i : acc), 0)
  const diasPts: (readonly [number, number])[] = [[0, PHASES[0].restante]]
  PHASES.forEach((p, i) => {
    if (i === 0) return
    diasPts.push([CUES[i] - 0.05, p.restante])
  })
  const dias = Math.round(kf(T, diasPts as Keyframes, easeOutCubic))

  const toast = ramp(T, lastCue + 0.35, lastCue + 0.85, easeOutBack)

  return (
    <>
      {/* marca do app no topo, no lugar da status bar — igual ao step 1 */}
      <img
        src="/favicon.svg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '50%',
          top: 26,
          transform: 'translateX(-50%)',
          width: 38,
          height: 34,
        }}
      />

      <div style={{ position: 'absolute', left: 22, right: 22, top: 76 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <div
              style={{
                fontFamily: SANS,
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: '-0.6px',
                color: C.ink,
                whiteSpace: 'nowrap',
              }}
            >
              Jardim das Acácias
            </div>
            <div style={{ marginTop: 4, fontFamily: SANS, fontSize: 17, color: C.mute }}>
              {PHASES[stage].etapas}/5 etapas concluídas
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              alignItems: 'center',
              paddingTop: 8,
            }}
          >
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ width: 4, height: 4, borderRadius: 2, background: C.mute }} />
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 14,
            fontFamily: SERIF,
            fontSize: 66,
            lineHeight: 1,
            letterSpacing: '-1px',
            color: C.ink,
          }}
        >
          {shown}%
        </div>

        <div
          style={{
            marginTop: 30,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontFamily: SANS, fontSize: 16, color: C.mute }}>Entrega</div>
            <div style={{ marginTop: 2, fontFamily: SANS, fontSize: 20, color: C.ink }}>
              31/12/2026
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: SANS, fontSize: 16, color: C.mute }}>Restante</div>
            <div style={{ marginTop: 2, fontFamily: SANS, fontSize: 20, color: C.ink }}>
              {dias} dias
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', marginTop: 14, height: 34 }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 9,
              overflow: 'hidden',
              background: 'repeating-linear-gradient(115deg, #EAE7E2 0 7px, #F7F5F2 7px 15px)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: `${pct}%`,
                borderRadius: '9px 2px 2px 9px',
                background: `linear-gradient(90deg, ${ACCENT}D9, ${ACCENT})`,
              }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              left: `${pct}%`,
              top: -9,
              width: 3,
              height: 24,
              marginLeft: -1.5,
              background: ACCENT,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: `${pct}%`,
              top: -15,
              width: 15,
              height: 15,
              marginLeft: -7.5,
              borderRadius: 8,
              background: ACCENT,
            }}
          />
        </div>
      </div>

      {/* o feed: rola por trás de uma máscara que apaga as duas pontas */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: FEED.top,
          height: FEED.h,
          overflow: 'hidden',
          maskImage: 'linear-gradient(180deg, transparent 0, #000 26px, #000 88%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(180deg, transparent 0, #000 26px, #000 88%, transparent 100%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            transform: `translateY(${scroll}px)`,
          }}
        >
          <Spine T={T} />
          {PHASES.map((p, i) => (
            <Card key={p.title} p={p} cue={CUES[i]} T={T} top={i * PITCH} />
          ))}
        </div>
      </div>

      {/* toast "Relatório enviado ao cliente" */}
      <div
        style={{
          position: 'absolute',
          left: 22,
          right: 22,
          bottom: 34,
          height: 84,
          borderRadius: 22,
          background: C.ink,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '0 22px',
          opacity: toast,
          transform: `translateY(${(1 - toast) * 30}px)`,
          boxShadow: '0 22px 44px -18px rgba(13,13,13,0.7)',
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            background: ACCENT,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 18 18" aria-hidden="true">
            <path
              d="M4 9.5 L7.2 12.7 L14 5.8"
              fill="none"
              stroke="#fff"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: SANS, fontSize: 18, fontWeight: 700, color: '#fff' }}>
            Relatório enviado ao cliente
          </span>
          <span style={{ fontFamily: SANS, fontSize: 15, color: 'rgba(255,255,255,0.6)' }}>
            5 etapas · 25 fotos
          </span>
        </div>
      </div>
    </>
  )
}

export default function ProgressScreen({
  active,
  playing,
}: {
  /* Tela em primeiro plano no step 2 — controla o crossfade com os outros steps. */
  active: boolean
  /* Além de ativa, a seção está na viewport — só aí o clock roda. */
  playing: boolean
}) {
  const [boxRef, stage] = useSceneStage(STAGE_H)
  const T = useSceneClock(playing, TOTAL, STILL_T)

  /* Esconde a emenda do loop. */
  const fade = ramp(T, 0, 0.45) * (1 - ramp(T, TOTAL - 0.45, TOTAL, easeInQuad))

  return (
    <div ref={boxRef} className={`ws-scene${active ? ' is-active' : ''}`}>
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: stage.vw,
          height: STAGE_H,
          transformOrigin: '0 0',
          transform: `scale(${stage.scale})`,
          opacity: fade,
        }}
      >
        <ScreenUI T={T} />
      </div>
    </div>
  )
}
