"use client";

import { useState } from "react";

import { buildPipeline } from "@/content/pipelines";
import { cn } from "@/lib/utils";

export function BuildPipeline() {
  const [active, setActive] = useState(0);
  const node = buildPipeline[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {buildPipeline.map((item, index) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              className={cn(
                "flex h-full min-h-24 w-full flex-col justify-between rounded-2xl border p-3 text-left transition-colors",
                active === index
                  ? "border-violet-300/30 bg-violet-400/8"
                  : "border-white/8 bg-white/[0.02] hover:border-white/14"
              )}
              aria-pressed={active === index}
            >
              <span className="font-mono text-[10px] text-zinc-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-[11px] leading-snug tracking-[0.12em] text-zinc-100">
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ol>
      <div className="glass-panel rounded-3xl p-6">
        <p className="font-mono text-[11px] tracking-[0.22em] text-violet-200/80 uppercase">
          {node.label}
        </p>
        <p className="mt-3 text-base leading-relaxed text-zinc-300">
          {node.detail}
        </p>
      </div>
    </div>
  );
}
