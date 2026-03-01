"use client";

import { motion } from "framer-motion";
import { funnelStages } from "@/lib/demo/demoData";
import { COLORS } from "@/lib/demo/constants";

export function FunnelVisualization() {
  return (
    <div
      className="rounded-xl p-5 border"
      style={{ background: COLORS.surface, borderColor: COLORS.border }}
    >
      <p
        className="text-[10px] font-mono uppercase tracking-widest mb-4"
        style={{ color: COLORS.textMuted }}
      >
        Conversion Funnel
      </p>
      <div className="space-y-3">
        {funnelStages.map((stage, i) => (
          <motion.div
            key={stage.label}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
          >
            <div className="flex justify-between items-baseline mb-1.5">
              <span className="text-[11px]" style={{ color: COLORS.textSecondary }}>
                {stage.label}
              </span>
              <span className="text-xs font-mono" style={{ color: COLORS.textPrimary }}>
                {stage.value.toLocaleString()}
              </span>
            </div>
            <div
              className="h-1.5 rounded-full overflow-hidden"
              style={{ background: COLORS.elevated }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: i === 4 ? COLORS.money : COLORS.accent,
                  opacity: 0.3 + (i / funnelStages.length) * 0.7,
                }}
                initial={{ width: 0 }}
                animate={{ width: `${stage.percentage}%` }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <div className="text-right mt-0.5">
              <span className="text-[9px] font-mono" style={{ color: COLORS.textMuted }}>
                {stage.percentage}%
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
