import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import { getCartItems } from '@/lib/orders'
import CartClient from '@/components/cart/CartClient'

export const metadata = { title: 'My Cart — DoMyPooja' }
export const dynamic = 'force-dynamic'

export default async function CartPage() {
  const user = await getCurrentUser()
  if (!user) redirect('/login?next=/cart')
  const items = await getCartItems(user.id)
  return (
    <CartClient
      initialItems={items}
      defaults={{
        addressLine: user.addressLine ?? '', area: user.area ?? '', pincode: user.pincode ?? '',
        language: user.preferredLanguage, firstTime: !user.freeMuhurtamUsed,
      }}
    />
  )
}
