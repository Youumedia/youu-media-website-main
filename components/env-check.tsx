"use client"

import { useEffect, useState } from "react"

export function EnvCheck() {
  const [envStatus, setEnvStatus] = useState<{
    url: boolean
    key: boolean
    devMode: boolean
  }>({
    url: false,
    key: false,
    devMode: false,
  })

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const devMode = process.env.NEXT_PUBLIC_DEV_MODE

    setEnvStatus({
      url: !!url && !url.includes("your-project-id"),
      key: !!key && !key.includes("your-key-here"),
      devMode: !!devMode,
    })

    // Log to console for debugging
    console.log("🔍 Environment Variables Check:")
    console.log("SUPABASE_URL:", url ? "✅ Set" : "❌ Missing")
    console.log("SUPABASE_ANON_KEY:", key ? "✅ Set" : "❌ Missing")
    console.log("DEV_MODE:", devMode ? "✅ Set" : "❌ Missing")
  }, [])

  const allSet = envStatus.url && envStatus.key && envStatus.devMode

  if (allSet) {
    return null // Don't show anything if all is good
  }

  return (
    <div className="fixed bottom-4 right-4 max-w-md bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 shadow-lg z-50">
      <h3 className="font-bold text-yellow-900 mb-2">
        ⚠️ Environment Configuration Issue
      </h3>
      <ul className="text-sm text-yellow-800 space-y-1">
        {!envStatus.url && (
          <li>❌ NEXT_PUBLIC_SUPABASE_URL not configured</li>
        )}
        {!envStatus.key && (
          <li>❌ NEXT_PUBLIC_SUPABASE_ANON_KEY not configured</li>
        )}
        {!envStatus.devMode && <li>⚠️ NEXT_PUBLIC_DEV_MODE not set</li>}
      </ul>
      <p className="text-xs text-yellow-700 mt-2">
        Please update your .env.local file with valid Supabase credentials.
      </p>
    </div>
  )
}

