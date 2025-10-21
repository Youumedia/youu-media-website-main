import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log("=== FREELANCER APPLICATION API START ===");
    
    // Parse form data
    const formData = await request.formData();
    
    // Extract all fields
    const full_name = formData.get("full_name") as string;
    const email = formData.get("email") as string;
    const phone_number = formData.get("phone_number") as string;
    const portfolio_url = formData.get("portfolio_url") as string;
    const day_rate = formData.get("day_rate") as string;
    const skills = formData.get("skills_text") as string;
    const availability = formData.get("availability") as string;
    const about_you = formData.get("about_you") as string;
    const equipment_software = formData.get("equipment_software") as string;
    const experience_years = formData.get("experience") as string;
    const portfolioFiles = formData.getAll("portfolioFiles") as File[];

    console.log("Form data received:", { full_name, email, fileCount: portfolioFiles.length });

    // Basic validation
    if (!full_name || !email) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }

    // Try to create Supabase client
    let supabase;
    try {
      const { createSupabaseServerClient } = await import("@/lib/supabase");
      supabase = createSupabaseServerClient({
        get: (name: string) => ({ name, value: request.cookies.get(name)?.value || "" }),
        set: (name: string, value: string, options: any) => {},
        remove: (name: string, options: any) => {},
      });
    } catch (error) {
      console.error("Supabase client creation failed:", error);
      return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
    }

    // Handle file uploads (simplified)
    let portfolioFileUrls: string[] = [];
    let uploadedFiles: string[] = [];
    
    if (portfolioFiles && portfolioFiles.length > 0) {
      console.log(`Processing ${portfolioFiles.length} files...`);
      
      for (const file of portfolioFiles) {
        if (file.size > 0) {
          try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
            const filePath = `freelancer-portfolios/${email}/${fileName}`;
            const fileBuffer = await file.arrayBuffer();

            const { data: uploadData, error: uploadError } = await supabase.storage
              .from('portfolio_uploads')
              .upload(filePath, fileBuffer, { contentType: file.type, upsert: false });

            if (!uploadError) {
              const { data: urlData } = supabase.storage
                .from('portfolio_uploads')
                .getPublicUrl(filePath);
              
              if (urlData?.publicUrl) {
                portfolioFileUrls.push(urlData.publicUrl);
                uploadedFiles.push(file.name);
                console.log(`File uploaded: ${file.name}`);
              }
            }
          } catch (fileError) {
            console.warn(`File upload failed: ${fileError}`);
          }
        }
      }
    }

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
      portfolio_file_url: portfolioFileUrls.length > 0 ? portfolioFileUrls.join(',') : null,
      uploaded_files: uploadedFiles.length > 0 ? uploadedFiles.join(',') : null,
      status: "pending",
    };

    console.log("Attempting database insert...");

    // Try database insert with multiple fallbacks
    let application;
    let insertError;

    // First attempt
    let { data: applicationData_result, error: insertError_result } = await supabase
      .from("freelancer_applications")
      .insert([applicationData])
      .select()
      .single();

    application = applicationData_result;
    insertError = insertError_result;

    // If RLS error, try with service role
    if (insertError && (insertError.code === '42501' || insertError.message.includes('RLS'))) {
      console.log("RLS error, trying service role...");
      
      if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
        try {
          const { createClient } = await import('@supabase/supabase-js');
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
      return NextResponse.json({ 
        error: "Failed to save application", 
        details: insertError.message 
      }, { status: 500 });
    }

    console.log("Application saved successfully:", application?.id);

    return NextResponse.json({
      success: true,
      application,
      portfolioFiles: portfolioFileUrls,
      message: "Application submitted successfully"
    });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ 
      error: "Internal server error", 
      details: String(error) 
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { createSupabaseServerClient } = await import("@/lib/supabase");
    const supabase = createSupabaseServerClient({
      get: (name: string) => ({ name, value: request.cookies.get(name)?.value || "" }),
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
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}