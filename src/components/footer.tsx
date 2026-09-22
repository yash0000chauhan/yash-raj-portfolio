import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}. {site.title}.
        </p>
        <p className="text-zinc-600">
          Built as a production-ready portfolio. Content lives in{" "}
          <code className="text-zinc-400">src/content</code>.
        </p>
      </div>
    </footer>
  );
}
