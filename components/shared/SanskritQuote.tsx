import type { CSSProperties } from 'react'
import type { Quote } from '@/data/quotes'

type Variant = 'light' | 'dark' | 'white'

const palette: Record<Variant, { sa: string; sub: string; src: string }> = {
  light: { sa: 'var(--saffron-deep)', sub: 'var(--text-muted)', src: 'var(--text-faint)' },
  dark:  { sa: '#FDE68A', sub: 'rgba(255,255,255,0.75)', src: 'rgba(255,255,255,0.5)' },
  white: { sa: '#FFFFFF', sub: 'rgba(255,255,255,0.9)', src: 'rgba(255,255,255,0.7)' },
}

export default function SanskritQuote({ quote, variant = 'light', align = 'center', compact = false }: {
  quote: Quote; variant?: Variant; align?: 'center' | 'left'; compact?: boolean
}) {
  const c = palette[variant]
  const wrap: CSSProperties = { margin: 0, textAlign: align, maxWidth: 760, marginInline: align === 'center' ? 'auto' : 0 }
  return (
    <figure style={wrap}>
      <blockquote lang="sa" style={{
        margin: 0, fontFamily: 'var(--font-devan)', color: c.sa, lineHeight: 1.5,
        fontSize: compact ? 'clamp(1rem,2vw,1.15rem)' : 'clamp(1.25rem,2.6vw,1.7rem)',
      }}>{quote.sa}</blockquote>
      <figcaption style={{ marginTop: compact ? 3 : 8, fontSize: compact ? '0.74rem' : '0.82rem', lineHeight: 1.55 }}>
        {!compact && <div style={{ fontStyle: 'italic', color: c.sub }}>{quote.roman}</div>}
        <div style={{ color: c.sub }}>“{quote.en}”</div>
        <div style={{ color: c.src, fontSize: '0.72rem', marginTop: 2 }}>— {quote.source}</div>
      </figcaption>
    </figure>
  )
}

/** Full-width band used between home-page sections. */
export function ShlokaBand({ quote, dark = false }: { quote: Quote; dark?: boolean }) {
  return (
    <section style={{
      padding: '46px 8%', textAlign: 'center',
      background: dark ? 'linear-gradient(135deg,#1C1009 0%,#2C1505 60%,#0D5C55 100%)' : 'var(--ivory-warm)',
      borderTop: dark ? 'none' : '1px solid var(--border)', borderBottom: dark ? 'none' : '1px solid var(--border)',
    }}>
      <div style={{ color: dark ? '#FDE68A' : 'var(--saffron)', fontSize: '0.7rem', letterSpacing: 6, marginBottom: 10 }}>✦ ✦ ✦</div>
      <SanskritQuote quote={quote} variant={dark ? 'dark' : 'light'} />
    </section>
  )
}
