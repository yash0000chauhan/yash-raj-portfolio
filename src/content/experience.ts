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
    id: "numeroeins",
    role: "AI Engineering Intern",
    organization: "NumeroEins",
    period: "Jan 2026 – Jun 2026",
    location: "Remote",
    summary:
      "Built an AI-powered question answering system that turns uploaded documents into retrievable context and grounded answers.",
    highlights: [
      "Designed a document-to-answer pipeline for question answering over uploaded material.",
      "Combined embeddings, vector search, and a QA reader so answers include retrieved context and a confidence signal.",
    ],
    tech: [
      "Python",
      "Sentence Transformers",
      "Hugging Face",
      "RAG",
      "Embeddings",
      "FAISS",
      "ChromaDB",
      "TF-IDF",
      "Cosine Similarity",
      "QA Models",
    ],
    architecture: [
      "Document Upload",
      "Preprocessing",
      "Chunking",
      "Embeddings",
      "Vector Search",
      "Retrieval",
      "QA Reader",
      "Answer + Confidence",
    ],
  },
  {
    id: "freelance",
    role: "Freelance AI Engineer / Developer",
    organization: "Project-based",
    period: "Project-based",
    summary:
      "Independent AI engineering across applications, retrieval systems, automation, and backend products. Client names and commercial details are omitted until they can be published.",
    highlights: [
      "AI applications and LLM integrations.",
      "RAG systems, FastAPI services, and automation.",
      "Computer vision, document processing, and OCR.",
      "Dashboards, agents, and API-backed products.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "RAG",
      "LLM integrations",
      "Automation",
      "Computer Vision",
      "Document processing",
      "OCR",
      "Dashboards",
      "AI Agents",
      "APIs",
    ],
  },
  {
    id: "brandzzy",
    role: "Web Development & Support Intern",
    organization: "Brandzzy SoftTech Pvt. Ltd.",
    period: "Internship",
    summary:
      "Worked on web development, application support, debugging, and product support.",
    highlights: [
      "Web and application work alongside product support.",
      "Debugging and day-to-day support for shipped software.",
    ],
    tech: ["Web development", "Application support", "Debugging"],
  },
  {
    id: "equity-partner",
    role: "Equity Partner, AI / Product / Engineering",
    organization: "Antler-related startup work",
    period: "",
    featured: true,
    summary:
      "Contributes to product, AI engineering, architecture, and implementation as an equity partner. Company name, ownership, valuation, and commercial terms are not listed here.",
    highlights: [
      "Product and AI engineering contribution.",
      "Architecture and implementation across the product surface.",
    ],
    tech: ["Product engineering", "AI engineering", "Architecture"],
  },
];
