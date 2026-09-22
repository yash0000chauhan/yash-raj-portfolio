import { Reveal, SectionHeading } from "@/components/reveal";
import { about } from "@/content/about";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5 text-base leading-relaxed text-zinc-400">
            {about.body.map((paragraph) => (
              <Reveal key={paragraph}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
            <Reveal>
              <ul className="flex flex-wrap gap-2 pt-2">
                {about.focus.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="grid gap-3">
            {about.roles.map((role) => (
              <article
                key={role.title}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
              >
                <h3 className="text-sm font-medium text-zinc-100">
                  {role.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                  {role.detail}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
