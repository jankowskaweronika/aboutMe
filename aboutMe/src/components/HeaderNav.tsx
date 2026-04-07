import { heroContent, siteMeta } from '../data/siteContent'

const links = [
  { href: '#o-mnie', label: 'O mnie' },
  { href: '#portfolio', label: 'Strony' },
  { href: '#rolki', label: 'Rolki' },
  { href: '#cennik', label: 'Cennik' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function HeaderNav() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#top" className="site-logo">
          {siteMeta.name}
        </a>
        <nav className="site-nav" aria-label="Główna nawigacja">
          <ul>
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="header-cta btn btn-primary"
          href={siteMeta.consultationUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {heroContent.ctaLabel}
        </a>
      </div>
    </header>
  )
}
