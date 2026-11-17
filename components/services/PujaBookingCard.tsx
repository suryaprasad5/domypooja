'use client'
import { useState } from 'react'
import Link from 'next/link'
import { PujaService } from '@/data/services'
import { PujaDetail } from '@/data/puja-details'
import AddToCartButton from '@/components/cart/AddToCartButton'
import { SITE, waLink } from '@/lib/config'

export default function PujaBookingCard({ puja, detail }: { puja: PujaService; detail: PujaDetail | null }) {
  const [pkg, setPkg] = useState(0)

  const packages = detail?.packages || [
    { name: 'Basic',    price: puja.price.startsWith('₹') ? puja.price.split('–')[0].trim() : 'On request', duration: '2–3 hrs', pandits: 1, highlights: ['Verified Purohit/Pandit', 'Core rituals', 'Aarti & Prasad', 'Saamagri if opted'] },
    { name: 'Standard', price: 'On request', duration: '3–4 hrs', pandits: 1, highlights: ['All Basic items', 'Additional rituals', 'Extended homa', 'Navagraha Pooja'] },
    { name: 'Premium',  price: 'On request', duration: '4+ hrs',  pandits: 2, highlights: ['All Standard items', 'Full ceremony', 'Brahmin Bhoj', 'Dedicated coordinator'] },
  ]
  const selected = packages[pkg]

  return (
    <div style={{ position: 'sticky', top: 'calc(72px + 20px)', background: 'white', borderRadius: 18, border: '1px solid var(--border-warm)', boxShadow: '0 8px 32px rgba(249,115,22,0.12)', overflow: 'hidden' }}>
      <div style={{ background: 'linear-gradient(135deg,var(--saffron),#C2540A)', color: 'white', padding: '22px 24px 18px' }}>
        <div style={{ fontSize: '0.72rem', opacity: 0.8, marginBottom: 3 }}>Starting from</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>{packages[0].price}</div>
        <div style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: 5 }}>Indicative range · exact price confirmed on request</div>
      </div>

      <div style={{ padding: '20px 22px' }}>
        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 10 }}>Select package</div>
        <div style={{ display: 'flex', gap: 6, marginBottom: 18 }}>
          {packages.map((p, i) => (
            <button key={p.name} onClick={() => setPkg(i)} style={{
              flex: 1, padding: '8px 6px', borderRadius: 10, cursor: 'pointer', fontFamily: 'var(--font-body)',
              border: `1.5px solid ${pkg === i ? 'var(--saffron)' : 'var(--border)'}`,
              background: pkg === i ? 'rgba(249,115,22,0.06)' : 'white',
              fontSize: '0.78rem', fontWeight: pkg === i ? 700 : 500,
              color: pkg === i ? 'var(--saffron-deep)' : 'var(--text-muted)',
            }}>
              {p.name}
              <div style={{ fontSize: '0.68rem', fontWeight: 600, marginTop: 2 }}>{p.price}</div>
            </button>
          ))}
        </div>

        <div style={{ background: 'var(--ivory-warm)', borderRadius: 10, padding: '12px 14px', marginBottom: 18 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 8 }}>{selected.name} includes</div>
          {selected.highlights.slice(0, 4).map(h => (
            <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '0.78rem', color: 'var(--text-body)', marginBottom: 5 }}>
              <span style={{ color: 'var(--saffron)', fontWeight: 700, flexShrink: 0 }}>✓</span>{h}
            </div>
          ))}
          <div style={{ fontSize: '0.72rem', color: 'var(--text-faint)', marginTop: 6 }}>
            ⏱️ {selected.duration} · 👨‍🦳 {selected.pandits} Purohit{selected.pandits > 1 ? 's' : ''}/Pandit{selected.pandits > 1 ? 's' : ''}
          </div>
        </div>

        <AddToCartButton serviceId={puja.id} packageName={detail ? selected.name : null} variant="primary" />
        <div style={{ height: 8 }} />
        <Link href="/cart" style={{ display: 'block', textAlign: 'center', padding: '10px', borderRadius: 999, border: '1.5px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.84rem', fontWeight: 600, textDecoration: 'none', marginBottom: 8 }}>
          View cart &amp; check out
        </Link>
        <a href={waLink(`Hello DoMyPooja, I have a question about: ${puja.name} (${selected.name} package)`)} target="_blank" rel="noreferrer"
          style={{ display: 'block', padding: '10px', borderRadius: 999, border: '2px solid #0F766E', color: '#0F766E', fontWeight: 700, fontSize: '0.84rem', textAlign: 'center', textDecoration: 'none', marginBottom: 14 }}>
          💬 Ask on WhatsApp
        </a>

        <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '0.7rem', color: 'var(--text-faint)', textAlign: 'center', paddingTop: 12, borderTop: '1px solid var(--border)' }}>
          {['✅ Verified', '🪔 Saamagri on request', '📞 Support'].map(t => <div key={t}>{t}</div>)}
        </div>
      </div>

      <div style={{ background: 'var(--ivory-warm)', borderTop: '1px solid var(--border)', padding: '14px 22px', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-faint)', marginBottom: 5 }}>Have questions? Talk to our experts</p>
        <a href={`tel:${SITE.phoneTel}`} style={{ fontWeight: 700, color: 'var(--saffron)', fontSize: '0.95rem', textDecoration: 'none' }}>📞 {SITE.phoneDisplay}</a>
      </div>
    </div>
  )
}
