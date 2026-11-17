'use client'
import { useState } from 'react'
import Link from 'next/link'
import { removeFromCart } from '@/lib/cart-client'
import { LANGUAGES, TIME_SLOTS } from '@/lib/config'
import { label, input, errorBox } from '@/components/auth/styles'

interface Item { serviceId: string; serviceName: string; packageName: string | null; priceRange: string | null }
interface Defaults { addressLine: string; area: string; pincode: string; language: string; firstTime: boolean }

const today = () => new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' })

export default function CartClient({ initialItems, defaults }: { initialItems: Item[]; defaults: Defaults }) {
  const [items, setItems] = useState(initialItems)
  const [f, setF] = useState({
    ceremonyDate: '', ceremonyTime: TIME_SLOTS[1] as string, venueAddress: defaults.addressLine, area: defaults.area,
    pincode: defaults.pincode, language: defaults.language, saamagri: false, alankara: false, muhurtam: false, notes: '',
  })
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState<{ orderNo: string; url: string } | null>(null)

  const upd = <K extends keyof typeof f>(k: K, v: (typeof f)[K]) => setF(p => ({ ...p, [k]: v }))

  async function remove(id: string) {
    const r = await removeFromCart(id)
    if (r.ok) setItems(prev => prev.filter(i => i.serviceId !== id))
  }

  async function checkout(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true); setError('')
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...f, ceremonyDate: f.muhurtam && !f.ceremonyDate ? null : f.ceremonyDate }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) { setError(data.error || 'Could not place your order'); setBusy(false); return }
      setItems([]); setDone({ orderNo: data.orderNo, url: data.whatsappUrl })
      window.dispatchEvent(new Event('dmp:cart'))
      window.open(data.whatsappUrl, '_blank')   // may be blocked by the browser — the button below always works
    } catch {
      setError('Network error. Please try again.')
    }
    setBusy(false)
  }

  const wrap: React.CSSProperties = { minHeight: '100vh', padding: '104px 6% 80px', background: 'var(--ivory)' }
  const card: React.CSSProperties = { background: 'white', border: '1px solid var(--border)', borderRadius: 18, padding: 24 }

  if (done) {
    return (
      <section style={wrap}>
        <div style={{ ...card, maxWidth: 560, margin: '30px auto', textAlign: 'center', padding: 36 }}>
          <div style={{ fontSize: '3rem' }}>🙏</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', color: 'var(--text-dark)', margin: '6px 0' }}>Request saved!</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: 6 }}>
            Your order <strong>{done.orderNo}</strong> is in your account. Please send the pre-filled message on WhatsApp so we can confirm the details and exact pricing.
          </p>
          <a href={done.url} target="_blank" rel="noreferrer" style={{ display: 'block', margin: '22px 0 12px', padding: 15, borderRadius: 999, background: '#25D366', color: 'white', fontWeight: 700, textDecoration: 'none' }}>💬 Send on WhatsApp</a>
          <Link href="/account" style={{ color: 'var(--saffron-deep)', fontWeight: 600, fontSize: '0.9rem' }}>View my orders →</Link>
        </div>
      </section>
    )
  }

  if (items.length === 0) {
    return (
      <section style={wrap}>
        <div style={{ ...card, maxWidth: 520, margin: '30px auto', textAlign: 'center', padding: 36 }}>
          <div style={{ fontSize: '3rem' }}>🛒</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-dark)', margin: '6px 0' }}>Your cart is empty</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 20 }}>Add poojas from our services and come back to check out.</p>
          <Link href="/puja-services" style={{ display: 'inline-block', padding: '12px 28px', borderRadius: 999, background: 'var(--saffron)', color: 'white', fontWeight: 700, textDecoration: 'none' }}>Browse services</Link>
        </div>
      </section>
    )
  }

  const check = (k: 'saamagri' | 'alankara' | 'muhurtam', title: string, sub: string) => (
    <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 12px', border: `1.5px solid ${f[k] ? 'var(--saffron)' : 'var(--border)'}`, borderRadius: 10, cursor: 'pointer', background: f[k] ? 'rgba(249,115,22,0.05)' : 'white' }}>
      <input type="checkbox" checked={f[k]} onChange={e => upd(k, e.target.checked)} style={{ marginTop: 3, accentColor: 'var(--saffron)' }} />
      <span><strong style={{ fontSize: '0.88rem', color: 'var(--text-dark)' }}>{title}</strong><br /><span style={{ fontSize: '0.76rem', color: 'var(--text-faint)' }}>{sub}</span></span>
    </label>
  )

  return (
    <section style={wrap}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.4rem)', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 22 }}>My cart &amp; checkout</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 26, alignItems: 'start' }} className="cart-layout">
          <div style={card}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: 6 }}>Poojas ({items.length})</h2>
            {items.map(i => (
              <div key={i.serviceId} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '14px 0', borderBottom: '1px dashed var(--border)' }}>
                <div>
                  <Link href={`/puja/${i.serviceId}`} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-dark)', textDecoration: 'none' }}>{i.serviceName}</Link>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-faint)', marginTop: 2 }}>
                    {i.packageName ? `${i.packageName} package · ` : ''}<span style={{ color: 'var(--saffron-deep)' }}>{i.priceRange}</span>
                  </div>
                </div>
                <button onClick={() => remove(i.serviceId)} aria-label={`Remove ${i.serviceName}`} style={{ background: 'none', border: '1.5px solid var(--border)', borderRadius: 999, padding: '5px 12px', color: 'var(--text-muted)', fontSize: '0.76rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Remove</button>
              </div>
            ))}
            <div style={{ marginTop: 16, background: 'var(--ivory-warm)', borderRadius: 10, padding: '12px 14px', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              💡 No payment now. Prices are indicative ranges — we confirm the exact amount (including Saamagri and Alankara, if you opt) on WhatsApp.
            </div>
          </div>

          <form onSubmit={checkout} style={{ ...card, display: 'grid', gap: 14 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>Ceremony details</h2>
            {error && <div style={errorBox} role="alert">{error}</div>}

            {check('muhurtam', 'Help me fix the Muhurtam', defaults.firstTime ? '🎁 FREE for your first booking — we will suggest an auspicious day' : 'We will suggest an auspicious day')}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <label style={label} htmlFor="date">Date{f.muhurtam ? ' (optional)' : ' *'}</label>
                <input id="date" type="date" min={today()} required={!f.muhurtam} value={f.ceremonyDate} onChange={e => upd('ceremonyDate', e.target.value)} style={input} />
              </div>
              <div>
                <label style={label} htmlFor="time">Preferred time</label>
                <select id="time" value={f.ceremonyTime} onChange={e => upd('ceremonyTime', e.target.value)} style={input}>
                  {TIME_SLOTS.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label style={label} htmlFor="venue">Venue address (Bengaluru) *</label>
              <input id="venue" required minLength={5} value={f.venueAddress} onChange={e => upd('venueAddress', e.target.value)} style={input} placeholder="Flat no., building, street" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div><label style={label} htmlFor="area">Area</label><input id="area" value={f.area} onChange={e => upd('area', e.target.value)} style={input} /></div>
              <div><label style={label} htmlFor="pin">Pincode</label><input id="pin" inputMode="numeric" maxLength={6} value={f.pincode} onChange={e => upd('pincode', e.target.value)} style={input} /></div>
            </div>
            <div>
              <label style={label} htmlFor="lang">Language of the Purohit/Pandit</label>
              <select id="lang" value={f.language} onChange={e => upd('language', e.target.value)} style={input}>{LANGUAGES.map(l => <option key={l}>{l}</option>)}</select>
            </div>

            {check('saamagri', 'I need Saamagri', 'We arrange the pooja materials')}
            {check('alankara', 'I need Alankara / Decoration', 'Flowers, mandap and decoration')}

            <div>
              <label style={label} htmlFor="notes">Notes (optional)</label>
              <textarea id="notes" rows={3} maxLength={500} value={f.notes} onChange={e => upd('notes', e.target.value)} style={{ ...input, resize: 'vertical' }} placeholder="Anything we should know — family customs, number of guests…" />
            </div>

            <button type="submit" disabled={busy} style={{ padding: 15, borderRadius: 999, border: 'none', background: '#25D366', color: 'white', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'var(--font-body)', opacity: busy ? 0.7 : 1 }}>
              {busy ? 'Saving…' : '💬 Check out on WhatsApp'}
            </button>
            <p style={{ fontSize: '0.74rem', color: 'var(--text-faint)', textAlign: 'center' }}>Your request is saved to your account first, then WhatsApp opens with the details pre-filled.</p>
          </form>
        </div>
      </div>
      <style>{`@media(max-width:960px){.cart-layout{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
