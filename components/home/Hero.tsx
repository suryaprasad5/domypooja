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
    <>
      {/* ── DESKTOP hero (≥ 768px) ── */}
      <section className="hero-desktop" style={{
        height: '100vh',
        paddingTop: 72,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        background: 'var(--ivory)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position:'absolute',inset:0,pointerEvents:'none',
          background:'radial-gradient(ellipse 70% 80% at 15% 50%, rgba(249,115,22,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 80% 80%, rgba(15,118,110,0.07) 0%, transparent 60%)',
        }} />

        {/* LEFT */}
        <div style={{ padding:'0 5% 0 8%', position:'relative', zIndex:2,
          display:'flex', flexDirection:'column', justifyContent:'center',
          animation:'fadeUp 0.9s ease both' }}>
          <HeroBadge />
          <HeroHeading />
          <HeroSub />
          <HeroSearch puja={puja} city={city} setPuja={setPuja} setCity={setCity} onBook={handleBook} />
          <HeroStats />
        </div>

        {/* RIGHT */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center',
          padding:'0 4% 0 0', height:'100%', position:'relative', zIndex:2,
          animation:'fadeUp 1s 0.2s ease both' }}>
          <YagnaKunda />
        </div>
      </section>

      {/* ── MOBILE hero (< 768px) ── */}
      <section className="hero-mobile" style={{
        paddingTop: 72,
        background: 'var(--ivory)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position:'absolute',inset:0,pointerEvents:'none',
          background:'radial-gradient(ellipse 120% 60% at 50% 0%, rgba(249,115,22,0.07) 0%, transparent 70%)',
        }} />

        {/* Image at top on mobile */}
        <div style={{ display:'flex', justifyContent:'center', padding:'16px 0 0',
          position:'relative', zIndex:2 }}>
          <div style={{ width:'88vw', height:'88vw', maxWidth:400, maxHeight:400 }}>
            <YagnaKunda />
          </div>
        </div>

        {/* Content below image */}
        <div style={{ padding:'12px 6% 40px', position:'relative', zIndex:2 }}>
          <HeroBadge />
          <HeroHeading mobile />
          <HeroSub mobile />
          <HeroSearch puja={puja} city={city} setPuja={setPuja} setCity={setCity} onBook={handleBook} mobile />
          <HeroStats mobile />
        </div>
      </section>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .hero-mobile  { display: none; }
        .hero-desktop { display: grid; }
        @media (max-width: 767px) {
          .hero-desktop { display: none !important; }
          .hero-mobile  { display: block !important; }
        }
        @media (min-width: 768px) and (max-width: 1100px) {
          .hero-desktop { grid-template-columns: 55% 45% !important; }
        }
        @media (max-height: 700px) and (min-width: 768px) {
          .hero-desktop { height: auto !important; min-height: 100vh; padding-bottom: 32px; }
        }
      `}</style>
    </>
  )
}

/* ── Shared sub-components ── */

function HeroBadge() {
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:8,
      background:'rgba(249,115,22,0.1)', border:'1px solid rgba(249,115,22,0.25)',
      color:'var(--saffron-deep)', padding:'6px 16px', borderRadius:'999px',
      fontSize:'0.72rem', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase',
      marginBottom:14, width:'fit-content' }}>
      <span style={{ fontFamily:'var(--font-devan)', fontSize:'1rem' }}>ॐ</span>
      India&apos;s Most Trusted Pooja Platform
    </div>
  )
}

function HeroHeading({ mobile }: { mobile?: boolean }) {
  return (
    <h1 style={{
      fontFamily:'var(--font-display)',
      fontSize: mobile ? 'clamp(2.2rem, 9vw, 3rem)' : 'clamp(2rem, 3.6vw, 3.8rem)',
      fontWeight:700, lineHeight:1.08,
      color:'var(--text-dark)', letterSpacing:'-0.5px',
      marginBottom: mobile ? 12 : 14,
    }}>
      Book{' '}
      <em style={{ fontStyle:'italic', color:'var(--saffron)' }}>Verified Pandits</em>
      <br />for{' '}
      <span style={{ color:'var(--teal)', fontStyle:'normal' }}>Sacred Ceremonies</span>
    </h1>
  )
}

function HeroSub({ mobile }: { mobile?: boolean }) {
  return (
    <p style={{ fontSize: mobile ? '0.9rem' : '0.95rem',
      color:'var(--text-muted)', lineHeight:1.65,
      maxWidth: mobile ? '100%' : 460,
      marginBottom: mobile ? 18 : 22 }}>
      Authentic Vedic rituals by verified Pandits — complete samagri delivered to your doorstep across 30+ cities.
    </p>
  )
}

function HeroSearch({ puja, city, setPuja, setCity, onBook, mobile }: {
  puja: string; city: string
  setPuja: (v: string) => void; setCity: (v: string) => void
  onBook: () => void; mobile?: boolean
}) {
  const PUJAS = ['Satyanarayan Puja','Griha Pravesh Puja','Maha Ganapati Homa','Rudrabhishek Puja','Marriage Puja','Namakaran Puja','Navaratri Durga Puja','Office / Business Puja','Maha Mrityunjaya Homa','Vastu Shanti Puja']
  const CITIES = ['Bangalore','Mumbai','Delhi NCR','Hyderabad','Chennai','Pune','Kolkata','Ahmedabad']
  return (
    <div style={{
      background:'white', borderRadius:14, padding:6,
      display:'flex', flexDirection: mobile ? 'column' : 'row',
      gap:6,
      boxShadow:'0 6px 30px rgba(0,0,0,0.09)',
      border:'1px solid var(--border-warm)',
      maxWidth: mobile ? '100%' : 520,
      marginBottom: mobile ? 20 : 24,
    }}>
      <select value={puja} onChange={e => setPuja(e.target.value)} style={{
        flex:1, padding: mobile ? '12px 10px' : '9px 10px',
        border:'none', background:'var(--ivory-warm)', borderRadius:10,
        fontFamily:'var(--font-body)', fontSize:'0.85rem',
        color:'var(--text-body)', cursor:'pointer', outline:'none',
      }}>
        <option value="">🙏 Select a Puja</option>
        {PUJAS.map(p => <option key={p}>{p}</option>)}
      </select>
      <select value={city} onChange={e => setCity(e.target.value)} style={{
        flex:1, padding: mobile ? '12px 10px' : '9px 10px',
        border:'none', background:'var(--ivory-warm)', borderRadius:10,
        fontFamily:'var(--font-body)', fontSize:'0.85rem',
        color:'var(--text-body)', cursor:'pointer', outline:'none',
      }}>
        <option value="">📍 Select City</option>
        {CITIES.map(c => <option key={c}>{c}</option>)}
      </select>
      <button onClick={onBook} style={{
        background:'linear-gradient(135deg,var(--saffron),var(--saffron-deep))',
        color:'white', border:'none',
        padding: mobile ? '14px' : '10px 22px',
        borderRadius:10, fontFamily:'var(--font-body)',
        fontSize:'0.9rem', fontWeight:700, cursor:'pointer',
        boxShadow:'0 4px 14px rgba(249,115,22,0.3)',
      }}>Book Now ✦</button>
    </div>
  )
}

function HeroStats({ mobile }: { mobile?: boolean }) {
  const STATS = [
    { num:'85K+',   label:'Pujas Performed' },
    { num:'2,100+', label:'Verified Pandits' },
    { num:'30+',    label:'Cities Covered' },
    { num:'400+',   label:'Puja Services' },
  ]
  return (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr',
      gap: mobile ? '12px 8px' : 28 }}>
      {STATS.map(s => (
        <div key={s.label}>
          <div style={{
            fontFamily:'var(--font-display)',
            fontSize: mobile ? 'clamp(1.4rem,6vw,1.8rem)' : 'clamp(1.5rem,2.2vw,1.9rem)',
            fontWeight:700, color:'var(--saffron)', lineHeight:1,
          }}>{s.num}</div>
          <div style={{ fontSize:'0.65rem', color:'var(--text-faint)', fontWeight:600, marginTop:3, letterSpacing:'0.3px' }}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}
