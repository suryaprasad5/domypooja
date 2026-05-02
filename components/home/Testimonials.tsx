const TESTIS = [
  { initial:'G', teal:false, name:'Gayatri Hela P',        role:'Founder — New Reseda Lifesciences', text:'So authentic! They identified a Pujari from our exact sect who understood our requirements perfectly. Every syllable of the mantra chanting was divine. After a long time I had a truly peaceful puja.' },
  { initial:'P', teal:true,  name:'Pavan Kumar',            role:'Entrepreneur — Jain Farms',         text:'Conducting a Puja was so daunting for me. DoMyPooja did everything — arranged purohits, samagri, explained rituals. All I had to do was be present at the given time. Highly recommend!' },
  { initial:'V', teal:false, name:'Vijayanand Bagewadi',    role:'Owner — BGK Medicals',              text:'We booked Gana Homa, Aditya Hridaya Homa, and Rudrabhiseka. The significance and meaning were beautifully explained. Energetic mantra chanting. Truly top quality service!' },
  { initial:'S', teal:true,  name:'Shalini Pandey',         role:'Homemaker — New Jersey, USA',       text:'Being in USA, we could not travel for my baby\'s Mundan. DoMyPooja organized an E-Puja with a Pandit thorough with our customs. Everything was guided perfectly. Very cost-effective too!' },
  { initial:'M', teal:false, name:'Manisha Singh',           role:'Coach & Consultant',                text:'I wanted my father\'s last rites done with utmost respect. DoMyPooja was outstanding — punctual, professional, sensitive. My entire family appreciated the care shown. Truly exceptional!' },
  { initial:'U', teal:true,  name:'Prof. Udayaravi S. Moorti',role:'Professor',                       text:'The purohits conducted all puja ceremonies excellently. Their professional and spiritual inputs made our Griha Pravesh ceremony truly memorable for our entire family. With best wishes!' },
]
export default function Testimonials() {
  return (
    <section style={{ background:'var(--ivory-warm)',padding:'100px 8%',position:'relative',overflow:'hidden' }}>
      <div style={{ position:'absolute',top:'-10%',left:'-4%',fontFamily:'var(--font-display)',fontSize:'40vw',color:'rgba(249,115,22,0.04)',lineHeight:1,pointerEvents:'none',userSelect:'none' }}>"</div>
      <div style={{ textAlign:'center',marginBottom:64,position:'relative' }}>
        <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'var(--saffron)',marginBottom:14 }}>✦ Customer Stories ✦</div>
        <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'var(--text-dark)' }}>What Our Devotees Say</h2>
        <div style={{ width:60,height:3,background:'linear-gradient(90deg,var(--saffron),#F59E0B)',borderRadius:2,margin:'20px auto' }} />
        <p style={{ fontSize:'1.05rem',color:'var(--text-muted)',maxWidth:540,margin:'0 auto' }}>Thousands of families across India trust DoMyPooja for their most sacred ceremonies.</p>
      </div>
      <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24 }} className="testi-grid">
        {TESTIS.map(t => (
          <div key={t.name} style={{ background:'white',borderRadius:18,padding:28,border:'1px solid var(--border)',transition:'all 0.3s' }} className="testi-card">
            <div style={{ color:'#F59E0B',fontSize:'0.88rem',letterSpacing:3,marginBottom:14 }}>★★★★★</div>
            <p style={{ fontSize:'0.875rem',fontStyle:'italic',color:'var(--text-body)',lineHeight:1.75,marginBottom:20 }}>"{t.text}"</p>
            <div style={{ display:'flex',alignItems:'center',gap:12 }}>
              <div style={{ width:46,height:46,borderRadius:'50%',background:t.teal?'linear-gradient(135deg,#0F766E,#0D5C55)':'linear-gradient(135deg,var(--saffron),#F59E0B)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontSize:'1.25rem',color:'white',fontWeight:700,flexShrink:0 }}>{t.initial}</div>
              <div>
                <div style={{ fontWeight:600,fontSize:'0.88rem',color:'var(--text-dark)' }}>{t.name}</div>
                <div style={{ fontSize:'0.73rem',color:'var(--text-faint)' }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`.testi-card:hover{transform:translateY(-4px);box-shadow:0 8px 32px rgba(249,115,22,0.12)}@media(max-width:900px){.testi-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:640px){.testi-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
