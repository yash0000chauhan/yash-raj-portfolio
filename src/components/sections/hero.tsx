"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroPipeline } from "@/components/visuals/hero-pipeline";
import { site } from "@/content/site";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 site-grid"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-indigo-500/12 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 right-0 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.p
            initial={reduced ? false : { opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] tracking-[0.32em] text-sky-300/85 uppercase"
          >
            {site.title}
          </motion.p>
          <motion.p
            initial={reduced ? false : { opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.04 }}
            className="mt-3 text-sm text-zinc-300"
          >
            {site.tagline}
          </motion.p>
          <motion.h1
            initial={reduced ? false : { opacity: 1, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-5 max-w-xl text-[2.05rem] leading-[1.2] font-semibold tracking-[-0.02em] text-pretty text-zinc-50 sm:text-5xl lg:text-[3.05rem]"
          >
            {site.headline}
          </motion.h1>
          <motion.p
            initial={reduced ? false : { opacity: 1, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg"
          >
            {site.description}
          </motion.p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
            {site.secondary}
          </p>
          <motion.div
            initial={reduced ? false : { opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              className="h-11 rounded-full px-5"
              nativeButton={false}
              render={<a href={site.ctas.work.href} />}
            >
              {site.ctas.work.label}
              <ArrowDownRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 rounded-full border-white/12 bg-white/[0.03] px-5"
              nativeButton={false}
              render={<a href={site.ctas.contact.href} />}
            >
              {site.ctas.contact.label}
            </Button>
          </motion.div>
        </div>
        <HeroPipeline />
      </div>
    </section>
  );
}
