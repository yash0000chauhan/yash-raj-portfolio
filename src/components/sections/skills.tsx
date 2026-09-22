import { Reveal, SectionHeading } from "@/components/reveal";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A working stack, not a percentage chart."
          description="Tools and methods used across internships, freelance work, and product systems. No skill bars."
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
      </div>
    </section>
  );
}
