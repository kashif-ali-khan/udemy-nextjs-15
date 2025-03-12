import React from 'react'

export default async function ProductReview() {
  await new Promise(resolve => setTimeout(resolve, 3000));  
  return (
    <div>
      Reviews page
    </div>
  )
}
