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
    role: "Working student · AI workflows & backend engineering",
    summary: "Contributing to an internal platform that supports document-heavy bidding and engineering workflows.",
    bullets: [
      "Develop and modify FastAPI endpoints, CrewAI agents, tasks, and prompts for RFQ, offer, and pricing workflows.",
      "Work on document extraction and generation, hybrid retrieval, and communication between messaging and vector-database components.",
      "Debug background processing and LLM outputs, adding validation and fallback logic.",
    ],
    stack: ["Python", "FastAPI", "CrewAI", "RAG", "RabbitMQ", "Azure OpenAI"],
  },
  {
    company: "TATA ELXSI",
    role: "Connected-vehicle backend · Automotive",
    summary: "Python backend and data-processing work for connected-vehicle platforms.",
    bullets: [
      "Built microservices and REST APIs for telemetry ingestion and device-state synchronization.",
      "Worked with vehicle-to-cloud messaging using AWS IoT Core and MQTT.",
      "Contributed to Kafka streaming pipelines and backend validation workflows.",
    ],
    stack: ["Python", "REST APIs", "AWS IoT Core", "MQTT", "Kafka"],
  },
];
