import { useEffect, useRef } from 'react'
import { STEPS } from '../content.js'
import { Button, Dot, SectionLabel } from './ui.jsx'

export function Process() {
  const ref = useRef(null)

  useEffect(() => {
    const ol = ref.current
    if (!ol) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mq = window.matchMedia('(min-width: 1024px)')
    const items = [...ol.querySelectorAll('.tl-step')]
    let raf = 0
    let span = 1

    // Mobil: Linie endet exakt am letzten Knoten, Schwellen = echte Knotenpositionen
    const measure = () => {
      if (mq.matches) {
        ol.style.removeProperty('--track-h')
        items.forEach((li, i) => li.style.setProperty('--t', String(i / (items.length - 1))))
      } else {
        span = Math.max(1, items[items.length - 1].offsetTop)
        ol.style.setProperty('--track-h', `${span}px`)
        items.forEach((li) => li.style.setProperty('--t', (li.offsetTop / span).toFixed(4)))
      }
    }
    const update = () => {
      raf = 0
      if (reduce) {
        ol.style.setProperty('--p', '1')
        return
      }
      const vh = window.innerHeight
      const r = ol.getBoundingClientRect()
      let p
      if (mq.matches) {
        p = (vh * 0.85 - r.top) / (vh * 0.5)
      } else {
        // Der Leuchtpunkt folgt einer festen Linie bei 60 % der Bildschirmhöhe
        const trackTop = r.top + 24
        p = (vh * 0.6 - trackTop) / span
      }
      ol.style.setProperty('--p', Math.min(1, Math.max(0, p)).toFixed(4))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    const onResize = () => {
      measure()
      onScroll()
    }
    measure()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    mq.addEventListener('change', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      mq.removeEventListener('change', onResize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="ablauf" aria-labelledby="ablauf-title" className="section pt-8 md:pt-10 xl:pt-12">
      <div className="shell">
        <div className="rounded-[2rem] bg-white px-4 py-14 shadow-[inset_0_0_0_1px_rgb(11_17_32/0.06)] sm:rounded-[2.5rem] sm:px-10 md:py-20 lg:px-14 lg:py-24">
          <header className="grid items-end gap-6 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8" data-reveal>
              <SectionLabel index="04">Ablauf</SectionLabel>
              <h2 id="ablauf-title" className="h2 mt-6 text-navy">
                In drei Schritten <span className="text-muted">zu deinem digitalen Auftritt</span>
                <Dot />
              </h2>
            </div>
            <p className="lead text-slate-600 lg:col-span-4 lg:pb-2" data-reveal style={{ '--delay': '0.1s' }}>
              Klar strukturiert, persönlich und ohne Fachchinesisch – so arbeiten wir mit dir zusammen.
            </p>
          </header>

          <ol ref={ref} className="tl relative mt-14 grid gap-5 sm:mt-20 lg:grid-cols-3 lg:gap-6 lg:pt-14">
            <span className="tl-track" aria-hidden="true">
              <span className="tl-fill" />
              <span className="tl-spark" />
            </span>

            {STEPS.map((s, i) => (
              <li
                key={s.n}
                className="tl-step relative pl-14 sm:pl-16 lg:pl-0"
                style={{ '--t': i / (STEPS.length - 1) }}
              >
                <div className="absolute left-0 top-0 lg:left-1/2 lg:top-0 lg:-translate-x-1/2 lg:-translate-y-[calc(3.5rem+1.5rem)]">
                  <span className="tl-node" aria-hidden="true">
                    <span>{s.n}</span>
                  </span>
                </div>
                <div data-reveal style={{ '--delay': `${i * 0.1}s` }} className="h-full">
                  <article className="tl-card h-full rounded-[1.5rem] bg-mist p-6 sm:rounded-[1.75rem] sm:p-9">
                    <span className="step-num" data-n={s.n} aria-hidden="true">
                      {s.n}
                    </span>
                    <h3 className="mt-8 text-2xl font-bold tracking-[-0.035em] text-navy">
                      <span className="sr-only">Schritt {s.n}: </span>
                      {s.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{s.text}</p>
                    <p className="chip mt-7 bg-white text-slate-600 shadow-[inset_0_0_0_1px_rgb(11_17_32/0.08)]">
                      <span className="size-1.5 rounded-full bg-ember" aria-hidden="true" />
                      {s.tag}
                    </p>
                  </article>
                </div>
              </li>
            ))}
          </ol>

          <div
            className="mt-14 flex flex-col items-start justify-between gap-6 rounded-[1.5rem] bg-navy p-6 text-white sm:flex-row sm:items-center sm:p-8"
            data-reveal
          >
            <div>
              <p className="text-xl font-bold tracking-[-0.025em] sm:text-2xl">
                Schritt 01 ist kostenlos<span className="text-ember">.</span>
              </p>
              <p className="mt-1.5 text-white/65">Lerne uns unverbindlich kennen – wir nehmen uns Zeit für dich.</p>
            </div>
            <Button href="#kontakt" className="w-full sm:w-auto">
              Erstgespräch vereinbaren
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
