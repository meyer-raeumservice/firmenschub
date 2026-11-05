import { MARQUEE } from '../content.js'
import { HeroVisual } from './HeroVisual.jsx'
import { Icon } from './Icon.jsx'
import { Button } from './ui.jsx'

const BENEFITS = ['Individuelle Lösungen', 'Persönliche Betreuung', 'Fokus auf messbare Ergebnisse']

/** Ein Wort der Headline, das aus einer Maske nach oben gleitet */
function W({ children, d, fwd = false, className = '' }) {
  return (
    <span className={`word ${fwd ? 'is-fwd' : ''}`}>
      <span className={className} style={{ '--d': `${d}s` }}>
        {children}
      </span>
    </span>
  )
}

export function Hero() {
  return (
    <section id="start" aria-labelledby="hero-title" className="panel grain mt-1.5 sm:mt-3">
      <div className="hero-glow-a" />
      <div className="hero-glow-b" />
      <div className="hero-grid bg-grid-dark" />

      <div className="shell relative grid items-center gap-14 pb-16 pt-32 sm:pt-36 lg:min-h-[min(100svh,960px)] lg:grid-cols-[1.15fr_1fr] lg:gap-6 lg:pb-16 lg:pt-32 xl:gap-10">
        <div className="relative z-10 max-w-2xl">
          <p className="eyebrow-pill hero-in" style={{ '--d': '0.05s' }}>
            <span className="pulse-dot" aria-hidden="true" />
            Dein Partner für digitales Wachstum
          </p>

          <h1 id="hero-title" className="h1 mt-7 text-white sm:mt-8">
            <W d={0.12}>Wir</W> <W d={0.18}>bringen</W> <W d={0.24}>dein</W>
            <br />
            <W d={0.3}>Unternehmen</W>
            <br />
            <W d={0.46} fwd className="text-gradient-ember">
              nach
            </W>{' '}
            <W d={0.54} fwd>
              <span className="text-gradient-ember">vorne</span>
              <span className="text-ember">.</span>
            </W>
          </h1>

          <p className="hero-in mt-7 text-lg font-semibold tracking-[-0.015em] text-white sm:text-xl" style={{ '--d': '0.6s' }}>
            <span className="whitespace-nowrap">
              Mehr Sichtbarkeit<span className="text-ember">.</span>
            </span>{' '}
            <span className="whitespace-nowrap">
              Mehr Anfragen<span className="text-ember">.</span>
            </span>{' '}
            <span className="whitespace-nowrap">
              Mehr Wachstum<span className="text-ember">.</span>
            </span>
          </p>
          <p className="lead hero-in mt-4 max-w-[34rem] text-white/68" style={{ '--d': '0.68s' }}>
            Mit modernen Websites, einer starken Google-Präsenz und gezielter Kundengewinnung bringen wir dein
            Unternehmen digital auf Erfolgskurs.
          </p>

          <div className="hero-in mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ '--d': '0.78s' }}>
            <Button href="#kontakt" size="lg" className="w-full sm:w-auto" data-magnetic>
              Jetzt kostenlos beraten lassen
            </Button>
            <Button href="#leistungen" variant="ghost-dark" size="lg" icon={null} className="w-full sm:w-auto">
              Unsere Leistungen entdecken
            </Button>
          </div>

          <ul className="hero-in mt-10 grid gap-3 sm:flex sm:flex-wrap sm:gap-x-7" style={{ '--d': '0.9s' }}>
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-[0.95rem] font-medium text-white/78">
                <span className="check-badge">
                  <Icon name="check" strokeWidth={2.6} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:-mr-4 xl:-mr-8">
          <HeroVisual />
        </div>
      </div>

      {/* Laufband: Für welche Unternehmen wir arbeiten */}
      <div className="relative border-t border-white/8">
        <div className="shell flex items-center gap-6 py-6 sm:gap-10 sm:py-7">
          <p className="hidden shrink-0 text-[0.7rem] font-bold uppercase leading-snug tracking-[0.2em] text-white/55 md:block">
            Für Unternehmen
            <br />
            aus allen Branchen
          </p>
          <span className="hidden h-10 w-px shrink-0 bg-white/10 md:block" aria-hidden="true" />
          <p className="sr-only">Wir arbeiten unter anderem für: {MARQUEE.join(', ')}.</p>
          <div className="marquee min-w-0 flex-1" aria-hidden="true">
            {[0, 1].map((k) => (
              <div className="marquee-track" key={k}>
                {MARQUEE.map((m) => (
                  <span key={m} className="flex items-center gap-10 whitespace-nowrap">
                    <span className="text-lg font-semibold tracking-[-0.02em] text-white/60 sm:text-xl">{m}</span>
                    <span className="size-1.5 rounded-full bg-ember/80" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
