import { NextResponse } from 'next/server'
import { getSessionUserId } from '@/lib/auth'
import { sql } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  const id = await getSessionUserId()
  if (!id) return NextResponse.json({ user: null, cartCount: 0 })
  try {
    const rows = (await sql()`
      select u.full_name as "fullName",
             (select count(*)::int from cart_items c where c.user_id = u.id) as "cartCount"
      from users u where u.id = ${id}::uuid`) as unknown as { fullName: string; cartCount: number }[]
    const r = rows[0]
    if (!r) return NextResponse.json({ user: null, cartCount: 0 })
    return NextResponse.json({
      user: { fullName: r.fullName, firstName: r.fullName.split(' ')[0] },
      cartCount: r.cartCount,
    })
  } catch {
    return NextResponse.json({ user: null, cartCount: 0 })
  }
}
