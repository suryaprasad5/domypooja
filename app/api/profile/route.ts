import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { getSessionUserId } from '@/lib/auth'
import { LANGUAGES, NAKSHATRAS } from '@/lib/config'
import { str, cleanPhone, isPhone } from '@/lib/validate'

const bad = (error: string, status = 400) => NextResponse.json({ error }, { status })

export async function PATCH(req: Request) {
  const uid = await getSessionUserId()
  if (!uid) return bad('Please log in', 401)

  let b: Record<string, unknown>
  try { b = await req.json() } catch { return bad('Invalid request') }

  const fullName = str(b.fullName, 80)
  const phone = cleanPhone(b.phone)
  const addressLine = str(b.addressLine, 250) || null
  const area = str(b.area, 80) || null
  const pincode = str(b.pincode, 6).replace(/\D/g, '') || null
  const language = str(b.preferredLanguage, 20)
  const gotra = str(b.gotra, 60) || null
  const nakshatra = str(b.nakshatra, 30)

  if (fullName.length < 2) return bad('Please enter your full name')
  if (!isPhone(phone)) return bad('Please enter a valid 10-digit mobile number')
  if (pincode && pincode.length !== 6) return bad('Pincode must be 6 digits')
  if (!(LANGUAGES as readonly string[]).includes(language)) return bad('Please choose a preferred language')
  const nak = nakshatra && (NAKSHATRAS as readonly string[]).includes(nakshatra) ? nakshatra : null

  await sql()`
    update users set full_name = ${fullName}, phone = ${phone}, address_line = ${addressLine}, area = ${area},
                     pincode = ${pincode}, preferred_language = ${language}, gotra = ${gotra}, nakshatra = ${nak}
    where id = ${uid}::uuid`
  return NextResponse.json({ ok: true })
}
