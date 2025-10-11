import { NextRequest, NextResponse } from "next/server"
import { createSupabaseServerClient } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const supabase = createSupabaseServerClient({
      get: (name: string) => request.cookies.get(name),
      set: (name, value, options) => {
        // For server-side, we'll just return the response without setting cookies
      },
      remove: (name, options) => {
        // For server-side, we'll just return the response without removing cookies
      },
    })

    const body = await request.json()
    const {
      clientName,
      clientEmail,
      clientPhone,
      projectName,
      projectType,
      projectDescription,
      location,
      budgetRange,
      expectedCompletionDate,
      requirements,
      specialRequests,
      teamSize
    } = body

    // Validate required fields
    if (!clientName || !clientEmail || !projectName || !projectType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Generate reference number
    const { data: referenceNumber, error: refError } = await supabase
      .rpc('generate_reference_number')

    if (refError) {
      console.error("Reference number generation error:", refError)
      return NextResponse.json(
        { error: "Failed to generate reference number" },
        { status: 500 }
      )
    }

    // Create the project
    const { data: project, error } = await supabase
      .from("projects")
      .insert({
        reference_number: referenceNumber,
        client_name: clientName,
        client_email: clientEmail,
        client_phone: clientPhone,
        project_name: projectName,
        project_type: projectType,
        project_description: projectDescription,
        location: location,
        budget_range: budgetRange,
        expected_completion_date: expectedCompletionDate,
        requirements: requirements,
        special_requests: specialRequests,
        team_size: teamSize,
        current_status: 'quote_requested'
      })
      .select()
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json(
        { error: "Failed to create project" },
        { status: 500 }
      )
    }

    // Send confirmation email (you can implement this later)
    // await sendProjectConfirmationEmail(project)

    return NextResponse.json({
      success: true,
      project: {
        referenceNumber: project.reference_number,
        clientName: project.client_name,
        projectName: project.project_name,
        currentStatus: project.current_status,
        createdAt: project.created_at
      }
    })

  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = createSupabaseServerClient({
      get: (name: string) => request.cookies.get(name),
      set: (name, value, options) => {
        // For server-side, we'll just return the response without setting cookies
      },
      remove: (name, options) => {
        // For server-side, we'll just return the response without removing cookies
      },
    })

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    let query = supabase
      .from("projects")
      .select(`
        id,
        reference_number,
        client_name,
        project_name,
        project_type,
        current_status,
        location,
        budget_range,
        start_date,
        expected_completion_date,
        created_at,
        updated_at
      `)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (status) {
      query = query.eq('current_status', status)
    }

    const { data: projects, error } = await query

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json(
        { error: "Failed to fetch projects" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      projects: projects || [],
      pagination: {
        limit,
        offset,
        hasMore: (projects || []).length === limit
      }
    })

  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
