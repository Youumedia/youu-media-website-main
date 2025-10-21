"use client"

import { useEffect, useState } from "react"
import supabase from "@/lib/supabase"
import { isDevMode, devLog, getDevUser } from "@/lib/dev-auth"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  const [files, setFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  // Handle file upload - append new files to existing ones
  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || [])
    setFiles((prev) => [...prev, ...newFiles])
    // Clear the input so the same file can be selected again if needed
    e.target.value = ''
  }

  // Remove a specific file
  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

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
    for (const file of files) {
      const path = `${user.id}/${Date.now()}-${file.name}`
      const { error } = await supabase.storage.from("portfolio_uploads").upload(path, file)
      if (error) {
        setMessage(error.message)
        setUploading(false)
        return
      }
      await supabase.from("portfolio_items").insert({ user_id: user.id, path })
    }
    setMessage("Uploaded successfully!")
    setFiles([]) // Clear files after successful upload
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
        <div className="space-y-2">
          <label className="text-sm font-medium">Upload Portfolio Files</label>
          <p className="text-sm text-gray-600">
            You can select multiple files (videos, images, PDFs, etc.). Click "Choose Files" multiple times to add more.
          </p>
          <Input type="file" multiple onChange={handleFilesChange} accept="image/*,video/*,.pdf" />
          {files.length > 0 && (
            <div className="mt-3 space-y-2">
              <p className="text-sm font-medium text-green-600">
                ✓ {files.length} file{files.length !== 1 ? 's' : ''} selected:
              </p>
              <ul className="space-y-1">
                {files.map((file, index) => (
                  <li key={index} className="flex items-center justify-between text-sm bg-gray-50 p-2 rounded">
                    <span className="truncate flex-1">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className="ml-2 text-red-500 hover:text-red-700 font-medium"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Button type="submit" disabled={uploading || files.length === 0}>
          {uploading ? "Uploading..." : "Upload Portfolio Files"}
        </Button>
      </form>
      {message && <p className="mt-4 text-sm text-green-600 font-medium">{message}</p>}
    </main>
  )
}
