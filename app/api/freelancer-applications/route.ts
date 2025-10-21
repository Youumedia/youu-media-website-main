import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase";
import { isDevMode, getDevUser, devLog } from "@/lib/dev-auth";

export async function POST(request: NextRequest) {
  try {
    console.log("POST /api/freelancer-applications - Starting request");
    
    // Add error boundary for debugging
    console.log("Environment check:", {
      hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasSupabaseAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      hasServiceRoleKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY
    });

    // Parse multipart/form-data
    const formData = await request.formData();
    
    // Extract form fields - match exact database column names
    const full_name = formData.get("full_name") as string;
    const email = formData.get("email") as string;
    const phone_number = formData.get("phone_number") as string;
    const portfolio_url = formData.get("portfolio_url") as string;
    const day_rate = formData.get("day_rate") as string;
    const skills = formData.get("skills_text") as string; // Map skills_text to skills
    const availability = formData.get("availability") as string;
    const about_you = formData.get("about_you") as string;
    const equipment_software = formData.get("equipment_software") as string;
    const experience_years = formData.get("experience") as string; // Map experience to experience_years

    // Extract portfolio files
    const portfolioFiles = formData.getAll("portfolioFiles") as File[];

    console.log("Form submission received:", { full_name, email, fileCount: portfolioFiles.length });

    // Validate required fields
    if (!full_name || !email) {
      console.error("Validation failed: Missing required fields", { full_name, email });
      return NextResponse.json(
        {
          error: "Full name and email are required",
          received: { full_name, email }
        },
        { status: 400 }
      );
    }

    // Additional validation
    if (full_name.trim().length === 0 || email.trim().length === 0) {
      console.error("Validation failed: Empty required fields", { full_name, email });
      return NextResponse.json(
        {
          error: "Full name and email cannot be empty",
          received: { full_name, email }
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

    // For freelancer applications, we allow anonymous submissions
    // No authentication required for public freelancer applications
    
    // Test database connection
    const { data: testData, error: testError } = await supabase
      .from("freelancer_applications")
      .select("id")
      .limit(1);
      
    if (testError) {
      console.error("Database connection failed:", testError);
      return NextResponse.json(
        {
          error: "Database connection failed",
          details: testError.message,
          code: testError.code
        },
        { status: 500 }
      );
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

    // Handle file uploads to Supabase Storage
    let portfolioFileUrls: string[] = [];
    let uploadedFiles: string[] = [];
    
    if (portfolioFiles && portfolioFiles.length > 0) {
      console.log(`Processing ${portfolioFiles.length} portfolio files...`);
      
      for (const file of portfolioFiles) {
        if (file.size > 0) { // Only process non-empty files
          try {
            // Generate unique filename
            const fileExt = file.name.split('.').pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
            const filePath = `freelancer-portfolios/${email}/${fileName}`;

            // Convert file to ArrayBuffer
            const fileBuffer = await file.arrayBuffer();

            // Upload to Supabase Storage
            const { data: uploadData, error: uploadError } = await supabase.storage
              .from('portfolio_uploads')
              .upload(filePath, fileBuffer, {
                contentType: file.type,
                upsert: false
              });

            if (uploadError) {
              console.warn(`File upload failed for ${file.name}: ${uploadError.message}`);
              continue; // Continue with other files
            }

            // Get public URL
            const { data: urlData } = supabase.storage
              .from('portfolio_uploads')
              .getPublicUrl(filePath);

            if (urlData?.publicUrl) {
              portfolioFileUrls.push(urlData.publicUrl);
              uploadedFiles.push(file.name);
              console.log(`File uploaded: ${file.name}`);
            }

          } catch (fileError) {
            console.warn(`File processing failed for ${file.name}: ${fileError.message}`);
            continue; // Continue with other files
          }
        }
      }
    }

    // Prepare the data object for database insert
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

    // Insert the new application with exact database column names
    let { data: application, error: insertError } = await supabase
      .from("freelancer_applications")
      .insert([applicationData])
      .select()
      .single();

    // If insert fails due to RLS, try with service role
    if (insertError && (insertError.code === '42501' || insertError.message.includes('RLS'))) {
      if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
        // Create service role client
        const { createClient } = await import('@supabase/supabase-js');
        const serviceSupabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.SUPABASE_SERVICE_ROLE_KEY!,
          {
            auth: {
              autoRefreshToken: false,
              persistSession: false
            }
          }
        );

        const serviceResult = await serviceSupabase
          .from("freelancer_applications")
          .insert([applicationData])
          .select()
          .single();

        application = serviceResult.data;
        insertError = serviceResult.error;
      } else {
        // Try with anon key
        const { createClient } = await import('@supabase/supabase-js');
        const anonSupabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        const anonResult = await anonSupabase
          .from("freelancer_applications")
          .insert([applicationData])
          .select()
          .single();

        application = anonResult.data;
        insertError = anonResult.error;
      }
    }

    if (insertError) {
      console.error("Database insert failed:", insertError.message);
      
      // Try minimal insert as fallback
      const minimalData = {
        full_name,
        email,
        status: "pending"
      };
      
      const { data: minimalApplication, error: minimalError } = await supabase
        .from("freelancer_applications")
        .insert([minimalData])
        .select()
        .single();
        
      if (minimalError) {
        return NextResponse.json(
          {
            error: "Failed to submit application",
            details: insertError.message,
            code: insertError.code
          },
          { status: 500 }
        );
      } else {
        application = minimalApplication;
      }
    }

    return NextResponse.json({
      success: true,
      application,
      portfolioFiles: portfolioFileUrls,
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("Error in POST /api/freelancer-applications:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
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
    let isAdmin = false;
    
    if (isDevMode()) {
      user = getDevUser();
      devLog("GET /api/freelancer-applications - Using dev user");
      isAdmin = true; // Dev mode is always admin
    } else {
      const {
        data: { user: authUser },
        error: authError,
      } = await supabase.auth.getUser();
      if (authUser) {
        user = authUser;
        isAdmin = user.id === process.env.ADMIN_USER_ID || user.email === process.env.ADMIN_EMAIL;
      }
    }

    let query = supabase.from("freelancer_applications").select("*");

    if (!isAdmin && user) {
      // Non-admin authenticated users can only see their own applications
      query = query.eq("email", user.email);
    } else if (!isAdmin && !user) {
      // Anonymous users cannot view applications
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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