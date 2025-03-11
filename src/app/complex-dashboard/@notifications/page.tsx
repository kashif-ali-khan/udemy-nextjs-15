import React from 'react'
import Link from 'next/link'

export default function NotificaionPage() {
  return (
    <div className="flex flex-col justify-center align-items-center p-[100px]  shadow-md rounded border border-gray-300">
      NotificaionPage
      <Link href="/complex-dashboard/archieved">Archieved</Link>

    </div>
  )
}
