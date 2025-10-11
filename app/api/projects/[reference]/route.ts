import { NextRequest, NextResponse } from "next/server"
import { createSupabaseServerClient } from "@/lib/supabase"

export async function GET(
  request: NextRequest,
  { params }: { params: { reference: string } }
) {
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

    const { reference } = params

    if (!reference) {
      return NextResponse.json(
        { error: "Reference number is required" },
        { status: 400 }
      )
    }

    // Query the project by reference number
    const { data: project, error } = await supabase
      .from("projects")
      .select(`
        *,
        project_status_updates (
          id,
          previous_status,
          new_status,
          update_notes,
          updated_at,
          updated_by
        ),
        project_milestones (
          id,
          milestone_name,
          milestone_description,
          due_date,
          completed_date,
          status,
          priority
        )
      `)
      .eq("reference_number", reference.toUpperCase())
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      )
    }

    if (!project) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      )
    }

    // Format the response
    const formattedProject = {
      referenceNumber: project.reference_number,
      clientName: project.client_name,
      projectName: project.project_name,
      projectType: project.project_type,
      currentStatus: project.current_status,
      location: project.location,
      budgetRange: project.budget_range,
      startDate: project.start_date,
      expectedCompletion: project.expected_completion_date,
      actualCompletion: project.actual_completion_date,
      lastUpdated: project.last_status_update,
      requirements: project.requirements || [],
      specialRequests: project.special_requests,
      teamSize: project.team_size,
      statusHistory: project.project_status_updates || [],
      milestones: project.project_milestones || [],
      createdAt: project.created_at,
      updatedAt: project.updated_at
    }

    return NextResponse.json(formattedProject)

  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { reference: string } }
) {
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

    const { reference } = params
    const body = await request.json()
    const { newStatus, notes, updatedBy } = body

    if (!reference) {
      return NextResponse.json(
        { error: "Reference number is required" },
        { status: 400 }
      )
    }

    if (!newStatus) {
      return NextResponse.json(
        { error: "New status is required" },
        { status: 400 }
      )
    }

    // Update project status using the stored function
    const { error } = await supabase.rpc('update_project_status', {
      p_project_id: reference, // This should be the actual project ID, not reference number
      p_new_status: newStatus,
      p_notes: notes,
      p_updated_by: updatedBy
    })

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json(
        { error: "Failed to update project status" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
