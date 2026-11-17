'use client'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()
  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    window.dispatchEvent(new Event('dmp:cart'))
    router.push('/'); router.refresh()
  }
  return (
    <button onClick={logout} style={{ padding: '9px 20px', borderRadius: 999, border: '1.5px solid var(--border-warm)', background: 'white', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.84rem', fontWeight: 600, cursor: 'pointer' }}>
      Log out
    </button>
  )
}
