import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Your application has been received. We'll be in touch within 48 hours.",
  openGraph: {
    title: "Thank You | New Wave Acquisitions",
    description: "Application received.",
    url: "https://acquisitionsystems.io/thank-you",
  },
};

const steps = [
  "We review your application (24–48 hours)",
  "If it's a fit, we'll schedule a strategy call",
  "We build your system together",
];

export default function ThankYouPage() {
  return (
    <PageTransition>
    <section className="pt-16 md:pt-24 pb-24 px-6 fade-in">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] leading-[1.08] mb-4">
          Application received.
        </h1>
        <p className="text-gray-600 leading-[1.6] mb-10">
          Thank you for applying. We review every application personally and
          will be in touch within 48 hours.
        </p>
        <p className="text-gray-600 mb-2">In the meantime, join our community.</p>
        <Link
          href="/community"
          className="inline-block text-electric-cyan font-medium hover:opacity-90"
        >
          Join community →
        </Link>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            What to expect
          </h2>
          <ol className="space-y-4 text-left">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-cyan/20 flex items-center justify-center text-sm font-medium text-gray-900">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
    </PageTransition>
  );
}
