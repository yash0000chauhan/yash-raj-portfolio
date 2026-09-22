export const site = {
  name: "Yash Raj Chauhan",
  shortName: "YRC",
  title: "AI Engineer",
  secondary:
    "Generative AI • RAG • AI Agents • Computer Vision • Document AI • Automation",
  headline: "I build AI systems that turn complex problems into working products.",
  tagline: "Building intelligent systems from idea to production.",
  description:
    "AI Engineer focused on Generative AI, intelligent automation, RAG, computer vision and production-ready AI applications. I work across the full stack — from model and data pipelines to APIs, automation and user-facing products.",
  location: "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  links: {
    github: "https://github.com/yash0000chauhan",
    githubHandle: "yash0000chauhan",
    linkedin: "https://linkedin.com/in/yashrajchauhan04",
  },
  ctas: {
    work: { label: "View My Work", href: "/#projects" },
    contact: { label: "Let's Work Together", href: "/#contact" },
    startProject: { label: "Start a Project", href: "/#contact" },
  },
  nav: [
    { id: "home", label: "Home", href: "/#home" },
    { id: "about", label: "About", href: "/#about" },
    { id: "experience", label: "Experience", href: "/#experience" },
    { id: "projects", label: "Projects", href: "/#projects" },
    { id: "skills", label: "Skills", href: "/#skills" },
    { id: "services", label: "Services", href: "/#services" },
    { id: "contact", label: "Contact", href: "/#contact" },
  ],
  seo: {
    title: "Yash Raj Chauhan — AI Engineer",
    titleTemplate: "%s · Yash Raj Chauhan",
    description:
      "AI Engineer building production-ready Generative AI, RAG, computer vision, document AI, and automation systems — from model pipelines to APIs and products.",
    keywords: [
      "Yash Raj Chauhan",
      "AI Engineer",
      "Generative AI",
      "RAG",
      "AI Agents",
      "Computer Vision",
      "Document AI",
      "Automation",
      "LLM Engineering",
    ],
  },
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://yashrajchauhan.dev";

export const contactForm = {
  headline: "Have an AI problem worth solving?",
  description:
    "Share the problem, the constraints, and how you want to work together. I will reply with a practical next step — or you can reach me directly on LinkedIn.",
  projectTypes: [
    "AI Application",
    "RAG",
    "AI Agent",
    "Computer Vision",
    "Document AI",
    "Automation",
    "Backend",
    "Other",
  ],
  budgetRanges: [
    "Exploring / not sure",
    "Under $2,000",
    "$2,000 – $5,000",
    "$5,000 – $10,000",
    "$10,000+",
    "Equity / partnership discussion",
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
