import { SERVICES } from '@/data/services'
import { PUJA_DETAILS } from '@/data/puja-details'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PujaDetailClient from '@/components/services/PujaDetailClient'

export function generateStaticParams() {
  return SERVICES.map(s => ({ id: s.id }))
}

export default async function PujaDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const puja = SERVICES.find(s => s.id === id)
  if (!puja) notFound()

  const detail = PUJA_DETAILS[id] || null
  const related = SERVICES.filter(s => s.category === puja.category && s.id !== puja.id).slice(0, 4)

  return <PujaDetailClient puja={puja} detail={detail} related={related} />
}
