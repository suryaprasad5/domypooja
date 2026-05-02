const STATS = [
  { num: '85,000+', label: 'Pujas & Homas Performed' },
  { num: '2,100+',  label: 'Verified Pandits & Purohits' },
  { num: '30+',     label: 'Cities Across India' },
  { num: '400+',    label: 'Vedic Services Available' },
  { num: '4.9★',   label: 'Average Customer Rating' },
]
export default function StatsBar() {
  return (
    <div style={{ padding: '0 8%', transform: 'translateY(-28px)', position: 'relative', zIndex: 10 }}>
      <div style={{
        display: 'flex', background: 'white',
        borderRadius: 18, border: '1px solid var(--border)',
        overflow: 'hidden', boxShadow: '0 8px 32px rgba(249,115,22,0.12)',
      }} className="stats-bar">
        {STATS.map((s, i) => (
          <div key={s.label} style={{
            flex: 1, padding: '28px 20px', textAlign: 'center',
            borderRight: i < STATS.length - 1 ? '1px solid var(--border)' : 'none',
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--saffron)', lineHeight: 1, marginBottom: 6 }}>{s.num}</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-faint)', fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:640px){.stats-bar{flex-wrap:wrap}.stats-bar>div{border-right:none!important;border-bottom:1px solid var(--border);min-width:50%}}`}</style>
    </div>
  )
}
