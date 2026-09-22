import { SectionHeading } from "@/components/reveal";
import { BuildPipeline } from "@/components/visuals/build-pipeline";

export function HowIBuild() {
  return (
    <section id="how-i-build" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How I build AI"
          title="From data to a monitored application."
          description="Select a node to see how that layer is treated. The path is the same whether the problem is retrieval, vision, or an agent."
        />
        <div className="mt-12">
          <BuildPipeline />
        </div>
      </div>
    </section>
  );
}
