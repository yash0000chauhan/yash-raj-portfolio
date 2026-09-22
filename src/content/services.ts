export const servicesIntro = {
  eyebrow: "Services",
  title: "Need an AI system built?",
  description:
    "I design and implement AI systems that can be deployed — retrieval, agents, vision, document workflows, and the backends that hold them together. Scope is agreed from the problem, not from a canned package. No unrealistic delivery or accuracy guarantees.",
};

export const services = [
  {
    id: "generative-ai",
    title: "Generative AI",
    description:
      "Application-layer GenAI: prompts, grounded generation, and product surfaces that use language models as a component — not a demo.",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description:
      "Agent loops that perceive, reason, and act — including browser and tool-using agents with explicit constraints.",
  },
  {
    id: "document-ai",
    title: "Document AI",
    description:
      "Ingestion, OCR, chunking, retrieval, and question answering over documents and operational records.",
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description:
      "Classification, inspection, and explanation pipelines using CNNs, transfer learning, and visual reasoning.",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Workflows that connect models to the systems around them — APIs, browsers, queues, and operator dashboards.",
  },
  {
    id: "backend-engineering",
    title: "Backend Engineering",
    description:
      "FastAPI and REST services, data models, audit trails, and the APIs a product actually runs on.",
  },
  {
    id: "llm-engineering",
    title: "LLM Engineering",
    description:
      "RAG, embeddings, evaluation, LoRA/PEFT adaptation, and the glue between a model and a production app.",
  },
] as const;
