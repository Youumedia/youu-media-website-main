'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Clock, CheckCircle, AlertCircle, UserPlus } from 'lucide-react'
import { format } from 'date-fns'
import { toast } from 'sonner'
import Link from 'next/link'

interface Job {
  id: string
  title: string
  description: string
  location: string
  date: string
  status: string
  userApplicationStatus?: string | null
}

interface JobCardProps {
  job: Job
  isTemplate?: boolean
  onApply?: (jobId: string) => Promise<void>
  isApplying?: boolean
}

export function JobCard({ job, isTemplate = false, onApply, isApplying = false }: JobCardProps) {
  const [applying, setApplying] = useState(false)

  const handleApply = async () => {
    if (!onApply) return
    
    setApplying(true)
    try {
      await onApply(job.id)
    } catch (error) {
      console.error('Application error:', error)
    } finally {
      setApplying(false)
    }
  }

  const getButtonState = () => {
    if (isTemplate) {
      return {
        text: 'Apply Now',
        variant: 'default' as const,
        disabled: false,
        isLink: true
      }
    }

    if (job.userApplicationStatus) {
      return {
        text: job.userApplicationStatus === 'applied' ? 'Applied (Primary)' : 'Applied (Runner Up)',
        variant: 'secondary' as const,
        disabled: true,
        isLink: false
      }
    }

    // For real jobs, determine button state based on existing applications
    // This would typically come from the job data or be calculated server-side
    return {
      text: 'Apply Now',
      variant: 'default' as const,
      disabled: false,
      isLink: false
    }
  }

  const buttonState = getButtonState()
  const jobDate = new Date(job.date)
  const isExpired = jobDate < new Date()

  if (isExpired && !isTemplate) {
    return null // Don't render expired jobs
  }

  const renderButton = () => {
    if (buttonState.isLink) {
      return (
        <Link href="/join-team">
          <Button 
            variant={buttonState.variant}
            size="sm"
            className="flex items-center gap-2"
          >
            <UserPlus className="h-4 w-4" />
            {buttonState.text}
          </Button>
        </Link>
      )
    }

    return (
      <Button
        variant={buttonState.variant}
        size="sm"
        disabled={buttonState.disabled || applying || isApplying}
        onClick={handleApply}
        className="flex items-center gap-2"
      >
        {applying || isApplying ? (
          <>
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Applying...
          </>
        ) : (
          <>
            {buttonState.disabled ? (
              <CheckCircle className="h-4 w-4" />
            ) : (
              <UserPlus className="h-4 w-4" />
            )}
            {buttonState.text}
          </>
        )}
      </Button>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold">{job.title}</CardTitle>
            <CardDescription className="mt-1">
              {job.description}
            </CardDescription>
          </div>
          <Badge variant={isTemplate ? "secondary" : "default"}>
            {isTemplate ? 'Example' : 'Open'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{format(jobDate, 'PPP')}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{format(jobDate, 'p')}</span>
          </div>
        </div>
        
        <div className="pt-2">
          {renderButton()}
        </div>
      </CardContent>
    </Card>
  )
}