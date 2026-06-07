export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Generative AI & Agentic Systems",
    skills: [
      "LLM workflow orchestration",
      "CrewAI",
      "Agent orchestration",
      "Prompt pipelines",
      "RAG",
      "Semantic retrieval",
      "Embeddings",
      "Vector search",
      "ChromaDB",
      "Document intelligence",
    ],
  },
  {
    category: "Backend & API Engineering",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Microservices",
      "Pydantic",
      "RabbitMQ",
      "Async job processing",
      "pytest",
      "Modular service design",
    ],
  },
  {
    category: "Frontend & Full-Stack Integration",
    skills: [
      "TypeScript",
      "React",
      "Next.js App Router",
      "API integration",
      "Workflow status tracking",
      "User-facing AI workflow integration",
    ],
  },
  {
    category: "Cloud, DevOps & Deployment",
    skills: [
      "Docker",
      "AWS ECS",
      "AWS ECR",
      "AWS CodeBuild",
      "AWS S3",
      "AWS CloudFront",
      "AWS IoT Core",
      "Terraform",
      "CI/CD",
      "GitHub-triggered workflows",
    ],
  },
  {
    category: "Machine Learning & Data Science",
    skills: [
      "PyTorch",
      "scikit-learn",
      "Regression",
      "Classification",
      "CNN/RNN concepts",
      "Model evaluation",
      "Cross-validation",
      "NumPy",
      "Pandas",
      "SciPy",
    ],
  },
  {
    category: "Data Engineering & Analytics",
    skills: [
      "Kafka",
      "Data pipelines",
      "Feature extraction",
      "Statistical analysis",
      "Snowflake",
      "SQL",
    ],
  },
  {
    category: "Signal & Sensor Data Analysis",
    skills: [
      "Multimodal time-series analysis",
      "EMG/IMU data",
      "Signal preprocessing",
      "FFT-based analysis",
      "Pattern identification",
      "Experimental evaluation",
    ],
  },
];
