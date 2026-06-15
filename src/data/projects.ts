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
    title: "Enterprise Knowledge Intelligence",
    github: "https://github.com/EnterpriseIQ/enterprise-knowledge-intelligence-platform",
    type: "Platform",
    impact: "Secure RAG Ecosystem",
    featured: true,
    description: "Production-grade agentic RAG platform integrating enterprise data sources with robust RBAC, cross-encoder reranking, and hybrid retrieval capabilities.",
    highlights: [
      "Role-Based Access Control enforcing strict data governance.",
      "Hybrid dense + BM25 retrieval for precision querying.",
      "Explainable outputs with verifiable citations."
    ],
    stack: ["Python", "FastAPI", "ChromaDB", "LangGraph"],
  },
  {
    title: "Prosthetic Control ML",
    github: "https://github.com/abrar0205/lower-limb-prosthetic-control-ml",
    type: "Applied ML",
    impact: "Multimodal Fusion",
    featured: true,
    description: "End-to-end machine learning pipeline predicting intent and movement from EMG and IMU time-series sensor data.",
    highlights: [
      "Multimodal sensor fusion combining EMG and IMU streams.",
      "PyTorch-based sequence modeling and rigorous temporal evaluation.",
    ],
    stack: ["PyTorch", "Python", "Scikit-Learn"],
  },
  {
    title: "MRI Pulse Sequence Lab",
    github: "https://github.com/abrar0205/MRI",
    type: "Medical Imaging",
    impact: "Signal Reconstruction",
    description: "Simulation tool for analyzing MRI sequences, tracking signal modeling, k-space encoding, and image reconstruction.",
    highlights: [
      "Centered FFT and advanced k-space utilities.",
      "Cartesian and radial sampling methodologies.",
    ],
    stack: ["Python", "NumPy", "FFT"],
  },
  {
    title: "Neuromuscular Fatigue Analysis",
    github: "https://github.com/abrar0205/neuromuscular-fatigue-analysis",
    type: "Signal Processing",
    impact: "Data Insights",
    description: "Advanced time-series analysis of high-density sEMG and force sensor data to detect neuromuscular fatigue markers.",
    highlights: [
      "Spectral analysis leveraging RMS and FFT.",
      "Extraction of complex fatigue-related features from raw signals.",
    ],
    stack: ["SciPy", "Python", "NumPy"],
  },
  {
    title: "Energy Market Intelligence",
    github: "https://github.com/abrar0205/energymarket",
    type: "System Design",
    impact: "Cloud Data Pipelines",
    description: "Cloud-native architecture designed to process, model, and serve real-time energy market analytics.",
    highlights: [
      "Scalable backend design mapping data flows.",
      "End-to-end AWS integration for high availability.",
    ],
    stack: ["AWS", "Architecture", "Data Pipelines"],
  },
  {
    title: "Market Price Visualizer",
    github: "https://github.com/abrar0205/market-price-visualizer",
    type: "Data Visualization",
    impact: "Insight Delivery",
    description: "Interactive dashboard surfacing complex market price trends into actionable visual intelligence.",
    highlights: [
      "Intuitive exploration of large datasets.",
      "Clear presentation of actionable trends.",
    ],
    stack: ["Python", "Pandas"],
  },
];
