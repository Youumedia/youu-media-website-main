"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"
import { toast } from "sonner"
import { JobCard } from "@/components/job-card"

// Template jobs for public view (non-logged-in users)
const templateJobs = [
  {
    id: "template-1",
    title: "Wedding Videographer - Luxury Venue",
    description: "Seeking experienced wedding videographer for high-end ceremony and reception. Multi-camera setup required with professional editing.",
    location: "London, UK",
    date: "2024-04-15T10:00:00Z",
    status: "open" as const,
    created_at: new Date().toISOString(),
    type: "Event Videography"
  },
  {
    id: "template-2", 
    title: "Corporate Brand Video Editor",
    description: "Edit corporate brand film with motion graphics and color grading. Fast turnaround needed for client presentation.",
    location: "Remote",
    date: "2024-04-20T09:00:00Z",
    status: "open" as const,
    created_at: new Date().toISOString(),
    type: "Video Editing"
  },
  {
    id: "template-3",
    title: "Product Photography - Tech Launch",
    description: "Product photography for tech startup launch. Studio setup with professional lighting and high-res delivery required.",
    location: "London, UK", 
    date: "2024-04-25T14:00:00Z",
    status: "open" as const,
    created_at: new Date().toISOString(),
    type: "Photography"
  },
]

interface RealJob {
  id: string
  title: string
  description: string
  location: string
  date: string
  status: 'open' | 'filled' | 'closed'
  created_at: string
}

interface UserApplication {
  id: string
  status: 'applied' | 'runner_up' | 'accepted'
}

export function JobBoardEnhanced() {
  const { user, loading } = useAuth()
  const [realJobs, setRealJobs] = useState<RealJob[]>([])
  const [userApplications, setUserApplications] = useState<Record<string, UserApplication>>({})
  const [isLoading, setIsLoading] = useState(false)

  // Fetch real jobs for logged-in users
  useEffect(() => {
    if (user && !loading) {
      fetchJobsAndApplications()
    }
  }, [user, loading])

  const fetchJobsAndApplications = async () => {
    setIsLoading(true)
    try {
      // Fetch jobs
      const jobsResponse = await fetch('/api/jobs')
      if (jobsResponse.ok) {
        const jobs = await jobsResponse.json()
        setRealJobs(jobs)

        // Fetch user applications for each job
        const applications: Record<string, UserApplication> = {}
        for (const job of jobs) {
          try {
            const appResponse = await fetch(`/api/jobs/${job.id}/user-application?freelancerId=${user.id}`)
            if (appResponse.ok) {
              const application = await appResponse.json()
              if (application) {
                applications[job.id] = application
              }
            }
          } catch (error) {
            console.error(`Error fetching application for job ${job.id}:`, error)
          }
        }
        setUserApplications(applications)
      }
    } catch (error) {
      console.error('Error fetching jobs:', error)
      toast.error("Failed to load jobs. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleApply = async (jobId: string) => {
    if (!user) {
      toast.error("Please sign in to apply for jobs.")
      return
    }

    try {
      const response = await fetch('/api/jobs/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jobId,
          freelancerId: user.id
        })
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message)
        // Refresh jobs and applications
        await fetchJobsAndApplications()
      } else {
        toast.error(result.error)
      }
    } catch (error) {
      console.error('Error applying for job:', error)
      toast.error("An error occurred while submitting your application.")
    }
  }

  // Show template jobs for non-logged-in users, real jobs for logged-in users
  const jobsToShow = user && !loading ? realJobs : templateJobs
  const isShowingRealJobs = user && !loading

  return (
    <section id="available-jobs" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Available <span className="text-primary">Opportunities</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {isShowingRealJobs ? 
              "Real job opportunities available to our freelancer network. Apply directly to secure your spot." :
              "This is how our job opportunities will be sent out to our team. Apply to join our network to see real opportunities."
            }
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="ml-2 text-muted-foreground">Loading jobs...</span>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {jobsToShow.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              userApplication={userApplications[job.id]}
              onApply={handleApply}
              isTemplate={!isShowingRealJobs}
            />
          ))}
        </div>

        {jobsToShow.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">
              {isShowingRealJobs ? "No active jobs available at the moment." : "No template jobs to display."}
            </p>
            {isShowingRealJobs && (
              <p className="text-sm text-muted-foreground">
                Check back soon for new opportunities!
              </p>
            )}
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {isShowingRealJobs ? 
              "Keep checking back for new opportunities as they become available." :
              "Don't see a perfect match? We're always looking for talented freelancers."
            }
          </p>
          <Link href="/join-team" className={buttonVariants({ variant: "outline", size: "lg" })}>
            {isShowingRealJobs ? "Update Profile" : "Join Our Talent Pool"}
          </Link>
        </div>
      </div>
    </section>
  )
}