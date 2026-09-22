"use client";

import {
  Activity,
  AppWindow,
  Brain,
  Database,
  Eye,
  ScanSearch,
  Server,
  WandSparkles,
} from "lucide-react";
import { useState } from "react";

import { buildPipeline } from "@/content/pipelines";
import { cn } from "@/lib/utils";

const icons = [
  Database,
  WandSparkles,
  Eye,
  ScanSearch,
  Brain,
  Server,
  AppWindow,
  Activity,
] as const;

export function BuildPipeline() {
  const [active, setActive] = useState(0);
  const node = buildPipeline[active];
  const Icon = icons[active] ?? Database;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {buildPipeline.map((item, index) => {
          const NodeIcon = icons[index] ?? Database;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={cn(
                  "iso-chip flex h-full min-h-24 w-full flex-col justify-between rounded-2xl border p-3 text-left transition-colors",
                  active === index
                    ? "border-violet-300/35 bg-violet-400/10"
                    : "border-white/8 bg-white/[0.03] hover:border-white/14"
                )}
                aria-pressed={active === index}
              >
                <span className="flex items-center justify-between">
                  <NodeIcon className="size-4 text-sky-300" />
                  <span className="font-mono text-[10px] text-zinc-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
                <span className="text-[12px] leading-snug font-medium tracking-wide text-zinc-100">
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      <div className="glass-panel rounded-3xl p-6">
        <p className="flex items-center gap-2 text-sm font-medium tracking-[0.16em] text-violet-200 uppercase">
          <Icon className="size-4" />
          {node.label}
        </p>
        <p className="mt-3 text-base leading-relaxed text-zinc-300">
          {node.detail}
        </p>
      </div>
    </div>
  );
}
