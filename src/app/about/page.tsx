import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const description =
  "Built by operators, not agencies. The story behind New Wave Acquisitions and the team.";

export const metadata: Metadata = {
  title: "About",
  description,
  openGraph: {
    title: "About | New Wave Acquisitions",
    description,
    url: "https://acquisitionsystems.io/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-16 md:pb-20 px-6 fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            WHO WE ARE
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.08] mb-6">
            Built by operators, not agencies.
          </h1>
          <p className="text-lg text-gray-600 leading-[1.55]">
            We didn&apos;t build this from a conference room. We built it because we
            needed it.
          </p>
        </div>
      </section>

      <SectionWrapper bg="gray">
        <div className="max-w-2xl mx-auto space-y-6 text-gray-600 leading-[1.6]">
          <p>
            New Wave Press started as a publishing company. We wrote and
            distributed books for high-ticket service providers.
          </p>
          <p>
            We noticed something: the book was the most powerful trust-building
            asset our clients had — but nobody was treating it as acquisition
            infrastructure.
          </p>
          <p>
            So we built the technology to make the book work harder. Intellibook
            captures intent. The AI SDR engages leads. CoreText tracks what
            converts. New Wave Acquisitions is the system we wish we had from day
            one.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-center mb-12">
            Team
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <span className="text-xs text-gray-500">[Photo: Isaac]</span>
              </div>
              <h3 className="font-semibold text-gray-900">Isaac</h3>
              <p className="text-sm text-gray-500 mb-2">Co-founder</p>
              <p className="text-sm text-gray-600 leading-[1.55]">
                Bio placeholder. Operator background. Focus on product and
                client outcomes.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <span className="text-xs text-gray-500">[Photo: Daniel]</span>
              </div>
              <h3 className="font-semibold text-gray-900">Daniel</h3>
              <p className="text-sm text-gray-500 mb-2">Co-founder</p>
              <p className="text-sm text-gray-600 leading-[1.55]">
                Bio placeholder. Operator background. Focus on distribution and
                growth.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl font-medium text-gray-800 leading-[1.55] italic mb-4">
            &ldquo;Having the book is not enticing. Having more clients paying me
            is enticing — irrespective of how I get there.&rdquo;
          </blockquote>
          <p className="text-sm text-gray-600">
            That&apos;s the standard we hold ourselves to. If the system doesn&apos;t
            drive revenue, it doesn&apos;t ship.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-6">Want to work with us?</p>
          <Button href="/apply">Apply for Early Access</Button>
        </div>
      </SectionWrapper>
    </>
  );
}
