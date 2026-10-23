export interface SkillGroup {
  category: string; context: string; skills: string[];
}
export const skillGroups: SkillGroup[] = [
  { category: "Backend & data", context: "Services, messaging, and data flows", skills: ["Python", "FastAPI", "REST APIs", "SQL", "Kafka", "RabbitMQ"] },
  { category: "Applied AI & ML", context: "Retrieval, evaluation, and useful baselines", skills: ["RAG", "CrewAI", "ChromaDB", "PyTorch", "scikit-learn", "NumPy"] },
  { category: "Connected systems", context: "Vehicle-to-cloud and observability", skills: ["AWS IoT Core", "MQTT", "Telemetry", "Trace analysis", "Signal processing"] },
  { category: "Delivery & interfaces", context: "From a reproducible build to a usable tool", skills: ["Docker", "Git", "GitHub Actions", "pytest", "React", "TypeScript"] },
];
