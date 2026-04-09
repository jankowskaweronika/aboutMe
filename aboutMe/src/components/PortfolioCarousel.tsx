import type { PortfolioSite } from '../data/siteContent'

type Props = {
  items: PortfolioSite[]
}

export function PortfolioCarousel({ items }: Props) {
  return (
    <section id="portfolio" className="portfolio-section">
      <p className="section-eyebrow">Strony www</p>
      <h2 className="section-title-display section-title-display--sm">Wybrane realizacje</h2>
      <p className="section-lead">
        Kliknij w kafel — otworzysz projekt w nowej karcie.
      </p>
      <div className="portfolio-grid" aria-label="Wybrane realizacje stron">
        {items.slice(0, 3).map((site) => (
          <article key={site.id} className="portfolio-card">
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card-inner"
              style={{ background: site.cardGradient }}
            >
              {site.previewImage ? (
                <img
                  src={site.previewImage}
                  alt=""
                  className="portfolio-card-img"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              ) : null}
              <div className="portfolio-card-overlay">
                <h3>{site.title}</h3>
                <p>{site.subtitle}</p>
                <span className="portfolio-card-cta">Otwórz stronę →</span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
