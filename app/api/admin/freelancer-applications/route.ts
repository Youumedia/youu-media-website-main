import { NextRequest, NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase'
import { isDevMode, getDevUser, devLog } from '@/lib/dev-auth'

export async function GET(request: NextRequest) {
  try {
    const supabase = createSupabaseServerClient({
      get: (name: string) => ({ name, value: request.cookies.get(name)?.value || '' }),
      set: (name: string, value: string, options: any) => {},
      remove: (name: string, options: any) => {}
    })

    // Check authentication (with dev mode bypass)
    let user = null
    if (isDevMode()) {
      user = getDevUser()
      devLog("GET /api/admin/freelancer-applications - Using dev user")
    } else {
      const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()
      if (authError || !authUser) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      user = authUser
    }

    // Admin check
    const isAdmin = isDevMode() || user.id === process.env.ADMIN_USER_ID || user.email === process.env.ADMIN_EMAIL
    
    if (!isAdmin) {
      return NextResponse.json({ error: 'Forbidden - Admin access required' }, { status: 403 })
    }

    // Fetch all freelancer applications
    const { data: applications, error } = await supabase
      .from('freelancer_applications')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching freelancer applications:', error)
      return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 })
    }

    return NextResponse.json({ applications })
  } catch (error) {
    console.error('Error in GET /api/admin/freelancer-applications:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, status } = body

    const supabase = createSupabaseServerClient({
      get: (name: string) => ({ name, value: request.cookies.get(name)?.value || '' }),
      set: (name: string, value: string, options: any) => {},
      remove: (name: string, options: any) => {}
    })

    // Check authentication (with dev mode bypass)
    let user = null
    if (isDevMode()) {
      user = getDevUser()
      devLog(`PATCH /api/admin/freelancer-applications - Updating status to ${status}`)
    } else {
      const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()
      if (authError || !authUser) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      user = authUser
    }

    // Admin check
    const isAdmin = isDevMode() || user.id === process.env.ADMIN_USER_ID || user.email === process.env.ADMIN_EMAIL
    
    if (!isAdmin) {
      return NextResponse.json({ error: 'Forbidden - Admin access required' }, { status: 403 })
    }

    // Validate input
    if (!id) {
      return NextResponse.json({ error: 'Application ID is required' }, { status: 400 })
    }

    if (!['pending', 'reviewed', 'accepted', 'rejected'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
    }

    // Update the application status
    const { data, error } = await supabase
      .from('freelancer_applications')
      .update({ 
        status,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating application status:', error)
      return NextResponse.json({ error: 'Failed to update application' }, { status: 500 })
    }

    return NextResponse.json({ application: data })
  } catch (error) {
    console.error('Error in PATCH /api/admin/freelancer-applications:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}



