"use client"

import { useEffect, useState } from "react"
import supabase from "@/lib/supabase"
import { isDevMode, devLog, getDevUser } from "@/lib/dev-auth"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  const [files, setFiles] = useState<FileList | null>(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const upload = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)
    if (!files || files.length === 0) return
    setUploading(true)
    
    // Get user - use dev user if in dev mode
    let user = null
    if (isDevMode()) {
      user = getDevUser()
      devLog("Profile upload using dev user")
    } else {
      const { data: { user: authUser } } = await supabase.auth.getUser()
      user = authUser
    }
    
    if (!user) {
      setMessage("Please sign in")
      setUploading(false)
      return
    }
    for (const file of Array.from(files)) {
      const path = `${user.id}/${Date.now()}-${file.name}`
      const { error } = await supabase.storage.from("portfolio").upload(path, file)
      if (error) {
        setMessage(error.message)
        setUploading(false)
        return
      }
      await supabase.from("portfolio_items").insert({ user_id: user.id, path })
    }
    setMessage("Uploaded")
    setUploading(false)
  }

  return (
    <main className="min-h-screen py-16 max-w-2xl mx-auto px-4 bg-slate-50">
      {isDevMode() && (
        <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm font-semibold text-yellow-800">🔧 Development Mode Active</p>
          <p className="text-xs text-yellow-700">Authentication is bypassed for testing</p>
        </div>
      )}
      <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
      <form onSubmit={upload} className="space-y-4">
        <Input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
        <Button type="submit" disabled={uploading}>{uploading ? "Uploading..." : "Upload Portfolio Files"}</Button>
      </form>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </main>
  )
}
