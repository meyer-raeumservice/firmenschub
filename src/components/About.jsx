import { useEffect, useRef } from 'react'
import { PILLARS } from '../content.js'
import { trackProgress } from '../lib/interactions.js'
import { Icon } from './Icon.jsx'
import { SectionLabel } from './ui.jsx'

const STATEMENT = 'Wir glauben, dass ein professioneller Online-Auftritt kein Privileg großer Unternehmen sein sollte.'

/** Text, der beim Scrollen Wort für Wort aufleuchtet */
function LitText({ text, className = '' }) {
  const ref = useRef(null)
  useEffect(() => trackProgress(ref.current, { start: 0.85, end: 0.4 }), [])
  const words = text.split(' ')
  return (
    <p ref={ref} className={`lit ${className}`} style={{ '--n': words.length + 1 }}>
      {words.map((w, i) => (
        <span key={i}>
          <span className="lit-word" style={{ '--i': i }}>
            {w}
          </span>{' '}
        </span>
      ))}
    </p>
  )
}

export function About() {
  return (
    <section id="ueber-uns" aria-labelledby="ueber-title" className="panel grain">
      <div
        className="pointer-events-none absolute -left-1/4 -top-1/3 -z-10 aspect-square w-[60rem] max-w-[150vw] rounded-full bg-[radial-gradient(closest-side,rgb(255_107_53/0.14),transparent)]"
        aria-hidden="true"
      />
      <div
        className="bg-grid-dark pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_50%_60%_at_100%_100%,#000,transparent)]"
        aria-hidden="true"
      />

      <div className="shell section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32" data-reveal>
              <SectionLabel index="05" tone="dark">
                Über uns
              </SectionLabel>
              <h2 id="ueber-title" className="h2 mt-6 text-white">
                Digital denken.
                <br />
                <span className="text-gradient-ember">Persönlich handeln</span>
                <span className="text-ember">.</span>
              </h2>
              <p className="lead mt-8 max-w-md text-white/70">
                Hinter firmenschub. steckt eine klare Idee: Unternehmen dabei zu unterstützen, ihre Möglichkeiten im
                digitalen Raum besser zu nutzen.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative" data-reveal>
              <Icon name="quote" className="mb-6 size-10 text-ember" />
              <LitText
                text={STATEMENT}
                className="text-[clamp(1.7rem,1.1rem+2.4vw,2.85rem)] font-semibold leading-[1.18] tracking-[-0.035em] text-white"
              />
            </div>

            <p className="lead mt-12 text-white/70" data-reveal>
              Deshalb verbinden wir modernes Design, verständliche Beratung und durchdachte digitale Lösungen.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {PILLARS.map((p, i) => (
                <li key={p.title} data-reveal style={{ '--delay': `${i * 0.08}s` }} className="flex">
                  <div className="card-dark is-lift spot spot-dark group flex w-full flex-col p-6">
                    <span className="icon-tile size-11 rounded-xl bg-white/6 text-ember shadow-[inset_0_0_0_1px_rgb(255_255_255/0.1)] group-hover:bg-ember group-hover:text-navy [&_svg]:size-5">
                      <Icon name={p.icon} />
                    </span>
                    <h3 className="mt-6 text-lg font-bold tracking-[-0.02em] text-white">{p.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-white/62">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div
              className="relative mt-8 overflow-hidden rounded-[1.5rem] bg-linear-to-br from-ember to-[#ff8a5c] p-7 text-navy sm:p-9"
              data-reveal
            >
              <span
                className="pointer-events-none absolute -right-10 -top-10 size-44 rounded-full border-[18px] border-white/20"
                aria-hidden="true"
              />
              <p className="relative text-[0.72rem] font-bold uppercase tracking-[0.2em] text-navy/70">Unser Ziel</p>
              <p className="relative mt-3 max-w-xl text-xl font-bold leading-snug tracking-[-0.025em] sm:text-2xl">
                Unternehmen sichtbar zu machen und ihnen neue Möglichkeiten zur Kundengewinnung zu eröffnen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
