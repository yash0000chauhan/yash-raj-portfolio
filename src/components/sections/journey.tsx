import { Reveal, SectionHeading } from "@/components/reveal";
import { journey } from "@/content/journey";

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Journey"
          title="Internships → Freelance → AI Projects → Startup / Product → Equity Partner"
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {journey.map((step, index) => (
            <Reveal as="li" key={step.id} delay={index * 0.04}>
              <article className="h-full rounded-3xl border border-white/8 bg-white/[0.03] p-4">
                <p className="font-mono text-[11px] text-zinc-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-base text-zinc-50">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
