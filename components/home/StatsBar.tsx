const STATS = [
  { num: 'Thousands of', sub: 'Poojas Performed' },
  { num: 'Verified',     sub: 'Well Trained Purohits & Pandits' },
  { num: 'In & Around',  sub: 'Bengaluru' },
  { num: '118+',         sub: 'Vedic Services Available' },
  { num: '4.9★',        sub: 'Average Customer Rating' },
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
          <div key={s.sub} style={{
            flex: 1, padding: '22px 16px', textAlign: 'center',
            borderRight: i < STATS.length - 1 ? '1px solid var(--border)' : 'none',
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--saffron)', lineHeight: 1, marginBottom: 5 }}>{s.num}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontWeight: 500, lineHeight: 1.3 }}>{s.sub}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:900px){.stats-bar{flex-wrap:wrap}.stats-bar>div{border-right:none!important;border-bottom:1px solid var(--border);min-width:50%}}
        @media(max-width:480px){.stats-bar>div{min-width:100%}}
      `}</style>
    </div>
  )
}
