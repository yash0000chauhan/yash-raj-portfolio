"use client";

import dynamic from "next/dynamic";

import { AiSystemsCoreFallback } from "@/components/3d/ai-systems-core-fallback";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const AiSystemsCoreScene = dynamic(
  () =>
    import("@/components/3d/ai-systems-core-scene").then(
      (module) => module.AiSystemsCoreScene
    ),
  {
    ssr: false,
    loading: () => <AiSystemsCoreFallback />,
  }
);

export function AiSystemsCore() {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <AiSystemsCoreFallback />;
  }

  return <AiSystemsCoreScene />;
}
