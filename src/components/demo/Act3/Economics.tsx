"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeReveal } from "../ui/FadeReveal";
import { AnimatedNumber } from "../ui/AnimatedNumber";
import { compoundingChartData } from "@/lib/demoData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function Row({
  label,
  value,
  color = "#999",
  large = false,
  children,
}: {
  label: string;
  value?: string;
  color?: string;
  large?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex justify-between items-center">
      <span
        className={`text-sm ${large ? "text-[#999] font-medium" : "text-[#666]"}`}
      >
        {label}
      </span>
      {children || (
        <span className="font-mono text-sm" style={{ color }}>
          {value}
        </span>
      )}
    </div>
  );
}

function ComparisonCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
      <FadeReveal delay={0.1}>
        <div className="bg-[#111] border border-[rgba(255,68,68,0.15)] rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-[#FF4444]/30" />
          <p className="text-[#FF4444] text-xs font-mono uppercase tracking-widest mb-4">
            The Treadmill
          </p>
          <h3 className="text-[#F5F5F5] text-lg font-semibold mb-6">
            Your Current Model
          </h3>
          <div className="space-y-4">
            <Row label="Monthly Ad Spend" value="$25,000" color="#999" />
            <Row label="Leads Generated" value="500 cold opt-ins" color="#999" />
            <Row label="Show Rate" value="50%" color="#999" />
            <Row label="Close Rate" value="10%" color="#999" />
            <Row label="Clients Closed" value="25" color="#F5F5F5" />
            <div className="border-t border-[rgba(255,255,255,0.06)] pt-4">
              <Row label="True CAC" color="#FF4444" large>
                <AnimatedNumber
                  value={4200}
                  prefix="$"
                  className="text-[#FF4444] text-2xl font-bold"
                />
              </Row>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-[#666] flex items-center gap-2">
                <span className="text-[#FF4444]">✕</span> Leads are cold — no
                relationship
              </p>
              <p className="text-[#666] flex items-center gap-2">
                <span className="text-[#FF4444]">✕</span> Pipeline dies when
                spend stops
              </p>
              <p className="text-[#666] flex items-center gap-2">
                <span className="text-[#FF4444]">✕</span> Zero attribution to
                close
              </p>
            </div>
          </div>
        </div>
      </FadeReveal>

      <FadeReveal delay={0.3}>
        <div className="bg-[#111] border border-[rgba(0,229,204,0.2)] rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-[#00E5CC]/50" />
          <p className="text-[#00E5CC] text-xs font-mono uppercase tracking-widest mb-4">
            The Engine
          </p>
          <h3 className="text-[#F5F5F5] text-lg font-semibold mb-6">
            With Intellibook
          </h3>
          <div className="space-y-4">
            <Row label="Same Ad Spend" value="$25,000" color="#999" />
            <Row label="Books Sold" value="500 warm buyers" color="#999" />
            <Row label="Book Revenue" value="$25,000 profit" color="#FFB800" />
            <Row label="High-Ticket Closes" value="5 at $15,000" color="#999" />
            <Row label="Total Revenue" value="$100,000" color="#FFB800" />
            <div className="border-t border-[rgba(255,255,255,0.06)] pt-4">
              <Row label="Effective CAC" color="#00E5CC" large>
                <motion.div
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(0,229,204,0.3)",
                      "0 0 25px rgba(0,229,204,0.7)",
                      "0 0 10px rgba(0,229,204,0.3)",
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <AnimatedNumber
                    value={-5000}
                    prefix="$"
                    className="text-[#00E5CC] text-2xl font-bold"
                  />
                </motion.div>
              </Row>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-[#999] flex items-center gap-2">
                <span className="text-[#00E5CC]">✓</span> Buyers who paid,
                read, and trust you
              </p>
              <p className="text-[#999] flex items-center gap-2">
                <span className="text-[#00E5CC]">✓</span> Books keep working
                forever
              </p>
              <p className="text-[#999] flex items-center gap-2">
                <span className="text-[#00E5CC]">✓</span> Full 1:1 attribution
                via CoreText
              </p>
            </div>
          </div>
        </div>
      </FadeReveal>
    </div>
  );
}

function CompoundingChart() {
  return (
    <FadeReveal className="max-w-4xl mx-auto mt-16">
      <div className="bg-[#111] border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
        <div className="mb-6">
          <h3 className="text-[#F5F5F5] text-lg font-semibold">
            12-Month Revenue Trajectory
          </h3>
          <p className="text-[#666] text-sm mt-1">
            Traditional model declines as ad costs rise. Intellibook compounds
            as your library grows.
          </p>
        </div>
        <div className="h-[300px] md:h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={compoundingChartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.04)"
              />
              <XAxis
                dataKey="month"
                tick={{ fill: "#666", fontSize: 12 }}
                axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
              />
              <YAxis
                tick={{ fill: "#666", fontSize: 12 }}
                axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
                tickFormatter={(v) => `$${v}K`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  fontSize: "13px",
                }}
                labelStyle={{ color: "#999" }}
                formatter={(value, name) => [
                  `$${((value ?? 0) as number).toLocaleString()}K`,
                  (name ?? "") === "traditional" ? "Traditional" : "Intellibook",
                ]}
              />
              <Legend
                formatter={(value) => (
                  <span style={{ color: "#999", fontSize: "12px" }}>
                    {value === "traditional"
                      ? "Traditional Model"
                      : "Intellibook Model"}
                  </span>
                )}
              />
              <Line
                type="monotone"
                dataKey="traditional"
                stroke="#FF4444"
                strokeWidth={2}
                dot={false}
                strokeDasharray="4 4"
              />
              <Line
                type="monotone"
                dataKey="intellibook"
                stroke="#00E5CC"
                strokeWidth={2.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <FadeReveal delay={0.3} className="mt-6 text-center">
          <p className="text-[#999] text-sm">
            <span className="text-[#FFB800] font-mono font-semibold">
              Month 6
            </span>
            : Your first 3,000 books are still generating leads while your ad
            budget funds new readers.
          </p>
        </FadeReveal>
      </div>
    </FadeReveal>
  );
}

export function Economics() {
  return (
    <section className="py-24 relative">
      <FadeReveal className="text-center mb-16">
        <p className="text-[#00E5CC] text-xs font-mono uppercase tracking-[0.3em] mb-3">
          Act 3
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#F5F5F5]">
          The Economics
        </h2>
        <p className="text-[#666] mt-3 text-lg">
          The math that changes everything
        </p>
      </FadeReveal>
      <div className="px-4">
        <ComparisonCard />
        <CompoundingChart />
        <FadeReveal className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3 className="text-2xl md:text-4xl font-semibold text-[#F5F5F5] leading-tight">
              One expert. One book.
              <br />
              <span className="text-[#00E5CC]">
                Negative acquisition cost.
              </span>
              <br />
              Full attribution. 24/7.
            </h3>
            <p className="text-[#666] text-lg mt-6">
              The book doesn&apos;t stop working when you turn off the ads.
            </p>
          </motion.div>
        </FadeReveal>
      </div>
    </section>
  );
}
