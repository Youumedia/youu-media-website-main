'use client'

import { useState } from 'react'
import { format } from 'date-fns'

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

interface JobCardProps {
  job: Job
  userApplication?: JobApplication | null
  hasOtherApplications: boolean
  onApply: (jobId: string, state: 'applied' | 'runner_up') => Promise<void>
}

export function JobCard({ job, userApplication, hasOtherApplications, onApply }: JobCardProps) {
  const [isApplying, setIsApplying] = useState(false)

  const getButtonState = () => {
    if (job.status === 'filled') {
      return { text: 'Job Filled', disabled: true, className: 'bg-gray-400 cursor-not-allowed' }
    }
    
    if (job.status === 'closed') {
      return { text: 'Job Closed', disabled: true, className: 'bg-gray-400 cursor-not-allowed' }
    }

    if (userApplication) {
      return { 
        text: userApplication.state === 'applied' ? 'Applied' : 'Runner Up', 
        disabled: true, 
        className: 'bg-blue-400 cursor-not-allowed' 
      }
    }

    if (hasOtherApplications) {
      return { 
        text: 'Runner Up', 
        disabled: false, 
        className: 'bg-orange-600 hover:bg-orange-700',
        action: 'runner_up'
      }
    }

    return { 
      text: 'Apply Now', 
      disabled: false, 
      className: 'bg-green-600 hover:bg-green-700',
      action: 'applied'
    }
  }

  const handleApply = async () => {
    const buttonState = getButtonState()
    if (buttonState.action && !buttonState.disabled) {
      setIsApplying(true)
      try {
        await onApply(job.id, buttonState.action as 'applied' | 'runner_up')
      } catch (error) {
        console.error('Failed to apply:', error)
      } finally {
        setIsApplying(false)
      }
    }
  }

  const buttonState = getButtonState()
  const jobDate = new Date(job.date)
  const isPastDate = jobDate <= new Date()

  if (isPastDate) {
    return null // Don't render past jobs
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          job.status === 'open' ? 'bg-green-100 text-green-800' :
          job.status === 'filled' ? 'bg-blue-100 text-blue-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
        </span>
      </div>
      
      {job.description && (
        <p className="text-gray-600 mb-4">{job.description}</p>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {job.location && (
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {job.location}
          </div>
        )}
        
        <div className="flex items-center text-sm text-gray-500">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {format(jobDate, 'MMM dd, yyyy')}
        </div>
        
        {job.hours && (
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {job.hours}
          </div>
        )}
        
        {job.pay && (
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            {job.pay}
          </div>
        )}
      </div>
      
      {job.team_size && (
        <div className="mb-4">
          <span className="text-sm text-gray-500">Team size: </span>
          <span className="text-sm font-medium">{job.team_size} person{job.team_size !== 1 ? 's' : ''}</span>
        </div>
      )}
      
      <button
        onClick={handleApply}
        disabled={buttonState.disabled || isApplying}
        className={`w-full text-white py-2 px-4 rounded transition-colors font-medium ${
          buttonState.disabled 
            ? buttonState.className 
            : buttonState.className
        } ${isApplying ? 'opacity-75 cursor-not-allowed' : ''}`}
      >
        {isApplying ? 'Applying...' : buttonState.text}
      </button>
    </div>
  )
}
