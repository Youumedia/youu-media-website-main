import { createClient } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createClient()
    const jobId = params.id

    // Fetch applications for this specific job
    const { data: applications, error } = await supabase
      .from('JobApplications')
      .select('*')
      .eq('job_id', jobId)
      .order('created_at', { ascending: true })

    if (error) {
      console.error('Error fetching applications:', error)
      return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 })
    }

    // Count applications by status
    const primaryCount = applications?.filter(app => app.status === 'applied').length || 0
    const runnerUpCount = applications?.filter(app => app.status === 'runner_up').length || 0
    const acceptedCount = applications?.filter(app => app.status === 'accepted').length || 0

    return NextResponse.json({
      applications: applications || [],
      counts: {
        primary: primaryCount,
        runnerUp: runnerUpCount,
        accepted: acceptedCount,
        total: applications?.length || 0
      }
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}