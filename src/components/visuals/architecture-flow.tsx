import { cn } from "@/lib/utils";

export function ArchitectureFlow({
  steps,
  className,
}: {
  steps: readonly string[];
  className?: string;
}) {
  if (steps.length === 0) return null;

  return (
    <ol
      className={cn(
        "mt-5 flex flex-wrap items-center gap-1.5",
        className
      )}
      aria-label="Architecture"
    >
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-1.5">
          <span className="iso-chip rounded-lg border border-white/10 bg-zinc-900/80 px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-zinc-200">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <span aria-hidden className="text-[10px] text-sky-300/70">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
