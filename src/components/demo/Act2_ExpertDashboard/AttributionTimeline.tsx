"use client";

import { motion } from "framer-motion";
import { attributionTimeline } from "@/lib/demo/demoData";
import { COLORS } from "@/lib/demo/constants";

const typeColors: Record<string, string> = {
  purchase: COLORS.money,
  reading: COLORS.accent,
  engagement: COLORS.accent,
  qualification: "#059669",
  booking: COLORS.accent,
  close: COLORS.money,
};

const typeIcons: Record<string, string> = {
  purchase: "💳",
  reading: "📖",
  engagement: "📱",
  qualification: "🎯",
  booking: "📅",
  close: "💰",
};

export function AttributionTimeline() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p
          className="text-xs font-mono uppercase tracking-[0.3em] mb-3"
          style={{ color: COLORS.accent }}
        >
          Scene 7 — The Attribution Chain
        </p>
        <h2
          className="text-2xl md:text-3xl font-semibold mb-3"
          style={{ color: COLORS.textPrimary }}
        >
          Full 1:1 attribution. Ad click to Project 90 enrollment.
        </h2>
        <p
          className="text-sm max-w-xl mx-auto"
          style={{ color: COLORS.textSecondary }}
        >
          Try getting this from your Facebook Ads Manager. Every step, every reader, every dollar.
        </p>
      </motion.div>

      <motion.div
        className="flex items-center justify-center gap-6 mb-10 flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {[
          { label: "Book Cost", value: "$50" },
          { label: "Days to Close", value: "11" },
          { label: "Revenue", value: "$17,500" },
          { label: "Net ROI", value: "34,900%", accent: true },
        ].map(({ label, value, accent }) => (
          <div key={label} className="text-center">
            <p
              className="text-xl font-mono font-semibold"
              style={{ color: accent ? COLORS.money : COLORS.textPrimary }}
            >
              {value}
            </p>
            <p className="text-[10px] font-mono" style={{ color: COLORS.textMuted }}>
              {label}
            </p>
          </div>
        ))}
      </motion.div>

      <div className="relative max-w-2xl mx-auto">
        <motion.div
          className="absolute left-6 top-4 bottom-4 w-px"
          style={{
            background: `linear-gradient(to bottom, ${COLORS.accent}40, ${COLORS.money}40)`,
          }}
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
        />

        <div className="space-y-4">
          {attributionTimeline.map((node, i) => (
            <motion.div
              key={i}
              className="flex gap-5 items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
            >
              <div className="flex-shrink-0 relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg"
                  style={{
                    borderColor: typeColors[node.type],
                    background: `${typeColors[node.type]}20`,
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.5 + i * 0.12,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  {typeIcons[node.type]}
                </motion.div>
              </div>

              <div
                className={`flex-1 pb-4 rounded-xl p-4 -mt-1 ${
                  node.type === "close" ? "border-2" : ""
                }`}
                style={{
                  background: node.type === "close" ? `${COLORS.money}10` : "transparent",
                  borderColor: node.type === "close" ? COLORS.money : "transparent",
                }}
              >
                <div className="flex items-baseline gap-2 mb-1">
                  <span
                    className="text-xs font-mono font-semibold"
                    style={{ color: typeColors[node.type] }}
                  >
                    Day {node.day}
                  </span>
                  <span className="text-[10px] font-mono" style={{ color: COLORS.textMuted }}>
                    {node.date}
                  </span>
                </div>
                <p className="text-sm font-medium mb-0.5" style={{ color: COLORS.textPrimary }}>
                  {node.event}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: COLORS.textSecondary }}>
                  {node.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-xs font-mono" style={{ color: COLORS.textMuted }}>
          Now let&apos;s see the math that makes it all work →{" "}
          <span style={{ color: COLORS.accent }}>Act 3</span>
        </p>
      </motion.div>
    </div>
  );
}
