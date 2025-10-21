import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    success: true, 
    message: 'API is working',
    timestamp: new Date().toISOString()
  });
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const testData = {
      full_name: formData.get("full_name") || "Test",
      email: formData.get("email") || "test@example.com"
    };
    
    return NextResponse.json({ 
      success: true, 
      message: 'Form data received',
      data: testData,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: String(error),
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
