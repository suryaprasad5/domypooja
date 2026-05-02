'use client'
import { useState } from 'react'
import { PujaService } from '@/data/services'

const PACKAGES = [
  { name: 'Basic',    desc: '1 Pandit · 2 hrs · Core rituals',     price: null },
  { name: 'Standard', desc: '1 Pandit · 3 hrs · All rituals + Homa', price: null },
  { name: 'Premium',  desc: '2 Pandits · 4 hrs · Full ceremony',   price: null },
]

const CITIES = ['Bangalore','Mumbai','Delhi NCR','Hyderabad','Chennai','Pune','Kolkata','Ahmedabad']
const LANGS  = ['Kannada','Hindi','Telugu','Tamil','Bengali','Marathi','Malayalam','Gujarati']

export default function PujaBookingCard({ puja }: { puja: PujaService }) {
  const [pkg,  setPkg]  = useState(0)
  const [city, setCity] = useState('')
  const [lang, setLang] = useState('')
  const [date, setDate] = useState('')
  const [phone,setPhone]= useState('')

  const basePrice = puja.price.startsWith('₹') ? puja.price.split('–')[0].trim() : null

  const submit = () => {
    if (!city || !date || !lang || !phone) { alert('Please fill in all fields to continue.'); return }
    const msg = `I would like to book: ${puja.name}\nPackage: ${PACKAGES[pkg].name}\nCity: ${city}\nDate: ${date}\nLanguage: ${lang}\nPhone: ${phone}`
    window.open(`https://wa.me/919036050108?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const inp: React.CSSProperties = {
    width: '100%', padding: '11px 14px',
    border: '1.5px solid var(--border)', borderRadius: 10,
    fontFamily: 'var(--font-body)', fontSize: '0.88rem',
    color: 'var(--text-body)', background: 'var(--ivory-warm)',
    outline: 'none', transition: 'border-color 0.2s',
  }

  return (
    <div style={{
      position: 'sticky', top: 'calc(72px + 20px)',
      background: 'white', borderRadius: 18,
      border: '1px solid var(--border-warm)',
      boxShadow: '0 8px 32px rgba(249,115,22,0.12)',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg,var(--saffron),var(--saffron-deep,#C2540A))', color:'white', padding:'24px 24px 20px' }}>
        <div style={{ fontSize:'0.75rem',opacity:0.8,marginBottom:4 }}>Starting from</div>
        <div style={{ fontFamily:'var(--font-display)',fontSize:'2.2rem',fontWeight:700,lineHeight:1 }}>
          {basePrice ?? 'On Request'}
        </div>
        <div style={{ fontSize:'0.78rem',opacity:0.75,marginTop:6 }}>All-inclusive · Samagri + Pandit</div>
      </div>

      <div style={{ padding: 24 }}>
        {/* Package selector */}
        <p style={{ fontSize:'0.78rem',fontWeight:700,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.8px',marginBottom:12 }}>Select Package</p>
        <div style={{ display:'flex',flexDirection:'column',gap:10,marginBottom:20 }}>
          {PACKAGES.map((p, i) => (
            <div key={p.name} onClick={() => setPkg(i)} style={{
              border: `1.5px solid ${pkg===i?'var(--saffron)':'var(--border)'}`,
              borderRadius: 14, padding:'14px 16px', cursor:'pointer',
              background: pkg===i?'rgba(249,115,22,0.04)':'white',
              transition:'all 0.2s', position:'relative',
            }}>
              <div style={{ fontWeight:600,fontSize:'0.88rem',color:'var(--text-dark)',marginBottom:2 }}>{p.name}</div>
              <div style={{ fontSize:'0.76rem',color:'var(--text-faint)' }}>{p.desc}</div>
            </div>
          ))}
        </div>

        {/* Form */}
        {[
          { label:'Your City',          el: <select value={city} onChange={e=>setCity(e.target.value)} style={inp}><option value="">Select City</option>{CITIES.map(c=><option key={c}>{c}</option>)}</select> },
          { label:'Preferred Date',     el: <input type="date" value={date} onChange={e=>setDate(e.target.value)} style={inp} /> },
          { label:'Pandit Language',    el: <select value={lang} onChange={e=>setLang(e.target.value)} style={inp}><option value="">Select Language</option>{LANGS.map(l=><option key={l}>{l}</option>)}</select> },
          { label:'Your Phone Number',  el: <input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+91 98765 43210" style={inp} /> },
        ].map(f => (
          <div key={f.label} style={{ marginBottom:16 }}>
            <label style={{ display:'block',fontSize:'0.78rem',fontWeight:700,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.8px',marginBottom:7 }}>{f.label}</label>
            {f.el}
          </div>
        ))}

        {/* Includes */}
        <div style={{ background:'var(--ivory-warm)',borderRadius:10,padding:'14px 16px',marginBottom:20 }}>
          <p style={{ fontSize:'0.75rem',fontWeight:700,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.8px',marginBottom:8 }}>Included in all packages</p>
          {['Verified & experienced Pandit','Complete puja samagri','Booking confirmation','WhatsApp updates'].map(item => (
            <div key={item} style={{ display:'flex',alignItems:'center',gap:8,fontSize:'0.8rem',color:'var(--text-body)',marginBottom:5 }}>
              <span style={{ color:'var(--teal,#0F766E)',fontWeight:700 }}>✓</span>{item}
            </div>
          ))}
        </div>

        <button onClick={submit} style={{
          width:'100%',padding:15,borderRadius:'999px',
          background:'linear-gradient(135deg,var(--saffron),var(--saffron-deep,#C2540A))',
          color:'white',border:'none',fontFamily:'var(--font-body)',
          fontSize:'1rem',fontWeight:600,cursor:'pointer',
          boxShadow:'0 6px 22px rgba(249,115,22,0.35)',marginBottom:10,
        }}>🙏 Book This Puja</button>

        <a href={`https://wa.me/919036050108?text=${encodeURIComponent(`I want to book: ${puja.name}`)}`}
          target="_blank" rel="noreferrer"
          style={{ display:'block',width:'100%',padding:'13px',borderRadius:'999px',border:'2px solid var(--teal,#0F766E)',color:'var(--teal,#0F766E)',fontWeight:600,fontSize:'0.9rem',textAlign:'center',textDecoration:'none' }}>
          💬 Book via WhatsApp
        </a>

        <div style={{ display:'flex',justifyContent:'center',gap:16,marginTop:16,fontSize:'0.73rem',color:'var(--text-faint)',textAlign:'center' }}>
          {['🔒 Secure Pay','↩️ Easy Refund','✅ Verified','📞 24/7 Support'].map(t => (
            <div key={t} style={{ display:'flex',flexDirection:'column',alignItems:'center',gap:3 }}>
              {t.split(' ').map((w,i) => <span key={i}>{w}</span>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
