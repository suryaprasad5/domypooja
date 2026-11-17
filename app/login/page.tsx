import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { getSessionUserId } from '@/lib/auth'
import LoginForm from '@/components/auth/LoginForm'

export const metadata = { title: 'Log in — DoMyPooja' }
export const dynamic = 'force-dynamic'

export default async function Page() {
  if (await getSessionUserId()) redirect('/account')
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  )
}
