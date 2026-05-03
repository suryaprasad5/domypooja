'use client'
import Image from 'next/image'

export default function YagnaKunda() {
  return (
    <div style={{
      position: 'relative',
      width: 840, height: 840,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>

      {/* Decorative rings */}
      {[470, 418, 366].map((size, i) => (
        <div key={size} style={{
          position: 'absolute',
          width: size, height: size,
          borderRadius: '50%',
          border: i === 1 
            ? '0.5px solid rgba(180,83,9,0.14)' 
            : '1px dashed rgba(249,115,22,0.20)',
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          animation: `${i % 2 === 0 ? 'ringCCW' : 'ringCW'} ${[30, 22, 42][i]}s linear infinite`,
        }} />
      ))}

      {/* Ground glow */}
      <div style={{
        position: 'absolute', bottom: 40, left: '50%',
        transform: 'translateX(-50%)',
        width: 200, height: 32,
        background: 'radial-gradient(ellipse, rgba(230,126,34,0.35) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'kGlow 2s ease-in-out infinite',
      }} />

      {/* Image + Fire Flicker */}
      <div style={{
        position: 'relative',
        width: 840, height: 840,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        filter: 'drop-shadow(0 16px 40px rgba(192,57,43,0.3)) drop-shadow(0 0 20px rgba(249,115,22,0.2))',
      }}>

        {/* 🔥 Fire Flicker Overlay */}
        <div style={{
          position: 'absolute',
          width: 220,
          height: 260,
          top: '48%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}>
          {/* Glow pulse */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,140,0,0.45) 0%, rgba(255,140,0,0.15) 40%, transparent 70%)',
            animation: 'fireGlow 1.6s ease-in-out infinite',
            filter: 'blur(8px)',
          }} />

          {/* Flicker shimmer */}
          <div style={{
            position: 'absolute',
            width: '60%',
            height: '100%',
            left: '20%',
            background: 'linear-gradient(to top, rgba(255,200,100,0.25), transparent)',
            animation: 'fireFlicker 0.8s infinite ease-in-out',
            filter: 'blur(6px)',
          }} />
        </div>

        {/* Main Image */}
        <Image
          src="/images/yagna-kunda.png"
          alt="Yagna Kunda with sacred fire"
          width={840}
          height={840}
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      <style>{`
        @keyframes ringCW  { 
          from { transform: translate(-50%,-50%) rotate(0deg) } 
          to   { transform: translate(-50%,-50%) rotate(360deg) } 
        }

        @keyframes ringCCW { 
          from { transform: translate(-50%,-50%) rotate(0deg) } 
          to   { transform: translate(-50%,-50%) rotate(-360deg) } 
        }

        @keyframes kGlow { 
          0%,100% { opacity: 0.5 } 
          50%     { opacity: 1 } 
        }

        /* 🔥 Fire Animations */
        @keyframes fireGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.08); }
        }

        @keyframes fireFlicker {
          0%   { transform: translateY(0) scaleY(1); opacity: 0.7; }
          25%  { transform: translateY(-4px) scaleY(1.1); opacity: 1; }
          50%  { transform: translateY(2px) scaleY(0.95); opacity: 0.8; }
          75%  { transform: translateY(-2px) scaleY(1.05); opacity: 1; }
          100% { transform: translateY(0) scaleY(1); opacity: 0.7; }
        }

        @media (prefers-reduced-motion: reduce) {
          [style*="ringCW"], 
          [style*="ringCCW"] { 
            animation: none !important; 
          }
        }
      `}</style>
    </div>
  )
}