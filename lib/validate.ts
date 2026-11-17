export function str(v: unknown, max = 200): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}

export function cleanPhone(v: unknown): string {
  const digits = (typeof v === 'string' ? v : '').replace(/\D/g, '')
  return digits.length > 10 ? digits.slice(-10) : digits
}

export const isPhone = (p: string) => /^[6-9]\d{9}$/.test(p)
export const isEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e)
export const isUuid = (s: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(s)
export const isDateStr = (s: string) => /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s))
