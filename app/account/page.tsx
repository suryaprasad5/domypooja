import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import { getOrders, getCartItems } from '@/lib/orders'
import { displayStatus, isCurrent } from '@/lib/order-types'
import { istToday } from '@/lib/dates'
import { SERVICES } from '@/data/services'
import { waLink } from '@/lib/config'
import OrderCard from '@/components/account/OrderCard'
import ProfileCard from '@/components/account/ProfileCard'
import LogoutButton from '@/components/account/LogoutButton'
import AddToCartButton from '@/components/cart/AddToCartButton'

export const metadata = { title: 'My Account — DoMyPooja' }
export const dynamic = 'force-dynamic'

const card = { background: 'white', border: '1px solid var(--border)', borderRadius: 18, padding: 22 } as const
const h2 = { fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 14 } as const

export default async function AccountPage() {
  const user = await getCurrentUser()
  if (!user) redirect('/login?next=/account')

  const [orders, cart] = await Promise.all([getOrders(user.id), getCartItems(user.id)])
  const today = istToday()

  const current = orders
    .filter(o => isCurrent(o, today))
    .sort((a, b) => (a.ceremonyDate ?? '9999').localeCompare(b.ceremonyDate ?? '9999'))
  const previous = orders.filter(o => !isCurrent(o, today))
  const completed = orders.filter(o => displayStatus(o, today) === 'completed').length

  const seen = new Set([...orders.flatMap(o => o.items.map(i => i.serviceId)), ...cart.map(c => c.serviceId)])
  const suggestions = SERVICES.filter(s => s.badge === 'popular' && !seen.has(s.id)).slice(0, 4)

  const stats = [
    { n: current.length, l: 'Current / upcoming' },
    { n: completed, l: 'Poojas completed' },
    { n: orders.length, l: 'Total orders' },
    { n: cart.length, l: 'In your cart' },
  ]

  return (
    <>
      <section style={{ padding: '104px 6% 36px', background: 'linear-gradient(160deg,#1C1009 0%,#2D1506 60%,#0D5C55 100%)', color: 'white' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '0.72rem', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#FDE68A', fontWeight: 700, marginBottom: 6 }}>✦ My Account ✦</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 700 }}>Namaste, {user.fullName.split(' ')[0]} 🙏</h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', marginTop: 4 }}>{user.email}</p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link href="/puja-services" style={{ padding: '10px 22px', borderRadius: 999, background: 'var(--saffron)', color: 'white', fontWeight: 700, fontSize: '0.86rem', textDecoration: 'none' }}>+ Book a Pooja</Link>
            <LogoutButton />
          </div>
        </div>
      </section>

      <section style={{ padding: '28px 6% 80px', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          {!user.freeMuhurtamUsed && (
            <div style={{ background: 'linear-gradient(135deg,rgba(15,118,110,0.1),rgba(249,115,22,0.08))', border: '1px solid rgba(15,118,110,0.3)', borderRadius: 14, padding: '14px 18px', marginBottom: 22, fontSize: '0.9rem', color: '#0D5C55' }}>
              🎁 <strong>Your first booking includes FREE Muhurtam (auspicious day) selection.</strong> Just tick “Help me fix the Muhurtam” at checkout.
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 28 }} className="acc-stats">
            {stats.map(s => (
              <div key={s.l} style={{ ...card, textAlign: 'center', padding: '16px 10px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--saffron)', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-faint)', marginTop: 4, fontWeight: 600 }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 28, alignItems: 'start' }} className="acc-layout">
            {/* MAIN */}
            <div>
              <h2 style={h2}>Current &amp; upcoming orders</h2>
              <div style={{ display: 'grid', gap: 16, marginBottom: 36 }}>
                {current.length === 0 ? (
                  <div style={{ ...card, textAlign: 'center', padding: '34px 20px' }}>
                    <div style={{ fontSize: '2.2rem', marginBottom: 6 }}>🪔</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--text-dark)', marginBottom: 6 }}>No upcoming poojas</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 16 }}>Orders stay here until the ceremony day ends. Explore our services to book your next pooja.</p>
                    <Link href="/puja-services" style={{ display: 'inline-block', padding: '10px 24px', borderRadius: 999, background: 'var(--saffron)', color: 'white', fontWeight: 700, fontSize: '0.86rem', textDecoration: 'none' }}>Browse services</Link>
                  </div>
                ) : current.map(o => (
                  <OrderCard key={o.id} order={o} status={displayStatus(o, today)} current user={{ fullName: user.fullName, phone: user.phone }} />
                ))}
              </div>

              <h2 style={h2}>Previous orders</h2>
              <div style={{ display: 'grid', gap: 16, marginBottom: 36 }}>
                {previous.length === 0 ? (
                  <div style={{ ...card, color: 'var(--text-faint)', fontSize: '0.88rem' }}>Your completed and cancelled orders will appear here.</div>
                ) : previous.map(o => (
                  <OrderCard key={o.id} order={o} status={displayStatus(o, today)} current={false} user={{ fullName: user.fullName, phone: user.phone }} />
                ))}
              </div>

              {suggestions.length > 0 && (
                <>
                  <h2 style={h2}>Suggested for you</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 14 }}>
                    {suggestions.map(s => (
                      <div key={s.id} style={{ ...card, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <div style={{ fontSize: '1.8rem' }}>{s.emoji}</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-dark)', lineHeight: 1.25 }}>{s.name}</div>
                        <div style={{ fontSize: '0.76rem', color: 'var(--saffron-deep)' }}>{s.price}</div>
                        <div style={{ display: 'flex', gap: 6, marginTop: 'auto' }}>
                          <Link href={`/puja/${s.id}`} style={{ flex: 1, textAlign: 'center', padding: '6px 8px', borderRadius: 8, border: '1.5px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.72rem', fontWeight: 600, textDecoration: 'none' }}>Details</Link>
                          <AddToCartButton serviceId={s.id} />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* SIDEBAR */}
            <aside style={{ display: 'grid', gap: 18 }}>
              <div style={card}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--text-dark)', marginBottom: 10 }}>🛒 My cart</h3>
                {cart.length === 0 ? (
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-faint)' }}>Your cart is empty.</p>
                ) : (
                  <ul style={{ listStyle: 'none', marginBottom: 12 }}>
                    {cart.map(c => <li key={c.serviceId} style={{ fontSize: '0.84rem', padding: '6px 0', borderBottom: '1px dashed var(--border)', color: 'var(--text-dark)' }}>{c.serviceName}{c.packageName ? <span style={{ color: 'var(--text-faint)' }}> · {c.packageName}</span> : null}</li>)}
                  </ul>
                )}
                <Link href="/cart" style={{ display: 'block', textAlign: 'center', padding: 11, borderRadius: 999, background: cart.length ? 'var(--saffron)' : 'var(--ivory-mid)', color: cart.length ? 'white' : 'var(--text-muted)', fontWeight: 700, fontSize: '0.86rem', textDecoration: 'none' }}>
                  {cart.length ? 'Go to cart & checkout' : 'Open cart'}
                </Link>
              </div>

              <ProfileCard user={user} />

              <div style={{ ...card, background: 'var(--ivory-warm)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: 6 }}>Need help?</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 12 }}>Questions about an order, Saamagri, Alankara or Muhurtam? Message us any time.</p>
                <a href={waLink(`Hello DoMyPooja, I need help. (${user.fullName}, ${user.phone})`)} target="_blank" rel="noreferrer" style={{ display: 'block', textAlign: 'center', padding: 11, borderRadius: 999, background: '#25D366', color: 'white', fontWeight: 700, fontSize: '0.86rem', textDecoration: 'none' }}>💬 Chat on WhatsApp</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:960px){.acc-layout{grid-template-columns:1fr!important}}@media(max-width:640px){.acc-stats{grid-template-columns:1fr 1fr!important}}`}</style>
    </>
  )
}
