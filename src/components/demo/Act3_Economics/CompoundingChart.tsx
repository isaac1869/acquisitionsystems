"use client";

import { motion } from "framer-motion";
import { compoundingChartData } from "@/lib/demo/demoData";
import { COLORS } from "@/lib/demo/constants";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="rounded-lg p-3 text-xs border"
      style={{ background: COLORS.elevated, borderColor: COLORS.border }}
    >
      <p className="mb-2 font-mono" style={{ color: COLORS.textMuted }}>
        {label}
      </p>
      {payload.map((p) => (
        <div key={p.name} className="flex justify-between gap-4">
          <span style={{ color: p.color }}>
            {p.name === "intellibook" ? "Intellibook" : "Traditional"}
          </span>
          <span className="font-mono" style={{ color: p.color }}>
            ${((p.value ?? 0) / 1000).toFixed(0)}K
          </span>
        </div>
      ))}
    </div>
  );
}

export function CompoundingChart() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p
          className="text-xs font-mono uppercase tracking-[0.3em] mb-3"
          style={{ color: COLORS.accent }}
        >
          Scene 9 — The Compounding Effect
        </p>
        <h2
          className="text-2xl md:text-3xl font-semibold mb-3"
          style={{ color: COLORS.textPrimary }}
        >
          Traditional models reset every month.{" "}
          <span style={{ color: COLORS.accent }}>This one compounds.</span>
        </h2>
        <p
          className="text-sm max-w-xl mx-auto"
          style={{ color: COLORS.textSecondary }}
        >
          Month 6: Your first 3,000 books are still generating leads while your ad budget funds new
          readers.
        </p>
      </motion.div>

      <motion.div
        className="rounded-xl p-6 border"
        style={{ background: COLORS.surface, borderColor: COLORS.border }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <p
            className="text-[10px] font-mono uppercase tracking-widest"
            style={{ color: COLORS.textMuted }}
          >
            Net Monthly Revenue — 12-Month Projection
          </p>
          <div className="flex items-center gap-5 text-xs">
            <span className="flex items-center gap-1.5">
              <span
                className="w-6 h-0.5 rounded inline-block"
                style={{ background: COLORS.warning }}
              />
              <span style={{ color: COLORS.textMuted }}>Traditional</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span
                className="w-6 h-0.5 rounded inline-block"
                style={{ background: COLORS.accent }}
              />
              <span style={{ color: COLORS.textMuted }}>Intellibook</span>
            </span>
          </div>
        </div>

        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={compoundingChartData} margin={{ top: 5, right: 10, bottom: 5, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} />
              <XAxis
                dataKey="month"
                tick={{ fill: COLORS.textMuted, fontSize: 11, fontFamily: "monospace" }}
                axisLine={{ stroke: COLORS.border }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: COLORS.textMuted, fontSize: 11, fontFamily: "monospace" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `$${v / 1000}K`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="traditional"
                stroke={COLORS.warning}
                strokeWidth={2}
                dot={false}
                strokeDasharray="4 4"
              />
              <Line
                type="monotone"
                dataKey="intellibook"
                stroke={COLORS.accent}
                strokeWidth={2.5}
                dot={false}
                strokeLinecap="round"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          className="grid grid-cols-3 gap-4 mt-6 pt-5 border-t"
          style={{ borderColor: COLORS.border }}
        >
          {[
            {
              label: "Month 12 — Traditional",
              value: "$190K",
              color: COLORS.warning,
              note: "↓ Declining",
            },
            {
              label: "Month 12 — Intellibook",
              value: "$495K",
              color: COLORS.accent,
              note: "↑ Compounding",
            },
            {
              label: "12-Month Difference",
              value: "+$1.9M",
              color: COLORS.money,
              note: "Same ad spend",
            },
          ].map(({ label, value, color, note }) => (
            <div key={label} className="text-center">
              <p className="text-xl font-mono font-semibold" style={{ color }}>
                {value}
              </p>
              <p className="text-[10px] font-mono mt-0.5" style={{ color: COLORS.textMuted }}>
                {label}
              </p>
              <p className="text-[10px]" style={{ color: COLORS.textMuted }}>
                {note}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.p
        className="text-center text-xs font-mono mt-6"
        style={{ color: COLORS.textSecondary }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        The book doesn&apos;t stop working when you turn off the ads.
      </motion.p>
    </div>
  );
}
