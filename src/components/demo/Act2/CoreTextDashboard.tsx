"use client";

import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FadeReveal } from "../ui/FadeReveal";
import { AnimatedNumber } from "../ui/AnimatedNumber";
import { useActivityFeed } from "@/hooks/useActivityFeed";
import { dashboardMetrics, funnelStages, attributionNodes } from "@/lib/demoData";

function LiveIndicator() {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-mono">
      <motion.span
        className="w-2 h-2 rounded-full bg-[#00E5CC]"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <span className="text-[#00E5CC]">LIVE</span>
    </span>
  );
}

function MetricsPanel() {
  return (
    <div className="space-y-3">
      {dashboardMetrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className={`p-3 rounded-lg border ${
            metric.isNegativeCAC
              ? "border-[rgba(0,229,204,0.3)] bg-[rgba(0,229,204,0.05)]"
              : "border-[rgba(255,255,255,0.06)] bg-[#111]"
          }`}
        >
          <p className="text-[#666] text-xs font-mono uppercase tracking-wider">
            {metric.label}
          </p>
          <div
            className={`text-2xl font-bold mt-1 ${
              metric.isNegativeCAC
                ? "text-[#00E5CC]"
                : metric.isMoney
                ? "text-[#FFB800]"
                : "text-[#F5F5F5]"
            }`}
          >
            <AnimatedNumber
              value={metric.value}
              prefix={metric.prefix}
              duration={2000 + i * 200}
              glowing={metric.isNegativeCAC}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ActivityFeed() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const events = useActivityFeed(isInView);

  return (
    <div
      ref={ref}
      className="bg-[#111] border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden h-full"
    >
      <div className="px-4 py-3 border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between">
        <p className="text-[#F5F5F5] text-sm font-medium">Activity Feed</p>
        <LiveIndicator />
      </div>
      <div className="p-3 space-y-2 max-h-[500px] overflow-hidden">
        <AnimatePresence initial={false}>
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: 20, height: 0 }}
              animate={{ opacity: 1, x: 0, height: "auto" }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className={`flex items-start gap-3 px-3 py-2.5 rounded-lg text-sm ${
                event.isHighlight
                  ? "bg-[rgba(0,229,204,0.06)] border border-[rgba(0,229,204,0.15)]"
                  : "bg-[#0A0A0A]"
              }`}
            >
              <span
                className="text-base flex-shrink-0 mt-0.5"
                style={{
                  fontFamily:
                    '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
                }}
              >
                {event.icon}
              </span>
              <div className="min-w-0 flex-1">
                <p
                  className={`${
                    event.isHighlight
                      ? "text-[#F5F5F5] font-medium"
                      : "text-[#999]"
                  } truncate`}
                >
                  {event.message}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  {event.location && (
                    <span className="text-[#666] text-xs">
                      {event.location}
                    </span>
                  )}
                  <span className="text-[#444] text-xs font-mono">
                    {event.timestamp}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function FunnelVisualization() {
  return (
    <div className="bg-[#111] border border-[rgba(255,255,255,0.06)] rounded-xl p-4">
      <p className="text-[#F5F5F5] text-sm font-medium mb-4">
        Conversion Funnel
      </p>
      <div className="space-y-3">
        {funnelStages.map((stage, i) => (
          <motion.div
            key={stage.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.15 }}
          >
            <div className="flex justify-between text-xs mb-1">
              <span className="text-[#999]">{stage.label}</span>
              <span className="font-mono text-[#F5F5F5]">
                {stage.value.toLocaleString()}{" "}
                <span className="text-[#666]">({stage.pct}%)</span>
              </span>
            </div>
            <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    i === funnelStages.length - 1
                      ? "#FFB800"
                      : `rgba(0, 229, 204, ${1 - i * 0.18})`,
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${stage.pct}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + i * 0.15,
                  ease: "easeOut",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AttributionTimeline() {
  return (
    <FadeReveal className="mt-16">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-[#F5F5F5]">
          Full Attribution: Book → Client
        </h3>
        <p className="text-[#666] text-sm mt-2">
          Every step tracked. No guessing.
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden md:block relative">
        <div className="absolute top-6 left-0 right-0 h-px bg-[rgba(255,255,255,0.06)]" />
        <motion.div
          className="absolute top-6 left-0 h-px bg-[#00E5CC]"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="flex justify-between relative">
          {attributionNodes.map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.25 }}
              className="flex flex-col items-center text-center w-[13%] group"
            >
              <motion.div
                className={`w-3 h-3 rounded-full mb-3 z-10 ${
                  node.type === "close" ? "bg-[#FFB800]" : "bg-[#00E5CC]"
                }`}
                animate={
                  node.type === "close"
                    ? {
                        boxShadow: [
                          "0 0 8px rgba(255,184,0,0.3)",
                          "0 0 20px rgba(255,184,0,0.6)",
                          "0 0 8px rgba(255,184,0,0.3)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity }}
              />
              <p className="text-[#666] text-xs font-mono mb-1">
                Day {node.day}
              </p>
              <p
                className={`text-xs font-medium ${
                  node.type === "close" ? "text-[#FFB800]" : "text-[#F5F5F5]"
                }`}
              >
                {node.event}
              </p>
              <p className="text-[#444] text-[10px] mt-1 opacity-0 group-hover:opacity-100 transition-opacity max-w-[120px]">
                {node.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-4 relative pl-8">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.06)]" />
        {attributionNodes.map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative"
          >
            <div
              className={`absolute left-[-22px] top-1 w-2.5 h-2.5 rounded-full ${
                node.type === "close" ? "bg-[#FFB800]" : "bg-[#00E5CC]"
              }`}
            />
            <p className="text-[#666] text-xs font-mono">
              Day {node.day} · {node.date}
            </p>
            <p
              className={`text-sm font-medium ${
                node.type === "close" ? "text-[#FFB800]" : "text-[#F5F5F5]"
              }`}
            >
              {node.event}
            </p>
            <p className="text-[#444] text-xs">{node.detail}</p>
          </motion.div>
        ))}
      </div>

      <FadeReveal delay={0.5} className="text-center mt-8">
        <p className="text-[#666] text-sm italic">
          Full 1:1 attribution from ad click to closed deal. Try getting this
          from Facebook Ads Manager.
        </p>
      </FadeReveal>
    </FadeReveal>
  );
}

export function CoreTextDashboard() {
  return (
    <section className="py-24 relative">
      <FadeReveal className="text-center mb-12">
        <p className="text-[#00E5CC] text-xs font-mono uppercase tracking-[0.3em] mb-3">
          Act 2
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#F5F5F5]">
          The Expert Dashboard
        </h2>
        <p className="text-[#666] mt-3 text-lg">What YOU see</p>
      </FadeReveal>

      <div className="max-w-7xl mx-auto px-4">
        <FadeReveal>
          <div className="bg-[#0A0A0A] border border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between bg-[#0d0d0d]">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-[#00E5CC]/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-sm bg-[#00E5CC]" />
                </div>
                <span className="text-[#F5F5F5] font-medium text-sm">
                  CoreText Intelligence Engine
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#444] text-xs font-mono hidden sm:inline">
                  {new Date().toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <LiveIndicator />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
              <div className="lg:col-span-3">
                <MetricsPanel />
              </div>
              <div className="lg:col-span-5">
                <ActivityFeed />
              </div>
              <div className="lg:col-span-4">
                <FunnelVisualization />
              </div>
            </div>
          </div>
        </FadeReveal>

        <FadeReveal delay={0.3} className="text-center mt-8">
          <p className="text-[#999] text-sm">
            For the first time in publishing history, you can see exactly which
            reader became which client — and what path they took to get there.
          </p>
        </FadeReveal>

        <AttributionTimeline />
      </div>
    </section>
  );
}
