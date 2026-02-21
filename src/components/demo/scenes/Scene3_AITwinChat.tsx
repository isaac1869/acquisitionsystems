"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aiTwinConversations } from "@/lib/demoData";

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3 bg-[#1A1A1A] rounded-2xl rounded-bl-sm w-fit">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#555]"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function Scene3_AITwinChat() {
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
    <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-14 w-full max-w-6xl mx-auto px-6">
      {/* Left: explanation */}
      <div className="max-w-xs flex-shrink-0">
        <motion.p
          className="text-[#00E5CC] text-xs font-mono uppercase tracking-[0.3em] mb-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Scene 3 — The AI Author Twin
        </motion.p>
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-[#F5F5F5] leading-tight mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Your best closer. Available 24/7.
        </motion.h2>
        <motion.p
          className="text-[#666] text-sm leading-relaxed mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          An AI trained on your methodology engages every reader in your voice — answering questions, handling objections, and booking qualified calls without you touching anything.
        </motion.p>

        {selectedPath === null && (
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-[#444] text-xs font-mono mb-3">Select a question to start:</p>
            {aiTwinConversations.map((path, i) => (
              <button
                key={i}
                onClick={() => setSelectedPath(i)}
                className="w-full text-left px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#111] hover:border-[rgba(0,229,204,0.3)] hover:bg-[rgba(0,229,204,0.05)] transition-all text-[#999] hover:text-[#F5F5F5] text-xs leading-snug"
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
            className="text-[#444] text-xs font-mono hover:text-[#00E5CC] transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            ← Try another question
          </motion.button>
        )}
      </div>

      {/* Right: chat window */}
      <motion.div
        className="flex-1 min-w-0 max-w-md"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="bg-[#0D0D0D] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden">
          {/* Chat header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-[rgba(255,255,255,0.06)]">
            <div className="w-8 h-8 rounded-full bg-[#00E5CC] flex items-center justify-center text-[#0A0A0A] text-xs font-bold">
              JS
            </div>
            <div>
              <p className="text-[#F5F5F5] text-sm font-medium">James (AI Twin)</p>
              <div className="flex items-center gap-1.5">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-[#00CC88]"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <p className="text-[#666] text-[10px]">Online · Responds instantly</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-5 space-y-4 min-h-[280px] max-h-[340px] overflow-y-auto hide-scrollbar">
            {selectedPath === null ? (
              <div className="flex items-center justify-center h-full min-h-[200px]">
                <p className="text-[#333] text-xs font-mono text-center">
                  Select a question on the left to start the conversation
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
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={`flex ${msg.role === "reader" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                          msg.role === "reader"
                            ? "bg-[#00E5CC] text-[#0A0A0A] rounded-br-sm"
                            : "bg-[#1A1A1A] text-[#DDD] rounded-bl-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {showTyping && visibleMessages < messages.length && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
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
