"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Aurora Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[160px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[170px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-blue-500/15 blur-[140px]"
      />
    </>
  );
}