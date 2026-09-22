import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6">
      <p className="font-mono text-xs tracking-[0.24em] text-zinc-500 uppercase">
        404
      </p>
      <h1 className="font-heading mt-3 text-4xl text-zinc-50">
        This page is not part of the portfolio.
      </h1>
      <p className="mt-4 text-zinc-400">
        The work lives on the home page and in the project case studies.
      </p>
      <Link
        href="/"
        className="mt-8 text-sm text-sky-300 underline-offset-4 hover:underline"
      >
        Back home
      </Link>
    </main>
  );
}
