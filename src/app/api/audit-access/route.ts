import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // Create mailto link with the lead information
    const subject = encodeURIComponent("New Audit Download Request")
    const body = encodeURIComponent(
      `New lead downloaded your Website Conversion Audit!\n\nEmail: ${email}\n\nDate: ${new Date().toLocaleString()}`,
    )

    // In a real application, you would send this via an email service
    // For now, we'll just log it and return success
    console.log(`[v0] Audit access requested by: ${email}`)

    // You can manually check the console or set up email forwarding
    // Alternatively, integrate with services like SendGrid, Resend, or Nodemailer

    return NextResponse.json({
      success: true,
      message: "Access granted",
      // Include the mailto link so it can be opened client-side if needed
      mailto: `mailto:bogilekic123@gmail.com?subject=${subject}&body=${body}`,
    })
  } catch (error) {
    console.error("Error processing audit access:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
