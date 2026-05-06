'use client'
import Image from 'next/image'

export default function YagnaKunda() {
  return (
    <div style={{
      position: 'relative',
      width:  'min(calc(100vh - 72px), 58vw)',
      height: 'min(calc(100vh - 72px), 58vw)',
      maxWidth: 680,
      maxHeight: 680,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}>

      {/* Decorative rings only — petal dots removed */}
      {[96, 86, 76].map((pct, i) => (
        <div key={pct} style={{
          position: 'absolute',
          width: `${pct}%`,
          height: `${pct}%`,
          borderRadius: '50%',
          border: i === 1
            ? '0.8px solid rgba(180,83,9,0.18)'
            : '1px dashed rgba(249,115,22,0.25)',
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          animation: `${i % 2 === 0 ? 'ringCCW' : 'ringCW'} ${[30, 22, 42][i]}s linear infinite`,
        }} />
      ))}

      {/* Ground glow */}
      <div style={{
        position: 'absolute',
        bottom: '6%', left: '50%',
        transform: 'translateX(-50%)',
        width: '45%', height: 24,
        background: 'radial-gradient(ellipse, rgba(230,126,34,0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'kGlow 2s ease-in-out infinite',
      }} />

      {/* Image — 92% of container */}
      <div style={{
        position: 'relative',
        width: '92%',
        height: '92%',
        filter: 'drop-shadow(0 12px 40px rgba(192,57,43,0.25)) drop-shadow(0 0 20px rgba(249,115,22,0.15))',
      }}>
        <Image
          src="/images/yagna-kunda.png"
          alt="Yagna Kunda with sacred fire"
          fill
          style={{ objectFit: 'contain' }}
          priority
          sizes="(max-width: 768px) 80vw, 58vw"
        />
      </div>

      <style>{`
        @keyframes ringCW  { from{transform:translate(-50%,-50%) rotate(0deg)}   to{transform:translate(-50%,-50%) rotate(360deg)} }
        @keyframes ringCCW { from{transform:translate(-50%,-50%) rotate(0deg)}   to{transform:translate(-50%,-50%) rotate(-360deg)} }
        @keyframes kGlow   { 0%,100%{opacity:0.4} 50%{opacity:0.9} }
        @media (prefers-reduced-motion: reduce) {
          [style*="ringCW"],[style*="ringCCW"] { animation:none!important; }
        }
      `}</style>
    </div>
  )
}
