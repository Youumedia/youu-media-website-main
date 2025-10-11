'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import supabase from '@/lib/supabase'
import { isDevMode, devLog, getDevUser } from '@/lib/dev-auth'

interface FreelancerApplication {
  id: string
  full_name: string
  email: string
  phone_number: string | null
  portfolio_url: string | null
  skills: string | null
  availability: string | null
  experience_years: string | null
  about_you: string | null
  equipment_software: string | null
  day_rate: string | null
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected'
  created_at: string
  updated_at: string
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  reviewed: 'bg-blue-100 text-blue-800 border-blue-200',
  accepted: 'bg-green-100 text-green-800 border-green-200',
  rejected: 'bg-red-100 text-red-800 border-red-200',
}

const statusLabels = {
  pending: 'Pending',
  reviewed: 'Reviewed',
  accepted: 'Accepted',
  rejected: 'Rejected',
}

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState<FreelancerApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [updatingId, setUpdatingId] = useState<string | null>(null)
  const [selectedApplication, setSelectedApplication] = useState<FreelancerApplication | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      let user = null
      
      // Development mode bypass
      if (isDevMode()) {
        user = getDevUser()
        devLog("Admin Applications page accessed in development mode - bypassing auth check")
        setUser(user)
        await fetchApplications()
        return
      }
      
      const { data: { user: authUser }, error } = await supabase.auth.getUser()
      
      if (error || !authUser) {
        router.push('/signin')
        return
      }

      // Check if user is admin
      const isAdmin = authUser.id === process.env.NEXT_PUBLIC_ADMIN_USER_ID || authUser.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL
      if (!isAdmin) {
        router.push('/dashboard')
        return
      }
      
      setUser(authUser)
      await fetchApplications()
    }

    checkAuth()
  }, [router])

  const fetchApplications = async () => {
    try {
      const response = await fetch('/api/admin/freelancer-applications')
      if (!response.ok) {
        throw new Error('Failed to fetch applications')
      }
      const data = await response.json()
      setApplications(data.applications || [])
    } catch (error) {
      console.error('Error fetching applications:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, newStatus: FreelancerApplication['status']) => {
    setUpdatingId(id)
    try {
      const response = await fetch('/api/admin/freelancer-applications', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status: newStatus }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        alert(errorData.error || 'Failed to update status')
        return
      }

      // Update local state
      setApplications(applications.map(app => 
        app.id === id ? { ...app, status: newStatus, updated_at: new Date().toISOString() } : app
      ))
      
      // Close modal if open
      setSelectedApplication(null)
    } catch (error) {
      console.error('Error updating status:', error)
      alert('Failed to update status')
    } finally {
      setUpdatingId(null)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading applications...</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />
      <div className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4">
            {isDevMode() && (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm font-semibold text-yellow-800">🔧 Development Mode Active</p>
                <p className="text-xs text-yellow-700">Admin access granted without authentication for testing</p>
              </div>
            )}

            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Freelancer Applications</h1>
              <p className="text-gray-600">Review and manage freelancer submissions</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500">
                <div className="text-2xl font-bold text-gray-900">{applications.filter(a => a.status === 'pending').length}</div>
                <div className="text-sm text-gray-600">Pending</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
                <div className="text-2xl font-bold text-gray-900">{applications.filter(a => a.status === 'reviewed').length}</div>
                <div className="text-sm text-gray-600">Reviewed</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
                <div className="text-2xl font-bold text-gray-900">{applications.filter(a => a.status === 'accepted').length}</div>
                <div className="text-sm text-gray-600">Accepted</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-500">
                <div className="text-2xl font-bold text-gray-900">{applications.filter(a => a.status === 'rejected').length}</div>
                <div className="text-sm text-gray-600">Rejected</div>
              </div>
            </div>

            {/* Applications Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {applications.length === 0 ? (
                <div className="p-12 text-center">
                  <p className="text-gray-500 text-lg">No applications yet</p>
                  <p className="text-gray-400 text-sm mt-2">Applications will appear here when freelancers submit the form</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Full Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Skills
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Experience
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Submitted
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {applications.map((application) => (
                        <tr key={application.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{application.full_name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-600">{application.email}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-600 max-w-xs truncate">
                              {application.skills || 'N/A'}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-600">{application.experience_years || 'N/A'}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${statusColors[application.status]}`}>
                              {statusLabels[application.status]}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-600">{formatDate(application.created_at)}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button
                              onClick={() => setSelectedApplication(application)}
                              className="text-blue-600 hover:text-blue-800 font-medium mr-3"
                            >
                              View
                            </button>
                            <div className="inline-block relative group">
                              <button
                                className="text-gray-600 hover:text-gray-800 font-medium"
                                disabled={updatingId === application.id}
                              >
                                {updatingId === application.id ? 'Updating...' : 'Change Status ▼'}
                              </button>
                              <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg z-10 mt-1 min-w-[140px]">
                                {(['pending', 'reviewed', 'accepted', 'rejected'] as const).map((status) => (
                                  <button
                                    key={status}
                                    onClick={() => updateStatus(application.id, status)}
                                    disabled={updatingId === application.id || application.status === status}
                                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg ${
                                      application.status === status ? 'bg-gray-100 font-semibold' : ''
                                    }`}
                                  >
                                    {statusLabels[status]}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Application Detail Modal */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Application Details</h2>
              <button
                onClick={() => setSelectedApplication(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Status Update Section */}
              <div className="bg-gray-50 rounded-lg p-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Update Status</label>
                <div className="flex gap-2">
                  {(['pending', 'reviewed', 'accepted', 'rejected'] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => updateStatus(selectedApplication.id, status)}
                      disabled={updatingId === selectedApplication.id || selectedApplication.status === status}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                        selectedApplication.status === status
                          ? statusColors[status] + ' ring-2 ring-offset-2 ring-gray-400'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {statusLabels[status]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                    <dd className="mt-1 text-sm text-gray-900">{selectedApplication.full_name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900">{selectedApplication.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="mt-1 text-sm text-gray-900">{selectedApplication.phone_number || 'N/A'}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Portfolio</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {selectedApplication.portfolio_url ? (
                        <a href={selectedApplication.portfolio_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          View Portfolio
                        </a>
                      ) : 'N/A'}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Professional Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Information</h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Skills</dt>
                    <dd className="mt-1 text-sm text-gray-900">{selectedApplication.skills || 'N/A'}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Experience</dt>
                    <dd className="mt-1 text-sm text-gray-900">{selectedApplication.experience_years || 'N/A'}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Availability</dt>
                    <dd className="mt-1 text-sm text-gray-900">{selectedApplication.availability || 'N/A'}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Day Rate</dt>
                    <dd className="mt-1 text-sm text-gray-900">{selectedApplication.day_rate || 'N/A'}</dd>
                  </div>
                </dl>
              </div>

              {/* About */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedApplication.about_you || 'N/A'}</p>
              </div>

              {/* Equipment */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Equipment & Software</h3>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedApplication.equipment_software || 'N/A'}</p>
              </div>

              {/* Timestamps */}
              <div className="border-t pt-4">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-500">
                  <div>
                    <dt className="font-medium">Submitted</dt>
                    <dd className="mt-1">{formatDate(selectedApplication.created_at)}</dd>
                  </div>
                  <div>
                    <dt className="font-medium">Last Updated</dt>
                    <dd className="mt-1">{formatDate(selectedApplication.updated_at)}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end">
              <button
                onClick={() => setSelectedApplication(null)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}



