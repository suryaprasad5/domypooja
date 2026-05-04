'use client'
import Image from 'next/image'

export default function YagnaKunda() {
  return (
    <div style={{
      position: 'relative',
      /* Fill available height of the hero column minus nav,
         capped so it never overflows. vw cap ensures it fits on wide screens too. */
      width:  'min(calc(100vh - 72px), 55vw)',
      height: 'min(calc(100vh - 72px), 55vw)',
      maxWidth: 700,
      maxHeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}>

      {/* Decorative rings — scaled relative to container via % */}
      {[92, 82, 72].map((pct, i) => (
        <div key={pct} style={{
          position: 'absolute',
          width: `${pct}%`,
          height: `${pct}%`,
          borderRadius: '50%',
          border: i === 1
            ? '0.5px solid rgba(180,83,9,0.14)'
            : '1px dashed rgba(249,115,22,0.20)',
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          animation: `${i % 2 === 0 ? 'ringCCW' : 'ringCW'} ${[30, 22, 42][i]}s linear infinite`,
        }} />
      ))}

      {/* Petal dots — also % based */}
      <PetalRing />

      {/* Ground glow */}
      <div style={{
        position: 'absolute',
        bottom: '8%', left: '50%',
        transform: 'translateX(-50%)',
        width: '40%', height: 28,
        background: 'radial-gradient(ellipse, rgba(230,126,34,0.35) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'kGlow 2s ease-in-out infinite',
      }} />

      {/* Image — fills 88% of the container */}
      <div style={{
        position: 'relative',
        width: '88%',
        height: '88%',
        filter: 'drop-shadow(0 16px 48px rgba(192,57,43,0.32)) drop-shadow(0 0 24px rgba(249,115,22,0.18))',
      }}>
        <Image
          src="/images/yagna-kunda.png"
          alt="Yagna Kunda with sacred fire"
          fill
          style={{ objectFit: 'contain' }}
          priority
          sizes="(max-width: 900px) 0px, 55vw"
        />
      </div>

      <style>{`
        @keyframes ringCW  { from{transform:translate(-50%,-50%) rotate(0deg)}   to{transform:translate(-50%,-50%) rotate(360deg)} }
        @keyframes ringCCW { from{transform:translate(-50%,-50%) rotate(0deg)}   to{transform:translate(-50%,-50%) rotate(-360deg)} }
        @keyframes kGlow   { 0%,100%{opacity:0.5} 50%{opacity:1} }
        @media (prefers-reduced-motion: reduce) {
          [style*="ringCW"],[style*="ringCCW"] { animation: none !important; }
        }
      `}</style>
    </div>
  )
}

function PetalRing() {
  const count = 24
  const dots = Array.from({ length: count }, (_, i) => {
    const a = (i / count) * 2 * Math.PI
    // Using percentage positions: centre = 50%, orbit at 46%
    return {
      xPct: 50 + 46 * Math.cos(a),
      yPct: 50 + 46 * Math.sin(a),
      sz: i % 3 === 0 ? 10 : 7,
      op: i % 3 === 0 ? 0.55 : 0.28,
    }
  })

  return (
    <div style={{
      position: 'absolute',
      width: '100%', height: '100%',
      top: 0, left: 0,
      animation: 'ringCCW 30s linear infinite',
    }}>
      {dots.map((d, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: d.sz, height: d.sz,
          borderRadius: '50%',
          background: `rgba(249,115,22,${d.op})`,
          left: `${d.xPct}%`,
          top:  `${d.yPct}%`,
          transform: 'translate(-50%,-50%)',
        }} />
      ))}
    </div>
  )
}
