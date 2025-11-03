import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Create mailto link with pre-filled content
    const subject = encodeURIComponent(`Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)

    // In a real application, you would send an email here using a service like:
    // - Resend
    // - SendGrid
    // - Nodemailer
    // For now, we'll return success and the client can handle it

    // Example with a mailto link (client-side handling):
    const mailtoLink = `mailto:bogilekic123@gmail.com?subject=${subject}&body=${body}`

    return NextResponse.json({
      success: true,
      mailtoLink,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
