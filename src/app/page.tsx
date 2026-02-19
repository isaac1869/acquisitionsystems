import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import StatementSection from "@/components/StatementSection";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import SwanwickQuote from "@/components/SwanwickQuote";
import OutcomeBullets from "@/components/OutcomeBullets";
import NegativeCAC from "@/components/NegativeCAC";
import ComparisonTable from "@/components/ComparisonTable";
import CaseStudyCard from "@/components/CaseStudyCard";
import PoweredBySuperPhone from "@/components/PoweredBySuperPhone";
import Button from "@/components/Button";
import PageTransition from "@/components/PageTransition";

const homeDescription =
  "Acquire high-ticket clients with an AI SDR twin embedded in your book. Intellibook captures reader intent. CoreText shows what converts.";

export const metadata: Metadata = {
  title: "New Wave Acquisitions",
  description: homeDescription,
  openGraph: {
    title: "New Wave Acquisitions | acquisitionsystems.io",
    description: homeDescription,
    url: "https://acquisitionsystems.io/",
  },
};

const caseStudies = [
  { name: "James Swanwick", category: "Health / Business", outcome: "High-ticket offer + paid acquisition" },
  { name: "Mark Dhamma", category: "TBD", outcome: "Case study in review" },
  { name: "Dr. Brett Jones", category: "Health", outcome: "Case study in review" },
  { name: "Ryan Leslie", category: "Technology / SuperPhone", outcome: "Case study in review" },
];

const onboardingBullets = [
  "We review your offer and unit economics first.",
  "If we can't forecast a path to ROI, we won't onboard you.",
  "Capacity stays limited to protect implementation quality.",
];

function CheckIcon() {
  return (
    <svg className="w-3 h-3 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <PageTransition>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Reading becomes data statement */}
      <StatementSection />

      {/* 3. Product Tiles */}
      <SectionWrapper>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <ProductCard
              eyebrow="Intellibook"
              title="Capture intent"
              description="Turn reading into measurable intent signals."
            />
            <ProductCard
              eyebrow="AI SDR Twin"
              title="Convert"
              description="Engage readers instantly and route qualified interest."
              highlight
            />
            <ProductCard
              eyebrow="CoreText"
              title="Attribute"
              description="See what drives pipeline from page to close."
            />
          </div>
        </div>
      </SectionWrapper>

      {/* 4. James Swanwick Quote */}
      <SwanwickQuote />

      {/* 5. Outcome Bullets */}
      <OutcomeBullets />

      {/* 6. Negative CAC Slider */}
      <NegativeCAC />

      {/* 7. Renting vs Owning */}
      <SectionWrapper>
        <ComparisonTable />
      </SectionWrapper>

      {/* 8. Case Study Cards */}
      <SectionWrapper>
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudies.map((c, i) => (
              <CaseStudyCard key={i} name={c.name} category={c.category} outcome={c.outcome} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 9. Powered by SuperPhone */}
      <PoweredBySuperPhone />

      {/* 10. Selective Onboarding */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
            Selective onboarding. One brand per month.
          </h2>
          <ul className="space-y-3">
            {onboardingBullets.map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 leading-[1.55]">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-electric-cyan/20 flex items-center justify-center mt-0.5">
                  <CheckIcon />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* 11. Final CTA */}
      <SectionWrapper id="apply" bg="gray">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3">
            Ready to build your acquisition system?
          </h2>
          <p className="text-gray-600 mb-8">
            One brand per month. Apply to reserve your spot.
          </p>
          <Button href="/apply">APPLY FOR EARLY ACCESS</Button>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
}
