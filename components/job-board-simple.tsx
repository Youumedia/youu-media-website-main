'use client'

import { useAuth } from '@/hooks/useAuth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Clock, UserPlus, Plus } from 'lucide-react'
import { format } from 'date-fns'

interface Job {
  id: string
  title: string
  description: string
  location: string
  date: string
  status: string
}

// Template/demo jobs for public view - these will link to /join-team
const templateJobs: Job[] = [
  {
    id: 'template-1',
    title: 'Social Media Content Creator',
    description: 'Create engaging social media content for various brands and campaigns. Experience with Instagram, TikTok, and Facebook required.',
    location: 'Remote',
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'open'
  },
  {
    id: 'template-2',
    title: 'Video Editor',
    description: 'Edit promotional videos, social media content, and marketing materials. Proficiency in Adobe Premiere Pro and After Effects required.',
    location: 'Remote',
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'open'
  },
  {
    id: 'template-3',
    title: 'Graphic Designer',
    description: 'Design logos, marketing materials, and digital assets for various clients. Strong portfolio and Adobe Creative Suite experience required.',
    location: 'Remote',
    date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'open'
  }
]

export function JobBoardSimple() {
  const { user, loading } = useAuth()

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

        {/* Jobs grid - Always show template jobs for now */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {templateJobs.map((job) => (
            <Card key={job.id} className="w-full max-w-md mx-auto hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold">{job.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {job.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">
                    Example
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
                    <span>{format(new Date(job.date), 'PPP')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{format(new Date(job.date), 'p')}</span>
                  </div>
                </div>
                
                {/* Apply Now button - ALWAYS links to /join-team */}
                <div className="pt-2">
                  <Button 
                    variant="default"
                    size="sm"
                    className="flex items-center gap-2 w-full"
                    onClick={() => window.location.href = '/join-team'}
                  >
                    <UserPlus className="h-4 w-4" />
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center bg-blue-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Ready to Join Our Creative Team?
          </h3>
          <p className="text-gray-600 mb-4">
            The opportunities above are examples. Apply now to join our creative team and access real job opportunities!
          </p>
          <Button 
            className="flex items-center gap-2"
            onClick={() => window.location.href = '/join-team'}
          >
            <Plus className="h-4 w-4" />
            Join the Youu Media Creative Team
          </Button>
        </div>
      </div>
    </section>
  )
}
