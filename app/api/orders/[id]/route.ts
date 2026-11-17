import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { getSessionUserId } from '@/lib/auth'
import { isUuid } from '@/lib/validate'

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const uid = await getSessionUserId()
  if (!uid) return NextResponse.json({ error: 'Please log in' }, { status: 401 })

  const { id } = await params
  if (!isUuid(id)) return NextResponse.json({ error: 'Invalid order' }, { status: 400 })

  let b: { action?: unknown }
  try { b = await req.json() } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }) }
  if (b.action !== 'cancel') return NextResponse.json({ error: 'Unsupported action' }, { status: 400 })

  // Customers can cancel only while the order is still "requested". Once confirmed, they contact us instead.
  const rows = (await sql()`
    update orders set status = 'cancelled', updated_at = now()
    where id = ${id}::uuid and user_id = ${uid}::uuid and status = 'requested'
    returning order_no`) as unknown as { order_no: string }[]
  if (!rows.length) {
    return NextResponse.json(
      { error: 'This order is already confirmed or closed. Please contact us on WhatsApp to change it.' },
      { status: 409 }
    )
  }
  return NextResponse.json({ ok: true })
}
