import { SITE } from '@/lib/config'
import { prettyDate } from '@/lib/dates'

export interface WaOrder {
  orderNo: string
  fullName: string
  phone: string
  items: { serviceName: string; packageName?: string | null; priceRange?: string | null }[]
  ceremonyDate: string | null
  ceremonyTime?: string | null
  venueAddress: string
  area?: string | null
  pincode?: string | null
  language: string
  saamagri: boolean
  alankara: boolean
  muhurtam: boolean
  firstTimeFree?: boolean
  notes?: string | null
}

export function buildOrderMessage(o: WaOrder): string {
  const lines: string[] = []
  lines.push('🙏 *New Pooja Booking Request — DoMyPooja*')
  lines.push(`Order No: *${o.orderNo}*`)
  lines.push('')
  lines.push(`Name: ${o.fullName}`)
  lines.push(`Phone: +91 ${o.phone}`)
  lines.push('')
  lines.push('*Poojas:*')
  o.items.forEach((it, i) => {
    const extra = [it.packageName ? `${it.packageName} package` : '', it.priceRange || ''].filter(Boolean).join(' · ')
    lines.push(`${i + 1}. ${it.serviceName}${extra ? ` (${extra})` : ''}`)
  })
  lines.push('')
  lines.push(`Date: ${o.ceremonyDate ? prettyDate(o.ceremonyDate) : 'Not fixed — need Muhurtam help'}`)
  if (o.ceremonyTime) lines.push(`Time: ${o.ceremonyTime}`)
  lines.push(`Language: ${o.language}`)
  lines.push(
    `Venue: ${[o.venueAddress, o.area, 'Bengaluru', o.pincode].filter(Boolean).join(', ')}`
  )
  lines.push(`Saamagri: ${o.saamagri ? 'Yes' : 'No'}  |  Alankara/Decoration: ${o.alankara ? 'Yes' : 'No'}`)
  if (o.muhurtam) {
    lines.push(`Muhurtam help: Yes${o.firstTimeFree ? ' (first booking — free)' : ''}`)
  }
  if (o.notes) lines.push(`Notes: ${o.notes}`)
  return lines.join('\n')
}

export function orderWaUrl(o: WaOrder): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(buildOrderMessage(o))}`
}
