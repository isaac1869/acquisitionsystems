import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import CaseStudyCard from "@/components/CaseStudyCard";
import Button from "@/components/Button";
import PageTransition from "@/components/PageTransition";

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
    <PageTransition>
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

      {/* James Swanwick Video Testimonial */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-center mb-8">
            Hear from James Swanwick
          </h3>
          <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-500">Video Testimonial Coming Soon</p>
              <p className="text-xs text-gray-400 mt-1">James Swanwick — Health / Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Daniel Video */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-center mb-8">
            A Message from Daniel DiPiazza
          </h3>
          <div className="aspect-video bg-white rounded-xl flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-500">Video Coming Soon</p>
              <p className="text-xs text-gray-400 mt-1">Daniel DiPiazza — Co-founder, New Wave Acquisitions</p>
            </div>
          </div>
        </div>
      </section>

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
    </PageTransition>
  );
}
