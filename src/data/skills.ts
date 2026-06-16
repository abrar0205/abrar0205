export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Generative AI",
    skills: [
      "LLM orchestration",
      "RAG",
      "CrewAI agents",
      "ChromaDB",
      "Embeddings",
      "Vector search",
    ],
  },
  {
    category: "Backend & APIs",
    skills: ["Python", "FastAPI", "REST APIs", "Pydantic", "Async", "pytest"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS ECS/ECR/S3", "Docker", "Terraform", "CI/CD", "AWS IoT Core"],
  },
  {
    category: "ML & Data",
    skills: ["PyTorch", "scikit-learn", "Kafka", "Pandas", "NumPy", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["TypeScript", "React", "Next.js"],
  },
];
