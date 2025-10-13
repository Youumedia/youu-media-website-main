import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    // Map form data to database column names
    const projectData = {
      client_name: body.clientName,
      client_email: body.clientEmail,
      client_phone: body.clientPhone,
      project_name: body.projectName,
      project_type: body.projectType,
      project_description: body.projectDescription,
      budget_range: body.budgetRange,
      expected_completion_date: body.expectedCompletionDate,
      requirements: body.requirements || [],
      special_requests: body.specialRequests,
      team_size: body.teamSize || 1,
      status: "new",
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/project_inquiries?select=reference_number`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
          Prefer: "return=representation",
        },
        body: JSON.stringify(projectData),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Supabase error:", errorText);
      return NextResponse.json(
        { error: "Failed to submit project", details: errorText },
        { status: 500 }
      );
    }

    const result = await response.json();
    const project = result[0];

    return NextResponse.json(
      {
        success: true,
        message: "Project inquiry submitted successfully!",
        project: {
          referenceNumber: project.reference_number,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Internal server error", details: String(err) },
      { status: 500 }
    );
  }
}
