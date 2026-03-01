"use client";

import { motion } from "framer-motion";
import { BookMockup } from "./BookMockup";
import { COLORS } from "@/lib/demo/constants";

export function Scene1_BookArrives() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full max-w-6xl mx-auto px-6">
      <BookMockup />

      <div className="max-w-md">
        <motion.p
          className="text-xs font-mono uppercase tracking-[0.3em] mb-4"
          style={{ color: COLORS.accent }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Scene 1 — The Book Arrives
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-semibold leading-tight mb-5"
          style={{ color: COLORS.textPrimary }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          Your book arrives.
          <br />
          <span style={{ color: COLORS.textSecondary }}>But this isn&apos;t an ordinary book.</span>
        </motion.h2>
        <motion.p
          className="text-base leading-relaxed"
          style={{ color: COLORS.textSecondary }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Every chapter is instrumented with intelligent triggers — QR codes, SMS prompts, and AI
          conversations that turn readers into clients.
        </motion.p>
        <motion.div
          className="mt-8 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: i === 0 ? COLORS.accent : COLORS.border,
                }}
              />
            ))}
          </div>
          <p className="text-xs font-mono" style={{ color: COLORS.textMuted }}>
            Click Next to see what&apos;s inside →
          </p>
        </motion.div>
      </div>
    </div>
  );
}
