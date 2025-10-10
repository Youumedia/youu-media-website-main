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

    // Get the current user from the request headers or session
    // For now, we'll need to get the user ID from the client
    const url = new URL(request.url)
    const freelancerId = url.searchParams.get('freelancerId')

    if (!freelancerId) {
      return NextResponse.json({ error: 'Freelancer ID is required' }, { status: 400 })
    }

    // Check if user has applied for this job
    const { data: application, error } = await supabase
      .from('job_applications')
      .select('*')
      .eq('job_id', jobId)
      .eq('freelancer_id', freelancerId)
      .single()

    if (error && error.code !== 'PGRST116') { // PGRST116 is "not found" error
      console.error('Error fetching user application:', error)
      return NextResponse.json({ error: 'Failed to fetch application' }, { status: 500 })
    }

    return NextResponse.json(application || null)
  } catch (error) {
    console.error('Error in user application API:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
