import Link from 'next/link'
const CITIES = [
  { emoji:'🌆', name:'Bangalore',  langs:'Kannada · Hindi · Telugu · Tamil' },
  { emoji:'🌃', name:'Mumbai',     langs:'Marathi · Hindi · Gujarati · Telugu' },
  { emoji:'🏙️', name:'Delhi NCR',  langs:'Hindi · Bihari · Kumaoni · Tamil' },
  { emoji:'🏯', name:'Hyderabad',  langs:'Telugu · Hindi · Kannada · Tamil' },
  { emoji:'🏛️', name:'Chennai',    langs:'Tamil Iyer · Telugu · Hindi' },
  { emoji:'🌇', name:'Pune',       langs:'Marathi · Hindi · Telugu · Bihari' },
  { emoji:'🎭', name:'Kolkata',    langs:'Bengali · Hindi · North Indian' },
  { emoji:'🏗️', name:'Ahmedabad',  langs:'Gujarati · Hindi · Marwadi' },
]
export default function Cities() {
  return (
    <section style={{ background:'white', padding:'100px 8%' }}>
      <div style={{ textAlign:'center', marginBottom:64 }}>
        <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'var(--saffron)',marginBottom:14 }}>✦ Pan-India Presence ✦</div>
        <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'var(--text-dark)' }}>Find Pandits Near You</h2>
        <div style={{ width:60,height:3,background:'linear-gradient(90deg,var(--saffron),#F59E0B)',borderRadius:2,margin:'20px auto' }} />
        <p style={{ fontSize:'1.05rem',color:'var(--text-muted)',maxWidth:540,margin:'0 auto' }}>Serving 30+ cities across India with verified regional-language Pandits for every ceremony.</p>
      </div>
      <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16 }} className="city-grid">
        {CITIES.map(c => (
          <Link key={c.name} href="/puja-services" style={{ textDecoration:'none', background:'white', borderRadius:18, padding:'28px 20px', textAlign:'center', border:'1px solid var(--border)', transition:'all 0.3s', display:'block' }} className="city-card">
            <span style={{ fontSize:'2.4rem', marginBottom:12, display:'block' }}>{c.emoji}</span>
            <div style={{ fontFamily:'var(--font-display)',fontSize:'1.05rem',fontWeight:600,color:'var(--text-dark)',marginBottom:4 }}>{c.name}</div>
            <div style={{ fontSize:'0.75rem',color:'var(--text-faint)',lineHeight:1.4 }}>{c.langs}</div>
          </Link>
        ))}
      </div>
      <style>{`.city-card:hover{transform:translateY(-4px);box-shadow:0 8px 32px rgba(249,115,22,0.12);border-color:var(--border-warm)!important;background:var(--ivory-warm)!important}@media(max-width:900px){.city-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </section>
  )
}
