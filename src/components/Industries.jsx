import { INDUSTRIES } from '../content.js'
import { Icon } from './Icon.jsx'
import { Dot, SectionLabel } from './ui.jsx'

export function Industries() {
  return (
    <section aria-labelledby="branchen-title" className="section !pb-10 md:!pb-14">
      <div className="bg-dots-light pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] [mask-image:radial-gradient(ellipse_50%_60%_at_50%_0%,#000,transparent)]" aria-hidden="true" />
      <div id="branchen" className="shell">
        <header className="mx-auto max-w-3xl text-center" data-reveal>
          <SectionLabel index="03">Branchen</SectionLabel>
          <h2 id="branchen-title" className="h2 mt-6 text-navy">
            Ganz gleich, in welcher Branche <span className="text-muted">du zu Hause bist</span>
            <Dot />
          </h2>
          <p className="lead mx-auto mt-6 max-w-2xl text-slate-600">
            Ob Handwerksbetrieb, Dienstleister oder lokales Unternehmen – wir helfen dir, online sichtbar zu werden und
            neue Kunden zu erreichen.
          </p>
        </header>

        <ul className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {INDUSTRIES.map((b, i) => (
            <li key={b.title} data-reveal style={{ '--delay': `${(i % 3) * 0.08}s` }} className="flex">
              <article className="card-light is-lift spot group relative flex w-full flex-col overflow-hidden p-7 sm:p-8">
                <span
                  className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[radial-gradient(closest-side,rgb(255_107_53/0.16),transparent)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between">
                  <span className="icon-tile bg-mist text-navy shadow-[inset_0_0_0_1px_rgb(11_17_32/0.08)] group-hover:-rotate-6 group-hover:bg-navy group-hover:text-ember">
                    <Icon name={b.icon} />
                  </span>
                  <span className="text-sm font-bold tabular-nums text-slate-500">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-[1.4rem] font-bold tracking-[-0.03em] text-navy">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{b.text}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-7" aria-label={`Typische Schwerpunkte für ${b.title}`}>
                  {b.tags.map((t) => (
                    <li
                      key={t}
                      className="chip bg-slate-100 text-slate-600 transition-colors duration-300 group-hover:bg-ember/10 group-hover:text-ember-ink"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}

          {/* Weitere Unternehmen – zugleich Call-to-Action */}
          <li data-reveal style={{ '--delay': '0.16s' }} className="flex">
            <a
              href="#kontakt"
              className="spot spot-dark group relative flex w-full flex-col overflow-hidden rounded-[1.75rem] bg-navy p-7 text-white shadow-[0_30px_60px_-30px_rgb(11_17_32/0.6)] transition-transform duration-700 ease-out-expo hover:-translate-y-1.5 sm:p-8"
            >
              <span
                className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-[radial-gradient(closest-side,rgb(255_107_53/0.35),transparent)] transition-transform duration-1000 ease-out-expo group-hover:scale-125"
                aria-hidden="true"
              />
              <div className="relative flex items-start justify-between">
                <span className="icon-tile bg-ember text-navy group-hover:-rotate-6">
                  <Icon name="grid" />
                </span>
                <span className="grid size-11 place-items-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-ember group-hover:text-navy">
                  <Icon name="arrowUpRight" strokeWidth={2} className="size-5 transition-transform duration-500 group-hover:rotate-45" />
                </span>
              </div>
              <h3 className="relative mt-8 text-[1.4rem] font-bold tracking-[-0.03em]">Weitere Unternehmen</h3>
              <p className="relative mt-3 leading-relaxed text-white/70">
                Selbstständig, Praxis, Studio, Agentur oder mittelständischer Betrieb? Wenn du online wachsen möchtest,
                finden wir gemeinsam den passenden Weg.
              </p>
              <span className="relative mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-ember">
                Lass uns sprechen
                <Icon name="arrowRight" strokeWidth={2} className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
