import { ArrowUpRight } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/reveal";
import { githubShowcase } from "@/content/github";

export function GithubSection() {
  return (
    <section id="github" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="GitHub"
          title="Public work, without fabricated stats."
          description={githubShowcase.note}
        />
        <Reveal className="mt-8">
          <a
            href={githubShowcase.profile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200"
          >
            github.com/{githubShowcase.handle}
            <ArrowUpRight className="size-3.5" />
          </a>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {githubShowcase.repos.map((repo) => (
            <Reveal key={repo.name}>
              <article className="h-full rounded-3xl border border-white/8 bg-white/[0.03] p-5">
                <p className="font-mono text-[11px] text-zinc-500">
                  {repo.language}
                </p>
                <h3 className="mt-2 text-base text-zinc-50">{repo.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {repo.summary}
                </p>
                <a
                  href={repo.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white"
                >
                  View repository
                  <ArrowUpRight className="size-3.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
