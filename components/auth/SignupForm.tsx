'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import AuthShell from './AuthShell'
import { safeNext } from './LoginForm'
import { label, input, primaryBtn, errorBox } from './styles'
import { LANGUAGES, NAKSHATRAS } from '@/lib/config'

const sectionTitle: React.CSSProperties = {
  fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-dark)',
  margin: '6px 0 14px', paddingBottom: 8, borderBottom: '1px solid var(--border)',
}

export default function SignupForm() {
  const router = useRouter()
  const params = useSearchParams()
  const next = safeNext(params.get('next'))
  const [f, setF] = useState({
    fullName: '', email: '', phone: '', password: '', confirm: '',
    addressLine: '', area: '', pincode: '', preferredLanguage: 'Kannada', gotra: '', nakshatra: '',
  })
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setF(prev => ({ ...prev, [k]: e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (f.password !== f.confirm) { setError('Passwords do not match'); return }
    setBusy(true); setError('')
    try {
      const { confirm: _confirm, ...payload } = f
      void _confirm
      const res = await fetch('/api/auth/signup', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) { setError(data.error || 'Could not create account'); setBusy(false); return }
      router.push(next); router.refresh()
    } catch {
      setError('Network error. Please try again.'); setBusy(false)
    }
  }

  const field = (id: keyof typeof f, lbl: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div>
      <label style={label} htmlFor={id}>{lbl}</label>
      <input id={id} value={f[id]} onChange={set(id)} style={input} {...props} />
    </div>
  )

  return (
    <AuthShell wide title="Create your account" subtitle="Takes a minute. Your first booking includes FREE Muhurtam (auspicious day) selection 🎁">
      <form onSubmit={submit}>
        {error && <div style={errorBox} role="alert">{error}</div>}

        <div style={sectionTitle}>Your details</div>
        <div className="su-grid">
          {field('fullName', 'Full name *', { required: true, autoComplete: 'name', placeholder: 'Your name' })}
          {field('phone', 'Mobile number *', { required: true, type: 'tel', inputMode: 'numeric', autoComplete: 'tel', placeholder: '98765 43210' })}
          {field('email', 'Email *', { required: true, type: 'email', autoComplete: 'email', placeholder: 'you@example.com' })}
          <div />
          {field('password', 'Password * (min 8 characters)', { required: true, type: 'password', minLength: 8, maxLength: 72, autoComplete: 'new-password' })}
          {field('confirm', 'Confirm password *', { required: true, type: 'password', minLength: 8, maxLength: 72, autoComplete: 'new-password' })}
        </div>

        <div style={{ ...sectionTitle, marginTop: 24 }}>Address in Bengaluru <span style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontWeight: 400 }}>(optional — pre-fills your bookings)</span></div>
        <div className="su-grid">
          <div style={{ gridColumn: '1 / -1' }}>{field('addressLine', 'House / street address', { autoComplete: 'street-address', placeholder: 'Flat no., building, street' })}</div>
          {field('area', 'Area / locality', { placeholder: 'e.g. Jayanagar' })}
          {field('pincode', 'Pincode', { inputMode: 'numeric', maxLength: 6, placeholder: '560076' })}
        </div>

        <div style={{ ...sectionTitle, marginTop: 24 }}>Pooja preferences <span style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontWeight: 400 }}>(helps our Purohit/Pandit prepare)</span></div>
        <div className="su-grid">
          <div>
            <label style={label} htmlFor="preferredLanguage">Preferred language *</label>
            <select id="preferredLanguage" value={f.preferredLanguage} onChange={set('preferredLanguage')} style={input}>
              {LANGUAGES.map(l => <option key={l}>{l}</option>)}
            </select>
          </div>
          {field('gotra', 'Gotra', { placeholder: 'If known' })}
          <div>
            <label style={label} htmlFor="nakshatra">Nakshatra (birth star)</label>
            <select id="nakshatra" value={f.nakshatra} onChange={set('nakshatra')} style={input}>
              <option value="">Not sure / skip</option>
              {NAKSHATRAS.map(n => <option key={n}>{n}</option>)}
            </select>
          </div>
        </div>

        <button type="submit" disabled={busy} style={{ ...primaryBtn, marginTop: 26, opacity: busy ? 0.7 : 1 }}>{busy ? 'Creating account…' : 'Create account'}</button>
        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 18 }}>
          Already registered?{' '}
          <Link href={`/login${next !== '/account' ? `?next=${encodeURIComponent(next)}` : ''}`} style={{ color: 'var(--saffron-deep)', fontWeight: 600 }}>Log in</Link>
        </p>
      </form>
      <style>{`.su-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}@media(max-width:600px){.su-grid{grid-template-columns:1fr}.su-grid>div{grid-column:auto!important}}`}</style>
    </AuthShell>
  )
}
