'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { OrderView, DisplayStatus, STATUS_META } from '@/lib/order-types'
import { prettyDate } from '@/lib/dates'
import { orderWaUrl } from '@/lib/whatsapp'
import { waLink } from '@/lib/config'
import { addManyToCart } from '@/lib/cart-client'

const STEPS = ['Requested', 'Confirmed', 'Completed']

export default function OrderCard({ order, status, current, user }: {
  order: OrderView; status: DisplayStatus; current: boolean; user: { fullName: string; phone: string }
}) {
  const router = useRouter()
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const meta = STATUS_META[status]
  const stepIdx = status === 'requested' ? 0 : status === 'confirmed' ? 1 : status === 'completed' ? 2 : -1

  const resendUrl = orderWaUrl({
    orderNo: order.orderNo, fullName: user.fullName, phone: user.phone, items: order.items,
    ceremonyDate: order.ceremonyDate, ceremonyTime: order.ceremonyTime, venueAddress: order.venueAddress,
    area: order.area, pincode: order.pincode, language: order.language, saamagri: order.saamagri,
    alankara: order.alankara, muhurtam: order.muhurtam, notes: order.notes,
  })

  async function cancel() {
    if (!confirm(`Cancel request ${order.orderNo}?`)) return
    setBusy(true); setErr('')
    const res = await fetch(`/api/orders/${order.id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'cancel' }),
    })
    const data = await res.json().catch(() => ({}))
    setBusy(false)
    if (!res.ok) { setErr(data.error || 'Could not cancel'); return }
    router.refresh()
  }

  async function rebook() {
    setBusy(true); setErr('')
    const r = await addManyToCart(order.items.map(i => i.serviceId))
    setBusy(false)
    if (!r.ok) { setErr(r.error || 'Could not add to cart'); return }
    router.push('/cart')
  }

  const btn: React.CSSProperties = { padding: '8px 16px', borderRadius: 999, fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }

  return (
    <div style={{ background: 'white', border: `1px solid ${current ? 'var(--border-warm)' : 'var(--border)'}`, borderRadius: 16, padding: 20, boxShadow: current ? '0 6px 24px rgba(249,115,22,0.08)' : 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, flexWrap: 'wrap', marginBottom: 12 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-dark)' }}>{order.orderNo}</div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-faint)' }}>Placed {order.placedAt}</div>
        </div>
        <span style={{ background: meta.bg, color: meta.fg, fontSize: '0.72rem', fontWeight: 700, padding: '4px 12px', borderRadius: 999 }}>{meta.label}</span>
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', fontSize: '0.82rem', color: 'var(--text-body)', marginBottom: 12 }}>
        <span style={{ background: 'var(--ivory-warm)', border: '1px solid var(--border)', borderRadius: 999, padding: '4px 12px', fontWeight: 600 }}>
          📅 {order.ceremonyDate ? prettyDate(order.ceremonyDate) : 'Muhurtam to be fixed by us'}
        </span>
        {order.ceremonyTime && <span style={{ background: 'var(--ivory-warm)', border: '1px solid var(--border)', borderRadius: 999, padding: '4px 12px' }}>🕐 {order.ceremonyTime}</span>}
        <span style={{ background: 'var(--ivory-warm)', border: '1px solid var(--border)', borderRadius: 999, padding: '4px 12px' }}>🗣️ {order.language}</span>
      </div>

      <div style={{ marginBottom: 12 }}>
        {order.items.map(it => (
          <div key={it.serviceId} style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '7px 0', borderBottom: '1px dashed var(--border)', fontSize: '0.86rem' }}>
            <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>
              {it.serviceName}{it.packageName ? <span style={{ color: 'var(--text-faint)', fontWeight: 400 }}> · {it.packageName}</span> : null}
            </span>
            <span style={{ color: 'var(--saffron-deep)', whiteSpace: 'nowrap', fontSize: '0.78rem' }}>{it.priceRange || ''}</span>
          </div>
        ))}
      </div>

      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 12 }}>
        📍 {[order.venueAddress, order.area, order.city, order.pincode].filter(Boolean).join(', ')}
        <br />
        Saamagri: <strong>{order.saamagri ? 'Yes' : 'No'}</strong> · Alankara/Decoration: <strong>{order.alankara ? 'Yes' : 'No'}</strong>
        {order.muhurtam && <> · Muhurtam help requested</>}
        {order.notes && <><br />📝 {order.notes}</>}
      </div>

      {current && stepIdx >= 0 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }} aria-label="Order progress">
          {STEPS.map((s, i) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 6, flex: i < STEPS.length - 1 ? 1 : 'none' }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', fontSize: '0.65rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', background: i <= stepIdx ? 'var(--saffron)' : 'var(--ivory-mid)', color: i <= stepIdx ? 'white' : 'var(--text-faint)' }}>{i <= stepIdx ? '✓' : i + 1}</div>
              <span style={{ fontSize: '0.7rem', color: i <= stepIdx ? 'var(--text-dark)' : 'var(--text-faint)', fontWeight: 600 }}>{s}</span>
              {i < STEPS.length - 1 && <div style={{ flex: 1, height: 2, background: i < stepIdx ? 'var(--saffron)' : 'var(--border)' }} />}
            </div>
          ))}
        </div>
      )}

      {err && <div style={{ color: '#B91C1C', fontSize: '0.8rem', marginBottom: 8 }}>{err}</div>}

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {current && status === 'requested' && (
          <>
            <a href={resendUrl} target="_blank" rel="noreferrer" style={{ ...btn, background: '#25D366', color: 'white', border: 'none' }}>💬 Send on WhatsApp</a>
            <button onClick={cancel} disabled={busy} style={{ ...btn, background: 'white', border: '1.5px solid var(--border)', color: 'var(--text-muted)' }}>Cancel request</button>
          </>
        )}
        {current && status === 'confirmed' && (
          <a href={waLink(`Hello, regarding my order ${order.orderNo} — I would like to change/cancel it.`)} target="_blank" rel="noreferrer" style={{ ...btn, background: 'white', border: '1.5px solid var(--border-warm)', color: 'var(--saffron-deep)' }}>💬 Change / cancel on WhatsApp</a>
        )}
        {!current && (
          <button onClick={rebook} disabled={busy} style={{ ...btn, background: 'white', border: '1.5px solid var(--saffron)', color: 'var(--saffron-deep)' }}>{busy ? 'Adding…' : '🔁 Book again'}</button>
        )}
      </div>
    </div>
  )
}
