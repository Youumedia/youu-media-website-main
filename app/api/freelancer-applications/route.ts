import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase";
import { isDevMode, getDevUser, devLog } from "@/lib/dev-auth";

export async function POST(request: NextRequest) {
  try {
    console.log("POST /api/freelancer-applications - Starting request");

    const body = await request.json();
    console.log("Request body:", body);

    const {
      full_name,
      email,
      phone_number,
      portfolio_url,
      day_rate,
      skills_text,
      availability,
      about_you,
      equipment_software,
    } = body;

    // Validate required fields
    if (!full_name || !email) {
      return NextResponse.json(
        {
          error: "Full name and email are required",
        },
        { status: 400 }
      );
    }

    const supabase = createSupabaseServerClient({
      get: (name: string) => ({
        name,
        value: request.cookies.get(name)?.value || "",
      }),
      set: (name: string, value: string, options: any) => {},
      remove: (name: string, options: any) => {},
    });

    // Check authentication (with dev mode bypass)
    let user = null;
    if (isDevMode()) {
      user = getDevUser();
      devLog("POST /api/freelancer-applications - Using dev user");
    } else {
      const {
        data: { user: authUser },
        error: authError,
      } = await supabase.auth.getUser();
      if (authError || !authUser) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      user = authUser;
    }

    // Check if application already exists for this email
    const { data: existingApplication, error: existingError } = await supabase
      .from("freelancer_applications")
      .select("id")
      .eq("email", email)
      .single();

    if (existingApplication) {
      return NextResponse.json(
        {
          error: "Application already exists for this email address",
        },
        { status: 409 }
      );
    }

    // Insert the new application
    const { data: application, error: insertError } = await supabase
      .from("freelancer_applications")
      .insert([
        {
          full_name,
          email,
          phone_number: phone_number || null,
          portfolio_url: portfolio_url || null,
          day_rate: day_rate || null,
          skills: skills_text || null,
          availability: availability || null,
          about_you: about_you || null,
          equipment_software: equipment_software || null,
          status: "pending",
        },
      ])
      .select()
      .single();

    if (insertError) {
      console.error("Error creating freelancer application:", insertError);
      return NextResponse.json(
        {
          error: "Failed to submit application",
        },
        { status: 500 }
      );
    }

    console.log("Application created successfully:", application);

    return NextResponse.json({
      success: true,
      application,
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("Error in POST /api/freelancer-applications:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = createSupabaseServerClient({
      get: (name: string) => ({
        name,
        value: request.cookies.get(name)?.value || "",
      }),
      set: (name: string, value: string, options: any) => {},
      remove: (name: string, options: any) => {},
    });

    // Check authentication (with dev mode bypass)
    let user = null;
    if (isDevMode()) {
      user = getDevUser();
      devLog("GET /api/freelancer-applications - Using dev user");
    } else {
      const {
        data: { user: authUser },
        error: authError,
      } = await supabase.auth.getUser();
      if (authError || !authUser) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      user = authUser;
    }

    // Admin check
    const isAdmin =
      user.id === process.env.ADMIN_USER_ID ||
      user.email === process.env.ADMIN_EMAIL;

    let query = supabase.from("freelancer_applications").select("*");

    if (!isAdmin) {
      // Non-admin users can only see their own applications
      query = query.eq("email", user.email);
    }

    const { data: applications, error } = await query.order("created_at", {
      ascending: false,
    });

    if (error) {
      console.error("Error fetching freelancer applications:", error);
      return NextResponse.json(
        { error: "Failed to fetch applications" },
        { status: 500 }
      );
    }

    return NextResponse.json({ applications });
  } catch (error) {
    console.error("Error in GET /api/freelancer-applications:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
