"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  AppWindow,
  Bot,
  Brain,
  Database,
  Eye,
  Workflow,
} from "lucide-react";
import { useState } from "react";

import { IsometricScene } from "@/components/visuals/isometric-scene";
import { heroPipeline } from "@/content/pipelines";
import { cn } from "@/lib/utils";

const icons = [Database, Workflow, Eye, Brain, Bot, AppWindow] as const;

export function HeroPipeline() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = heroPipeline[active];

  return (
    <div className="glass-panel relative overflow-hidden rounded-3xl p-5 sm:p-6">
      <p className="mb-4 text-xs font-medium tracking-[0.22em] text-sky-300/90 uppercase">
        Interactive pipeline
      </p>
      <IsometricScene active={active} onSelect={setActive} />
      <ol className="space-y-1.5">
        {heroPipeline.map((node, index) => {
          const Icon = icons[index] ?? Database;
          const isActive = active === index;
          return (
            <li key={node.id}>
              <button
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors",
                  isActive
                    ? "border-sky-400/30 bg-sky-400/10"
                    : "border-white/6 bg-white/[0.02] hover:border-white/12"
                )}
              >
                <span className="relative flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-zinc-950/70">
                  <Icon className="size-3.5 text-sky-300" />
                  {isActive && !reduced ? (
                    <motion.span
                      className="absolute inset-0 rounded-lg bg-sky-300/10"
                      animate={{ opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  ) : null}
                </span>
                <span className="min-w-0">
                  <span className="block text-[13px] font-medium tracking-wide text-zinc-100">
                    {node.label}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-sm leading-relaxed text-zinc-300">
        <span className="font-medium text-zinc-100">{current.label}. </span>
        {current.detail}
      </p>
    </div>
  );
}
