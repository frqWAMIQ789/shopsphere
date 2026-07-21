"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
};

export default function GlassCard({ children }: GlassCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 180,
    damping: 18,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 180,
    damping: 18,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateYValue = ((x / rect.width) - 0.5) * 18;
    const rotateXValue = -((y / rect.height) - 0.5) * 18;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  }

  function resetRotation() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(37,99,235,0.25)]"
    >
      {children}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60"></div> 
    </motion.div>
  );
}