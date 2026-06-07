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
    title: "Lower-Limb Prosthetic Control ML",
    github: "https://github.com/abrar0205/lower-limb-prosthetic-control-ml",
    type: "Public ML Project",
    impact: "End-to-end ML pipeline",
    featured: true,
    description:
      "End-to-end ML workflow for multimodal EMG and IMU time-series focused on movement prediction, gait segmentation, and user-intent recognition.",
    highlights: [
      "Synthetic EMG/IMU data generation and sliding-window preprocessing",
      "Feature extraction with a Random Forest baseline",
      "PyTorch sequence models for temporal prediction",
      "EMG-only, IMU-only, and multimodal fusion comparison",
      "Evaluation: accuracy, macro F1, NRMSD, temporal consistency, noise robustness",
    ],
    stack: ["Python", "PyTorch", "scikit-learn", "NumPy", "Pandas"],
    whyItMatters:
      "The closest public proxy to applied ML work — a complete, evaluation-driven pipeline on real multimodal sensor data.",
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
      "Signal-level understanding of acquisition and reconstruction, not just model usage.",
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
      "Working with messy, real experimental signals and reasoning about variability.",
  },
  {
    title: "Energy Market Intelligence",
    github: "https://github.com/abrar0205/energymarket",
    type: "Architecture / Demo",
    impact: "Cloud system design",
    description:
      "System design and demo project for structuring, processing, and presenting energy-market data.",
    highlights: [
      "Cloud architecture design",
      "Backend processing and data-flow modelling",
      "User-facing analytics output",
    ],
    stack: ["System Design", "AWS", "Data Pipelines", "APIs"],
    whyItMatters:
      "Demonstrates cloud and data-flow system thinking end to end.",
  },
  {
    title: "Market Price Visualizer",
    github: "https://github.com/abrar0205/market-price-visualizer",
    type: "Data Visualization",
    impact: "Insight delivery",
    description:
      "Data visualization project for exploring market price behavior and presenting trends clearly.",
    highlights: [
      "Interactive price exploration",
      "Trend presentation",
      "Readable, user-facing charts",
    ],
    stack: ["Python", "Pandas", "Data Visualization"],
    whyItMatters:
      "Turns raw market data into readable, decision-ready insight.",
  },
];
