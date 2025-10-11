"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import supabase from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error } = await supabase.auth.signUp({ email, password })
    setLoading(false)
    if (error) {
      setError(error.message)
      return
    }
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
      <form onSubmit={handleSignUp} className="w-full max-w-md space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Creating account..." : "Sign Up"}
        </Button>
        <div className="pt-4 space-y-2">
          <p className="text-sm text-muted-foreground">Freelancer Portal</p>
          <div className="grid grid-cols-2 gap-2">
            <Link href="/dashboard"><Button variant="outline" className="w-full">Dashboard</Button></Link>
            <Link href="/profile"><Button variant="outline" className="w-full">Profile</Button></Link>
            <Link href="/admin/jobs"><Button variant="outline" className="w-full">Admin Jobs</Button></Link>
            <Link href="/freelancers"><Button variant="outline" className="w-full">For Freelancers</Button></Link>
          </div>
        </div>
      </form>
    </div>
  )
}
