'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { JobCard } from '@/components/JobCard'
import supabase from '@/lib/supabase'

interface Job {
  id: string
  title: string
  description: string | null
  location: string | null
  date: string
  hours: string | null
  pay: string | null
  status: 'open' | 'filled' | 'closed'
  team_size: number | null
}

interface JobApplication {
  id: string
  job_id: string
  user_id: string
  state: 'applied' | 'runner_up' | 'accepted'
  created_at: string
}

export default function DashboardJobsPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [applications, setApplications] = useState<JobApplication[]>([])
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user }, error } = await supabase.auth.getUser()
      
      if (error || !user) {
        router.push('/join-team')
        return
      }
      
      setUser(user)
      await fetchData(user.id)
    }

    checkAuth()
  }, [router])

  const fetchData = async (userId: string) => {
    try {
      // Fetch jobs
      const jobsResponse = await fetch('/api/jobs')
      if (!jobsResponse.ok) {
        throw new Error('Failed to fetch jobs')
      }
      const jobsData = await jobsResponse.json()
      setJobs(jobsData.jobs || [])

      // Fetch user's applications
      const applicationsResponse = await fetch('/api/applications')
      if (!applicationsResponse.ok) {
        throw new Error('Failed to fetch applications')
      }
      const applicationsData = await applicationsResponse.json()
      setApplications(applicationsData.applications || [])
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleApply = async (jobId: string, state: 'applied' | 'runner_up') => {
    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          job_id: jobId,
          state
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        alert(errorData.error || 'Failed to apply')
        return
      }

      // Refresh data
      if (user) {
        await fetchData(user.id)
      }
    } catch (error) {
      console.error('Error applying:', error)
      alert('Failed to apply to job')
    }
  }

  const getUserApplication = (jobId: string) => {
    return applications.find(app => app.job_id === jobId)
  }

  const hasOtherApplications = (jobId: string) => {
    return applications.some(app => app.job_id === jobId && app.user_id !== user?.id)
  }

  if (loading) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading jobs...</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Available Jobs
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Apply to exciting freelance opportunities. Jobs are updated regularly, so check back often!
              </p>
            </div>

            {jobs.length === 0 ? (
              <div className="text-center py-12">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No Jobs Available
                  </h3>
                  <p className="text-gray-600">
                    There are currently no open job opportunities. Check back soon for new postings!
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    userApplication={getUserApplication(job.id)}
                    hasOtherApplications={hasOtherApplications(job.id)}
                    onApply={handleApply}
                  />
                ))}
              </div>
            )}

            {/* User's Applications Summary */}
            {applications.length > 0 && (
              <div className="mt-16">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Applications</h2>
                  <div className="space-y-4">
                    {applications.map((application) => {
                      const job = jobs.find(j => j.id === application.job_id)
                      if (!job) return null
                      
                      return (
                        <div key={application.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h3 className="font-semibold text-gray-900">{job.title}</h3>
                            <p className="text-sm text-gray-600">
                              Applied on {new Date(application.created_at).toLocaleDateString()}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            application.state === 'applied' ? 'bg-blue-100 text-blue-800' :
                            application.state === 'runner_up' ? 'bg-orange-100 text-orange-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {application.state === 'applied' ? 'Applied' :
                             application.state === 'runner_up' ? 'Runner Up' :
                             'Accepted'}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
