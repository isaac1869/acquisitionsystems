"use client";

import { motion } from "framer-motion";
import { comparisonData } from "@/lib/demo/demoData";
import { COLORS } from "@/lib/demo/constants";

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
    <div
      className="grid grid-cols-[1fr_2px_1fr] gap-0 items-center py-3 border-b last:border-0"
      style={{ borderColor: COLORS.border }}
    >
      <div className="pr-4 text-right">
        <p className="text-sm" style={{ color: leftBad ? COLORS.warning : COLORS.textSecondary }}>
          {left}
        </p>
      </div>
      <div className="w-px h-full" style={{ background: COLORS.border }} />
      <div className="pl-4">
        <p
          className={`text-sm ${highlight ? "font-semibold" : "font-medium"}`}
          style={{
            color: highlight ? COLORS.accent : COLORS.textPrimary,
            ...(highlight ? { textShadow: `0 0 10px ${COLORS.accentDim}` } : {}),
          }}
        >
          {right}
        </p>
      </div>
    </div>
  );
}

export function SideBySide() {
  const { current, intellibook } = comparisonData;

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
          Scene 8 — The Side-by-Side
        </p>
        <h2
          className="text-2xl md:text-3xl font-semibold mb-3"
          style={{ color: COLORS.textPrimary }}
        >
          Same ad spend. Completely different economics.
        </h2>
        <p
          className="text-sm max-w-xl mx-auto"
          style={{ color: COLORS.textSecondary }}
        >
          You&apos;re not replacing your ads. You&apos;re changing what those dollars buy.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 mb-4 max-w-3xl mx-auto">
        <motion.div
          className="rounded-xl p-4 text-center border-2"
          style={{
            background: COLORS.warningDim,
            borderColor: COLORS.warning,
          }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p
            className="text-xs font-mono uppercase tracking-widest mb-1"
            style={{ color: COLORS.warning }}
          >
            Your Current Model
          </p>
          <p className="text-xs" style={{ color: COLORS.textSecondary }}>
            Cold leads · Monthly reset · Rising CAC
          </p>
        </motion.div>
        <motion.div
          className="rounded-xl p-4 text-center border-2"
          style={{
            background: COLORS.accentDim,
            borderColor: COLORS.accent,
          }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p
            className="text-xs font-mono uppercase tracking-widest mb-1"
            style={{ color: COLORS.accent }}
          >
            With Intellibook
          </p>
          <p className="text-xs" style={{ color: COLORS.textSecondary }}>
            Warm buyers · Compounding · Negative CAC
          </p>
        </motion.div>
      </div>

      <motion.div
        className="rounded-xl overflow-hidden max-w-3xl mx-auto mb-6 border"
        style={{ background: COLORS.surface, borderColor: COLORS.border }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
      >
        <div
          className="grid grid-cols-[1fr_2px_1fr] items-center px-5 py-2 text-[10px] font-mono uppercase tracking-widest"
          style={{ background: COLORS.elevated, color: COLORS.textMuted }}
        >
          <span className="text-right pr-4">Current</span>
          <span />
          <span className="pl-4">Intellibook</span>
        </div>

        <div className="px-5">
          <CompareRow
            label="Monthly Ad Spend"
            left={`$${current.monthlyAdSpend.toLocaleString()}`}
            right={`$${intellibook.monthlyAdSpend.toLocaleString()}`}
          />
          <CompareRow label="What Ads Buy" left="500 cold opt-ins" right="500 book buyers" />
          <CompareRow
            label="Lead Quality"
            left="Cold, unread, no relationship"
            right="Paid, read CLEAR, trust you"
            leftBad
          />
          <CompareRow label="Show Rate" left={current.showRate} right={intellibook.showRate} />
          <CompareRow label="Close Rate" left={current.closeRate} right={intellibook.closeRate} />
          <CompareRow
            label="Clients Closed"
            left={current.clientsClosed.toString()}
            right={intellibook.highTicketCloses.toString()}
          />
          <CompareRow label="Book Profit" left="$0" right={`+$${intellibook.bookProfit.toLocaleString()}`} />
          <CompareRow
            label="True CAC"
            left={`$${current.trueCAC.toLocaleString()}`}
            right="-$5,000"
            highlight
            leftBad
          />
        </div>
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className="text-xs font-mono mb-2" style={{ color: COLORS.textMuted }}>
          Your effective cost to acquire a client
        </p>
        <div className="flex items-center justify-center gap-6">
          <div className="text-center">
            <p className="text-3xl font-mono font-semibold" style={{ color: COLORS.warning }}>
              $4,200
            </p>
            <p className="text-[10px]" style={{ color: COLORS.textMuted }}>
              Today
            </p>
          </div>
          <div className="text-2xl" style={{ color: COLORS.textMuted }}>
            →
          </div>
          <div className="text-center">
            <motion.p
              className="text-3xl font-mono font-semibold"
              style={{ color: COLORS.accent }}
              animate={{
                textShadow: [
                  `0 0 10px ${COLORS.accentDim}`,
                  `0 0 30px ${COLORS.accent}80`,
                  `0 0 10px ${COLORS.accentDim}`,
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              -$5,000
            </motion.p>
            <p className="text-[10px]" style={{ color: COLORS.textMuted }}>
              With Intellibook
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
