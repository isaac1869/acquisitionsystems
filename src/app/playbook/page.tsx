import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Playbook",
  description:
    "Frameworks, teardowns, and templates for operators building book-based acquisition systems. Free to download.",
  openGraph: {
    title: "The Acquisition Playbook | New Wave Acquisitions",
    description:
      "Frameworks, teardowns, and templates for operators building book-based acquisition systems. Free to download.",
    url: "https://acquisitionsystems.io/playbook",
  },
};

const resources = [
  {
    title: "The Book Funnel Blueprint",
    description:
      "The end-to-end map of how a book becomes a client acquisition system — from instrumentation to attribution. Use this to understand the full loop before you build it.",
    buttonText: "Read the Blueprint →",
    href: "/playbook/book-funnel-blueprint",
  },
  {
    title: "AI SDR Qualification Script Template",
    description:
      "A 5-stage SMS conversation framework for qualifying readers and booking calls — without being a booking bot. Includes a full worked example using CLEAR by James Swanwick.",
    buttonText: "Get the Framework →",
    href: "/playbook/ai-sdr-script",
  },
  {
    title: "How to Calculate Your Book CAC",
    description:
      "A simple model for estimating your client acquisition cost when distributing books via paid ads. Includes a worked example at three price points, including negative CAC scenarios.",
    buttonText: "Run the Numbers →",
    href: "/playbook/book-cac-calculator",
  },
  {
    title: "The Shoulder Season Playbook",
    description:
      "How high-ticket operators keep pipeline moving between campaigns — without burning ad budget. Five moves to activate during slow periods.",
    buttonText: "Read the Playbook →",
    href: "/playbook/shoulder-season",
  },
  {
    title: "CoreText Attribution Guide",
    description:
      "How to read your attribution data and act on it. Covers chapter-level engagement, CTA performance, conversation outcomes, and the single most important number to track.",
    buttonText: "Read the Guide →",
    href: "/playbook/coretext-attribution",
  },
];

export default function PlaybookPage() {
  return (
    <PageTransition>
      <section className="pt-16 md:pt-24 pb-16 md:pb-20 px-6 fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            FREE RESOURCES
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.08] mb-6">
            The Acquisition Playbook
          </h1>
          <p className="text-lg text-gray-600 leading-[1.55]">
            Frameworks, teardowns, and templates for operators building book-based
            acquisition systems. Free to download.
          </p>
        </div>
      </section>

      <SectionWrapper bg="gray">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.href}
                className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col"
              >
                <h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">
                  {resource.title}
                </h2>
                <p className="text-gray-600 leading-[1.6] mb-6 flex-grow">
                  {resource.description}
                </p>
                <Link
                  href={resource.href}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-electric-cyan text-black font-semibold text-sm tracking-wide hover:opacity-90 active:scale-[0.98] transition-all duration-150 w-fit"
                >
                  {resource.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3">
            Want the full system, not just the frameworks?
          </h2>
          <p className="text-gray-600 mb-6">
            We onboard one expert brand per month. Application-based. Only when
            we can forecast ROI.
          </p>
          <Button href="/apply">Apply for Early Access</Button>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
}
