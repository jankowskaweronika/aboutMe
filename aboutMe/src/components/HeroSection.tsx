import { heroContent, siteMeta } from '../data/siteContent'

export function HeroSection() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-top">
        <div className="hero-layout">
          <div className="hero-copy-col">
            <p className="hero-kicker">{heroContent.portfolioLabel}</p>
            <h1 id="hero-heading" className="hero-name">
              {siteMeta.displayName}
            </h1>
            <p className="hero-role">{siteMeta.roleShort}</p>
            <p className="hero-lead">{heroContent.lead}</p>
            <p className="hero-meta">
              <a
                href={siteMeta.emailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteMeta.email}
              </a>
              <span className="hero-meta-sep">·</span>
              <span>{siteMeta.location}</span>
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href={siteMeta.consultationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {heroContent.ctaLabel}
              </a>
            </div>
          </div>
          <div className="hero-photo-col">
            <div className="hero-photo-ring">
              <img
                src={heroContent.photoSrc}
                alt={heroContent.photoAlt}
                width={320}
                height={320}
                className="hero-photo"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const ph = target.nextElementSibling as HTMLElement | null
                  if (ph) ph.hidden = false
                }}
              />
              <div className="hero-photo-fallback" hidden aria-hidden="true">
                {siteMeta.name.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-statement" aria-hidden="false">
        {heroContent.statementLines.map((line, i) => (
          <p key={i} className="hero-statement-line">
            {line}
          </p>
        ))}
      </div>
    </section>
  )
}
