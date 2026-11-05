import { SERVICES } from '../content.js'
import { selectService } from '../lib/events.js'
import { Icon } from './Icon.jsx'
import { Dot, SectionLabel } from './ui.jsx'

export function Services() {
  return (
    <section id="leistungen" aria-labelledby="leistungen-title" className="section overflow-hidden">
      <div
        className="pointer-events-none absolute -right-40 top-10 -z-10 aspect-square w-[46rem] rounded-full bg-[radial-gradient(closest-side,rgb(255_107_53/0.08),transparent)]"
        aria-hidden="true"
      />
      <div className="shell">
        <header className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7" data-reveal>
            <SectionLabel index="01">Leistungen</SectionLabel>
            <h2 id="leistungen-title" className="h2 mt-6 text-navy">
              Alles, was dein Unternehmen <span className="text-muted">digital nach vorne bringt</span>
              <Dot />
            </h2>
          </div>
          <p className="lead text-slate-600 lg:col-span-5 lg:pb-2" data-reveal style={{ '--delay': '0.1s' }}>
            Ein überzeugender Online-Auftritt ist heute entscheidend. Wir verbinden modernes Design, bessere
            Auffindbarkeit und effektive Strategien zur Kundengewinnung.
          </p>
        </header>

        <div className="mx-auto mt-14 grid max-w-2xl gap-5 sm:mt-16 lg:max-w-none lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((s, i) => (
            <div key={s.id} data-reveal style={{ '--delay': `${i * 0.1}s` }} className="flex">
              <ServiceCard service={s} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service: s, index }) {
  const Visual = VISUALS[s.id]
  return (
    <article className="svc-card card-light is-lift spot group flex w-full flex-col">
      <div className="svc-visual" aria-hidden="true">
        <Visual />
      </div>

      <div className="relative flex flex-1 flex-col px-6 pb-6 pt-4 sm:px-8 sm:pb-8">
        <div className="flex items-center justify-between">
          <span className="icon-tile -mt-9 bg-white text-navy shadow-[0_10px_24px_-10px_rgb(11_17_32/0.35),inset_0_0_0_1px_rgb(11_17_32/0.08)] group-hover:-rotate-6 group-hover:bg-ember">
            <Icon name={s.icon} />
          </span>
          <span className="text-sm font-bold tabular-nums text-slate-500">0{index + 1}</span>
        </div>

        <h3 className="mt-6 text-[1.6rem] font-bold leading-tight tracking-[-0.035em] text-navy sm:text-[1.75rem]">
          {s.title}
        </h3>
        <p className="mt-2 text-[1.05rem] font-semibold leading-snug tracking-[-0.01em] text-navy/85">{s.tagline}</p>
        <p className="mt-4 leading-relaxed text-slate-600">{s.text}</p>

        <ul className="mt-6 space-y-3 border-t border-slate-200/80 pt-6">
          {s.points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-[0.95rem] font-medium text-slate-700">
              <span className="check-badge mt-px">
                <Icon name="check" strokeWidth={2.6} />
              </span>
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <a
            href="#kontakt"
            onClick={() => selectService(s.id)}
            className="group/btn flex h-14 items-center justify-between rounded-full bg-slate-100 pl-6 pr-2 font-semibold text-navy transition-[background-color,color] duration-300 hover:bg-navy hover:text-white"
          >
            {s.cta}
            <span className="btn-icon size-10 bg-ember text-navy" aria-hidden="true">
              <Icon name="arrowRight" strokeWidth={2} />
              <Icon name="arrowRight" strokeWidth={2} />
            </span>
          </a>
        </div>
      </div>
    </article>
  )
}

/* ---------- Mini-Visuals (rein dekorativ) ---------- */

function WebVisual() {
  return (
    <>
      <span className="sv-label">Webdesign</span>
      <div className="sv-desk sv-t">
        <div className="sv-desk-bar">
          <i />
          <i />
          <i />
        </div>
        <div className="sv-desk-body">
          <div className="sv-lines">
            <i className="h" />
            <i className="h2" />
            <i style={{ width: '95%' }} />
            <i style={{ width: '75%' }} />
            <span className="sv-cta sv-t" />
          </div>
          <div className="sv-img" />
          <div className="sv-row3">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="sv-phone sv-t">
        <div className="sv-img" />
        <div className="sv-lines">
          <i className="h" />
          <i style={{ width: '80%' }} />
          <i style={{ width: '60%' }} />
        </div>
        <span className="sv-cta sv-t" />
      </div>
      <span className="sv-cursor sv-t">
        <Icon name="cursor" />
      </span>
    </>
  )
}

function GoogleVisual() {
  return (
    <div className="sv-google">
      <div className="sv-search">
        <Icon name="search" strokeWidth={2.2} />
        <span>
          Dein Angebot <span className="q">in der Nähe</span>
        </span>
      </div>
      <div className="sv-results">
        <div className="sv-res a sv-t">
          <span className="ic" />
          <span className="ln">
            <i />
            <i />
          </span>
        </div>
        <div className="sv-res b sv-t">
          <span className="ic" />
          <span className="ln">
            <i />
            <i />
          </span>
        </div>
        <div className="sv-res me sv-t">
          <span className="pin">
            <Icon name="pinSolid" />
          </span>
          Dein Unternehmen
          <span className="top">Top</span>
        </div>
      </div>
    </div>
  )
}

const BARS = [
  [18, 6],
  [24, 10],
  [22, 16],
  [32, 20],
  [30, 30],
  [40, 36],
  [46, 44],
]

function LeadsVisual() {
  return (
    <>
      <span className="sv-label">Anfragen</span>
      <div className="sv-bars">
        {BARS.map(([h, g], i) => (
          <i
            key={i}
            className={i >= BARS.length - 2 ? 'hot' : ''}
            style={{ '--h': `${h}%`, '--g': `${g}%`, '--i': i }}
          />
        ))}
      </div>
      <svg className="sv-trend" viewBox="0 0 360 224" preserveAspectRatio="xMidYMax slice" fill="none">
        <path
          d="M34 176 C 80 168, 120 150, 168 128 S 262 84, 318 50"
          pathLength="1"
          stroke="#FF8A5C"
          strokeWidth="2"
          strokeDasharray="1"
          strokeLinecap="round"
        />
        <circle cx="318" cy="50" r="4" fill="#FF6B35" style={{ opacity: 'var(--on)', transition: 'opacity .4s ease .9s' }} />
      </svg>
      <div className="sv-toast">
        <span className="ic">
          <Icon name="mail" strokeWidth={2} />
        </span>
        <span>
          Neue Anfrage
          <small>über deine Website</small>
        </span>
      </div>
    </>
  )
}

const VISUALS = { webdesign: WebVisual, google: GoogleVisual, kundengewinnung: LeadsVisual }
