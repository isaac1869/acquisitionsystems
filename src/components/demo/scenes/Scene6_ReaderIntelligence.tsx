"use client";

import { motion } from "framer-motion";
import { sampleReaderProfile } from "@/lib/demoData";

const chapterData = [
  { chapter: "Ch 1", time: "28min", pct: 100 },
  { chapter: "Ch 2", time: "32min", pct: 95, hasQR: true },
  { chapter: "Ch 3", time: "41min", pct: 88, hasQR: true },
  { chapter: "Ch 4", time: "35min", pct: 80 },
  { chapter: "Ch 5", time: "29min", pct: 75 },
  { chapter: "Ch 6", time: "22min", pct: 65 },
  { chapter: "Ch 7", time: "30min", pct: 60, hasQR: true },
  { chapter: "Ch 8–12", time: "—", pct: 0, unread: true },
];

export function Scene6_ReaderIntelligence() {
  const r = sampleReaderProfile;

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-10 w-full max-w-6xl mx-auto px-4">
      {/* Left: profile card */}
      <motion.div
        className="w-full max-w-[280px] flex-shrink-0"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-[#0D0D0D] border border-[rgba(255,255,255,0.08)] rounded-xl p-5">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-[#F5F5F5] font-semibold">{r.name}</p>
              <p className="text-[#555] text-xs">{r.location}</p>
            </div>
            <div
              className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold"
              style={{
                background: "rgba(0,229,204,0.12)",
                color: "#00E5CC",
                border: "1px solid rgba(0,229,204,0.25)",
              }}
            >
              {r.qualificationLabel}
            </div>
          </div>

          {/* Stats */}
          {[
            { label: "Book Purchased", value: r.bookPurchased },
            { label: "Sessions", value: `${r.readingSessions} sessions` },
            { label: "Total Time", value: r.totalReadTime },
            { label: "QR Scans", value: `${r.qrScans.length} activations` },
            { label: "AI Conversations", value: `${r.aiTwinConversations.length} threads` },
            { label: "Status", value: r.status },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between py-1.5 border-b border-[rgba(255,255,255,0.04)] last:border-0 text-xs">
              <span className="text-[#444] font-mono">{label}</span>
              <span className="text-[#888]">{value}</span>
            </div>
          ))}

          {/* Score */}
          <div className="mt-4">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-[#444] text-[10px] font-mono">QUALIFICATION SCORE</span>
              <span className="text-[#00E5CC] font-mono font-semibold">{r.qualificationScore}/10</span>
            </div>
            <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-[#00E5CC]"
                style={{ boxShadow: "0 0 10px rgba(0,229,204,0.4)" }}
                initial={{ width: 0 }}
                animate={{ width: `${r.qualificationScore * 10}%` }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.06)]">
            <p className="text-[#444] text-[10px] font-mono mb-1">PREDICTED CLOSE RATE</p>
            <p className="text-[#FFB800] text-2xl font-mono font-semibold">{r.predictedCloseRate}%</p>
          </div>
        </div>
      </motion.div>

      {/* Right: chapter progress + conversations */}
      <div className="flex-1 min-w-0 space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <p className="text-[#00E5CC] text-xs font-mono uppercase tracking-[0.3em] mb-2">
            Scene 6 — Reader Intelligence
          </p>
          <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-1">
            You know exactly where every reader is.
          </h2>
          <p className="text-[#555] text-sm">
            For the first time, you can see which chapters drive action — and which readers become clients.
          </p>
        </motion.div>

        {/* Chapter engagement */}
        <motion.div
          className="bg-[#0D0D0D] border border-[rgba(255,255,255,0.06)] rounded-xl p-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <p className="text-[#444] text-[10px] font-mono uppercase tracking-widest mb-4">Chapter Engagement</p>
          <div className="space-y-2.5">
            {chapterData.map((ch, i) => (
              <div key={ch.chapter} className="flex items-center gap-3">
                <span className="text-[#444] text-[10px] font-mono w-14 flex-shrink-0">{ch.chapter}</span>
                <div className="flex-1 h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
                  {!ch.unread && (
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: ch.pct > 70 ? "#00E5CC" : "rgba(0,229,204,0.4)" }}
                      initial={{ width: 0 }}
                      animate={{ width: `${ch.pct}%` }}
                      transition={{ delay: 0.4 + i * 0.06, duration: 0.6, ease: "easeOut" }}
                    />
                  )}
                </div>
                <span className="text-[#333] text-[10px] font-mono w-12 text-right">{ch.time}</span>
                {ch.hasQR && (
                  <span className="text-[#00E5CC] text-[9px] font-mono bg-[rgba(0,229,204,0.08)] px-1.5 py-0.5 rounded">QR</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI conversations */}
        <motion.div
          className="bg-[#0D0D0D] border border-[rgba(255,255,255,0.06)] rounded-xl p-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-[#444] text-[10px] font-mono uppercase tracking-widest mb-3">AI Twin Conversations</p>
          {r.aiTwinConversations.map((conv, i) => (
            <div key={i} className="flex items-start gap-3 py-2.5 border-b border-[rgba(255,255,255,0.04)] last:border-0">
              <span className="text-sm flex-shrink-0">💬</span>
              <div>
                <p className="text-[#888] text-xs">{conv.topic}</p>
                <p className={`text-[11px] mt-0.5 ${i === 1 ? "text-[#00E5CC]" : "text-[#555]"}`}>
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
