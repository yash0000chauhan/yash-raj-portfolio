import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © 2026 {site.name}. {site.title}.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a href={`mailto:${site.email}`} className="hover:text-zinc-300">
            {site.email}
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-300"
          >
            <GitHubIcon className="size-3.5" />
            GitHub
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-300"
          >
            <LinkedInIcon className="size-3.5" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
