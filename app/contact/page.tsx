'use client'
import { useState } from 'react'
import Link from 'next/link'

const FAQS = [
  { q:'How quickly can I book a Pandit?', a:'For most cities, we can arrange a Pandit within 24–48 hours. For popular dates and major festivals, we recommend booking 7–10 days in advance.' },
  { q:'Is the puja samagri included in the price?', a:'Yes! All our packages include complete puja samagri delivered to your home before the ceremony. You need not source or arrange anything.' },
  { q:'Can I request a Pandit from my community?', a:'Absolutely. We have Pandits from virtually all Hindu traditions — North Indian, South Indian, Bengali, Gujarati, Marathi and more. Specify your preference when booking.' },
  { q:'How do I register as a Pandit on DoMyPooja?', a:'Fill out the contact form, select "Pandit Registration," and our team will contact you within 24 hours with the process and verification requirements.' },
  { q:'What is the refund policy if I cancel?', a:'We offer a 100% refund for cancellations made 48+ hours before the ceremony. For later cancellations, we provide free rescheduling.' },
]

export default function ContactPage() {
  const [open, setOpen] = useState<number | null>(null)
  const [form, setForm] = useState({ name:'', phone:'', email:'', service:'', city:'', message:'' })

  const submit = () => {
    if (!form.name || !form.phone) { alert('Please fill in your name and phone number.'); return }
    const msg = `New enquiry from DoMyPooja website:\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nCity: ${form.city}\nMessage: ${form.message}`
    window.open(`https://wa.me/919036050108?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const inp: React.CSSProperties = {
    width:'100%', padding:'12px 16px',
    border:'1.5px solid var(--border)', borderRadius:10,
    fontFamily:'var(--font-body)', fontSize:'0.9rem',
    color:'var(--text-body)', background:'var(--ivory-warm)',
    outline:'none', transition:'border-color 0.2s',
    marginBottom:0,
  }

  return (
    <>
      {/* Hero */}
      <div style={{ padding:'140px 8% 80px',background:'linear-gradient(160deg,#1C1009 0%,#2D1506 60%,#0D5C55 100%)',color:'white',textAlign:'center',position:'relative',overflow:'hidden' }}>
        <div style={{ position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none' }}>
          <span style={{ fontFamily:'var(--font-devan)',fontSize:'50vw',color:'rgba(255,255,255,0.025)',lineHeight:1 }}>ॐ</span>
        </div>
        <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'#FDE68A',marginBottom:14 }}>✦ We&apos;re Here to Help ✦</div>
        <h1 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(2.4rem,4.5vw,3.8rem)',fontWeight:700,color:'white',marginBottom:16 }}>Contact DoMyPooja</h1>
        <p style={{ fontSize:'1.05rem',color:'rgba(255,255,255,0.65)',maxWidth:540,margin:'0 auto 28px' }}>Have a question? Need help choosing a puja? Want to register as a Pandit? We&apos;re available 7 days a week.</p>
        <div style={{ display:'flex',alignItems:'center',gap:8,justifyContent:'center',fontSize:'0.8rem',color:'rgba(255,255,255,0.5)' }}>
          <Link href="/" style={{ color:'rgba(255,255,255,0.6)',textDecoration:'none' }}>Home</Link><span>/</span><span>Contact Us</span>
        </div>
      </div>

      <section style={{ padding:'80px 8% 100px',background:'var(--ivory)' }}>
        <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'start' }} className="contact-grid">

          {/* Form */}
          <div>
            <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'var(--saffron)',marginBottom:14 }}>✦ Send a Message ✦</div>
            <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'var(--text-dark)',marginBottom:8 }}>Get in Touch</h2>
            <div style={{ width:60,height:3,background:'linear-gradient(90deg,var(--saffron),#F59E0B)',borderRadius:2,margin:'0 0 24px' }} />
            <p style={{ fontSize:'0.9rem',color:'var(--text-muted)',marginBottom:32,lineHeight:1.7 }}>Fill in the form below and our team will get back to you within 2 hours during business hours (8 AM – 8 PM, Mon–Sun).</p>

            <div style={{ background:'white',borderRadius:18,border:'1px solid var(--border-warm)',padding:36,boxShadow:'0 8px 32px rgba(249,115,22,0.08)' }}>
              <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16 }}>
                <div>
                  <label style={{ display:'block',fontSize:'0.78rem',fontWeight:700,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.8px',marginBottom:7 }}>Your Name *</label>
                  <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Arjun Sharma" style={inp} />
                </div>
                <div>
                  <label style={{ display:'block',fontSize:'0.78rem',fontWeight:700,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.8px',marginBottom:7 }}>Phone Number *</label>
                  <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+91 98765 43210" style={inp} />
                </div>
              </div>
              <div style={{ marginBottom:16 }}>
                <label style={{ display:'block',fontSize:'0.78rem',fontWeight:700,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.8px',marginBottom:7 }}>Email Address</label>
                <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="arjun@example.com" style={inp} />
              </div>
              <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16 }}>
                <div>
                  <label style={{ display:'block',fontSize:'0.78rem',fontWeight:700,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.8px',marginBottom:7 }}>Puja / Service</label>
                  <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})} style={{...inp,cursor:'pointer'}}>
                    <option value="">Select a service</option>
                    {['Griha Pravesh Puja','Satyanarayan Puja','Maha Ganapati Homa','E-Puja Online','General Inquiry','Pandit Registration','Other'].map(s=><option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display:'block',fontSize:'0.78rem',fontWeight:700,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.8px',marginBottom:7 }}>Your City</label>
                  <select value={form.city} onChange={e=>setForm({...form,city:e.target.value})} style={{...inp,cursor:'pointer'}}>
                    <option value="">Select city</option>
                    {['Bangalore','Mumbai','Delhi NCR','Hyderabad','Chennai','Pune','Abroad (NRI)','Other'].map(c=><option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ marginBottom:24 }}>
                <label style={{ display:'block',fontSize:'0.78rem',fontWeight:700,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.8px',marginBottom:7 }}>Message</label>
                <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us about the puja you need, preferred date, special requirements..."
                  style={{...inp,resize:'vertical',minHeight:120}} />
              </div>
              <button onClick={submit} style={{ width:'100%',padding:15,borderRadius:'999px',background:'linear-gradient(135deg,var(--saffron),#C2540A)',color:'white',border:'none',fontFamily:'var(--font-body)',fontSize:'1rem',fontWeight:600,cursor:'pointer',boxShadow:'0 6px 22px rgba(249,115,22,0.35)' }}>
                🙏 Send Message
              </button>
              <p style={{ fontSize:'0.75rem',color:'var(--text-faint)',textAlign:'center',marginTop:12 }}>We typically respond within 2 hours · Mon–Sun 8 AM – 8 PM</p>
            </div>
          </div>

          {/* Info + FAQ */}
          <div>
            <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'var(--saffron)',marginBottom:14 }}>✦ Contact Information ✦</div>
            <h2 style={{ fontFamily:'var(--font-display)',fontSize:'clamp(1.9rem,3.5vw,3rem)',fontWeight:700,color:'var(--text-dark)',marginBottom:8 }}>Reach Us Directly</h2>
            <div style={{ width:60,height:3,background:'linear-gradient(90deg,var(--saffron),#F59E0B)',borderRadius:2,margin:'0 0 32px' }} />

            <div style={{ display:'flex',flexDirection:'column',gap:16,marginBottom:40 }}>
              {[
                { icon:'📞', label:'Phone',     val:'080-6116-0400',           href:'tel:+918061160400', sub:'Mon–Sun · 8 AM – 8 PM IST' },
                { icon:'💬', label:'WhatsApp',  val:'+91 90360-50108',         href:'https://wa.me/919036050108', sub:'Instant support · 24/7' },
                { icon:'✉️', label:'Email',      val:'namaste@domypooja.com',  href:'mailto:namaste@domypooja.com', sub:'Response within 4–6 hours' },
                { icon:'📍', label:'Office',     val:'Bengaluru — 560076',      href:'#', sub:'Karnataka, India' },
              ].map(c => (
                <div key={c.label} style={{ background:'white',borderRadius:14,border:'1px solid var(--border)',padding:20,display:'flex',gap:16,alignItems:'flex-start',transition:'all 0.2s' }} className="contact-row">
                  <div style={{ width:48,height:48,minWidth:48,borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.4rem',background:'rgba(249,115,22,0.08)' }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize:'0.75rem',fontWeight:700,textTransform:'uppercase',letterSpacing:1,color:'var(--text-faint)',marginBottom:4 }}>{c.label}</div>
                    <a href={c.href} target={c.href.startsWith('http')?'_blank':'_self'} rel="noreferrer"
                      style={{ fontFamily:'var(--font-display)',fontSize:'1.05rem',fontWeight:600,color:'var(--saffron)',textDecoration:'none',display:'block',marginBottom:2 }}>{c.val}</a>
                    <div style={{ fontSize:'0.8rem',color:'var(--text-muted)' }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.72rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'var(--saffron)',marginBottom:16 }}>✦ FAQs ✦</div>
            <div style={{ display:'flex',flexDirection:'column',gap:10 }}>
              {FAQS.map((f,i) => (
                <div key={f.q} style={{ border:'1px solid var(--border)',borderRadius:12,overflow:'hidden' }}>
                  <div onClick={() => setOpen(open===i?null:i)}
                    style={{ padding:'14px 18px',display:'flex',alignItems:'center',justifyContent:'space-between',cursor:'pointer',fontWeight:600,fontSize:'0.88rem',color:'var(--text-dark)',background:open===i?'rgba(249,115,22,0.06)':'white',transition:'background 0.2s' }}>
                    {f.q}
                    <span style={{ color:'var(--saffron)',fontSize:'0.8rem',flexShrink:0,marginLeft:8,transform:open===i?'rotate(180deg)':'none',transition:'transform 0.3s' }}>▼</span>
                  </div>
                  {open===i && (
                    <div style={{ padding:'0 18px 14px',fontSize:'0.85rem',color:'var(--text-muted)',lineHeight:1.7,background:'white' }}>{f.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <style>{`.contact-row:hover{border-color:var(--border-warm)!important;box-shadow:0 4px 14px rgba(249,115,22,0.08)}@media(max-width:900px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </>
  )
}
