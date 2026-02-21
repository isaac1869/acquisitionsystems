"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#00E5CC] text-xs font-mono uppercase tracking-[0.3em] mb-3">{children}</p>
  );
}

function Divider() {
  return (
    <div className="flex justify-center py-1">
      <div className="w-px h-12 bg-gradient-to-b from-transparent via-[rgba(0,229,204,0.15)] to-transparent" />
    </div>
  );
}

export default function ProductPageContent() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <motion.div
          className="relative z-10 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.p
            className="text-[#00E5CC] text-xs font-mono uppercase tracking-[0.3em] mb-6"
            variants={fade}
          >
            Your book is not a book
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#F5F5F5] leading-[1.1] mb-6"
            variants={fade}
          >
            It&apos;s a client acquisition engine with{" "}
            <span className="text-[#00E5CC]">negative CAC</span>.
          </motion.h1>
          <motion.p
            className="text-[#666] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            variants={fade}
          >
            Intellibook turns a single book into a system that acquires high-ticket clients at a
            lower cost than Meta or Google — and keeps working after you stop spending.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" variants={fade}>
            <Link
              href="/demo"
              className="px-8 py-3.5 bg-[#00E5CC] text-[#0A0A0A] font-semibold rounded-lg text-sm hover:bg-[#00D4BB] transition-colors"
            >
              See It In Action →
            </Link>
            <Link
              href="/apply"
              className="px-8 py-3.5 border border-[rgba(255,255,255,0.12)] text-[#F5F5F5] font-medium rounded-lg text-sm hover:border-[rgba(255,255,255,0.25)] transition-colors"
            >
              Apply for Early Access
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Divider />

      {/* Demo CTA block */}
      <section className="py-16 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-[#111] border border-[rgba(0,229,204,0.15)] rounded-2xl p-10 relative overflow-hidden">
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, #00E5CC, transparent 70%)" }}
            />
            <div className="relative z-10">
              <SectionLabel>Interactive Demo</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#F5F5F5] mb-4">
                Don&apos;t just read about it. Experience it.
              </h2>
              <p className="text-[#666] text-sm leading-relaxed mb-8 max-w-xl mx-auto">
                Walk through the full Intellibook system — from what your reader sees inside an
                instrumented book, to the CoreText intelligence dashboard, to the economics that
                make client acquisition cost negative.
              </p>
              <Link
                href="/demo"
                className="inline-block px-10 py-4 bg-[#00E5CC] text-[#0A0A0A] font-semibold rounded-lg hover:bg-[#00D4BB] transition-colors text-sm"
              >
                Launch the Interactive Demo →
              </Link>
              <p className="text-[#333] text-xs mt-4 font-mono">
                3 acts · 10 scenes · Click-through or keyboard navigation
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Divider />

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>The System</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#F5F5F5]">
              Three layers. One loop.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: "Capture",
                icon: "📖",
                title: "Your book becomes infrastructure.",
                body: "Every chapter is instrumented with SMS triggers, QR codes, and trackable CTAs. Passive readers become active leads — captured at the moment of intent.",
              },
              {
                label: "Qualify",
                icon: "💬",
                title: "Your best closer, available 24/7.",
                body: "An AI trained on your methodology engages every reader via SMS and chat. It answers questions in your voice, handles objections, and books qualified calls.",
              },
              {
                label: "Attribute",
                icon: "📊",
                title: "From page to payment, tracked.",
                body: "See which chapters drive action, which readers become clients, and what every dollar of book spend actually produced. Full attribution from first scan to closed deal.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="bg-[#111] border border-[rgba(255,255,255,0.06)] rounded-xl p-6 hover:border-[rgba(0,229,204,0.15)] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-[#00E5CC] text-[10px] font-mono uppercase tracking-widest mt-4 mb-2">
                  {item.label}
                </p>
                <h3 className="text-[#F5F5F5] font-semibold text-base mb-3">{item.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* What's included */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Deliverables</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#F5F5F5]">What&apos;s included</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Book Extraction + Production",
                body: "Six 90-minute sessions. Nine hours. No writing. We extract your methodology and build the book.",
              },
              {
                title: "Intellibook Technology",
                body: "QR triggers, SMS capture, and trackable CTAs embedded in every format — physical, digital, audio.",
              },
              {
                title: "AI SDR Twin",
                body: "Trained on your voice and offer. Engages readers, qualifies intent, books calls. Always on.",
              },
              {
                title: "CoreText Analytics",
                body: "Chapter-level engagement, CTA performance, conversation outcomes, revenue attribution.",
              },
              {
                title: "Fulfillment + Distribution",
                body: "Print, digital, audio, Amazon — handled end to end. No vendor coordination on your side.",
              },
              {
                title: "Selective Onboarding",
                body: "One expert brand per month. Application-based. We only take clients where we can forecast ROI.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="p-5 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#111] hover:border-[rgba(255,255,255,0.1)] transition-colors"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <h3 className="text-[#F5F5F5] font-medium text-sm mb-2">{item.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Calculator CTA */}
      <section className="py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Your Numbers</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#F5F5F5] mb-4">
            Want to see the math with your numbers?
          </h2>
          <p className="text-[#555] mt-2 mb-8 max-w-md mx-auto text-sm">
            Input your ad spend, close rate, and program price. See exactly what your client
            acquisition cost becomes.
          </p>
          <Link
            href="/calculator"
            className="inline-block px-8 py-3 border border-[#FFB800] text-[#FFB800] font-medium rounded-lg text-sm hover:bg-[rgba(255,184,0,0.08)] transition-colors"
          >
            Run Your Numbers →
          </Link>
        </motion.div>
      </section>

      <Divider />

      {/* Qualification */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Fit Check</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#F5F5F5]">
              This is built for a specific operator
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div
              className="bg-[#111] border border-[rgba(0,229,204,0.15)] rounded-xl p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#00E5CC] text-[10px] font-mono uppercase tracking-widest mb-5">
                This is for you if...
              </p>
              <div className="space-y-3">
                {[
                  "You run a 7-8 figure business in health, wealth, or mindset",
                  "You have a proven high-ticket offer ($5K-$25K+) that closes",
                  "You're spending $10K-$100K+/month on Meta or Google",
                  "You have a sales team or process that converts qualified leads",
                  "You think in CAC, LTV, and pipeline velocity — not vanity metrics",
                  "You want an asset that compounds, not an expense that resets monthly",
                ].map((item) => (
                  <p key={item} className="text-[#888] text-sm flex items-start gap-2.5">
                    <span className="text-[#00E5CC] flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="bg-[#111] border border-[rgba(255,255,255,0.06)] rounded-xl p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <p className="text-[#555] text-[10px] font-mono uppercase tracking-widest mb-5">
                This is not for you if...
              </p>
              <div className="space-y-3">
                {[
                  "You don't have a proven backend offer yet",
                  "You're not currently running paid traffic",
                  "You want a book for credibility or legacy — not client acquisition",
                  "You're evaluating this as a publishing investment",
                  "You're looking for the cheapest option",
                ].map((item) => (
                  <p key={item} className="text-[#555] text-sm flex items-start gap-2.5">
                    <span className="text-[#333] flex-shrink-0 mt-0.5">✕</span>
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center bg-[#111] border border-[rgba(0,229,204,0.15)] rounded-2xl p-10 md:p-14 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #00E5CC, transparent 70%)" }}
          />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#F5F5F5] leading-tight">
              One expert brand per month.
              <br />
              Application-based. Capacity-limited.
            </h2>
            <p className="text-[#666] mt-6 leading-relaxed text-sm md:text-base">
              We review every application against three criteria: a compelling methodology, a proven
              high-ticket offer running paid traffic, and the revenue to invest strategically. If you
              qualify, we&apos;ll show you the model with your numbers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="/apply"
                className="px-10 py-4 bg-[#00E5CC] text-[#0A0A0A] font-semibold rounded-lg hover:bg-[#00D4BB] transition-colors text-sm"
              >
                Apply for Early Access
              </Link>
              <Link
                href="/demo"
                className="px-8 py-4 border border-[rgba(255,255,255,0.12)] text-[#999] rounded-lg hover:border-[rgba(255,255,255,0.25)] hover:text-[#F5F5F5] transition-colors text-sm"
              >
                See the Demo First →
              </Link>
            </div>
            <p className="text-[#333] text-xs mt-5">
              Application takes 3 minutes. First call is a no-obligation system walkthrough.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
