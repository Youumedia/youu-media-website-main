'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import supabase from '@/lib/supabase'
import { isDevMode, devLog, getDevUser } from '@/lib/dev-auth'

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
  created_at: string
}

interface JobApplication {
    id: string
  job_id: string
  user_id: string
  state: 'applied' | 'runner_up' | 'accepted'
    created_at: string
}

interface JobWithApplications extends Job {
  applications: JobApplication[]
}

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState<JobWithApplications[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [editingJob, setEditingJob] = useState<Job | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      let user = null
      
      // Development mode bypass
      if (isDevMode()) {
        user = getDevUser()
        devLog("Admin Jobs page accessed in development mode - bypassing auth check")
        setUser(user)
        await fetchJobs()
        return
      }
      
      const { data: { user: authUser }, error } = await supabase.auth.getUser()
      
      if (error || !authUser) {
        router.push('/join-team')
        return
      }

      // Check if user is admin
      const isAdmin = authUser.id === process.env.NEXT_PUBLIC_ADMIN_USER_ID || authUser.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL
      if (!isAdmin) {
        router.push('/dashboard/jobs')
        return
      }
      
      setUser(authUser)
      await fetchJobs()
    }

    checkAuth()
  }, [router])

  const fetchJobs = async () => {
    try {
      const response = await fetch('/api/jobs?admin=true')
      if (!response.ok) {
        throw new Error('Failed to fetch jobs')
      }
      const data = await response.json()
      
      // Fetch applications for each job
      const jobsWithApplications = await Promise.all(
        data.jobs.map(async (job: Job) => {
          const applicationsResponse = await fetch(`/api/applications?job_id=${job.id}`)
          const applicationsData = await applicationsResponse.json()
          return {
            ...job,
            applications: applicationsData.applications || []
          }
        })
      )
      
      setJobs(jobsWithApplications)
    } catch (error) {
      console.error('Error fetching jobs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateJob = async (formData: FormData) => {
    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.get('title'),
          description: formData.get('description'),
          location: formData.get('location'),
          date: formData.get('date'),
          hours: formData.get('hours'),
          pay: formData.get('pay'),
          team_size: formData.get('team_size')
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        alert(errorData.error || 'Failed to create job')
        return
      }

      setShowCreateForm(false)
      await fetchJobs()
    } catch (error) {
      console.error('Error creating job:', error)
      alert('Failed to create job')
    }
  }

  const handleUpdateJob = async (jobId: string, updates: Partial<Job>) => {
    try {
      const response = await fetch(`/api/jobs/${jobId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      })

      if (!response.ok) {
        const errorData = await response.json()
        alert(errorData.error || 'Failed to update job')
        return
      }

      setEditingJob(null)
      await fetchJobs()
    } catch (error) {
      console.error('Error updating job:', error)
      alert('Failed to update job')
    }
  }

  const handleDeleteJob = async (jobId: string) => {
    if (!confirm('Are you sure you want to delete this job? This will also delete all applications.')) {
      return
    }

    try {
      const response = await fetch(`/api/jobs/${jobId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        const errorData = await response.json()
        alert(errorData.error || 'Failed to delete job')
        return
      }

      await fetchJobs()
    } catch (error) {
      console.error('Error deleting job:', error)
      alert('Failed to delete job')
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
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
        {isDevMode() && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm font-semibold text-yellow-800">🔧 Development Mode Active</p>
            <p className="text-xs text-yellow-700">Admin access granted without authentication for testing</p>
          </div>
        )}
        <div className="flex justify-between items-center mb-8">
          <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Job Management</h1>
                <p className="text-gray-600">Manage job postings and applications</p>
              </div>
              <button
                onClick={() => setShowCreateForm(true)}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Create New Job
              </button>
          </div>
          
            {/* Create Job Form */}
            {showCreateForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                  <h2 className="text-2xl font-bold mb-6">Create New Job</h2>
                  <form action={handleCreateJob} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                      <input
                        type="text"
                        name="title"
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        name="description"
                    rows={3}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <input
                          type="text"
                          name="location"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                        <input
                    type="datetime-local"
                          name="date"
                          required
                          className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
                </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Hours</label>
                        <input
                          type="text"
                          name="hours"
                          placeholder="e.g., 8 hours"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
              </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Pay</label>
                        <input
                          type="text"
                          name="pay"
                          placeholder="e.g., £400-600"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
        </div>
          </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Team Size</label>
                      <input
                        type="number"
                        name="team_size"
                        min="1"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      />
                    </div>
                    <div className="flex justify-end space-x-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowCreateForm(false)}
                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                        Create Job
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Jobs List */}
            <div className="space-y-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <p className="text-gray-600">{job.location} • {new Date(job.date).toLocaleDateString()}</p>
                    </div>
                    <div className="flex space-x-2">
                      <select
                        value={job.status}
                        onChange={(e) => handleUpdateJob(job.id, { status: e.target.value as 'open' | 'filled' | 'closed' })}
                        className="border border-gray-300 rounded px-3 py-1 text-sm"
                      >
                        <option value="open">Open</option>
                        <option value="filled">Filled</option>
                        <option value="closed">Closed</option>
                      </select>
                      <button
                        onClick={() => setEditingJob(job)}
                        className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteJob(job.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  {job.description && (
                    <p className="text-gray-600 mb-4">{job.description}</p>
                  )}

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                    <div><span className="font-medium">Hours:</span> {job.hours || 'N/A'}</div>
                    <div><span className="font-medium">Pay:</span> {job.pay || 'N/A'}</div>
                    <div><span className="font-medium">Team Size:</span> {job.team_size || 'N/A'}</div>
                    <div><span className="font-medium">Applications:</span> {job.applications.length}</div>
                  </div>

                  {/* Applications */}
                  {job.applications.length > 0 && (
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Applications (ordered by application time)</h4>
                      <div className="space-y-2">
                        {job.applications.map((application, index) => (
                          <div key={application.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                            <div className="flex items-center space-x-3">
                              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                                #{index + 1}
                              </span>
                              <span className="text-sm font-medium">
                                {application.user_id} {/* In production, you'd want to show user email/name */}
                              </span>
                              <span className={`text-xs px-2 py-1 rounded ${
                                application.state === 'applied' ? 'bg-green-100 text-green-800' :
                                application.state === 'runner_up' ? 'bg-orange-100 text-orange-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {application.state}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500">
                              {new Date(application.created_at).toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
            ))}
          </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}