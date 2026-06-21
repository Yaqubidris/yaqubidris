"use server";

import { Resend } from "resend";

// Fallback directly to your key if the .env.local file fails to load
const apiKey = process.env.RESEND_API_KEY || "re_89U2QDpL_7T8UiQ9rusnEsq3spEVXQ9nb";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function transmitMessageAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields." };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Terminal <onboarding@resend.dev>",
      to: "idrisyakubu816@gmail.com",
      subject: `[Terminal Signal] New Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: monospace; background-color: #020712; color: #f4f4f5; padding: 24px; border: 1px solid #0f172a;">
          <h2 style="color: #38bdf8; border-bottom: 1px solid #1e293b; padding-bottom: 8px;">TRANSMISSION RECEIVED</h2>
          <p><strong>Sender Identity:</strong> ${name}</p>
          <p><strong>Return Address:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 16px; background-color: #090d16; border-left: 3px solid #38bdf8;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to broadcast signal." };
  }
}