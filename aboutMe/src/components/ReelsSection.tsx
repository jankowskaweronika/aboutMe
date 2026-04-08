import { reelItems } from '../data/siteContent'
import { ReelCard } from './ReelCard'

export function ReelsSection() {
  return (
    <section id="rolki" className="reels-section">
      <p className="section-eyebrow">Przykładowe wyniki</p>
      <h2 className="section-title-display section-title-display--sm">Rolki i shorty</h2>
      <div className="reels-grid">
        {reelItems.map((reel) => (
          <ReelCard key={reel.id} reel={reel} />
        ))}
      </div>
    </section>
  )
}
