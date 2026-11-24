import { useId, useState } from 'react'
import { FAQS } from '../content.js'
import { Button, Dot, SectionLabel } from './ui.jsx'

export function Faq() {
  const [open, setOpen] = useState(0)
  const uid = useId()

  return (
    <section aria-labelledby="faq-title" className="section">
      <div id="faq" className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32" data-reveal>
            <SectionLabel index="06">FAQ</SectionLabel>
            <h2 id="faq-title" className="h2 mt-6 text-navy">
              Gute Fragen. <span className="text-muted">Ehrliche Antworten</span>
              <Dot />
            </h2>
            <p className="lead mt-6 text-slate-600">
              Hier findest du Antworten auf typische Fragen rund um Website, Google und unsere Zusammenarbeit.
            </p>

            <div className="mt-10 hidden rounded-[1.5rem] bg-navy p-7 text-white lg:block">
              <p className="text-lg font-bold tracking-[-0.02em]">
                Deine Frage ist nicht dabei<span className="text-ember">?</span>
              </p>
              <p className="mt-2 text-white/65">
                Im kostenlosen Erstgespräch ist Raum für alles, was dich beschäftigt.
              </p>
              <Button href="#kontakt" size="sm" className="mt-6">
                Frage stellen
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="space-y-3">
            {FAQS.map((f, i) => {
              const isOpen = open === i
              const qid = `${uid}-q${i}`
              const aid = `${uid}-a${i}`
              return (
                <li key={f.q} data-reveal style={{ '--delay': `${Math.min(i, 4) * 0.05}s` }}>
                  <div
                    className={`faq-item rounded-[1.25rem] bg-white transition-shadow duration-500 ${
                      isOpen
                        ? 'shadow-[inset_0_0_0_1px_rgb(255_107_53/0.35),0_24px_50px_-30px_rgb(11_17_32/0.28)]'
                        : 'shadow-[inset_0_0_0_1px_rgb(11_17_32/0.07)]'
                    }`}
                    data-open={isOpen}
                  >
                    <h3>
                      <button
                        id={qid}
                        type="button"
                        className="faq-q flex w-full items-center gap-4 rounded-[1.25rem] px-5 py-5 text-left sm:gap-6 sm:px-7 sm:py-6"
                        aria-expanded={isOpen}
                        aria-controls={aid}
                        onClick={() => setOpen(isOpen ? -1 : i)}
                      >
                        <span className="hidden w-6 shrink-0 text-sm font-bold tabular-nums text-slate-500 sm:block">
                          0{i + 1}
                        </span>
                        <span className="flex-1 text-[1.02rem] font-bold leading-snug tracking-[-0.02em] text-navy sm:text-[1.15rem]">
                          {f.q}
                        </span>
                        <span className="faq-icon" aria-hidden="true" />
                      </button>
                    </h3>
                    <div id={aid} role="region" aria-labelledby={qid} className="faq-panel">
                      <div>
                        <div className="space-y-3 px-5 pb-6 leading-relaxed text-slate-600 sm:pl-[4.75rem] sm:pr-20 sm:pb-7">
                          {f.a.map((p, k) => (
                            <p key={k}>{p}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="mt-8 flex flex-col items-start gap-4 rounded-[1.25rem] bg-navy p-6 text-white sm:flex-row sm:items-center sm:justify-between lg:hidden">
            <p className="font-bold">
              Deine Frage ist nicht dabei<span className="text-ember">?</span>
            </p>
            <Button href="#kontakt" size="sm">
              Frage stellen
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
