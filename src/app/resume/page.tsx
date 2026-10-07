import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PrintButton } from "@/components/print-button";
import { about } from "@/content/about";
import { experience } from "@/content/experience";
import { featuredProjects } from "@/content/projects";
import { certifications, skillGroups } from "@/content/skills";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `${site.name} — ${site.title}. Resume.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <Link href="/#home" className="text-sm text-zinc-400 hover:text-zinc-200">
            ← Back to portfolio
          </Link>
          <PrintButton label="Download / Print" />
        </div>

        <header className="space-y-2 border-b border-white/8 pb-6">
          <p className="text-[11px] tracking-[0.28em] text-sky-300/80 uppercase">
            {site.title}
          </p>
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-zinc-50">
            {site.name}
          </h1>
          <p className="text-sm text-zinc-400">
            {site.location} · {site.email}
          </p>
          <p className="flex flex-wrap gap-3 text-sm text-sky-300">
            <a href={site.links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
          <p className="pt-2 text-sm leading-relaxed text-zinc-300">
            {site.description}
          </p>
        </header>

        <section className="mt-8 space-y-2">
          <h2 className="text-xs tracking-[0.2em] text-sky-300 uppercase">
            Education
          </h2>
          <p className="text-zinc-100">{about.education.degree}</p>
          <p className="text-sm text-zinc-400">
            {about.education.school} · {about.education.period}
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xs tracking-[0.2em] text-sky-300 uppercase">
            Experience
          </h2>
          {experience.map((item) => (
            <article key={item.id}>
              <div className="flex flex-wrap justify-between gap-2">
                <h3 className="text-sm font-medium text-zinc-100">
                  {item.role} · {item.organization}
                </h3>
                <p className="font-mono text-[11px] text-zinc-500">
                  {[item.period, item.location].filter(Boolean).join(" · ")}
                </p>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xs tracking-[0.2em] text-sky-300 uppercase">
            Featured projects
          </h2>
          {featuredProjects.map((project) => (
            <article key={project.slug}>
              <h3 className="text-sm font-medium text-zinc-100">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-300">{project.summary}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xs tracking-[0.2em] text-sky-300 uppercase">
            Skills
          </h2>
          {skillGroups.map((group) => (
            <p key={group.id} className="text-sm text-zinc-300">
              <span className="text-zinc-100">{group.title}: </span>
              {group.items.join(", ")}
            </p>
          ))}
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xs tracking-[0.2em] text-sky-300 uppercase">
            Certifications
          </h2>
          <ul className="space-y-1 text-sm text-zinc-300">
            {certifications.map((cert) => (
              <li key={cert.name}>
                {cert.name}
                {"issuer" in cert && cert.issuer ? `, ${cert.issuer}` : ""} ·{" "}
                {cert.year}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
