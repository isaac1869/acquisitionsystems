// components/Act1/ReaderExperience.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeReveal } from "@/components/demo/FadeReveal";
import { bookPageContent, aiTwinConversations } from "@/lib/demoData";

function BookMockup({ onQRClick }: { onQRClick: () => void }) {
  return (
    <FadeReveal className="flex justify-center">
      <div className="relative" style={{ perspective: "1200px" }}>
        <div
          className="relative w-[320px] md:w-[400px] bg-[#111] rounded-sm overflow-hidden"
          style={{
            transform: "rotateY(-5deg) rotateX(2deg)",
            boxShadow: "20px 20px 60px rgba(0,0,0,0.6), -2px -2px 10px rgba(255,255,255,0.03)",
          }}
        >
          {/* Book spine accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00E5CC]" />

          {/* Page content */}
          <div className="p-6 md:p-8">
            <p className="text-[#00E5CC] text-xs font-mono uppercase tracking-widest mb-4">
              {bookPageContent.chapterTitle}
            </p>
            <div className="space-y-3 text-[#999] text-sm leading-relaxed">
              {bookPageContent.body.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* QR Trigger */}
            <motion.div
              className="mt-6 border border-[rgba(0,229,204,0.25)] rounded-lg p-4 cursor-pointer group"
              whileHover={{ borderColor: "rgba(0,229,204,0.6)" }}
              onClick={onQRClick}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-16 h-16 bg-[#1a1a1a] rounded-lg flex items-center justify-center border border-[rgba(0,229,204,0.2)] flex-shrink-0"
                  animate={{
                    boxShadow: [
                      "0 0 8px rgba(0,229,204,0.2)",
                      "0 0 20px rgba(0,229,204,0.5)",
                      "0 0 8px rgba(0,229,204,0.2)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00E5CC" strokeWidth="1.5">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="3" height="3" />
                    <rect x="18" y="14" width="3" height="3" />
                    <rect x="14" y="18" width="3" height="3" />
                    <rect x="18" y="18" width="3" height="3" />
                  </svg>
                </motion.div>
                <div>
                  <p className="text-[#F5F5F5] text-sm font-medium">
                    {bookPageContent.ctaText}
                  </p>
                  <p className="text-[#666] text-xs mt-1 font-mono">
                    {bookPageContent.ctaInstruction}
                  </p>
                </div>
              </div>
              <p className="text-[#00E5CC] text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to see what happens →
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </FadeReveal>
  );
}

function AITwinChat() {
  const [selectedPath, setSelectedPath] = useState<number | null>(null);
  const [visibleMessages, setVisibleMessages] = useState(0);

  const startConversation = (index: number) => {
    setSelectedPath(index);
    setVisibleMessages(0);
    const messages = aiTwinConversations[index].messages;
    messages.forEach((_, i) => {
      setTimeout(() => setVisibleMessages(i + 1), (i + 1) * 1500);
    });
  };

  const conversation = selectedPath !== null ? aiTwinConversations[selectedPath] : null;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-[#111] border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        {/* Chat header */}
        <div className="px-4 py-3 border-b border-[rgba(255,255,255,0.06)] flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#00E5CC]/20 flex items-center justify-center">
            <span className="text-[#00E5CC] text-xs font-mono">AI</span>
          </div>
          <div>
            <p className="text-[#F5F5F5] text-sm font-medium">AI Author Twin</p>
            <p className="text-[#00E5CC] text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5CC] inline-block animate-pulse" />
              Online
            </p>
          </div>
        </div>

        {/* Chat body */}
        <div className="p-4 min-h-[300px] max-h-[400px] overflow-y-auto space-y-3">
          {!conversation ? (
            <div className="space-y-3">
              <p className="text-[#666] text-sm text-center mb-4">
                Choose a question to see how the AI Twin responds:
              </p>
              {aiTwinConversations.map((conv, i) => (
                <motion.button
                  key={i}
                  onClick={() => startConversation(i)}
                  className="w-full text-left px-4 py-3 rounded-lg border border-[rgba(0,229,204,0.2)] text-sm text-[#F5F5F5] hover:border-[#00E5CC] hover:bg-[rgba(0,229,204,0.05)] transition-all"
                  whileHover={{ x: 4 }}
                >
                  {conv.trigger}
                </motion.button>
              ))}
            </div>
          ) : (
            <AnimatePresence>
              {conversation.messages.slice(0, visibleMessages).map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === "reader" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "reader"
                        ? "bg-[#00E5CC] text-[#0A0A0A] rounded-br-sm"
                        : "bg-[#1a1a1a] text-[#F5F5F5] rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {conversation && visibleMessages < conversation.messages.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-1 px-4 py-2"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-[#666]"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>

        {/* Reset button */}
        {selectedPath !== null && (
          <div className="px-4 py-3 border-t border-[rgba(255,255,255,0.06)]">
            <button
              onClick={() => { setSelectedPath(null); setVisibleMessages(0); }}
              className="text-[#666] text-xs hover:text-[#999] transition-colors"
            >
              ← Try another question
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function ReaderExperience() {
  const [showChat, setShowChat] = useState(false);

  return (
    <section className="py-24 relative">
      {/* Act label */}
      <FadeReveal className="text-center mb-16">
        <p className="text-[#00E5CC] text-xs font-mono uppercase tracking-[0.3em] mb-3">
          Act 1
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#F5F5F5]">
          The Reader Experience
        </h2>
        <p className="text-[#666] mt-3 text-lg">
          What your future client sees
        </p>
      </FadeReveal>

      <div className="max-w-5xl mx-auto px-6 space-y-20">
        {/* Scene 1: The Book */}
        <div className="space-y-8">
          <FadeReveal className="text-center">
            <p className="text-[#999] text-lg">
              Your book arrives. But this isn&apos;t an ordinary book.
            </p>
          </FadeReveal>
          <BookMockup onQRClick={() => setShowChat(true)} />
          <FadeReveal className="text-center max-w-xl mx-auto" delay={0.3}>
            <p className="text-[#666] text-sm">
              Every chapter contains intelligent triggers — QR codes, SMS prompts, and URLs
              that turn passive readers into active participants.
            </p>
          </FadeReveal>
        </div>

        {/* Scene 2: AI Twin Chat */}
        <AnimatePresence>
          {showChat && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center">
                <p className="text-[#F5F5F5] text-lg font-medium">
                  An AI-trained version of the author lives inside every book.
                </p>
                <p className="text-[#666] text-sm mt-2">
                  It answers questions, qualifies interest, and routes hot prospects to the sales team — 24/7.
                </p>
              </div>
              <AITwinChat />
            </motion.div>
          )}
        </AnimatePresence>

        {!showChat && (
          <FadeReveal className="text-center">
            <p className="text-[#666] text-sm">
              ↑ Click the QR code above to see the AI Author Twin in action
            </p>
          </FadeReveal>
        )}
      </div>
    </section>
  );
}
