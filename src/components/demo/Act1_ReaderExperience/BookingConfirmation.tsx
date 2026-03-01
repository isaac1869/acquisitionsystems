"use client";

import { motion } from "framer-motion";
import { COLORS } from "@/lib/demo/constants";

const particles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  x: (Math.random() - 0.5) * 200,
  y: (Math.random() - 0.5) * 200,
  delay: Math.random() * 0.8,
  size: Math.random() * 4 + 2,
}));

export function BookingConfirmation() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-6 text-center">
      <div className="relative mb-10">
        <div className="relative">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                left: "50%",
                top: "50%",
                background: p.id % 3 === 0 ? COLORS.accent : p.id % 3 === 1 ? COLORS.money : COLORS.textMuted,
              }}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0],
                x: p.x,
                y: p.y,
              }}
              transition={{
                duration: 1.8,
                delay: p.delay,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          ))}

          <motion.div
            className="w-20 h-20 rounded-full border-2 flex items-center justify-center mx-auto"
            style={{ borderColor: COLORS.accent, boxShadow: `0 0 30px ${COLORS.accentDim}` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
          >
            <motion.svg
              viewBox="0 0 24 24"
              className="w-10 h-10"
              style={{ color: COLORS.accent }}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.path d="M5 13l4 4L19 7" />
            </motion.svg>
          </motion.div>
        </div>
      </div>

      <motion.p
        className="text-xs font-mono uppercase tracking-[0.3em] mb-3"
        style={{ color: COLORS.accent }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Scene 4 — The Conversion Moment
      </motion.p>

      <motion.h2
        className="text-3xl md:text-4xl font-semibold leading-tight mb-5"
        style={{ color: COLORS.textPrimary }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.5 }}
      >
        Discovery call booked. Without you touching anything.
      </motion.h2>

      <motion.p
        className="text-base leading-relaxed mb-10 max-w-lg"
        style={{ color: COLORS.textSecondary }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        From CLEAR reader to booked discovery call — tracked at every step. The reader qualified
        themselves, the AI Twin handled the conversation, and your calendar filled.
      </motion.p>

      <motion.div
        className="w-full max-w-sm rounded-2xl p-6 mb-8 border"
        style={{ background: COLORS.surface, borderColor: COLORS.border }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm border"
            style={{ background: COLORS.elevated, borderColor: COLORS.accentDim }}
          >
            📅
          </div>
          <div className="text-left">
            <p className="text-sm font-medium" style={{ color: COLORS.textPrimary }}>
              Project 90 Discovery Booked
            </p>
            <p className="text-xs" style={{ color: COLORS.textMuted }}>
              Feb 24, 2026 · 2:00 PM EST
            </p>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { label: "Reader", value: "Michael R. — Scottsdale, AZ" },
            { label: "Source", value: "Chapter 7 QR → AI Twin → Self-booked" },
            { label: "Score", value: "8.7/10 HOT", highlight: true },
            { label: "Time to book", value: "11 days from purchase" },
          ].map(({ label, value, highlight }) => (
            <div key={label} className="flex justify-between text-xs">
              <span className="font-mono" style={{ color: COLORS.textMuted }}>
                {label}
              </span>
              <span className={highlight ? "font-mono font-medium" : ""} style={{ color: highlight ? COLORS.accent : COLORS.textSecondary }}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="flex items-center gap-2 text-xs font-mono"
        style={{ color: COLORS.textMuted }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <span>Now let&apos;s see what YOU see →</span>
        <span style={{ color: COLORS.accent }}>Act 2</span>
      </motion.div>
    </div>
  );
}
