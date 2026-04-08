import { useCallback, useEffect, useRef, useState } from 'react'
import type { ReelItem } from '../data/siteContent'

type Props = {
  reel: ReelItem
}

type ReelStatKind = 'views' | 'engagement' | 'shares' | 'saves' | 'comments'

const STAT_LABELS: Record<ReelStatKind, string[]> = {
  views: ['Wyświetlenia', 'Wyswietlenia'],
  engagement: ['zaangażowanie', 'zaangazowanie'],
  shares: ['udostępnienia', 'udostepnienia'],
  saves: ['zapisów', 'zapisow'],
  comments: ['komentarze'],
}

function parseStatsLabel(statsLabel: string): Array<{ kind: ReelStatKind; value: string }> {
  const parts = statsLabel
    .split('·')
    .map((p) => p.trim())
    .filter(Boolean)

  const result: Array<{ kind: ReelStatKind; value: string }> = []

  for (const part of parts) {
    const [rawKey, ...rest] = part.split(':')
    const key = (rawKey ?? '').trim()
    const value = rest.join(':').trim()
    if (!key || !value) continue

    const kind = (Object.keys(STAT_LABELS) as ReelStatKind[]).find((k) =>
      STAT_LABELS[k].some((label) => label.toLowerCase() === key.toLowerCase()),
    )
    if (!kind) continue
    result.push({ kind, value })
  }

  return result
}

function StatIcon({ kind }: { kind: ReelStatKind }) {
  switch (kind) {
    case 'views':
      return (
        <svg
          className="reel-stat-icon"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      )
    case 'engagement':
      return (
        <svg
          className="reel-stat-icon"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M12 21s-7-4.5-9.5-9A5.8 5.8 0 0 1 12 5.5 5.8 5.8 0 0 1 21.5 12C19 16.5 12 21 12 21Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'shares':
      return (
        <svg
          className="reel-stat-icon"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M14 9l-4 2m4 4l-4-2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm8 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      )
    case 'saves':
      return (
        <svg
          className="reel-stat-icon"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'comments':
      return (
        <svg
          className="reel-stat-icon"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M4 5h16v11H7l-3 3V5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )
  }
}

export function ReelCard({ reel }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const title = (reel.title ?? '').trim()
  const accessibleTitle = title || 'Rolka'
  const [canHoverPreview] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches
  })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setPrefersReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const play = useCallback(() => {
    const v = videoRef.current
    if (!v || prefersReducedMotion) return
    // Hover preview should stay silent.
    v.muted = true
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
    setIsMuted(true)
  }, [])

  const togglePlayback = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      setIsMuted(false)
      v.muted = false
      void v.play().catch(() => {})
    } else {
      reset()
    }
  }, [reset])

  return (
    <article className="reel-card">
      {title ? <h3 className="reel-title">{title}</h3> : null}
      <div className="reel-card-content">
        <div
          className="reel-frame"
          onMouseEnter={canHoverPreview ? play : undefined}
          onMouseLeave={canHoverPreview ? reset : undefined}
          onClick={togglePlayback}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              togglePlayback()
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`Odtwórz podgląd: ${accessibleTitle}`}
        >
          <video
            ref={videoRef}
            className="reel-video"
            src={reel.videoSrc}
            poster={reel.posterSrc}
            muted={isMuted}
            playsInline
            loop
            preload="metadata"
            controls={!canHoverPreview}
          />
          <div className="reel-hint" aria-hidden="true">
            Najedź lub dotknij, by odtworzyć
          </div>
        </div>
        <div className="reel-stats" aria-label="Statystyki rolki">
          {parseStatsLabel(reel.statsLabel).map(({ kind, value }) => (
            <span key={kind} className="reel-stat" aria-label={`${kind}: ${value}`}>
              <StatIcon kind={kind} />
              <span className="reel-stat-value">{value}</span>
            </span>
          ))}
        </div>
      </div>
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
