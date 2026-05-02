const STEPS = [
  { icon:'🔍', title:'Select a Puja', desc:'Browse 118+ Vedic services and pick the ceremony that suits your occasion and need.' },
  { icon:'🙏', title:'Book a Pandit', desc:'Choose your language preference — Kannada, Hindi, Tamil, Telugu, Bengali and more.' },
  { icon:'✅', title:'Pay & Confirm', desc:'Pay securely via Razorpay and receive instant booking confirmation with all details.' },
  { icon:'🎉', title:'Ceremony Day', desc:'Pandit arrives with all samagri. Updates sent via Email, SMS and WhatsApp.' },
]
export default function HowItWorks() {
  return (
    <section style={{ padding:'100px 8%',background:'linear-gradient(160deg,var(--charcoal,#1C1009) 0%,#2C1505 55%,#0D5C55 100%)',position:'relative',overflow:'hidden' }}>
      <div style={{ position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none',overflow:'hidden' }}>
        <span style={{ fontFamily:'var(--font-devan)',fontSize:'45vw',color:'rgba(255,255,255,0.022)',lineHeight:1,userSelect:'none' }}>ॐ</span>
      </div>
      <div style={{ textAlign:'center',marginBottom:60,position:'relative' }}>
        <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'#FDE68A',marginBottom:14 }}>✦ Simple Process ✦</div>
        <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'white' }}>How DoMyPooja Works</h2>
        <div style={{ width:60,height:3,background:'linear-gradient(90deg,var(--saffron),#F59E0B)',borderRadius:2,margin:'20px auto' }} />
        <p style={{ fontSize:'1.05rem',color:'rgba(255,255,255,0.55)',maxWidth:540,margin:'0 auto' }}>Book a Pandit in minutes. We handle everything — samagri, scheduling, and ceremony updates.</p>
      </div>
      <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:32,position:'relative' }} className="steps-grid">
        <div style={{ position:'absolute',top:44,left:'12%',right:'12%',height:2,background:'linear-gradient(90deg,transparent,rgba(249,115,22,0.35) 20%,rgba(180,83,9,0.35) 80%,transparent)' }} className="steps-line" />
        {STEPS.map((s,i) => (
          <div key={s.title} style={{ textAlign:'center',position:'relative',zIndex:2 }}>
            <div style={{ width:88,height:88,borderRadius:'50%',background:'linear-gradient(135deg,var(--saffron),#F59E0B)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2rem',margin:'0 auto 24px',boxShadow:'0 8px 28px rgba(249,115,22,0.45)' }}>{s.icon}</div>
            <div style={{ fontFamily:'var(--font-display)',fontSize:'1.1rem',color:'white',marginBottom:10,fontWeight:600 }}>{s.title}</div>
            <div style={{ fontSize:'0.82rem',color:'rgba(255,255,255,0.5)',lineHeight:1.65 }}>{s.desc}</div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:900px){.steps-grid{grid-template-columns:1fr 1fr!important}.steps-line{display:none!important}}`}</style>
    </section>
  )
}
