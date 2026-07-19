"use client";

import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <div className="flex gap-4">
      <motion.button
        whileHover={{
          scale: 1.05,
          y: -4,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white shadow-[0_0_40px_rgba(37,99,235,0.4)]"
      >
       Shop Now
      </motion.button>

      <motion.button
        whileHover={{
          scale: 1.05,
          y: -4,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-xl"
      >
        Explore
      </motion.button>
    </div>
  );
}