export interface Experience {
  company: string;
  role: string;
  summary: string;
  bullets: string[];
  stack: string[];
}

export const experiences: Experience[] = [
  {
    company: "Siemens Energy",
    role: "IT & Digital Platforms Engineer · GenAI workflows (anonymized)",
    summary:
      "Built backend and orchestration components for internal GenAI workflows: FastAPI services, document extraction, semantic retrieval, CrewAI agents, async processing, and AWS deployment.",
    bullets: [
      "5 LLM workflows from retrieval to structured, reviewable output",
      "17 CrewAI agents for analysis, drafting, and validation",
      "Shipped on AWS (ECS/ECR) with Docker and Terraform",
    ],
    stack: ["Python", "FastAPI", "CrewAI", "RAG", "ChromaDB", "AWS"],
  },
  {
    company: "TATA ELXSI",
    role: "Connected-vehicle backend · TATA Motors",
    summary:
      "Built Python microservices and streaming backend components for connected-vehicle platforms using AWS IoT Core, MQTT, Kafka, REST APIs, and validation tooling.",
    bullets: [
      "Microservices for telemetry ingestion and device-state sync",
      "Vehicle-to-cloud messaging over MQTT + AWS IoT Core",
      "Kafka streaming pipelines; ~15–20% throughput gain",
    ],
    stack: ["Python", "AWS IoT Core", "MQTT", "Kafka", "REST APIs"],
  },
];
