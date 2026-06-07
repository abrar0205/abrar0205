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
      "Built backend and workflow components for an internal GenAI platform supporting document-heavy business workflows.",
    highlights: [
      "5 LLM workflows",
      "17 CrewAI agents",
      "RAG + ChromaDB",
      "FastAPI backend",
      "React / Next.js",
      "Docker + AWS + Terraform",
    ],
    bullets: [
      "Developed FastAPI services for document ingestion, extraction, semantic search, content generation, and health monitoring.",
      "Owned LLM workflow orchestration across 5 workflows linking ingestion, RAG, structured output, DOCX generation, and real-time status notifications.",
      "Implemented CrewAI multi-agent execution with 17 specialized agents for analysis, content generation, pricing support, validation, and risk assessment.",
      "Integrated ChromaDB, embeddings, vector search, RabbitMQ messaging, async jobs, and pytest validation.",
      "Supported full-stack delivery with TypeScript, React, Next.js, Docker, AWS (CodeBuild, ECR, ECS, S3), and Terraform.",
    ],
    flowTitle: "Architecture flow",
    flow: [
      "Documents",
      "Extraction",
      "Embeddings / ChromaDB",
      "RAG",
      "CrewAI Agents",
      "Structured Output",
      "UI Status Tracking",
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
      "Built backend components for a connected-vehicle platform handling telemetry, device-state synchronization, and distributed data flow.",
    highlights: [
      "Python microservices",
      "AWS IoT Core",
      "MQTT",
      "Kafka",
      "REST APIs",
      "JMeter / SonarQube",
      "15–20% throughput",
    ],
    bullets: [
      "Developed Python microservices for vehicle onboarding, telemetry ingestion, and device-state handling.",
      "Implemented AWS IoT Core and MQTT workflows for vehicle-to-cloud messaging and near real-time telemetry.",
      "Managed device shadow interactions to synchronize cloud-side vehicle states with connected assets.",
      "Designed REST APIs for device registration, telemetry access, and status retrieval.",
      "Built Kafka-based streaming workflows and supported release readiness with JMeter, unit testing, and SonarQube.",
    ],
    impact: "Improved streaming throughput by 15–20%.",
    flowTitle: "Data flow",
    flow: [
      "Vehicle Data",
      "MQTT / AWS IoT Core",
      "Python Microservices",
      "Kafka Pipelines",
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
