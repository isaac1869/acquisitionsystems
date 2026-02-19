import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const description =
  "For partnerships, press, or general inquiries. Get in touch with New Wave Acquisitions.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  openGraph: {
    title: "Contact | New Wave Acquisitions",
    description,
    url: "https://acquisitionsystems.io/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-16 md:pb-20 px-6 fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            CONTACT
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.08] mb-6">
            Let's talk.
          </h1>
          <p className="text-lg text-gray-600 leading-[1.55]">
            For partnerships, press, or general inquiries.
          </p>
        </div>
      </section>

      <SectionWrapper bg="gray">
        <div className="max-w-md mx-auto">
          <p className="text-sm font-medium text-gray-700 mb-2">Email</p>
          <a
            href="mailto:hello@newwavepress.co"
            className="text-lg text-gray-900 hover:text-electric-cyan transition-colors"
          >
            hello@newwavepress.co
          </a>
          <p className="text-sm text-gray-500 mt-4">
            We typically respond within 24–48 hours.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-6">
            Looking to apply for the system?
          </p>
          <Button href="/apply">Go to Application</Button>
        </div>
      </SectionWrapper>
    </>
  );
}
