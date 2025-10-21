import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase";
import { isDevMode, getDevUser, devLog } from "@/lib/dev-auth";

export async function POST(request: NextRequest) {
  try {
    console.log("POST /api/freelancer-applications - Starting request");

    // Parse multipart/form-data
    const formData = await request.formData();
    
    // Extract form fields
    const full_name = formData.get("full_name") as string;
    const email = formData.get("email") as string;
    const phone_number = formData.get("phone_number") as string;
    const portfolio_url = formData.get("portfolio_url") as string;
    const day_rate = formData.get("day_rate") as string;
    const skills_text = formData.get("skills_text") as string;
    const availability = formData.get("availability") as string;
    const about_you = formData.get("about_you") as string;
    const equipment_software = formData.get("equipment_software") as string;

    // Extract portfolio files
    const portfolioFiles = formData.getAll("portfolioFiles") as File[];

    console.log("Form data received:", {
      full_name,
      email,
      phone_number,
      portfolio_url,
      day_rate,
      skills_text,
      availability,
      about_you,
      equipment_software,
      fileCount: portfolioFiles.length
    });

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

    // For freelancer applications, we allow anonymous submissions
    // No authentication required for public freelancer applications

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
              .from('freelancer_portfolios')
              .upload(filePath, fileBuffer, {
                contentType: file.type,
                upsert: false
              });

            if (uploadError) {
              console.error('Error uploading file:', uploadError);
              return NextResponse.json(
                {
                  error: `Failed to upload file ${file.name}: ${uploadError.message}`,
                },
                { status: 500 }
              );
            }

            // Get public URL
            const { data: urlData } = supabase.storage
              .from('freelancer_portfolios')
              .getPublicUrl(filePath);

            if (urlData?.publicUrl) {
              portfolioFileUrls.push(urlData.publicUrl);
              console.log(`File uploaded successfully: ${urlData.publicUrl}`);
            }

          } catch (fileError) {
            console.error('Error processing file:', fileError);
            return NextResponse.json(
              {
                error: `Failed to process file ${file.name}`,
              },
              { status: 500 }
            );
          }
        }
      }
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
          portfolio_file_url: portfolioFileUrls.length > 0 ? portfolioFileUrls.join(',') : null,
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