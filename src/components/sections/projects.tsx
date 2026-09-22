import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/reveal";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Featured systems"
          description="Large case studies with architecture and implementation notes. Results are only listed when they are real project outcomes — never invented metrics."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
