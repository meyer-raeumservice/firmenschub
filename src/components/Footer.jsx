import { COMPANY } from '../config.js'
import { NAV, SERVICES } from '../content.js'
import { Icon } from './Icon.jsx'
import { Logo } from './ui.jsx'

/** Klar gekennzeichneter Platzhalter für noch fehlende Angaben */
function Placeholder({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-ember/50 bg-ember/8 px-2.5 py-1 text-[0.85rem] font-medium text-[#ffb08a]">
      <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ember">Platzhalter</span>
      {children}
    </span>
  )
}

export function Footer({ base = '', joined = true }) {
  const href = (id) => (id === 'start' ? (base ? base : '#start') : `${base}#${id}`)
  const year = new Date().getFullYear()

  return (
    <footer
      className={`panel mb-1.5 sm:mb-3 ${joined ? 'panel-join-top' : 'mt-24'}`}
      aria-labelledby="footer-title"
    >
      <h2 id="footer-title" className="sr-only">
        Fußbereich
      </h2>
      <div className="shell relative pb-8 pt-4 sm:pt-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 border-t border-white/10 pt-14 sm:pt-16 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-2 lg:col-span-4">
            <Logo href={href('start')} className="text-[1.9rem] text-white" />
            <p className="mt-5 max-w-xs text-lg font-semibold leading-snug tracking-[-0.02em] text-white">
              Wir bringen dein Unternehmen nach vorne<span className="text-ember">.</span>
            </p>
            <p className="mt-3 text-sm font-semibold text-white/55">
              Webdesign <span className="text-ember">·</span> Google <span className="text-ember">·</span>{' '}
              Kundengewinnung
            </p>
          </div>

          <nav aria-label="Footer-Navigation" className="lg:col-span-2">
            <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white/50">Navigation</h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.id}>
                  <FooterLink href={href(n.id)}>{n.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white/50">Leistungen</h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <FooterLink href={href('leistungen')}>{s.title}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white/50">Kontakt</h3>
            <ul className="mt-5 space-y-3 text-white/75">
              <li>
                <FooterLink href={href('kontakt')}>Kontaktformular</FooterLink>
              </li>
              <li>{COMPANY.email ? <a href={`mailto:${COMPANY.email}`} className="hover:text-white">{COMPANY.email}</a> : <Placeholder>E-Mail</Placeholder>}</li>
              <li>{COMPANY.phone ? <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="hover:text-white">{COMPANY.phone}</a> : <Placeholder>Telefon</Placeholder>}</li>
              <li>{COMPANY.address ? <span>{COMPANY.address}</span> : <Placeholder>Adresse</Placeholder>}</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white/50">Rechtliches</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <FooterLink href="./impressum.html">Impressum</FooterLink>
              </li>
              <li>
                <FooterLink href="./datenschutz.html">Datenschutz</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Große Wortmarke als Abschluss */}
        <p
          className="pointer-events-none mt-16 select-none whitespace-nowrap text-center text-[clamp(3rem,13.4vw,12.4rem)] font-extrabold leading-[0.85] tracking-[-0.065em] sm:mt-20"
          aria-hidden="true"
        >
          <span className="bg-linear-to-b from-white/14 to-white/0 bg-clip-text text-transparent">firmenschub</span>
          <span className="ml-[0.05em] inline-block size-[0.2em] rounded-full bg-ember/90" />
        </p>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-5 border-t border-white/10 pt-7 text-sm text-white/55 sm:flex-row sm:items-center">
          <p>
            © <span suppressHydrationWarning>{year}</span> firmenschub. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <a href="./impressum.html" className="transition-colors hover:text-white">
              Impressum
            </a>
            <a href="./datenschutz.html" className="transition-colors hover:text-white">
              Datenschutz
            </a>
            <a
              href={href('start')}
              className="group grid size-11 place-items-center rounded-full bg-white/8 text-white shadow-[inset_0_0_0_1px_rgb(255_255_255/0.12)] transition-colors hover:bg-ember hover:text-navy"
              aria-label="Nach oben"
            >
              <Icon name="arrowUp" strokeWidth={2} className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center font-medium text-white/75 transition-colors duration-300 hover:text-white"
    >
      <span
        className="h-px w-0 bg-ember transition-all duration-500 ease-out-expo group-hover:mr-2 group-hover:w-3"
        aria-hidden="true"
      />
      {children}
    </a>
  )
}
