/**
 * Eigenes, schlankes Icon-Set (24×24, Linienstärke 1.6).
 * Keine externe Bibliothek nötig.
 */
const P = {
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 19V5" />
      <path d="M6 11l6-6 6 6" />
    </>
  ),
  check: <path d="M5 12.5l4.2 4.2L19 7" />,
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  browser: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M3 9h18" />
      <path d="M6.5 6.5h.01M9 6.5h.01" />
      <rect x="6.5" y="12" width="5" height="5" rx="1.2" />
      <path d="M14.5 12.75h3M14.5 16.25h2" />
    </>
  ),
  searchPin: (
    <>
      <circle cx="10.5" cy="10.5" r="7" />
      <path d="m15.6 15.6 4.9 4.9" />
      <path d="M10.5 14.2c-1.7-1.45-2.7-2.8-2.7-4a2.7 2.7 0 0 1 5.4 0c0 1.2-1 2.55-2.7 4Z" />
    </>
  ),
  growth: (
    <>
      <path d="M3.5 17.5 9 12l4 4 7.5-8" />
      <path d="M15 8h5.5v5.5" />
      <path d="M3.5 21h17" />
    </>
  ),
  chat: (
    <>
      <path d="M20 11.5a7.5 7.5 0 0 1-10.9 6.7L4.5 19.5l1.3-4.2A7.5 7.5 0 1 1 20 11.5Z" />
      <path d="M9 11.5h.01M12.5 11.5h.01M16 11.5h.01" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3.5 20.5 8 12 12.5 3.5 8 12 3.5Z" />
      <path d="m3.5 12 8.5 4.5 8.5-4.5" />
      <path d="m3.5 16 8.5 4.5 8.5-4.5" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  pen: (
    <>
      <path d="M12 20.5h8.5" />
      <path d="M16.2 3.8a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.2 3.8Z" />
    </>
  ),
  hammer: (
    <>
      <path d="M4.5 19.5 13 11" />
      <rect x="9.6" y="7.4" width="10" height="4.2" rx="1.1" transform="rotate(45 14.6 9.5)" />
    </>
  ),
  cloche: (
    <>
      <path d="M3 18.5h18" />
      <path d="M5 18.5a7 7 0 0 1 14 0" />
      <path d="M12 11.5V9" />
      <path d="M10.5 8.5h3" />
      <path d="M5.5 21h13" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6.5" cy="6.5" r="2.7" />
      <circle cx="6.5" cy="17.5" r="2.7" />
      <path d="M8.6 8.2 20 17.5" />
      <path d="M8.6 15.8 20 6.5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7" />
      <path d="M3 12.5h18" />
      <path d="M10.5 12.5v1.5h3v-1.5" />
    </>
  ),
  store: (
    <>
      <path d="M4 9.5 5.5 4h13L20 9.5" />
      <path d="M4 9.5a2.67 2.67 0 0 0 5.33 0 2.67 2.67 0 0 0 5.34 0 2.67 2.67 0 0 0 5.33 0" />
      <path d="M5.5 12v8h13v-8" />
      <path d="M10 20v-4.5h4V20" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.6" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6" />
      <path d="M16.75 14v5.5M14 16.75h5.5" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2.6" />
      <path d="M11 17.5h2" />
    </>
  ),
  call: (
    <path d="M20.5 16.6v2.6a1.7 1.7 0 0 1-1.9 1.7A16.8 16.8 0 0 1 3.1 5.4 1.7 1.7 0 0 1 4.8 3.5h2.6a1.7 1.7 0 0 1 1.7 1.5c.1.9.3 1.7.6 2.5a1.7 1.7 0 0 1-.4 1.8L8.2 10.4a13.6 13.6 0 0 0 5.4 5.4l1.1-1.1a1.7 1.7 0 0 1 1.8-.4c.8.3 1.6.5 2.5.6a1.7 1.7 0 0 1 1.5 1.7Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.6" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  pinSolid: (
    <path
      d="M12 22s-7-6-7-11.7a7 7 0 0 1 14 0C19 16 12 22 12 22Zm0-9a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9.5" rx="2.2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M21 20H3" />
    </>
  ),
  bell: (
    <>
      <path d="M6 9.5a6 6 0 0 1 12 0c0 6 2.5 7.5 2.5 7.5h-17S6 15.5 6 9.5Z" />
      <path d="M10 20.5a2.2 2.2 0 0 0 4 0" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3.5 21.5 20h-19L12 3.5Z" />
      <path d="M12 10v4.5M12 17.25h.01" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5M12 7.75h.01" />
    </>
  ),
  quote: (
    <path
      d="M9.6 6C6.3 7.4 4.5 10 4.5 13.6V18h5.2v-5.1H7.3c0-2.2 1.1-3.8 3.2-4.8L9.6 6Zm9 0c-3.3 1.4-5.1 4-5.1 7.6V18h5.2v-5.1h-2.4c0-2.2 1.1-3.8 3.2-4.8L18.6 6Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  cursor: (
    <path
      d="M5 3.5 19 11l-6.2 1.6L9.6 19 5 3.5Z"
      fill="currentColor"
      stroke="#0B1120"
      strokeWidth="1.2"
    />
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.6" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  spark: (
    <path d="M12 3c.5 4.3 2.2 6 6.5 6.5-4.3.5-6 2.2-6.5 6.5-.5-4.3-2.2-6-6.5-6.5C9.8 9 11.5 7.3 12 3Z" />
  ),
}

export function Icon({ name, className = '', strokeWidth = 1.6, title }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {P[name]}
    </svg>
  )
}
