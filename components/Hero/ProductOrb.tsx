"use client";

import { motion } from "framer-motion";

export default function ProductOrb() {
  return (
    <div className="relative flex h-[550px] w-[550px] items-center justify-center">

      {/* Center Energy Orb */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-56 w-56 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 blur-2xl opacity-80"
      />

      {/* Glass Ring */}
      <div className="absolute h-[420px] w-[420px] rounded-full border border-white/10" />

      {/* Laptop */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute -top-2 rounded-3xl border border-white/10 bg-white/10 px-8 py-6 backdrop-blur-xl shadow-xl"
      >
        💻
      </motion.div>

      {/* Phone */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-4 rounded-3xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl shadow-xl"
      >
        📱
      </motion.div>

      {/* Watch */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-4 rounded-3xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl shadow-xl"
      >
        ⌚
      </motion.div>

      {/* Headphones */}
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
        }}
        className="absolute bottom-0 rounded-3xl border border-white/10 bg-white/10 px-7 py-5 backdrop-blur-xl shadow-xl"
      >
        🎧
      </motion.div>

    </div>
  );
}