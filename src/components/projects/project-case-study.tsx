import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ArchitectureFlow } from "@/components/visuals/architecture-flow";
import type { Project } from "@/content/projects";

function Block({ title, body }: { title: string; body?: string }) {
  if (!body) return null;
  return (
    <section className="space-y-2">
      <h3 className="text-xs font-medium tracking-[0.18em] text-sky-300 uppercase">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-300">{body}</p>
    </section>
  );
}

export function ProjectCaseStudy({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <p className="font-mono text-[11px] text-zinc-500">
          {project.number} · {project.category}
        </p>
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-zinc-50 sm:text-3xl">
          {project.title}
        </h2>
        <p className="text-sm leading-relaxed text-zinc-300">
          {project.summary}
        </p>
      </header>

      {project.placeholder ? (
        <p className="rounded-2xl border border-dashed border-white/12 bg-white/[0.02] p-4 text-sm text-zinc-500">
          Verified MarketEZ details are not in this repository yet. Update{" "}
          <code className="text-zinc-300">src/content/projects.ts</code> when
          they are ready to publish.
        </p>
      ) : null}

      <Block title="Problem" body={project.problem} />
      <Block title="Approach" body={project.approach} />

      {project.architecture.length > 0 ? (
        <section>
          <h3 className="text-xs font-medium tracking-[0.18em] text-sky-300 uppercase">
            Architecture
          </h3>
          <ArchitectureFlow steps={project.architecture} className="mt-3" />
        </section>
      ) : null}

      {project.technologies.length > 0 ? (
        <section>
          <h3 className="mb-2 text-[11px] tracking-[0.22em] text-sky-300/80 uppercase">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="border-white/10">
                {tech}
              </Badge>
            ))}
          </div>
        </section>
      ) : null}

      <Block title="Implementation" body={project.implementation} />
      <Block title="Results" body={project.results} />
      <Block title="Lessons" body={project.lessons} />

      {project.notes?.map((note) => (
        <p key={note} className="text-xs leading-relaxed text-zinc-500">
          {note}
        </p>
      ))}

      {project.links.length > 0 ? (
        <section className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-sky-300 hover:text-sky-200"
            >
              {link.label}
              <ArrowUpRight className="size-3.5" />
            </a>
          ))}
        </section>
      ) : null}

      {compact ? (
        <p>
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm text-zinc-300 underline-offset-4 hover:underline"
          >
            Open full case study
          </Link>
        </p>
      ) : null}
    </div>
  );
}
