"use client";

import { useState } from "react";

import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { featuredProjects, moreProjects } from "@/content/projects";

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? [...featuredProjects, ...moreProjects] : featuredProjects;

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Featured systems"
          description="Case studies with problem, approach, architecture, implementation, technology, result, and lessons — only where those details are published."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        {!showAll && moreProjects.length > 0 ? (
          <div className="mt-8">
            <Button
              type="button"
              variant="outline"
              className="rounded-full border-white/12"
              onClick={() => setShowAll(true)}
            >
              View all
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
