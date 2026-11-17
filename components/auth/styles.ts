import type { CSSProperties } from 'react'

export const label: CSSProperties = {
  display: 'block', fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-faint)',
  textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 6,
}
export const input: CSSProperties = {
  width: '100%', padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 10,
  fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--text-body)',
  background: 'var(--ivory-warm)', outline: 'none',
}
export const primaryBtn: CSSProperties = {
  width: '100%', padding: '14px', borderRadius: 999, border: 'none', cursor: 'pointer',
  background: 'linear-gradient(135deg,var(--saffron),var(--saffron-deep))', color: 'white',
  fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 700,
  boxShadow: '0 6px 20px rgba(249,115,22,0.3)',
}
export const errorBox: CSSProperties = {
  background: '#FEF2F2', border: '1px solid #FECACA', color: '#B91C1C',
  borderRadius: 10, padding: '10px 14px', fontSize: '0.85rem', marginBottom: 16,
}
export const card: CSSProperties = {
  background: 'white', borderRadius: 18, border: '1px solid var(--border)', padding: 24,
}
