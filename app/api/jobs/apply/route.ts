import { createClient } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient()
    
    // Check if user is authenticated
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    const body = await request.json()
    const { jobId } = body

    if (!jobId) {
      return NextResponse.json({ error: 'Job ID is required' }, { status: 400 })
    }

    // Check if job exists and is still open
    const { data: job, error: jobError } = await supabase
      .from('Jobs')
      .select('*')
      .eq('id', jobId)
      .eq('status', 'open')
      .gt('date', new Date().toISOString())
      .single()

    if (jobError || !job) {
      return NextResponse.json({ error: 'Job not found or no longer available' }, { status: 404 })
    }

    // Check if user already applied
    const { data: existingApp } = await supabase
      .from('JobApplications')
      .select('*')
      .eq('job_id', jobId)
      .eq('freelancer_id', user.id)
      .single()

    if (existingApp) {
      return NextResponse.json({ error: 'You have already applied for this job' }, { status: 400 })
    }

    // Check how many applications this job already has
    const { data: applications, error: appCountError } = await supabase
      .from('JobApplications')
      .select('*')
      .eq('job_id', jobId)

    if (appCountError) {
      console.error('Error counting applications:', appCountError)
      return NextResponse.json({ error: 'Failed to check applications' }, { status: 500 })
    }

    // Determine application status based on existing applications
    let applicationStatus = 'applied'
    if (applications && applications.length > 0) {
      applicationStatus = 'runner_up'
    }

    // Insert the application
    const { data: application, error: insertError } = await supabase
      .from('JobApplications')
      .insert([{
        job_id: jobId,
        freelancer_id: user.id,
        status: applicationStatus
      }])
      .select()
      .single()

    if (insertError) {
      console.error('Error creating application:', insertError)
      return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 })
    }

    return NextResponse.json({ 
      application,
      status: applicationStatus,
      message: `Application submitted successfully as ${applicationStatus === 'applied' ? 'primary' : 'runner-up'} applicant`
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}