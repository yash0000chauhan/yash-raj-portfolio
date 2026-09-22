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
      const x = (event.clientX / window.innerWidth - 0.5) * 6;
      const y = (event.clientY / window.innerHeight - 0.5) * -4;
      setTilt({ x, y });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  return (
    <div
      className="iso-scene relative mb-5 hidden h-[200px] overflow-hidden rounded-2xl border border-white/8 bg-zinc-950/50 sm:block"
      aria-hidden
    >
      <div className="absolute inset-0 iso-floor" />
      <div
        className="iso-rig absolute inset-x-0 bottom-6 flex items-end justify-center gap-2 px-4"
        style={
          reduced
            ? undefined
            : {
                transform: `rotateX(${14 + tilt.y}deg) rotateZ(${-10 + tilt.x}deg)`,
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
                "iso-node flex w-[72px] shrink-0 flex-col items-center gap-1.5 rounded-xl border px-2 py-3",
                isActive
                  ? "border-sky-300/45 bg-sky-400/16"
                  : "border-white/10 bg-zinc-900/92"
              )}
              style={{
                transform: `translateY(${(heroPipeline.length - 1 - index) * -6}px) translateZ(${index * 12}px)`,
              }}
            >
              <Icon className="size-3.5 text-sky-300" />
              <span className="font-mono text-[10px] tracking-[0.12em] text-zinc-100">
                {node.short}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
