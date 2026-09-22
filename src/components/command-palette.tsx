"use client";

import { Briefcase, FolderGit2, Mail, Sparkles, User } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { site } from "@/content/site";

function goTo(href: string) {
  const hash = href.includes("#") ? `#${href.split("#")[1]}` : "";
  if (hash && (href.startsWith("/#") || href.startsWith("#"))) {
    if (window.location.pathname !== "/") {
      window.location.assign(href.startsWith("/") ? href : `/${href}`);
      return;
    }
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  window.open(href, "_blank", "noopener,noreferrer");
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const run = (href: string) => {
    setOpen(false);
    window.setTimeout(() => goTo(href), 80);
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Jump to a section"
      description="Navigate the portfolio or open a profile."
    >
      <CommandInput placeholder="Search sections, projects, or links…" />
      <CommandList>
        <CommandEmpty>No match. Try a section name.</CommandEmpty>
        <CommandGroup heading="Sections">
          {site.nav.map((item) => (
            <CommandItem
              key={item.id}
              value={item.label}
              onSelect={() => run(item.href)}
            >
              {item.id === "about" ? (
                <User />
              ) : item.id === "projects" ? (
                <FolderGit2 />
              ) : item.id === "experience" ? (
                <Briefcase />
              ) : item.id === "contact" ? (
                <Mail />
              ) : (
                <Sparkles />
              )}
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Links">
          <CommandItem value="GitHub" onSelect={() => run(site.links.github)}>
            <GitHubIcon className="size-4" />
            GitHub
          </CommandItem>
          <CommandItem
            value="LinkedIn"
            onSelect={() => run(site.links.linkedin)}
          >
            <LinkedInIcon className="size-4" />
            LinkedIn
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
