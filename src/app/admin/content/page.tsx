'use client'

import { useRouter } from 'next/navigation'

export default function ContentPage() {
  const router = useRouter()

  return router.push('/admin/content/dashboard')
}
