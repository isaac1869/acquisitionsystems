"use client";

import { motion } from "framer-motion";

export default function SwanwickQuote() {
  return (
    <section className="py-16 md:py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed italic">
            &ldquo;Having the book is not enticing. Having more clients paying me is enticing. Irrespective of how I get there.&rdquo;
          </p>
          <cite className="block mt-6 text-sm font-semibold text-gray-500 not-italic uppercase tracking-wider">
            James Swanwick
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
