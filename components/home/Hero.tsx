'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

const YagnaKunda = dynamic(() => import('./YagnaKunda'), { ssr: false })

const PUJAS = ['Satyanarayan Puja','Griha Pravesh Puja','Maha Ganapati Homa','Rudrabhishek Puja','Marriage Puja','Namakaran Puja','Navaratri Durga Puja','Office / Business Puja','Maha Mrityunjaya Homa','Vastu Shanti Puja']
const CITIES = ['Bangalore','Mumbai','Delhi NCR','Hyderabad','Chennai','Pune','Kolkata','Ahmedabad']

const STATS = [
  { num: '85K+', label: 'Pujas Performed' },
  { num: '2,100+', label: 'Verified Pandits' },
  { num: '30+', label: 'Cities Covered' },
  { num: '400+', label: 'Puja Services' },
]

export default function Hero() {
  const [puja, setPuja] = useState('')
  const [city, setCity] = useState('')
  const router = useRouter()

  const handleBook = () => {
    if (!puja || !city) {
      alert('Please select a Puja and a City to continue.')
      return
    }
    router.push(`/puja-services?puja=${encodeURIComponent(puja)}&city=${encodeURIComponent(city)}`)
  }

  return (
    <section style={{
      minHeight: '100vh',
      paddingTop: 56, // 🔥 slightly reduced (was 72)
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
        padding: '40px 5% 60px 8%', // 🔥 reduced top padding (was 60)
        position: 'relative', 
        zIndex: 2, 
        animation: 'fadeUp 0.9s ease both' 
      }}>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)',
          color: 'var(--saffron-deep)', padding: '7px 18px', borderRadius: '999px',
          fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
          marginBottom: 26,
        }}>
          <span style={{ fontFamily: 'var(--font-devan)', fontSize: '1.1rem' }}>ॐ</span>
          India's Most Trusted Pooja Platform
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.6rem, 4.5vw, 4.2rem)',
          fontWeight: 700, lineHeight: 1.1,
          color: 'var(--text-dark)', letterSpacing: '-0.5px',
          marginBottom: 22,
        }}>
          Book{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--saffron)' }}>Verified Pandits</em>
          <br />for{' '}
          <span style={{ color: 'var(--teal)', fontStyle: 'normal' }}>Sacred Ceremonies</span>
        </h1>

        <p style={{ 
          fontSize: '1.05rem', 
          color: 'var(--text-muted)', 
          lineHeight: 1.75, 
          maxWidth: 480, 
          marginBottom: 38 
        }}>
          Authentic Vedic rituals performed by experienced, verified Pandits and Purohits — with complete puja samagri delivered to your doorstep. Available across 30+ cities.
        </p>

        {/* Search box */}
        <div style={{
          background: 'white', borderRadius: 18, padding: 8,
          display: 'flex', gap: 8,
          boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
          border: '1px solid var(--border-warm)',
          maxWidth: 540, marginBottom: 44,
        }}>
          <select value={puja} onChange={e => setPuja(e.target.value)} style={{
            flex: 1, padding: '11px 14px', border: 'none',
            background: 'var(--ivory-warm)', borderRadius: 10,
            fontSize: '0.88rem',
          }}>
            <option value="">🙏 Select a Puja</option>
            {PUJAS.map(p => <option key={p}>{p}</option>)}
          </select>

          <select value={city} onChange={e => setCity(e.target.value)} style={{
            flex: 1, padding: '11px 14px', border: 'none',
            background: 'var(--ivory-warm)', borderRadius: 10,
            fontSize: '0.88rem',
          }}>
            <option value="">📍 Select City</option>
            {CITIES.map(c => <option key={c}>{c}</option>)}
          </select>

          <button onClick={handleBook} style={{
            background: 'linear-gradient(135deg, var(--saffron), var(--saffron-deep))',
            color: 'white', border: 'none', padding: '12px 28px',
            borderRadius: 14, fontSize: '0.9rem',
            fontWeight: 700, cursor: 'pointer',
          }}>
            Book Now ✦
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
          {STATS.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '2.1rem', fontWeight: 700, color: 'var(--saffron)' }}>{s.num}</div>
              <div style={{ fontSize: '0.72rem', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '40px 6% 40px 2%',
        position: 'relative', zIndex: 2,
        animation: 'fadeUp 1s 0.2s ease both',
      }}>
        <YagnaKunda />
      </div>

      <style>{`
        @keyframes fadeUp { 
          from { opacity:0; transform:translateY(24px) } 
          to   { opacity:1; transform:translateY(0) } 
        }

        @media (max-width: 900px) {
          .hero-section { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  )
}