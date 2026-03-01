"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { DEMO_CONFIG } from "@/lib/demo/constants";

interface AnimatedNumberDemoProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  glowing?: boolean;
}

export function AnimatedNumberDemo({
  value,
  prefix = "",
  suffix = "",
  duration = DEMO_CONFIG.countUpDurationMs,
  className = "",
  glowing = false,
}: AnimatedNumberDemoProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const displayValue = useCountUp(Math.abs(value), duration, isInView);

  const isNegative = value < 0;
  const absDisplay = Math.abs(displayValue).toLocaleString("en-US");
  const formatted = `${isNegative ? "-" : ""}${prefix}${absDisplay}${suffix}`;

  return (
    <span
      ref={ref}
      className={`tabular-nums ${className}`}
      style={
        glowing
          ? {
              color: "#059669",
              textShadow: "0 0 12px rgba(5, 150, 105, 0.4)",
            }
          : undefined
      }
    >
      {formatted}
    </span>
  );
}
