import Link from 'next/link'
import SanskritQuote from '@/components/shared/SanskritQuote'
import { Q } from '@/data/quotes'
import { MOTTO } from '@/lib/config'

const popularPujas = [
  { href:'/puja/gruhapravesha',       label:'Gruhapravesha Pooja' },
  { href:'/puja/satyanarayana-pooja', label:'Satyanarayana Pooja' },
  { href:'/puja/gana-homa',           label:'Maha Ganapati Homa' },
  { href:'/puja/rudrabhishekam',      label:'Rudrabhishekam Pooja' },
  { href:'/puja/marriage',            label:'Marriage Ceremony' },
  { href:'/puja/namakarana',          label:'Namakarana' },
  { href:'/puja/upanayana',           label:'Upanayana (Thread Ceremony)' },
  { href:'/puja/office-subscription', label:'Subscribe for Office Pooja' },
]

const quickLinks = [
  { href:'/about',          label:'About Us' },
  { href:'/puja-services',  label:'Pooja Services' },
  { href:'/puja-services?filter=samskaras', label:'Shodasha Samskaras' },
  { href:'/epuja',          label:'E-Pooja Online' },
  { href:'/blog',           label:'Blog & Articles' },
  { href:'/contact',        label:'Contact Us' },
  { href:'/account',        label:'My Account / Login' },
  { href:'/contact',        label:'Purohit/Pandit Registration' },
]

export default function Footer() {
  const s = {
    col:  { display:'flex', flexDirection:'column' as const, gap:10 },
    link: { color:'rgba(255,255,255,0.55)', fontSize:'0.82rem', textDecoration:'none' } as React.CSSProperties,
    h4:   { fontFamily:'var(--font-display)', fontSize:'1rem', color:'white', marginBottom:16, paddingBottom:10, borderBottom:'1px solid rgba(255,255,255,0.08)' } as React.CSSProperties,
  }

  return (
    <footer style={{ background:'var(--charcoal)', color:'rgba(255,255,255,0.6)', padding:'80px 8% 32px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'2.2fr 1fr 1fr 1fr', gap:56, marginBottom:56 }} className="footer-grid">
        <div>
          <div style={{ fontFamily:'var(--font-display)', fontSize:'1.7rem', fontWeight:700, color:'white', marginBottom:4 }}>
            Do<span style={{ color:'var(--saffron)' }}>My</span>Pooja
          </div>
          <div lang="sa" title={MOTTO.en} style={{ fontFamily:'var(--font-devan)', fontSize:'0.95rem', color:'#FDBA74' }}>{MOTTO.sa}</div>
          <div style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.45)', marginBottom:14 }}>{MOTTO.roman} — {MOTTO.en}</div>
          <p style={{ fontSize:'0.85rem', lineHeight:1.75, marginBottom:16 }}>
            Bengaluru&apos;s trusted platform for sacred, hassle-free Pooja services. Verified Purohits/Pandits · Saamagri & Alankara arranged on request · Shodasha Samskaras, Homas & General Poojas.
          </p>
          {/* Free muhurtam highlight */}
          <div style={{ background:'rgba(249,115,22,0.15)', border:'1px solid rgba(249,115,22,0.3)', borderRadius:10, padding:'10px 14px', marginBottom:18, fontSize:'0.8rem', color:'#FED7AA', lineHeight:1.5 }}>
            🎁 <strong>First-time users:</strong> Get your Muhurtam (Auspicious Day) selection absolutely FREE!
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {[
              { icon:'📞', href:'tel:+919742155777',               label:'+91 97421 55777' },
              { icon:'✉️', href:'mailto:namaste@domypooja.com',    label:'namaste@domypooja.com' },
              { icon:'📍', href:'#',                               label:'Bengaluru — 560076, Karnataka' },
            ].map(c => (
              <div key={c.label} style={{ display:'flex', alignItems:'center', gap:10, fontSize:'0.82rem' }}>
                {c.icon} <a href={c.href} style={s.link}>{c.label}</a>
              </div>
            ))}
          </div>
          <div style={{ display:'flex', gap:10, marginTop:18 }}>
            {['📘','📸','🐦'].map(icon => (
              <a key={icon} href="#" style={{ width:36, height:36, borderRadius:'50%', background:'rgba(255,255,255,0.08)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1rem' }}>{icon}</a>
            ))}
            <a href="https://wa.me/919742155777" target="_blank" rel="noreferrer"
              style={{ width:36, height:36, borderRadius:'50%', background:'rgba(255,255,255,0.08)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1rem' }}>💬</a>
          </div>
        </div>

        <div>
          <h4 style={s.h4}>Popular Services</h4>
          <div style={s.col}>
            {popularPujas.map(p => <Link key={p.label} href={p.href} style={s.link}>{p.label}</Link>)}
          </div>
        </div>

        <div>
          <h4 style={s.h4}>Quick Links</h4>
          <div style={s.col}>
            {quickLinks.map(l => <Link key={l.label} href={l.href} style={s.link}>{l.label}</Link>)}
          </div>
        </div>

        <div>
          <h4 style={s.h4}>Service Areas</h4>
          <div style={s.col}>
            <span style={{ ...s.link, color:'rgba(255,255,255,0.85)', fontWeight:600 }}>✅ Bengaluru</span>
            {['Mumbai','Delhi NCR','Hyderabad','Chennai','Pune','Kolkata'].map(c => (
              <span key={c} style={{ ...s.link, display:'flex', alignItems:'center', gap:6 }}>
                {c} <span style={{ fontSize:'0.65rem', background:'rgba(255,255,255,0.08)', padding:'1px 6px', borderRadius:'999px' }}>Coming Soon</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ textAlign:'center', padding:'8px 0 30px' }}>
        <SanskritQuote quote={Q.purnam} variant="dark" compact />
      </div>

      <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', paddingTop:28, display:'flex', alignItems:'center', justifyContent:'space-between', fontSize:'0.78rem', flexWrap:'wrap', gap:14 }}>
        <div>Copyright © DoMyPooja.com 2026 — All Rights Reserved. Secure payments by Razorpay.</div>
        <div style={{ display:'flex', gap:20 }}>
          {['Privacy Policy','Terms of Use','Cancellation & Refund'].map(t => (
            <a key={t} href="#" style={{ color:'rgba(255,255,255,0.4)', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:1100px){.footer-grid{grid-template-columns:1fr 1fr!important;gap:36px!important}}
        @media(max-width:640px){.footer-grid{grid-template-columns:1fr!important}}
      `}</style>
    </footer>
  )
}
