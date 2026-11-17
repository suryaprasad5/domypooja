export interface OrderItemView {
  serviceId: string
  serviceName: string
  packageName: string | null
  priceRange: string | null
}

export interface OrderView {
  id: string
  orderNo: string
  status: 'requested' | 'confirmed' | 'completed' | 'cancelled'
  ceremonyDate: string | null
  ceremonyTime: string | null
  venueAddress: string
  area: string | null
  city: string
  pincode: string | null
  language: string
  saamagri: boolean
  alankara: boolean
  muhurtam: boolean
  notes: string | null
  placedAt: string
  items: OrderItemView[]
}

export type DisplayStatus = 'requested' | 'confirmed' | 'completed' | 'cancelled' | 'expired'

/** An order stays "current" until the end of its ceremony day (India time). */
export function displayStatus(o: Pick<OrderView, 'status' | 'ceremonyDate'>, today: string): DisplayStatus {
  const past = !!o.ceremonyDate && o.ceremonyDate < today
  if (o.status === 'cancelled') return 'cancelled'
  if (o.status === 'completed') return 'completed'
  if (past) return o.status === 'confirmed' ? 'completed' : 'expired'
  return o.status
}

export const isCurrent = (o: Pick<OrderView, 'status' | 'ceremonyDate'>, today: string) => {
  const s = displayStatus(o, today)
  return s === 'requested' || s === 'confirmed'
}

export const STATUS_META: Record<DisplayStatus, { label: string; bg: string; fg: string }> = {
  requested: { label: 'Awaiting confirmation', bg: '#FEF3C7', fg: '#92400E' },
  confirmed: { label: 'Confirmed', bg: '#CCFBF1', fg: '#0D5C55' },
  completed: { label: 'Completed', bg: '#DCFCE7', fg: '#166534' },
  cancelled: { label: 'Cancelled', bg: '#F1F5F9', fg: '#475569' },
  expired:   { label: 'Not confirmed', bg: '#F1F5F9', fg: '#475569' },
}
