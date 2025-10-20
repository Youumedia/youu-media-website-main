import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
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
    } = body;

    // Basic validation
    if (!full_name || !email) {
      return NextResponse.json(
        {
          error: "Full name and email are required",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error: "Please provide a valid email address",
        },
        { status: 400 }
      );
    }

    // Prepare data for database - matching your table columns
    const applicationData = {
      full_name: full_name.trim(),
      email: email.trim(),
      skills: skills?.trim() || null,
      experience: experience_years?.trim() || null, // Changed from experience_years to experience
      portfolio_url: portfolio_url?.trim() || null,
      day_rate: day_rate?.trim() || null,
      // Note: about_you, equipment_software, availability, phone_number columns don't exist in your table
    };

    console.log("Submitting freelancer application:", applicationData);

    // Insert into database
    const { data, error } = await supabase
      .from("freelancer_applications")
      .insert([applicationData])
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      return NextResponse.json(
        {
          error: "Failed to submit application. Please try again.",
        },
        { status: 500 }
      );
    }

    console.log("Application submitted successfully:", data);

    return NextResponse.json(
      {
        success: true,
        application: data,
        message: "Application submitted successfully!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in freelancer application API:", error);
    return NextResponse.json(
      {
        error: "Internal server error. Please try again.",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // This endpoint could be used to fetch applications (admin only)
    // For now, just return a simple response
    return NextResponse.json({
      message: "Freelancer applications API is working",
    });
  } catch (error) {
    console.error("Error in GET freelancer applications:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
