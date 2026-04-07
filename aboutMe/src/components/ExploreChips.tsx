import { exploreChips } from '../data/siteContent'

export function ExploreChips() {
  return (
    <section className="explore-chips-section" aria-label="Szybka nawigacja">
      <p className="explore-chips-label">Wybierz, co chcesz zobaczyć:</p>
      <ul className="explore-chips-row">
        {exploreChips.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="explore-chip">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
