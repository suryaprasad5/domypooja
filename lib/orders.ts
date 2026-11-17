import { sql } from '@/lib/db'
import type { OrderView } from '@/lib/order-types'

export async function getOrders(userId: string): Promise<OrderView[]> {
  const rows = await sql()`
    select o.id, o.order_no as "orderNo", o.status,
           to_char(o.ceremony_date, 'YYYY-MM-DD') as "ceremonyDate",
           o.ceremony_time as "ceremonyTime",
           o.venue_address as "venueAddress", o.area, o.city, o.pincode, o.language,
           o.saamagri_opted as saamagri, o.alankara_opted as alankara,
           o.free_muhurtam_requested as muhurtam, o.notes,
           to_char(o.created_at at time zone 'Asia/Kolkata', 'DD Mon YYYY, HH12:MI AM') as "placedAt",
           coalesce((
             select json_agg(json_build_object(
                      'serviceId', i.service_id, 'serviceName', i.service_name,
                      'packageName', i.package_name, 'priceRange', i.price_range)
                    order by i.service_name)
             from order_items i where i.order_id = o.id
           ), '[]'::json) as items
    from orders o
    where o.user_id = ${userId}::uuid
    order by o.created_at desc
    limit 200`
  return rows as unknown as OrderView[]
}

export async function getCartItems(userId: string) {
  return (await sql()`
    select service_id as "serviceId", service_name as "serviceName",
           package_name as "packageName", price_range as "priceRange"
    from cart_items where user_id = ${userId}::uuid order by created_at`) as unknown as {
      serviceId: string; serviceName: string; packageName: string | null; priceRange: string | null
    }[]
}
