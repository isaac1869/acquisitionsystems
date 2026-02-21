"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bookPageContent } from "@/lib/demoData";

export function Scene2_FirstTrigger({ onQRClick }: { onQRClick?: () => void }) {
  const [qrClicked, setQrClicked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleQRClick = () => {
    setQrClicked(true);
    setTimeout(() => setShowNotification(true), 600);
    if (onQRClick) onQRClick();
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16 w-full max-w-6xl mx-auto px-6">
      {/* Simulated book page */}
      <motion.div
        className="flex-shrink-0 w-full max-w-[380px]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div
          className="bg-[#0D0D0D] border border-[rgba(255,255,255,0.08)] rounded-sm p-7"
          style={{ boxShadow: "20px 20px 60px rgba(0,0,0,0.6)" }}
        >
          {/* Chapter header */}
          <div className="border-l-2 border-[#00E5CC] pl-3 mb-5">
            <p className="text-[#00E5CC] text-[9px] font-mono uppercase tracking-[0.3em] mb-0.5">
              {bookPageContent.chapterTitle}
            </p>
          </div>

          {/* Body text */}
          <div className="space-y-3 text-[#888] text-[13px] leading-relaxed mb-6">
            {bookPageContent.bodyText.split("\n\n").slice(0, 2).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* QR trigger box */}
          <button
            onClick={handleQRClick}
            className="w-full group cursor-pointer"
            disabled={qrClicked}
          >
            <motion.div
              className="border rounded-lg p-4 flex items-center gap-4"
              style={{
                borderColor: qrClicked ? "rgba(0,229,204,0.5)" : "rgba(0,229,204,0.2)",
                background: qrClicked ? "rgba(0,229,204,0.06)" : "transparent",
              }}
              animate={
                !qrClicked
                  ? {
                      boxShadow: [
                        "0 0 8px rgba(0,229,204,0.15)",
                        "0 0 20px rgba(0,229,204,0.35)",
                        "0 0 8px rgba(0,229,204,0.15)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* QR code visual */}
              <div className="flex-shrink-0 w-14 h-14 bg-[#111] border border-[rgba(0,229,204,0.3)] rounded flex items-center justify-center">
                <div className="grid grid-cols-3 gap-0.5 w-9 h-9">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="rounded-[1px]"
                      style={{
                        background: [0, 2, 6, 8, 4].includes(i)
                          ? "#00E5CC"
                          : [1, 3, 5, 7].includes(i)
                          ? "rgba(0,229,204,0.3)"
                          : "rgba(255,255,255,0.05)",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="text-left flex-1">
                <p className="text-[#F5F5F5] text-xs font-medium leading-snug mb-1">
                  {bookPageContent.qrCallToAction}
                </p>
                <p className="text-[#00E5CC] text-[10px] font-mono">
                  {!qrClicked ? "↑ Click to activate" : "✓ Activated"}
                </p>
              </div>
            </motion.div>
          </button>
        </div>
      </motion.div>

      {/* Phone notification + explanation */}
      <div className="flex flex-col gap-6 max-w-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-[#00E5CC] text-xs font-mono uppercase tracking-[0.3em] mb-3">
            Scene 2 — The First Trigger
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#F5F5F5] leading-tight mb-4">
            Every chapter contains intelligent triggers.
          </h2>
          <p className="text-[#666] text-sm leading-relaxed">
            QR codes, SMS prompts, and URLs turn passive readers into active participants — captured at the moment of intent, not after a cold opt-in.
          </p>
        </motion.div>

        {/* Phone notification popup */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.1)] rounded-2xl p-4 flex items-start gap-3"
            >
              <div className="w-9 h-9 bg-[#00E5CC] rounded-xl flex items-center justify-center flex-shrink-0 text-[#0A0A0A] text-xs font-bold">
                NW
              </div>
              <div>
                <p className="text-[#F5F5F5] text-xs font-medium mb-0.5">New Wave Acquisitions</p>
                <p className="text-[#999] text-xs leading-relaxed">
                  Hey! You scanned the Chapter 3 code. Your toolkit is on its way — and I had a quick question about your business...
                </p>
                <p className="text-[#00E5CC] text-[10px] font-mono mt-1.5">just now · iMessage</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!showNotification && (
          <motion.p
            className="text-[#444] text-xs font-mono"
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
