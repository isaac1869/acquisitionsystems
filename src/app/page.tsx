import type { Metadata } from "next";
import HeroVideo from "@/components/HeroVideo";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import NegativeCAC from "@/components/NegativeCAC";
import ComparisonTable from "@/components/ComparisonTable";
import CaseStudyCard from "@/components/CaseStudyCard";
import Button from "@/components/Button";

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

const outcomeBullets = [
  "Lower CAC without lowering quality",
  "Warmer leads who show up",
  "Readers convert faster than cold opt-ins",
  "Attribution you can trust",
  "Pipeline that keeps moving when spend pauses",
];

const whatYouGet = [
  {
    title: "Ghostwriting + distribution",
    desc: "We extract your methodology, write the book, and distribute it end-to-end.",
  },
  {
    title: "AI SDR twin trained on your methodology",
    desc: "Your AI SDR engages readers, answers questions, and routes qualified interest into your pipeline.",
  },
  {
    title: "Reader intent capture + routing",
    desc: "Intellibook captures reader actions and turns them into clear intent signals you can act on.",
  },
  {
    title: "CoreText attribution + reporting",
    desc: "CoreText shows what chapters, triggers, and conversations actually produced pipeline.",
  },
  {
    title: "Implementation support",
    desc: "We handle the technical setup so the system works without you stitching tools together.",
  },
  {
    title: "Selective onboarding",
    desc: "We onboard one brand per month, and only when we can forecast a path to ROI.",
  },
];

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
    <>
      {/* Hero */}
      <section className="pt-16 md:pt-20 pb-16 md:pb-24 px-6 fade-in">
        <div className="max-w-5xl mx-auto">
          <HeroVideo />
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">
            BOOK-BASED ACQUISITION + ATTRIBUTION
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1.08] mb-6 max-w-4xl">
            Acquire high-ticket clients with an AI SDR twin embedded in your book.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-4 leading-[1.55]">
            Intellibook captures reader intent. CoreText shows what converts. Your AI SDR turns it into booked calls.
          </p>
          <p className="text-base text-gray-600 max-w-2xl mb-10 leading-[1.55]">
            From ghostwriting and distribution to pipeline—we handle it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/apply">APPLY FOR EARLY ACCESS</Button>
            <Button href="/product" variant="secondary">
              See how it works →
            </Button>
          </div>
        </div>
      </section>

      {/* Product Tiles */}
      <SectionWrapper bg="gray">
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

      {/* Outcome Bullets */}
      <SectionWrapper bg="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-10">
            What changes when your book works for you
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {outcomeBullets.map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-electric-cyan/20 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
                </span>
                <span className="text-gray-800 font-medium text-sm leading-[1.55]">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Negative CAC Slider */}
      <NegativeCAC />

      {/* Renting vs Owning */}
      <SectionWrapper bg="gray">
        <ComparisonTable />
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-12">
            What you get
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatYouGet.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Proof */}
      <SectionWrapper bg="gray">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-500 text-center mb-6">
            Powered by
          </p>
          <div className="flex justify-center mb-12">
            <div className="w-40 h-10 bg-gray-200/80 rounded flex items-center justify-center">
              <span className="text-xs font-semibold text-gray-500">SuperPhone</span>
            </div>
          </div>
          <div className="max-w-2xl mx-auto mb-14">
            <blockquote className="text-xl md:text-2xl font-medium text-gray-800 leading-[1.55] mb-3">
              &ldquo;Having the book is not enticing. Having more clients paying me is enticing. Irrespective of how I get there.&rdquo;
            </blockquote>
            <p className="text-gray-600 font-medium">James Swanwick</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudies.map((c, i) => (
              <CaseStudyCard key={i} name={c.name} category={c.category} outcome={c.outcome} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Selective Onboarding */}
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

      {/* Final CTA */}
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
    </>
  );
}
