import { siteMeta } from '../data/siteContent'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <p>
        © {year} {siteMeta.name}. Wszystkie prawa zastrzeżone.
      </p>
    </footer>
  )
}
