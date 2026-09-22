export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  problem?: string;
  approach?: string;
  architecture: string[];
  technologies: string[];
  implementation?: string;
  results?: string;
  lessons?: string;
  links: ProjectLink[];
  featured?: boolean;
  notes?: string[];
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-question-answering",
    number: "01",
    title: "AI-Powered Question Answering System",
    category: "GenAI / RAG",
    featured: true,
    summary:
      "A retrieval-augmented question answering system that processes documents, embeds chunks, searches a vector index, and returns an answer with retrieved context.",
    problem:
      "Answering questions from unstructured documents requires more than keyword search. The system needed to ingest documents, retrieve relevant passages, and produce a grounded answer instead of unconstrained generation.",
    approach:
      "A classic RAG pipeline: preprocess and chunk documents, embed them, retrieve with vector similarity, then pass the evidence to a QA reader. The internship implementation used Sentence Transformers, Hugging Face models, and FAISS or ChromaDB, with TF-IDF and cosine similarity as complementary retrieval signals.",
    architecture: [
      "Documents",
      "Processing",
      "Embeddings",
      "Vector Search",
      "Retrieval",
      "QA Model",
      "Answer",
    ],
    technologies: [
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
    implementation:
      "Documents are uploaded, cleaned, and split into chunks. Each chunk is embedded and stored in a vector index. A query is embedded, nearest neighbors are retrieved, and a QA model reads the evidence to produce an answer with a confidence signal.",
    results:
      "Delivered as an end-to-end document-to-answer system during the NumeroEins internship. A related public implementation is the lightweight document QA pipeline on GitHub.",
    lessons:
      "Chunking, embedding choice, and retrieval quality determine whether the reader has enough evidence. A confidence signal is more useful than an answer that looks fluent.",
    links: [
      {
        label: "Related GitHub repository",
        href: "https://github.com/yash0000chauhan/Lightweight-Document-Question-Answering-RAG-Pipeline-in-Python",
      },
    ],
  },
  {
    slug: "visual-qa-agent",
    number: "02",
    title: "Visual QA Agent",
    category: "AI Agents / Browser Automation",
    featured: true,
    summary:
      "A visual browser agent that reasons over screenshots instead of brittle CSS or XPath selectors, then acts in the page.",
    problem:
      "Selector-based automation breaks when layouts change. The agent needed to perceive the interface the way a person does — from pixels — and decide the next action from what it sees.",
    approach:
      "Playwright drives an interactive browser. Screenshots are sent to vision models. An LLM reasons over the visual state and chooses an action. JavaScript overlays can highlight or instrument the page for the agent loop.",
    architecture: [
      "Interactive browser",
      "Screenshot",
      "AI reasoning",
      "Action",
    ],
    technologies: [
      "Python",
      "Playwright",
      "Vision models",
      "LLM reasoning",
      "JavaScript overlays",
    ],
    implementation:
      "The loop captures the current viewport, runs visual perception and language reasoning, then executes the selected browser action. Perception is screenshot-first rather than DOM-selector-first.",
    results:
      "A working visual QA loop for browser interaction. No public usage metrics are claimed.",
    lessons:
      "Visual state is more stable than selectors, but action quality still depends on screenshot framing, overlay context, and how tightly the model is constrained.",
    links: [],
  },
  {
    slug: "retinal-disease-detection",
    number: "03",
    title: "Retinal Disease Detection",
    category: "Computer Vision / Deep Learning",
    featured: true,
    summary:
      "A transfer-learning CNN for retinal image classification, with CLAHE preprocessing and Grad-CAM explanations.",
    problem:
      "Retinal images are hard to inspect consistently. The project needed a classification pipeline with visual explanations, not a black-box score.",
    approach:
      "ResNet50 with transfer learning, CLAHE contrast enhancement, OpenCV preprocessing, and Grad-CAM so predictions can be inspected against image regions.",
    architecture: [
      "Image",
      "Preprocessing",
      "CNN",
      "Classification",
      "Grad-CAM",
    ],
    technologies: [
      "ResNet50",
      "CNN",
      "Transfer Learning",
      "CLAHE",
      "Grad-CAM",
      "OpenCV",
    ],
    implementation:
      "Images are preprocessed, passed through a fine-tuned ResNet50 classifier, and explained with Grad-CAM heatmaps over the regions that influenced the prediction.",
    results:
      "Reported project result: 92% recall. This is a project metric, not a medical claim, diagnosis, or clinical validation.",
    lessons:
      "Preprocessing and class balance matter as much as the backbone. Grad-CAM is useful for sanity-checking what the model used — not a substitute for clinical review.",
    notes: [
      "The 92% recall figure is a reported project result, not a medical or diagnostic claim.",
    ],
    links: [],
  },
  {
    slug: "ai-candidate-ranking",
    number: "04",
    title: "AI Candidate Ranking System",
    category: "AI / Ranking",
    featured: true,
    summary:
      "A ranking system designed to score and order a large candidate pool — 100K+ profiles — from raw profiles through feature extraction to ranked results.",
    problem:
      "Keyword filters miss skill depth and over-weight exact phrase matches. The system needed a structured path from profiles to a ranked shortlist.",
    approach:
      "Profiles are parsed, features are extracted, and candidates are scored then ranked. The public repository combines semantic retrieval, hybrid scoring, and optional LLM re-ranking.",
    architecture: [
      "Profiles",
      "Feature Extraction",
      "Scoring",
      "Ranking",
      "Results",
    ],
    technologies: [
      "Python",
      "Sentence Transformers",
      "FAISS",
      "RAG",
      "Hybrid scoring",
      "LLM re-ranking",
    ],
    implementation:
      "Candidate profiles are normalized and embedded. A retriever surfaces likely matches, a scorer combines signals, and a ranker produces an ordered result list for review.",
    results:
      "Public repository with a documented ranking pipeline. No hiring-outcome or production-traffic metrics are claimed here.",
    lessons:
      "Ranking quality depends on feature design and how scores are combined. Explainable scores are more useful to a reviewer than a single opaque number.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yash0000chauhan/AI-Based-Candidate-Ranking-System",
      },
    ],
  },
  {
    slug: "dpdpa-compliance-backend",
    number: "05",
    title: "DPDPA Compliance Backend",
    category: "Backend / Privacy Engineering",
    featured: true,
    summary:
      "A FastAPI and React system for consent, DSARs, incidents, processor and vendor tracking, audit logs, and an operator dashboard.",
    problem:
      "Privacy operations need a structured backend for consent, data-subject requests, incidents, and vendor records — not a spreadsheet trail.",
    approach:
      "A REST backend in FastAPI with a React dashboard. Core objects include consent, DSARs, incidents, processor/vendor records, and audit logs.",
    architecture: [
      "REST API",
      "Consent",
      "DSAR",
      "Incidents",
      "Vendor tracking",
      "Audit logs",
      "Dashboard",
    ],
    technologies: ["FastAPI", "Python", "React", "Database", "REST"],
    implementation:
      "Domain endpoints model consent, requests, incidents, and processor relationships. The dashboard reads those records for operators. Audit logs keep a trace of changes.",
    results:
      "A working backend and dashboard for privacy-operations workflows. This is engineering work, not a legal-compliance certification.",
    lessons:
      "Auditability and clear data models matter more than extra UI chrome. Legal interpretation stays with counsel — the software only records and routes work.",
    notes: [
      "This project does not guarantee legal compliance with DPDPA or any other regulation.",
    ],
    links: [],
  },
  {
    slug: "llm-finetuning-mini-gpt",
    number: "06",
    title: "LLM Fine-Tuning / Mini-GPT",
    category: "LLM Engineering",
    featured: true,
    summary:
      "A fine-tuning path from a custom dataset through LoRA/PEFT adapters, evaluation, and a retrieval-backed deployment option.",
    problem:
      "A general model is a weak fit when the task or domain language is specific. The work needed a lightweight adaptation path rather than full-model training.",
    approach:
      "Prepare a custom dataset, tokenize it, fine-tune with LoRA and PEFT, evaluate the adapter, and optionally pair the model with FAISS-backed RAG for deployment.",
    architecture: [
      "Dataset",
      "Tokenization",
      "Fine-Tuning",
      "LoRA Adapter",
      "Evaluation",
      "Deployment",
    ],
    technologies: ["LoRA", "PEFT", "Custom dataset", "Fine-tuning", "RAG", "FAISS"],
    implementation:
      "Training data is tokenized and used to train a LoRA adapter. Evaluation checks whether the adapter improved the target behavior. Deployment can serve the adapter alone or with a FAISS retrieval layer.",
    results:
      "An adapter-based fine-tuning and evaluation path. No benchmark leaderboard claims are made here.",
    lessons:
      "Data quality and evaluation design decide whether fine-tuning is worth it. Adapters keep iteration cheaper than full fine-tunes.",
    links: [],
  },
  {
    slug: "marketez",
    number: "07",
    title: "MarketEZ",
    category: "AI / E-commerce / Influencer",
    featured: true,
    placeholder: true,
    summary:
      "An AI, e-commerce, and influencer product. Further case-study details are not published here yet.",
    architecture: [],
    technologies: ["AI", "E-commerce", "Influencer"],
    links: [],
    notes: [
      "Add verified MarketEZ details in this content file when they are ready to publish. Do not invent clients, metrics, or stack.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
