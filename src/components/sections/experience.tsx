import { Reveal, SectionHeading } from "@/components/reveal";
import { experience } from "@/content/experience";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Roles that shipped systems, not just slides."
          description="A mix of internship, freelance, product, and equity-partner work. Commercial terms, ownership, and unpublished client names are omitted on purpose."
        />
        <ol className="relative mt-12 space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-px before:bg-white/8 sm:before:left-[15px]">
          {experience.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 0.04}>
              <article
                className={cn(
                  "relative ml-8 rounded-3xl border p-5 sm:ml-10 sm:p-6",
                  item.featured
                    ? "glow-border border-sky-300/20 bg-gradient-to-br from-sky-400/8 via-zinc-950 to-violet-500/10"
                    : "border-white/8 bg-white/[0.03]"
                )}
              >
                <span
                  aria-hidden
                  className="absolute top-6 -left-[29px] size-3 rounded-full border border-sky-300/40 bg-zinc-950 sm:-left-[33px]"
                />
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg text-zinc-50">{item.role}</h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      {item.organization}
                    </p>
                  </div>
                  <p className="font-mono text-[11px] tracking-wide text-zinc-500">
                    {[item.period, item.location].filter(Boolean).join(" · ")}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {item.summary}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-sky-300/70" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                {item.architecture ? (
                  <p className="mt-4 font-mono text-[11px] leading-relaxed text-zinc-500">
                    {item.architecture.join(" → ")}
                  </p>
                ) : null}
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {item.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] text-zinc-400"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
