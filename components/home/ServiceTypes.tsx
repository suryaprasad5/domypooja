import Link from 'next/link'

const SVCS = [
  {
    href: '/puja-services?filter=samskaras',
    icon: '🕉️',
    name: 'Shodasha Samskaras',
    sub: '16 sacred life ceremonies — from birth to last rites',
    color: 'rgba(249,115,22,0.1)',
    badge: 'Life Ceremonies',
  },
  {
    href: '/puja-services?filter=homa',
    icon: '🔥',
    name: 'Homas, Shantis & Remedies',
    sub: 'Sacred fire rituals, dosha remedies & planetary shantis',
    color: 'rgba(180,83,9,0.1)',
    badge: 'Fire Rituals',
  },
  {
    href: '/puja-services',
    icon: '🪔',
    name: 'General Poojas',
    sub: 'Griha Pravesh, Satyanarayana, festival & daily poojas',
    color: 'rgba(15,118,110,0.1)',
    badge: 'Poojas',
  },
  {
    href: '/epuja',
    icon: '📱',
    name: 'E-Pooja Online',
    sub: 'Live-streamed ceremonies for outstation & NRI families',
    color: 'rgba(100,16,200,0.06)',
    badge: 'Online',
  },
]

export default function ServiceTypes() {
  return (
    <section style={{ background: 'white', padding: '40px 8% 100px' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--saffron)', marginBottom: 14 }}>✦ Our Offerings ✦</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem,3.5vw,3rem)', fontWeight: 700, color: 'var(--text-dark)' }}>Explore What We Offer</h2>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg,var(--saffron),#F59E0B)', borderRadius: 2, margin: '16px auto 20px' }} />
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto' }}>
          From the 16 sacred Samskaras that mark every milestone of life, to powerful Homas and everyday Poojas — we cover every spiritual need of your family.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }} className="svc-grid">
        {SVCS.map(s => (
          <Link key={s.name} href={s.href} style={{ textDecoration: 'none', background: 'white', borderRadius: 18, padding: '28px 22px 24px', textAlign: 'center', border: '1px solid var(--border)', transition: 'all 0.3s', display: 'block', position: 'relative' }} className="svc-card">
            {/* Badge */}
            <div style={{ position: 'absolute', top: 14, right: 14, background: 'var(--saffron-glow)', color: 'var(--saffron-deep)', fontSize: '0.62rem', fontWeight: 700, padding: '2px 8px', borderRadius: '999px', letterSpacing: '0.5px', border: '1px solid var(--border-warm)' }}>
              {s.badge}
            </div>
            <div style={{ width: 70, height: 70, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 16px', background: s.color }}>
              {s.icon}
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.08rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 8, lineHeight: 1.25 }}>{s.name}</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-faint)', lineHeight: 1.5 }}>{s.sub}</div>
          </Link>
        ))}
      </div>
      <style>{`
        .svc-card:hover{transform:translateY(-5px);box-shadow:0 20px 60px rgba(249,115,22,0.18);border-color:var(--border-warm)!important}
        @media(max-width:900px){.svc-grid{grid-template-columns:1fr 1fr!important}}
      `}</style>
    </section>
  )
}
