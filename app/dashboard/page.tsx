import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { createSupabaseServerClient } from "@/lib/supabase"
import { isDevMode, devLog } from "@/lib/dev-auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, PoundSterling, Clock, Users, Upload, FileText, Image as ImageIcon, Video, Download, Eye, Home } from "lucide-react"

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
    <main className="min-h-screen py-16 relative overflow-hidden bg-slate-50">
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
          <div className="flex items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard</h1>
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Button variant="outline" size="sm" className="bg-white border-gray-300 text-gray-900 hover:bg-gray-50">
                <Home className="h-4 w-4 mr-2" />
                Back to Site
              </Button>
            </Link>
          </div>
          <div className="flex gap-3">
            <Link href="/profile">
              <Button variant="outline" className="text-sm bg-white border-gray-300 text-gray-900 hover:bg-gray-50">Profile</Button>
            </Link>
            <form action="/api/auth/signout" method="post">
              <Button type="submit" variant="ghost" className="text-sm text-gray-600 hover:text-gray-900">Sign out</Button>
            </form>
          </div>
        </div>

        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white border border-gray-200">
            <TabsTrigger value="jobs" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#BE55FF] data-[state=active]:to-[#70BFFF] data-[state=active]:text-white">
              <Calendar className="h-4 w-4 mr-2" />
              Available Jobs
            </TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#BE55FF] data-[state=active]:to-[#70BFFF] data-[state=active]:text-white">
              <FileText className="h-4 w-4 mr-2" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#BE55FF] data-[state=active]:to-[#70BFFF] data-[state=active]:text-white">
              <ImageIcon className="h-4 w-4 mr-2" />
              Portfolio
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#BE55FF] data-[state=active]:to-[#70BFFF] data-[state=active]:text-white">
              <Users className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="mt-6">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">Available Opportunities</h2>
              <p className="text-gray-600">Browse and apply to available freelance opportunities</p>
            </div>

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
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">Document Management</h2>
              <p className="text-gray-600">Upload and manage your paperwork and contracts</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-blue-200 via-blue-100 to-indigo-200 border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-lg"></div>
                </div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Upload Documents</CardTitle>
                  <p className="text-gray-700">Upload contracts, NDAs, insurance documents, and other required paperwork</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#70BFFF] transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Drag and drop files here or click to browse</p>
                    <Button className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:opacity-90 text-white">
                      <Upload className="h-4 w-4 mr-2" />
                      Choose Files
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">PDF, DOC, DOCX up to 10MB</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-200 via-purple-100 to-pink-200 border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-lg"></div>
                </div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Uploaded Documents</CardTitle>
                  <p className="text-gray-700">View and manage your submitted documents</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-[#70BFFF]" />
                        <span className="font-medium">Contract_2024.pdf</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-[#70BFFF]" />
                        <span className="font-medium">Insurance_Cert.pdf</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="portfolio" className="mt-6">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">Portfolio Content</h2>
              <p className="text-gray-600">Upload your best work for the Youu Media portfolio</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-emerald-200 via-green-100 to-teal-200 border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-lg"></div>
                </div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Upload Portfolio</CardTitle>
                  <p className="text-gray-700">Upload your best videos, photos, and creative work</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#70BFFF] transition-colors">
                      <Video className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Video Files</p>
                      <Button size="sm" className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:opacity-90 text-white">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Videos
                      </Button>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#70BFFF] transition-colors">
                      <ImageIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Photo Files</p>
                      <Button size="sm" className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:opacity-90 text-white">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Photos
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-200 via-amber-100 to-yellow-200 border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-lg"></div>
                </div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Portfolio Gallery</CardTitle>
                  <p className="text-gray-700">Your uploaded content for review and use</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Video className="h-5 w-5 text-[#70BFFF]" />
                        <div>
                          <span className="font-medium">Wedding_Highlight_2024.mp4</span>
                          <p className="text-xs text-gray-600">2.3 GB • Uploaded 2 days ago</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Badge className="bg-green-100 text-green-800">Approved</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <ImageIcon className="h-5 w-5 text-[#70BFFF]" />
                        <div>
                          <span className="font-medium">Corporate_Photos.zip</span>
                          <p className="text-xs text-gray-600">156 MB • Uploaded 1 week ago</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Badge className="bg-yellow-100 text-yellow-800">Pending Review</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="mt-6">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">Profile Management</h2>
              <p className="text-gray-600">Manage your freelancer profile and settings</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-blue-200 via-blue-100 to-indigo-200 border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-lg"></div>
                </div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Profile Information</CardTitle>
                  <p className="text-gray-700">Update your professional details and bio</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <div className="p-4 bg-white/50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Specializations</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] text-white">Videography</Badge>
                        <Badge className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] text-white">Photography</Badge>
                        <Badge className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] text-white">Editing</Badge>
                      </div>
                    </div>
                    <div className="p-4 bg-white/50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Experience Level</h4>
                      <p className="text-gray-700">5+ years professional experience</p>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:opacity-90 text-white">
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-200 via-purple-100 to-pink-200 border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-lg"></div>
                </div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Account Status</CardTitle>
                  <p className="text-gray-700">Your current account information and status</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                      <span className="font-medium">Account Status</span>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                      <span className="font-medium">Profile Completion</span>
                      <span className="text-[#70BFFF] font-semibold">85%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                      <span className="font-medium">Projects Completed</span>
                      <span className="text-[#70BFFF] font-semibold">12</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                      <span className="font-medium">Rating</span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-gray-600 text-sm">(4.8/5)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
        </div>
          </TabsContent>
        </Tabs>
      </div>

    </main>
  )
}


