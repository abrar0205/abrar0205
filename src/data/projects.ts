export interface Project {
  title: string;
  github: string;
  type: string;
  impact: string;
  description: string;
  highlights: string[];
  stack: string[];
  whyItMatters?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Enterprise Knowledge Intelligence Platform",
    github: "https://github.com/EnterpriseIQ/enterprise-knowledge-intelligence-platform",
    type: "Enterprise Platform",
    impact: "Secure Enterprise RAG",
    featured: true,
    description:
      "A secure RAG assistant for enterprise knowledge. LangGraph agentic retrieval with hybrid search and cross-encoder reranking, answers grounded in cited sources, and role-based access enforced from query to response.",
    highlights: [
      "Hybrid retrieval (dense vectors + BM25)",
      "Cross-encoder reranking",
      "Cite-or-refuse grounding with confidence",
      "Role-based access + audit logging",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "ChromaDB", "LLMs"],
    whyItMatters:
      "RAG is easy to demo and hard to make safe. This build is the version that takes access control and grounding seriously.",
  },
  {
    title: "Lower-Limb Prosthetic Control ML",
    github: "https://github.com/abrar0205/lower-limb-prosthetic-control-ml",
    type: "Public ML Project",
    impact: "End-to-end ML pipeline",
    description:
      "An end-to-end ML workflow on multimodal EMG and IMU time-series for movement prediction, gait segmentation, and user-intent recognition.",
    highlights: [
      "Synthetic EMG/IMU data generation and sliding-window preprocessing",
      "Feature extraction with a Random Forest baseline",
      "PyTorch sequence models for temporal prediction",
      "EMG-only, IMU-only, and multimodal fusion comparison",
      "Evaluation: accuracy, macro F1, NRMSD, temporal consistency, noise robustness",
    ],
    stack: ["Python", "PyTorch", "scikit-learn", "NumPy", "Pandas"],
    whyItMatters:
      "My fullest public ML build — data prep, modelling, and an evaluation harness, not just a notebook.",
  },
  {
    title: "MRI Pulse Sequence Simulation Lab",
    github: "https://github.com/abrar0205/MRI",
    type: "Medical Imaging",
    impact: "Signal & reconstruction",
    description:
      "Python project for MRI sequence concepts, signal modelling, k-space encoding, undersampling, and reconstruction.",
    highlights: [
      "GRE / FLASH, Spin Echo, RARE, and bSSFP signal concepts",
      "Magnetization contrast modelling",
      "Centered FFT / inverse FFT k-space utilities",
      "Cartesian and radial-style sampling masks",
      "Zero-filled reconstruction and error metrics",
    ],
    stack: ["Python", "NumPy", "FFT", "Signal Modelling"],
    whyItMatters:
      "Built to understand MRI at the signal level — how acquisition and k-space actually become an image.",
  },
  {
    title: "Neuromuscular Fatigue Analysis",
    github: "https://github.com/abrar0205/neuromuscular-fatigue-analysis",
    type: "Biomedical Signal Processing",
    impact: "Experimental analysis",
    description:
      "Time-series analysis of HD-sEMG and force-sensor data from neuromuscular fatigue experiments.",
    highlights: [
      "EMG and force-sensor preprocessing",
      "RMS and FFT-based spectral analysis",
      "Fatigue-related feature extraction",
      "Subject-level variability analysis",
    ],
    stack: ["Python", "NumPy", "SciPy", "FFT"],
    whyItMatters:
      "Real lab signals, with all the noise and per-subject variability that comes with them.",
  },
  {
    title: "Energy Market Intelligence",
    github: "https://github.com/abrar0205/energymarket",
    type: "Architecture / Demo",
    impact: "Cloud system design",
    description:
      "A design-and-demo project for ingesting, processing, and presenting energy-market data.",
    highlights: [
      "Cloud architecture design",
      "Backend processing and data-flow modelling",
      "User-facing analytics output",
    ],
    stack: ["System Design", "AWS", "Data Pipelines", "APIs"],
    whyItMatters:
      "Where I work through the cloud and data-flow design before writing much code.",
  },
  {
    title: "Market Price Visualizer",
    github: "https://github.com/abrar0205/market-price-visualizer",
    type: "Data Visualization",
    impact: "Insight delivery",
    description:
      "A focused visualization for exploring market-price movements and trends.",
    highlights: [
      "Interactive price exploration",
      "Trend presentation",
      "Readable, user-facing charts",
    ],
    stack: ["Python", "Pandas", "Data Visualization"],
    whyItMatters:
      "A small, sharp build: make price movements easy to read at a glance.",
  },
];
