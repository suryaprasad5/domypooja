import { NextResponse } from 'next/server'
import { randomUUID } from 'node:crypto'
import { sql } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'
import { LANGUAGES, TIME_SLOTS } from '@/lib/config'
import { istToday } from '@/lib/dates'
import { str, isDateStr } from '@/lib/validate'
import { orderWaUrl } from '@/lib/whatsapp'

const bad = (error: string, status = 400) => NextResponse.json({ error }, { status })

interface CartRow { serviceId: string; serviceName: string; packageName: string | null; priceRange: string | null }

export async function POST(req: Request) {
  const user = await getCurrentUser()
  if (!user) return bad('Please log in', 401)

  let b: Record<string, unknown>
  try { b = await req.json() } catch { return bad('Invalid request') }

  const date = str(b.ceremonyDate, 10) || null
  const time = str(b.ceremonyTime, 60)
  const venue = str(b.venueAddress, 250)
  const area = str(b.area, 80) || null
  const pincode = str(b.pincode, 6).replace(/\D/g, '') || null
  const language = str(b.language, 20)
  const saamagri = b.saamagri === true
  const alankara = b.alankara === true
  const muhurtam = b.muhurtam === true
  const notes = str(b.notes, 500) || null

  if (date && (!isDateStr(date) || date < istToday())) return bad('Please choose today or a future date')
  if (!date && !muhurtam) return bad('Choose a ceremony date, or tick "Help me fix the Muhurtam"')
  if (venue.length < 5) return bad('Please enter the venue address')
  if (pincode && pincode.length !== 6) return bad('Pincode must be 6 digits')
  if (!(LANGUAGES as readonly string[]).includes(language)) return bad('Please choose a language')
  const slot = (TIME_SLOTS as readonly string[]).includes(time) ? time : null

  try {
    const items = (await sql()`
      select service_id as "serviceId", service_name as "serviceName",
             package_name as "packageName", price_range as "priceRange"
      from cart_items where user_id = ${user.id}::uuid order by created_at`) as unknown as CartRow[]
    if (!items.length) return bad('Your cart is empty')

    const seq = (await sql()`select nextval('order_no_seq')::int as n`) as unknown as { n: number }[]
    const orderNo = `DMP-${istToday().replaceAll('-', '')}-${seq[0].n}`
    const orderId = randomUUID()
    const firstTimeFree = muhurtam && !user.freeMuhurtamUsed

    // One atomic transaction: create order, copy cart → order items, empty cart, mark free Muhurtam used.
    await sql().transaction((txn) => [
      txn`insert into orders (id, order_no, user_id, ceremony_date, ceremony_time, venue_address, area, city, pincode,
                              language, saamagri_opted, alankara_opted, free_muhurtam_requested, notes)
          values (${orderId}::uuid, ${orderNo}, ${user.id}::uuid, ${date}::date, ${slot}, ${venue}, ${area}, 'Bengaluru', ${pincode},
                  ${language}, ${saamagri}, ${alankara}, ${muhurtam}, ${notes})`,
      txn`insert into order_items (order_id, service_id, service_name, package_name, price_range)
          select ${orderId}::uuid, service_id, service_name, package_name, price_range
          from cart_items where user_id = ${user.id}::uuid`,
      txn`delete from cart_items where user_id = ${user.id}::uuid`,
      txn`update users set free_muhurtam_used = true where id = ${user.id}::uuid and ${firstTimeFree}::boolean`,
    ])

    const whatsappUrl = orderWaUrl({
      orderNo, fullName: user.fullName, phone: user.phone,
      items, ceremonyDate: date, ceremonyTime: slot, venueAddress: venue, area, pincode,
      language, saamagri, alankara, muhurtam, firstTimeFree, notes,
    })
    return NextResponse.json({ ok: true, orderNo, whatsappUrl })
  } catch (e) {
    console.error('checkout failed', e)
    return bad('Could not place your order. Please try again.', 500)
  }
}
