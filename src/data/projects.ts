export interface FeaturedProject {
  title: string;
  subtitle: string;
  github: string;
  readmeUrl: string;
  proofChips: string[];
  flow: string[];
  stack: string[];
}

export const featuredProject: FeaturedProject = {
  title: "Enterprise Knowledge Intelligence Platform",
  subtitle:
    "Secure enterprise RAG platform with hybrid retrieval, RBAC enforcement, grounded citations, confidence scoring, FastAPI APIs, Docker, CI, and audit traceability.",
  github:
    "https://github.com/EnterpriseIQ/enterprise-knowledge-intelligence-platform",
  readmeUrl:
    "https://github.com/EnterpriseIQ/enterprise-knowledge-intelligence-platform#readme",
  proofChips: [
    "Hybrid retrieval: ChromaDB + BM25",
    "RBAC enforced before generation",
    "Cited answers + confidence",
    "FastAPI, Docker, CI",
    "Offline fallback / no API key required",
  ],
  flow: [
    "PDF/CSV/SQL/JSON",
    "Ingestion",
    "Chunking",
    "Hybrid Retrieval",
    "RBAC",
    "Grounded Answer",
    "Citations + Audit",
  ],
  stack: ["Python", "FastAPI", "ChromaDB", "BM25", "Docker", "CI", "pytest"],
};

export interface Project {
  title: string;
  type: string;
  outcome: string;
  proof: string[];
  stack: string[];
  github: string;
}

export const otherProjects: Project[] = [
  {
    title: "Lower-Limb Prosthetic Control ML",
    type: "Applied ML",
    outcome:
      "Multimodal EMG/IMU pipeline for movement prediction and intent recognition.",
    proof: ["PyTorch sequence models", "EMG/IMU fusion", "Evaluation harness"],
    stack: ["Python", "PyTorch", "scikit-learn"],
    github: "https://github.com/abrar0205/lower-limb-prosthetic-control-ml",
  },
  {
    title: "MRI Pulse Sequence Simulation Lab",
    type: "Medical Imaging",
    outcome: "Signal modelling, k-space encoding, and reconstruction from scratch.",
    proof: ["k-space FFT utilities", "Sampling masks", "Zero-filled reconstruction"],
    stack: ["Python", "NumPy", "FFT"],
    github: "https://github.com/abrar0205/MRI",
  },
  {
    title: "Neuromuscular Fatigue Analysis",
    type: "Signal Processing",
    outcome: "Time-series analysis of HD-sEMG and force-sensor fatigue data.",
    proof: ["RMS + FFT analysis", "Feature extraction", "Subject-level variability"],
    stack: ["Python", "NumPy", "SciPy"],
    github: "https://github.com/abrar0205/neuromuscular-fatigue-analysis",
  },
  {
    title: "Energy Market Intelligence",
    type: "Cloud / Data",
    outcome:
      "AWS serverless-style design for commodity price data and analytics.",
    proof: ["Adapter-based ingestion", "Processing + API layers", "Time-series storage"],
    stack: ["AWS", "Data Pipelines", "APIs"],
    github: "https://github.com/abrar0205/energymarket",
  },
  {
    title: "Market Price Visualizer",
    type: "Data Viz",
    outcome: "Readable visualization of market-price movements and trends.",
    proof: ["Interactive exploration", "Trend presentation"],
    stack: ["Python", "Pandas"],
    github: "https://github.com/abrar0205/market-price-visualizer",
  },
];
