import Link from 'next/link'
const POSTS = [
  { emoji:'🏠', bg:'linear-gradient(135deg,#FEF3C7,#FED7AA)', cat:'Ceremony Guide', date:'Mar 15, 2026', title:'Griha Pravesh Puja: A Complete Guide to Your Housewarming Ceremony', excerpt:'Everything you need to know about the ritual, its significance, the right muhurat, and how to prepare your home for this sacred ceremony.' },
  { emoji:'🌺', bg:'linear-gradient(135deg,#CCFBF1,rgba(15,118,110,0.15))', cat:'Festival', date:'Mar 10, 2026', title:'Significance of Satyanarayan Puja: Why Every Hindu Home Should Perform It', excerpt:'Satyanarayan Puja is one of the most beloved home ceremonies in India. Learn about its story, benefits and how to arrange it seamlessly.' },
  { emoji:'🔥', bg:'linear-gradient(135deg,#FEF3C7,rgba(180,83,9,0.12))', cat:'Homa Guide', date:'Mar 5, 2026', title:'Homa vs Puja: Understanding the Difference and When to Choose Each', excerpt:'Many devotees confuse a Homa with a regular Puja. This guide explains the distinction and helps you choose the right ceremony.' },
]
export default function BlogPreview() {
  return (
    <section style={{ background:'white', padding:'100px 8%' }}>
      <div style={{ textAlign:'center',marginBottom:64 }}>
        <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'var(--saffron)',marginBottom:14 }}>✦ Learn & Explore ✦</div>
        <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'var(--text-dark)' }}>From Our Blog</h2>
        <div style={{ width:60,height:3,background:'linear-gradient(90deg,var(--saffron),#F59E0B)',borderRadius:2,margin:'20px auto' }} />
        <p style={{ fontSize:'1.05rem',color:'var(--text-muted)',maxWidth:540,margin:'0 auto' }}>Discover the significance, rituals, and traditions behind Hindu ceremonies and festivals.</p>
      </div>
      <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:28 }} className="blog-grid">
        {POSTS.map(p => (
          <Link key={p.title} href="/blog" style={{ textDecoration:'none',background:'white',borderRadius:18,overflow:'hidden',border:'1px solid var(--border)',transition:'all 0.3s',display:'block' }} className="blog-card">
            <div style={{ height:200,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'4rem',background:p.bg }}>{p.emoji}</div>
            <div style={{ padding:22 }}>
              <div style={{ display:'flex',gap:10,alignItems:'center',fontSize:'0.75rem',color:'var(--text-faint)',marginBottom:10 }}>
                <span style={{ background:'rgba(249,115,22,0.12)',color:'var(--saffron)',padding:'2px 10px',borderRadius:'999px',fontWeight:600 }}>{p.cat}</span>
                <span>{p.date}</span>
              </div>
              <div style={{ fontFamily:'var(--font-display)',fontSize:'1.1rem',fontWeight:600,color:'var(--text-dark)',marginBottom:8,lineHeight:1.35 }}>{p.title}</div>
              <div style={{ fontSize:'0.82rem',color:'var(--text-muted)',lineHeight:1.6,marginBottom:18 }}>{p.excerpt}</div>
              <span style={{ color:'var(--teal,#0F766E)',fontSize:'0.82rem',fontWeight:600 }}>Read More →</span>
            </div>
          </Link>
        ))}
      </div>
      <div style={{ textAlign:'center',marginTop:44 }}>
        <Link href="/blog" style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'13px 30px',borderRadius:'999px',border:'1.5px solid var(--saffron)',color:'var(--saffron)',fontWeight:600,fontSize:'0.925rem',textDecoration:'none' }}>Explore All Articles →</Link>
      </div>
      <style>{`.blog-card:hover{transform:translateY(-4px);box-shadow:0 8px 32px rgba(249,115,22,0.12);border-color:var(--border-warm)!important}@media(max-width:900px){.blog-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
