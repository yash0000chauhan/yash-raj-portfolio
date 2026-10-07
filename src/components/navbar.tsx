"use client";

import { FileText, Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { CommandPalette } from "@/components/command-palette";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = site.nav.map((item) => item.id);

export function Navbar() {
  const active = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b transition-colors",
          scrolled
            ? "border-white/8 bg-zinc-950/70 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <a
            href="#home"
            className="font-heading text-lg tracking-tight text-zinc-50"
          >
            {site.shortName}
            <span className="sr-only">{site.name}</span>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {site.nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                aria-current={active === item.id ? "location" : undefined}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[13px] tracking-wide transition-colors focus-visible:ring-2 focus-visible:ring-sky-300/50 focus-visible:outline-none",
                  active === item.id
                    ? "bg-white/8 text-zinc-50"
                    : "text-zinc-400 hover:text-zinc-100"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon-sm"
              nativeButton={false}
              render={<a href={site.links.resume} />}
              aria-label="Resume"
              className="text-zinc-300"
            >
              <FileText className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              nativeButton={false}
              render={<a href={site.links.github} target="_blank" rel="noopener noreferrer" />}
              aria-label="GitHub"
              className="text-zinc-300"
            >
              <GitHubIcon className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              nativeButton={false}
              render={
                <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" />
              }
              aria-label="LinkedIn"
              className="text-zinc-300"
            >
              <LinkedInIcon className="size-4" />
            </Button>
            <Button
              size="sm"
              className="hidden rounded-full px-3 lg:inline-flex"
              nativeButton={false}
              render={<a href={site.ctas.startProject.href} />}
            >
              {site.ctas.startProject.label}
            </Button>

            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    aria-label="Open menu"
                  />
                }
              >
                <Menu />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-white/10 bg-zinc-950/95 backdrop-blur-xl"
              >
                <SheetHeader>
                  <SheetTitle>{site.name}</SheetTitle>
                  <SheetDescription>{site.title}</SheetDescription>
                </SheetHeader>
                <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
                  {site.nav.map((item) => (
                    <SheetClose
                      key={item.id}
                      nativeButton={false}
                      render={
                        <a
                          href={item.href}
                          className={cn(
                            "rounded-lg px-3 py-3 text-base",
                            active === item.id
                              ? "bg-white/8 text-zinc-50"
                              : "text-zinc-300"
                          )}
                        />
                      }
                    >
                      {item.label}
                    </SheetClose>
                  ))}
                  <SheetClose
                    nativeButton={false}
                    render={
                      <a
                        href={site.links.resume}
                        className="rounded-lg px-3 py-3 text-base text-zinc-300"
                      />
                    }
                  >
                    Resume
                  </SheetClose>
                  <SheetClose
                    nativeButton={false}
                    render={
                      <a
                        href={site.ctas.startProject.href}
                        className="rounded-lg px-3 py-3 text-base text-zinc-100"
                      />
                    }
                  >
                    {site.ctas.startProject.label}
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <CommandPalette />
    </>
  );
}
