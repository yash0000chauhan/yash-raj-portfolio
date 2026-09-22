"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 right-0 left-0 z-50 h-[2px] origin-left bg-gradient-to-r from-sky-400/80 via-indigo-400 to-violet-400"
      style={{ scaleX: reduced ? 0 : scrollYProgress }}
    />
  );
}
