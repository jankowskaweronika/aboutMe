import { pricingContent } from '../data/siteContent'

export function PricingSection() {
  return (
    <section id="cennik" className="pricing-section">
      <p className="section-eyebrow">{pricingContent.introEyebrow}</p>
      <h2 className="section-title-display section-title-display--sm">Oferta</h2>
      <p className="pricing-intro">{pricingContent.intro}</p>
      <div className="pricing-grid">
        {pricingContent.packages.map((pkg) => (
          <article
            key={pkg.id}
            className={
              'pricing-card' + (pkg.highlighted ? ' pricing-card--featured' : '')
            }
          >
            <p className="pricing-pack-tag">{pkg.packTag}</p>
            <p className="pricing-quote">„{pkg.quoteTitle}”</p>
            <h3 className="pricing-name">{pkg.name}</h3>
            <ul className="pricing-features">
              {pkg.features.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="pricing-price">{pkg.priceFrom}</p>
            {pkg.note ? <p className="pricing-note">{pkg.note}</p> : null}
            <a
              className="btn btn-offer"
              href={pkg.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pkg.ctaLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
