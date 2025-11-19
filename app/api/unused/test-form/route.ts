import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log("=== TEST FORM API ===");
    
    const formData = await request.formData();
    const data = {
      full_name: formData.get("full_name"),
      email: formData.get("email"),
      fileCount: formData.getAll("portfolioFiles").length
    };
    
    console.log("Received data:", data);
    
    return NextResponse.json({
      success: true,
      message: "Test form received successfully",
      data: data
    });
  } catch (error) {
    console.error("Test form error:", error);
    return NextResponse.json(
      { error: "Test form failed", details: String(error) },
      { status: 500 }
    );
  }
}
