import type { ReactNode } from 'react'
import SanskritQuote from '@/components/shared/SanskritQuote'
import { Q } from '@/data/quotes'
import { MOTTO } from '@/lib/config'

export default function AuthShell({ title, subtitle, children, wide }: {
  title: string; subtitle: string; children: ReactNode; wide?: boolean
}) {
  return (
    <section style={{
      minHeight: '100vh', padding: '110px 5% 70px',
      background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(249,115,22,0.08), transparent 70%), var(--ivory)',
    }}>
      <div style={{ maxWidth: wide ? 760 : 460, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 26 }}>
          <div style={{ fontFamily: 'var(--font-devan)', fontSize: '2.2rem', color: 'var(--saffron)' }}>ॐ</div>
          <div lang="sa" title={MOTTO.en} style={{ fontFamily: 'var(--font-devan)', fontSize: '0.85rem', color: 'var(--saffron-deep)' }}>{MOTTO.sa}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.4rem)', fontWeight: 700, color: 'var(--text-dark)', margin: '8px 0 6px' }}>{title}</h1>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>{subtitle}</p>
        </div>
        <div style={{ background: 'white', border: '1px solid var(--border-warm)', borderRadius: 20, padding: 'clamp(20px,4vw,34px)', boxShadow: '0 8px 40px rgba(249,115,22,0.10)' }}>
          {children}
        </div>
        <div style={{ marginTop: 28 }}><SanskritQuote quote={Q.asato} compact /></div>
      </div>
    </section>
  )
}
