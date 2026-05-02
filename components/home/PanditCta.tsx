import Link from 'next/link'
export default function PanditCta() {
  return (
    <section style={{ background:'linear-gradient(135deg,var(--saffron) 0%,var(--saffron-deep,#C2540A) 40%,#0D5C55 100%)',color:'white',textAlign:'center',padding:'90px 8%',position:'relative',overflow:'hidden' }}>
      <div style={{ position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none' }}>
        <span style={{ fontFamily:'var(--font-devan)',fontSize:'35vw',color:'rgba(255,255,255,0.04)',lineHeight:1 }}>ॐ</span>
      </div>
      <div style={{ position:'relative' }}>
        <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',marginBottom:14 }}>Are You a Qualified Pandit or Astrologer?</h2>
        <p style={{ fontSize:'1rem',opacity:0.8,maxWidth:520,margin:'0 auto 38px',lineHeight:1.7 }}>Join DoMyPooja — India's fastest-growing spiritual services platform — and connect with thousands of devotees seeking authentic Vedic rituals across 30+ cities.</p>
        <div style={{ display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap' }}>
          <Link href="/contact" style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'16px 38px',borderRadius:'999px',background:'white',color:'var(--saffron)',fontWeight:600,fontSize:'1rem',textDecoration:'none',boxShadow:'0 6px 24px rgba(0,0,0,0.15)' }}>🙏 Register as Pandit</Link>
          <Link href="/contact" style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'16px 38px',borderRadius:'999px',background:'rgba(255,255,255,0.15)',color:'white',border:'2px solid rgba(255,255,255,0.4)',fontWeight:600,fontSize:'1rem',textDecoration:'none' }}>📞 Contact Us</Link>
        </div>
      </div>
    </section>
  )
}
