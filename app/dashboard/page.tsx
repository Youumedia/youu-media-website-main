import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { createSupabaseServerClient } from "@/lib/supabase"
import { isDevMode, devLog } from "@/lib/dev-auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, PoundSterling, Clock, Users } from "lucide-react"

type Job = {
  id: string
  title: string
  type: string
  location: string
  date: string
  duration: string
  budget: string
  urgency: "high" | "medium" | "low"
  description: string
  requirements: string[]
  team_size: string
}

const urgencyColors: Record<Job["urgency"], string> = {
  high: "bg-red-100 text-red-800 border-red-200",
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  low: "bg-green-100 text-green-800 border-green-200",
}

export default async function DashboardPage() {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient({
    get: (name: string) => cookieStore.get(name),
    set: (name, value, options) => cookieStore.set({ name, value, ...options }),
    remove: (name, options) => cookieStore.set({ name, value: "", ...options }),
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Development mode bypass
  if (!session && !isDevMode()) {
    redirect("/signin")
  }

  if (isDevMode()) {
    devLog("Dashboard accessed in development mode - authentication bypassed")
  }

  const { data: jobs, error } = await supabase.from("jobs").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Failed to load jobs:", error.message)
  }

  const list: Job[] = (jobs || []).map((j: any) => ({
    id: j.id,
    title: j.title,
    type: j.type,
    location: j.location,
    date: j.date,
    duration: j.duration,
    budget: j.budget,
    urgency: j.urgency,
    description: j.description,
    requirements: j.requirements || [],
    team_size: j.team_size || "",
  }))

  return (
    <main className="min-h-screen py-16 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and header */}
        <div className="flex items-center justify-center mb-8">
          <Image 
            src="/images/youu-main-logo.png" 
            alt="Youu Media" 
            width={144} 
            height={48} 
            className="h-auto"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Dashboard</h1>
          <div className="flex gap-3">
            <Link href="/profile">
              <Button variant="outline" className="text-sm bg-white border-gray-300 text-gray-900 hover:bg-gray-50">Profile</Button>
            </Link>
            <form action="/api/auth/signout" method="post">
              <Button type="submit" variant="ghost" className="text-sm text-gray-600 hover:text-gray-900">Sign out</Button>
            </form>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900">Available Opportunities</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {list.map((job, index) => {
            const dashboardGradients = [
              "bg-gradient-to-br from-blue-200 via-blue-100 to-indigo-200",
              "bg-gradient-to-br from-purple-200 via-purple-100 to-pink-200",
              "bg-gradient-to-br from-emerald-200 via-green-100 to-teal-200",
              "bg-gradient-to-br from-orange-200 via-amber-100 to-yellow-200"
            ];
            
            return (
              <Card key={job.id} className={`group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] ${dashboardGradients[index % 4]} relative overflow-hidden`}>
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-lg"></div>
                </div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-3 font-bold group-hover:bg-gradient-to-r group-hover:from-[#BE55FF] group-hover:to-[#70BFFF] group-hover:bg-clip-text group-hover:text-transparent transition-colors bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{job.title}</CardTitle>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] text-white px-3 py-1 shadow-sm">{job.type}</Badge>
                        <Badge className={`${urgencyColors[job.urgency]} px-3 py-1 font-semibold`}>{job.urgency} priority</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-gray-700 font-medium">
                    <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-[#70BFFF]" /><span>{job.location}</span></div>
                    <div className="flex items-center gap-2"><Calendar className="h-5 w-5 text-[#70BFFF]" /><span>{job.date}</span></div>
                    <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-[#70BFFF]" /><span>{job.duration}</span></div>
                    <div className="flex items-center gap-2"><PoundSterling className="h-5 w-5 text-[#70BFFF]" /><span>{job.budget}</span></div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-700 mb-6 text-pretty leading-relaxed">{job.description}</p>
                  {job.requirements?.length ? (
                    <div className="mb-6">
                      <h4 className="font-bold mb-3 text-gray-900 text-lg">Requirements:</h4>
                      <ul className="text-gray-700 space-y-2">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-2 h-2 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-full mr-3 shadow-sm" />
                            <span className="font-medium">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-700 font-medium">
                      <Users className="h-5 w-5 text-[#70BFFF]" />
                      <span>Team size: {job.team_size}</span>
                    </div>
                    <form action="/api/applications" method="post">
                      <input type="hidden" name="job_id" value={job.id} />
                      <Button type="submit" className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:opacity-90 text-white px-6 py-3 font-semibold rounded-xl shadow-lg">Apply Now</Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

    </main>
  )
}


