'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { waLink } from '@/lib/config'

const links = [
  { href: '/', label: 'Home' },
  { href: '/puja-services', label: 'Pooja Services' },
  { href: '/epuja', label: 'E-Pooja' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

interface Me { firstName: string }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [me, setMe] = useState<Me | null>(null)
  const [cartCount, setCartCount] = useState(0)
  const pathname = usePathname()

  const refresh = useCallback(async () => {
    try {
      const res = await fetch('/api/auth/me', { cache: 'no-store' })
      const data = await res.json()
      setMe(data.user ?? null)
      setCartCount(data.cartCount ?? 0)
    } catch { /* offline or DB not configured — show logged-out nav */ }
  }, [])

  useEffect(() => { refresh() }, [pathname, refresh])
  useEffect(() => {
    window.addEventListener('dmp:cart', refresh)
    return () => window.removeEventListener('dmp:cart', refresh)
  }, [refresh])
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const pill: React.CSSProperties = { padding: '8px 18px', borderRadius: 999, fontSize: '0.84rem', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }

  const cartLink = (
    <Link href="/cart" aria-label={`Cart${cartCount ? `, ${cartCount} items` : ''}`} style={{ position: 'relative', width: 40, height: 40, borderRadius: '50%', background: 'var(--ivory-warm)', border: '1px solid var(--border-warm)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '1.1rem' }}>
      🛒
      {cartCount > 0 && (
        <span style={{ position: 'absolute', top: -4, right: -4, minWidth: 18, height: 18, padding: '0 4px', borderRadius: 999, background: 'var(--saffron)', color: 'white', fontSize: '0.65rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cartCount}</span>
      )}
    </Link>
  )

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, height: 72,
      background: 'rgba(255,251,245,0.96)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center',
      padding: '0 4%', gap: 20, boxShadow: scrolled ? '0 4px 30px rgba(249,115,22,0.1)' : 'none', transition: 'box-shadow 0.3s',
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
        <div style={{ width: 42, height: 42, borderRadius: 12, background: 'linear-gradient(135deg, var(--saffron) 0%, var(--saffron-deep) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', boxShadow: '0 4px 14px rgba(249,115,22,0.35)' }}>🕉</div>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.55rem', fontWeight: 700, color: 'var(--charcoal)' }}>Do<span style={{ color: 'var(--saffron)' }}>My</span>Pooja</span>
      </Link>

      <ul className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 2, marginLeft: 'auto', listStyle: 'none' }}>
        {links.map(l => (
          <li key={l.href}>
            <Link href={l.href} style={{
              padding: '7px 12px', borderRadius: 999, fontSize: '0.85rem', fontWeight: 500, whiteSpace: 'nowrap', textDecoration: 'none',
              color: pathname === l.href ? 'var(--saffron-deep)' : 'var(--text-body)',
              background: pathname === l.href ? 'var(--saffron-glow)' : 'transparent',
            }}>{l.label}</Link>
          </li>
        ))}
      </ul>

      <div className="nav-cta" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0, marginLeft: 'auto' }}>
        <a href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="nav-wa-btn"
          style={{ ...pill, display: 'flex', alignItems: 'center', gap: 6, background: '#E7F9EF', color: '#15803D', padding: '8px 14px' }}>
          💬 <span className="wa-label">WhatsApp</span>
        </a>
        {cartLink}
        {me ? (
          <Link href="/account" className="nav-auth" style={{ ...pill, background: 'linear-gradient(135deg, var(--saffron), var(--saffron-deep))', color: 'white', boxShadow: '0 4px 14px rgba(249,115,22,0.35)' }}>
            👤 {me.firstName}
          </Link>
        ) : (
          <>
            <Link href="/login" className="nav-auth nav-login" style={{ ...pill, border: '1.5px solid var(--border-warm)', color: 'var(--saffron-deep)', background: 'white' }}>Log in</Link>
            <Link href="/signup" className="nav-auth" style={{ ...pill, background: 'linear-gradient(135deg, var(--saffron), var(--saffron-deep))', color: 'white', boxShadow: '0 4px 14px rgba(249,115,22,0.35)' }}>Sign up</Link>
          </>
        )}
        <button onClick={() => setOpen(o => !o)} className="nav-hamburger" aria-label="Menu" aria-expanded={open}
          style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}>
          {[0, 1, 2].map(i => <span key={i} style={{ display: 'block', width: 24, height: 2, background: 'var(--text-body)', borderRadius: 2 }} />)}
        </button>
      </div>

      {open && (
        <div style={{ position: 'absolute', top: 72, left: 0, right: 0, background: 'var(--ivory)', borderBottom: '1px solid var(--border)', padding: '12px 6% 18px', boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ display: 'block', padding: '11px 0', color: 'var(--text-body)', textDecoration: 'none', fontSize: '0.98rem', fontWeight: 500, borderBottom: '1px dashed var(--border)' }}>{l.label}</Link>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
            {me ? (
              <>
                <Link href="/account" style={{ ...pill, flex: 1, textAlign: 'center', background: 'var(--saffron)', color: 'white' }}>👤 My account</Link>
                <Link href="/cart" style={{ ...pill, flex: 1, textAlign: 'center', border: '1.5px solid var(--saffron)', color: 'var(--saffron-deep)' }}>🛒 Cart{cartCount ? ` (${cartCount})` : ''}</Link>
              </>
            ) : (
              <>
                <Link href="/login" style={{ ...pill, flex: 1, textAlign: 'center', border: '1.5px solid var(--saffron)', color: 'var(--saffron-deep)' }}>Log in</Link>
                <Link href="/signup" style={{ ...pill, flex: 1, textAlign: 'center', background: 'var(--saffron)', color: 'white' }}>Sign up</Link>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1180px) { .nav-wa-btn .wa-label { display: none; } .nav-wa-btn { padding: 8px 11px !important; } }
        @media (max-width: 960px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (max-width: 640px) {
          .nav-login { display: none !important; }
          .nav-auth { padding: 8px 14px !important; }
        }
        @media (max-width: 420px) { .nav-auth { display: none !important; } }
      `}</style>
    </nav>
  )
}
