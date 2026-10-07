export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  tech: string[];
  architecture?: string[];
  featured?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    id: "pookii",
    role: "Technical Consultant – Full-Stack & AI Developer",
    organization: "Antler — Pookii.io",
    period: "2026–Present",
    featured: true,
    summary:
      "Full-stack and AI development on Pookii.io, an AI pet-tech product. Shipping features across the application, APIs, databases, and AI workflows.",
    highlights: [
      "Build full-stack features on Pookii.io.",
      "Implement and maintain APIs and database work for product flows.",
      "Contribute AI workflows used inside the product.",
    ],
    tech: ["Full-stack", "APIs", "Databases", "AI workflows"],
  },
  {
    id: "numeroeins",
    role: "AI Engineer Intern",
    organization: "NumeroEins",
    period: "Jan 2026 – Jun 2026",
    location: "Pune",
    summary:
      "Built Python backends and REST services around LLMs, RAG, LangChain, embeddings, and vector search, including an end-to-end document question-answering system.",
    highlights: [
      "Implemented Python backends and REST APIs for LLM and RAG workflows.",
      "Worked with LangChain, embeddings, and vector search for retrieval-backed answers.",
      "Debugged and tested FastAPI services used in the QA pipeline.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "REST",
      "LLM",
      "RAG",
      "LangChain",
      "Embeddings",
      "Vector search",
    ],
    architecture: [
      "Upload",
      "Preprocess",
      "Chunk",
      "Embed",
      "Vector search",
      "Retrieval",
      "QA",
      "Answer + Confidence",
    ],
  },
  {
    id: "brandzzy",
    role: "Web Development & Support Intern",
    organization: "Brandzzy SoftTech Pvt. Ltd.",
    period: "Jun 2025 – Aug 2025",
    location: "Remote",
    summary:
      "Production support internship focused on keeping shipped software running: incidents, testing, monitoring, debugging, and deployment.",
    highlights: [
      "Handled production support and incident work on live web applications.",
      "Tested and debugged issues found in monitoring and day-to-day support.",
      "Helped with deployment as part of the support loop.",
    ],
    tech: [
      "Production support",
      "Incidents",
      "Testing",
      "Monitoring",
      "Debugging",
      "Deployment",
    ],
  },
];
