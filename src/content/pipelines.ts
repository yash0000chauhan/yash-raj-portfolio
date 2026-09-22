export const heroPipeline = [
  {
    id: "user-data",
    label: "USER / DATA",
    short: "DATA",
    detail:
      "The source of truth — people, documents, images, events, and product signals.",
  },
  {
    id: "ai-pipeline",
    label: "AI PIPELINE",
    short: "PIPE",
    detail:
      "Ingestion, cleaning, and orchestration that make raw input usable by models.",
  },
  {
    id: "retrieval",
    label: "RETRIEVAL / VISION / NLP",
    short: "SEE",
    detail:
      "Search, perception, and language understanding before generation starts.",
  },
  {
    id: "llm",
    label: "LLM / MODEL",
    short: "LLM",
    detail:
      "The reasoning or prediction layer — language, vision, or a task-specific model.",
  },
  {
    id: "agent",
    label: "AGENT / AUTOMATION",
    short: "AGENT",
    detail: "Tools, loops, and workflows that turn a model output into an action.",
  },
  {
    id: "production",
    label: "PRODUCTION APP",
    short: "APP",
    detail: "APIs, interfaces, and monitoring — the system people actually use.",
  },
] as const;

export const buildPipeline = [
  {
    id: "data",
    label: "DATA",
    detail:
      "Define the source: documents, images, profiles, events, or product logs. The pipeline is only as honest as this layer.",
  },
  {
    id: "preprocessing",
    label: "PREPROCESSING",
    detail:
      "Clean, normalize, chunk, or enhance. Most downstream failures start here, not in the model.",
  },
  {
    id: "embeddings",
    label: "EMBEDDINGS / VISION / NLP",
    detail:
      "Represent the world in a form a model can search or classify — vectors, features, or tokens.",
  },
  {
    id: "retrieval",
    label: "RETRIEVAL / MODEL",
    detail:
      "Find the right evidence or run the task model. Retrieval quality usually beats a larger generator.",
  },
  {
    id: "llm-agent",
    label: "LLM / AGENT",
    detail:
      "Reason, decide, or act with constraints. Agents get tools; they do not get unlimited freedom.",
  },
  {
    id: "api",
    label: "API",
    detail:
      "Expose the capability as a stable contract — FastAPI, REST, auth, and predictable errors.",
  },
  {
    id: "application",
    label: "APPLICATION",
    detail:
      "Put the system in front of a person: dashboards, products, and operator workflows.",
  },
  {
    id: "monitoring",
    label: "MONITORING",
    detail:
      "Watch latency, failures, and answer quality after launch. A pipeline that cannot be observed is not finished.",
  },
] as const;
