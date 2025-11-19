'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { JobCard } from '@/components/job-card'
import { toast } from 'sonner'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Plus, Briefcase } from 'lucide-react'

interface Job {
  id: string
  title: string
  description: string
  location: string
  date: string
  status: string
  userApplicationStatus?: string | null
}

// Template/demo jobs for public view
const templateJobs: Job[] = [
  {
    id: 'template-1',
    title: 'Social Media Content Creator',
    description: 'Create engaging social media content for various brands and campaigns. Experience with Instagram, TikTok, and Facebook required.',
    location: 'Remote',
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    status: 'open'
  },
  {
    id: 'template-2',
    title: 'Video Editor',
    description: 'Edit promotional videos, social media content, and marketing materials. Proficiency in Adobe Premiere Pro and After Effects required.',
    location: 'Remote',
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days from now
    status: 'open'
  },
  {
    id: 'template-3',
    title: 'Graphic Designer',
    description: 'Design logos, marketing materials, and digital assets for various clients. Strong portfolio and Adobe Creative Suite experience required.',
    location: 'Remote',
    date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(), // 21 days from now
    status: 'open'
  }
]

export function JobBoardNew() {
  const { user, loading } = useAuth()
  const [realJobs, setRealJobs] = useState<Job[]>([])
  const [applyingJobs, setApplyingJobs] = useState<Set<string>>(new Set())
  const [fetchingJobs, setFetchingJobs] = useState(false)

  // Fetch real jobs when user is logged in
  useEffect(() => {
    if (user && !loading) {
      fetchJobs()
    }
  }, [user, loading])

  const fetchJobs = async () => {
    setFetchingJobs(true)
    try {
      const response = await fetch('/api/jobs')
      if (!response.ok) {
        throw new Error('Failed to fetch jobs')
      }
      const data = await response.json()
      setRealJobs(data.jobs || [])
    } catch (error) {
      console.error('Error fetching jobs:', error)
      toast.error('Failed to load jobs')
    } finally {
      setFetchingJobs(false)
    }
  }

  const handleApply = async (jobId: string) => {
    setApplyingJobs(prev => new Set(prev).add(jobId))
    
    try {
      const response = await fetch('/api/jobs/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobId }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to apply')
      }

      toast.success(data.message || 'Application submitted successfully!')
      
      // Refresh jobs to update application status
      await fetchJobs()
    } catch (error) {
      console.error('Application error:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to submit application')
    } finally {
      setApplyingJobs(prev => {
        const newSet = new Set(prev)
        newSet.delete(jobId)
        return newSet
      })
    }
  }

  // Show template jobs for public users, real jobs for logged-in users
  const jobsToShow = user && !loading ? realJobs : templateJobs
  const isLoading = loading || (user && fetchingJobs)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Available Opportunities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {user ? (
              'Here are the current job opportunities available to you as a registered freelancer.'
            ) : (
              'Discover exciting freelance opportunities. Apply to join our team to see real job postings and start applying!'
            )}
          </p>
        </div>

        {/* Admin link for authenticated users */}
        {user && (
          <div className="text-center mb-8">
            <Link href="/admin/jobs">
              <Button variant="outline" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Manage Jobs (Admin)
              </Button>
            </Link>
          </div>
        )}

        {/* Loading state */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-3 text-gray-600">Loading opportunities...</span>
          </div>
        ) : (
          <>
            {/* Jobs grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {jobsToShow.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  isTemplate={!user} // Template jobs for non-logged-in users
                  onApply={user ? handleApply : undefined}
                  isApplying={applyingJobs.has(job.id)}
                />
              ))}
            </div>

            {/* No jobs message */}
            {jobsToShow.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No Opportunities Available
                </h3>
                <p className="text-gray-600">
                  {user 
                    ? 'Check back later for new job opportunities.'
                    : 'Apply to join our team to access current job postings!'
                  }
                </p>
                {!user && (
                  <Link href="/join-team" className="mt-4 inline-block">
                    <Button className="flex items-center gap-2">
                      <Plus className="h-4 w-4" />
                      Apply to Join Team
                    </Button>
                  </Link>
                )}
              </div>
            )}

            {/* Call to action for non-logged-in users */}
            {!user && jobsToShow.length > 0 && (
              <div className="text-center bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ready to Apply for Real Jobs?
                </h3>
                <p className="text-gray-600 mb-4">
                  The jobs above are examples. Create your freelancer profile to see and apply for actual opportunities.
                </p>
                <Link href="/join-team">
                  <Button className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Create Freelancer Profile
                  </Button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
