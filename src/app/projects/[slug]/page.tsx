import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} · ${site.name}`,
      description: project.summary,
      url: absoluteUrl(`/projects/${project.slug}`),
    },
    twitter: {
      title: `${project.title} · ${site.name}`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:px-6">
        <p className="mb-6">
          <Link
            href="/#projects"
            className="text-sm text-zinc-400 hover:text-zinc-200"
          >
            ← Back to projects
          </Link>
        </p>
        <ProjectCaseStudy project={project} />
      </main>
      <Footer />
    </>
  );
}
