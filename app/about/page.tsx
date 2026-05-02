import Link from 'next/link'

const VALUES = [
  { icon:'🕉️', name:'Authenticity',          desc:'Every ceremony is conducted exactly as per regional customs and scriptures — no shortcuts.' },
  { icon:'✅', name:'Trust & Verification',   desc:'Every Pandit undergoes thorough background verification and Vedic knowledge assessment.' },
  { icon:'💛', name:'Customer First',         desc:'We handle every aspect so you can focus on your spiritual experience and family togetherness.' },
  { icon:'🌍', name:'Inclusivity',            desc:'We serve devotees from all Hindu communities, traditions, regions and languages.' },
  { icon:'🔬', name:'Continuous Improvement', desc:'We constantly gather feedback to improve our processes and customer experience.' },
  { icon:'🤝', name:'Pandit Welfare',         desc:'We believe in fairly compensating and uplifting the Pandit community with dignity.' },
]
const TIMELINE = [
  { year:'2019', title:'The Problem is Identified',    desc:'Our founders struggle to arrange a Griha Pravesh puja — sparking the idea for DoMyPooja.' },
  { year:'2020', title:'DoMyPooja is Founded',         desc:'We launch in Bangalore with 50 verified Pandits. Our first 100 bookings teach us what devotees truly need.', teal:true },
  { year:'2021', title:'E-Puja Launched During COVID', desc:'When lockdowns prevented in-person ceremonies, we pioneered live-streamed E-Puja via video call.' },
  { year:'2022–23', title:'Pan-India Expansion',       desc:'We expand to 15 cities, onboard 800+ Pandits, and cross 25,000 ceremonies.', teal:true },
  { year:'2024–26', title:'Scaling to 30+ Cities',     desc:'Today we serve 30+ cities with 2,100+ Pandits and 118+ services — 85,000+ ceremonies performed.' },
]
const TEAM = [
  { i:'A', name:'Arjun Sharma',          role:'CEO & Co-Founder',         bio:'IIT Bombay alumnus with 12 years in tech. Passionate about preserving Indian cultural traditions.', g:'linear-gradient(135deg,var(--saffron),#C2540A)' },
  { i:'P', name:'Priya Krishnaswamy',    role:'COO & Co-Founder',         bio:'Former McKinsey consultant. Built our Pandit verification process and city expansion playbook.', g:'linear-gradient(135deg,#0F766E,#0D5C55)' },
  { i:'R', name:'Rajesh Iyer',           role:'Head of Pandit Relations',  bio:'Sanskrit scholar with deep roots in the Pandit community across South India.', g:'linear-gradient(135deg,#B45309,#92400E)' },
  { i:'S', name:'Sunita Agarwal',        role:'Head of Customer Experience',bio:'10+ years in customer success. Champion of our zero-stress ceremony philosophy.', g:'linear-gradient(135deg,#7C3AED,#4C1D95)' },
]

export default function AboutPage() {
  return (
    <>
      <div style={{ padding:'140px 8% 80px',background:'linear-gradient(160deg,#1C1009 0%,#2D1506 60%,#0D5C55 100%)',color:'white',textAlign:'center',position:'relative',overflow:'hidden' }}>
        <div style={{ position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none' }}>
          <span style={{ fontFamily:'var(--font-devan)',fontSize:'50vw',color:'rgba(255,255,255,0.025)',lineHeight:1 }}>ॐ</span>
        </div>
        <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'#FDE68A',marginBottom:14 }}>✦ Our Story ✦</div>
        <h1 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(2.4rem,4.5vw,3.8rem)',fontWeight:700,color:'white',marginBottom:16 }}>About DoMyPooja</h1>
        <p style={{ fontSize:'1.05rem',color:'rgba(255,255,255,0.65)',maxWidth:540,margin:'0 auto 28px' }}>Born from a simple belief — that every Hindu deserves access to authentic, hassle-free sacred ceremonies — no matter where they are.</p>
        <div style={{ display:'flex',alignItems:'center',gap:8,justifyContent:'center',fontSize:'0.8rem',color:'rgba(255,255,255,0.5)' }}>
          <Link href="/" style={{ color:'rgba(255,255,255,0.6)',textDecoration:'none' }}>Home</Link><span>/</span><span>About Us</span>
        </div>
      </div>

      <section style={{ background:'white',padding:'100px 8%' }}>
        <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:70,alignItems:'center' }} className="about-grid">
          <div>
            <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'var(--saffron)',marginBottom:14 }}>✦ Our Mission ✦</div>
            <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'var(--text-dark)',marginBottom:8 }}>Making Sacred Rituals <em style={{fontStyle:'italic',color:'var(--saffron)'}}>Accessible to All</em></h2>
            <div style={{ width:60,height:3,background:'linear-gradient(90deg,var(--saffron),#F59E0B)',borderRadius:2,margin:'0 0 24px' }} />
            <p style={{ fontSize:'1rem',color:'var(--text-body)',lineHeight:1.8,marginBottom:20 }}>DoMyPooja was founded to make authentic Hindu Vedic ceremonies accessible to every devotee — regardless of where they live, what language they speak, or how much time they have.</p>
            <p style={{ fontSize:'1rem',color:'var(--text-body)',lineHeight:1.8,marginBottom:36 }}>Today we serve 30+ cities with 2,100+ verified Pandits speaking 12+ languages, having facilitated more than 85,000 sacred ceremonies.</p>
            <Link href="/puja-services" style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'16px 38px',borderRadius:'999px',background:'linear-gradient(135deg,var(--saffron),#C2540A)',color:'white',fontWeight:600,fontSize:'1rem',textDecoration:'none',boxShadow:'0 6px 22px rgba(249,115,22,0.35)' }}>Explore Our Services →</Link>
          </div>
          <div style={{ display:'flex',alignItems:'center',justifyContent:'center' }}>
            <div style={{ width:340,height:340,borderRadius:'60% 40% 50% 50% / 50% 60% 40% 50%',background:'linear-gradient(135deg,#FEF3C7,#FED7AA)',border:'2px solid rgba(249,115,22,0.18)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:16,position:'relative' }}>
              <span style={{ fontFamily:'var(--font-devan)',fontSize:'7rem',color:'var(--saffron)',opacity:0.28 }}>ॐ</span>
              <div style={{ display:'flex',flexWrap:'wrap',gap:10,padding:'0 20px',justifyContent:'center' }}>
                {['🌟 4.9★','🔥 85K+','✅ Verified','🌍 30+ Cities'].map(p => (
                  <div key={p} style={{ background:'white',borderRadius:'999px',padding:'6px 14px',fontSize:'0.78rem',fontWeight:600,color:'var(--text-dark)',boxShadow:'0 4px 14px rgba(0,0,0,0.07)' }}>{p}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.about-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      <section style={{ background:'var(--ivory-warm)',padding:'60px 8%' }}>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:24 }} className="impact-g">
          {[['85,000+','Ceremonies performed'],['2,100+','Verified Pandits'],['30+','Cities served'],['118+','Unique services']].map(([n,l]) => (
            <div key={l} style={{ background:'white',borderRadius:18,padding:'32px 24px',textAlign:'center',border:'1px solid var(--border)' }}>
              <div style={{ fontFamily:'var(--font-display)',fontSize:'2.8rem',fontWeight:700,color:'var(--saffron)',lineHeight:1,marginBottom:8 }}>{n}</div>
              <div style={{ fontSize:'0.85rem',color:'var(--text-muted)' }}>{l}</div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:900px){.impact-g{grid-template-columns:1fr 1fr!important}}`}</style>
      </section>

      <section style={{ background:'white',padding:'100px 8%' }}>
        <div style={{ textAlign:'center',marginBottom:64 }}>
          <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'var(--saffron)',marginBottom:14 }}>✦ What We Stand For ✦</div>
          <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'var(--text-dark)' }}>Our Core Values</h2>
          <div style={{ width:60,height:3,background:'linear-gradient(90deg,var(--saffron),#F59E0B)',borderRadius:2,margin:'20px auto' }} />
        </div>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24 }} className="val-g">
          {VALUES.map(v => (
            <div key={v.name} style={{ background:'white',borderRadius:18,padding:'32px 28px',border:'1px solid var(--border)',textAlign:'center',transition:'all 0.3s' }} className="v-card">
              <span style={{ fontSize:'2.8rem',marginBottom:18,display:'block' }}>{v.icon}</span>
              <div style={{ fontFamily:'var(--font-display)',fontSize:'1.15rem',fontWeight:700,color:'var(--text-dark)',marginBottom:10 }}>{v.name}</div>
              <div style={{ fontSize:'0.85rem',color:'var(--text-muted)',lineHeight:1.65 }}>{v.desc}</div>
            </div>
          ))}
        </div>
        <style>{`.v-card:hover{transform:translateY(-5px);box-shadow:0 20px 60px rgba(249,115,22,0.18);border-color:var(--border-warm)!important}@media(max-width:900px){.val-g{grid-template-columns:1fr 1fr!important}}@media(max-width:640px){.val-g{grid-template-columns:1fr!important}}`}</style>
      </section>

      <section style={{ background:'var(--ivory-warm)',padding:'100px 8%' }}>
        <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:80 }} className="tl-g">
          <div>
            <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'var(--saffron)',marginBottom:14 }}>✦ Our Journey ✦</div>
            <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'var(--text-dark)',marginBottom:8 }}>The DoMyPooja Story</h2>
            <div style={{ width:60,height:3,background:'linear-gradient(90deg,var(--saffron),#F59E0B)',borderRadius:2,margin:'0 0 40px' }} />
            <div style={{ position:'relative',paddingLeft:40 }}>
              <div style={{ position:'absolute',left:0,top:0,bottom:0,width:2,background:'linear-gradient(to bottom,var(--saffron),#0F766E)' }} />
              {TIMELINE.map(t => (
                <div key={t.year} style={{ position:'relative',marginBottom:36 }}>
                  <div style={{ position:'absolute',left:-48,top:4,width:18,height:18,borderRadius:'50%',background:t.teal?'#0F766E':'var(--saffron)',border:'3px solid white',boxShadow:`0 0 0 2px ${t.teal?'#0F766E':'var(--saffron)'}` }} />
                  <div style={{ fontSize:'0.75rem',fontWeight:700,color:'var(--saffron)',textTransform:'uppercase',letterSpacing:1,marginBottom:4 }}>{t.year}</div>
                  <div style={{ fontFamily:'var(--font-display)',fontSize:'1.1rem',fontWeight:600,color:'var(--text-dark)',marginBottom:6 }}>{t.title}</div>
                  <div style={{ fontSize:'0.85rem',color:'var(--text-muted)',lineHeight:1.65 }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display:'grid',gridTemplateColumns:'1fr',gap:16,alignContent:'start' }}>
            <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'var(--saffron)',marginBottom:6 }}>✦ Team ✦</div>
            {TEAM.map(t => (
              <div key={t.name} style={{ background:'white',border:'1px solid var(--border)',borderRadius:14,padding:20,display:'flex',gap:16,alignItems:'flex-start' }}>
                <div style={{ width:52,height:52,borderRadius:'50%',background:t.g,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontSize:'1.4rem',fontWeight:700,color:'white',flexShrink:0 }}>{t.i}</div>
                <div>
                  <div style={{ fontFamily:'var(--font-display)',fontSize:'1rem',fontWeight:700,color:'var(--text-dark)',marginBottom:2 }}>{t.name}</div>
                  <div style={{ fontSize:'0.75rem',color:'#0F766E',fontWeight:600,marginBottom:6 }}>{t.role}</div>
                  <div style={{ fontSize:'0.8rem',color:'var(--text-muted)',lineHeight:1.5 }}>{t.bio}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.tl-g{grid-template-columns:1fr!important}}`}</style>
      </section>

      <section style={{ background:'linear-gradient(135deg,#1C1009 0%,#2C1505 55%,#0D5C55 100%)',padding:'80px 8%',textAlign:'center' }}>
        <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'white',marginBottom:14 }}>Trusted by 85,000+ Indian Families</h2>
        <div style={{ display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap',marginTop:40 }}>
          <Link href="/puja-services" style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'16px 38px',borderRadius:'999px',background:'white',color:'var(--saffron)',fontWeight:600,fontSize:'1rem',textDecoration:'none' }}>🙏 Book a Puja Now</Link>
          <Link href="/contact" style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'16px 38px',borderRadius:'999px',background:'rgba(255,255,255,0.15)',color:'white',border:'2px solid rgba(255,255,255,0.4)',fontWeight:600,fontSize:'1rem',textDecoration:'none' }}>📞 Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
