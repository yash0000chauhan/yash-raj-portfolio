export const skillGroups = [
  {
    id: "languages",
    title: "Languages",
    items: ["Python", "SQL", "JavaScript"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["React"],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["FastAPI", "REST APIs", "API design", "Frontend integration"],
  },
  {
    id: "db-retrieval",
    title: "DB / Retrieval",
    items: ["SQL", "FAISS", "ChromaDB", "Embeddings", "Vector search"],
  },
  {
    id: "devops",
    title: "DevOps",
    items: ["Docker", "Git", "Linux/macOS", "Testing", "Debugging", "Deployment"],
  },
  {
    id: "cloud",
    title: "Cloud concepts",
    items: ["Cloud", "DevOps", "Distributed systems", "Open source"],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    items: [
      "Generative AI",
      "RAG",
      "LangChain",
      "LLMs",
      "Embeddings",
      "LoRA / PEFT",
      "Computer Vision",
      "Document AI",
      "AI Agents",
    ],
  },
] as const;

export const certifications = [
  {
    name: "Generative AI Foundations",
    year: "2025",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera",
    year: "2024",
  },
  {
    name: "Certified Blockchain Developer",
    year: "2024",
  },
] as const;
