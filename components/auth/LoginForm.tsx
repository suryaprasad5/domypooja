'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import AuthShell from './AuthShell'
import { label, input, primaryBtn, errorBox } from './styles'

export function safeNext(n: string | null, fallback = '/account') {
  return n && n.startsWith('/') && !n.startsWith('//') ? n : fallback
}

export default function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const next = safeNext(params.get('next'))
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true); setError('')
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) { setError(data.error || 'Could not log in'); setBusy(false); return }
      router.push(next); router.refresh()
    } catch {
      setError('Network error. Please try again.'); setBusy(false)
    }
  }

  return (
    <AuthShell title="Welcome back" subtitle="Log in to view your bookings, cart and saved details.">
      <form onSubmit={submit}>
        {error && <div style={errorBox} role="alert">{error}</div>}
        <div style={{ marginBottom: 16 }}>
          <label style={label} htmlFor="email">Email</label>
          <input id="email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} style={input} placeholder="you@example.com" />
        </div>
        <div style={{ marginBottom: 22 }}>
          <label style={label} htmlFor="password">Password</label>
          <input id="password" type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} style={input} />
        </div>
        <button type="submit" disabled={busy} style={{ ...primaryBtn, opacity: busy ? 0.7 : 1 }}>{busy ? 'Logging in…' : 'Log in'}</button>
        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 18 }}>
          New to DoMyPooja?{' '}
          <Link href={`/signup${next !== '/account' ? `?next=${encodeURIComponent(next)}` : ''}`} style={{ color: 'var(--saffron-deep)', fontWeight: 600 }}>Create an account</Link>
        </p>
      </form>
    </AuthShell>
  )
}
