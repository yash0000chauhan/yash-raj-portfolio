"use client";

export function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full border border-white/12 px-4 py-2 text-sm text-zinc-100 hover:bg-white/[0.04]"
    >
      {label}
    </button>
  );
}
