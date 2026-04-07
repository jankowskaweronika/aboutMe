import { aboutContent } from '../data/siteContent'

export function AboutSection() {
  return (
    <section id="o-mnie" className="about-section">
      <p className="section-eyebrow">{aboutContent.eyebrow}</p>
      <h2 className="section-title-display">{aboutContent.headline}</h2>
      <div className="about-prose">
        {aboutContent.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  )
}
