import { ADVANTAGES, COMPARISON } from '../content.js'
import { Icon } from './Icon.jsx'
import { Dot, Logo, SectionLabel } from './ui.jsx'

export function WhyUs() {
  return (
    <section id="warum" aria-labelledby="warum-title" className="panel grain">
      <div
        className="pointer-events-none absolute -bottom-1/3 -right-1/4 -z-10 aspect-square w-[60rem] max-w-[140vw] rounded-full bg-[radial-gradient(closest-side,rgb(255_107_53/0.16),transparent)]"
        aria-hidden="true"
      />
      <div
        className="bg-grid-dark pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_20%_0%,#000,transparent)]"
        aria-hidden="true"
      />

      <div className="shell section">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7" data-reveal>
            <SectionLabel index="02" tone="dark">
              Warum firmenschub.
            </SectionLabel>
            <h2 id="warum-title" className="h2 mt-6 text-white">
              Dein Unternehmen verdient mehr als <span className="text-white/45">irgendeine Website</span>
              <Dot />
            </h2>
          </div>
          <div className="space-y-5 lg:col-span-5 lg:pt-14" data-reveal style={{ '--delay': '0.1s' }}>
            <p className="lead font-medium text-white/85">
              Dein Unternehmen leistet jeden Tag gute Arbeit. Wir sorgen dafür, dass potenzielle Kunden das auch online
              erkennen.
            </p>
            <p className="lead text-white/65">
              Bei firmenschub. geht es nicht einfach nur um schöne Websites. Es geht um einen professionellen Auftritt,
              eine starke digitale Präsenz und die richtigen Maßnahmen, um dein Unternehmen weiterzubringen.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:mt-20 lg:grid-cols-12">
          {/* Gegenüberstellung */}
          <div className="lg:col-span-5" data-reveal="scale">
            <div className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white text-navy shadow-[0_40px_80px_-40px_rgb(0_0_0/0.7)]">
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 sm:px-8">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-slate-500">Der Unterschied</p>
                <span className="text-lg">
                  <Logo href={null} className="text-navy" />
                </span>
              </div>
              <ul className="divide-y divide-slate-200/80">
                {COMPARISON.map((c) => (
                  <li key={c.no} className="px-6 py-5 sm:px-8 sm:py-6">
                    <p className="flex items-start gap-3 text-[0.92rem] text-slate-500">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500">
                        <Icon name="close" strokeWidth={2.4} className="size-3" />
                      </span>
                      <span className="line-through decoration-slate-300">{c.no}</span>
                    </p>
                    <p className="mt-3 flex items-start gap-3 font-semibold leading-snug text-navy">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-ember text-navy">
                        <Icon name="check" strokeWidth={2.8} className="size-3" />
                      </span>
                      {c.yes}
                    </p>
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className="group mt-auto flex items-center justify-between gap-4 bg-mist px-6 py-5 font-semibold text-navy transition-colors duration-300 hover:bg-navy hover:text-white sm:px-8"
              >
                Lass uns über deinen Auftritt sprechen
                <span className="btn-icon size-10 bg-ember text-navy" aria-hidden="true">
                  <Icon name="arrowRight" strokeWidth={2} />
                  <Icon name="arrowRight" strokeWidth={2} />
                </span>
              </a>
            </div>
          </div>

          {/* Vier Vorteile */}
          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {ADVANTAGES.map((a, i) => (
              <li key={a.title} data-reveal style={{ '--delay': `${0.08 * (i + 1)}s` }} className="flex">
                <div className="card-dark is-lift spot spot-dark group flex w-full flex-col p-7 sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className="icon-tile bg-ember/12 text-ember shadow-[inset_0_0_0_1px_rgb(255_107_53/0.28)] group-hover:-rotate-6 group-hover:bg-ember group-hover:text-navy">
                      <Icon name={a.icon} />
                    </span>
                    <span className="text-sm font-bold tabular-nums text-white/45">0{i + 1}</span>
                  </div>
                  <h3 className="mt-auto pt-8 text-xl font-bold tracking-[-0.025em] text-white sm:text-[1.35rem]">
                    {a.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-white/65">{a.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
