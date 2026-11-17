import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { sql } from '@/lib/db'
import { createSession } from '@/lib/auth'
import { LANGUAGES, NAKSHATRAS } from '@/lib/config'
import { str, cleanPhone, isPhone, isEmail } from '@/lib/validate'

const bad = (error: string, status = 400) => NextResponse.json({ error }, { status })

export async function POST(req: Request) {
  let b: Record<string, unknown>
  try { b = await req.json() } catch { return bad('Invalid request') }

  const fullName = str(b.fullName, 80)
  const email = str(b.email, 120).toLowerCase()
  const phone = cleanPhone(b.phone)
  const password = typeof b.password === 'string' ? b.password : ''
  const addressLine = str(b.addressLine, 250) || null
  const area = str(b.area, 80) || null
  const pincode = str(b.pincode, 6).replace(/\D/g, '') || null
  const language = str(b.preferredLanguage, 20)
  const gotra = str(b.gotra, 60) || null
  const nakshatra = str(b.nakshatra, 30)

  if (fullName.length < 2) return bad('Please enter your full name')
  if (!isEmail(email)) return bad('Please enter a valid email address')
  if (!isPhone(phone)) return bad('Please enter a valid 10-digit mobile number')
  if (password.length < 8) return bad('Password must be at least 8 characters')
  if (password.length > 72) return bad('Password must be at most 72 characters')
  if (pincode && pincode.length !== 6) return bad('Pincode must be 6 digits')
  if (!(LANGUAGES as readonly string[]).includes(language)) return bad('Please choose a preferred language')
  const nak = nakshatra && (NAKSHATRAS as readonly string[]).includes(nakshatra) ? nakshatra : null

  const hash = await bcrypt.hash(password, 10)
  try {
    const rows = (await sql()`
      insert into users (full_name, email, phone, password_hash, address_line, area, pincode, preferred_language, gotra, nakshatra)
      values (${fullName}, ${email}, ${phone}, ${hash}, ${addressLine}, ${area}, ${pincode}, ${language}, ${gotra}, ${nak})
      returning id`) as unknown as { id: string }[]
    await createSession(rows[0].id)
    return NextResponse.json({ ok: true })
  } catch (e: unknown) {
    if ((e as { code?: string })?.code === '23505') return bad('An account with this email already exists. Please log in.', 409)
    console.error('signup failed', e)
    return bad('Something went wrong. Please try again.', 500)
  }
}
