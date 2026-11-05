/**
 * Globale, leichtgewichtige Interaktionen (nur im Browser):
 * - Reveal-Animationen beim Scrollen
 * - Spotlight-Effekt auf Karten
 * - Magnetische Buttons
 * Alles mit passiven Listenern und IntersectionObserver – performant und abschaltbar.
 */
export function initInteractions() {
  const cleanups = []
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches

  // 1) Reveal on Scroll
  const els = document.querySelectorAll('[data-reveal]')
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute('data-inview', '')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    cleanups.push(() => io.disconnect())
  } else {
    els.forEach((el) => el.setAttribute('data-inview', ''))
  }
  window.__fsReady = true

  // 2) Spotlight-Karten
  if (fine) {
    const onMove = (e) => {
      const card = e.target instanceof Element ? e.target.closest('.spot') : null
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--x', `${e.clientX - r.left}px`)
      card.style.setProperty('--y', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    cleanups.push(() => document.removeEventListener('pointermove', onMove))
  }

  // 3) Magnetische Buttons (dezent)
  if (fine && !reduce) {
    document.querySelectorAll('[data-magnetic]').forEach((el) => {
      const move = (e) => {
        const r = el.getBoundingClientRect()
        const x = (e.clientX - (r.left + r.width / 2)) * 0.12
        const y = (e.clientY - (r.top + r.height / 2)) * 0.2
        el.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`
      }
      const leave = () => {
        el.style.translate = ''
      }
      el.style.transition = 'translate .6s cubic-bezier(.16,1,.3,1), transform .5s cubic-bezier(.16,1,.3,1), background-color .35s, box-shadow .5s'
      el.addEventListener('pointermove', move, { passive: true })
      el.addEventListener('pointerleave', leave)
      cleanups.push(() => {
        el.removeEventListener('pointermove', move)
        el.removeEventListener('pointerleave', leave)
      })
    })
  }

  return () => cleanups.forEach((fn) => fn())
}

/**
 * Scroll-Fortschritt eines Elements als CSS-Variable --p (0…1) setzen.
 * start/end: Position der Element-Oberkante relativ zur Viewport-Höhe.
 */
export function trackProgress(el, { start = 0.85, end = 0.35, useHeight = false } = {}) {
  if (!el) return () => {}
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.style.setProperty('--p', '1')
    return () => {}
  }
  let raf = 0
  const update = () => {
    raf = 0
    const vh = window.innerHeight
    const r = el.getBoundingClientRect()
    let p
    if (useHeight) {
      const span = Math.max(r.height, vh * 0.45)
      p = (vh * start - r.top) / span
    } else {
      p = (vh * start - r.top) / (vh * (start - end))
    }
    p = Math.min(1, Math.max(0, p))
    el.style.setProperty('--p', p.toFixed(4))
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
}
