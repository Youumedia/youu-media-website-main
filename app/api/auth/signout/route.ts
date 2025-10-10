import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { createSupabaseServerClient } from "@/lib/supabase"

export async function POST(request: Request) {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient({
    get: (name: string) => cookieStore.get(name),
    set: (name, value, options) => cookieStore.set({ name, value, ...options }),
    remove: (name, options) => cookieStore.set({ name, value: "", ...options }),
  })
  await supabase.auth.signOut()
  return NextResponse.redirect(new URL("/signin", request.url))
}


