import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { sql } from '@/lib/db'
import { createSession } from '@/lib/auth'
import { str } from '@/lib/validate'

// Compared against when the email doesn't exist, so response time doesn't reveal which emails are registered.
const DUMMY_HASH = bcrypt.hashSync('not-a-real-password', 10)

export async function POST(req: Request) {
  let b: Record<string, unknown>
  try { b = await req.json() } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }) }

  const email = str(b.email, 120).toLowerCase()
  const password = typeof b.password === 'string' ? b.password : ''
  if (!email || !password) return NextResponse.json({ error: 'Enter your email and password' }, { status: 400 })

  try {
    const rows = (await sql()`
      select id, password_hash as "hash" from users where lower(email) = ${email} limit 1`) as unknown as { id: string; hash: string }[]
    const user = rows[0]
    const ok = await bcrypt.compare(password, user?.hash ?? DUMMY_HASH)
    if (!user || !ok) return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })

    await sql()`update users set last_login_at = now() where id = ${user.id}::uuid`
    await createSession(user.id)
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('login failed', e)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
