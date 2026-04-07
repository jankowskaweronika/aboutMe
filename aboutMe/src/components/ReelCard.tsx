import { useCallback, useEffect, useRef, useState } from 'react'
import type { ReelItem } from '../data/siteContent'

type Props = {
  reel: ReelItem
}

export function ReelCard({ reel }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const fn = () => setPrefersReducedMotion(mq.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  const play = useCallback(() => {
    const v = videoRef.current
    if (!v || prefersReducedMotion) return
    void v.play().catch(() => {
      /* autoplay / load errors */
    })
  }, [prefersReducedMotion])

  const reset = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    try {
      v.currentTime = 0
    } catch {
      /* ignore */
    }
  }, [])

  const togglePlayback = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) void v.play().catch(() => {})
    else reset()
  }, [reset])

  return (
    <article className="reel-card">
      <h3 className="reel-title">{reel.title}</h3>
      <div
        className="reel-frame"
        onMouseEnter={play}
        onMouseLeave={reset}
        onClick={togglePlayback}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            togglePlayback()
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Odtwórz podgląd: ${reel.title}`}
      >
        <video
          ref={videoRef}
          className="reel-video"
          src={reel.videoSrc}
          poster={reel.posterSrc}
          muted
          playsInline
          loop
          preload="metadata"
        />
        <div className="reel-hint" aria-hidden="true">
          Najedź lub dotknij, by odtworzyć
        </div>
      </div>
      <p className="reel-stats">{reel.statsLabel}</p>
      {reel.externalUrl ? (
        <a
          className="reel-external-link"
          href={reel.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Zobacz publikację →
        </a>
      ) : null}
    </article>
  )
}
