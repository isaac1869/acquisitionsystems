"use client";

import { motion } from "framer-motion";
import { COLORS } from "@/lib/demo/constants";

export function LiveIndicator() {
  return (
    <span className="inline-flex items-center gap-1.5">
      <motion.span
        className="w-2 h-2 rounded-full"
        style={{ background: COLORS.accent }}
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <span className="text-[10px] font-mono tracking-widest" style={{ color: COLORS.accent }}>
        LIVE
      </span>
    </span>
  );
}
