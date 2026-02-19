import { NextRequest, NextResponse } from "next/server";
import { sendApplyEmails } from "@/lib/resend";
import { sendToZapier } from "@/lib/zapier";
import type { ApplyPayload } from "@/lib/resend";

function parseBody(body: unknown): ApplyPayload | null {
  if (!body || typeof body !== "object") return null;
  const o = body as Record<string, unknown>;
  const firstName = typeof o.firstName === "string" ? o.firstName.trim() : "";
  const lastName = typeof o.lastName === "string" ? o.lastName.trim() : "";
  const mobile = typeof o.mobile === "string" ? o.mobile.trim() : "";
  const email = typeof o.email === "string" ? o.email.trim() : "";
  const companyName = typeof o.companyName === "string" ? o.companyName.trim() : "";
  const companyWebsite = typeof o.companyWebsite === "string" ? o.companyWebsite.trim() : undefined;
  const annualRevenue = typeof o.annualRevenue === "string" ? o.annualRevenue : "";
  const category = Array.isArray(o.category)
    ? (o.category as string[])
    : typeof o.category === "string"
      ? [o.category]
      : [];
  const offerPricePoint = typeof o.offerPricePoint === "string" ? o.offerPricePoint : "";
  const describeService = typeof o.describeService === "string" ? o.describeService.trim() : "";

  if (!firstName || !lastName || !mobile || !email || !companyName || !annualRevenue || !offerPricePoint || !describeService) {
    return null;
  }
  if (category.length === 0) return null;

  return {
    firstName,
    lastName,
    mobile,
    email,
    companyName,
    companyWebsite: companyWebsite || undefined,
    annualRevenue,
    category,
    offerPricePoint,
    describeService,
  };
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON" },
      { status: 400 }
    );
  }

  const payload = parseBody(body);
  if (!payload) {
    return NextResponse.json(
      { error: "Missing or invalid required fields" },
      { status: 400 }
    );
  }

  try {
    await sendApplyEmails(payload);
  } catch (e) {
    console.error("Resend error:", e);
    return NextResponse.json(
      { error: "Failed to send notification emails" },
      { status: 500 }
    );
  }

  try {
    if (process.env.ZAPIER_WEBHOOK_URL) {
      await sendToZapier(payload);
    }
  } catch (e) {
    console.error("Zapier webhook error:", e);
    // Don't fail the request — emails were sent. Log for follow-up.
  }

  return NextResponse.json({ success: true });
}
