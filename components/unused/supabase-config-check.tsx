"use client"

import { useEffect, useState } from "react"

export function SupabaseConfigCheck() {
  const [isConfigured, setIsConfigured] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL
    const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    setIsConfigured(hasUrl && hasKey)
  }, [])

  if (!isClient || isConfigured) return null

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
      <p className="text-sm text-yellow-800">
        <strong>Configuration Required:</strong> Supabase environment variables are not set. 
        Please check the <code className="bg-yellow-100 px-1 rounded">SETUP.md</code> file for instructions.
      </p>
    </div>
  )
}
