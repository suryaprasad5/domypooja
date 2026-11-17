import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { getSessionUserId } from '@/lib/auth'
import SignupForm from '@/components/auth/SignupForm'

export const metadata = { title: 'Sign up — DoMyPooja' }
export const dynamic = 'force-dynamic'

export default async function Page() {
  if (await getSessionUserId()) redirect('/account')
  return (
    <Suspense fallback={null}>
      <SignupForm />
    </Suspense>
  )
}
