"use client";

import { motion } from "framer-motion";
import { comparisonData } from "@/lib/demoData";

function CompareRow({
  label,
  left,
  right,
  highlight = false,
  leftBad = false,
}: {
  label: string;
  left: string;
  right: string;
  highlight?: boolean;
  leftBad?: boolean;
}) {
  return (
    <div className="grid grid-cols-[1fr_2px_1fr] gap-0 items-center py-3 border-b border-[rgba(255,255,255,0.04)] last:border-0">
      <div className="pr-4 text-right">
        <p className={`text-sm ${leftBad ? "text-[#FF4444]" : "text-[#888]"}`}>{left}</p>
      </div>
      <div className="w-px h-full bg-[rgba(255,255,255,0.06)]" />
      <div className="pl-4">
        <p
          className={`text-sm font-medium ${
            highlight ? "text-[#00E5CC]" : "text-[#F5F5F5]"
          }`}
          style={highlight ? { textShadow: "0 0 10px rgba(0,229,204,0.4)" } : {}}
        >
          {right}
        </p>
      </div>
    </div>
  );
}

export function Scene8_SideBySide() {
  const { current, intellibook } = comparisonData;

  return (
    <div className="w-full max-w-5xl mx-auto px-6">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#00E5CC] text-xs font-mono uppercase tracking-[0.3em] mb-3">
          Scene 8 — The Side-by-Side
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#F5F5F5] mb-3">
          Same ad spend. Completely different economics.
        </h2>
        <p className="text-[#555] text-sm max-w-xl mx-auto">
          You&apos;re not replacing your ads. You&apos;re changing what those dollars buy.
        </p>
      </motion.div>

      {/* Column headers */}
      <div className="grid grid-cols-2 gap-4 mb-4 max-w-3xl mx-auto">
        <motion.div
          className="bg-[rgba(255,68,68,0.06)] border border-[rgba(255,68,68,0.15)] rounded-xl p-4 text-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-[#FF4444] text-xs font-mono uppercase tracking-widest mb-1">Your Current Model</p>
          <p className="text-[#666] text-xs">Cold leads · Monthly reset · Rising CAC</p>
        </motion.div>
        <motion.div
          className="bg-[rgba(0,229,204,0.06)] border border-[rgba(0,229,204,0.2)] rounded-xl p-4 text-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-[#00E5CC] text-xs font-mono uppercase tracking-widest mb-1">With Intellibook</p>
          <p className="text-[#666] text-xs">Warm buyers · Compounding · Negative CAC</p>
        </motion.div>
      </div>

      {/* Comparison table */}
      <motion.div
        className="bg-[#0D0D0D] border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden max-w-3xl mx-auto mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
      >
        <div className="grid grid-cols-[1fr_2px_1fr] items-center px-5 py-2 bg-[rgba(255,255,255,0.02)] text-[10px] font-mono text-[#333] uppercase tracking-widest">
          <span className="text-right pr-4">Current</span>
          <span />
          <span className="pl-4">Intellibook</span>
        </div>

        <div className="px-5">
          <CompareRow label="Monthly Ad Spend" left={`$${current.monthlyAdSpend.toLocaleString()}`} right={`$${intellibook.monthlyAdSpend.toLocaleString()}`} />
          <CompareRow label="What Ads Buy" left="500 cold opt-ins" right="500 book buyers" />
          <CompareRow label="Lead Quality" left="Cold, unread, no relationship" right="Paid, read, trust you" leftBad />
          <CompareRow label="Show Rate" left={current.showRate} right={intellibook.showRate} />
          <CompareRow label="Close Rate" left={current.closeRate} right={intellibook.closeRate} />
          <CompareRow label="Clients Closed" left={current.clientsClosed.toString()} right={intellibook.highTicketCloses.toString()} />
          <CompareRow label="Book Profit" left="$0" right={`+$${intellibook.bookProfit.toLocaleString()}`} />
          <CompareRow label="True CAC" left={`$${current.trueCAC.toLocaleString()}`} right="-$5,000" highlight leftBad />
        </div>
      </motion.div>

      {/* Hero stat */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className="text-[#333] text-xs font-mono mb-2">Your effective cost to acquire a client</p>
        <div className="flex items-center justify-center gap-6">
          <div className="text-center">
            <p className="text-[#FF4444] text-3xl font-mono font-semibold">$4,200</p>
            <p className="text-[#333] text-[10px]">Today</p>
          </div>
          <div className="text-2xl text-[#333]">→</div>
          <div className="text-center">
            <motion.p
              className="text-[#00E5CC] text-3xl font-mono font-semibold"
              animate={{
                textShadow: [
                  "0 0 10px rgba(0,229,204,0.3)",
                  "0 0 30px rgba(0,229,204,0.8)",
                  "0 0 10px rgba(0,229,204,0.3)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              -$5,000
            </motion.p>
            <p className="text-[#333] text-[10px]">With Intellibook</p>
          </div>
        </div>
        <p className="text-[#444] text-xs mt-3 font-mono">
          The book revenue exceeds the cost of acquisition. You get paid to acquire clients.
        </p>
      </motion.div>
    </div>
  );
}
