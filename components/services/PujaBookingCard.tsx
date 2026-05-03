'use client'
import { useState } from 'react'
import { PujaService } from '@/data/services'
import { PujaDetail } from '@/data/puja-details'

const CITIES = ['Bangalore','Mumbai','Delhi NCR','Hyderabad','Chennai','Pune','Kolkata','Ahmedabad']
const LANGS  = ['Kannada','Hindi','Telugu','Tamil','Bengali','Marathi','Malayalam','Gujarati']

export default function PujaBookingCard({ puja, detail }: { puja: PujaService; detail: PujaDetail | null }) {
  const [pkg,   setPkg]   = useState(0)
  const [city,  setCity]  = useState('')
  const [lang,  setLang]  = useState('')
  const [date,  setDate]  = useState('')
  const [phone, setPhone] = useState('')

  const packages = detail?.packages || [
    { name:'Basic',    price: puja.price.startsWith('₹') ? puja.price.split('–')[0].trim() : 'On request', duration:'2–3 hrs', pandits:1, highlights:['Verified Pandit','Complete samagri','Core rituals','Aarti & Prasad'] },
    { name:'Standard', price:'On request', duration:'3–4 hrs', pandits:1, highlights:['All Basic items','Additional rituals','Extended homa','Navagraha Pooja'] },
    { name:'Premium',  price:'On request', duration:'4+ hrs',  pandits:2, highlights:['All Standard items','Full ceremony','Brahmin Bhoj','Dedicated coordinator'] },
  ]

  const selectedPkg = packages[pkg]

  const inp: React.CSSProperties = {
    width:'100%', padding:'10px 13px',
    border:'1.5px solid var(--border)', borderRadius:9,
    fontFamily:'var(--font-body)', fontSize:'0.86rem',
    color:'var(--text-body)', background:'var(--ivory-warm)',
    outline:'none',
  }

  const submit = () => {
    if (!city || !date || !lang || !phone) { alert('Please fill in all fields to continue.'); return }
    const msg = `Booking Request — DoMyPooja\n\nPuja: ${puja.name}\nPackage: ${selectedPkg.name} (${selectedPkg.price})\nCity: ${city}\nDate: ${date}\nLanguage: ${lang}\nPhone: ${phone}`
    window.open(`https://wa.me/919036050108?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div style={{ position:'sticky', top:'calc(72px + 20px)', background:'white', borderRadius:18, border:'1px solid var(--border-warm)', boxShadow:'0 8px 32px rgba(249,115,22,0.12)', overflow:'hidden' }}>
      {/* Header */}
      <div style={{ background:'linear-gradient(135deg,var(--saffron),#C2540A)', color:'white', padding:'22px 24px 18px' }}>
        <div style={{ fontSize:'0.72rem', opacity:0.8, marginBottom:3 }}>Starting from</div>
        <div style={{ fontFamily:'var(--font-display)', fontSize:'2rem', fontWeight:700, lineHeight:1 }}>
          {packages[0].price}
        </div>
        <div style={{ fontSize:'0.75rem', opacity:0.75, marginTop:5 }}>All-inclusive · Samagri + Pandit</div>
      </div>

      <div style={{ padding:'20px 22px' }}>
        {/* Package selector */}
        <div style={{ fontSize:'0.72rem', fontWeight:700, color:'var(--text-faint)', textTransform:'uppercase', letterSpacing:'0.8px', marginBottom:10 }}>Select Package</div>
        <div style={{ display:'flex', gap:6, marginBottom:18 }}>
          {packages.map((p, i) => (
            <button key={p.name} onClick={() => setPkg(i)}
              style={{
                flex:1, padding:'8px 6px',
                borderRadius:10,
                border:`1.5px solid ${pkg===i ? 'var(--saffron)' : 'var(--border)'}`,
                background: pkg===i ? 'rgba(249,115,22,0.06)' : 'white',
                cursor:'pointer', fontFamily:'var(--font-body)',
                fontSize:'0.78rem', fontWeight:pkg===i?700:500,
                color: pkg===i ? 'var(--saffron-deep)' : 'var(--text-muted)',
                transition:'all 0.18s',
              }}>
              {p.name}
              <div style={{ fontSize:'0.68rem', fontWeight:600, marginTop:2 }}>{p.price}</div>
            </button>
          ))}
        </div>

        {/* Selected package highlights */}
        <div style={{ background:'var(--ivory-warm)', borderRadius:10, padding:'12px 14px', marginBottom:16 }}>
          <div style={{ fontSize:'0.72rem', fontWeight:700, color:'var(--text-faint)', textTransform:'uppercase', letterSpacing:'0.8px', marginBottom:8 }}>
            {selectedPkg.name} includes
          </div>
          {selectedPkg.highlights.slice(0, 4).map(h => (
            <div key={h} style={{ display:'flex', alignItems:'center', gap:7, fontSize:'0.78rem', color:'var(--text-body)', marginBottom:5 }}>
              <span style={{ color:'var(--saffron)', fontWeight:700, flexShrink:0 }}>✓</span>{h}
            </div>
          ))}
          <div style={{ fontSize:'0.72rem', color:'var(--text-faint)', marginTop:6 }}>
            ⏱️ {selectedPkg.duration} · 👨‍🦳 {selectedPkg.pandits} Pandit{selectedPkg.pandits > 1 ? 's' : ''}
          </div>
        </div>

        {/* Form */}
        {[
          { label:'Your City',       el:<select value={city} onChange={e=>setCity(e.target.value)} style={inp}><option value="">Select City</option>{CITIES.map(c=><option key={c}>{c}</option>)}</select> },
          { label:'Preferred Date',  el:<input type="date" value={date} onChange={e=>setDate(e.target.value)} style={inp}/> },
          { label:'Pandit Language', el:<select value={lang} onChange={e=>setLang(e.target.value)} style={inp}><option value="">Select Language</option>{LANGS.map(l=><option key={l}>{l}</option>)}</select> },
          { label:'Your Phone',      el:<input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+91 98765 43210" style={inp}/> },
        ].map(f => (
          <div key={f.label} style={{ marginBottom:12 }}>
            <label style={{ display:'block', fontSize:'0.72rem', fontWeight:700, color:'var(--text-faint)', textTransform:'uppercase', letterSpacing:'0.8px', marginBottom:5 }}>{f.label}</label>
            {f.el}
          </div>
        ))}

        <button onClick={submit}
          style={{ width:'100%', padding:'13px', borderRadius:'999px', background:'linear-gradient(135deg,var(--saffron),#C2540A)', color:'white', border:'none', fontFamily:'var(--font-body)', fontSize:'0.95rem', fontWeight:700, cursor:'pointer', boxShadow:'0 6px 20px rgba(249,115,22,0.3)', marginBottom:8, marginTop:4 }}>
          🙏 Book This Puja
        </button>
        <a href={`https://wa.me/919036050108?text=${encodeURIComponent(`I want to book: ${puja.name} — ${selectedPkg.name} Package`)}`}
          target="_blank" rel="noreferrer"
          style={{ display:'block', width:'100%', padding:'11px', borderRadius:'999px', border:'2px solid #0F766E', color:'#0F766E', fontWeight:700, fontSize:'0.88rem', textAlign:'center', textDecoration:'none', marginBottom:14 }}>
          💬 Book via WhatsApp
        </a>

        {/* Trust indicators */}
        <div style={{ display:'flex', justifyContent:'space-around', fontSize:'0.7rem', color:'var(--text-faint)', textAlign:'center', paddingTop:12, borderTop:'1px solid var(--border)' }}>
          {['🔒 Secure', '↩️ Refund', '✅ Verified', '📞 24/7'].map(t => (
            <div key={t}>{t}</div>
          ))}
        </div>
      </div>

      {/* Contact strip */}
      <div style={{ background:'var(--ivory-warm)', borderTop:'1px solid var(--border)', padding:'14px 22px', textAlign:'center' }}>
        <p style={{ fontSize:'0.75rem', color:'var(--text-faint)', marginBottom:5 }}>Have questions? Talk to our experts</p>
        <a href="tel:+918061160400" style={{ fontWeight:700, color:'var(--saffron)', fontSize:'0.95rem', textDecoration:'none' }}>📞 080-6116-0400</a>
        <p style={{ fontSize:'0.72rem', color:'var(--text-faint)', marginTop:3 }}>Mon–Sun: 8 AM – 8 PM</p>
      </div>
    </div>
  )
}
