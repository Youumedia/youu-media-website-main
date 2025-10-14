import { type NextRequest, NextResponse } from "next/server"

// This endpoint accepts multipart/form-data with optional file attachments
export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { summary, files } = body

    // Attempt email via Resend if RESEND_API_KEY is set; otherwise fallback to console
    const toEmail = "Contact@youumedia.com"

    // Extract name from summary for subject line
    const nameMatch = summary.match(/Name: (.+)/);
    const fullName = nameMatch ? nameMatch[1] : "Unknown";

    const payload = {
      to: toEmail,
      subject: `New Freelancer Application - ${fullName}`,
      text: summary + (files && files.length > 0 ? `\n\nFiles mentioned: ${files.map((f: any) => `${f.name} (${f.type}, ${(f.size / 1024 / 1024).toFixed(2)}MB)`).join(', ')}` : ''),
      reply_to: undefined,
    }

    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Youu Media <no-reply@youumedia.com>",
          to: [payload.to],
          subject: payload.subject,
          text: payload.text,
          reply_to: payload.reply_to,
        }),
      })

      if (!res.ok) {
        const errText = await res.text()
        console.error("Resend email failed:", res.status, errText)
        // Continue to fallback
      }
    } else {
      console.log("Application (email fallback):", {
        to: toEmail,
        subject: payload.subject,
        text: payload.text,
      })
    }

    return NextResponse.json({ success: true, message: "Application received successfully" })
  } catch (error) {
    console.error("Error processing application:", error)
    return NextResponse.json({ success: false, message: "Failed to process application" }, { status: 500 })
  }
}
