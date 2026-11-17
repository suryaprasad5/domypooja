'use client'

export interface AddResult {
  ok: boolean
  needsLogin?: boolean
  count?: number
  error?: string
}

function notifyCartChanged() {
  window.dispatchEvent(new Event('dmp:cart'))
}

export async function addToCart(serviceId: string, packageName?: string | null): Promise<AddResult> {
  try {
    const res = await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ serviceId, packageName: packageName ?? null }),
    })
    if (res.status === 401) return { ok: false, needsLogin: true }
    const data = await res.json().catch(() => ({}))
    if (!res.ok) return { ok: false, error: data.error || 'Could not add to cart' }
    notifyCartChanged()
    return { ok: true, count: data.count }
  } catch {
    return { ok: false, error: 'Network error. Please try again.' }
  }
}

export async function addManyToCart(serviceIds: string[]): Promise<AddResult> {
  try {
    const res = await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ serviceIds }),
    })
    if (res.status === 401) return { ok: false, needsLogin: true }
    const data = await res.json().catch(() => ({}))
    if (!res.ok) return { ok: false, error: data.error || 'Could not add to cart' }
    notifyCartChanged()
    return { ok: true, count: data.count }
  } catch {
    return { ok: false, error: 'Network error. Please try again.' }
  }
}

export async function removeFromCart(serviceId: string): Promise<AddResult> {
  try {
    const res = await fetch(`/api/cart?serviceId=${encodeURIComponent(serviceId)}`, { method: 'DELETE' })
    if (!res.ok) return { ok: false }
    const data = await res.json().catch(() => ({}))
    notifyCartChanged()
    return { ok: true, count: data.count }
  } catch {
    return { ok: false }
  }
}
