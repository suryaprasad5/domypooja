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
      height: '100vh', // keep fixed screen
      paddingTop: 20, // 🔥 reduced more
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      background: 'var(--ivory)',
      position: 'relative',
      overflow: 'hidden',
    }} className="hero-section">

      {/* BG */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background:
          'radial-gradient(ellipse 70% 80% at 15% 50%, rgba(249,115,22,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 80% 80%, rgba(15,118,110,0.07) 0%, transparent 60%)',
      }} />

      {/* LEFT */}
      <div style={{
        padding: '10px 5% 20px 8%', // 🔥 drastically reduced
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 12, // 🔥 tighter spacing
        zIndex: 2,
      }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 14px',
          fontSize: '0.7rem',
          marginBottom: 4,
          borderRadius: 999,
          background: 'rgba(249,115,22,0.1)',
          border: '1px solid rgba(249,115,22,0.25)',
          color: 'var(--saffron-deep)',
        }}>
          <span>ॐ</span>
          India's Most Trusted Pooja Platform
        </div>

        {/* Heading */}
        <h1 style={{
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', // 🔥 reduced
          lineHeight: 1.1,
          margin: 0,
        }}>
          Book <em style={{ color: 'var(--saffron)' }}>Verified Pandits</em>
          <br />
          for <span style={{ color: 'var(--teal)' }}>Sacred Ceremonies</span>
        </h1>

        {/* Description */}
        <p style={{
          fontSize: '0.95rem',
          lineHeight: 1.6,
          margin: 0,
          maxWidth: 460,
        }}>
          Authentic Vedic rituals performed by experienced, verified Pandits and Purohits — with complete puja samagri delivered to your doorstep.
        </p>

        {/* Search */}
        <div style={{
          display: 'flex',
          gap: 6,
          padding: 6,
          borderRadius: 14,
          maxWidth: 480,
          marginTop: 6,
        }}>
          <select value={puja} onChange={e => setPuja(e.target.value)} style={{ flex: 1, padding: 8 }}>
            <option value="">Select Puja</option>
            {PUJAS.map(p => <option key={p}>{p}</option>)}
          </select>

          <select value={city} onChange={e => setCity(e.target.value)} style={{ flex: 1, padding: 8 }}>
            <option value="">City</option>
            {CITIES.map(c => <option key={c}>{c}</option>)}
          </select>

          <button onClick={handleBook} style={{
            padding: '8px 16px',
            fontSize: '0.8rem',
          }}>
            Book
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: 20,
          flexWrap: 'wrap',
          marginTop: 8,
        }}>
          {STATS.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '1.6rem', color: 'var(--saffron)' }}>
                {s.num}
              </div>
              <div style={{ fontSize: '0.65rem' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ transform: 'scale(0.78)' }}> {/* 🔥 shrink image */}
          <YagnaKunda />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-section { grid-template-columns: 1fr !important; height:auto; }
        }
      `}</style>
    </section>
  )
}