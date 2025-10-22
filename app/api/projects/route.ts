export const runtime = "edge";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Create a fresh Supabase client every request
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Map form data to DB columns
    const projectData = {
      client_name: body.clientName,
      client_email: body.clientEmail,
      client_phone: body.clientPhone,
      project_name: body.projectName,
      project_type: body.projectType,
      project_description: body.projectDescription,
      budget_range: body.budgetRange,
      expected_completion_date: body.expectedCompletionDate,
      special_requests: body.specialRequests || "",
      team_size: body.teamSize || 1,
      status: "new",
    };

    // Insert directly into Supabase (no fetch needed)
    const { data, error } = await supabase
      .from("project_inquiries")
      .insert([projectData])
      .select("reference_number")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to submit project", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Project inquiry submitted successfully!",
        project: {
          referenceNumber: data?.reference_number,
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
