import { NextRequest, NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      full_name,
      email,
      phone_number,
      portfolio_url,
      skills,
      availability,
      experience_years,
      about_you,
      equipment_software,
      day_rate,
      uploaded_files,
    } = body || {}

    if (!full_name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const supabase = createSupabaseServerClient({
      get: (name: string) => ({ name, value: request.cookies.get(name)?.value || '' }),
      set: (_name: string, _value: string, _options: any) => {},
      remove: (_name: string, _options: any) => {},
    })

    // Try insert with uploaded_files, fallback without if column missing
    const baseRecord: any = {
      full_name,
      email,
      phone_number,
      portfolio_url,
      skills,
      availability,
      experience_years,
      about_you,
      equipment_software,
      day_rate,
      created_at: new Date().toISOString(),
    }

    const recordWithFiles = {
      ...baseRecord,
      uploaded_files: uploaded_files ?? null,
    }

    let insertError: any | null = null
    let insertData: any | null = null
    {
      const { data, error } = await supabase.from('FreelancerApplications').insert([recordWithFiles]).select('*').single()
      insertData = data
      insertError = error
    }

    if (insertError) {
      const message = insertError.message || ''
      const columnMissing = message.includes('uploaded_files') || insertError.code === '42703'
      if (columnMissing) {
        const { data, error } = await supabase.from('FreelancerApplications').insert([baseRecord]).select('*').single()
        insertData = data
        insertError = error
      }
    }

    if (insertError) {
      console.error('Failed to insert freelancer application:', insertError)
      return NextResponse.json({ error: 'Failed to save application' }, { status: 500 })
    }

    return NextResponse.json({ application: insertData })
  } catch (error) {
    console.error('Error in POST /api/freelancer-applications:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}


