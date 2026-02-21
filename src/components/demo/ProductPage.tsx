"use client";

import { motion } from "framer-motion";
import { FadeReveal } from "./ui/FadeReveal";
import { ReaderExperience } from "./Act1/ReaderExperience";
import { CoreTextDashboard } from "./Act2/CoreTextDashboard";
import { Economics } from "./Act3/Economics";
import { LINKS } from "@/lib/demoConstants";

function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10"
      >
        <p className="text-[#00E5CC] text-xs md:text-sm font-mono uppercase tracking-[0.3em] mb-6">
          Your book is not a book
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#F5F5F5] leading-[1.1] max-w-4xl">
          It&apos;s a client acquisition engine with{" "}
          <span className="text-[#00E5CC]">negative CAC</span>.
        </h1>
        <p className="text-[#999] text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
          Intellibook turns a single book into a system that acquires high-ticket
          clients at a lower cost than Meta or Google — and keeps working after
          you stop spending.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <motion.a
            href="#demo"
            className="px-8 py-3 bg-[#00E5CC] text-[#0A0A0A] font-semibold rounded-lg text-sm hover:bg-[#00D4BB] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            See It In Action ↓
          </motion.a>
          <a
            href={LINKS.apply}
            className="px-8 py-3 border border-[rgba(255,255,255,0.12)] text-[#F5F5F5] font-medium rounded-lg text-sm hover:border-[rgba(255,255,255,0.25)] transition-colors"
          >
            Apply for Early Access →
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function SectionDivider() {
  return (
    <div className="flex justify-center py-2">
      <div className="w-px h-12 bg-gradient-to-b from-transparent via-[rgba(0,229,204,0.2)] to-transparent" />
    </div>
  );
}

function HowItWorks() {
  const layers = [
    {
      label: "Capture",
      title: "Your book becomes infrastructure.",
      description:
        "Every chapter is instrumented with SMS triggers, QR codes, and trackable CTAs. Passive readers become active leads — captured at the moment of intent, not after a cold opt-in.",
      icon: "📖",
    },
    {
      label: "Qualify",
      title: "Your best closer, available 24/7.",
      description:
        "An AI trained on your methodology engages every reader via SMS and chat. It answers questions in your voice, handles objections, and books qualified calls — without you touching anything.",
      icon: "💬",
    },
    {
      label: "Attribute",
      title: "From page to payment, tracked.",
      description:
        "See which chapters drive action, which readers become clients, and what every dollar of book spend actually produced. Full attribution from first scan to closed deal.",
      icon: "📊",
    },
  ];

  return (
    <section className="py-20 px-6">
      <FadeReveal className="text-center mb-16">
        <p className="text-[#00E5CC] text-xs font-mono uppercase tracking-[0.3em] mb-3">
          The System
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#F5F5F5]">
          Three layers. One loop.
        </h2>
      </FadeReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {layers.map((layer, i) => (
          <FadeReveal key={layer.label} delay={i * 0.15}>
            <div className="bg-[#111] border border-[rgba(255,255,255,0.06)] rounded-xl p-6 h-full hover:border-[rgba(0,229,204,0.15)] transition-colors">
              <span
                className="text-2xl"
                style={{
                  fontFamily:
                    '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
                }}
              >
                {layer.icon}
              </span>
              <p className="text-[#00E5CC] text-xs font-mono uppercase tracking-widest mt-4 mb-2">
                {layer.label}
              </p>
              <h3 className="text-[#F5F5F5] font-semibold text-lg mb-3">
                {layer.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed">
                {layer.description}
              </p>
            </div>
          </FadeReveal>
        ))}
      </div>
      <FadeReveal delay={0.5} className="text-center mt-12">
        <div className="inline-flex items-center gap-3 text-sm flex-wrap justify-center">
          {["Capture", "Qualify", "Attribute", "Optimize", "Compound"].map(
            (step, i) => (
              <span key={step} className="flex items-center gap-3">
                <span className="text-[#00E5CC] font-mono">{step}</span>
                {i < 4 && <span className="text-[#333]">→</span>}
              </span>
            )
          )}
        </div>
        <p className="text-[#666] text-sm mt-4">
          The more books you distribute, the smarter the system gets.
        </p>
      </FadeReveal>
    </section>
  );
}

function WhatsIncluded() {
  const items = [
    {
      title: "Book Extraction + Production",
      description:
        "Six 90-minute sessions. Nine hours. No writing. We extract your methodology and build the book.",
    },
    {
      title: "Intellibook Technology",
      description:
        "QR triggers, SMS capture, and trackable CTAs embedded in every format — physical, digital, audio.",
    },
    {
      title: "AI SDR Twin",
      description:
        "Trained on your voice and offer. Engages readers, qualifies intent, books calls. Always on.",
    },
    {
      title: "CoreText Analytics",
      description:
        "Chapter-level engagement, CTA performance, conversation outcomes, revenue attribution.",
    },
    {
      title: "Fulfillment + Distribution",
      description:
        "Print, digital, audio, Amazon — handled end to end. No vendor coordination on your side.",
    },
    {
      title: "Selective Onboarding",
      description:
        "One expert brand per month. Application-based. We only take clients where we can forecast ROI.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <FadeReveal className="text-center mb-16">
        <p className="text-[#00E5CC] text-xs font-mono uppercase tracking-[0.3em] mb-3">
          Deliverables
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#F5F5F5]">
          What&apos;s included
        </h2>
      </FadeReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <FadeReveal key={item.title} delay={i * 0.08}>
            <div className="p-5 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#111] hover:border-[rgba(255,255,255,0.1)] transition-colors">
              <h3 className="text-[#F5F5F5] font-medium text-sm mb-2">
                {item.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </FadeReveal>
        ))}
      </div>
    </section>
  );
}

function Qualification() {
  const forYou = [
    "You run a 7-8 figure business in health, wealth, or mindset",
    "You have a proven high-ticket offer ($5K-$25K+) that closes",
    "You're spending $10K-$100K+/month on Meta or Google",
    "You have a sales team or process that converts qualified leads",
    "You think in CAC, LTV, and pipeline velocity — not vanity metrics",
    "You want an asset that compounds, not an expense that resets monthly",
  ];
  const notForYou = [
    "You don't have a proven backend offer yet",
    "You're not currently running paid traffic",
    "You want a book for credibility or legacy — not client acquisition",
    'You\'re evaluating this as a "publishing" investment',
    "You're looking for the cheapest option",
  ];

  return (
    <section className="py-20 px-6">
      <FadeReveal className="text-center mb-16">
        <p className="text-[#00E5CC] text-xs font-mono uppercase tracking-[0.3em] mb-3">
          Fit Check
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#F5F5F5]">
          This is built for a specific operator
        </h2>
      </FadeReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <FadeReveal>
          <div className="bg-[#111] border border-[rgba(0,229,204,0.15)] rounded-xl p-6">
            <p className="text-[#00E5CC] text-xs font-mono uppercase tracking-widest mb-5">
              This is for you if...
            </p>
            <div className="space-y-3">
              {forYou.map((item) => (
                <p
                  key={item}
                  className="text-[#999] text-sm flex items-start gap-2.5"
                >
                  <span className="text-[#00E5CC] flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </FadeReveal>
        <FadeReveal delay={0.15}>
          <div className="bg-[#111] border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
            <p className="text-[#666] text-xs font-mono uppercase tracking-widest mb-5">
              This is not for you if...
            </p>
            <div className="space-y-3">
              {notForYou.map((item) => (
                <p
                  key={item}
                  className="text-[#666] text-sm flex items-start gap-2.5"
                >
                  <span className="text-[#444] flex-shrink-0 mt-0.5">✕</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </FadeReveal>
      </div>
      <FadeReveal delay={0.3} className="text-center mt-8 max-w-xl mx-auto">
        <p className="text-[#666] text-sm">
          If you meet the criteria on the left, the ROI math is straightforward.
          If you&apos;re on the right, we&apos;ll tell you that on the first
          call — we don&apos;t take clients we can&apos;t deliver for.
        </p>
      </FadeReveal>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 px-6">
      <FadeReveal>
        <div className="max-w-2xl mx-auto text-center bg-[#111] border border-[rgba(0,229,204,0.15)] rounded-2xl p-10 md:p-14 relative overflow-hidden">
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] opacity-10"
            style={{
              background:
                "radial-gradient(ellipse, #00E5CC, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#F5F5F5] leading-tight">
              One expert brand per month.
              <br />
              Application-based. Capacity-limited.
            </h2>
            <p className="text-[#999] mt-6 leading-relaxed text-sm md:text-base">
              We review every application against three criteria: a compelling
              methodology, a proven high-ticket offer running paid traffic, and
              the revenue to invest strategically. If you qualify, we&apos;ll
              show you the model with your numbers.
            </p>
            <motion.a
              href={LINKS.apply}
              className="inline-block mt-8 px-10 py-4 bg-[#00E5CC] text-[#0A0A0A] font-semibold rounded-lg hover:bg-[#00D4BB] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply for Early Access
            </motion.a>
            <p className="text-[#444] text-xs mt-4">
              Application takes 3 minutes. If accepted, your first call is a
              no-obligation system walkthrough.
            </p>
          </div>
        </div>
      </FadeReveal>
    </section>
  );
}

export function ProductPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Hero />

      {/* === INTERACTIVE DEMO === */}
      <div id="demo">
        <SectionDivider />
        <FadeReveal className="text-center py-4 px-6">
          <p className="text-[#666] text-xs font-mono uppercase tracking-[0.3em]">
            Experience the system
          </p>
        </FadeReveal>

        <ReaderExperience />
        <SectionDivider />
        <CoreTextDashboard />
        <SectionDivider />
        <Economics />
      </div>

      {/* Transition out of demo */}
      <FadeReveal className="text-center py-10 px-6">
        <p className="text-[#999] text-lg">
          That&apos;s one book. One expert. One system.
          <br />
          <span className="text-[#F5F5F5]">
            Now imagine what it does for yours.
          </span>
        </p>
      </FadeReveal>

      <SectionDivider />

      {/* === SUPPORTING SECTIONS === */}
      <HowItWorks />
      <SectionDivider />
      <WhatsIncluded />
      <SectionDivider />

      {/* Calculator CTA */}
      <section className="py-16 px-6 text-center">
        <FadeReveal>
          <p className="text-[#FFB800] text-xs font-mono uppercase tracking-[0.3em] mb-3">
            Your Numbers
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#F5F5F5]">
            Want to see the math with your numbers?
          </h2>
          <p className="text-[#666] mt-4 mb-8 max-w-md mx-auto">
            Input your ad spend, close rate, and program price. See exactly what
            your client acquisition cost becomes.
          </p>
          <motion.a
            href={LINKS.calculator}
            className="inline-block px-8 py-3 border border-[#FFB800] text-[#FFB800] font-medium rounded-lg text-sm hover:bg-[rgba(255,184,0,0.08)] transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            Run Your Numbers →
          </motion.a>
        </FadeReveal>
      </section>

      <SectionDivider />
      <Qualification />
      <FinalCTA />
    </main>
  );
}
