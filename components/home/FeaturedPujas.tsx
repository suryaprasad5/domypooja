'use client'
import { useState } from 'react'
import Link from 'next/link'
import { POPULAR } from '@/data/services'

const TABS = ['All Pujas','Griha Pravesh','Homas','Festival','Life Events','Shanti & Remedies']

export default function FeaturedPujas() {
  const [tab, setTab] = useState(0)
  return (
    <section style={{ background:'var(--ivory)',padding:'100px 8%' }}>
      <div style={{ textAlign:'center',marginBottom:64 }}>
        <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'var(--saffron)',marginBottom:14 }}>✦ Most Booked ✦</div>
        <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'var(--text-dark)' }}>Featured Puja Services</h2>
        <div style={{ width:60,height:3,background:'linear-gradient(90deg,var(--saffron),#F59E0B)',borderRadius:2,margin:'20px auto' }} />
        <p style={{ fontSize:'1.05rem',color:'var(--text-muted)',maxWidth:540,margin:'0 auto' }}>Authentic Vedic ceremonies performed by verified Pandits. Complete puja samagri included in all packages.</p>
      </div>
      <div style={{ display:'flex',flexWrap:'wrap',gap:10,justifyContent:'center',marginBottom:52 }}>
        {TABS.map((t,i) => (
          <button key={t} onClick={() => setTab(i)} style={{
            padding:'8px 22px', borderRadius:'999px', cursor:'pointer',
            border:'1.5px solid var(--border-warm)',
            background: tab===i ? 'var(--saffron)' : 'transparent',
            color: tab===i ? 'white' : 'var(--text-muted)',
            fontSize:'0.84rem', fontWeight:500, fontFamily:'var(--font-body)', transition:'all 0.2s',
          }}>{t}</button>
        ))}
      </div>
      <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(230px,1fr))',gap:24 }}>
        {POPULAR.map(p => (
          <Link key={p.id} href={`/puja/${p.id}`} style={{ textDecoration:'none', background:'var(--ivory-warm)', borderRadius:18, border:'1px solid var(--border)', overflow:'hidden', transition:'all 0.3s', display:'block' }}
            className="puja-card">
            <div style={{ height:155, display:'flex',alignItems:'center',justifyContent:'center',fontSize:'3.5rem', background:'linear-gradient(135deg,var(--ivory-mid,#FEF3C7),var(--saffron-light,#FED7AA))', position:'relative' }}>
              {p.emoji}
              {p.badge === 'popular' && (
                <span style={{ position:'absolute',top:10,right:10,background:'var(--saffron)',color:'white',fontSize:'0.65rem',fontWeight:700,padding:'3px 10px',borderRadius:'999px' }}>Popular</span>
              )}
            </div>
            <div style={{ padding:'18px 20px' }}>
              <div style={{ fontFamily:'var(--font-display)',fontSize:'1.05rem',fontWeight:600,color:'var(--text-dark)',marginBottom:6,lineHeight:1.3 }}>{p.name}</div>
              {p.description && <div style={{ fontSize:'0.8rem',color:'var(--text-muted)',lineHeight:1.55,marginBottom:16 }}>{p.description.slice(0,70)}…</div>}
              <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between' }}>
                <div style={{ fontSize:'0.8rem',color:'var(--text-faint)' }}>From <strong style={{ color:'var(--saffron)',fontSize:'1.05rem' }}>{p.price.split('–')[0].trim()}</strong></div>
                <span style={{ padding:'7px 16px',borderRadius:'999px',border:'1.5px solid var(--saffron)',color:'var(--saffron)',fontSize:'0.78rem',fontWeight:600 }}>Book</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div style={{ textAlign:'center',marginTop:52 }}>
        <Link href="/puja-services" style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'16px 38px',borderRadius:'999px',background:'linear-gradient(135deg,var(--saffron),var(--saffron-deep,#C2540A))',color:'white',fontWeight:600,fontSize:'1rem',textDecoration:'none',boxShadow:'0 6px 22px rgba(249,115,22,0.35)' }}>
          View All 118+ Puja Services →
        </Link>
      </div>
      <style>{`.puja-card:hover{transform:translateY(-5px);box-shadow:0 20px 60px rgba(249,115,22,0.18);border-color:var(--border-warm)!important}`}</style>
    </section>
  )
}
