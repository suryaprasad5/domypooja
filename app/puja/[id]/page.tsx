import { SERVICES } from '@/data/services'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PujaBookingCard from '@/components/services/PujaBookingCard'

export function generateStaticParams() {
  return SERVICES.map(s => ({ id: s.id }))
}

export default async function PujaDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const puja = SERVICES.find(s => s.id === id)
  if (!puja) notFound()
  const related = SERVICES.filter(s => s.category === puja.category && s.id !== puja.id).slice(0, 4)
  return (
    <>
      <div style={{ padding:'calc(72px + 20px) 8% 0',background:'var(--ivory)' }}>
        <div style={{ display:'flex',alignItems:'center',gap:8,fontSize:'0.8rem',color:'var(--text-faint)',flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--text-faint)',textDecoration:'none' }}>Home</Link>
          <span>/</span>
          <Link href="/puja-services" style={{ color:'var(--text-faint)',textDecoration:'none' }}>Puja Services</Link>
          <span>/</span>
          <span style={{ color:'var(--saffron)' }}>{puja.name}</span>
        </div>
      </div>
      <section style={{ padding:'32px 8% 100px' }}>
        <div style={{ display:'grid',gridTemplateColumns:'1fr 360px',gap:48,alignItems:'start' }} className="detail-layout">
          <div>
            <div style={{ height:320,borderRadius:18,background:'linear-gradient(135deg,#FEF3C7,#FED7AA)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'8rem',marginBottom:32,border:'1px solid var(--border-warm)' }}>{puja.emoji}</div>
            <h1 style={{ fontFamily:'var(--font-display)',fontSize:'2.2rem',fontWeight:700,color:'var(--text-dark)',marginBottom:12 }}>{puja.name}</h1>
            <div style={{ display:'flex',flexWrap:'wrap',gap:12,marginBottom:28 }}>
              {[['⏱️','2–4 hours'],['📍','At your home'],['🗣️','Kannada · Hindi'],['📦','Samagri included'],['⭐','4.9★ rated']].map(([ic,lb]) => (
                <div key={lb} style={{ display:'flex',alignItems:'center',gap:6,background:'var(--ivory-warm)',border:'1px solid var(--border)',borderRadius:'999px',padding:'5px 13px',fontSize:'0.78rem',color:'var(--text-muted)' }}>{ic} <strong style={{color:'var(--text-dark)'}}>{lb}</strong></div>
              ))}
            </div>
            <h2 style={{ fontFamily:'var(--font-display)',fontSize:'1.2rem',color:'var(--text-dark)',marginBottom:12 }}>About This Puja</h2>
            <p style={{ fontSize:'0.92rem',color:'var(--text-body)',lineHeight:1.8,marginBottom:20 }}>{puja.description || `${puja.name} is a sacred Vedic ceremony performed with devotion and as per ancient scriptural injunctions. Our verified Kannada Pandits ensure the ceremony is conducted exactly as per your community and regional traditions, with all puja samagri included.`}</p>
            <h2 style={{ fontFamily:'var(--font-display)',fontSize:'1.2rem',color:'var(--text-dark)',marginBottom:12 }}>Benefits</h2>
            <div style={{ display:'flex',flexDirection:'column',gap:10,marginBottom:28 }}>
              {['Removes negative energies and purifies the space or occasion.','Invokes divine blessings for protection, prosperity and wellbeing.','Performed on an auspicious muhurat for maximum spiritual benefit.','Conducted exactly as per your community and regional traditions.','All samagri sourced and delivered to your doorstep.'].map(b => (
                <div key={b} style={{ display:'flex',gap:12,alignItems:'flex-start',fontSize:'0.88rem',color:'var(--text-body)',lineHeight:1.6 }}>
                  <span style={{ color:'var(--saffron)',flexShrink:0,marginTop:2 }}>✦</span>{b}
                </div>
              ))}
            </div>
            <h2 style={{ fontFamily:'var(--font-display)',fontSize:'1.2rem',color:'var(--text-dark)',marginBottom:12 }}>Samagri Included</h2>
            <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:28 }}>
              {['Kalash','Coconut','Mango Leaves','Turmeric & Kumkum','Ghee & Camphor','Incense Sticks','Flowers & Garlands','Rice (Akshat)','Sacred Thread','Sandal Paste','Panchamrit','Honey & Sugar'].map(item => (
                <div key={item} style={{ display:'flex',alignItems:'center',gap:8,background:'var(--ivory-warm)',border:'1px solid var(--border)',borderRadius:8,padding:'8px 12px',fontSize:'0.8rem' }}>🌿 {item}</div>
              ))}
            </div>
          </div>
          <PujaBookingCard puja={puja} />
        </div>
      </section>
      {related.length > 0 && (
        <section style={{ background:'var(--ivory-warm)',padding:'60px 8% 80px' }}>
          <h2 style={{ fontFamily:'var(--font-display)',fontSize:'1.8rem',fontWeight:700,color:'var(--text-dark)',textAlign:'center',marginBottom:40 }}>Related Services</h2>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:18 }}>
            {related.map(r => (
              <Link key={r.id} href={`/puja/${r.id}`} style={{ textDecoration:'none',background:'white',borderRadius:14,border:'1px solid var(--border)',overflow:'hidden',display:'block',transition:'all 0.3s' }} className="rel-card">
                <div style={{ height:110,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2.8rem',background:'linear-gradient(135deg,#FEF3C7,#FED7AA)' }}>{r.emoji}</div>
                <div style={{ padding:'13px 15px' }}>
                  <div style={{ fontFamily:'var(--font-display)',fontSize:'0.9rem',fontWeight:600,color:'var(--text-dark)',marginBottom:6 }}>{r.name}</div>
                  <div style={{ fontSize:'0.74rem',color:'var(--text-faint)' }}>From <strong style={{color:'var(--saffron)'}}>{r.price.split('–')[0].trim()}</strong></div>
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
