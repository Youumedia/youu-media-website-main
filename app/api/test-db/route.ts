import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  try {
    console.log("Testing database connection...");
    
    const supabase = createSupabaseServerClient({
      get: (name: string) => ({
        name,
        value: request.cookies.get(name)?.value || "",
      }),
      set: (name: string, value: string, options: any) => {},
      remove: (name: string, options: any) => {},
    });

    // Test database connection by trying to select from freelancer_applications
    const { data, error } = await supabase
      .from("freelancer_applications")
      .select("id, full_name, email, created_at")
      .limit(5);

    if (error) {
      console.error("Database connection error:", error);
      return NextResponse.json({
        success: false,
        error: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      }, { status: 500 });
    }

    console.log("Database connection successful. Found", data?.length || 0, "records");
    
    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      recordCount: data?.length || 0,
      sampleData: data
    });

  } catch (error) {
    console.error("Test database error:", error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}
