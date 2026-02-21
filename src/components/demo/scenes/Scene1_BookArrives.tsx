"use client";

import { motion } from "framer-motion";
import { bookPageContent } from "@/lib/demoData";

export function Scene1_BookArrives() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full max-w-6xl mx-auto px-6">
      {/* Book Mockup */}
      <motion.div
        initial={{ opacity: 0, rotateY: -20, x: -40 }}
        animate={{ opacity: 1, rotateY: -8, x: 0 }}
        transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ perspective: "1200px" }}
        className="flex-shrink-0"
      >
        <div
          className="relative w-[260px] md:w-[300px]"
          style={{
            transform: "rotateY(-8deg) rotateX(3deg)",
            transformStyle: "preserve-3d",
            boxShadow: "30px 30px 80px rgba(0,0,0,0.8), -4px -4px 20px rgba(255,255,255,0.02)",
          }}
        >
          {/* Book spine */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[14px] bg-[#00E5CC] rounded-l-sm"
            style={{ transform: "translateZ(1px)" }}
          />
          {/* Book cover */}
          <div className="bg-[#0D0D0D] border border-[rgba(255,255,255,0.06)] rounded-sm overflow-hidden">
            {/* Cover top bar */}
            <div className="h-1.5 w-full bg-[#00E5CC]" />
            <div className="p-8 min-h-[380px] flex flex-col justify-between">
              <div>
                <p className="text-[#00E5CC] text-[9px] font-mono uppercase tracking-[0.35em] mb-6">
                  New Wave Acquisitions
                </p>
                <h2 className="text-[#F5F5F5] text-2xl font-semibold leading-tight mb-3">
                  The Negative CAC Playbook
                </h2>
                <p className="text-[#666] text-xs leading-relaxed">
                  How expert operators acquire high-ticket clients at zero cost — and build a system that compounds.
                </p>
              </div>
              <div className="mt-8">
                <div className="w-12 h-px bg-[#00E5CC] mb-3" />
                <p className="text-[#444] text-[10px] font-mono">James Swanwick</p>
              </div>
            </div>
          </div>
          {/* Book page edges */}
          <div
            className="absolute top-1 -right-1 bottom-1 w-2 bg-[#1a1a1a]"
            style={{ transform: "translateZ(-2px)" }}
          />
        </div>
      </motion.div>

      {/* Text */}
      <div className="max-w-md">
        <motion.p
          className="text-[#00E5CC] text-xs font-mono uppercase tracking-[0.3em] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Scene 1 — The Book Arrives
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-[#F5F5F5] leading-tight mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          Your book arrives.
          <br />
          <span className="text-[#999]">But this isn&apos;t an ordinary book.</span>
        </motion.h2>
        <motion.p
          className="text-[#666] text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Every chapter is instrumented with intelligent triggers — QR codes, SMS prompts, and AI conversations that turn readers into clients.
        </motion.p>
        <motion.div
          className="mt-8 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: i === 0 ? "#00E5CC" : "rgba(255,255,255,0.12)" }}
              />
            ))}
          </div>
          <p className="text-[#444] text-xs font-mono">Click Next to see what&apos;s inside →</p>
        </motion.div>
      </div>
    </div>
  );
}
