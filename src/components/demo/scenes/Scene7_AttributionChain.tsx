"use client";

import { motion } from "framer-motion";
import { attributionTimeline } from "@/lib/demoData";

const typeColors: Record<string, string> = {
  purchase: "#FFB800",
  reading: "#00E5CC",
  engagement: "#00E5CC",
  qualification: "#00CC88",
  booking: "#00E5CC",
  close: "#FFB800",
};

const typeIcons: Record<string, string> = {
  purchase: "💳",
  reading: "📖",
  engagement: "📱",
  qualification: "🎯",
  booking: "📅",
  close: "💰",
};

export function Scene7_AttributionChain() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#00E5CC] text-xs font-mono uppercase tracking-[0.3em] mb-3">
          Scene 7 — The Attribution Chain
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#F5F5F5] mb-3">
          Full 1:1 attribution. Ad click to closed deal.
        </h2>
        <p className="text-[#555] text-sm max-w-xl mx-auto">
          Try getting this from your Facebook Ads Manager. Every step, every reader, every dollar — tracked.
        </p>
      </motion.div>

      {/* Summary bar */}
      <motion.div
        className="flex items-center justify-center gap-6 mb-10 flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {[
          { label: "Book Cost", value: "$100" },
          { label: "Days to Close", value: "11" },
          { label: "Revenue", value: "$15,000" },
          { label: "Net ROI", value: "14,900%", accent: true },
        ].map(({ label, value, accent }) => (
          <div key={label} className="text-center">
            <p
              className="text-xl font-mono font-semibold"
              style={{ color: accent ? "#FFB800" : "#F5F5F5" }}
            >
              {value}
            </p>
            <p className="text-[#444] text-[10px] font-mono">{label}</p>
          </div>
        ))}
      </motion.div>

      {/* Timeline — vertical for readability */}
      <div className="relative max-w-2xl mx-auto">
        {/* Vertical line */}
        <motion.div
          className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-[rgba(0,229,204,0.3)] via-[rgba(0,229,204,0.15)] to-[rgba(255,184,0,0.3)]"
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
              {/* Node */}
              <div className="flex-shrink-0 relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg"
                  style={{
                    borderColor: typeColors[node.type],
                    background: `${typeColors[node.type]}14`,
                    boxShadow:
                      node.type === "close"
                        ? `0 0 20px ${typeColors[node.type]}40`
                        : "none",
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

              {/* Content */}
              <div
                className={`flex-1 pb-4 ${
                  node.type === "close"
                    ? "bg-[rgba(255,184,0,0.05)] border border-[rgba(255,184,0,0.15)] rounded-xl p-4 -mt-1"
                    : ""
                }`}
              >
                <div className="flex items-baseline gap-2 mb-1">
                  <span
                    className="text-xs font-mono font-semibold"
                    style={{ color: typeColors[node.type] }}
                  >
                    Day {node.day}
                  </span>
                  <span className="text-[#333] text-[10px] font-mono">{node.date}</span>
                </div>
                <p className="text-[#F5F5F5] text-sm font-medium mb-0.5">{node.event}</p>
                <p className="text-[#555] text-xs leading-relaxed">{node.detail}</p>
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
        <p className="text-[#333] text-xs font-mono">
          Now let&apos;s see the math that makes it all work →{" "}
          <span className="text-[#00E5CC]">Act 3</span>
        </p>
      </motion.div>
    </div>
  );
}
