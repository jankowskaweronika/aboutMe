import { contactContent, siteMeta } from '../data/siteContent'

export function ContactSection() {
  return (
    <section id="kontakt" className="contact-section">
      <p className="section-eyebrow">{contactContent.eyebrow}</p>
      <h2 className="contact-headline">{contactContent.headline}</h2>
      <p className="contact-lead">{contactContent.lead}</p>
      <p className="contact-trust">{contactContent.trustLine}</p>
      <div className="contact-actions">
        <a
          className="btn btn-primary"
          href={siteMeta.emailComposeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteMeta.email}
        </a>
        <a
          className="btn btn-soft"
          href={siteMeta.consultationUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Umów rozmowę
        </a>
        <a
          className="btn btn-soft"
          href={siteMeta.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteMeta.social.instagramHandle}
        </a>
      </div>
    </section>
  )
}
