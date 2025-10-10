import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { job_title, user_id, user_email, application_state, timestamp } = body

    if (!process.env.RESEND_API_KEY) {
      console.log('Application notification (no RESEND_API_KEY):', {
        job_title,
        user_id,
        user_email,
        application_state,
        timestamp
      })
      return NextResponse.json({ success: true, message: 'Notification logged (no email service configured)' })
    }

    const applicationText = application_state === 'applied' ? 'applied to' : 'is a runner-up for'
    
    const emailContent = `
New Job Application

Job Title: ${job_title}
Applicant: ${user_email || user_id}
Status: ${application_state}
Applied: ${new Date(timestamp).toLocaleString()}

The applicant has ${applicationText} this job posting.

You can manage applications in your admin panel.
    `.trim()

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Youu Media Jobs <no-reply@youumedia.com>',
        to: [process.env.ADMIN_EMAIL || 'Contact@youumedia.com'],
        subject: `New Job Application - ${job_title}`,
        text: emailContent,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Resend email failed:', response.status, errorText)
      return NextResponse.json({ success: false, error: 'Email sending failed' }, { status: 500 })
    }

    const result = await response.json()
    console.log('Application notification email sent:', result.id)

    return NextResponse.json({ success: true, message: 'Notification email sent' })
  } catch (error) {
    console.error('Error sending application notification:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
