"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { heroPipeline } from "@/content/pipelines";
import { cn } from "@/lib/utils";

export function HeroPipeline() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <div className="glass-panel relative overflow-hidden rounded-3xl p-5 sm:p-6">
      <p className="mb-5 text-[11px] tracking-[0.28em] text-sky-300/75 uppercase">
        Interactive pipeline
      </p>
      <ol className="space-y-2">
        {heroPipeline.map((node, index) => {
          const isActive = active === index;
          return (
            <li key={node.id}>
              <button
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={cn(
                  "flex w-full items-start gap-3 rounded-2xl border px-3 py-3 text-left transition-colors",
                  isActive
                    ? "border-sky-400/25 bg-sky-400/8"
                    : "border-white/6 bg-white/[0.02] hover:border-white/12"
                )}
              >
                <span className="relative mt-1.5 flex size-2.5 shrink-0">
                  <span
                    className={cn(
                      "size-2.5 rounded-full",
                      isActive ? "bg-sky-300" : "bg-zinc-600"
                    )}
                  />
                  {isActive && !reduced ? (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-sky-300/50"
                      animate={{ scale: [1, 2.1], opacity: [0.6, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                    />
                  ) : null}
                </span>
                <span>
                  <span className="block font-mono text-[11px] tracking-[0.18em] text-zinc-200">
                    {node.label}
                  </span>
                  <span
                    className={cn(
                      "mt-1 block text-sm leading-relaxed",
                      isActive ? "text-zinc-300" : "text-zinc-500"
                    )}
                  >
                    {node.detail}
                  </span>
                </span>
              </button>
              {index < heroPipeline.length - 1 ? (
                <div
                  aria-hidden
                  className="mx-5 h-3 w-px bg-gradient-to-b from-sky-400/40 to-violet-400/20"
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
