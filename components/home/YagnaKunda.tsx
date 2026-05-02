'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function YagnaKunda() {
  const dotsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!dotsRef.current) return
    const ring = dotsRef.current
    const count = 24
    const r = 213
    for (let i = 0; i < count; i++) {
      const a = (i / count) * 2 * Math.PI
      const cx = 235 + r * Math.cos(a)
      const cy = 235 + r * Math.sin(a)
      const d = document.createElement('div')
      const sz = i % 3 === 0 ? 10 : 7
      const op = i % 3 === 0 ? 0.55 : 0.3
      d.style.cssText = `
        position:absolute;
        width:${sz}px;height:${sz}px;
        border-radius:50%;
        background:rgba(249,115,22,${op});
        left:${cx}px;top:${cy}px;
        transform:translate(-50%,-50%);
      `
      ring.appendChild(d)
    }
  }, [])

  return (
    <div style={{
      position: 'relative',
      width: 470, height: 470,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      {/* Decorative rotating rings */}
      {[470, 418, 366].map((size, i) => (
        <div key={size} style={{
          position: 'absolute',
          width: size, height: size,
          borderRadius: '50%',
          border: i === 1 ? '0.5px solid rgba(180,83,9,0.14)' : '1px dashed rgba(249,115,22,0.22)',
          top: '50%', left: '50%',
          animation: `${i % 2 === 0 ? 'ringCCW' : 'ringCW'} ${[30, 22, 42][i]}s linear infinite`,
        }} />
      ))}

      {/* Petal dots ring */}
      <div ref={dotsRef} style={{
        position: 'absolute',
        width: 470, height: 470,
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        animation: 'ringCCW 30s linear infinite',
      }} />

      {/* Ground glow */}
      <div style={{
        position: 'absolute',
        bottom: 48, left: '50%',
        transform: 'translateX(-50%)',
        width: 180, height: 28,
        background: 'radial-gradient(ellipse, rgba(230,126,34,0.4) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'kGlow 2s ease-in-out infinite',
      }} />

      {/* The kunda — perspective Y-axis spin */}
      <div style={{ perspective: 900 }}>
        <div style={{
          width: 340, height: 340,
          animation: 'kundaSpin 9s linear infinite',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {/*
            KEY FIX: We use a white background behind the image.
            mix-blend-mode: multiply makes white areas transparent
            but keeps coloured areas (the brown kunda + orange flames).
            Black bg in PNG × white canvas = black shown as-is with multiply,
            BUT since we INVERT the trick: we put a white div behind and use
            mix-blend-mode: multiply on the img — white×colour=colour, white×black=black.
            
            Better approach: CSS filter to remove black using invert+hue or
            use a canvas to removeBlack programmatically.
            We use: filter with drop-shadow to make black invisible on ivory bg,
            plus isolation: isolate and mix-blend-mode: multiply.
          */}
          <div style={{
            position: 'relative',
            width: 320, height: 320,
            borderRadius: '50%',
            background: 'white',
            isolation: 'isolate',
            overflow: 'hidden',
          }}>
            <Image
              src="/images/yagna-kunda.png"
              alt="Yagna Kunda"
              fill
              style={{
                objectFit: 'contain',
                mixBlendMode: 'multiply',
              }}
              priority
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes kundaSpin { 0%{transform:rotateY(0deg)} 100%{transform:rotateY(360deg)} }
        @keyframes ringCW  { from{transform:translate(-50%,-50%) rotate(0deg)}   to{transform:translate(-50%,-50%) rotate(360deg)} }
        @keyframes ringCCW { from{transform:translate(-50%,-50%) rotate(0deg)}   to{transform:translate(-50%,-50%) rotate(-360deg)} }
        @keyframes kGlow   { 0%,100%{opacity:0.5} 50%{opacity:1} }
        @media (prefers-reduced-motion: reduce) {
          [style*="kundaSpin"],[style*="ringCW"],[style*="ringCCW"],[style*="kGlow"] { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
