import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { sql } from '@/lib/db'
import { isUuid } from '@/lib/validate'

const COOKIE = 'dmp_session'
const MAX_AGE = 60 * 60 * 24 * 7 // 7 days

export interface UserProfile {
  id: string
  fullName: string
  email: string
  phone: string
  addressLine: string | null
  area: string | null
  city: string
  pincode: string | null
  preferredLanguage: string
  gotra: string | null
  nakshatra: string | null
  freeMuhurtamUsed: boolean
}

function secret() {
  const s = process.env.AUTH_SECRET
  if (!s || s.length < 32) throw new Error('AUTH_SECRET must be set to a string of 32+ characters')
  return new TextEncoder().encode(s)
}

export async function createSession(userId: string) {
  const token = await new SignJWT({})
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(userId)
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret())
  const jar = await cookies()
  jar.set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE,
  })
}

export async function destroySession() {
  const jar = await cookies()
  jar.delete(COOKIE)
}

/** Verifies the cookie only (no database call). */
export async function getSessionUserId(): Promise<string | null> {
  const jar = await cookies()
  const token = jar.get(COOKIE)?.value
  if (!token) return null
  try {
    const { payload } = await jwtVerify(token, secret())
    return payload.sub && isUuid(payload.sub) ? payload.sub : null
  } catch {
    return null
  }
}

export async function getCurrentUser(): Promise<UserProfile | null> {
  const id = await getSessionUserId()
  if (!id) return null
  const rows = (await sql()`
    select id, full_name as "fullName", email, phone,
           address_line as "addressLine", area, city, pincode,
           preferred_language as "preferredLanguage", gotra, nakshatra,
           free_muhurtam_used as "freeMuhurtamUsed"
    from users where id = ${id}::uuid`) as unknown as UserProfile[]
  return rows[0] ?? null
}
