'use client'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { addToCart } from '@/lib/cart-client'

type Variant = 'card' | 'primary' | 'outline'

const styles: Record<Variant, React.CSSProperties> = {
  card: { flex: 1, padding: '6px 8px', borderRadius: 8, border: '1.5px solid var(--saffron)', color: 'var(--saffron)', background: 'transparent', fontSize: '0.72rem', fontWeight: 700 },
  primary: { width: '100%', padding: '13px', borderRadius: 999, border: 'none', color: 'white', background: 'linear-gradient(135deg,var(--saffron),var(--saffron-deep))', fontSize: '0.95rem', fontWeight: 700, boxShadow: '0 6px 20px rgba(249,115,22,0.3)' },
  outline: { width: '100%', padding: '11px', borderRadius: 999, border: '2px solid var(--saffron)', color: 'var(--saffron-deep)', background: 'white', fontSize: '0.88rem', fontWeight: 700 },
}

export default function AddToCartButton({ serviceId, packageName, variant = 'card', label }: {
  serviceId: string; packageName?: string | null; variant?: Variant; label?: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [state, setState] = useState<'idle' | 'busy' | 'added' | 'error'>('idle')
  const [msg, setMsg] = useState('')

  async function click(e: React.MouseEvent) {
    e.preventDefault(); e.stopPropagation()
    if (state === 'busy') return
    setState('busy'); setMsg('')
    const r = await addToCart(serviceId, packageName)
    if (r.needsLogin) { router.push(`/login?next=${encodeURIComponent(pathname)}`); return }
    if (!r.ok) { setState('error'); setMsg(r.error || 'Try again'); return }
    setState('added')
    setTimeout(() => setState('idle'), 2200)
  }

  const text = state === 'busy' ? 'Adding…' : state === 'added' ? '✓ Added to cart' : state === 'error' ? 'Try again' : (label ?? (variant === 'card' ? '🛒 Add' : '🛒 Add to Cart'))
  const base: React.CSSProperties = { ...styles[variant], cursor: 'pointer', fontFamily: 'var(--font-body)' }
  if (state === 'added') { base.background = '#DCFCE7'; base.color = '#166534'; base.border = '1.5px solid #86EFAC'; base.boxShadow = 'none' }

  return (
    <>
      <button onClick={click} style={base} aria-live="polite">{text}</button>
      {state === 'error' && variant !== 'card' && <div style={{ color: '#B91C1C', fontSize: '0.78rem', marginTop: 6 }}>{msg}</div>}
    </>
  )
}
