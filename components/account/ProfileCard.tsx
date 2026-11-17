'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { UserProfile } from '@/lib/auth'
import { LANGUAGES, NAKSHATRAS } from '@/lib/config'
import { label, input, errorBox } from '@/components/auth/styles'

export default function ProfileCard({ user }: { user: UserProfile }) {
  const router = useRouter()
  const [editing, setEditing] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [f, setF] = useState({
    fullName: user.fullName, phone: user.phone, addressLine: user.addressLine ?? '', area: user.area ?? '',
    pincode: user.pincode ?? '', preferredLanguage: user.preferredLanguage, gotra: user.gotra ?? '', nakshatra: user.nakshatra ?? '',
  })
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setF(p => ({ ...p, [k]: e.target.value }))

  async function save(e: React.FormEvent) {
    e.preventDefault(); setBusy(true); setError('')
    const res = await fetch('/api/profile', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) })
    const data = await res.json().catch(() => ({}))
    setBusy(false)
    if (!res.ok) { setError(data.error || 'Could not save'); return }
    setEditing(false); router.refresh()
  }

  const row = (k: string, v: string | null) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '7px 0', borderBottom: '1px dashed var(--border)', fontSize: '0.84rem' }}>
      <span style={{ color: 'var(--text-faint)' }}>{k}</span>
      <span style={{ color: 'var(--text-dark)', fontWeight: 600, textAlign: 'right' }}>{v || '—'}</span>
    </div>
  )

  return (
    <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 18, padding: 22 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--text-dark)' }}>👤 My details</h3>
        {!editing && <button onClick={() => setEditing(true)} style={{ background: 'none', border: 'none', color: 'var(--saffron-deep)', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Edit</button>}
      </div>

      {!editing ? (
        <>
          {row('Name', user.fullName)}{row('Email', user.email)}{row('Mobile', user.phone)}
          {row('Address', [user.addressLine, user.area, user.pincode].filter(Boolean).join(', '))}
          {row('Language', user.preferredLanguage)}{row('Gotra', user.gotra)}{row('Nakshatra', user.nakshatra)}
        </>
      ) : (
        <form onSubmit={save} style={{ display: 'grid', gap: 12 }}>
          {error && <div style={errorBox} role="alert">{error}</div>}
          {([['fullName', 'Full name'], ['phone', 'Mobile'], ['addressLine', 'Address'], ['area', 'Area'], ['pincode', 'Pincode'], ['gotra', 'Gotra']] as const).map(([k, l]) => (
            <div key={k}><label style={label} htmlFor={`p-${k}`}>{l}</label><input id={`p-${k}`} style={input} value={f[k]} onChange={set(k)} /></div>
          ))}
          <div><label style={label} htmlFor="p-lang">Preferred language</label>
            <select id="p-lang" style={input} value={f.preferredLanguage} onChange={set('preferredLanguage')}>{LANGUAGES.map(l => <option key={l}>{l}</option>)}</select></div>
          <div><label style={label} htmlFor="p-nak">Nakshatra</label>
            <select id="p-nak" style={input} value={f.nakshatra} onChange={set('nakshatra')}><option value="">Not sure / skip</option>{NAKSHATRAS.map(n => <option key={n}>{n}</option>)}</select></div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button type="submit" disabled={busy} style={{ flex: 1, padding: 11, borderRadius: 999, border: 'none', background: 'var(--saffron)', color: 'white', fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>{busy ? 'Saving…' : 'Save'}</button>
            <button type="button" onClick={() => setEditing(false)} style={{ flex: 1, padding: 11, borderRadius: 999, border: '1.5px solid var(--border)', background: 'white', color: 'var(--text-muted)', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  )
}
