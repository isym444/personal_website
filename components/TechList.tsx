import React from 'react'

export default function TechList({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 space-y-2">
      {children}
    </div>
  )
} 