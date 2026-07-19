"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="max-w-2xl"
    >
      <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-md">
        ✨ India's Premium AI Marketplace
      </span>

      <h1 className="mt-8 text-6xl font-black leading-tight md:text-7xl">
        Experience
        <br />
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
          Shopping
        </span>
        <br />
        Reimagined.
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
        ORACCA combines premium design, AI-powered discovery,
        lightning-fast delivery, and an immersive shopping experience
        built for the future.
      </p>

      <HeroButtons />

      <div className="mt-12 flex gap-10">
        <div>
          <h2 className="text-3xl font-bold">10K+</h2>
          <p className="text-gray-400">Happy Customers</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">500+</h2>
          <p className="text-gray-400">Premium Brands</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">99.9%</h2>
          <p className="text-gray-400">Customer Satisfaction</p>
        </div>
      </div>
    </motion.div>
  );
}