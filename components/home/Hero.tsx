'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

const YagnaKunda = dynamic(() => import('./YagnaKunda'), { ssr: false })

const PUJAS = ['Satyanarayan Puja','Griha Pravesh Puja','Maha Ganapati Homa','Rudrabhishek Puja','Marriage Puja','Namakaran Puja','Navaratri Durga Puja','Office / Business Puja','Maha Mrityunjaya Homa','Vastu Shanti Puja']
const CITIES = ['Bangalore','Mumbai','Delhi NCR','Hyderabad','Chennai','Pune','Kolkata','Ahmedabad']

const STATS = [
  { num: '85K+',   label: 'Pujas Performed' },
  { num: '2,100+', label: 'Verified Pandits' },
  { num: '30+',    label: 'Cities Covered' },
  { num: '400+',   label: 'Puja Services' },
]

export default function Hero() {
  const [puja, setPuja] = useState('')
  const [city, setCity] = useState('')
  const router = useRouter()

  const handleBook = () => {
    if (!puja || !city) { alert('Please select a Puja and a City to continue.'); return }
    router.push(`/puja-services?puja=${encodeURIComponent(puja)}&city=${encodeURIComponent(city)}`)
  }

  return (
    <section style={{
      height: '100vh',          /* exactly one viewport — no scroll */
      maxHeight: '100vh',
      paddingTop: 72,           /* nav height */
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      background: 'var(--ivory)',
      position: 'relative',
      overflow: 'hidden',
    }} className="hero-section">

      {/* BG gradients */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 80% at 15% 50%, rgba(249,115,22,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 80% 80%, rgba(15,118,110,0.07) 0%, transparent 60%)',
      }} />

      {/* LEFT — content */}
      <div style={{
        padding: '0 5% 0 8%',
        position: 'relative', zIndex: 2,
        animation: 'fadeUp 0.9s ease both',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)',
          color: 'var(--saffron-deep)', padding: '6px 16px', borderRadius: '999px',
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
          marginBottom: 16, width: 'fit-content',
        }}>
          <span style={{ fontFamily: 'var(--font-devan)', fontSize: '1rem' }}>ॐ</span>
          India&apos;s Most Trusted Pooja Platform
        </div>

        {/* Heading — tighter on desktop to fit viewport */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 3.6vw, 3.8rem)',
          fontWeight: 700, lineHeight: 1.08,
          color: 'var(--text-dark)', letterSpacing: '-0.5px',
          marginBottom: 14,
        }}>
          Book{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--saffron)' }}>Verified Pandits</em>
          <br />for{' '}
          <span style={{ color: 'var(--teal)', fontStyle: 'normal' }}>Sacred Ceremonies</span>
        </h1>

        {/* Subtext — shorter to save space */}
        <p style={{
          fontSize: '0.95rem',
          color: 'var(--text-muted)',
          lineHeight: 1.65,
          maxWidth: 460,
          marginBottom: 22,
        }}>
          Authentic Vedic rituals by verified Pandits — complete samagri delivered to your doorstep across 30+ cities.
        </p>

        {/* Search box */}
        <div style={{
          background: 'white', borderRadius: 16, padding: 6,
          display: 'flex', gap: 6,
          boxShadow: '0 6px 30px rgba(0,0,0,0.09)',
          border: '1px solid var(--border-warm)',
          maxWidth: 520, marginBottom: 24,
        }}>
          <select value={puja} onChange={e => setPuja(e.target.value)} style={{
            flex: 1, padding: '9px 10px', border: 'none',
            background: 'var(--ivory-warm)', borderRadius: 10,
            fontFamily: 'var(--font-body)', fontSize: '0.82rem',
            color: 'var(--text-body)', cursor: 'pointer', outline: 'none',
          }}>
            <option value="">🙏 Select a Puja</option>
            {PUJAS.map(p => <option key={p}>{p}</option>)}
          </select>
          <select value={city} onChange={e => setCity(e.target.value)} style={{
            flex: 1, padding: '9px 10px', border: 'none',
            background: 'var(--ivory-warm)', borderRadius: 10,
            fontFamily: 'var(--font-body)', fontSize: '0.82rem',
            color: 'var(--text-body)', cursor: 'pointer', outline: 'none',
          }}>
            <option value="">📍 Select City</option>
            {CITIES.map(c => <option key={c}>{c}</option>)}
          </select>
          <button onClick={handleBook} style={{
            background: 'linear-gradient(135deg, var(--saffron), var(--saffron-deep))',
            color: 'white', border: 'none', padding: '10px 22px',
            borderRadius: 12, fontFamily: 'var(--font-body)', fontSize: '0.85rem',
            fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap',
            boxShadow: '0 4px 14px rgba(249,115,22,0.3)',
          }}>Book Now ✦</button>
        </div>

        {/* Stats — compact row */}
        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
          {STATS.map(s => (
            <div key={s.label}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 2.2vw, 1.9rem)',
                fontWeight: 700, color: 'var(--saffron)', lineHeight: 1,
              }}>{s.num}</div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-faint)', fontWeight: 600, marginTop: 3, letterSpacing: '0.4px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — Yagna Kunda */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '0 4% 0 0',
        position: 'relative', zIndex: 2,
        height: '100%',
        animation: 'fadeUp 1s 0.2s ease both',
      }} className="hero-visual">
        <YagnaKunda />
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

        /* ── Tablet (900–1200px) ── */
        @media (max-width: 1100px) {
          .hero-section { grid-template-columns: 55% 45% !important; }
        }

        /* ── Mobile (< 900px) ── */
        @media (max-width: 900px) {
          .hero-section {
            height: auto !important;
            max-height: none !important;
            min-height: 100svh !important;
            grid-template-columns: 1fr !important;
            padding-top: 72px !important;
            padding-bottom: 40px !important;
          }
          .hero-left {
            padding: 28px 6% 24px !important;
          }
          .hero-visual { display: none !important; }
        }

        /* ── Short screens (laptop 768px height) ── */
        @media (max-height: 750px) {
          .hero-section { height: auto !important; min-height: 100vh !important; }
        }
      `}</style>
    </section>
  )
}
