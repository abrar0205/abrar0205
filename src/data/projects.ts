export type ProjectKind = "ignition" | "enterprise" | "modality";
export interface FeaturedProject {
  id: ProjectKind; title: string; category: string; headline: string;
  description: string; github: string; demo?: string; stack: string[];
  highlights: string[]; problem: string; approach: string; evidence: string; scope: string;
}
export const featuredProjects: FeaturedProject[] = [
  {
    id: "ignition",
    title: "IgnitionTrace",
    category: "Automotive · Observability",
    headline: "Make infotainment faults inspectable.",
    description: "An engineering workbench that connects vehicle signals, app behavior, and evidence—so an unexpected delay becomes a trace you can investigate.",
    github: "https://github.com/abrar0205/ignition-trace",
    stack: ["Python", "TypeScript", "Kotlin", "SQLite"],
    highlights: ["Trace replay & run comparison", "Android app recorder", "CLI regression checks"],
    problem: "An infotainment symptom can span audio focus, frame timing, network calls, and vehicle data. Looking at each stream separately makes the sequence harder to explain.",
    approach: "A versioned trace contract connects a browser replay workbench, a Python analysis engine, and an Android recorder. Findings link back to the events that support them.",
    evidence: "Seeded scenarios, shared Python/TypeScript fixtures, configurable checks, and an exportable evidence report make investigations repeatable. The local archive stores validated recordings in SQLite.",
    scope: "Independent engineering project. Fault scenarios modify synthetic traces; the Android recorder measures its own app and permitted vehicle properties. No OEM or customer data is included.",
  },
  {
    id: "enterprise",
    title: "EnterpriseIQ",
    category: "Applied AI · Backend",
    headline: "Find the answer. Keep the source.",
    description: "A document question-answering API that brings together hybrid retrieval, role-based filtering, and citations, with an offline extractive path.",
    github: "https://github.com/EnterpriseIQ/enterprise-knowledge-intelligence-platform",
    stack: ["Python", "FastAPI", "ChromaDB", "Docker"],
    highlights: ["Vector + keyword search", "Role-based document filtering", "Source-backed answers"],
    problem: "A useful knowledge service needs more than a fluent answer. It needs to retrieve relevant material, respect document access, and show where information came from.",
    approach: "A FastAPI service combines vector search with BM25 keyword retrieval, applies role-based document filters, and returns source citations with answers.",
    evidence: "The repository includes tests and a Docker setup. An offline extractive mode provides a way to explore retrieval without depending on a hosted generation service.",
    scope: "Independent portfolio implementation. Public code and sample documents are separate from professional work and employer systems.",
  },
  {
    id: "modality",
    title: "ModalityOps",
    category: "Data systems · Signal quality",
    headline: "Different devices. One inspectable timeline.",
    description: "A local-first workbench for finding recording gaps, checking signal quality, and estimating clock offset and drift across EEG, audio, and video.",
    github: "https://github.com/abrar0205/modalityops",
    demo: "https://abrar0205.github.io/modalityops/",
    stack: ["Python", "FastAPI", "TypeScript", "Docker"],
    highlights: ["Shared-event clock estimation", "Linked signal-quality timeline", "Reproducible correction reports"],
    problem: "Devices recording the same session can disagree about when events happened. Gaps, clock drift, and poor signal quality can undermine every downstream analysis.",
    approach: "A validated session contract feeds quality checks and a shared-event clock model. The workbench links findings to signal intervals and previews corrections without changing raw recordings.",
    evidence: "Synthetic fault scenarios, a noisy-marker benchmark, tests, and versioned reports make the behavior inspectable. A Python CLI and local API run fresh analyses.",
    scope: "The public demo displays precomputed Python reports from synthetic signals. Fresh analyses run locally. This is acquisition infrastructure, not a clinical interpretation tool.",
  },
];
export const projectFilters = ["All work", "AI & ML", "Data & backend", "Signals"] as const;
export type ProjectFilter = typeof projectFilters[number];
export interface Project {
  title: string; type: string; category: Exclude<ProjectFilter, "All work">;
  outcome: string; proof: string[]; stack: string[]; github: string;
}
export const otherProjects: Project[] = [
  {
    title: "Energy Market Intelligence", type: "Event-driven application", category: "Data & backend",
    outcome: "A FastAPI and React dashboard exploring market-feed ingestion, event processing, and live data delivery.",
    proof: ["Simulated exchange feeds · REST + WebSockets"],
    stack: ["FastAPI", "React", "TypeScript"],
    github: "https://github.com/abrar0205/energymarket",
  },
  {
    title: "Audio–Video Signal Toolkit", type: "Reusable Python package", category: "Signals",
    outcome: "Acoustic features, video quality checks, and missing-data-aware analysis through a Python API and CLI.",
    proof: ["Synthetic audio demo · Local media processing"],
    stack: ["PyAV", "MediaPipe", "Python"],
    github: "https://github.com/abrar0205/multimodal-audio-video-signal-analysis",
  },
  {
    title: "Clinical NLP Benchmark", type: "Model evaluation", category: "AI & ML",
    outcome: "A compact comparison of keyword rules, negation-aware rules, and a local language model for text labeling.",
    proof: ["30 synthetic snippets · Explicit baseline comparisons"],
    stack: ["Python", "Qwen", "Evaluation"],
    github: "https://github.com/abrar0205/clinical-nlp-labeling-benchmark",
  },
  {
    title: "Federated Learning Lab", type: "Reproducible ML experiment", category: "AI & ML",
    outcome: "Comparing FedAvg and FedBN when clients see different visual styles of the same image dataset.",
    proof: ["CIFAR-10 · Five simulated clients · Learning project"],
    stack: ["PyTorch", "Python", "CIFAR-10"],
    github: "https://github.com/abrar0205/federated-learning-feature-heterogeneity",
  },
  {
    title: "Sensor Fusion for Movement", type: "Applied machine learning", category: "Signals",
    outcome: "EMG and IMU feature fusion for gait-phase and movement-intent classification with comparable ML baselines.",
    proof: ["Synthetic signals · Single-sensor vs. fused models"],
    stack: ["scikit-learn", "PyTorch", "NumPy"],
    github: "https://github.com/abrar0205/lower-limb-prosthetic-control-ml",
  },
  {
    title: "MRI Simulation Lab", type: "Imaging & numerical methods", category: "Signals",
    outcome: "Exploring signal models, k-space sampling, and image reconstruction through a reproducible Python simulation.",
    proof: ["Synthetic phantoms · FFT · Reconstruction metrics"],
    stack: ["Python", "NumPy", "FFT"],
    github: "https://github.com/abrar0205/MRI",
  },
];
