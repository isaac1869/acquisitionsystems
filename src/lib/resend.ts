import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const TO_EMAILS = [
  "isaac@newwavepress.co",
  "daniel@newwavepress.co",
  "hello@newwavepress.co",
];

export type ApplyPayload = {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  companyName: string;
  companyWebsite?: string;
  annualRevenue: string;
  category: string[];
  offerPricePoint: string;
  describeService: string;
};

function toHtml(p: ApplyPayload): string {
  const categoryStr = Array.isArray(p.category) ? p.category.join(", ") : p.category;
  return `
    <h2>New Application</h2>
    <p><strong>Name:</strong> ${p.firstName} ${p.lastName}</p>
    <p><strong>Email:</strong> ${p.email}</p>
    <p><strong>Mobile:</strong> ${p.mobile}</p>
    <p><strong>Company:</strong> ${p.companyName}</p>
    ${p.companyWebsite ? `<p><strong>Website:</strong> ${p.companyWebsite}</p>` : ""}
    <p><strong>Annual Revenue:</strong> ${p.annualRevenue}</p>
    <p><strong>Category:</strong> ${categoryStr}</p>
    <p><strong>Offer Price Point:</strong> ${p.offerPricePoint}</p>
    <p><strong>Describe Your Service:</strong></p>
    <p>${p.describeService.replace(/\n/g, "<br>")}</p>
  `;
}

export async function sendApplyEmails(payload: ApplyPayload): Promise<void> {
  if (!resend) {
    throw new Error("RESEND_API_KEY is not set");
  }

  const subject = `New Application: ${payload.firstName} ${payload.lastName} — ${payload.companyName}`;
  const html = toHtml(payload);

  // For production, set RESEND_FROM to a verified domain (e.g. "Acquisitions <hello@acquisitionsystems.io>")
  const from = process.env.RESEND_FROM || "New Wave Acquisitions <onboarding@resend.dev>";

  await resend.emails.send({
    from,
    to: TO_EMAILS,
    subject,
    html,
  });
}
