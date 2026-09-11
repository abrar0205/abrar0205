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
  title: "EnterpriseIQ",
  subtitle: "An enterprise knowledge retrieval project exploring how document search, access controls, and source citations can work together in a question-answering API.",
  github: "https://github.com/EnterpriseIQ/enterprise-knowledge-intelligence-platform",
  readmeUrl: "https://github.com/EnterpriseIQ/enterprise-knowledge-intelligence-platform#readme",
  proofChips: [
    "Hybrid vector and keyword retrieval",
    "Role-based document filtering",
    "Source citations and an offline extractive mode",
  ],
  flow: ["Documents", "Hybrid retrieval", "Access filtering", "Answer + citations"],
  stack: ["Python", "FastAPI", "ChromaDB", "BM25", "Docker", "pytest"],
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
    title: "Lower-Limb Prosthetic Control",
    type: "Applied ML · Synthetic data",
    outcome: "A reproducible EMG/IMU pipeline for gait-phase and movement-intent classification, using locally generated signals.",
    proof: ["Sliding-window features and sensor fusion", "Random Forest and PyTorch MLP baselines", "Comparison of single-sensor and fused models"],
    stack: ["Python", "PyTorch", "scikit-learn"],
    github: "https://github.com/abrar0205/lower-limb-prosthetic-control-ml",
  },
  {
    title: "MRI Simulation Lab",
    type: "Academic project · Medical imaging",
    outcome: "Exploring how MRI sequence parameters and k-space sampling affect image contrast and reconstruction.",
    proof: ["Synthetic phantom and signal modelling", "Centered FFT and undersampling masks", "Zero-filled reconstruction and error metrics"],
    stack: ["Python", "NumPy", "FFT"],
    github: "https://github.com/abrar0205/MRI",
  },
  {
    title: "Neuromuscular Fatigue Analysis",
    type: "Group lab project · Biosignals",
    outcome: "Analysis of surface EMG and grip-force recordings across fatigue conditions, comparing dominant and non-dominant hands.",
    proof: ["RMS amplitude and spectral features", "Spatial muscle-activation mapping", "Notebook analysis; raw recordings required"],
    stack: ["Python", "NumPy", "SciPy"],
    github: "https://github.com/abrar0205/neuromuscular-fatigue-analysis",
  },
  {
    title: "Energy Market Intelligence",
    type: "Personal demo · Simulated feeds",
    outcome: "An event-driven market dashboard with a FastAPI backend and React frontend, modelling an AWS-style architecture locally.",
    proof: ["Simulated exchange adapters and event bus", "REST and WebSocket data delivery", "In-browser simulation for static hosting"],
    stack: ["FastAPI", "React", "TypeScript"],
    github: "https://github.com/abrar0205/energymarket",
  },
  {
    title: "Market Price Visualizer",
    type: "Companion demo · Data visualization",
    outcome: "A related energy-market dashboard exploring simulated price feeds, aggregated prices, and historical charts.",
    proof: ["React charting and market-feed presentation", "FastAPI REST and WebSocket interfaces"],
    stack: ["React", "Recharts", "FastAPI"],
    github: "https://github.com/abrar0205/market-price-visualizer",
  },
];
