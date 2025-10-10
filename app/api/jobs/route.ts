import { NextRequest, NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase'
import { isDevMode, getDevUser, devLog } from '@/lib/dev-auth'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status') || 'open'
    const adminView = searchParams.get('admin') === 'true'
    
    const supabase = createSupabaseServerClient({
      get: (name: string) => ({ name, value: request.cookies.get(name)?.value || '' }),
      set: (name: string, value: string, options: any) => {},
      remove: (name: string, options: any) => {}
    })

    // Check authentication (with dev mode bypass)
    let user = null
    if (isDevMode()) {
      user = getDevUser()
      devLog("GET /api/jobs - Using dev user")
    } else {
      const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()
      if (authError || !authUser) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      user = authUser
    }

    // Admin check - you can modify this to check for admin role or specific user ID
    const isAdmin = adminView && (isDevMode() || user.id === process.env.ADMIN_USER_ID || user.email === process.env.ADMIN_EMAIL)
    
    let query = supabase
      .from('jobs')
      .select('*')
      .order('date', { ascending: true })

    if (!adminView) {
      // For regular users, only show open jobs with future dates
      query = query
        .eq('status', status)
        .gt('date', new Date().toISOString())
    } else if (!isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { data: jobs, error } = await query

    if (error) {
      console.error('Error fetching jobs:', error)
      return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 })
    }

    return NextResponse.json({ jobs })
  } catch (error) {
    console.error('Error in GET /api/jobs:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, location, date, hours, pay, team_size } = body

    const supabase = createSupabaseServerClient({
      get: (name: string) => ({ name, value: request.cookies.get(name)?.value || '' }),
      set: (name: string, value: string, options: any) => {},
      remove: (name: string, options: any) => {}
    })

    // Check authentication and admin status
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Admin check
    const isAdmin = user.id === process.env.ADMIN_USER_ID || user.email === process.env.ADMIN_EMAIL
    if (!isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Validate required fields
    if (!title || !date) {
      return NextResponse.json({ error: 'Title and date are required' }, { status: 400 })
    }

    const { data: job, error } = await supabase
      .from('jobs')
      .insert({
        title,
        description,
        location,
        date,
        hours,
        pay,
        team_size: team_size ? parseInt(team_size) : null
      })
      .select()
      .single()

    if (error) {
      console.error('Error creating job:', error)
      return NextResponse.json({ error: 'Failed to create job' }, { status: 500 })
    }

    return NextResponse.json({ job }, { status: 201 })
  } catch (error) {
    console.error('Error in POST /api/jobs:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}