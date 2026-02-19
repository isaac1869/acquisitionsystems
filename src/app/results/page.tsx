import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import CaseStudyCard from "@/components/CaseStudyCard";
import Button from "@/components/Button";

const description =
  "Real businesses. Real books. Real revenue attributed. Proof and case studies from New Wave Acquisitions.";

export const metadata: Metadata = {
  title: "Results",
  description,
  openGraph: {
    title: "Results | New Wave Acquisitions",
    description,
    url: "https://acquisitionsystems.io/results",
  },
};

const caseStudies = [
  { name: "James Swanwick", category: "Health / Business", outcome: "High-ticket offer + paid acquisition" },
  { name: "Mark Dhamma", category: "TBD", outcome: "Case study in review" },
  { name: "Dr. Brett Jones", category: "Health", outcome: "Case study in review" },
  { name: "Ryan Leslie", category: "Technology / SuperPhone", outcome: "Case study in review" },
];

const metrics = [
  { value: "X+", label: "books distributed" },
  { value: "X%", label: "average reader engagement" },
  { value: "X", label: "calls booked via AI SDR" },
  { value: "$Xk+", label: "attributed revenue" },
];

export default function ResultsPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-16 md:pb-20 px-6 fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            PROOF
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.08] mb-6">
            Results speak. We just track them.
          </h1>
          <p className="text-lg text-gray-600 leading-[1.55]">
            Real businesses. Real books. Real revenue attributed.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {caseStudies.map((c, i) => (
              <CaseStudyCard
                key={i}
                name={c.name}
                category={c.category}
                outcome={c.outcome}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((m, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-semibold text-gray-900 tabular-nums">
                  {m.value}
                </p>
                <p className="text-sm text-gray-600 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">
            Placeholder metrics — will be filled with real data.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl font-medium text-gray-800 leading-[1.55] italic mb-4">
            &ldquo;Having the book is not enticing. Having more clients paying me
            is enticing. Irrespective of how I get there.&rdquo;
          </blockquote>
          <p className="text-gray-600 font-medium">James Swanwick</p>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-6">Want results like these?</p>
          <Button href="/apply">Apply for Early Access</Button>
        </div>
      </SectionWrapper>
    </>
  );
}
