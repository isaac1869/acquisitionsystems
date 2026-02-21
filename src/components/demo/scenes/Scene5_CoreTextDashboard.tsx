"use client";

import { motion, AnimatePresence } from "framer-motion";
import { dashboardMetrics, funnelStages } from "@/lib/demoData";
import { useActivityFeed } from "@/hooks/useActivityFeed";
import { useCountUp } from "@/hooks/useCountUp";

function LiveIndicator() {
  return (
    <span className="inline-flex items-center gap-1.5">
      <motion.span
        className="w-2 h-2 rounded-full bg-[#00E5CC]"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <span className="text-[#00E5CC] text-[10px] font-mono tracking-widest">LIVE</span>
    </span>
  );
}

function Metric({
  label,
  value,
  prefix = "",
  suffix = "",
  highlight = false,
  gold = false,
}: {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  highlight?: boolean;
  gold?: boolean;
}) {
  const display = useCountUp(Math.abs(value), 2000, true);
  const isNeg = value < 0;
  const color = gold ? "#FFB800" : highlight ? "#00E5CC" : "#F5F5F5";
  const formatted = `${isNeg ? "-" : ""}${prefix}${display.toLocaleString()}${suffix}`;

  return (
    <div className="flex items-baseline justify-between py-2 border-b border-[rgba(255,255,255,0.04)] last:border-0">
      <span className="text-[#555] text-[11px] font-mono truncate mr-2">{label}</span>
      <motion.span
        className="text-base font-mono font-semibold tabular-nums flex-shrink-0"
        style={{
          color,
          ...(highlight
            ? {
                textShadow: "0 0 12px rgba(0,229,204,0.5)",
              }
            : gold
            ? {
                textShadow: "0 0 12px rgba(255,184,0,0.4)",
              }
            : {}),
        }}
        animate={
          highlight
            ? {
                textShadow: [
                  "0 0 8px rgba(0,229,204,0.3)",
                  "0 0 20px rgba(0,229,204,0.7)",
                  "0 0 8px rgba(0,229,204,0.3)",
                ],
              }
            : {}
        }
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {formatted}
      </motion.span>
    </div>
  );
}

export function Scene5_CoreTextDashboard() {
  const events = useActivityFeed(true);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Header */}
      <motion.div
        className="flex items-center justify-between mb-4 pb-3 border-b border-[rgba(255,255,255,0.06)]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <div>
            <p className="text-[#F5F5F5] text-sm font-semibold">CoreText Intelligence Engine</p>
            <p className="text-[#444] text-[10px] font-mono">New Wave Acquisitions · Feb 2026</p>
          </div>
        </div>
        <LiveIndicator />
      </motion.div>

      {/* Three-column dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left: Metrics */}
        <motion.div
          className="bg-[#0D0D0D] border border-[rgba(255,255,255,0.06)] rounded-xl p-5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <p className="text-[#444] text-[10px] font-mono uppercase tracking-widest mb-3">
            Key Metrics — MTD
          </p>
          <div className="space-y-0">
            <Metric label="Books Sold" value={dashboardMetrics.booksSoldThisMonth} />
            <Metric label="Active Readers" value={dashboardMetrics.activeReaders} />
            <Metric label="AI Conversations" value={dashboardMetrics.aiTwinConversations} />
            <Metric label="Calls Booked" value={dashboardMetrics.callsBooked} />
            <Metric label="HT Closes" value={dashboardMetrics.highTicketCloses} gold />
            <Metric label="Book Revenue" value={dashboardMetrics.frontEndBookRevenue} prefix="$" gold />
            <Metric label="HT Revenue" value={dashboardMetrics.highTicketRevenue} prefix="$" gold />
            <Metric label="Total Revenue" value={dashboardMetrics.totalRevenue} prefix="$" gold />
            <Metric label="Ad Spend" value={dashboardMetrics.adSpendThisMonth} prefix="$" />
            <Metric
              label="Effective CAC"
              value={dashboardMetrics.effectiveCAC}
              prefix="$"
              highlight
            />
          </div>
        </motion.div>

        {/* Center: Activity feed */}
        <motion.div
          className="bg-[#0D0D0D] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-[#444] text-[10px] font-mono uppercase tracking-widest">
              Live Activity
            </p>
            <LiveIndicator />
          </div>
          <div className="space-y-2 max-h-[340px] overflow-hidden">
            <AnimatePresence initial={false}>
              {events.slice(0, 8).map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: 20, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`flex items-start gap-2.5 py-2 px-3 rounded-lg ${
                    event.isHighlight
                      ? "bg-[rgba(0,229,204,0.06)] border border-[rgba(0,229,204,0.12)]"
                      : "bg-[rgba(255,255,255,0.02)]"
                  }`}
                >
                  <span className="text-base flex-shrink-0 mt-0.5">{event.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-[11px] leading-snug ${
                        event.isHighlight ? "text-[#F5F5F5]" : "text-[#888]"
                      }`}
                    >
                      {event.message}
                      {event.location && (
                        <span className="text-[#444] ml-1">· {event.location}</span>
                      )}
                    </p>
                    <p className="text-[#333] text-[9px] font-mono mt-0.5">{event.timestamp}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right: Funnel */}
        <motion.div
          className="bg-[#0D0D0D] border border-[rgba(255,255,255,0.06)] rounded-xl p-5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-[#444] text-[10px] font-mono uppercase tracking-widest mb-4">
            Conversion Funnel
          </p>
          <div className="space-y-3">
            {funnelStages.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              >
                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="text-[#666] text-[11px]">{stage.label}</span>
                  <span className="text-[#F5F5F5] text-xs font-mono">{stage.value.toLocaleString()}</span>
                </div>
                <div className="h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background:
                        i === 4
                          ? "#FFB800"
                          : `rgba(0,229,204,${0.3 + (i / funnelStages.length) * 0.7})`,
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${stage.percentage}%` }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                  />
                </div>
                <div className="text-right mt-0.5">
                  <span className="text-[#444] text-[9px] font-mono">{stage.percentage}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.p
        className="text-center text-[#333] text-xs font-mono mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Scene 5 — CoreText Intelligence Engine
      </motion.p>
    </div>
  );
}
