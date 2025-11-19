import { NextResponse } from "next/server";

export async function GET() {
  const envCheck = {
    supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    serviceRoleKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    anonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    supabaseUrlValue: process.env.NEXT_PUBLIC_SUPABASE_URL,
    serviceRoleKeyValue: process.env.SUPABASE_SERVICE_ROLE_KEY ? "Present" : "Missing",
    anonKeyValue: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "Present" : "Missing"
  };

  return NextResponse.json(envCheck);
}
