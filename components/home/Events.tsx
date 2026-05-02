import Link from 'next/link'
const EVENTS = [
  { day:'27', mon:'Mar 2026', name:'Ram Navami',       sub:'Friday · Pan-India',  desc:'Book a special Ram Navami puja for your home or community.', grad:'linear-gradient(135deg,var(--saffron),var(--saffron-deep,#C2540A))' },
  { day:'02', mon:'Apr 2026', name:'Hanuman Jayanti',  sub:'Thursday · Pan-India', desc:'A powerful day to perform Hanuman Puja and Sundarkand Path.', grad:'linear-gradient(135deg,#0F766E,#0D5C55)' },
  { day:'20', mon:'Apr 2026', name:'Akshaya Tritiya',  sub:'Monday · Pan-India',  desc:'Perfect for Griha Pravesh and new beginnings.', grad:'linear-gradient(135deg,#B45309,#92400E)' },
  { day:'14', mon:'Sep 2026', name:'Ganesha Chaturthi',sub:'Monday · Pan-India',  desc:'Book a Ganapati Homa or Puja for blessings.', grad:'linear-gradient(135deg,#7C3AED,#4C1D95)' },
  { day:'12', mon:'Oct 2026', name:'Navaratri',        sub:'Monday · Pan-India',  desc:'Book Durga Puja or Chandi Homa for Shakti blessings.', grad:'linear-gradient(135deg,#B45309,#78350F)' },
  { day:'08', mon:'Nov 2026', name:'Diwali',           sub:'Sunday · Pan-India',  desc:'Lakshmi Puja and Dhanteras rituals for wealth and prosperity.', grad:'linear-gradient(135deg,#1D4ED8,#1E3A8A)' },
]
export default function Events() {
  return (
    <section style={{ background:'white', padding:'100px 8%' }}>
      <div style={{ textAlign:'center', marginBottom:64 }}>
        <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'var(--saffron)',marginBottom:14 }}>✦ Sacred Calendar ✦</div>
        <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'var(--text-dark)' }}>Upcoming Festivals & Events</h2>
        <div style={{ width:60,height:3,background:'linear-gradient(90deg,var(--saffron),#F59E0B)',borderRadius:2,margin:'20px auto' }} />
        <p style={{ fontSize:'1.05rem',color:'var(--text-muted)',maxWidth:540,margin:'0 auto' }}>Book early for auspicious Hindu festivals. Our Pandits are available for all major and minor celebrations.</p>
      </div>
      <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:22 }} className="events-grid">
        {EVENTS.map(e => (
          <div key={e.name} style={{ background:'white',borderRadius:18,overflow:'hidden',border:'1px solid var(--border)',transition:'all 0.3s' }} className="event-card">
            <div style={{ padding:'22px 24px',display:'flex',gap:16,alignItems:'center',color:'white',background:e.grad }}>
              <div style={{ background:'rgba(255,255,255,0.2)',borderRadius:12,padding:'8px 14px',textAlign:'center',minWidth:60 }}>
                <div style={{ fontFamily:'var(--font-display)',fontSize:'2rem',lineHeight:1 }}>{e.day}</div>
                <div style={{ fontSize:'0.7rem',textTransform:'uppercase',letterSpacing:1,opacity:0.8 }}>{e.mon}</div>
              </div>
              <div>
                <div style={{ fontFamily:'var(--font-display)',fontSize:'1.1rem',marginBottom:3 }}>{e.name}</div>
                <div style={{ fontSize:'0.76rem',opacity:0.75 }}>{e.sub}</div>
              </div>
            </div>
            <div style={{ padding:'18px 24px 22px' }}>
              <p style={{ fontSize:'0.83rem',color:'var(--text-muted)',lineHeight:1.6,marginBottom:14 }}>{e.desc}</p>
              <Link href="/puja-services" style={{ display:'inline-flex',alignItems:'center',gap:4,color:'var(--saffron)',fontSize:'0.82rem',fontWeight:600,textDecoration:'none' }}>Book Puja for this Festival →</Link>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign:'center',marginTop:44 }}>
        <Link href="/puja-services" style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'13px 30px',borderRadius:'999px',border:'2px solid var(--teal,#0F766E)',color:'var(--teal,#0F766E)',fontWeight:600,fontSize:'0.925rem',textDecoration:'none',transition:'all 0.22s' }}>View Full Festival Calendar →</Link>
      </div>
      <style>{`.event-card:hover{transform:translateY(-4px);box-shadow:0 8px 32px rgba(249,115,22,0.12)}@media(max-width:900px){.events-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:640px){.events-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
