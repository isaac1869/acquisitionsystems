"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

function CheckIcon() {
  return (
    <svg className="w-3 h-3 text-electric-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-3 h-3 text-gray-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function ProductPageContent() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-20 px-6 text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-electric-cyan mb-5">
            Your book is not a book
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
            It&apos;s a client acquisition engine with{" "}
            <span className="text-electric-cyan">negative CAC</span>.
          </h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Intellibook turns a single book into a system that acquires high-ticket clients at a
            lower cost than Meta or Google — and keeps working after you stop spending.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/demo">SEE IT IN ACTION →</Button>
            <Button href="/apply" variant="secondary">Apply for Early Access</Button>
          </div>
        </motion.div>
      </section>

      {/* Demo CTA */}
      <SectionWrapper bg="gray">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="border border-gray-200 rounded-2xl p-10 md:p-14 text-center bg-white shadow-sm">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-electric-cyan mb-4">
              Interactive Demo
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Don&apos;t just read about it. Experience it.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
              Walk through the full Intellibook system — from what your reader sees inside an
              instrumented book, to the CoreText intelligence dashboard, to the economics that make
              client acquisition cost negative.
            </p>
            <Button href="/demo">LAUNCH THE INTERACTIVE DEMO →</Button>
            <p className="text-gray-400 text-xs mt-4 font-mono">
              3 acts · 10 scenes · Click-through or keyboard navigation
            </p>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* How it works */}
      <SectionWrapper>
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-electric-cyan mb-3">
              The System
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
              Three layers. One loop.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="p-6 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-gray-200 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-[10px] font-mono uppercase tracking-widest text-electric-cyan mt-4 mb-2">
                  {item.label}
                </p>
                <h3 className="text-gray-900 font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="flex items-center justify-center gap-3 mt-10 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {["Capture", "Qualify", "Attribute", "Optimize", "Compound"].map((step, i) => (
              <span key={step} className="flex items-center gap-3 text-sm">
                <span className="text-electric-cyan font-mono">{step}</span>
                {i < 4 && <span className="text-gray-200">→</span>}
              </span>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* What's included */}
      <SectionWrapper bg="gray">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-electric-cyan mb-3">
              Deliverables
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
              What&apos;s included
            </h2>
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
                className="p-5 rounded-xl border border-gray-100 bg-white hover:border-gray-200 transition-colors"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <h3 className="text-gray-900 font-medium text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Calculator CTA */}
      <SectionWrapper>
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-electric-cyan mb-3">
            Your Numbers
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
            Want to see the math with your numbers?
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Input your ad spend, close rate, and program price. See exactly what your client
            acquisition cost becomes.
          </p>
          <Button href="/calculator" variant="secondary">Run Your Numbers →</Button>
        </motion.div>
      </SectionWrapper>

      {/* Qualification */}
      <SectionWrapper bg="gray">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-electric-cyan mb-3">
              Fit Check
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
              This is built for a specific operator
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] font-mono uppercase tracking-widest text-electric-cyan mb-5">
                This is for you if...
              </p>
              <div className="space-y-3">
                {[
                  "You run a 7-8 figure business in health, wealth, or mindset",
                  "You have a proven high-ticket offer ($5K–$25K+) that closes",
                  "You're spending $10K–$100K+/month on Meta or Google",
                  "You have a sales team or process that converts qualified leads",
                  "You think in CAC, LTV, and pipeline velocity — not vanity metrics",
                  "You want an asset that compounds, not an expense that resets monthly",
                ].map((item) => (
                  <li key={item} className="text-gray-700 text-sm flex items-start gap-2.5 list-none">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-electric-cyan/20 flex items-center justify-center mt-0.5">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-5">
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
                  <li key={item} className="text-gray-400 text-sm flex items-start gap-2.5 list-none">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                      <CrossIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.p
            className="text-gray-400 text-sm text-center mt-8 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            If you meet the criteria on the left, the ROI math is straightforward. If you&apos;re on the
            right, we&apos;ll tell you that on the first call — we don&apos;t take clients we can&apos;t
            deliver for.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper id="apply" bg="gray">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3">
            One expert brand per month.
            <br />
            Application-based. Capacity-limited.
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            We review every application against three criteria: a compelling methodology, a proven
            high-ticket offer running paid traffic, and the revenue to invest strategically.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/apply">APPLY FOR EARLY ACCESS</Button>
            <Button href="/demo" variant="secondary">See the Demo First →</Button>
          </div>
          <p className="text-gray-400 text-xs mt-5">
            Application takes 3 minutes. First call is a no-obligation system walkthrough.
          </p>
        </div>
      </SectionWrapper>

    </div>
  );
}
