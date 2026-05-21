import Link from 'next/link'
const CITIES = [
  { emoji:'🌆', name:'Bengaluru',  langs:'Kannada · Telugu · Hindi · English', available: true },
  { emoji:'🌃', name:'Mumbai',     langs:'Coming Soon', available: false },
  { emoji:'🏙️', name:'Delhi NCR',  langs:'Coming Soon', available: false },
  { emoji:'🏯', name:'Hyderabad',  langs:'Coming Soon', available: false },
  { emoji:'🏛️', name:'Chennai',    langs:'Coming Soon', available: false },
  { emoji:'🌇', name:'Pune',       langs:'Coming Soon', available: false },
  { emoji:'🎭', name:'Kolkata',    langs:'Coming Soon', available: false },
  { emoji:'🏗️', name:'Ahmedabad',  langs:'Coming Soon', available: false },
]
export default function Cities() {
  return (
    <section style={{ background:'white', padding:'100px 8%' }}>
      <div style={{ textAlign:'center', marginBottom:64 }}>
        <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'var(--saffron)',marginBottom:14 }}>✦ Pan-India Presence ✦</div>
        <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'var(--text-dark)' }}>Serving Bengaluru & Surroundings</h2>
        <div style={{ width:60,height:3,background:'linear-gradient(90deg,var(--saffron),#F59E0B)',borderRadius:2,margin:'20px auto' }} />
        <p style={{ fontSize:'1.05rem',color:'var(--text-muted)',maxWidth:540,margin:'0 auto' }}>Currently serving Bengaluru in Kannada, Telugu, Hindi and English. Expanding to more cities soon.</p>
      </div>
      <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16 }} className="city-grid">
        {CITIES.map(c => (
          <Link key={c.name} href={c.available ? "/puja-services" : "#"} style={{ textDecoration:'none', background: c.available ? 'white' : 'var(--ivory-warm)', borderRadius:18, padding:'28px 20px', textAlign:'center', border:`1px solid ${c.available ? 'var(--border)' : 'var(--border)'}`, transition:'all 0.3s', display:'block', opacity: c.available ? 1 : 0.6, cursor: c.available ? 'pointer' : 'default', position:'relative', overflow:'hidden' }} className={c.available ? "city-card" : ""}>
            {!c.available && <div style={{ position:'absolute',top:8,right:8,background:'var(--ivory-mid)',color:'var(--text-faint)',fontSize:'0.6rem',fontWeight:700,padding:'2px 8px',borderRadius:'999px',letterSpacing:'0.5px' }}>COMING SOON</div>}
            <span style={{ fontSize:'2.4rem', marginBottom:12, display:'block' }}>{c.emoji}</span>
            <div style={{ fontFamily:'var(--font-display)',fontSize:'1.05rem',fontWeight:600,color: c.available ? 'var(--text-dark)' : 'var(--text-faint)',marginBottom:4 }}>{c.name}</div>
            <div style={{ fontSize:'0.75rem',color:'var(--text-faint)',lineHeight:1.4 }}>{c.langs}</div>
          </Link>
        ))}
      </div>
      <style>{`.city-card:hover{transform:translateY(-4px);box-shadow:0 8px 32px rgba(249,115,22,0.12);border-color:var(--border-warm)!important;background:var(--ivory-warm)!important}@media(max-width:900px){.city-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </section>
  )
}
