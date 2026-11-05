import { Icon } from './Icon.jsx'

/** Wortmarke „firmenschub." – der orange Punkt ist das Markenzeichen */
export function Logo({ href = '#start', className = '', onClick }) {
  const cls = `logo inline-flex items-baseline font-extrabold leading-none tracking-[-0.05em] ${className}`
  const inner = (
    <>
      <span>firmenschub</span>
      <span className="logo-dot" aria-hidden="true" />
    </>
  )
  if (href === null) return <span className={cls}>{inner}</span>
  return (
    <a href={href} onClick={onClick} className={cls} aria-label="firmenschub. – zur Startseite">
      {inner}
    </a>
  )
}

/**
 * Button / Link-Button
 * variant: primary | ghost-dark | ghost-light | dark
 */
export function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon = 'arrowRight',
  className = '',
  children,
  type,
  ...rest
}) {
  const cls = `btn btn-${variant} btn-${size} ${icon ? 'btn-has-icon' : ''} ${className}`
  const inner = (
    <>
      <span>{children}</span>
      {icon ? (
        <span className="btn-icon" aria-hidden="true">
          <Icon name={icon} strokeWidth={2} />
          <Icon name={icon} strokeWidth={2} />
        </span>
      ) : null}
    </>
  )
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type || 'button'} className={cls} {...rest}>
      {inner}
    </button>
  )
}

/** Kleines Abschnitts-Label: ● 01 —— Leistungen */
export function SectionLabel({ index, children, tone = 'light', className = '' }) {
  const color = tone === 'dark' ? 'text-white/60' : 'text-slate-500'
  return (
    <p
      className={`inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.2em] ${color} ${className}`}
    >
      <span className="size-1.5 rounded-full bg-ember" aria-hidden="true" />
      {index ? <span className="tabular-nums">{index}</span> : null}
      {index ? <span className="h-px w-6 bg-current opacity-40" aria-hidden="true" /> : null}
      <span>{children}</span>
    </p>
  )
}

/** Satzzeichen am Ende einer Headline in Orange – wie im Logo */
export function Dot({ char = '.' }) {
  return <span className="text-ember">{char}</span>
}
