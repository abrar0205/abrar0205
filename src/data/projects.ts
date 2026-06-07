export interface Project {
  title: string;
  github: string;
  type: string;
  description: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: "Lower-Limb Prosthetic Control ML",
    github: "https://github.com/abrar0205/lower-limb-prosthetic-control-ml",
    type: "Public ML Project",
    description:
      "End-to-end ML workflow for multimodal EMG and IMU time-series data focused on movement prediction, gait segmentation, and user-intent recognition.",
    highlights: [
      "Synthetic EMG/IMU data generation",
      "Sliding-window preprocessing",
      "Feature extraction",
      "Random Forest baseline",
      "PyTorch sequence models",
      "EMG-only, IMU-only, and multimodal fusion comparison",
      "Evaluation with accuracy, macro F1, NRMSD, temporal consistency, and robustness under noise",
    ],
  },
  {
    title: "MRI Pulse Sequence Simulation Lab",
    github: "https://github.com/abrar0205/MRI",
    type: "Academic Medical Imaging Project",
    description:
      "Python project for MRI sequence concepts, signal modelling, k-space encoding, undersampling, and reconstruction.",
    highlights: [
      "GRE / FLASH, Spin Echo, RARE-style, and bSSFP signal concepts",
      "Magnetization contrast modelling",
      "Centered FFT / inverse FFT k-space utilities",
      "Cartesian and radial-style sampling masks",
      "Zero-filled reconstruction and error metrics",
    ],
  },
  {
    title: "Neuromuscular Fatigue Analysis",
    github: "https://github.com/abrar0205/neuromuscular-fatigue-analysis",
    type: "Biomedical Signal Processing Project",
    description:
      "Python-based time-series analysis of HD-sEMG and force-sensor data from neuromuscular fatigue experiments.",
    highlights: [
      "EMG and force-sensor preprocessing",
      "RMS and FFT-based spectral analysis",
      "Fatigue-related feature extraction",
      "Subject-level variability analysis",
      "Robustness and signal behavior interpretation",
    ],
  },
  {
    title: "Energy Market Intelligence",
    github: "https://github.com/abrar0205/energymarket",
    type: "Architecture / Demo Project",
    description:
      "System design and demo project focused on structuring, processing, and presenting operational or energy-market data.",
    highlights: [
      "Architecture design",
      "Backend processing",
      "Data flow modelling",
      "User-facing output",
      "System design communication",
    ],
  },
  {
    title: "Market Price Visualizer",
    github: "https://github.com/abrar0205/market-price-visualizer",
    type: "Data Visualization Project",
    description:
      "Data visualization project for exploring market price behavior and presenting trends in a readable format.",
    highlights: [
      "Interactive price exploration",
      "Trend presentation",
      "Readable, user-facing charts",
    ],
  },
];
