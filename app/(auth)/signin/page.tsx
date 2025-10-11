"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import supabase from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // Check if Supabase is properly configured
  const isSupabaseConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        setError(error.message)
        return
      }
      // Automatically redirect to dashboard after successful sign in
      router.push("/dashboard")
    } catch (err) {
      setError("Authentication service is not available. Please check your configuration.")
      console.error("Supabase error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large primary blob */}
        <div className="absolute top-1/4 left-1/3 w-[32rem] h-[32rem] bg-gradient-to-br from-[#70BFFF]/40 to-[#BE55FF]/30 rounded-full blur-3xl animate-float-slow shadow-2xl" />
        
        {/* Medium secondary blob */}
        <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#BE55FF]/50 to-[#70BFFF]/40 rounded-full blur-2xl animate-float-medium shadow-xl" />
        
        {/* Small accent blobs */}
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#70BFFF]/35 to-[#BE55FF]/35 rounded-full blur-xl animate-float-fast shadow-lg" />
        <div className="absolute top-1/6 right-1/3 w-48 h-48 bg-gradient-to-bl from-[#BE55FF]/45 to-[#70BFFF]/35 rounded-full blur-lg animate-drift-slow shadow-lg" />
        <div className="absolute bottom-1/4 left-1/6 w-56 h-56 bg-gradient-to-tr from-[#70BFFF]/35 to-[#BE55FF]/30 rounded-full blur-xl animate-drift-fast shadow-lg" />
        
        {/* Enhanced floating particles */}
        <div className="absolute top-1/3 right-1/2 w-32 h-32 bg-[#70BFFF]/60 rounded-full blur-md animate-pulse-float shadow-lg" />
        <div className="absolute bottom-1/3 right-1/6 w-40 h-40 bg-[#BE55FF]/60 rounded-full blur-md animate-pulse-drift shadow-lg" />
      </div>

      {/* Logo positioned above the form */}
      <div className="relative z-20 mb-12">
        <Image 
          src="/images/youu-main-logo.png" 
          alt="Youu Media" 
          width={144} 
          height={48} 
          className="h-auto"
          priority
        />
      </div>

      {/* Sign in form container */}
      <div className="relative z-10 w-full max-w-md space-y-8">
        {/* Sign in form */}
        <form onSubmit={handleSignIn} className="w-full space-y-4 bg-white/90 backdrop-blur-sm rounded-lg p-8 border border-gray-200 shadow-xl">
          {!isSupabaseConfigured && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-yellow-800">
                <strong>Configuration Required:</strong> Supabase environment variables are not set. 
                Please check the <code className="bg-yellow-100 px-1 rounded">SETUP.md</code> file for instructions.
              </p>
            </div>
          )}
          <div>
            <Label htmlFor="email" className="text-gray-900">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="bg-white border-gray-300 text-gray-900"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-gray-900">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white border-gray-300 text-gray-900"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button 
            type="submit" 
            disabled={loading} 
            className="w-full bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:opacity-90 text-white py-3 font-semibold rounded-lg shadow-lg"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        {/* Freelancer Portal links below the form */}
        <div className="bg-blue-50/30 rounded-lg p-6 border border-gray-200">
          <p className="text-sm text-gray-700 text-center mb-4 font-medium">Freelancer Portal</p>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/dashboard">
              <Button variant="outline" className="w-full bg-white border-gray-300 text-gray-900 hover:bg-gray-50">Dashboard</Button>
            </Link>
            <Link href="/profile">
              <Button variant="outline" className="w-full bg-white border-gray-300 text-gray-900 hover:bg-gray-50">Profile</Button>
            </Link>
            <Link href="/admin/jobs">
              <Button variant="outline" className="w-full bg-white border-gray-300 text-gray-900 hover:bg-gray-50">Admin Jobs</Button>
            </Link>
            <Link href="/freelancers">
              <Button variant="outline" className="w-full bg-white border-gray-300 text-gray-900 hover:bg-gray-50">For Freelancers</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}