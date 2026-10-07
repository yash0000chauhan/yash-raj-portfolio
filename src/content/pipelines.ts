export const heroPipeline = [
  {
    id: "problem",
    label: "PROBLEM",
    short: "PROB",
    detail: "Name the constraint, the user, and what a working outcome looks like.",
  },
  {
    id: "data",
    label: "DATA",
    short: "DATA",
    detail: "Documents, images, events, or product records — the source the system has to be honest about.",
  },
  {
    id: "model",
    label: "MODEL",
    short: "MODEL",
    detail: "Retrieval, a task model, or an LLM — only where the problem needs one.",
  },
  {
    id: "api",
    label: "API",
    short: "API",
    detail: "A stable contract: FastAPI, REST, predictable errors, and something a frontend can call.",
  },
  {
    id: "product",
    label: "PRODUCT",
    short: "APP",
    detail: "The interface or workflow people actually use, plus the support loop after it ships.",
  },
] as const;

export const buildPipeline = [
  {
    id: "understand",
    label: "UNDERSTAND",
    detail:
      "Clarify the problem, constraints, data, and what done looks like before choosing tools.",
  },
  {
    id: "architecture",
    label: "ARCHITECTURE",
    detail:
      "Choose the system shape — services, data, and where an AI layer belongs — before writing the first endpoint.",
  },
  {
    id: "backend",
    label: "BACKEND / API",
    detail:
      "FastAPI and REST contracts, data models, and the backend other layers integrate with.",
  },
  {
    id: "ai-layer",
    label: "AI LAYER",
    detail:
      "RAG, embeddings, models, or agents when the problem needs them — constrained by retrieved context.",
  },
  {
    id: "frontend",
    label: "FRONTEND",
    detail:
      "React surfaces that call the API and make the system usable for a person.",
  },
  {
    id: "test",
    label: "TEST",
    detail:
      "Debug and test the path end to end before calling the work finished.",
  },
  {
    id: "deploy",
    label: "DEPLOY",
    detail:
      "Package and ship with Docker and the deployment steps the environment needs.",
  },
  {
    id: "iterate",
    label: "ITERATE",
    detail:
      "Use failures, monitoring, and production support to tighten the next pass.",
  },
] as const;
