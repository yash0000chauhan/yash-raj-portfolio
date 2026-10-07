export const servicesIntro = {
  eyebrow: "Services",
  title: "Engineering I can contribute.",
  description:
    "Secondary to the work above. I take on full-stack, backend, automation, and AI application work when the problem is clear. Scope comes from the constraints — not a packaged offering.",
};

export const services = [
  {
    id: "fullstack",
    title: "Full-stack web apps",
    description:
      "Feature work across backend and frontend integration — APIs, data, and the interface that uses them.",
  },
  {
    id: "backend-engineering",
    title: "Backend and REST APIs",
    description:
      "Python and FastAPI services, API design, and the debugging and testing that keep them stable.",
  },
  {
    id: "ai-applications",
    title: "AI applications",
    description:
      "RAG, LLM integrations, document AI, and agent loops wired into a real application — not a notebook demo.",
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Workflows that connect models and APIs to the systems around them, including operator-facing paths.",
  },
  {
    id: "computer-vision",
    title: "Computer vision",
    description:
      "Classification and explanation pipelines when the problem is visual — including the retinal detection project.",
  },
  {
    id: "production-support",
    title: "Deployment and production support",
    description:
      "Testing, monitoring, debugging, deployment, and incident work after a system is live.",
  },
] as const;
