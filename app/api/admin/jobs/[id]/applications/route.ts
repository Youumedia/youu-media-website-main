import { NextRequest, NextResponse } from 'next/server'
import supabase from '@/lib/supabase'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const jobId = params.id

    if (!jobId) {
      return NextResponse.json({ error: 'Job ID is required' }, { status: 400 })
    }

    // Fetch applications for this job with freelancer details
    const { data: applications, error } = await supabase
      .from('job_applications')
      .select(`
        *,
        freelancer:profiles(full_name, email)
      `)
      .eq('job_id', jobId)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching job applications:', error)
      return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 })
    }

    // Transform the data to match the expected format
    const transformedApplications = applications?.map(app => ({
      id: app.id,
      freelancer_id: app.freelancer_id,
      status: app.status,
      created_at: app.created_at,
      freelancer: app.freelancer
    })) || []

    return NextResponse.json(transformedApplications)
  } catch (error) {
    console.error('Error in job applications API:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
