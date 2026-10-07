import { SectionHeading } from "@/components/reveal";
import { BuildPipeline } from "@/components/visuals/build-pipeline";

export function HowIBuild() {
  return (
    <section id="how-i-build" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How I build"
          title="Understand → Architecture → Backend/API → AI layer → Frontend → Test → Deploy → Iterate."
          description="Select a step to see how that layer is treated. The path is the same whether the problem is a REST service, a RAG pipeline, or a product feature."
        />
        <div className="mt-12">
          <BuildPipeline />
        </div>
      </div>
    </section>
  );
}
