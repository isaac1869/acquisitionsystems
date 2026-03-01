"use client";

import { motion } from "framer-motion";
import { MetricsPanel } from "./MetricsPanel";
import { ActivityFeed } from "./ActivityFeed";
import { FunnelVisualization } from "./FunnelVisualization";
import { LiveIndicator } from "../ui/LiveIndicator";
import { COLORS } from "@/lib/demo/constants";

export function CoreTextDashboard() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div
        className="flex items-center justify-between mb-4 pb-3 border-b"
        style={{ borderColor: COLORS.border }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <p className="text-sm font-semibold" style={{ color: COLORS.textPrimary }}>
            CoreText Intelligence Engine
          </p>
          <p className="text-[10px] font-mono" style={{ color: COLORS.textMuted }}>
            CLEAR by James Swanwick · Feb 2026
          </p>
        </div>
        <LiveIndicator />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <motion.div
          className="rounded-xl p-5 border"
          style={{ background: COLORS.surface, borderColor: COLORS.border }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <p
            className="text-[10px] font-mono uppercase tracking-widest mb-3"
            style={{ color: COLORS.textMuted }}
          >
            Key Metrics — MTD
          </p>
          <MetricsPanel />
        </motion.div>

        <motion.div
          className="rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <ActivityFeed />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <FunnelVisualization />
        </motion.div>
      </div>

      <motion.p
        className="text-center text-xs font-mono mt-4"
        style={{ color: COLORS.textMuted }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Scene 5 — CoreText Intelligence Engine
      </motion.p>
    </div>
  );
}
