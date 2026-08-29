import { Resend } from "resend";
import { z } from "zod";
import { profile } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().max(160),
  message: z.string().trim().min(10).max(2000),
  website: z.string().max(0).optional().default("")
});

const attempts = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const current = attempts.get(ip);
  if (current && current.resetAt > now && current.count >= 4) {
    return Response.json({ message: "Too many messages. Please try again later." }, { status: 429 });
  }
  attempts.set(ip, current && current.resetAt > now ? { ...current, count: current.count + 1 } : { count: 1, resetAt: now + 15 * 60_000 });

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }
  const parsed = schema.safeParse(payload);
  if (!parsed.success) return Response.json({ message: "Check your name, email, and message." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ message: `Email delivery is not configured yet. Please email ${profile.email}.` }, { status: 503 });

  const resend = new Resend(apiKey);
  const { name, email, message } = parsed.data;
  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || profile.email,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `${name} <${email}>\n\n${message}`
    });
    return Response.json({ message: "Message sent." }, { status: 201 });
  } catch {
    return Response.json({ message: "Delivery failed. Please use the direct email link." }, { status: 502 });
  }
}
