import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return Response.json({ error: "Please fill in every field." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return Response.json({ error: "One of the fields is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("Contact form is not configured: missing RESEND_API_KEY or CONTACT_TO_EMAIL.");
    return Response.json(
      { error: "The contact form isn't set up yet. Please reach out by phone in the meantime." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Shanta Samanta Website <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New enquiry from ${name} — shantasamanta.com`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Could not send your message. Please try again." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return Response.json({ error: "Could not send your message. Please try again." }, { status: 500 });
  }
}
