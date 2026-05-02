const ADVS = [
  { icon:'✔️', teal:false, title:'Verified & Experienced Pandits',   desc:'Background-checked, expert Pandits with 10–20 years of ceremonial experience across all traditions.' },
  { icon:'🗣️', teal:true,  title:'Multilingual Services',            desc:'Hindi, Tamil, Kannada, Telugu, Bengali, Marathi, Malayalam, Gujarati and more regional languages.' },
  { icon:'📦', teal:false, title:'Complete Samagri Included',        desc:'All puja materials sourced and delivered to your doorstep. Zero hassle, zero last-minute stress.' },
  { icon:'🕉️', teal:true,  title:'Region-Specific Rituals',          desc:'Ceremonies performed exactly as per your community, sect and family customs and traditions.' },
  { icon:'💬', teal:false, title:'24/7 Customer Support',            desc:'Dedicated support via phone, email and WhatsApp throughout your booking journey.' },
]
export default function Advantage() {
  return (
    <section style={{ background:'var(--ivory-warm)', padding:'100px 8%' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:70, alignItems:'center' }} className="adv-grid">
        <div>
          <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'var(--saffron)',marginBottom:14 }}>✦ Why Choose Us ✦</div>
          <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'var(--text-dark)',marginBottom:8 }}>The DoMyPooja Advantage</h2>
          <div style={{ width:60,height:3,background:'linear-gradient(90deg,var(--saffron),#F59E0B)',borderRadius:2,margin:'0 0 20px' }} />
          <p style={{ fontSize:'1.05rem',color:'var(--text-muted)',lineHeight:1.75,marginBottom:36 }}>We combine Vedic tradition with seamless technology to deliver authentic spiritual experiences — hassle-free.</p>
          <div style={{ display:'flex',flexDirection:'column',gap:18 }}>
            {ADVS.map(a => (
              <div key={a.title} style={{ display:'flex',gap:16,alignItems:'flex-start',background:'white',borderRadius:18,padding:20,border:'1px solid var(--border)' }}>
                <div style={{ width:50,height:50,minWidth:50,borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.5rem',background:a.teal?'rgba(15,118,110,0.1)':'rgba(249,115,22,0.08)' }}>{a.icon}</div>
                <div>
                  <div style={{ fontFamily:'var(--font-display)',fontSize:'1rem',fontWeight:600,color:'var(--text-dark)',marginBottom:4 }}>{a.title}</div>
                  <div style={{ fontSize:'0.82rem',color:'var(--text-muted)',lineHeight:1.55 }}>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display:'flex',alignItems:'center',justifyContent:'center' }}>
          <div style={{ width:360,height:360,borderRadius:'60% 40% 50% 50% / 50% 60% 40% 50%',background:'linear-gradient(135deg,rgba(249,115,22,0.1),rgba(15,118,110,0.1))',border:'2px solid rgba(249,115,22,0.15)',display:'flex',alignItems:'center',justifyContent:'center',position:'relative' }}>
            <span style={{ fontFamily:'var(--font-devan)',fontSize:'6rem',color:'var(--saffron)',opacity:0.35 }}>ॐ</span>
            {[{cls:'ap-tl',top:'6%',left:'-2%',text:'🌟 4.9★ Rated'},{cls:'ap-tr',top:'6%',right:'-2%',text:'🔥 85K+ Pujas'},{cls:'ap-bl',bottom:'6%',left:'-2%',text:'✅ Verified'},{cls:'ap-br',bottom:'6%',right:'-2%',text:'🌍 30+ Cities'}].map(p => (
              <div key={p.text} style={{ position:'absolute',background:'white',borderRadius:12,padding:'10px 16px',boxShadow:'0 6px 20px rgba(0,0,0,0.09)',border:'1px solid var(--border-warm)',fontSize:'0.82rem',fontWeight:600,color:'var(--text-dark)',whiteSpace:'nowrap',...p }}>{p.text}</div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.adv-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
