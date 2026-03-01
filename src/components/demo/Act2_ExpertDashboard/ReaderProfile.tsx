"use client";

import { motion } from "framer-motion";
import { sampleReaderProfile } from "@/lib/demo/demoData";
import { COLORS } from "@/lib/demo/constants";

const chapterData = [
  { chapter: "Ch 1", time: "28min", pct: 100 },
  { chapter: "Ch 2", time: "32min", pct: 95, hasQR: true },
  { chapter: "Ch 3", time: "41min", pct: 88, hasQR: true },
  { chapter: "Ch 4", time: "35min", pct: 80 },
  { chapter: "Ch 5", time: "29min", pct: 75 },
  { chapter: "Ch 6", time: "22min", pct: 65 },
  { chapter: "Ch 7", time: "30min", pct: 60, hasQR: true },
  { chapter: "Ch 8–9", time: "—", pct: 0, unread: true },
];

export function ReaderProfile() {
  const r = sampleReaderProfile;

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-10 w-full max-w-6xl mx-auto px-4">
      <motion.div
        className="w-full max-w-[280px] flex-shrink-0"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="rounded-xl p-5 border"
          style={{ background: COLORS.surface, borderColor: COLORS.border }}
        >
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="font-semibold" style={{ color: COLORS.textPrimary }}>
                {r.name}
              </p>
              <p className="text-xs" style={{ color: COLORS.textMuted }}>
                {r.location}
              </p>
            </div>
            <div
              className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold"
              style={{
                background: COLORS.accentDim,
                color: COLORS.accent,
                border: `1px solid ${COLORS.accent}`,
              }}
            >
              {r.qualificationLabel}
            </div>
          </div>

          {[
            { label: "Book Purchased", value: r.bookPurchased },
            { label: "Sessions", value: `${r.readingSessions} sessions` },
            { label: "Total Time", value: r.totalReadTime },
            { label: "QR Scans", value: `${r.qrScans.length} activations` },
            { label: "AI Conversations", value: `${r.aiTwinConversations.length} threads` },
            { label: "Status", value: r.status },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex justify-between py-1.5 border-b last:border-0 text-xs"
              style={{ borderColor: COLORS.border }}
            >
              <span className="font-mono" style={{ color: COLORS.textMuted }}>
                {label}
              </span>
              <span style={{ color: COLORS.textSecondary }}>{value}</span>
            </div>
          ))}

          <div className="mt-4">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-[10px] font-mono" style={{ color: COLORS.textMuted }}>
                QUALIFICATION SCORE
              </span>
              <span className="font-mono font-semibold" style={{ color: COLORS.accent }}>
                {r.qualificationScore}/10
              </span>
            </div>
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{ background: COLORS.elevated }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: COLORS.accent }}
                initial={{ width: 0 }}
                animate={{ width: `${r.qualificationScore * 10}%` }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="mt-4 pt-4 border-t" style={{ borderColor: COLORS.border }}>
            <p className="text-[10px] font-mono mb-1" style={{ color: COLORS.textMuted }}>
              PREDICTED CLOSE RATE
            </p>
            <p className="text-2xl font-mono font-semibold" style={{ color: COLORS.money }}>
              {r.predictedCloseRate}%
            </p>
          </div>
        </div>
      </motion.div>

      <div className="flex-1 min-w-0 space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <p
            className="text-xs font-mono uppercase tracking-[0.3em] mb-2"
            style={{ color: COLORS.accent }}
          >
            Scene 6 — Reader Intelligence
          </p>
          <h2
            className="text-2xl font-semibold mb-1"
            style={{ color: COLORS.textPrimary }}
          >
            You know exactly where every reader is.
          </h2>
          <p className="text-sm" style={{ color: COLORS.textSecondary }}>
            For the first time, you can see which CLEAR chapters drive action — and which readers
            become Project 90 clients.
          </p>
        </motion.div>

        <motion.div
          className="rounded-xl p-5 border"
          style={{ background: COLORS.surface, borderColor: COLORS.border }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <p
            className="text-[10px] font-mono uppercase tracking-widest mb-4"
            style={{ color: COLORS.textMuted }}
          >
            Chapter Engagement
          </p>
          <div className="space-y-2.5">
            {chapterData.map((ch, i) => (
              <div key={ch.chapter} className="flex items-center gap-3">
                <span
                  className="text-[10px] font-mono w-14 flex-shrink-0"
                  style={{ color: COLORS.textMuted }}
                >
                  {ch.chapter}
                </span>
                <div
                  className="flex-1 h-1.5 rounded-full overflow-hidden"
                  style={{ background: COLORS.elevated }}
                >
                  {!ch.unread && (
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: ch.pct > 70 ? COLORS.accent : "rgba(13, 148, 136, 0.4)",
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${ch.pct}%` }}
                      transition={{ delay: 0.4 + i * 0.06, duration: 0.6, ease: "easeOut" }}
                    />
                  )}
                </div>
                <span
                  className="text-[10px] font-mono w-12 text-right"
                  style={{ color: COLORS.textMuted }}
                >
                  {ch.time}
                </span>
                {ch.hasQR && (
                  <span
                    className="text-[9px] font-mono px-1.5 py-0.5 rounded"
                    style={{ background: COLORS.accentDim, color: COLORS.accent }}
                  >
                    QR
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-xl p-5 border"
          style={{ background: COLORS.surface, borderColor: COLORS.border }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p
            className="text-[10px] font-mono uppercase tracking-widest mb-3"
            style={{ color: COLORS.textMuted }}
          >
            AI Twin Conversations
          </p>
          {r.aiTwinConversations.map((conv, i) => (
            <div
              key={i}
              className="flex items-start gap-3 py-2.5 border-b last:border-0"
              style={{ borderColor: COLORS.border }}
            >
              <span className="text-sm flex-shrink-0">💬</span>
              <div>
                <p className="text-xs" style={{ color: COLORS.textSecondary }}>
                  {conv.topic}
                </p>
                <p
                  className="text-[11px] mt-0.5"
                  style={{ color: i === 1 ? COLORS.accent : COLORS.textMuted }}
                >
                  {conv.outcome}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
