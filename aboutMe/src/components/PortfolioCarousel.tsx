import { useCallback, useRef, useState } from 'react'
import type { PortfolioSite } from '../data/siteContent'

type Props = {
  items: PortfolioSite[]
}

export function PortfolioCarousel({ items }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelectorAll<HTMLElement>('[data-carousel-card]')[index]
    card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    setActive(index)
  }, [])

  const onScroll = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const cards = el.querySelectorAll<HTMLElement>('[data-carousel-card]')
    const mid = el.scrollLeft + el.clientWidth / 2
    let best = 0
    let bestDist = Infinity
    cards.forEach((c, i) => {
      const cx = c.offsetLeft + c.offsetWidth / 2
      const d = Math.abs(cx - mid)
      if (d < bestDist) {
        bestDist = d
        best = i
      }
    })
    setActive(best)
  }, [])

  return (
    <section id="portfolio" className="portfolio-section">
      <p className="section-eyebrow">Strony www</p>
      <h2 className="section-title-display section-title-display--sm">Wybrane realizacje</h2>
      <p className="section-lead">
        Najedź na kafel i kliknij — otworzysz projekt w nowej karcie.
      </p>
      <div className="carousel-wrap">
        <button
          type="button"
          className="carousel-btn carousel-btn-prev"
          aria-label="Poprzednia strona"
          onClick={() => scrollToIndex(Math.max(0, active - 1))}
        >
          ‹
        </button>
        <div
          className="carousel-scroller"
          ref={scrollerRef}
          onScroll={onScroll}
          role="region"
          aria-roledescription="karuzela"
          aria-label="Wybrane realizacje stron"
        >
          {items.map((site) => (
            <article key={site.id} data-carousel-card className="portfolio-card">
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card-inner"
                style={
                  site.previewImage
                    ? undefined
                    : { background: site.cardGradient }
                }
              >
                {site.previewImage ? (
                  <img src={site.previewImage} alt="" className="portfolio-card-img" />
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
        <button
          type="button"
          className="carousel-btn carousel-btn-next"
          aria-label="Następna strona"
          onClick={() => scrollToIndex(Math.min(items.length - 1, active + 1))}
        >
          ›
        </button>
      </div>
      <div className="carousel-dots" role="tablist" aria-label="Slajdy portfolio">
        {items.map((site, i) => (
          <button
            key={site.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={i === active ? 'dot active' : 'dot'}
            aria-label={`Pokaż ${site.title}`}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
