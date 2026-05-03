'use client'
import Image from 'next/image'

export default function YagnaKunda() {
  return (
    <div style={{
      position: 'relative',
      width: 470, height: 470,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      {/* Decorative rings */}
      {[470, 418, 366].map((size, i) => (
        <div key={size} style={{
          position: 'absolute',
          width: size, height: size,
          borderRadius: '50%',
          border: i === 1 ? '0.5px solid rgba(180,83,9,0.14)' : '1px dashed rgba(249,115,22,0.20)',
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          animation: `${i % 2 === 0 ? 'ringCCW' : 'ringCW'} ${[30, 22, 42][i]}s linear infinite`,
        }} />
      ))}

      {/* Petal dots ring */}
      <PetalRing />

      {/* Ground glow */}
      <div style={{
        position: 'absolute', bottom: 40, left: '50%',
        transform: 'translateX(-50%)',
        width: 200, height: 32,
        background: 'radial-gradient(ellipse, rgba(230,126,34,0.35) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'kGlow 2s ease-in-out infinite',
      }} />

      {/* The kunda image — no rotation, clean display */}
      <div style={{
        position: 'relative',
        width: 340, height: 340,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        filter: 'drop-shadow(0 16px 40px rgba(192,57,43,0.3)) drop-shadow(0 0 20px rgba(249,115,22,0.2))',
      }}>
        <Image
          src="/images/yagna-kunda.png"
          alt="Yagna Kunda with sacred fire"
          width={340}
          height={340}
          style={{ objectFit: 'contain' }}
          priority
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
  const r = 213
  const dots = Array.from({ length: count }, (_, i) => {
    const a = (i / count) * 2 * Math.PI
    return {
      x: 235 + r * Math.cos(a),
      y: 235 + r * Math.sin(a),
      sz: i % 3 === 0 ? 10 : 7,
      op: i % 3 === 0 ? 0.55 : 0.3,
    }
  })

  return (
    <div style={{
      position: 'absolute',
      width: 470, height: 470,
      top: '50%', left: '50%',
      transform: 'translate(-50%,-50%)',
      animation: 'ringCCW 30s linear infinite',
    }}>
      {dots.map((d, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: d.sz, height: d.sz,
          borderRadius: '50%',
          background: `rgba(249,115,22,${d.op})`,
          left: d.x, top: d.y,
          transform: 'translate(-50%,-50%)',
        }} />
      ))}
    </div>
  )
}
