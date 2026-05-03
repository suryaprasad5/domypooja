'use client'
import { useState } from 'react'
import Link from 'next/link'
import { PujaService } from '@/data/services'
import { PujaDetail } from '@/data/puja-details'
import PujaBookingCard from './PujaBookingCard'

const TABS = ['Overview', 'Packages', 'Procedure', 'Samagri', 'FAQs']

export default function PujaDetailClient({
  puja, detail, related,
}: {
  puja: PujaService
  detail: PujaDetail | null
  related: PujaService[]
}) {
  const [tab, setTab] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ padding: 'calc(72px + 20px) 8% 0', background: 'var(--ivory)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8rem', color: 'var(--text-faint)', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-faint)', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: 'var(--border-warm)' }}>/</span>
          <Link href="/puja-services" style={{ color: 'var(--text-faint)', textDecoration: 'none' }}>Puja Services</Link>
          <span style={{ color: 'var(--border-warm)' }}>/</span>
          <span style={{ color: 'var(--saffron)' }}>{puja.name}</span>
        </div>
      </div>

      <section style={{ padding: '32px 8% 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 48, alignItems: 'start' }} className="detail-layout">

          {/* ── LEFT CONTENT ── */}
          <div>
            {/* Hero image */}
            <div style={{
              height: 300, borderRadius: 18,
              background: 'linear-gradient(135deg,#FEF3C7 0%,#FED7AA 60%,rgba(15,118,110,0.08) 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '8rem', marginBottom: 32,
              border: '1px solid var(--border-warm)',
              position: 'relative', overflow: 'hidden',
            }}>
              {puja.emoji}
              {puja.isSamskara && (
                <div style={{
                  position: 'absolute', top: 16, left: 16,
                  background: 'rgba(255,251,245,0.95)',
                  border: '1px solid var(--border-warm)',
                  borderRadius: 10, padding: '6px 14px',
                  fontSize: '0.78rem', fontWeight: 700,
                  color: 'var(--saffron-deep)',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  🕉️ Shodasha Samskara
                </div>
              )}
            </div>

            {/* Title + Meta */}
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 14, lineHeight: 1.2 }}>
              {puja.name}
            </h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
              {[
                ['⏱️', detail?.duration || '2–4 hours'],
                ['📍', 'At your home'],
                ['🗣️', 'Kannada · Hindi & more'],
                ['📦', 'Samagri included'],
                ['⭐', '4.9★ (2,400+ reviews)'],
              ].map(([icon, label]) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  background: 'var(--ivory-warm)', border: '1px solid var(--border)',
                  borderRadius: '999px', padding: '5px 13px',
                  fontSize: '0.78rem', color: 'var(--text-muted)',
                }}>
                  {icon} <strong style={{ color: 'var(--text-dark)' }}>{label}</strong>
                </div>
              ))}
              {detail?.bestTime && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(249,115,22,0.06)', border: '1px solid var(--border-warm)', borderRadius: '999px', padding: '5px 13px', fontSize: '0.78rem', color: 'var(--saffron-deep)', fontWeight: 500 }}>
                  🗓️ Best time: {detail.bestTime}
                </div>
              )}
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: 0, borderBottom: '2px solid var(--border)', marginBottom: 32, overflowX: 'auto' }}>
              {TABS.map((t, i) => {
                // Hide Packages/Procedure/Samagri/FAQ tabs if no detail data
                if (!detail && i > 0) return null
                return (
                  <button key={t} onClick={() => setTab(i)}
                    style={{
                      padding: '12px 20px', fontSize: '0.88rem', fontWeight: 600,
                      color: tab === i ? 'var(--saffron)' : 'var(--text-faint)',
                      border: 'none', borderBottom: `2px solid ${tab === i ? 'var(--saffron)' : 'transparent'}`,
                      marginBottom: '-2px', background: 'transparent',
                      cursor: 'pointer', fontFamily: 'var(--font-body)',
                      whiteSpace: 'nowrap', transition: 'all 0.2s',
                    }}>
                    {t}
                  </button>
                )
              })}
            </div>

            {/* ─── TAB: OVERVIEW ─── */}
            {tab === 0 && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: 12 }}>About This Puja</h2>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 22 }}>
                  {puja.description || `${puja.name} is a sacred Vedic ceremony performed with devotion and as per ancient scriptural injunctions. Our verified Kannada Pandits ensure the ceremony is conducted exactly as per your community and regional traditions, with all puja samagri arranged and delivered by DoMyPooja.`}
                </p>

                {detail?.keyInsights && (
                  <>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: 14 }}>Key Insights</h2>
                    <div style={{ background: 'var(--ivory-warm)', border: '1px solid var(--border-warm)', borderRadius: 14, padding: '18px 22px', marginBottom: 28 }}>
                      {detail.keyInsights.map((k, i) => (
                        <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: i < detail.keyInsights.length - 1 ? 12 : 0 }}>
                          <span style={{ color: 'var(--saffron)', flexShrink: 0, marginTop: 2, fontWeight: 700 }}>✦</span>
                          {k}
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {detail?.benefits && (
                  <>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: 14 }}>Benefits & Significance</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                      {detail.benefits.map((b, i) => (
                        <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, background: 'white', border: '1px solid var(--border)', borderRadius: 10, padding: '12px 16px' }}>
                          <span style={{ color: 'var(--teal,#0F766E)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                          {b}
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {!detail && (
                  <>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: 12 }}>Benefits & Significance</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                      {['Removes negative energies and purifies the space or occasion.', 'Invokes divine blessings for protection, prosperity and wellbeing.', 'Performed on an auspicious muhurat for maximum spiritual benefit.', 'Conducted exactly as per your community and regional traditions.', 'All samagri sourced and delivered to your doorstep.'].map((b, i) => (
                        <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                          <span style={{ color: 'var(--saffron)', flexShrink: 0, marginTop: 2 }}>✦</span>{b}
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* What's included */}
                <div style={{ background: 'linear-gradient(135deg,rgba(15,118,110,0.06),rgba(249,115,22,0.04))', border: '1px solid rgba(15,118,110,0.15)', borderRadius: 14, padding: '20px 22px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 12 }}>Everything arranged by DoMyPooja</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {['Verified & experienced Pandit / Purohit', 'Complete puja samagri delivered', 'Advance booking confirmation & reminder', 'Ceremony per your community traditions', 'Prasad distribution guidance', '24/7 support via WhatsApp & phone'].map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: 'var(--text-body)' }}>
                        <span style={{ color: '#0F766E', fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ─── TAB: PACKAGES ─── */}
            {tab === 1 && detail?.packages && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: 8 }}>Puja Packages</h2>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 28 }}>
                  All packages include a verified Pandit, complete puja samagri delivered to your home, and end-to-end support. Choose based on the scale and depth of ceremony you need.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {detail.packages.map((pkg, i) => (
                    <div key={pkg.name} style={{
                      background: 'white', borderRadius: 18,
                      border: `2px solid ${i === 1 ? 'var(--saffron)' : 'var(--border)'}`,
                      padding: 28, position: 'relative', overflow: 'hidden',
                      boxShadow: i === 1 ? '0 8px 32px rgba(249,115,22,0.12)' : 'none',
                    }}>
                      {i === 1 && (
                        <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--saffron)', color: 'white', fontSize: '0.68rem', fontWeight: 700, padding: '4px 16px', borderBottomLeftRadius: 12, letterSpacing: '0.5px' }}>
                          MOST POPULAR
                        </div>
                      )}
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 18, flexWrap: 'wrap' }}>
                        <div>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 4 }}>
                            {['🥈', '🥇', '💎'][i] || '✦'} {pkg.name} Package
                          </div>
                          <div style={{ display: 'flex', gap: 16, fontSize: '0.8rem', color: 'var(--text-faint)' }}>
                            <span>⏱️ {pkg.duration}</span>
                            <span>👨‍🦳 {pkg.pandits} Pandit{pkg.pandits > 1 ? 's' : ''}</span>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--saffron)', lineHeight: 1 }}>{pkg.price}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)', marginTop: 4 }}>All-inclusive</div>
                        </div>
                      </div>
                      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 12 }}>What&apos;s included</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                          {pkg.highlights.map((h, j) => (
                            <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.83rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                              <span style={{ color: i === 1 ? 'var(--saffron)' : '#0F766E', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                              {h}
                            </div>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => window.open(`https://wa.me/919036050108?text=${encodeURIComponent(`I want to book ${puja.name} — ${pkg.name} Package (${pkg.price})`)}`, '_blank')}
                        style={{
                          marginTop: 20, width: '100%', padding: '12px',
                          borderRadius: '999px', border: 'none', cursor: 'pointer',
                          fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem',
                          background: i === 1 ? 'linear-gradient(135deg,var(--saffron),#C2540A)' : 'white',
                          color: i === 1 ? 'white' : 'var(--saffron)',
                          border: i === 1 ? 'none' : '2px solid var(--saffron)',
                          boxShadow: i === 1 ? '0 6px 20px rgba(249,115,22,0.3)' : 'none',
                        }}>
                        Book {pkg.name} Package — {pkg.price}
                      </button>
                    </div>
                  ))}
                </div>
                <div style={{ background: 'var(--ivory-warm)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 18px', marginTop: 20, fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  💡 <strong style={{ color: 'var(--text-dark)' }}>Not sure which package?</strong> WhatsApp us at <a href="https://wa.me/919036050108" style={{ color: 'var(--saffron)' }}>+91 90360-50108</a> — our team will recommend the best package for your occasion and budget.
                </div>
              </div>
            )}

            {/* ─── TAB: PROCEDURE ─── */}
            {tab === 2 && detail?.procedure && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: 14 }}>Ceremony Procedure</h2>
                <div style={{ background: 'var(--ivory-warm)', border: '1px solid var(--border-warm)', borderRadius: 14, padding: '20px 24px', marginBottom: 28 }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.85 }}>{detail.procedure}</p>
                </div>
                <div style={{ background: 'rgba(15,118,110,0.06)', border: '1px solid rgba(15,118,110,0.15)', borderRadius: 12, padding: '14px 18px', fontSize: '0.82rem', color: '#0D5C55', lineHeight: 1.6 }}>
                  🌿 <strong>Note:</strong> The exact procedure may vary slightly based on your community, Gotra, and regional customs. Our Purohit will adapt the ceremony accordingly.
                </div>
              </div>
            )}

            {/* ─── TAB: SAMAGRI ─── */}
            {tab === 3 && detail && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: 8 }}>Puja Samagri List</h2>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 24 }}>
                  We handle sourcing and delivery of all ritual materials. Items marked &quot;by you&quot; are things you typically have at home.
                </p>

                {detail.samagriByUs?.length > 0 && (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,var(--saffron),#C2540A)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', fontWeight: 700 }}>✓</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>Arranged &amp; Delivered by DoMyPooja</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 28 }}>
                      {detail.samagriByUs.map(item => (
                        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--ivory-warm)', border: '1px solid var(--border)', borderRadius: 10, padding: '9px 13px', fontSize: '0.82rem', color: 'var(--text-body)' }}>
                          🌿 {item}
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {detail.samagriByYou?.length > 0 && (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#0F766E,#0D5C55)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', fontWeight: 700 }}>🏠</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>To Be Arranged by You</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                      {detail.samagriByYou.map(item => (
                        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'white', border: '1px solid var(--border)', borderRadius: 10, padding: '9px 13px', fontSize: '0.82rem', color: 'var(--text-body)' }}>
                          🏡 {item}
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <div style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid var(--border-warm)', borderRadius: 12, padding: '14px 18px', marginTop: 20, fontSize: '0.82rem', color: 'var(--saffron-deep)', lineHeight: 1.6 }}>
                  🌿 <strong>Note:</strong> Exact samagri may vary by community and package selected. Our team shares the full detailed list after booking confirmation.
                </div>
              </div>
            )}

            {/* ─── TAB: FAQs ─── */}
            {tab === 4 && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: 20 }}>Frequently Asked Questions</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    ...(detail?.faq || []),
                    { q: 'How far in advance should I book?', a: 'We recommend booking at least 7–10 days in advance to find an auspicious Muhurta and arrange all samagri. For popular dates and festivals, book 3–4 weeks ahead.' },
                    { q: 'Can I choose the language of the Pandit?', a: 'Absolutely. We offer Pandits in Kannada, Hindi, Telugu, Tamil, Bengali, Marathi, Malayalam and Gujarati. Specify your preference when booking.' },
                    { q: 'Is samagri included in the price?', a: 'Yes! All packages include complete puja samagri delivered to your home. You don\'t need to source anything separately.' },
                    { q: 'What is the cancellation and refund policy?', a: 'We offer 100% refund for cancellations made 48+ hours before the ceremony. For later cancellations, we offer free rescheduling.' },
                  ].map((f, i) => (
                    <div key={i} style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
                      <div onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-dark)', background: openFaq === i ? 'rgba(249,115,22,0.06)' : 'white', transition: 'background 0.2s' }}>
                        {f.q}
                        <span style={{ color: 'var(--saffron)', fontSize: '0.8rem', flexShrink: 0, marginLeft: 8, transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', display: 'inline-block' }}>▼</span>
                      </div>
                      {openFaq === i && (
                        <div style={{ padding: '0 18px 14px', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7, background: 'white' }}>{f.a}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT: Booking Card ── */}
          <PujaBookingCard puja={puja} detail={detail} />
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section style={{ background: 'var(--ivory-warm)', padding: '60px 8% 80px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-dark)', textAlign: 'center', marginBottom: 40 }}>Related Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 18 }}>
            {related.map(r => (
              <Link key={r.id} href={`/puja/${r.id}`}
                style={{ textDecoration: 'none', background: 'white', borderRadius: 14, border: '1px solid var(--border)', overflow: 'hidden', display: 'block', transition: 'all 0.3s' }}
                className="rel-card">
                <div style={{ height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.8rem', background: 'linear-gradient(135deg,#FEF3C7,#FED7AA)' }}>{r.emoji}</div>
                <div style={{ padding: '13px 15px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: 8 }}>{r.name}</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-faint)' }}>From <strong style={{ color: 'var(--saffron)' }}>{r.price.split('–')[0].trim()}</strong></div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--saffron)', fontWeight: 600 }}>Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <style>{`.rel-card:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(249,115,22,0.1)}`}</style>
        </section>
      )}
      <style>{`@media(max-width:900px){.detail-layout{grid-template-columns:1fr!important}}`}</style>
    </>
  )
}
