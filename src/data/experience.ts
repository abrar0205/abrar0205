export interface Experience {
  title: string;
  label: string;
  description: string;
  highlights: string[];
  bullets: string[];
  flowTitle: string;
  flow: string[];
  stack: string[];
  impact?: string;
}

export const experiences: Experience[] = [
  {
    title: "AI Workflow Automation Platform",
    label: "Professional Project · Anonymized · Siemens Energy",
    description:
      "Backend and orchestration for an internal GenAI platform that takes business documents from ingestion to generated, reviewable output.",
    highlights: [
      "5 LLM workflows",
      "17 CrewAI agents",
      "RAG + ChromaDB",
      "FastAPI backend",
      "AWS deployment",
    ],
    bullets: [
      "Built the FastAPI services behind document ingestion, extraction, semantic search, and content generation.",
      "Orchestrated five LLM workflows from retrieval (RAG) through structured output and DOCX generation, with live status pushed back to the UI.",
      "Ran multi-agent execution in CrewAI — 17 agents split across analysis, drafting, pricing support, validation, and risk.",
      "Wired up ChromaDB and vector search, RabbitMQ messaging, and async jobs, with pytest on the paths that mattered.",
      "Helped ship it end to end: React/Next.js frontend, Docker images, and AWS (ECS, ECR, CodeBuild, S3) via Terraform.",
    ],
    flowTitle: "Architecture flow",
    flow: [
      "Documents",
      "Extraction",
      "ChromaDB / RAG",
      "CrewAI Agents",
      "Structured Output",
      "UI Tracking",
      "Cloud Deployment",
    ],
    stack: [
      "Python",
      "FastAPI",
      "CrewAI",
      "RAG",
      "ChromaDB",
      "RabbitMQ",
      "TypeScript",
      "React",
      "Next.js",
      "Docker",
      "AWS",
      "Terraform",
    ],
  },
  {
    title: "Connected Vehicle Device Management Platform",
    label: "Professional Project · Automotive Backend · TATA ELXSI / TATA Motors",
    description:
      "Backend for a connected-vehicle platform — moving telemetry from vehicles to the cloud and keeping device state in sync.",
    highlights: [
      "15–20% throughput improvement",
      "AWS IoT Core",
      "MQTT",
      "Kafka",
      "Python microservices",
    ],
    bullets: [
      "Built Python microservices for vehicle onboarding, telemetry ingestion, and device-state handling.",
      "Connected vehicles to the cloud over MQTT and AWS IoT Core for near real-time telemetry.",
      "Used device shadows to keep cloud-side state in sync with the physical assets.",
      "Designed REST APIs for device registration, telemetry access, and status.",
      "Built Kafka streaming pipelines and hardened releases with JMeter, unit tests, and SonarQube.",
    ],
    impact: "Improved streaming throughput by 15–20%.",
    flowTitle: "Data flow",
    flow: [
      "Vehicle Data",
      "MQTT / AWS IoT Core",
      "Microservices",
      "Kafka",
      "REST APIs",
      "Platform Users",
    ],
    stack: [
      "Python",
      "REST APIs",
      "Microservices",
      "AWS IoT Core",
      "MQTT",
      "Kafka",
      "JMeter",
      "SonarQube",
    ],
  },
];
