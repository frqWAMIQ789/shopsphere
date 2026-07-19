"use client";

import CategoryCard from "../CategoryCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <motion.section
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
       duration: 1,
       ease: "easeOut",
      }}
      className="bg-gradient-to-br from-black via-neutral-950 to-neutral-900"
    >

      <div
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full blur-[120px] transition-all duration-75"
        style={{
         left: mousePosition.x - 250,
         top: mousePosition.y - 250,
         background:
          "radial-gradient(circle, rgba(59,130,246,0.28) 0%, transparent 70%)",
        }}
      />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
           duration: 12,
           repeat: Infinity,
           ease: "easeInOut",
        }}
        className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]"
      ></motion.div>
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="absolute top-40 right-10 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"></div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 md:flex-row">

        {/* Left Side */}
        <div className="max-w-2xl">
          <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
            🚀 India's Next-Generation Marketplace
          </span>

          <h1 className="
           mt-8
           text-6xl
           font-black
           leading-[1.05]
           tracking-tight
           text-white
           md:text-7xl
           lg:text-8xl
          ">
            Shop Beyond
            <br />
            The Ordinary.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-300">
           Experience the future of online shopping with AI-powered
           recommendations, immersive product discovery, lightning-fast
           delivery, and a beautifully crafted marketplace built for the next
           generation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700">
              Shop Now
            </button>

            <button className="rounded-xl border border-white px-8 py-3 font-semibold transition hover:bg-white hover:text-slate-900">
              Explore Categories
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
            <span>⭐ 4.9/5 Customer Rating</span>
            <span>🚚 Fast Delivery</span>
            <span>🔒 Secure Payments</span>
          </div>
        </div>

        <div className="relative flex h-[550px] w-full items-center justify-center overflow-hidden">

          <div className="absolute top-4 left-10 animate-floating">
            <CategoryCard
             emoji="💻"
             name="Laptop"
            />
          </div>

          <div className="absolute bottom-10 left-0 animate-floating">
            <CategoryCard
              emoji="👟"
             name="Shoes"
            />
          </div>
          <div className="rounded-full bg-blue-500 p-20 shadow-[0_0_120px_rgba(59,130,246,0.6)]">
            <div className="text-8xl">🛒</div>
          </div>

          <div className="absolute top-16 right-0 animate-floating">
            <CategoryCard
              emoji="🎧"
              name="Headphones"
            />
          </div>

          <div className="absolute bottom-0 right-10 animate-floating">
            <CategoryCard
             emoji="⌚"
             name="Smart Watch"
            />
          </div>  

        </div>

      </div>
    </motion.section>
  );
}
