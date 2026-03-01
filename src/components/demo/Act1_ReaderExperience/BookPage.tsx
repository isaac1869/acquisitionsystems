"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bookPageContent } from "@/lib/demo/demoData";
import { COLORS } from "@/lib/demo/constants";

export function BookPage() {
  const [qrClicked, setQrClicked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleQRClick = () => {
    setQrClicked(true);
    setTimeout(() => setShowNotification(true), 600);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-14 w-full max-w-5xl mx-auto px-6">
      <motion.div
        className="flex-shrink-0 w-full max-w-[380px]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div
          className="rounded-lg p-6 border"
          style={{
            background: COLORS.surface,
            borderColor: COLORS.border,
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          }}
        >
          <div
            className="border-l-2 pl-3 mb-5"
            style={{ borderColor: COLORS.accent }}
          >
            <p
              className="text-[9px] font-mono uppercase tracking-[0.3em] mb-0.5"
              style={{ color: COLORS.accent }}
            >
              {bookPageContent.chapterTitle}
            </p>
          </div>

          <div
            className="space-y-3 text-[13px] leading-relaxed mb-6"
            style={{ color: COLORS.textSecondary }}
          >
            {bookPageContent.bodyText.split("\n\n").slice(0, 3).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <button
            onClick={handleQRClick}
            className="w-full group cursor-pointer text-left"
            disabled={qrClicked}
          >
            <motion.div
              className="rounded-lg p-4 flex items-center gap-4 border-2"
              style={{
                borderColor: qrClicked ? COLORS.accent : "rgba(13, 148, 136, 0.3)",
                background: qrClicked ? COLORS.accentDim : "transparent",
              }}
              animate={
                !qrClicked
                  ? {
                      boxShadow: [
                        "0 0 8px rgba(13, 148, 136, 0.15)",
                        "0 0 20px rgba(13, 148, 136, 0.3)",
                        "0 0 8px rgba(13, 148, 136, 0.15)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="flex-shrink-0 w-14 h-14 rounded flex items-center justify-center border-2"
                style={{
                  background: COLORS.elevated,
                  borderColor: "rgba(13, 148, 136, 0.4)",
                }}
              >
                <div className="grid grid-cols-3 gap-0.5 w-9 h-9">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="rounded-[1px]"
                      style={{
                        background: [0, 2, 6, 8, 4].includes(i)
                          ? COLORS.accent
                          : [1, 3, 5, 7].includes(i)
                          ? "rgba(13, 148, 136, 0.4)"
                          : COLORS.border,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <p
                  className="text-sm font-medium leading-snug mb-1"
                  style={{ color: COLORS.textPrimary }}
                >
                  {bookPageContent.qrCallToAction}
                </p>
                <p className="text-[10px] font-mono" style={{ color: COLORS.accent }}>
                  {!qrClicked ? "↑ Click to activate" : "✓ Activated"}
                </p>
              </div>
            </motion.div>
          </button>
        </div>
      </motion.div>

      <div className="flex flex-col gap-6 max-w-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p
            className="text-xs font-mono uppercase tracking-[0.3em] mb-3"
            style={{ color: COLORS.accent }}
          >
            Scene 2 — The First Trigger
          </p>
          <h2
            className="text-2xl md:text-3xl font-semibold leading-tight mb-4"
            style={{ color: COLORS.textPrimary }}
          >
            Every chapter contains intelligent triggers.
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{ color: COLORS.textSecondary }}
          >
            QR codes, SMS prompts, and URLs turn passive readers into active participants — captured
            at the moment of intent.
          </p>
        </motion.div>

        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl p-4 flex items-start gap-3 border"
              style={{
                background: COLORS.elevated,
                borderColor: COLORS.border,
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                style={{ background: COLORS.accent }}
              >
                JS
              </div>
              <div>
                <p className="text-sm font-medium mb-0.5" style={{ color: COLORS.textPrimary }}>
                  James Swanwick
                </p>
                <p className="text-xs leading-relaxed" style={{ color: COLORS.textSecondary }}>
                  Hey! You scanned the Chapter 3 code. Your neuroplasticity assessment is on its way
                  — and I had a quick question about where you&apos;re at...
                </p>
                <p className="text-[10px] font-mono mt-1.5" style={{ color: COLORS.accent }}>
                  just now · iMessage
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!showNotification && (
          <motion.p
            className="text-xs font-mono"
            style={{ color: COLORS.textMuted }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            ← Click the QR code to see what happens
          </motion.p>
        )}
      </div>
    </div>
  );
}
