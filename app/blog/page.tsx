import Link from 'next/link'
const POSTS = [
  { emoji:'🏠', bg:'linear-gradient(135deg,#FEF3C7,#FED7AA)', cat:'Ceremony Guide', date:'Mar 15, 2026', title:'Griha Pravesh Puja: A Complete Guide to Your Housewarming Ceremony', excerpt:'Everything you need to know — the significance, right muhurat, and how to prepare your home for this sacred ceremony.' },
  { emoji:'🌺', bg:'linear-gradient(135deg,#CCFBF1,rgba(15,118,110,0.2))', cat:'Festival', date:'Mar 10, 2026', title:'Significance of Satyanarayan Puja: Why Every Hindu Home Should Perform It', excerpt:'Satyanarayan Puja is one of the most beloved home ceremonies in India. Learn about its story, benefits and how to arrange it.' },
  { emoji:'🔥', bg:'linear-gradient(135deg,#FEF3C7,rgba(180,83,9,0.12))', cat:'Homa Guide', date:'Mar 5, 2026', title:'Homa vs Puja: Understanding the Difference and When to Choose Each', excerpt:'Many devotees confuse a Homa with a regular Puja. This guide explains the distinction and helps you choose the right ceremony.' },
  { emoji:'🐘', bg:'linear-gradient(135deg,#FEF3C7,rgba(249,115,22,0.15))', cat:'Ceremony Guide', date:'Feb 20, 2026', title:'Maha Ganapati Homa: Why It\'s Performed & What to Expect', excerpt:'The Maha Ganapati Homa is one of the most powerful fire rituals. Learn about the procedure, benefits, and ideal occasions.' },
  { emoji:'🌟', bg:'linear-gradient(135deg,#F5F3FF,#EDE9FE)', cat:'Astrology', date:'Feb 14, 2026', title:'Navagraha Puja: How Planetary Remedies Can Transform Your Life', excerpt:'The nine planets profoundly influence our lives. This guide explains how Navagraha Puja works and what to expect.' },
  { emoji:'📿', bg:'linear-gradient(135deg,#CCFBF1,rgba(15,118,110,0.15))', cat:'Vedic Traditions', date:'Feb 7, 2026', title:'The 16 Hindu Samskaras: Life Ceremonies Every Devotee Should Know', excerpt:'From Garbhadhana to Antyesti, the 16 Samskaras mark key milestones of human life. A complete guide.' },
]
const CATS = ['All Articles','Ceremony Guides','Festival Guides','Homa & Havans','Vedic Traditions','E-Puja & NRI','Astrology']
export default function BlogPage() {
  return (
    <>
      <div style={{ padding:'140px 8% 80px',background:'linear-gradient(160deg,#1C1009 0%,#2D1506 60%,#0D5C55 100%)',color:'white',textAlign:'center',position:'relative',overflow:'hidden' }}>
        <div style={{ position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none' }}>
          <span style={{ fontFamily:'var(--font-devan)',fontSize:'50vw',color:'rgba(255,255,255,0.025)',lineHeight:1 }}>ॐ</span>
        </div>
        <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'#FDE68A',marginBottom:14 }}>✦ Vedic Knowledge Hub ✦</div>
        <h1 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(2.4rem,4.5vw,3.8rem)',fontWeight:700,color:'white',marginBottom:16 }}>DoMyPooja Blog</h1>
        <p style={{ fontSize:'1.05rem',color:'rgba(255,255,255,0.65)',maxWidth:540,margin:'0 auto 28px' }}>Guides, rituals, festival significance and Vedic wisdom — everything you need to deepen your spiritual journey.</p>
        <div style={{ display:'flex',alignItems:'center',gap:8,justifyContent:'center',fontSize:'0.8rem',color:'rgba(255,255,255,0.5)' }}>
          <Link href="/" style={{ color:'rgba(255,255,255,0.6)',textDecoration:'none' }}>Home</Link><span>/</span><span>Blog</span>
        </div>
      </div>

      <section style={{ padding:'60px 8% 100px' }}>
        <div style={{ display:'flex',flexWrap:'wrap',gap:10,marginBottom:40 }}>
          {CATS.map((c,i) => (
            <button key={c} style={{ padding:'8px 20px',borderRadius:'999px',border:'1.5px solid var(--border-warm)',background:i===0?'var(--saffron)':'white',color:i===0?'white':'var(--text-muted)',fontSize:'0.82rem',fontWeight:600,cursor:'pointer',fontFamily:'var(--font-body)' }}>{c}</button>
          ))}
        </div>
        <div style={{ display:'grid',gridTemplateColumns:'1fr 300px',gap:48,alignItems:'start' }} className="blog-layout">
          <div>
            {/* Featured */}
            <div style={{ background:'white',borderRadius:18,overflow:'hidden',border:'1px solid var(--border-warm)',boxShadow:'0 8px 32px rgba(249,115,22,0.12)',marginBottom:40,display:'grid',gridTemplateColumns:'1fr 1fr' }} className="featured-post">
              <div style={{ background:'linear-gradient(135deg,#FEF3C7,#FED7AA)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'6rem',minHeight:260 }}>🏠</div>
              <div style={{ padding:'36px 32px',display:'flex',flexDirection:'column',justifyContent:'center' }}>
                <span style={{ display:'inline-block',background:'var(--saffron)',color:'white',fontSize:'0.72rem',fontWeight:700,letterSpacing:1,textTransform:'uppercase',padding:'4px 12px',borderRadius:'999px',marginBottom:14 }}>✦ Featured Article</span>
                <div style={{ fontSize:'0.76rem',color:'var(--text-faint)',marginBottom:12 }}>Rajesh Iyer · Mar 15, 2026 · 8 min read</div>
                <div style={{ fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:700,color:'var(--text-dark)',lineHeight:1.25,marginBottom:14 }}>Griha Pravesh Puja: A Complete Guide to Your Sacred Housewarming Ceremony</div>
                <p style={{ fontSize:'0.88rem',color:'var(--text-muted)',lineHeight:1.7,marginBottom:22 }}>Everything you need to know about Griha Pravesh — the significance, rituals, auspicious timing, regional variations, and how to prepare your home.</p>
                <a href="#" style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'13px 28px',borderRadius:'999px',background:'linear-gradient(135deg,var(--saffron),#C2540A)',color:'white',fontWeight:600,fontSize:'0.9rem',textDecoration:'none',width:'fit-content' }}>Read Full Article →</a>
              </div>
            </div>
            <div style={{ display:'flex',flexDirection:'column',gap:22 }}>
              {POSTS.map(p => (
                <div key={p.title} style={{ background:'white',borderRadius:14,overflow:'hidden',border:'1px solid var(--border)',display:'grid',gridTemplateColumns:'180px 1fr',transition:'all 0.3s' }} className="blog-row">
                  <div style={{ background:p.bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'3rem' }}>{p.emoji}</div>
                  <div style={{ padding:'22px 24px' }}>
                    <div style={{ display:'flex',gap:10,alignItems:'center',fontSize:'0.75rem',color:'var(--text-faint)',marginBottom:8 }}>
                      <span style={{ background:'rgba(249,115,22,0.12)',color:'var(--saffron)',padding:'2px 10px',borderRadius:'999px',fontWeight:600 }}>{p.cat}</span>
                      <span>{p.date}</span>
                    </div>
                    <div style={{ fontFamily:'var(--font-display)',fontSize:'1.05rem',fontWeight:600,color:'var(--text-dark)',marginBottom:6,lineHeight:1.3 }}>{p.title}</div>
                    <div style={{ fontSize:'0.82rem',color:'var(--text-muted)',lineHeight:1.6,marginBottom:14 }}>{p.excerpt}</div>
                    <span style={{ color:'var(--saffron)',fontSize:'0.82rem',fontWeight:600 }}>Read More →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside style={{ display:'flex',flexDirection:'column',gap:24,position:'sticky',top:'calc(72px + 16px)' }}>
            <div style={{ background:'white',borderRadius:14,border:'1px solid var(--border)',padding:22 }}>
              <h3 style={{ fontFamily:'var(--font-display)',fontSize:'1rem',color:'var(--text-dark)',marginBottom:14,paddingBottom:10,borderBottom:'1px solid var(--border)' }}>📂 Categories</h3>
              {['🏠 Ceremony Guides (24)','🌺 Festival Guides (18)','🔥 Homa & Havans (12)','📿 Vedic Traditions (20)','📱 E-Puja & NRI (8)','🔮 Astrology (15)'].map(c => (
                <div key={c} style={{ padding:'8px 10px',borderRadius:8,fontSize:'0.84rem',color:'var(--text-body)',cursor:'pointer',marginBottom:3,display:'flex',justifyContent:'space-between' }} className="cat-item">{c}</div>
              ))}
            </div>
            <div style={{ background:'linear-gradient(135deg,var(--saffron),#C2540A)',borderRadius:14,padding:24,color:'white',textAlign:'center' }}>
              <h3 style={{ fontFamily:'var(--font-display)',fontSize:'1.1rem',marginBottom:8 }}>📬 Stay Connected</h3>
              <p style={{ fontSize:'0.8rem',opacity:0.85,marginBottom:16,lineHeight:1.6 }}>Get festival puja guides and Vedic wisdom delivered monthly.</p>
              <input type="email" placeholder="Your email address" style={{ width:'100%',padding:'9px 12px',borderRadius:8,border:'none',fontFamily:'var(--font-body)',fontSize:'0.85rem',marginBottom:10,outline:'none' }} />
              <button style={{ width:'100%',padding:10,background:'white',color:'var(--saffron)',border:'none',borderRadius:8,fontFamily:'var(--font-body)',fontWeight:700,fontSize:'0.9rem',cursor:'pointer' }}>Subscribe for Free</button>
            </div>
            <div style={{ background:'linear-gradient(135deg,#1C1009,#2C1505)',borderRadius:14,padding:22,textAlign:'center' }}>
              <div style={{ fontSize:'2.5rem',marginBottom:10 }}>🙏</div>
              <div style={{ fontFamily:'var(--font-display)',fontSize:'1.05rem',color:'white',marginBottom:8 }}>Ready to Book a Puja?</div>
              <p style={{ fontSize:'0.8rem',color:'rgba(255,255,255,0.6)',marginBottom:14 }}>Our experts are available 24/7</p>
              <Link href="/puja-services" style={{ display:'block',padding:'11px',borderRadius:'999px',background:'linear-gradient(135deg,var(--saffron),#C2540A)',color:'white',fontWeight:600,fontSize:'0.85rem',textAlign:'center',textDecoration:'none' }}>Book Now →</Link>
            </div>
          </aside>
        </div>
      </section>
      <style>{`.blog-row:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(249,115,22,0.1);border-color:var(--border-warm)!important}.cat-item:hover{background:var(--saffron-glow);color:var(--saffron-deep)}@media(max-width:900px){.blog-layout{grid-template-columns:1fr!important}aside{position:static!important}.featured-post{grid-template-columns:1fr!important}}`}</style>
    </>
  )
}
