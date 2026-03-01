"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { activityFeedEvents } from "@/lib/demo/demoData";
import { DEMO_CONFIG } from "@/lib/demo/constants";

export interface LiveFeedEvent {
  id: string;
  type: string;
  icon: string;
  message: string;
  location?: string;
  timestamp: string;
  isHighlight?: boolean;
}

export function useDemoActivityFeed(isActive: boolean = true) {
  const [events, setEvents] = useState<LiveFeedEvent[]>([]);
  const indexRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const addEvent = useCallback(() => {
    const source = activityFeedEvents[indexRef.current % activityFeedEvents.length];
    const newEvent: LiveFeedEvent = {
      ...source,
      id: `event-${Date.now()}-${indexRef.current}`,
      timestamp: "just now",
    };

    setEvents((prev) => {
      const updated = [newEvent, ...prev];
      return updated.slice(0, 12).map((e, i) => ({
        ...e,
        timestamp:
          i === 0 ? "just now" : i === 1 ? "5s ago" : i < 4 ? `${i * 8}s ago` : `${i}m ago`,
      }));
    });

    indexRef.current += 1;
  }, []);

  useEffect(() => {
    if (!isActive) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    for (let i = 0; i < 3; i++) {
      setTimeout(() => addEvent(), i * 400);
    }

    timerRef.current = setInterval(addEvent, DEMO_CONFIG.activityFeedIntervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, addEvent]);

  return events;
}
