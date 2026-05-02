import Link from 'next/link'
const SVCS = [
  { href:'/puja-services', icon:'🪔', name:'Puja & Ceremonies', sub:'120+ services · Home & Office', color:'rgba(249,115,22,0.1)' },
  { href:'/epuja',         icon:'📱', name:'E-Puja Online',     sub:'50+ services · For NRIs',       color:'rgba(15,118,110,0.1)' },
  { href:'/puja-services', icon:'🔥', name:'Homas & Havans',   sub:'80+ services · Fire rituals',   color:'rgba(180,83,9,0.1)' },
  { href:'/puja-services', icon:'🔮', name:'Astrology',         sub:'Kundali · Horoscope · Remedies',color:'rgba(100,16,200,0.06)' },
]
export default function ServiceTypes() {
  return (
    <section style={{ background: 'white', padding: '40px 8% 100px' }}>
      <div style={{ textAlign:'center', marginBottom:64 }}>
        <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'var(--saffron)',marginBottom:14 }}>✦ Our Offerings ✦</div>
        <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'var(--text-dark)' }}>Explore What We Offer</h2>
        <div style={{ width:60,height:3,background:'linear-gradient(90deg,var(--saffron),var(--gold-shine,#F59E0B))',borderRadius:2,margin:'20px auto' }} />
      </div>
      <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20 }} className="svc-grid">
        {SVCS.map(s => (
          <Link key={s.name} href={s.href} style={{ textDecoration:'none', background:'white', borderRadius:18, padding:'32px 24px 28px', textAlign:'center', border:'1px solid var(--border)', transition:'all 0.3s', display:'block' }}
            className="svc-card">
            <div style={{ width:70,height:70,borderRadius:20,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2rem',margin:'0 auto 18px',background:s.color }}>
              {s.icon}
            </div>
            <div style={{ fontFamily:'var(--font-display)',fontSize:'1.12rem',fontWeight:600,color:'var(--text-dark)',marginBottom:8 }}>{s.name}</div>
            <div style={{ fontSize:'0.78rem',color:'var(--text-faint)' }}>{s.sub}</div>
          </Link>
        ))}
      </div>
      <style>{`.svc-card:hover{transform:translateY(-5px);box-shadow:0 20px 60px rgba(249,115,22,0.18);border-color:var(--border-warm)!important}@media(max-width:900px){.svc-grid{grid-template-columns:1fr 1fr!important}}`}</style>
    </section>
  )
}
