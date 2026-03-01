"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { COLORS } from "@/lib/demo/constants";

export function BookMockup() {
  return (
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
          boxShadow: "20px 20px 60px rgba(0,0,0,0.15), -4px -4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-[12px] rounded-l-sm"
          style={{ background: COLORS.accent, transform: "translateZ(1px)" }}
        />
        <div
          className="rounded-sm overflow-hidden border"
          style={{ background: COLORS.surface, borderColor: COLORS.border }}
        >
          <div className="relative w-full aspect-[2/3]">
            <Image
              src="/clear-book-cover.png"
              alt="CLEAR by James Swanwick and Daniel DiPiazza"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 260px, 300px"
              priority
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
