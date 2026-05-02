import Link from 'next/link'
const HOW = [
  { icon:'📋', title:'1. Choose Your Puja', desc:'Select from 50+ E-Puja services. Choose your preferred date and time based on your timezone.' },
  { icon:'📹', title:'2. Join the Live Stream', desc:'At the scheduled time, join via Zoom, Google Meet or WhatsApp video. Our Pandit performs the ceremony live.' },
  { icon:'🙏', title:'3. Receive Prasad', desc:'Post-ceremony, a puja report and digital prasad blessing are shared. Physical prasad can be couriered worldwide.' },
]
const COUNTRIES = [
  { flag:'🇺🇸', name:'United States', tz:'EST / PST / CST' },
  { flag:'🇬🇧', name:'United Kingdom', tz:'GMT / BST' },
  { flag:'🇦🇺', name:'Australia', tz:'AEST / AEDT' },
  { flag:'🇨🇦', name:'Canada', tz:'EST / PST' },
  { flag:'🇸🇬', name:'Singapore', tz:'SGT +8' },
  { flag:'🇦🇪', name:'UAE', tz:'GST +4' },
  { flag:'🇩🇪', name:'Germany', tz:'CET / CEST' },
  { flag:'🌍', name:'40+ Countries', tz:'Any timezone available' },
]
export default function EPujaPage() {
  return (
    <>
      <div style={{ padding:'140px 8% 80px',background:'linear-gradient(160deg,#1C1009 0%,#2D1506 60%,#0D5C55 100%)',color:'white',textAlign:'center',position:'relative',overflow:'hidden' }}>
        <div style={{ position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none' }}>
          <span style={{ fontFamily:'var(--font-devan)',fontSize:'50vw',color:'rgba(255,255,255,0.025)',lineHeight:1 }}>ॐ</span>
        </div>
        <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'#FDE68A',marginBottom:14 }}>✦ For NRIs & Remote Devotees ✦</div>
        <h1 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(2.4rem,4.5vw,3.8rem)',fontWeight:700,color:'white',marginBottom:16 }}>E-Puja — Sacred Ceremonies Online</h1>
        <p style={{ fontSize:'1.05rem',color:'rgba(255,255,255,0.65)',maxWidth:540,margin:'0 auto 28px' }}>Participate in authentic Vedic rituals from anywhere in the world via live video call — performed by a verified Pandit in real-time.</p>
        <div style={{ display:'flex',alignItems:'center',gap:8,justifyContent:'center',fontSize:'0.8rem',color:'rgba(255,255,255,0.5)' }}>
          <Link href="/" style={{ color:'rgba(255,255,255,0.6)',textDecoration:'none' }}>Home</Link><span>/</span><span>E-Puja</span>
        </div>
      </div>

      <section style={{ background:'white',padding:'100px 8%' }}>
        <div style={{ textAlign:'center',marginBottom:64 }}>
          <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'var(--saffron)',marginBottom:14 }}>✦ How It Works ✦</div>
          <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'var(--text-dark)' }}>E-Puja in 3 Simple Steps</h2>
          <div style={{ width:60,height:3,background:'linear-gradient(90deg,var(--saffron),#F59E0B)',borderRadius:2,margin:'20px auto' }} />
        </div>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:28 }} className="how-grid">
          {HOW.map(h => (
            <div key={h.title} style={{ background:'white',borderRadius:18,padding:'32px 24px',textAlign:'center',border:'1px solid var(--border)',transition:'all 0.3s' }} className="how-card">
              <span style={{ fontSize:'2.8rem',marginBottom:18,display:'block' }}>{h.icon}</span>
              <div style={{ fontFamily:'var(--font-display)',fontSize:'1.1rem',fontWeight:700,color:'var(--text-dark)',marginBottom:10 }}>{h.title}</div>
              <div style={{ fontSize:'0.85rem',color:'var(--text-muted)',lineHeight:1.65 }}>{h.desc}</div>
            </div>
          ))}
        </div>
        <style>{`.how-card:hover{transform:translateY(-4px);box-shadow:0 8px 32px rgba(249,115,22,0.12)}@media(max-width:900px){.how-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      <section style={{ background:'var(--ivory-warm)',padding:'100px 8%' }}>
        <div style={{ textAlign:'center',marginBottom:64 }}>
          <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'var(--saffron)',marginBottom:14 }}>✦ Countries We Serve ✦</div>
          <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'var(--text-dark)' }}>E-Puja Available Worldwide</h2>
          <div style={{ width:60,height:3,background:'linear-gradient(90deg,var(--saffron),#F59E0B)',borderRadius:2,margin:'20px auto' }} />
          <p style={{ fontSize:'1.05rem',color:'var(--text-muted)',maxWidth:540,margin:'0 auto' }}>We have helped Hindu families across 40+ countries participate in authentic puja ceremonies.</p>
        </div>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16 }} className="country-grid">
          {COUNTRIES.map(c => (
            <div key={c.name} style={{ background:'white',border:'1px solid var(--border)',borderRadius:14,padding:20,textAlign:'center',transition:'all 0.2s',cursor:'pointer' }} className="country-card">
              <span style={{ fontSize:'2.2rem',marginBottom:8,display:'block' }}>{c.flag}</span>
              <div style={{ fontSize:'0.88rem',fontWeight:600,color:'var(--text-dark)' }}>{c.name}</div>
              <div style={{ fontSize:'0.72rem',color:'var(--text-faint)' }}>{c.tz}</div>
            </div>
          ))}
        </div>
        <style>{`.country-card:hover{border-color:var(--border-warm)!important;box-shadow:0 4px 14px rgba(249,115,22,0.1)}@media(max-width:900px){.country-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
      </section>

      <section style={{ background:'linear-gradient(135deg,#1C1009 0%,#2C1505 55%,#0D5C55 100%)',padding:'80px 8%',textAlign:'center' }}>
        <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'#FDE68A',marginBottom:14 }}>✦ Book Your E-Puja ✦</div>
        <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'white',marginBottom:14 }}>Ready to Book Your Online Ceremony?</h2>
        <p style={{ color:'rgba(255,255,255,0.6)',maxWidth:520,margin:'0 auto 36px',lineHeight:1.7 }}>Our team will coordinate your puja for any date, time and timezone. WhatsApp us or call to get started in minutes.</p>
        <div style={{ display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap' }}>
          <a href="https://wa.me/919036050108?text=I want to book an E-Puja online" target="_blank" rel="noreferrer" style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'16px 38px',borderRadius:'999px',background:'white',color:'var(--saffron)',fontWeight:600,fontSize:'1rem',textDecoration:'none' }}>💬 WhatsApp to Book</a>
          <a href="tel:+918061160400" style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'16px 38px',borderRadius:'999px',background:'rgba(255,255,255,0.15)',color:'white',border:'2px solid rgba(255,255,255,0.4)',fontWeight:600,fontSize:'1rem',textDecoration:'none' }}>📞 Call 080-6116-0400</a>
        </div>
      </section>
    </>
  )
}
