const ADVS = [
  { icon: '✔️', teal: false, title: 'Verified & Well-Trained Purohits/Pandits', desc: 'All our Purohits and Pandits are verified, experienced and trained in authentic Vedic traditions across all communities.' },
  { icon: '🗣️', teal: true,  title: 'Kannada, Telugu, Hindi & English', desc: 'We provide services in Kannada, Telugu, Hindi and English — ensuring ceremonies are performed in your preferred language.' },
  { icon: '📦', teal: false, title: 'Saamagri Included (If Opted)', desc: 'Complete Saamagri including Alankara/Decoration arranged and delivered. Pricing shared based on your exact requirements.' },
  { icon: '🕉️', teal: true,  title: 'All Three Main Categories Covered', desc: 'Shodasha Samskaras, Homas/Shantis/Remedies and General Poojas — every spiritual need of your family in one place.' },
  { icon: '💬', teal: false, title: 'Constant Customer Updates', desc: 'We keep you informed at every step — from booking confirmation to ceremony completion. Dedicated support throughout.' },
  { icon: '🎁', teal: true,  title: 'Free Muhurtam for First-Time Users', desc: 'New to DoMyPooja? Get your auspicious date (Muhurtam) identified absolutely free of cost for your first booking.' },
]
export default function Advantage() {
  return (
    <section style={{ background: 'var(--ivory-warm)', padding: '100px 8%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 70, alignItems: 'center' }} className="adv-grid">
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--saffron)', marginBottom: 14 }}>✦ Why Choose Us ✦</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem,3.5vw,3rem)', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 8 }}>The DoMyPooja Advantage</h2>
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg,var(--saffron),#F59E0B)', borderRadius: 2, margin: '0 0 20px' }} />
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 36 }}>We combine authentic Vedic tradition with seamless coordination to deliver spiritual experiences — completely hassle-free.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {ADVS.map(a => (
              <div key={a.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'white', borderRadius: 16, padding: 18, border: '1px solid var(--border)' }}>
                <div style={{ width: 48, height: 48, minWidth: 48, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', background: a.teal ? 'rgba(15,118,110,0.1)' : 'rgba(249,115,22,0.08)' }}>{a.icon}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: 3 }}>{a.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 360, height: 360, borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%', background: 'linear-gradient(135deg,rgba(249,115,22,0.1),rgba(15,118,110,0.1))', border: '2px solid rgba(249,115,22,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <span style={{ fontFamily: 'var(--font-devan)', fontSize: '6rem', color: 'var(--saffron)', opacity: 0.35 }}>ॐ</span>
            {[
              { top: '6%',  left: '-2%',  text: '🕉️ Samskaras' },
              { top: '6%',  right: '-2%', text: '🔥 Homas' },
              { bottom: '6%', left: '-2%', text: '🪔 Poojas' },
              { bottom: '6%', right: '-2%', text: '🎁 Free Muhurtam' },
            ].map(p => (
              <div key={p.text} style={{ position: 'absolute', background: 'white', borderRadius: 12, padding: '8px 14px', boxShadow: '0 6px 20px rgba(0,0,0,0.09)', border: '1px solid var(--border-warm)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-dark)', whiteSpace: 'nowrap', ...p }}>
                {p.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.adv-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
