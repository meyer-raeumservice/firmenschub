import { memo, useEffect, useRef, useState } from 'react'
import { HERO_SCENES } from '../content.js'
import { Icon } from './Icon.jsx'

/**
 * Hero-Visualisierung: schwebendes Interface, das alle drei Leistungen erzählt –
 * Website (Webdesign), lokale Suche (Google) und eingehende Anfragen (Kundengewinnung).
 * Rein dekorativ, daher aria-hidden.
 */
export function HeroVisual() {
  const ref = useRef(null)
  const [scene, setScene] = useState(0)
  const [typed, setTyped] = useState(HERO_SCENES[0].query.length)
  const [found, setFound] = useState(true)
  const [toast, setToast] = useState(0)

  // Szenen-Wechsel mit Tipp-Animation (pausiert außerhalb des Sichtbereichs)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let visible = true
    let timer = 0
    let state = { scene: 0, chars: HERO_SCENES[0].query.length, phase: 'hold' }

    const schedule = (fn, ms) => {
      clearTimeout(timer)
      timer = setTimeout(() => (visible && !document.hidden ? fn() : schedule(fn, 400)), ms)
    }
    const tick = () => {
      const q = HERO_SCENES[state.scene].query
      if (state.phase === 'hold') {
        state.phase = 'delete'
        setFound(false)
        schedule(tick, 60)
      } else if (state.phase === 'delete') {
        // nur den Suchbegriff löschen, „in der Nähe" bleibt kurz stehen → wirkt natürlicher
        if (state.chars > 0) {
          state.chars -= 1
          setTyped(state.chars)
          schedule(tick, 22)
        } else {
          state.scene = (state.scene + 1) % HERO_SCENES.length
          state.phase = 'type'
          setScene(state.scene)
          schedule(tick, 280)
        }
      } else if (state.phase === 'type') {
        if (state.chars < q.length) {
          state.chars += 1
          setTyped(state.chars)
          schedule(tick, 48 + Math.random() * 40)
        } else {
          state.phase = 'hold'
          setFound(true)
          setToast(state.scene)
          schedule(tick, 3400)
        }
      }
    }
    schedule(tick, 3600)

    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.05 })
    io.observe(el)

    // Dezente Parallaxe mit der Maus (nur feine Zeiger)
    let raf = 0
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const hero = el.closest('section')
    const onMove = (e) => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const r = el.getBoundingClientRect()
        const x = ((e.clientX - (r.left + r.width / 2)) / window.innerWidth) * 2
        const y = ((e.clientY - (r.top + r.height / 2)) / window.innerHeight) * 2
        el.style.setProperty('--mx', Math.max(-1, Math.min(1, x)).toFixed(3))
        el.style.setProperty('--my', Math.max(-1, Math.min(1, y)).toFixed(3))
      })
    }
    const onLeave = () => {
      el.style.setProperty('--mx', '0')
      el.style.setProperty('--my', '0')
    }
    if (fine && hero) {
      hero.addEventListener('pointermove', onMove, { passive: true })
      hero.addEventListener('pointerleave', onLeave)
    }
    return () => {
      clearTimeout(timer)
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
      if (hero) {
        hero.removeEventListener('pointermove', onMove)
        hero.removeEventListener('pointerleave', onLeave)
      }
    }
  }, [])

  const s = HERO_SCENES[scene]
  const t = HERO_SCENES[toast]

  return (
    <div className="hv-wrap" aria-hidden="true">
      <div className="hv" ref={ref}>
        <div className="hv-glow" />
        <Orbit />

        {/* Browser mit Website */}
        <div className="hv-layer hv-l-browser" style={{ '--depth': 0.5, '--d': '0.35s' }}>
          <div className="hv-float" style={{ '--fd': '10s' }}>
            <BrowserCard />
          </div>
        </div>

        {/* Mobil-Chip */}
        <div className="hv-layer hv-l-chip hv-chip-wrap" style={{ '--depth': 1.1, '--d': '0.9s' }}>
          <div className="hv-float" style={{ '--fd': '7s', '--fdl': '-2s' }}>
            <div className="hv-glass hv-chip">
              <span className="hv-chip-icon">
                <Icon name="phone" />
              </span>
              Mobil optimiert
              <span className="tick">
                <Icon name="check" strokeWidth={2.4} />
              </span>
            </div>
          </div>
        </div>

        {/* Anfrage-Benachrichtigung */}
        <div className="hv-layer hv-l-toast" style={{ '--depth': 1.6, '--d': '1.05s' }}>
          <div className="hv-float" style={{ '--fd': '8s', '--fdl': '-4s' }}>
            <div className="hv-glass hv-toast">
              <span className="hv-toast-icon">
                <Icon name="mail" strokeWidth={1.9} />
              </span>
              <div className="hv-toast-body" key={toast}>
                <p className="hv-toast-t1">{t.lead}</p>
                <p className="hv-toast-t2">{t.category} · über deine Website</p>
              </div>
              <span className="hv-time">jetzt</span>
            </div>
          </div>
        </div>

        {/* Statistik */}
        <div className="hv-layer hv-l-stats" style={{ '--depth': 1.2, '--d': '0.7s' }}>
          <div className="hv-float" style={{ '--fd': '9s', '--fdl': '-1s' }}>
            <StatsCard />
          </div>
        </div>

        {/* Lokale Suche */}
        <div className="hv-layer hv-l-search" style={{ '--depth': 1.4, '--d': '0.85s' }}>
          <div className="hv-float" style={{ '--fd': '8.5s', '--fdl': '-3s' }}>
            <div className="hv-glass hv-search">
              <div className="hv-input">
                <Icon name="search" strokeWidth={2} />
                <span>
                  {s.query.slice(0, typed)}
                  <span className="hv-caret" />
                </span>
              </div>
              <div className="hv-results">
                <div className="hv-result is-me" data-found={found}>
                  <span className="hv-pin">
                    <Icon name="pinSolid" />
                  </span>
                  <div className="min-w-0">
                    <p className="hv-r1">Dein Unternehmen</p>
                    <p className="hv-r2">{s.category} · Jetzt geöffnet</p>
                  </div>
                  <span className="hv-badge">Top</span>
                </div>
                <div className="hv-result is-other">
                  <span className="hv-dotcircle" />
                  <span className="hv-skel">
                    <i />
                    <i />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Orbit = memo(function Orbit() {
  const path = 'M -30 270 a 310 150 0 1 0 620 0 a 310 150 0 1 0 -620 0'
  return (
    <svg className="hv-orbit" viewBox="0 0 560 540" fill="none">
      <defs>
        <radialGradient id="hv-spark-g">
          <stop offset="0" stopColor="#FFB08A" />
          <stop offset="0.35" stopColor="#FF6B35" stopOpacity="0.9" />
          <stop offset="1" stopColor="#FF6B35" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g transform="rotate(-16 280 270)">
        <ellipse cx="280" cy="270" rx="310" ry="150" stroke="rgba(255,255,255,0.08)" />
        <ellipse cx="280" cy="270" rx="250" ry="112" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 7" />
        <g className="hv-spark">
          <circle r="14" fill="url(#hv-spark-g)">
            <animateMotion dur="16s" repeatCount="indefinite" path={path} />
          </circle>
          <circle r="2.6" fill="#FFF3EC">
            <animateMotion dur="16s" repeatCount="indefinite" path={path} />
          </circle>
        </g>
      </g>
    </svg>
  )
})

const BrowserCard = memo(function BrowserCard() {
  return (
    <div className="hv-browser">
      <div className="hv-bar">
        <i />
        <i />
        <i />
        <span className="hv-url">
          <Icon name="lock" strokeWidth={2.2} />
          dein-unternehmen.de
        </span>
      </div>
      <div className="hv-site">
        <div className="hv-nav">
          <span className="hv-logo">
            Dein Logo<b>.</b>
          </span>
          <span className="hv-links">
            <i />
            <i />
            <i />
          </span>
          <span className="hv-navbtn" />
        </div>
        <div className="hv-hero">
          <div>
            <span className="hv-kicker" />
            <p className="hv-title">
              Qualität, die man sofort sieht<b>.</b>
            </p>
            <span className="hv-line" style={{ width: '92%' }} />
            <span className="hv-line" style={{ width: '70%' }} />
            <div className="hv-ctas">
              <span className="hv-cta">Jetzt anfragen</span>
              <span className="hv-cta2" />
            </div>
          </div>
          <div className="hv-media">
            <span className="hv-media-orb" />
            <span className="hv-media-card">
              <i />
              <i />
            </span>
          </div>
        </div>
        <div className="hv-features">
          {[0, 1, 2].map((k) => (
            <div key={k}>
              <span />
              <i />
              <i />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

const StatsCard = memo(function StatsCard() {
  const line =
    'M4 78 C 22 76, 30 66, 44 67 S 70 74, 84 68 S 108 52, 124 50 S 150 46, 164 38 S 190 26, 204 24 S 228 12, 244 8'
  return (
    <div className="hv-glass hv-stats">
      <div className="hv-head">
        <span className="hv-head-icon">
          <Icon name="growth" strokeWidth={1.9} />
        </span>
        <div>
          <p className="hv-t1">Anfragen</p>
          <p className="hv-t2">Entwicklung · 6 Monate</p>
        </div>
        <span className="hv-trend">
          <Icon name="arrowUpRight" strokeWidth={2.4} />
          steigend
        </span>
      </div>
      <svg className="hv-chart" viewBox="0 0 248 92" fill="none">
        <defs>
          <linearGradient id="hv-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FF6B35" stopOpacity="0.38" />
            <stop offset="1" stopColor="#FF6B35" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hv-stroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FF6B35" stopOpacity="0.55" />
            <stop offset="1" stopColor="#FF8A5C" />
          </linearGradient>
        </defs>
        {[18, 42, 66].map((y) => (
          <line key={y} x1="0" x2="248" y1={y} y2={y} stroke="rgba(255,255,255,0.07)" strokeDasharray="3 5" />
        ))}
        <path className="hv-chart-area" d={`${line} L244 92 L4 92 Z`} fill="url(#hv-area)" />
        <path
          className="hv-chart-line"
          d={line}
          pathLength="1"
          stroke="url(#hv-stroke)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <circle className="hv-chart-ping" cx="244" cy="8" r="4" fill="#FF6B35" />
        <circle className="hv-chart-dot" cx="244" cy="8" r="4.2" fill="#FF6B35" stroke="#FFE1D4" strokeWidth="2" />
      </svg>
      <div className="hv-axis">
        {['Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt'].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <div className="hv-metrics">
        {[
          ['Sichtbarkeit', '68%', '1.35s'],
          ['Website-Besuche', '80%', '1.5s'],
          ['Anfragen', '58%', '1.65s'],
        ].map(([label, w, d]) => (
          <div className="hv-metric" key={label}>
            <span>{label}</span>
            <span className="hv-track">
              <span className="hv-fill" style={{ '--w': w, '--gd': d }} />
            </span>
            <Icon name="arrowUpRight" strokeWidth={2.4} />
          </div>
        ))}
      </div>
    </div>
  )
})
