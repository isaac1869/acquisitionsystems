"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aiTwinConversations } from "@/lib/demo/demoData";
import { COLORS } from "@/lib/demo/constants";

function TypingIndicator() {
  return (
    <div
      className="flex items-center gap-1 px-4 py-3 rounded-2xl rounded-bl-sm w-fit"
      style={{ background: COLORS.elevated }}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: COLORS.textMuted }}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function AITwinChat() {
  const [selectedPath, setSelectedPath] = useState<number | null>(null);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const conversation = selectedPath !== null ? aiTwinConversations[selectedPath] : null;
  const messages = conversation?.messages ?? [];

  useEffect(() => {
    if (selectedPath === null) return;
    const msgs = aiTwinConversations[selectedPath]?.messages ?? [];
    setVisibleMessages(1);
    setShowTyping(true);

    let msgIndex = 1;
    const showNext = () => {
      if (msgIndex >= msgs.length) {
        setShowTyping(false);
        return;
      }
      const delay = msgs[msgIndex].delayMs - (msgs[msgIndex - 1]?.delayMs ?? 0);
      setTimeout(() => {
        setVisibleMessages((v) => v + 1);
        msgIndex++;
        if (msgIndex < msgs.length) {
          setShowTyping(true);
          showNext();
        } else {
          setShowTyping(false);
        }
      }, Math.max(delay, 1400));
    };

    setTimeout(showNext, 1400);
  }, [selectedPath]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleMessages, showTyping]);

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-14 w-full max-w-5xl mx-auto px-6">
      <div className="max-w-xs flex-shrink-0">
        <motion.p
          className="text-xs font-mono uppercase tracking-[0.3em] mb-3"
          style={{ color: COLORS.accent }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Scene 3 — The AI Author Twin
        </motion.p>
        <motion.h2
          className="text-2xl md:text-3xl font-semibold leading-tight mb-4"
          style={{ color: COLORS.textPrimary }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Your best closer. Available 24/7.
        </motion.h2>
        <motion.p
          className="text-sm leading-relaxed mb-6"
          style={{ color: COLORS.textSecondary }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          James Swanwick&apos;s AI Twin engages every reader in his voice — Project 90, neuroplasticity,
          readiness objections.
        </motion.p>

        {selectedPath === null && (
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xs font-mono mb-3" style={{ color: COLORS.textMuted }}>
              Select a question:
            </p>
            {aiTwinConversations.map((path, i) => (
              <button
                key={i}
                onClick={() => setSelectedPath(i)}
                className="w-full text-left px-4 py-3 rounded-lg border transition-all text-sm"
                style={{
                  borderColor: COLORS.border,
                  background: COLORS.surface,
                  color: COLORS.textSecondary,
                }}
              >
                &ldquo;{path.triggerQuestion}&rdquo;
              </button>
            ))}
          </motion.div>
        )}

        {selectedPath !== null && (
          <motion.button
            onClick={() => {
              setSelectedPath(null);
              setVisibleMessages(0);
              setShowTyping(false);
            }}
            className="text-xs font-mono hover:underline transition-colors"
            style={{ color: COLORS.textMuted }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            ← Try another question
          </motion.button>
        )}
      </div>

      <motion.div
        className="flex-1 min-w-0 max-w-md"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div
          className="rounded-2xl overflow-hidden border"
          style={{ background: COLORS.surface, borderColor: COLORS.border }}
        >
          <div
            className="flex items-center gap-3 px-5 py-4 border-b"
            style={{ borderColor: COLORS.border }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ background: COLORS.accent }}
            >
              JS
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: COLORS.textPrimary }}>
                James (AI Twin)
              </p>
              <div className="flex items-center gap-1.5">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: COLORS.money }}
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <p className="text-[10px]" style={{ color: COLORS.textMuted }}>
                  Online · Responds instantly
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 space-y-4 min-h-[280px] max-h-[340px] overflow-y-auto">
            {selectedPath === null ? (
              <div className="flex items-center justify-center h-full min-h-[200px]">
                <p className="text-xs font-mono text-center" style={{ color: COLORS.textMuted }}>
                  Select a question on the left to start
                </p>
              </div>
            ) : (
              <>
                <AnimatePresence>
                  {messages.slice(0, visibleMessages).map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.role === "reader" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                          msg.role === "reader"
                            ? "rounded-br-sm"
                            : "rounded-bl-sm"
                        }`}
                        style={
                          msg.role === "reader"
                            ? { background: COLORS.accent, color: "white" }
                            : { background: COLORS.elevated, color: COLORS.textPrimary }
                        }
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {showTyping && visibleMessages < messages.length && (
                  <motion.div className="flex justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <TypingIndicator />
                  </motion.div>
                )}
              </>
            )}
            <div ref={chatEndRef} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
