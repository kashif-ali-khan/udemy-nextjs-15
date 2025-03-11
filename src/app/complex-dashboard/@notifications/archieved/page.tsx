import React from 'react'
import Link from 'next/link'
export default function ArchievedNotificaionPage() {
  return (
    <div className="flex flex-col justify-center align-items-center p-[100px]  shadow-md rounded border border-gray-300">
      Archieved page

      <Link href="/complex-dashboard">Default</Link>
    </div>
  )
}
