"use client";

import { motion } from "framer-motion";
import { LINKS } from "@/lib/demoConstants";

const words = ["One", "expert.", "One", "book.", "Negative", "acquisition", "cost.", "Full", "attribution.", "24/7."];

export function Scene10_ClosingStatement() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 text-center min-h-full">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #00E5CC, transparent 70%)" }}
      />

      <div className="relative z-10">
        <motion.p
          className="text-[#00E5CC] text-xs font-mono uppercase tracking-[0.3em] mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Scene 10 — The Close
        </motion.p>

        {/* Word-by-word reveal */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-12 max-w-3xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold"
              style={{
                color:
                  word === "Negative" || word === "24/7."
                    ? "#00E5CC"
                    : word === "Full"
                    ? "#F5F5F5"
                    : "#F5F5F5",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + i * 0.12,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Sub-headline */}
        <motion.p
          className="text-[#555] text-lg mb-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          See what this looks like for your business.
        </motion.p>

        <motion.p
          className="text-[#333] text-sm mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          One expert brand accepted per month. Application-based.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <a
            href={LINKS.applicationPage}
            className="px-10 py-4 bg-[#00E5CC] text-[#0A0A0A] font-semibold rounded-lg hover:bg-[#00D4BB] transition-colors text-sm"
          >
            Apply for Early Access →
          </a>
          <a
            href={LINKS.cacCalculator}
            className="px-8 py-4 border border-[rgba(255,255,255,0.12)] text-[#999] rounded-lg hover:border-[rgba(255,255,255,0.25)] hover:text-[#F5F5F5] transition-colors text-sm"
          >
            Run the Numbers →
          </a>
        </motion.div>

        <motion.p
          className="text-[#2A2A2A] text-[11px] mt-8 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        >
          Application takes 3 minutes. First call is a no-obligation system walkthrough.
        </motion.p>
      </div>
    </div>
  );
}
