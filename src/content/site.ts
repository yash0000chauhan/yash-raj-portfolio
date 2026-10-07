const DEFAULT_SITE_URL = "https://yash-raj-portfolio.vercel.app";
const DEFAULT_EMAIL = "yash2022raj2026@gmail.com";

function resolveSiteUrl(raw: string | undefined) {
  const candidate = raw?.trim().replace(/\/$/, "") ?? "";

  try {
    if (!candidate) {
      throw new Error("empty site url");
    }

    const parsed = new URL(candidate);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      throw new Error("unsupported site url protocol");
    }

    const path = parsed.pathname === "/" ? "" : parsed.pathname.replace(/\/$/, "");
    return `${parsed.origin}${path}`;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

function resolvePublicEmail(raw: string | undefined) {
  const candidate = raw?.trim() ?? "";
  return candidate || DEFAULT_EMAIL;
}

export const siteUrl = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const site = {
  name: "Yash Raj Chauhan",
  shortName: "YRC",
  title: "Software Engineer / AI Engineer",
  secondary: "Full-stack web apps • Backend APIs • REST • Automation • AI applications",
  headline: "Software Engineer building AI systems from idea to production.",
  tagline: "Pune, India",
  description:
    "Software Engineer with hands-on work on full-stack web apps, backend APIs, REST, automation, and AI applications. I work across backend, frontend integration, API design, debugging, testing, deployment, and production support.",
  location: "Pune, India",
  email: resolvePublicEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  links: {
    github: "https://github.com/yash0000chauhan",
    githubHandle: "yash0000chauhan",
    linkedin: "https://linkedin.com/in/yashrajchauhan04",
    resume: "/resume",
  },
  ctas: {
    work: { label: "View Projects", href: "/#projects" },
    resume: { label: "Download Resume", href: "/resume" },
    contact: { label: "Contact Me", href: "/#contact" },
    startProject: { label: "Let's Work Together", href: "/#contact" },
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
    title: "Yash Raj Chauhan — Software Engineer / AI Engineer",
    titleTemplate: "%s · Yash Raj Chauhan",
    description:
      "Software Engineer and AI Engineer in Pune building full-stack web apps, backend APIs, automation, and AI systems — from problem to production.",
    keywords: [
      "Yash Raj Chauhan",
      "Software Engineer",
      "AI Engineer",
      "Full-stack",
      "FastAPI",
      "React",
      "RAG",
      "Python",
      "Pune",
    ],
  },
} as const;

export const contactForm = {
  headline: "Have a problem worth building?",
  description:
    "Write with the problem, the constraints, and how you want to work. You can also email me directly or continue on LinkedIn or GitHub.",
  projectTypes: [
    "Full-stack application",
    "Backend / API",
    "AI Application",
    "RAG",
    "AI Agent",
    "Computer Vision",
    "Document AI",
    "Automation",
    "Other",
  ],
  budgetRanges: [
    "Exploring / not sure",
    "Under $2,000",
    "$2,000 – $5,000",
    "$5,000 – $10,000",
    "$10,000+",
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
