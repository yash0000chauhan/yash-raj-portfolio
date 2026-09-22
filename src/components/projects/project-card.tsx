"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { ProjectCaseStudy } from "@/components/projects/project-case-study";
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
      <article className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-6 transition-colors hover:border-sky-300/25 hover:bg-white/[0.05] sm:p-7">
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
        <h3 className="mt-4 text-xl text-zinc-50 sm:text-2xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          {project.summary}
        </p>
        {project.architecture.length > 0 ? (
          <p className="mt-5 font-mono text-[11px] leading-relaxed text-zinc-500">
            {project.architecture.join(" → ")}
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
            className="inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white"
          >
            Open page
            <ArrowUpRight className="size-3.5" />
          </Link>
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
