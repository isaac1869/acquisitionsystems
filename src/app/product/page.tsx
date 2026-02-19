import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import PageTransition from "@/components/PageTransition";

const description =
  "Three layers, one acquisition engine: Intellibook, AI SDR Twin, and CoreText. Deep dive into the system.";

export const metadata: Metadata = {
  title: "Product",
  description,
  openGraph: {
    title: "Product | New Wave Acquisitions",
    description,
    url: "https://acquisitionsystems.io/product",
  },
};

const whatYouGet = [
  { title: "Ghostwriting + distribution", desc: "We extract your methodology, write the book, and distribute it end-to-end." },
  { title: "AI SDR twin trained on your methodology", desc: "Your AI SDR engages readers, answers questions, and routes qualified interest into your pipeline." },
  { title: "Reader intent capture + routing", desc: "Intellibook captures reader actions and turns them into clear intent signals you can act on." },
  { title: "CoreText attribution + reporting", desc: "CoreText shows what chapters, triggers, and conversations actually produced pipeline." },
  { title: "Implementation support", desc: "We handle the technical setup so the system works without you stitching tools together." },
  { title: "Selective onboarding", desc: "We onboard one brand per month, and only when we can forecast a path to ROI." },
];

export default function ProductPage() {
  return (
    <PageTransition>
      <section className="pt-16 md:pt-24 pb-16 md:pb-20 px-6 fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            THE SYSTEM
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.08] mb-6">
            Three layers. One acquisition engine.
          </h1>
          <p className="text-lg text-gray-600 leading-[1.55]">
            Every piece is built to work together — from the moment someone
            opens your book to the moment they book a call.
          </p>
        </div>
      </section>

      {/* Sales Video Placeholder */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-500">Sales Video Coming Soon</p>
              <p className="text-xs text-gray-400 mt-1">See the full system walkthrough</p>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper bg="gray">
        <div className="max-w-4xl mx-auto" id="intellibook">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-2">
            Intellibook
          </h2>
          <p className="text-lg text-electric-cyan font-medium mb-6">
            Your book becomes infrastructure.
          </p>
          <p className="text-gray-600 leading-[1.6] mb-8">
            Intellibook embeds SMS prompts, QR codes, and trackable micro-CTAs
            into a physical or digital book. Every reader interaction is
            captured — not just who bought, but who read what, engaged where,
            and signaled intent. This is not a landing page or a funnel. It&apos;s
            an acquisition layer built into the book itself.
          </p>
          <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-8">
            <span className="text-sm text-gray-500">
              [Diagram: Book → reader interaction → data capture]
            </span>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />
              Embedded SMS + QR capture in every chapter
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />
              Reader behavior tracked at the chapter level
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />
              Works with physical books, digital, and audio
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />
              Integrates directly with your CRM
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto" id="ai-sdr">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-2">
            AI SDR Twin
          </h2>
          <p className="text-lg text-electric-cyan font-medium mb-6">
            Your best closer — available 24/7.
          </p>
          <p className="text-gray-600 leading-[1.6] mb-8">
            The AI SDR is trained on your voice, your offer, your qualifying
            criteria. It engages every captured lead via SMS or chat, asks the
            right questions, handles objections, and books qualified calls on
            your calendar. It&apos;s not a chatbot. It&apos;s an AI-powered sales
            development rep that represents you.
          </p>
          <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-8">
            <span className="text-sm text-gray-500">
              [Conversation mockup: SMS thread — AI SDR qualifying a lead]
            </span>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />
              Trained on your voice, tone, and offer specifics
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />
              Engages leads within minutes of capture
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />
              Qualifies based on your criteria (revenue, niche, timeline)
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />
              Books directly to your calendar — no manual follow-up
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray">
        <div className="max-w-4xl mx-auto" id="coretext">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-2">
            CoreText
          </h2>
          <p className="text-lg text-electric-cyan font-medium mb-6">
            Attribution from page to payment.
          </p>
          <p className="text-gray-600 leading-[1.6] mb-8">
            CoreText is the intelligence layer. It tracks which chapters
            readers engage with, which CTAs they respond to, how the AI SDR
            conversation went, and whether that lead converted to a paying
            client. Full-funnel attribution that starts inside the book and
            ends at revenue. No more guessing which marketing channel works.
          </p>
          <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-8">
            <span className="text-sm text-gray-500">
              [Dashboard: chapter → CTA → SDR conversation → booked call →
              closed deal]
            </span>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />
              Chapter-level engagement analytics
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />
              CTA performance tracking
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />
              AI SDR conversation outcomes
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />
              Revenue attribution from first touch to close
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-8">
            The loop
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm font-medium text-gray-700">
              <span>Book</span>
              <span className="text-gray-400">→</span>
              <span>Intellibook captures</span>
              <span className="text-gray-400">→</span>
              <span>AI SDR engages</span>
              <span className="text-gray-400">→</span>
              <span>CoreText attributes</span>
              <span className="text-gray-400">→</span>
              <span>You optimize</span>
              <span className="text-gray-400">→</span>
              <span>Repeat</span>
            </div>
          </div>
          <p className="text-gray-600 leading-[1.6] text-center max-w-2xl mx-auto">
            Most acquisition systems are a collection of disconnected tools.
            This is one loop — every piece feeds the next. The more books you
            distribute, the smarter the system gets.
          </p>
        </div>
      </SectionWrapper>

      {/* What You Get - moved from homepage */}
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

      <SectionWrapper bg="gray">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-6">Ready to see it in action?</p>
          <Button href="/apply">Apply for Early Access</Button>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
}
