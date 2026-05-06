'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/puja-services', label: 'Puja Services' },
  { href: '/epuja', label: 'E-Puja' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: '72px',
      background: 'rgba(255,251,245,0.96)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)',
      display: 'flex', alignItems: 'center',
      padding: '0 6%', gap: '32px',
      boxShadow: scrolled ? '0 4px 30px rgba(249,115,22,0.1)' : 'none',
      transition: 'box-shadow 0.3s',
    }}>
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
        <div style={{
          width: 42, height: 42, borderRadius: 12,
          background: 'linear-gradient(135deg, var(--saffron) 0%, var(--saffron-deep) 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.3rem', boxShadow: '0 4px 14px rgba(249,115,22,0.35)',
        }}>🕉</div>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.55rem', fontWeight: 700, color: 'var(--charcoal)' }}>
          Do<span style={{ color: 'var(--saffron)' }}>My</span>Pooja
        </span>
      </Link>

      {/* Desktop links */}
      <ul style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: 'auto', listStyle: 'none' }}
        className="nav-links-desktop">
        {links.map(l => (
          <li key={l.href}>
            <Link href={l.href} style={{
              padding: '7px 14px', borderRadius: '999px',
              fontSize: '0.875rem', fontWeight: 500,
              color: pathname === l.href ? 'var(--saffron-deep)' : 'var(--text-body)',
              background: pathname === l.href ? 'var(--saffron-glow)' : 'transparent',
              textDecoration: 'none', whiteSpace: 'nowrap',
              transition: 'all 0.2s',
            }}>{l.label}</Link>
          </li>
        ))}
      </ul>

      {/* CTA group */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
        <a href="https://wa.me/919036050108" target="_blank" rel="noreferrer"
          className="nav-wa-btn"
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            background: '#E7F9EF', color: '#15803D',
            padding: '8px 16px', borderRadius: '999px',
            fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none',
          }}>💬 <span className="wa-label">WhatsApp</span></a>
        <Link href="/puja-services"
          className="nav-book-btn"
          style={{
            background: 'linear-gradient(135deg, var(--saffron), var(--saffron-deep))',
            color: 'white', padding: '9px 22px', borderRadius: '999px',
            fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(249,115,22,0.35)',
          }}>Book a Pandit →</Link>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
        className="nav-hamburger"
        aria-label="Menu"
      >
        <span style={{ display: 'block', width: 24, height: 2, background: 'var(--text-body)', borderRadius: 2 }} />
        <span style={{ display: 'block', width: 24, height: 2, background: 'var(--text-body)', borderRadius: 2 }} />
        <span style={{ display: 'block', width: 24, height: 2, background: 'var(--text-body)', borderRadius: 2 }} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'absolute', top: 72, left: 0, right: 0,
          background: 'var(--ivory)', borderBottom: '1px solid var(--border)',
          padding: '16px 6%',
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '10px 0', color: 'var(--text-body)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-book-btn { display: none !important; }
          .nav-wa-btn span.wa-label { display: none !important; }
          .nav-wa-btn { padding: 8px 10px !important; }
        }
        @media (min-width: 768px) and (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-book-btn { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
