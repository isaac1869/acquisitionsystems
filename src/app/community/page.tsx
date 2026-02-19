import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import PageTransition from "@/components/PageTransition";

const description =
  "Join the operators building acquisition systems. A private group for high-ticket service providers using books, AI SDRs, and CoreText.";

export const metadata: Metadata = {
  title: "Community",
  description,
  openGraph: {
    title: "Community | New Wave Acquisitions",
    description,
    url: "https://acquisitionsystems.io/community",
  },
};

const SKOOL_URL = "https://www.skool.com/newwave";

const bullets = [
  "Weekly strategy breakdowns from the New Wave team",
  "Live Q&A and implementation support",
  "Access to playbooks, templates, and case studies",
  "A network of operators — not course sellers",
];

export default function CommunityPage() {
  return (
    <PageTransition>
      <section className="pt-16 md:pt-24 pb-16 md:pb-20 px-6 fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            COMMUNITY
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.08] mb-6">
            Join the operators building acquisition systems.
          </h1>
          <p className="text-lg text-gray-600 leading-[1.55]">
            A private group for high-ticket service providers using books, AI
            SDRs, and CoreText to grow.
          </p>
        </div>
      </section>

      <SectionWrapper bg="gray">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold tracking-tight mb-6">
            What you get
          </h2>
          <ul className="space-y-3">
            {bullets.map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-electric-cyan/20 flex items-center justify-center mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center">
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center px-6 py-3.5 bg-electric-cyan text-black font-semibold text-sm tracking-wide hover:opacity-90 active:scale-[0.98] transition-all duration-150"
          >
            Join the Community
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Free to join. Built for operators.
          </p>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
}
