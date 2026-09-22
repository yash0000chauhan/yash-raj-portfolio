import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  message?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const projectType = body.projectType?.trim() ?? "";
  const budget = body.budget?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Name, a valid email, and a message are required." },
      { status: 400 }
    );
  }

  const destination =
    process.env.CONTACT_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
  const composed = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Project type: ${projectType || "Not specified"}`,
    `Budget range: ${budget || "Not specified"}`,
    "",
    message,
  ].join("\n");

  if (!destination) {
    return NextResponse.json({
      ok: false,
      fallback: "linkedin",
      message:
        "No contact email is configured. Use LinkedIn or add CONTACT_EMAIL / NEXT_PUBLIC_CONTACT_EMAIL.",
    });
  }

  if (process.env.RESEND_API_KEY) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
        to: [destination],
        reply_to: email,
        subject: `Portfolio inquiry from ${name}`,
        text: composed,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          mailto: `mailto:${destination}?subject=${encodeURIComponent(
            `Portfolio inquiry from ${name}`
          )}&body=${encodeURIComponent(composed)}`,
          message: "Email provider failed; falling back to mailto.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({
    ok: true,
    mailto: `mailto:${destination}?subject=${encodeURIComponent(
      `Portfolio inquiry from ${name}`
    )}&body=${encodeURIComponent(composed)}`,
  });
}
