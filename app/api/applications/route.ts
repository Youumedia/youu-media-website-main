import { NextRequest, NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase'
import { isDevMode, getDevUser, devLog } from '@/lib/dev-auth'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const jobId = searchParams.get('job_id')
    
    const supabase = createSupabaseServerClient({
      get: (name: string) => ({ name, value: request.cookies.get(name)?.value || '' }),
      set: (name: string, value: string, options: any) => {},
      remove: (name: string, options: any) => {}
    })

    // Check authentication (with dev mode bypass)
    let user = null
    if (isDevMode()) {
      user = getDevUser()
      devLog("GET /api/applications - Using dev user")
    } else {
      const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()
      if (authError || !authUser) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      user = authUser
    }

    // Admin check
    const isAdmin = user.id === process.env.ADMIN_USER_ID || user.email === process.env.ADMIN_EMAIL
    
    let query = supabase
      .from('job_applications')
      .select(`
        *,
        jobs (
          id,
          title,
          status
        )
      `)

    if (jobId) {
      query = query.eq('job_id', jobId)
    }

    if (!isAdmin) {
      // Non-admin users can only see their own applications
      query = query.eq('user_id', user.id)
    }

    const { data: applications, error } = await query.order('created_at', { ascending: true })

    if (error) {
      console.error('Error fetching applications:', error)
      return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 })
    }

    return NextResponse.json({ applications })
  } catch (error) {
    console.error('Error in GET /api/applications:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { job_id, state = 'applied' } = body

    const supabase = createSupabaseServerClient({
      get: (name: string) => ({ name, value: request.cookies.get(name)?.value || '' }),
      set: (name: string, value: string, options: any) => {},
      remove: (name: string, options: any) => {}
    })

    // Check authentication (with dev mode bypass)
    let user = null
    if (isDevMode()) {
      user = getDevUser()
      devLog("POST /api/applications - Using dev user")
    } else {
      const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()
      if (authError || !authUser) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      user = authUser
    }

    // Validate input
    if (!job_id) {
      return NextResponse.json({ error: 'Job ID is required' }, { status: 400 })
    }

    if (!['applied', 'runner_up'].includes(state)) {
      return NextResponse.json({ error: 'Invalid application state' }, { status: 400 })
    }

    // Check if job exists and is open
    const { data: job, error: jobError } = await supabase
      .from('jobs')
      .select('id, title, status, date')
      .eq('id', job_id)
      .single()

    if (jobError || !job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }

    if (job.status !== 'open') {
      return NextResponse.json({ error: 'Job is not open for applications' }, { status: 400 })
    }

    // Check if job date is in the future
    if (new Date(job.date) <= new Date()) {
      return NextResponse.json({ error: 'Job date has passed' }, { status: 400 })
    }

    // Check if user already applied to this job
    const { data: existingApplication, error: existingError } = await supabase
      .from('job_applications')
      .select('id')
      .eq('job_id', job_id)
      .eq('user_id', user.id)
      .single()

    if (existingApplication) {
      return NextResponse.json({ error: 'You have already applied to this job' }, { status: 400 })
    }

    // Check if this should be a "runner_up" application
    let finalState = state
    if (state === 'applied') {
      // Check if there are already applications for this job
      const { data: existingApplications, error: countError } = await supabase
        .from('job_applications')
        .select('id')
        .eq('job_id', job_id)
        .eq('state', 'applied')

      if (countError) {
        console.error('Error checking existing applications:', countError)
      } else if (existingApplications && existingApplications.length > 0) {
        // If there are already applications, this becomes a runner_up
        finalState = 'runner_up'
      }
    }

    // Create the application
    const { data: application, error: applicationError } = await supabase
      .from('job_applications')
      .insert({
        job_id,
        user_id: user.id,
        state: finalState
      })
      .select()
      .single()

    if (applicationError) {
      console.error('Error creating application:', applicationError)
      return NextResponse.json({ error: 'Failed to create application' }, { status: 500 })
    }

    // Send email notification (async, don't wait for it)
    fetch(`${request.nextUrl.origin}/api/notifications/application`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        job_title: job.title,
        user_id: user.id,
        user_email: user.email,
        application_state: finalState,
        timestamp: new Date().toISOString()
      })
    }).catch(error => {
      console.error('Failed to send notification email:', error)
    })

    return NextResponse.json({ application }, { status: 201 })
  } catch (error) {
    console.error('Error in POST /api/applications:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}