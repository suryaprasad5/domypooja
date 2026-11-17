import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { getSessionUserId } from '@/lib/auth'
import { SERVICES } from '@/data/services'
import { PUJA_DETAILS } from '@/data/puja-details'

export const dynamic = 'force-dynamic'

const unauthorized = () => NextResponse.json({ error: 'Please log in' }, { status: 401 })

async function count(userId: string) {
  const r = (await sql()`select count(*)::int as n from cart_items where user_id = ${userId}::uuid`) as unknown as { n: number }[]
  return r[0]?.n ?? 0
}

export async function GET() {
  const uid = await getSessionUserId()
  if (!uid) return unauthorized()
  const items = await sql()`
    select service_id as "serviceId", service_name as "serviceName",
           package_name as "packageName", price_range as "priceRange"
    from cart_items where user_id = ${uid}::uuid order by created_at`
  return NextResponse.json({ items })
}

export async function POST(req: Request) {
  const uid = await getSessionUserId()
  if (!uid) return unauthorized()

  let b: { serviceId?: unknown; serviceIds?: unknown; packageName?: unknown }
  try { b = await req.json() } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }) }

  const ids: string[] = Array.isArray(b.serviceIds)
    ? b.serviceIds.filter((x): x is string => typeof x === 'string').slice(0, 30)
    : typeof b.serviceId === 'string' ? [b.serviceId] : []
  if (!ids.length) return NextResponse.json({ error: 'No service selected' }, { status: 400 })

  let added = 0
  for (const id of ids) {
    const svc = SERVICES.find(s => s.id === id)   // name/price always come from our own data, never from the client
    if (!svc) continue
    const validPkgs = PUJA_DETAILS[id]?.packages.map(p => p.name) ?? []
    const pkg = ids.length === 1 && typeof b.packageName === 'string' && validPkgs.includes(b.packageName) ? b.packageName : null
    await sql()`
      insert into cart_items (user_id, service_id, service_name, package_name, price_range)
      values (${uid}::uuid, ${svc.id}, ${svc.name}, ${pkg}, ${svc.price})
      on conflict (user_id, service_id)
      do update set package_name = coalesce(excluded.package_name, cart_items.package_name)`
    added++
  }
  if (!added) return NextResponse.json({ error: 'Service not found' }, { status: 404 })
  return NextResponse.json({ ok: true, count: await count(uid) })
}

export async function DELETE(req: Request) {
  const uid = await getSessionUserId()
  if (!uid) return unauthorized()
  const serviceId = new URL(req.url).searchParams.get('serviceId')
  if (!serviceId) return NextResponse.json({ error: 'serviceId required' }, { status: 400 })
  await sql()`delete from cart_items where user_id = ${uid}::uuid and service_id = ${serviceId}`
  return NextResponse.json({ ok: true, count: await count(uid) })
}
