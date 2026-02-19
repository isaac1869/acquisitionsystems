"use client";

import { motion } from "framer-motion";

const words = [
  { text: "Reading becomes", highlight: false },
  { text: "data.", highlight: true },
  { text: "Data becomes", highlight: false },
  { text: "pipeline.", highlight: true },
];

export default function StatementSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              className={`inline-block mr-3 ${
                word.highlight ? "text-electric-cyan" : "text-gray-900"
              }`}
            >
              {word.text}
            </motion.span>
          ))}
        </h2>
      </div>
    </section>
  );
}
