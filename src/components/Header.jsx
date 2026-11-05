import { useCallback, useEffect, useRef, useState } from 'react'
import { NAV } from '../content.js'
import { Button, Logo } from './ui.jsx'
import { Icon } from './Icon.jsx'

/** Sektionen, die beim Scrollen verfolgt werden (nicht jede steht in der Navigation) */
const TRACKED = ['start', 'leistungen', 'warum', 'branchen', 'ablauf', 'ueber-uns', 'faq', 'kontakt']
const NAV_IDS = new Set(NAV.map((n) => n.id))

export function Header({ base = '', solid = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(solid ? null : 'start')
  const pillRef = useRef(null)
  const menuRef = useRef(null)
  const burgerRef = useRef(null)

  // Hintergrund beim Scrollen + aktiven Abschnitt bestimmen
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      setScrolled(window.scrollY > 24)
      if (solid) return
      const line = window.innerHeight * 0.38
      let current = 'start'
      for (const id of TRACKED) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      // Am Seitenende immer „Kontakt" markieren
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'kontakt'
      setActive(NAV_IDS.has(current) ? current : null)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [solid])

  // Mobiles Menü: Scroll sperren, Escape, Fokus
  useEffect(() => {
    if (!open) return
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    const first = menuRef.current?.querySelector('a')
    first?.focus({ preventScroll: true })
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        burgerRef.current?.focus()
      }
      if (e.key === 'Tab' && menuRef.current) {
        // einfacher Fokus-Trap: Burger + Menülinks
        const items = [burgerRef.current, ...menuRef.current.querySelectorAll('a, button')].filter(Boolean)
        const i = items.indexOf(document.activeElement)
        if (e.shiftKey && i <= 0) {
          e.preventDefault()
          items[items.length - 1].focus()
        } else if (!e.shiftKey && i === items.length - 1) {
          e.preventDefault()
          items[0].focus()
        }
      }
    }
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  // Gleitende Hover-Pille in der Desktop-Navigation
  const movePill = useCallback((e) => {
    const pill = pillRef.current
    if (!pill) return
    const el = e.currentTarget
    pill.style.setProperty('--x', `${el.offsetLeft}px`)
    pill.style.setProperty('--w', `${el.offsetWidth}px`)
    pill.style.opacity = '1'
  }, [])
  const hidePill = useCallback(() => {
    if (pillRef.current) pillRef.current.style.opacity = '0'
  }, [])

  const close = () => setOpen(false)
  const href = (id) => (id === 'start' && base ? base || './' : `${base}#${id}`)

  return (
    <>
      <header
        className={`site-header ${scrolled ? 'is-scrolled' : ''} ${solid ? 'is-solid' : ''} ${open ? 'menu-open' : ''}`}
      >
        <div className="header-bar">
          <Logo href={href('start')} className="text-[1.3rem] text-white sm:text-[1.45rem]" onClick={close} />

          <nav aria-label="Hauptnavigation" className="hidden lg:block">
            <ul className="relative flex items-center" onMouseLeave={hidePill}>
              <span ref={pillRef} className="nav-pill" aria-hidden="true" />
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={href(item.id)}
                    className="nav-link"
                    aria-current={active === item.id ? 'true' : undefined}
                    onMouseEnter={movePill}
                    onFocus={movePill}
                    onBlur={hidePill}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button href={`${base}#kontakt`} size="sm" className="hidden shrink-0 sm:inline-flex" onClick={close}>
              Kostenloses Erstgespräch
            </Button>
            <button
              ref={burgerRef}
              type="button"
              className="burger lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobiles Menü */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className="mobile-menu lg:hidden"
        data-open={open}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="pointer-events-none absolute -right-1/3 -top-1/4 aspect-square w-[120%] rounded-full bg-[radial-gradient(closest-side,rgb(255_107_53/0.22),transparent)]" />
        <div className="bg-grid-dark pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]" />
        <nav aria-label="Mobile Navigation" className="shell relative flex flex-1 flex-col pb-8 pt-28">
          <ul className="flex flex-col">
            {NAV.map((item, i) => (
              <li key={item.id} className="mm-item border-b border-white/10" style={{ '--i': i }}>
                <a
                  href={href(item.id)}
                  onClick={close}
                  aria-current={active === item.id ? 'true' : undefined}
                  className="group flex items-center justify-between py-4 text-[2rem] font-bold tracking-[-0.04em] text-white sm:text-[2.5rem]"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs font-bold tracking-[0.15em] text-white/45 tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="transition-colors group-aria-[current=true]:text-ember">{item.label}</span>
                  </span>
                  <Icon
                    name="arrowUpRight"
                    className="size-6 text-white/40 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-ember"
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="mm-item mt-auto pt-10" style={{ '--i': NAV.length }}>
            <Button href={`${base}#kontakt`} size="lg" className="w-full" onClick={close}>
              Kostenloses Erstgespräch
            </Button>
            <p className="mt-5 text-center text-sm font-semibold text-white/55">
              Webdesign <span className="text-ember">·</span> Google <span className="text-ember">·</span>{' '}
              Kundengewinnung
            </p>
          </div>
        </nav>
      </div>
    </>
  )
}
