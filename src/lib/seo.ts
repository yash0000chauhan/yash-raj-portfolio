import { site, siteUrl } from "@/content/site";

export function absoluteUrl(path = "") {
  if (!path) return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    description: site.description,
    url: siteUrl,
    sameAs: [site.links.github, site.links.linkedin],
    knowsAbout: [
      "Generative AI",
      "Retrieval Augmented Generation",
      "AI Agents",
      "Computer Vision",
      "Document AI",
      "Automation",
      "LLM Engineering",
    ],
  };
}
