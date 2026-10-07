import { about } from "@/content/about";
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
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: about.education.school,
    },
    sameAs: [site.links.github, site.links.linkedin],
    knowsAbout: [
      "Software Engineering",
      "Full-stack web applications",
      "Backend APIs",
      "Generative AI",
      "Retrieval Augmented Generation",
      "AI Agents",
      "Computer Vision",
      "Document AI",
      "Automation",
    ],
  };
}
