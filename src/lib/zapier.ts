import type { ApplyPayload } from "./resend";

const WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL;

export async function sendToZapier(payload: ApplyPayload): Promise<void> {
  if (!WEBHOOK_URL) {
    throw new Error("ZAPIER_WEBHOOK_URL is not set");
  }

  const res = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Zapier webhook failed: ${res.status}`);
  }
}
