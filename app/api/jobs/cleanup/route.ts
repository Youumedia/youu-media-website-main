import { createClient } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient()
    
    // Check if user is authenticated (you can add admin role checking here)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Update expired jobs to 'closed' status
    const { data: updatedJobs, error } = await supabase
      .from('Jobs')
      .update({ status: 'closed' })
      .lt('date', new Date().toISOString())
      .eq('status', 'open')
      .select()

    if (error) {
      console.error('Error cleaning up jobs:', error)
      return NextResponse.json({ error: 'Failed to cleanup jobs' }, { status: 500 })
    }

    return NextResponse.json({ 
      message: `Cleaned up ${updatedJobs?.length || 0} expired jobs`,
      updatedJobs: updatedJobs || []
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}