export interface Experience {
  title: string;
  label: string;
  description: string;
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
      "Built backend and workflow components for an internal GenAI platform supporting document-heavy engineering and business workflows.",
    bullets: [
      "Developed FastAPI services for document ingestion, information extraction, semantic search, content generation, workflow synchronization, and health monitoring.",
      "Owned LLM workflow orchestration across 5 major workflows connecting document ingestion, RAG, structured output creation, DOCX generation, and real-time backend status notifications.",
      "Implemented CrewAI-based multi-agent execution with 17 specialized agents for technical analysis, commercial content generation, pricing support, validation, risk assessment, and structured proposal creation.",
      "Built configurable prompt pipelines and dynamic agent-persona components.",
      "Integrated ChromaDB, embeddings, vector search, RabbitMQ messaging, async jobs, pytest validation, and AWS deployment workflows.",
      "Supported full-stack delivery with TypeScript, React, Next.js, Docker, AWS CodeBuild, ECR, ECS, S3, Terraform, and GitHub-triggered workflows.",
    ],
    flowTitle: "Architecture flow",
    flow: [
      "Documents",
      "Extraction",
      "Embeddings / ChromaDB",
      "RAG",
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
      "PyMuPDF",
      "Unstructured",
      "TypeScript",
      "React",
      "Next.js",
      "Docker",
      "AWS ECS",
      "ECR",
      "CodeBuild",
      "S3",
      "Terraform",
    ],
  },
  {
    title: "Connected Vehicle Device Management Platform",
    label: "Professional Project · Automotive Backend · TATA ELXSI / TATA Motors",
    description:
      "Built backend components for a connected-vehicle platform handling telemetry, device-state synchronization, and distributed data flow.",
    bullets: [
      "Developed Python microservices for vehicle onboarding, telemetry ingestion, device-state handling, and backend integration.",
      "Implemented AWS IoT Core and MQTT workflows for vehicle-to-cloud messaging and near real-time telemetry exchange.",
      "Managed device shadow interactions to synchronize cloud-side vehicle states with connected assets.",
      "Designed REST APIs for device registration, telemetry access, status retrieval, and backend integration.",
      "Built Kafka-based streaming workflows and data transformation pipelines for high-volume sensor and event data.",
      "Supported release readiness through JMeter API testing, unit testing, debugging, SonarQube checks, and validation.",
    ],
    impact: "Improved streaming throughput by 15–20%.",
    flowTitle: "Data flow",
    flow: [
      "Vehicle Data",
      "MQTT / AWS IoT Core",
      "Python Microservices",
      "Kafka Pipelines",
      "REST APIs",
      "Platform Users / Monitoring",
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
