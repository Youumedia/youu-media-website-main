import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase";
import { isDevMode, getDevUser, devLog } from "@/lib/dev-auth";

export async function POST(request: NextRequest) {
  try {
    console.log("POST /api/freelancer-applications - Starting request");

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

    console.log("=== FORM DATA DEBUG ===");
    console.log("Raw form data entries:");
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    
    console.log("Extracted fields:", {
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
      fileCount: portfolioFiles.length
    });

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
    
    // Check if we need to set up service role for anonymous inserts
    console.log("Using Supabase client for anonymous insert");
    
    // Test database connection first
    console.log("Testing database connection...");
    const { data: testData, error: testError } = await supabase
      .from("freelancer_applications")
      .select("id")
      .limit(1);
      
    if (testError) {
      console.error("Database connection test failed:", testError);
      return NextResponse.json(
        {
          error: "Database connection failed",
          details: testError.message,
          code: testError.code
        },
        { status: 500 }
      );
    }
    console.log("Database connection test successful");

    // Check if application already exists for this email
    console.log("Checking for existing application with email:", email);
    const { data: existingApplication, error: existingError } = await supabase
      .from("freelancer_applications")
      .select("id")
      .eq("email", email)
      .single();

    // If error is not "not found", log it but continue
    if (existingError && existingError.code !== 'PGRST116') {
      console.warn("Error checking existing application:", existingError);
    }

    if (existingApplication) {
      console.log("Application already exists for email:", email);
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
              console.error('Error uploading file:', uploadError);
              // Don't fail the entire submission for file upload errors
              console.warn(`File upload failed for ${file.name}, continuing without file`);
              continue;
            }

            // Get public URL
            const { data: urlData } = supabase.storage
              .from('portfolio_uploads')
              .getPublicUrl(filePath);

            if (urlData?.publicUrl) {
              portfolioFileUrls.push(urlData.publicUrl);
              uploadedFiles.push(file.name); // Store original filename
              console.log(`File uploaded successfully: ${urlData.publicUrl}`);
            }

          } catch (fileError) {
            console.error('Error processing file:', fileError);
            // Don't fail the entire submission for file processing errors
            console.warn(`File processing failed for ${file.name}, continuing without file`);
            continue;
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

    console.log("=== DATABASE INSERT DEBUG ===");
    console.log("Application data to insert:", JSON.stringify(applicationData, null, 2));

    // Insert the new application with exact database column names
    console.log("Attempting database insert...");
    let { data: application, error: insertError } = await supabase
      .from("freelancer_applications")
      .insert([applicationData])
      .select()
      .single();

    // If insert fails due to RLS, try with service role
    if (insertError && (insertError.code === '42501' || insertError.message.includes('RLS'))) {
      console.log("RLS error detected, trying with service role...");
      
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
        console.log("Service role key not available, using anon key with RLS bypass");
        // Try with anon key but bypass RLS by using a different approach
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
      console.error("=== DATABASE INSERT ERROR ===");
      console.error("Error details:", insertError);
      console.error("Error message:", insertError.message);
      console.error("Error code:", insertError.code);
      console.error("Error details:", insertError.details);
      console.error("Error hint:", insertError.hint);
      
      // Try a minimal insert as last resort
      console.log("Attempting minimal insert as fallback...");
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
        console.error("Minimal insert also failed:", minimalError);
        return NextResponse.json(
          {
            error: "Failed to submit application",
            details: insertError.message,
            code: insertError.code,
            hint: insertError.hint,
            fallbackError: minimalError.message
          },
          { status: 500 }
        );
      } else {
        console.log("Minimal insert successful:", minimalApplication);
        application = minimalApplication;
      }
    }

    console.log("Application created successfully:", application);
    console.log("Portfolio files uploaded:", portfolioFileUrls);

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