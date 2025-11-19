import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    console.log("Testing database insert...");
    
    const supabase = createSupabaseServerClient({
      get: (name: string) => ({
        name,
        value: request.cookies.get(name)?.value || "",
      }),
      set: (name: string, value: string, options: any) => {},
      remove: (name: string, options: any) => {},
    });

    // Test insert with minimal data
    const testData = {
      full_name: "Test User",
      email: `test-${Date.now()}@example.com`,
      phone_number: "1234567890",
      skills: "Test Skills",
      experience_years: "2 years",
      portfolio_url: "https://example.com",
      about_you: "Test about",
      availability: "Full-time",
      day_rate: "100",
      equipment_software: "Test equipment",
      portfolio_file_url: null,
      uploaded_files: null,
      status: "pending"
    };

    console.log("Test data to insert:", testData);

    const { data, error } = await supabase
      .from("freelancer_applications")
      .insert([testData])
      .select()
      .single();

    if (error) {
      console.error("Database insert error:", error);
      return NextResponse.json({
        success: false,
        error: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      }, { status: 500 });
    }

    console.log("Database insert successful:", data);
    
    return NextResponse.json({
      success: true,
      message: "Database insert successful",
      data: data
    });

  } catch (error) {
    console.error("Test insert error:", error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}
