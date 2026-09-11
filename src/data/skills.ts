export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { category: "AI & retrieval", skills: ["RAG", "CrewAI", "Hybrid retrieval", "ChromaDB", "Azure OpenAI", "Prompt development"] },
  { category: "Backend & messaging", skills: ["Python", "FastAPI", "REST APIs", "Async processing", "RabbitMQ", "Kafka"] },
  { category: "ML & signal analysis", skills: ["PyTorch", "scikit-learn", "NumPy", "Pandas", "SciPy", "FFT"] },
  { category: "Platforms & interfaces", skills: ["AWS", "AWS IoT Core", "Docker", "Git", "React", "TypeScript"] },
];
