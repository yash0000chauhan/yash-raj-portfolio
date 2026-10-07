"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { ArchitectureFlow } from "@/components/visuals/architecture-flow";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        className={
          project.placeholder
            ? "group relative overflow-hidden rounded-3xl border border-dashed border-white/10 bg-white/[0.02] p-5 sm:p-6"
            : "group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-6 transition-colors hover:border-sky-300/25 hover:bg-white/[0.05] sm:p-7"
        }
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -right-10 size-40 rounded-full bg-indigo-500/10 blur-3xl transition-opacity group-hover:opacity-100"
        />
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-[11px] tracking-[0.22em] text-zinc-500">
            {project.number}
          </p>
          <p className="text-[11px] tracking-wide text-sky-300/80 uppercase">
            {project.category}
          </p>
        </div>
        <h3
          className={
            project.placeholder
              ? "mt-3 text-lg font-semibold tracking-[-0.02em] text-zinc-100"
              : "mt-4 text-xl font-semibold tracking-[-0.02em] text-zinc-50 sm:text-2xl"
          }
        >
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
          {project.summary}
        </p>
        {project.architecture.length > 0 ? (
          <ArchitectureFlow steps={project.architecture} />
        ) : project.placeholder ? (
          <p className="mt-4 text-xs text-zinc-500">
            Case-study details are private / unavailable.
          </p>
        ) : null}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button
            type="button"
            variant="outline"
            className="rounded-full border-white/12"
            onClick={() => setOpen(true)}
          >
            Case study
          </Button>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white focus-visible:ring-2 focus-visible:ring-sky-300/50 focus-visible:outline-none"
          >
            Open page
            <ArrowUpRight className="size-3.5" />
          </Link>
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-sky-300 hover:text-sky-200 focus-visible:ring-2 focus-visible:ring-sky-300/50 focus-visible:outline-none"
            >
              {link.label}
              <ArrowUpRight className="size-3.5" />
            </a>
          ))}
        </div>
      </article>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription>{project.summary}</DialogDescription>
          </DialogHeader>
          <ProjectCaseStudy project={project} compact />
        </DialogContent>
      </Dialog>
    </>
  );
}
