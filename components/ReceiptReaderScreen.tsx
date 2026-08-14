'use client'

import {
  clamp,
  easeInOutCubic,
  easeInOutSine,
  easeInQuad,
  easeOutBack,
  easeOutCubic,
  kf,
  ramp,
  useSceneClock,
  useSceneStage,
} from '@/lib/scene'

/* Cena "Leitor de Notas com IA", portada do Claude Design.
   O runtime original (CompositionStage/useComposition/Easing) ficou de fora —
   aqui a composição roda num clock de requestAnimationFrame próprio (ver
   lib/scene). As coordenadas são as da cena original, num palco virtual de
   910px de altura escalado para a tela do iPhone; a largura do palco acompanha
   o telefone para o conteúdo não ficar em letterbox. */

/* Igual a var(--orange), mas precisa ser hex literal: a cena compõe alfa
   concatenando (`${ACCENT}1F`), o que não funciona com custom property. */
const ACCENT = '#DE6333'

const C = {
  ink: '#0D0D0D',
  ink2: '#3A4048',
  mute: '#6B6760',
  paper: '#FCFAF6',
  white: '#FFFFFF',
} as const

const SANS = 'var(--font-jakarta), system-ui, sans-serif'
const MONO = "ui-monospace, 'SF Mono', Menlo, monospace"

/* Cenas da composição: Enquadrar 2s · Captura 1s · Leitura 2,6s · Salvo 2,2s */
const CUES = { Captura: 2, Leitura: 3, Salvo: 5.6 } as const
const TOTAL = 7.8
/* Estado congelado quando o visitante pediu menos movimento: nota já salva. */
const STILL_T = CUES.Salvo + 1.4

const STAGE_H = 910
const RW = 320
const RH = 400

const FIELDS = [
  { y: 96, h: 46, tag: 'FORNECEDOR' },
  { y: 176, h: 116, tag: 'ITENS' },
  { y: 318, h: 52, tag: 'TOTAL' },
] as const

/* ── A nota fiscal: papel, campos que acendem sob o laser ── */
function Receipt({ T }: { T: number }) {
  const laserY = kf(
    T,
    [
      [CUES.Leitura + 0.2, -30],
      [CUES.Leitura + 1.9, RH + 30],
    ],
    easeInOutSine,
  )
  const scanning = T > CUES.Leitura + 0.1 && T < CUES.Leitura + 2.3
  const boxesOut = ramp(T, CUES.Salvo - 0.25, CUES.Salvo + 0.15)

  const row = (name: string, val: string, top: number) => (
    <div
      style={{
        position: 'absolute',
        left: 22,
        right: 22,
        top,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        fontFamily: MONO,
        fontSize: 17,
        color: C.ink,
      }}
    >
      <span>{name}</span>
      <span style={{ fontWeight: 600 }}>{val}</span>
    </div>
  )

  return (
    <div
      style={{
        position: 'absolute',
        left: -RW / 2,
        top: -RH / 2,
        width: RW,
        height: RH,
        background: C.paper,
        borderRadius: 5,
        boxShadow: '0 2px 4px rgba(13,13,13,0.10), 0 26px 50px -18px rgba(13,13,13,0.45)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(105deg, rgba(255,255,255,0.9), rgba(13,13,13,0.045))',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 22,
          right: 22,
          top: 34,
          fontFamily: MONO,
          fontSize: 19,
          fontWeight: 700,
          letterSpacing: '0.6px',
          color: C.ink,
        }}
      >
        BIGOLIN
      </div>
      <div
        style={{
          position: 'absolute',
          left: 22,
          right: 22,
          top: 74,
          borderTop: '1px dashed rgba(13,13,13,0.28)',
        }}
      />

      <div style={{ position: 'absolute', left: 22, top: 100, fontFamily: MONO, fontSize: 19, color: C.ink }}>
        Bigolin Materiais
      </div>
      <div style={{ position: 'absolute', left: 22, top: 132, fontFamily: MONO, fontSize: 16, color: C.ink2 }}>
        24/01/2026
      </div>

      <div
        style={{
          position: 'absolute',
          left: 22,
          right: 22,
          top: 168,
          borderTop: '1px dashed rgba(13,13,13,0.28)',
        }}
      />
      {row('CIMENTO CP-II', '890,00', 190)}
      {row('CAL CH-III', '187,50', 234)}
      <div
        style={{
          position: 'absolute',
          left: 22,
          right: 22,
          top: 296,
          borderTop: '1px dashed rgba(13,13,13,0.28)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 22,
          right: 22,
          top: 326,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          fontFamily: MONO,
          color: C.ink,
        }}
      >
        <span style={{ fontSize: 15, letterSpacing: '1px' }}>TOTAL</span>
        <span style={{ fontSize: 28, fontWeight: 700 }}>R$ 1.077,50</span>
      </div>

      {FIELDS.map((f) => {
        const lit = clamp((laserY - (f.y + f.h * 0.7)) / 26, 0, 1) * (1 - boxesOut)
        return (
          <div
            key={f.tag}
            style={{
              position: 'absolute',
              left: 14,
              right: 14,
              top: f.y - 8,
              height: f.h,
              borderRadius: 4,
              border: `2px solid ${ACCENT}`,
              background: `${ACCENT}1F`,
              opacity: lit * 0.95,
            }}
          >
            <div
              style={{
                position: 'absolute',
                right: -2,
                top: -17,
                background: ACCENT,
                color: '#fff',
                fontFamily: SANS,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.8px',
                padding: '2px 7px',
                borderRadius: 3,
                opacity: lit,
              }}
            >
              {f.tag}
            </div>
          </div>
        )
      })}

      <div
        style={{ position: 'absolute', left: 0, right: 0, top: 0, height: RH, opacity: scanning ? 1 : 0 }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: laserY - 100,
            height: 100,
            background: `linear-gradient(to bottom, ${ACCENT}00, ${ACCENT}33)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: laserY,
            height: 4,
            background: ACCENT,
            boxShadow: `0 0 26px 6px ${ACCENT}AA`,
          }}
        />
      </div>
    </div>
  )
}

/* ── A interface do app: câmera → leitura → lista de materiais ── */
function ScreenUI({ T, vw }: { T: number; vw: number }) {
  const captureOut = ramp(T, CUES.Captura + 0.45, CUES.Captura + 0.95)
  const cam = 1 - captureOut
  const fg = cam > 0.5 ? '#FFFFFF' : C.ink
  const press = 1 - 0.14 * Math.exp(-Math.max(0, T - CUES.Captura) * 9) * (T > CUES.Captura ? 1 : 0)
  const chrome =
    1 -
    clamp(
      ramp(T, CUES.Leitura + 0.1, CUES.Leitura + 0.4) - ramp(T, CUES.Salvo - 0.1, CUES.Salvo + 0.25),
      0,
      1,
    )
  const scanPill =
    ramp(T, CUES.Leitura + 0.1, CUES.Leitura + 0.4) * (1 - ramp(T, CUES.Salvo - 0.3, CUES.Salvo - 0.05))
  const listIn = ramp(T, CUES.Salvo + 0.05, CUES.Salvo + 0.5)

  /* Na etapa da câmera o cabeçalho fica centralizado; depois de salvar ele vira
     cabeçalho de lista e volta para a esquerda. A troca cai no intervalo em que
     `chrome` está zerado, então não aparece pulo. */
  const listMode = T > CUES.Salvo
  const headAlign = listMode
    ? { left: 24, textAlign: 'left' as const }
    : { left: 0, right: 0, textAlign: 'center' as const }

  const listRow = (name: string, sub: string, val: string, top: number, d: number) => {
    const a = ramp(T, CUES.Salvo + 0.2 + d, CUES.Salvo + 0.65 + d, easeOutBack)
    return (
      <div
        style={{
          position: 'absolute',
          left: 22,
          right: 22,
          top,
          height: 82,
          background: C.white,
          borderRadius: 18,
          boxShadow: '0 8px 22px -12px rgba(13,13,13,0.35)',
          opacity: a,
          transform: `translateY(${(1 - a) * 26}px)`,
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 5, background: ACCENT }} />
        <div
          style={{
            position: 'absolute',
            left: 22,
            top: 16,
            fontFamily: SANS,
            fontSize: 19,
            fontWeight: 600,
            color: C.ink,
          }}
        >
          {name}
        </div>
        <div style={{ position: 'absolute', left: 22, top: 45, fontFamily: SANS, fontSize: 15, color: C.mute }}>
          {sub}
        </div>
        <div
          style={{
            position: 'absolute',
            right: 20,
            top: 30,
            fontFamily: SANS,
            fontSize: 19,
            fontWeight: 700,
            color: C.ink,
          }}
        >
          {val}
        </div>
      </div>
    )
  }

  const toast = ramp(T, CUES.Salvo + 0.5, CUES.Salvo + 1.0, easeOutBack)

  return (
    <>
      {/* câmera escura por baixo da UI clara */}
      <div
        style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #191D23, #0E1114)', opacity: cam }}
      />

      {/* marca do app no topo, no lugar da status bar */}
      <img
        src="/favicon.svg"
        alt=""
        aria-hidden="true"
        style={{ position: 'absolute', left: '50%', top: 26, transform: 'translateX(-50%)', width: 38, height: 34 }}
      />

      <div
        style={{
          position: 'absolute',
          ...headAlign,
          top: 96,
          opacity: chrome,
          fontFamily: SANS,
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: '-0.8px',
          color: fg,
        }}
      >
        {listMode ? 'Materiais' : 'Capturar nota'}
      </div>
      <div
        style={{
          position: 'absolute',
          ...headAlign,
          top: 140,
          opacity: chrome,
          fontFamily: SANS,
          fontSize: 17,
          color: cam > 0.5 ? 'rgba(255,255,255,0.62)' : C.mute,
        }}
      >
        {listMode ? 'Jardim das Acácias · 24/01/2026' : 'Aponte para a nota fiscal'}
      </div>

      {/* cantos do visor + botão do obturador */}
      <div style={{ position: 'absolute', left: 40, right: 40, top: 210, height: 470, opacity: cam }}>
        {([[0, 0], [1, 0], [0, 1], [1, 1]] as const).map(([cx, cy]) => (
          <div
            key={`${cx}${cy}`}
            style={{
              position: 'absolute',
              width: 36,
              height: 36,
              left: cx ? 'auto' : -3,
              right: cx ? -3 : 'auto',
              top: cy ? 'auto' : -3,
              bottom: cy ? -3 : 'auto',
              borderTop: cy ? 'none' : `4px solid ${ACCENT}`,
              borderBottom: cy ? `4px solid ${ACCENT}` : 'none',
              borderLeft: cx ? 'none' : `4px solid ${ACCENT}`,
              borderRight: cx ? `4px solid ${ACCENT}` : 'none',
              borderRadius: 10,
            }}
          />
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 730,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
          opacity: cam,
        }}
      >
        <div
          style={{
            width: 92,
            height: 92,
            borderRadius: 46,
            border: '4px solid rgba(255,255,255,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `scale(${press})`,
          }}
        >
          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              background: ACCENT,
              boxShadow: `0 0 28px 2px ${ACCENT}66`,
            }}
          />
        </div>
        <div style={{ fontFamily: SANS, fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.62)' }}>
          Toque para capturar
        </div>
      </div>

      {/* leitura: loader de IA + rótulo. Os anéis são animação CSS pura, então
          só montam enquanto a etapa está visível. */}
      {scanPill > 0.01 && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 610,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 26,
            opacity: scanPill,
            transform: `translateY(${(1 - scanPill) * 16}px)`,
          }}
        >
          <div className="rr-orb">
            {Array.from({ length: 15 }, (_, i) => (
              <div className="rr-ring" key={i} />
            ))}
          </div>
          <div
            style={{
              background: C.ink,
              borderRadius: 999,
              padding: '14px 24px',
              boxShadow: '0 16px 36px -14px rgba(13,13,13,0.6)',
              fontFamily: SANS,
              fontSize: 18,
              fontWeight: 600,
              color: '#fff',
            }}
          >
            Lendo com IA
          </div>
        </div>
      )}

      {/* lista de materiais */}
      <div style={{ position: 'absolute', inset: 0, opacity: listIn }}>
        <div
          style={{
            position: 'absolute',
            left: 24,
            top: 210,
            fontFamily: SANS,
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: '1.2px',
            color: C.mute,
          }}
        >
          24/01/2026
        </div>
        {listRow('Cimento CP-II', 'Bigolin · 20 sc', 'R$ 890,00', 244, 0)}
        {listRow('Cal CH-III', 'Bigolin · 15 sc', 'R$ 187,50', 340, 0.12)}
        <div
          style={{
            position: 'absolute',
            left: 22,
            right: 22,
            top: 446,
            height: 82,
            borderRadius: 18,
            background: 'rgba(13,13,13,0.035)',
          }}
        />
      </div>

      {/* toast "Despesa salva" */}
      <div
        style={{
          position: 'absolute',
          left: 22,
          right: 22,
          top: 690,
          height: 88,
          borderRadius: 22,
          background: C.ink,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '0 22px',
          opacity: toast,
          transform: `translateY(${(1 - toast) * 28}px)`,
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
          <span style={{ fontFamily: SANS, fontSize: 18, fontWeight: 700, color: '#fff' }}>Despesa salva</span>
          <span style={{ fontFamily: SANS, fontSize: 15, color: 'rgba(255,255,255,0.6)' }}>
            2 itens · R$ 1.077,50
          </span>
        </div>
      </div>

      {/* a nota flutuando dentro do visor — vira "a foto" depois da captura */}
      <ReceiptLayer T={T} vw={vw} />
    </>
  )
}

/* Nota + sombra, com o tremor de mão e o estalo do disparo. */
function ReceiptLayer({ T, vw }: { T: number; vw: number }) {
  const held = 1 - ramp(T, CUES.Captura, CUES.Captura + 0.3, easeOutCubic)
  const cx = vw / 2 + held * (11 * Math.sin(T * 1.7) + 4 * Math.sin(T * 3.1))
  /* 458 no palco original, menos o topo da tela (85). */
  const cy = 373 + held * (9 * Math.sin(T * 2.3 + 1) + 3 * Math.sin(T * 4.1))
  const rot = held * 2.1 * Math.sin(T * 1.9 + 0.6)

  const since = Math.max(0, T - (CUES.Captura + 0.06))
  const snap = T > CUES.Captura ? Math.exp(-since * 11) * Math.sin(since * 24) : 0
  const rs =
    kf(
      T,
      [
        [0, 0.9],
        [CUES.Captura, 0.94],
        [CUES.Captura + 0.4, 1.0],
      ],
      easeInOutCubic,
    ) *
    (1 + snap * 0.022)

  const out = ramp(T, CUES.Salvo - 0.15, CUES.Salvo + 0.3)
  const shadow =
    kf(T, [
      [0, 0.22],
      [CUES.Captura + 0.4, 0.1],
    ]) *
    (1 - out)

  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: cx - RW * rs * 0.46,
          top: cy + RH * rs * 0.42,
          width: RW * rs * 0.92,
          height: 60 * rs,
          borderRadius: '50%',
          background: 'rgba(13,13,13,1)',
          opacity: shadow,
          filter: `blur(${18 * rs}px)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: cx,
          top: cy - out * 60,
          opacity: 1 - out,
          transform: `rotate(${rot}deg) scale(${rs})`,
        }}
      >
        <Receipt T={T} />
      </div>
    </>
  )
}

export default function ReceiptReaderScreen({
  active,
  playing,
}: {
  /* Tela em primeiro plano no step 1 — controla o crossfade com os outros steps. */
  active: boolean
  /* Além de ativa, a seção está na viewport — só aí o clock roda. */
  playing: boolean
}) {
  const [boxRef, stage] = useSceneStage(STAGE_H)
  const T = useSceneClock(playing, TOTAL, STILL_T)

  /* Esconde a emenda do loop. */
  const fade = ramp(T, 0, 0.4) * (1 - ramp(T, TOTAL - 0.4, TOTAL, easeInQuad))
  const flash =
    T > CUES.Captura + 0.02 ? Math.exp(-Math.max(0, T - (CUES.Captura + 0.04)) * 12) : 0

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
        <ScreenUI T={T} vw={stage.vw} />
        {/* estouro do flash no momento do disparo */}
        <div style={{ position: 'absolute', inset: 0, background: '#FFFFFF', opacity: flash * 0.92 }} />
        <div
          style={{ position: 'absolute', inset: 0, border: `3px solid ${ACCENT}`, opacity: flash * 0.8 }}
        />
      </div>
    </div>
  )
}
