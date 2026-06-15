export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "AI & Machine Learning",
    skills: [
      "LLMs & Agentic Systems",
      "RAG & Vector Search",
      "PyTorch",
      "Scikit-Learn",
      "Time-Series Analysis",
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      "Python & FastAPI",
      "Microservices",
      "Kafka & Message Queues",
      "PostgreSQL",
      "System Design",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS (ECS, ECR, S3)",
      "Docker",
      "Terraform",
      "CI/CD Pipelines",
    ],
  },
];
