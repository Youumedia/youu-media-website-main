import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const start = Date.now();

  try {
    console.log("=== FREELANCER APPLICATION API START ===");
    console.log(
      "Request headers:",
      Object.fromEntries(request.headers.entries())
    );
    console.log("Request method:", request.method);
    console.log("Request URL:", request.url);

    // Parse form data
    const formData = await request.formData();
    console.log("FormData keys:", Array.from(formData.keys()));

    // Extract all fields
    const full_name = formData.get("full_name") as string;
    const email = formData.get("email") as string;
    const phone_number = formData.get("phone_number") as string;
    const portfolio_url = formData.get("portfolio_url") as string;
    const day_rate = formData.get("ideal_day_rate") as string;
    const skills = formData.get("skills_text") as string;
    const availability = formData.get("availability") as string;
    const about_you = formData.get("about_you") as string;
    const equipment_software = formData.get("equipment_software") as string;
    const experience_years = formData.get("experience") as string;

    console.log("Form data received:", {
      full_name,
      email,
      phone_number,
      portfolio_url,
      day_rate,
      skills,
      availability,
      about_you,
      equipment_software,
      experience_years,
    });

    // Basic validation
    if (!full_name || !email) {
      return NextResponse.json(
        { error: "Name and email required" },
        { status: 400 }
      );
    }

    // Create a fresh Supabase client every request
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    console.log("Environment check:", {
      url: !!supabaseUrl,
      serviceRole: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      anon: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      usingKey: process.env.SUPABASE_SERVICE_ROLE_KEY ? "service" : "anon",
    });

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase credentials:", {
        url: !!supabaseUrl,
        key: !!supabaseKey,
        serviceRole: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
        anon: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      });
      return NextResponse.json(
        { error: "Server configuration error - missing Supabase credentials" },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Prepare data for database
    const applicationData = {
      full_name,
      email,
      phone_number: phone_number || null,
      skills: skills || null,
      experience_years: experience_years || null,
      portfolio_url: portfolio_url || null,
      about_you: about_you || null,
      availability: availability || null,
      day_rate: day_rate || null,
      equipment_software: equipment_software || null,
      status: "pending",
    };

    // Insert application data into database
    console.log("Inserting application into database...");
    console.log("Data being inserted:", applicationData);

    let application;
    let insertError;

    // First attempt
    let { data: applicationData_result, error: insertError_result } =
      await supabase
        .from("freelancer_applications")
        .insert([applicationData])
        .select()
        .single();

    application = applicationData_result;
    insertError = insertError_result;

    // If RLS error, try with service role
    if (
      insertError &&
      (insertError.code === "42501" || insertError.message.includes("RLS"))
    ) {
      console.log("RLS error, trying service role...");

      if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
        try {
          const { createClient } = await import("@supabase/supabase-js");
          const serviceSupabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!,
            { auth: { autoRefreshToken: false, persistSession: false } }
          );

          const serviceResult = await serviceSupabase
            .from("freelancer_applications")
            .insert([applicationData])
            .select()
            .single();

          application = serviceResult.data;
          insertError = serviceResult.error;
        } catch (serviceError) {
          console.error("Service role failed:", serviceError);
        }
      }
    }

    // If still error, try minimal insert
    if (insertError) {
      console.log("Trying minimal insert...");
      const minimalData = { full_name, email, status: "pending" };

      const { data: minimalResult, error: minimalError } = await supabase
        .from("freelancer_applications")
        .insert([minimalData])
        .select()
        .single();

      if (!minimalError) {
        application = minimalResult;
        insertError = null;
      }
    }

    if (insertError) {
      console.error("All database attempts failed:", insertError);
      throw new Error(`Failed to save application: ${insertError.message}`);
    }

    console.log("Application saved successfully:", application?.id);

    const elapsed = Date.now() - start;
    console.log(`⏱️ Form processed in ${elapsed}ms`);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: String(error),
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { createSupabaseServerClient } = await import("@/lib/supabase");
    const supabase = createSupabaseServerClient({
      get: (name: string) => ({
        name,
        value: request.cookies.get(name)?.value || "",
      }),
      set: (name: string, value: string, options: any) => {},
      remove: (name: string, options: any) => {},
    });

    const { data: applications, error } = await supabase
      .from("freelancer_applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ applications });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
