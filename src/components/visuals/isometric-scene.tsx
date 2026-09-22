"use client";

import {
  AppWindow,
  Bot,
  Brain,
  Database,
  Eye,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";

import { heroPipeline } from "@/content/pipelines";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const icons = [Database, Workflow, Eye, Brain, Bot, AppWindow] as const;

type IsometricSceneProps = {
  active: number;
  onSelect: (index: number) => void;
};

export function IsometricScene({ active, onSelect }: IsometricSceneProps) {
  const reduced = usePrefersReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return;

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 8;
      const y = (event.clientY / window.innerHeight - 0.5) * -6;
      setTilt({ x, y });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  return (
    <div
      className="iso-scene relative mb-6 hidden h-[280px] overflow-hidden rounded-2xl border border-white/8 bg-zinc-950/40 sm:block"
      aria-hidden
    >
      <div className="absolute inset-0 iso-floor" />
      <div
        className="iso-rig absolute inset-0 flex items-end justify-center pb-8"
        style={
          reduced
            ? undefined
            : {
                transform: `rotateX(${18 + tilt.y}deg) rotateZ(${-16 + tilt.x}deg)`,
              }
        }
      >
        {heroPipeline.map((node, index) => {
          const Icon = icons[index] ?? Database;
          const isActive = active === index;
          return (
            <button
              key={node.id}
              type="button"
              tabIndex={-1}
              onMouseEnter={() => onSelect(index)}
              onFocus={() => onSelect(index)}
              onClick={() => onSelect(index)}
              className={cn(
                "iso-node absolute flex w-[148px] flex-col items-start gap-2 rounded-xl border px-3 py-3 text-left",
                isActive
                  ? "border-sky-300/40 bg-sky-400/15"
                  : "border-white/10 bg-zinc-900/90"
              )}
              style={{
                left: `${8 + index * 11}%`,
                bottom: `${8 + index * 18}px`,
                zIndex: index + 1,
                transform: `translateZ(${index * 18}px)`,
              }}
            >
              <span className="flex items-center gap-2">
                <Icon className="size-3.5 text-sky-300" />
                <span className="font-mono text-[10px] tracking-[0.14em] text-zinc-100">
                  {node.label}
                </span>
              </span>
              <span className="h-1 w-full overflow-hidden rounded-full bg-white/8">
                <span
                  className={cn(
                    "block h-full rounded-full bg-gradient-to-r from-sky-400 to-violet-400",
                    isActive ? "w-full" : "w-1/3"
                  )}
                />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
