"use client";

import { motion } from "framer-motion";
import { LINKS } from "@/lib/demo/constants";
import { COLORS } from "@/lib/demo/constants";

const words = [
  "One",
  "expert.",
  "One",
  "book.",
  "Negative",
  "acquisition",
  "cost.",
  "Full",
  "attribution.",
  "24/7.",
];

export function ClosingStatement() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 text-center min-h-full">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-10 pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${COLORS.accent}, transparent 70%)` }}
      />

      <div className="relative z-10">
        <motion.p
          className="text-xs font-mono uppercase tracking-[0.3em] mb-10"
          style={{ color: COLORS.accent }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Scene 10 — The Close
        </motion.p>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-12 max-w-3xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold"
              style={{
                color:
                  word === "Negative" || word === "24/7."
                    ? COLORS.accent
                    : COLORS.textPrimary,
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

        <motion.p
          className="text-lg mb-2"
          style={{ color: COLORS.textSecondary }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          See what this looks like for your business.
        </motion.p>

        <motion.p
          className="text-sm mb-10"
          style={{ color: COLORS.textMuted }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          One expert brand accepted per month. Application-based.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <a
            href={LINKS.apply}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 font-semibold rounded-lg text-sm transition-colors"
            style={{
              background: COLORS.accent,
              color: "white",
            }}
          >
            Apply for Early Access →
          </a>
          <a
            href={LINKS.calculator}
            className="px-8 py-4 border rounded-lg text-sm font-medium transition-colors"
            style={{
              borderColor: COLORS.border,
              color: COLORS.textSecondary,
            }}
          >
            Run the Numbers →
          </a>
        </motion.div>

        <motion.p
          className="text-[11px] mt-8 font-mono"
          style={{ color: COLORS.textMuted }}
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
