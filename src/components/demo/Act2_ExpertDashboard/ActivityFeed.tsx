"use client";

import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useDemoActivityFeed } from "@/hooks/useDemoActivityFeed";
import { LiveIndicator } from "../ui/LiveIndicator";
import { COLORS } from "@/lib/demo/constants";

export function ActivityFeed() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const events = useDemoActivityFeed(isInView);

  return (
    <div
      ref={ref}
      className="rounded-xl overflow-hidden h-full border"
      style={{ background: COLORS.surface, borderColor: COLORS.border }}
    >
      <div
        className="px-4 py-3 border-b flex items-center justify-between"
        style={{ borderColor: COLORS.border }}
      >
        <p className="text-sm font-medium" style={{ color: COLORS.textPrimary }}>
          Activity Feed
        </p>
        <LiveIndicator />
      </div>
      <div className="p-3 space-y-2 max-h-[340px] overflow-hidden">
        <AnimatePresence initial={false}>
          {events.slice(0, 8).map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: 20, height: 0 }}
              animate={{ opacity: 1, x: 0, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className={`flex items-start gap-2.5 py-2 px-3 rounded-lg ${
                event.isHighlight ? "border" : ""
              }`}
              style={{
                background: event.isHighlight ? COLORS.accentDim : COLORS.elevated,
                borderColor: event.isHighlight ? "rgba(13, 148, 136, 0.2)" : "transparent",
              }}
            >
              <span className="text-base flex-shrink-0 mt-0.5">{event.icon}</span>
              <div className="min-w-0 flex-1">
                <p
                  className="text-[11px] leading-snug"
                  style={{ color: event.isHighlight ? COLORS.textPrimary : COLORS.textSecondary }}
                >
                  {event.message}
                  {event.location && (
                    <span className="ml-1" style={{ color: COLORS.textMuted }}>
                      · {event.location}
                    </span>
                  )}
                </p>
                <p className="text-[9px] font-mono mt-0.5" style={{ color: COLORS.textMuted }}>
                  {event.timestamp}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
