'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { SERVICES, CATEGORIES, SAMSKARAS, PujaCategory } from '@/data/services'

const BADGE_COLORS: Record<string, string> = {
  popular:'#F97316', festival:'#F97316', homa:'#B45309',
  japa:'#0F766E', remedy:'#7C3AED', devi:'#DB2777',
  pitru:'#475569', temple:'#D97706', grand:'#B45309',
}
const BADGE_LABELS: Record<string, string> = {
  popular:'Popular', festival:'Festival', homa:'Homa', japa:'Japa',
  remedy:'Remedy', devi:'Devi', pitru:'Pitru', temple:'Temple', grand:'Grand',
}

type FilterMode = 'all' | PujaCategory | 'samskaras'

export default function PujaServicesPage() {
  const [mode, setMode]   = useState<FilterMode>('all')
  const [q,    setQ]      = useState('')

  const filtered = useMemo(() => {
    let list = mode === 'all' ? SERVICES
             : mode === 'samskaras' ? SAMSKARAS
             : SERVICES.filter(s => s.category === mode)
    if (q.trim()) list = list.filter(s => s.name.toLowerCase().includes(q.toLowerCase()))
    return list
  }, [mode, q])

  const grouped = useMemo(() => {
    if (q.trim() || mode !== 'all') return null
    const g: Record<string, typeof SERVICES> = {}
    Object.keys(CATEGORIES).forEach(k => { g[k] = SERVICES.filter(s => s.category === k) })
    return g
  }, [q, mode])

  const book = (name: string) =>
    window.open(`https://wa.me/919036050108?text=${encodeURIComponent(`I would like to book: ${name}\n\nPlease share pricing and availability.`)}`, '_blank')

  return (
    <>
      {/* Hero */}
      <div style={{ padding:'140px 8% 80px', background:'linear-gradient(160deg,#1C1009 0%,#2D1506 60%,#0D5C55 100%)', color:'white', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none' }}>
          <span style={{ fontFamily:'var(--font-devan)',fontSize:'50vw',color:'rgba(255,255,255,0.025)',lineHeight:1 }}>ॐ</span>
        </div>
        <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'#FDE68A',marginBottom:14 }}>✦ Kannada Pooja Services · Bangalore ✦</div>
        <h1 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(2.4rem,4.5vw,3.8rem)',fontWeight:700,color:'white',marginBottom:16 }}>118 Pooja & Ritual Services</h1>
        <p style={{ fontSize:'1.05rem',color:'rgba(255,255,255,0.65)',maxWidth:540,margin:'0 auto 28px' }}>Ceremonies · Homas · Japas · Parihara · Ancestor Rituals — performed by verified Kannada Pandits across Bangalore.</p>
        <div style={{ display:'flex',alignItems:'center',gap:8,justifyContent:'center',fontSize:'0.8rem',color:'rgba(255,255,255,0.5)' }}>
          <Link href="/" style={{ color:'rgba(255,255,255,0.6)',textDecoration:'none' }}>Home</Link>
          <span>/</span><span>Puja Services</span>
        </div>
      </div>

      <section style={{ padding:'60px 8%' }}>
        {/* Search */}
        <div style={{ display:'flex',gap:10,marginBottom:24,background:'white',border:'1.5px solid var(--border-warm)',borderRadius:'999px',padding:'6px 6px 6px 20px',boxShadow:'0 2px 12px rgba(249,115,22,0.08)',maxWidth:680 }}>
          <input value={q} onChange={e => { setQ(e.target.value); if (e.target.value) setMode('all') }}
            placeholder="🔍  Search — e.g. Gruhapravesha, Mrityunjaya, Kala Sarpa..."
            style={{ flex:1,border:'none',outline:'none',fontFamily:'var(--font-body)',fontSize:'0.88rem',color:'var(--text-body)',background:'transparent' }} />
          {q && <button onClick={() => setQ('')} style={{ background:'none',border:'none',cursor:'pointer',color:'var(--text-faint)',fontSize:'1.1rem',padding:'0 8px' }}>✕</button>}
          <button style={{ background:'linear-gradient(135deg,var(--saffron),#C2540A)',color:'white',border:'none',borderRadius:'999px',padding:'8px 20px',fontFamily:'var(--font-body)',fontSize:'0.82rem',fontWeight:700,cursor:'pointer' }}>Search</button>
        </div>

        <div style={{ display:'grid',gridTemplateColumns:'260px 1fr',gap:40,alignItems:'start' }} className="svc-layout">
          {/* Sidebar */}
          <aside style={{ background:'white',borderRadius:18,border:'1px solid var(--border)',padding:24,position:'sticky',top:'calc(72px + 16px)',maxHeight:'calc(100vh - 120px)',overflowY:'auto' }}>
            <h3 style={{ fontFamily:'var(--font-display)',fontSize:'1rem',color:'var(--text-dark)',marginBottom:16,paddingBottom:10,borderBottom:'1px solid var(--border)' }}>🔍 Filter Services</h3>

            {/* Samskaras special filter */}
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:'0.7rem',fontWeight:700,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'1.2px',marginBottom:8 }}>Special Filter</div>
              <div onClick={() => { setMode('samskaras'); setQ('') }}
                style={{ display:'flex',alignItems:'center',gap:10,padding:'10px 12px',borderRadius:10,cursor:'pointer',
                  background: mode==='samskaras' ? 'linear-gradient(135deg,rgba(249,115,22,0.12),rgba(249,115,22,0.06))' : 'var(--ivory-warm)',
                  border: `1.5px solid ${mode==='samskaras' ? 'var(--saffron)' : 'var(--border-warm)'}`,
                  transition:'all 0.18s' }}>
                <span style={{ fontSize:'1.2rem' }}>🕉️</span>
                <div>
                  <div style={{ fontSize:'0.83rem',fontWeight:700,color: mode==='samskaras' ? 'var(--saffron-deep)' : 'var(--text-dark)' }}>Shodasha Samskaras</div>
                  <div style={{ fontSize:'0.7rem',color:'var(--text-faint)' }}>16 sacred life ceremonies</div>
                </div>
                <span style={{ marginLeft:'auto',fontSize:'0.68rem',background:mode==='samskaras'?'var(--saffron)':'var(--ivory-mid)',color:mode==='samskaras'?'white':'var(--text-faint)',padding:'1px 7px',borderRadius:'999px',fontWeight:700 }}>{SAMSKARAS.length}</span>
              </div>
            </div>

            <div style={{ marginBottom:22 }}>
              <div style={{ fontSize:'0.7rem',fontWeight:700,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'1.2px',marginBottom:8 }}>Category</div>
              {[{ id:'all', label:'All Categories', icon:'✦', count:SERVICES.length },
                ...Object.entries(CATEGORIES).map(([id,c]) => ({ id, label:c.label, icon:c.icon, count:SERVICES.filter(s=>s.category===id).length }))
              ].map(o => (
                <div key={o.id} onClick={() => { setMode(o.id as FilterMode); setQ('') }}
                  style={{ display:'flex',alignItems:'center',justifyContent:'space-between',padding:'8px 12px',borderRadius:10,fontSize:'0.83rem',
                    color: mode===o.id?'var(--saffron-deep)':'var(--text-body)',
                    background: mode===o.id?'rgba(249,115,22,0.08)':'transparent',
                    border:`1px solid ${mode===o.id?'var(--border-warm)':'transparent'}`,
                    cursor:'pointer',marginBottom:3,fontWeight:mode===o.id?600:400,transition:'all 0.18s' }}>
                  <span>{o.icon} {o.label}</span>
                  <span style={{ fontSize:'0.68rem',color:'var(--text-faint)',background:'var(--ivory-warm)',padding:'1px 7px',borderRadius:'999px',border:'1px solid var(--border)' }}>{o.count}</span>
                </div>
              ))}
            </div>

            <div style={{ display:'flex',flexDirection:'column',gap:10,paddingTop:16,borderTop:'1px solid var(--border)' }}>
              <a href="/contact" style={{ display:'block',padding:'11px',borderRadius:'999px',background:'linear-gradient(135deg,var(--saffron),#C2540A)',color:'white',fontWeight:600,fontSize:'0.84rem',textAlign:'center',textDecoration:'none' }}>📞 Talk to Expert</a>
              <a href="https://wa.me/919036050108" target="_blank" rel="noreferrer" style={{ display:'block',padding:'11px',borderRadius:'999px',border:'2px solid #0F766E',color:'#0F766E',fontWeight:600,fontSize:'0.84rem',textAlign:'center',textDecoration:'none' }}>💬 WhatsApp</a>
            </div>
          </aside>

          {/* Main content */}
          <div>
            <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:28,flexWrap:'wrap',gap:14 }}>
              <div>
                <h2 style={{ fontFamily:'var(--font-display)',fontSize:'1.6rem',color:'var(--text-dark)' }}>
                  {mode==='samskaras' ? '🕉️ Shodasha Samskaras — 16 Sacred Life Ceremonies'
                   : mode==='all' && !q ? 'All Puja Services'
                   : q ? `Results for "${q}"`
                   : CATEGORIES[mode as PujaCategory]?.label}
                </h2>
                <div style={{ fontSize:'0.8rem',color:'var(--text-faint)',marginTop:2 }}>
                  {filtered.length} service{filtered.length!==1?'s':''} · Bangalore · Kannada
                </div>
              </div>
              <select style={{ padding:'8px 14px',borderRadius:10,border:'1px solid var(--border-warm)',fontFamily:'var(--font-body)',fontSize:'0.84rem',background:'white',cursor:'pointer',outline:'none' }}>
                <option>Most Popular</option><option>Price: Low to High</option><option>Alphabetical</option>
              </select>
            </div>

            {/* Samskaras info banner */}
            {mode === 'samskaras' && (
              <div style={{ background:'linear-gradient(135deg,rgba(249,115,22,0.08),rgba(15,118,110,0.06))',border:'1px solid var(--border-warm)',borderRadius:14,padding:'18px 22px',marginBottom:32,display:'flex',gap:16,alignItems:'flex-start' }}>
                <span style={{ fontSize:'2rem',flexShrink:0 }}>🕉️</span>
                <div>
                  <div style={{ fontFamily:'var(--font-display)',fontSize:'1.05rem',fontWeight:700,color:'var(--text-dark)',marginBottom:6 }}>Shodasha Samskaras — The 16 Sacred Rites of Passage</div>
                  <p style={{ fontSize:'0.85rem',color:'var(--text-muted)',lineHeight:1.65 }}>The Shodasha Samskaras are 16 sacred rituals that mark every key milestone of a Hindu's life — from conception to the last rites. These ceremonies purify, bless and connect the individual to Vedic tradition at each stage of the life journey.</p>
                </div>
              </div>
            )}

            {/* Grouped view (default all) */}
            {grouped && !q ? (
              Object.entries(grouped).map(([catKey, items]) => (
                <div key={catKey} style={{ marginBottom:52 }}>
                  <div style={{ display:'flex',alignItems:'center',gap:14,marginBottom:20,paddingBottom:14,borderBottom:'2px solid var(--border)' }}>
                    <div style={{ width:46,height:46,borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.4rem',background:'rgba(249,115,22,0.08)',flexShrink:0 }}>
                      {CATEGORIES[catKey as PujaCategory].icon}
                    </div>
                    <div>
                      <div style={{ fontFamily:'var(--font-display)',fontSize:'1.3rem',fontWeight:700,color:'var(--text-dark)' }}>{CATEGORIES[catKey as PujaCategory].label}</div>
                      <div style={{ fontSize:'0.75rem',color:'var(--text-faint)' }}>{items.length} services · {CATEGORIES[catKey as PujaCategory].description}</div>
                    </div>
                  </div>
                  <ServiceGrid items={items} badgeColors={BADGE_COLORS} badgeLabels={BADGE_LABELS} onBook={book} />
                </div>
              ))
            ) : (
              <ServiceGrid items={filtered} badgeColors={BADGE_COLORS} badgeLabels={BADGE_LABELS} onBook={book} />
            )}

            {filtered.length === 0 && (
              <div style={{ textAlign:'center',padding:'60px 20px' }}>
                <div style={{ fontSize:'3rem',marginBottom:12 }}>🔍</div>
                <h3 style={{ fontFamily:'var(--font-display)',fontSize:'1.3rem',color:'var(--text-dark)',marginBottom:8 }}>No services found</h3>
                <p style={{ fontSize:'0.85rem',color:'var(--text-faint)' }}>Try different keywords or <a href="/contact" style={{ color:'var(--saffron)' }}>contact us</a>.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:'linear-gradient(135deg,#1C1009 0%,#2C1505 55%,#0D5C55 100%)',padding:'70px 8%',textAlign:'center' }}>
        <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',color:'white',marginBottom:12 }}>Need Help Choosing?</h2>
        <p style={{ color:'rgba(255,255,255,0.6)',maxWidth:520,margin:'0 auto 36px',lineHeight:1.7 }}>Not sure which puja to book? Our team will guide you to the right ceremony for your occasion, tradition and budget.</p>
        <div style={{ display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap' }}>
          <a href="https://wa.me/919036050108" target="_blank" rel="noreferrer" style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'16px 38px',borderRadius:'999px',background:'white',color:'var(--saffron)',fontWeight:600,fontSize:'1rem',textDecoration:'none' }}>💬 WhatsApp Us</a>
          <a href="tel:+918061160400" style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'16px 38px',borderRadius:'999px',background:'rgba(255,255,255,0.15)',color:'white',border:'2px solid rgba(255,255,255,0.4)',fontWeight:600,fontSize:'1rem',textDecoration:'none' }}>📞 080-6116-0400</a>
        </div>
      </section>
      <style>{`@media(max-width:1000px){.svc-layout{grid-template-columns:1fr!important}aside{position:static!important;max-height:none!important}}`}</style>
    </>
  )
}

function ServiceGrid({ items, badgeColors, badgeLabels, onBook }: {
  items: typeof SERVICES; badgeColors: Record<string,string>; badgeLabels: Record<string,string>; onBook:(n:string)=>void
}) {
  return (
    <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(190px,1fr))',gap:16 }}>
      {items.map(s => (
        <div key={s.id} style={{ background:'white',borderRadius:14,border:'1px solid var(--border)',overflow:'hidden',display:'flex',flexDirection:'column',transition:'all 0.25s' }} className="pc-card">
          <div style={{ height:105,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2.5rem',background:'linear-gradient(135deg,#FEF3C7,#FED7AA)',position:'relative' }}>
            {s.emoji}
            {s.badge && (
              <span style={{ position:'absolute',top:7,right:7,fontSize:'0.58rem',fontWeight:700,padding:'2px 7px',borderRadius:'999px',color:'white',textTransform:'uppercase',background:badgeColors[s.badge]||'#F97316' }}>
                {badgeLabels[s.badge]||s.badge}
              </span>
            )}
            {s.isSamskara && (
              <span style={{ position:'absolute',top:7,left:7,fontSize:'0.65rem',background:'rgba(255,251,245,0.9)',color:'#C2540A',padding:'2px 7px',borderRadius:'999px',fontWeight:700,border:'1px solid rgba(249,115,22,0.3)' }}>
                Samskara
              </span>
            )}
          </div>
          <div style={{ padding:'12px 13px 14px',flex:1,display:'flex',flexDirection:'column' }}>
            <div style={{ fontFamily:'var(--font-display)',fontSize:'0.88rem',fontWeight:600,color:'var(--text-dark)',lineHeight:1.3,marginBottom:6 }}>{s.name}</div>
            <div style={{ fontSize:'0.7rem',color:'var(--text-faint)',marginTop:'auto',marginBottom:10 }}>
              {s.price.startsWith('₹')
                ? <>From <strong style={{ color:'var(--saffron)',fontSize:'0.86rem' }}>{s.price.split('–')[0].trim()}</strong></>
                : s.price}
            </div>
            {/* Action buttons row */}
            <div style={{ display:'flex',gap:6 }}>
              <Link href={`/puja/${s.id}`}
                style={{ flex:1,padding:'6px 8px',borderRadius:8,border:'1.5px solid var(--border)',color:'var(--text-muted)',background:'var(--ivory-warm)',fontFamily:'var(--font-body)',fontSize:'0.72rem',fontWeight:600,textAlign:'center',textDecoration:'none',transition:'all 0.18s' }}
                className="details-btn">
                Details
              </Link>
              <button onClick={() => onBook(s.name)}
                style={{ flex:1,padding:'6px 8px',borderRadius:8,border:'1.5px solid var(--saffron)',color:'var(--saffron)',background:'transparent',fontFamily:'var(--font-body)',fontSize:'0.72rem',fontWeight:700,cursor:'pointer',transition:'all 0.18s' }}
                className="book-btn">
                Book
              </button>
            </div>
          </div>
        </div>
      ))}
      <style>{`
        .pc-card:hover{transform:translateY(-4px);box-shadow:0 12px 36px rgba(249,115,22,0.14);border-color:var(--border-warm)!important}
        .details-btn:hover{background:var(--ivory-mid)!important;border-color:var(--text-muted)!important;color:var(--text-dark)!important}
        .book-btn:hover{background:var(--saffron)!important;color:white!important}
      `}</style>
    </div>
  )
}
