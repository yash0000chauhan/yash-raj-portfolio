import { Reveal, SectionHeading } from "@/components/reveal";
import { certifications, skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A working stack, not a percentage chart."
          description="Grouped by how I use them. No skill bars or invented proficiency scores."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.04}>
              <article className="h-full rounded-3xl border border-white/8 bg-white/[0.03] p-5 sm:p-6">
                <h3 className="text-lg text-zinc-50">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/8 px-3 py-1 text-xs text-zinc-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <h3 className="text-lg text-zinc-50">Certifications</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
              >
                <p className="text-sm text-zinc-100">{cert.name}</p>
                <p className="mt-1 text-xs text-zinc-500">
                  {"issuer" in cert && cert.issuer
                    ? `${cert.issuer} · ${cert.year}`
                    : cert.year}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
