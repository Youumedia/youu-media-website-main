import { type NextRequest, NextResponse } from "next/server"

// This endpoint accepts multipart/form-data with optional file attachments
export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const fullName = String(formData.get("fullName") || "")
    const email = String(formData.get("email") || "")
    const phone = String(formData.get("phone") || "")
    const portfolioLink = String(formData.get("portfolioLink") || "")
    const skillsText = String(formData.get("skillsText") || "")
    const availability = String(formData.get("availability") || "")
    const experience = String(formData.get("experience") || "")
    const aboutYou = String(formData.get("aboutYou") || "")
    const equipment = String(formData.get("equipment") || "")
    const rates = String(formData.get("rates") || "")
    const summary = String(formData.get("summary") || "")

    const files = formData.getAll("files") as File[]

    // Attempt email via Resend if RESEND_API_KEY is set; otherwise fallback to console
    const toEmail = "Contact@youumedia.com"

    const attachments: Array<{ filename: string; content: string; contentType?: string }> = []
    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer()
      const base64Content = Buffer.from(arrayBuffer).toString("base64")
      attachments.push({ filename: file.name, content: base64Content, contentType: file.type })
    }

    const payload = {
      to: toEmail,
      subject: `New Freelancer Application - ${fullName}`,
      text: summary,
      attachments,
      reply_to: email || undefined,
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
          attachments: payload.attachments.map((a) => ({
            filename: a.filename,
            content: a.content,
            content_type: a.contentType,
          })),
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
        subject: `New Freelancer Application - ${fullName}`,
        text: summary,
        attachments: attachments.map((a) => ({ filename: a.filename, contentType: a.contentType })),
      })
    }

    return NextResponse.json({ success: true, message: "Application received successfully" })
  } catch (error) {
    console.error("Error processing application:", error)
    return NextResponse.json({ success: false, message: "Failed to process application" }, { status: 500 })
  }
}
