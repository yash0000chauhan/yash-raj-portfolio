import {
  AppWindow,
  Bot,
  Brain,
  Database,
  ScanSearch,
  Server,
} from "lucide-react";

import { heroPipeline } from "@/content/pipelines";

const icons = [Database, Brain, ScanSearch, Server, Bot, AppWindow] as const;

export function AiSystemsCoreFallback() {
  return (
    <div className="glass-panel relative overflow-hidden rounded-3xl p-5 sm:p-6">
      <p className="mb-4 text-xs font-medium tracking-[0.22em] text-sky-300/90 uppercase">
        AI Systems Core
      </p>
      <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {heroPipeline.map((node, index) => {
          const Icon = icons[index] ?? Database;
          return (
            <li
              key={node.id}
              className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-3"
            >
              <Icon className="size-3.5 text-sky-300" aria-hidden />
              <p className="mt-2 text-[13px] font-medium tracking-wide text-zinc-100">
                {node.label}
              </p>
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-sm leading-relaxed text-zinc-300">
        DATA → MODEL → RAG → API → AGENT → PRODUCT
      </p>
    </div>
  );
}
