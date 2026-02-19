"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hide = pathname === "/apply" || pathname === "/thank-you";
  const show = visible && !hide;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-gray-200 py-3 px-6"
        >
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <p className="text-sm font-medium text-gray-700 hidden sm:block">
              One brand per month. Limited capacity.
            </p>
            <a
              href="/apply"
              className="px-5 py-2.5 bg-electric-cyan text-black font-semibold text-sm tracking-wide hover:opacity-90 active:scale-[0.98] transition-all duration-150 ml-auto"
            >
              APPLY FOR EARLY ACCESS
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
