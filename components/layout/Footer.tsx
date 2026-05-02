import Link from 'next/link'

const popularPujas = [
  { href: '/puja/griha-pravesh', label: 'Griha Pravesh Puja' },
  { href: '/puja/satyanarayan', label: 'Satyanarayan Puja' },
  { href: '/puja/ganapati-homa', label: 'Maha Ganapati Homa' },
  { href: '/puja/rudrabhishek', label: 'Rudrabhishek Puja' },
  { href: '/puja/marriage', label: 'Marriage Puja' },
  { href: '/puja/namakaran', label: 'Namakaran Puja' },
  { href: '/puja/navagraha', label: 'Navagraha Puja' },
  { href: '/puja/office-puja', label: 'Office / Business Puja' },
]

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/puja-services', label: 'Puja Services' },
  { href: '/epuja', label: 'E-Puja Online' },
  { href: '/blog', label: 'Blog & Articles' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/contact', label: 'Pandit Registration' },
]

const cities = ['Bangalore','Mumbai','Delhi NCR','Hyderabad','Chennai','Pune','Kolkata','Ahmedabad']

export default function Footer() {
  const s = {
    col: { display: 'flex', flexDirection: 'column' as const, gap: 10 },
    link: { color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', textDecoration: 'none' } as React.CSSProperties,
    h4: { fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'white', marginBottom: 16, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.08)' } as React.CSSProperties,
  }

  return (
    <footer style={{ background: 'var(--charcoal)', color: 'rgba(255,255,255,0.6)', padding: '80px 8% 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr 1fr 1fr', gap: 56, marginBottom: 56 }}
        className="footer-grid">

        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 700, color: 'white', marginBottom: 14 }}>
            Do<span style={{ color: 'var(--saffron)' }}>My</span>Pooja
          </div>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.75, marginBottom: 24 }}>
            India's trusted platform for sacred, hassle-free Puja services. Book verified Pandits and Purohits across 30+ cities. Authentic Vedic ceremonies with all samagri included.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { icon: '📞', href: 'tel:+918061160400', label: '080-6116-0400' },
              { icon: '✉️', href: 'mailto:namaste@domypooja.com', label: 'namaste@domypooja.com' },
              { icon: '📍', href: '#', label: 'Bengaluru — 560076, India' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.82rem' }}>
                {c.icon} <a href={c.href} style={s.link}>{c.label}</a>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
            {['📘','📸','🐦'].map(icon => (
              <a key={icon} href="#" style={{
                width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
              }}>{icon}</a>
            ))}
            <a href="https://wa.me/919036050108" target="_blank" rel="noreferrer"
              style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>💬</a>
          </div>
        </div>

        <div>
          <h4 style={s.h4}>Popular Pujas</h4>
          <div style={s.col}>
            {popularPujas.map(p => <Link key={p.href} href={p.href} style={s.link}>{p.label}</Link>)}
          </div>
        </div>

        <div>
          <h4 style={s.h4}>Quick Links</h4>
          <div style={s.col}>
            {quickLinks.map(l => <Link key={l.label} href={l.href} style={s.link}>{l.label}</Link>)}
          </div>
        </div>

        <div>
          <h4 style={s.h4}>Cities We Serve</h4>
          <div style={s.col}>
            {cities.map(c => (
              <Link key={c} href="/puja-services" style={s.link}>Pandits in {c}</Link>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', flexWrap: 'wrap', gap: 14 }}>
        <div>Copyright © DoMyPooja.com 2026 — All Rights Reserved. Secure payments by Razorpay.</div>
        <div style={{ display: 'flex', gap: 20 }}>
          {['Privacy Policy','Terms of Use','Cancellation & Refund'].map(t => (
            <a key={t} href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{t}</a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; } }
        @media (max-width: 640px)  { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
