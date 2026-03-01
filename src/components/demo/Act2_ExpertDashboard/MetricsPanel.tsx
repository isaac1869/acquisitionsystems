"use client";

import { motion } from "framer-motion";
import { dashboardMetrics } from "@/lib/demo/demoData";
import { AnimatedNumberDemo } from "../ui/AnimatedNumberDemo";
import { COLORS } from "@/lib/demo/constants";

const metrics = [
  { label: "CLEAR Bundles Sold", value: dashboardMetrics.booksSoldThisMonth, prefix: "", glowing: false },
  { label: "Active Readers", value: dashboardMetrics.activeReaders, prefix: "", glowing: false },
  { label: "AI Conversations", value: dashboardMetrics.aiTwinConversations, prefix: "", glowing: false },
  { label: "Calls Booked", value: dashboardMetrics.callsBooked, prefix: "", glowing: false },
  { label: "Project 90 Closed", value: dashboardMetrics.highTicketCloses, prefix: "", glowing: false },
  { label: "Book Revenue", value: dashboardMetrics.frontEndBookRevenue, prefix: "$", glowing: false },
  { label: "HT Revenue", value: dashboardMetrics.highTicketRevenue, prefix: "$", glowing: false },
  { label: "Total Revenue", value: dashboardMetrics.totalRevenue, prefix: "$", glowing: false },
  { label: "Ad Spend", value: dashboardMetrics.adSpendThisMonth, prefix: "$", glowing: false },
  { label: "Effective CAC", value: dashboardMetrics.effectiveCAC, prefix: "$", glowing: true },
];

export function MetricsPanel() {
  return (
    <div className="space-y-0">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          className="flex items-baseline justify-between py-2 border-b last:border-0"
          style={{ borderColor: "rgba(0,0,0,0.06)" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
        >
          <span className="text-[11px] font-mono truncate mr-2" style={{ color: COLORS.textMuted }}>
            {m.label}
          </span>
          <AnimatedNumberDemo
            value={m.value}
            prefix={m.prefix}
            glowing={m.glowing}
            className="text-base font-mono font-semibold"
          />
        </motion.div>
      ))}
    </div>
  );
}
