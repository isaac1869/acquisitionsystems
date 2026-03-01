import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import PageTransition from "@/components/PageTransition";

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
    <PageTransition>
      <section className="pt-16 md:pt-24 pb-16 md:pb-20 px-6 fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            WHO WE ARE
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.08] mb-6">
            Built by operators who needed this system first.
          </h1>
        </div>
      </section>

      <SectionWrapper bg="gray">
        <div className="max-w-2xl mx-auto space-y-6 text-gray-600 leading-[1.6]">
          <p>
            We didn&apos;t build New Wave Acquisitions from a whiteboard. We built it because we were living the problem.
          </p>
          <p>
            New Wave Press started as an independent publishing company — helping entrepreneurs, experts, and thought leaders publish books that elevate their brands and reach new audiences. We were good at it. We worked with credible people. The books were real.
          </p>
          <p>
            But we kept running into the same wall. The book would come out. It would generate buzz, credibility, maybe some sales. And then it would sit there — while the author went back to running Meta ads, cold outreach, and the same acquisition hamster wheel they were on before. The book was working as a brand asset. It was not working as an acquisition system.
          </p>
          <p>
            So we built the technology to close that gap. Intellibook instruments the book itself — capturing reader intent at the chapter level. The AI SDR twin engages every lead in the author&apos;s voice, qualifies them, and books calls. CoreText tracks what drove pipeline from first scan to closed deal. New Wave Acquisitions is the system we wished we had from day one. Now we build it for one expert brand per month.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-center mb-12">
            The Team
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <span className="text-xs text-gray-500">[Photo: Daniel]</span>
              </div>
              <h3 className="font-semibold text-gray-900">Daniel DiPiazza</h3>
              <p className="text-sm text-gray-500 mb-2">Co-Founder & CEO</p>
              <p className="text-sm text-gray-600 leading-[1.55]">
                Daniel DiPiazza is a bestselling author of four books, including the internationally acclaimed Rich20Something, and an entrepreneur with nearly two decades across publishing, online education, media, and e-commerce. He has spent his career helping experts and thought leaders turn their ideas into assets that reach millions. At New Wave Acquisitions, Daniel leads product vision and client strategy — bringing firsthand experience as a published author and operator to every system we build. He knows what it takes to write the book. He built New Wave Acquisitions to make sure the book actually works.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <span className="text-xs text-gray-500">[Photo: Isaac]</span>
              </div>
              <h3 className="font-semibold text-gray-900">Isaac Lipscomb</h3>
              <p className="text-sm text-gray-500 mb-2">Co-Founder & COO</p>
              <p className="text-sm text-gray-600 leading-[1.55]">
                Isaac Lipscomb has over 15 years of experience in sales and marketing, with a track record of helping clients generate more than $20 million annually in product revenue. His background spans business development, retail strategy, and client acquisition at scale — including work with some of the world&apos;s largest retailers. At New Wave Acquisitions, Isaac architects the systems and partnerships that make the acquisition loop run. His focus is on the infrastructure side: the processes, integrations, and operational levers that turn a book from a credibility play into a measurable revenue channel.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <span className="text-xs text-gray-500">[Photo: Ryan]</span>
              </div>
              <h3 className="font-semibold text-gray-900">Ryan Leslie</h3>
              <p className="text-sm text-gray-500 mb-2">Strategic Advisor & Investor</p>
              <p className="text-sm text-gray-600 leading-[1.55]">
                Ryan Leslie is a Grammy-nominated artist, entrepreneur, and founder of SuperPhone — the direct-to-fan SMS infrastructure that powers communication for some of the world&apos;s top creators and brands. His work sits at the intersection of technology, culture, and direct-to-audience distribution. As a strategic advisor and investor, Ryan shapes how New Wave Acquisitions thinks about owned infrastructure, SMS-based engagement, and the future of direct acquisition. SuperPhone is also the backbone of the AI SDR layer — making his involvement structural, not just advisory.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl font-medium text-gray-800 leading-[1.55] italic mb-4">
            &ldquo;Having the book is not enticing. Having more clients paying me is enticing — irrespective of how I get there.&rdquo;
          </blockquote>
          <p className="text-sm text-gray-600">
            — James Swanwick
          </p>
          <p className="text-sm text-gray-600 mt-6">
            That&apos;s the standard we hold ourselves to. If the system doesn&apos;t produce pipeline, it doesn&apos;t ship.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center">
          <Button href="/apply">Apply for Early Access</Button>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
}
