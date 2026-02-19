"use client";

import { motion } from "framer-motion";

const outcomeBullets = [
  "Lower CAC without lowering quality",
  "Warmer leads who show up",
  "Readers convert faster than cold opt-ins",
  "Attribution you can trust",
  "Pipeline that keeps moving when spend pauses",
];

function CheckDot() {
  return (
    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-electric-cyan/20 flex items-center justify-center">
      <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
    </span>
  );
}

export default function OutcomeBullets() {
  return (
    <section className="py-16 md:py-20 px-6 bg-gray-50/60">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-10">
          What changes when your book works for you
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {outcomeBullets.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className="flex items-start gap-3"
            >
              <CheckDot />
              <span className="text-gray-800 font-medium text-sm leading-[1.55]">
                {text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
