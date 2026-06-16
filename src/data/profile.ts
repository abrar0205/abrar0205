export const profile = {
  name: "Abrar Assan Mohamed",
  positioning:
    "Generative AI · LLM Workflow Automation · Backend Engineering · Cloud Deployment · Applied ML",
  location: "Germany",
  headline: "Abrar Assan Mohamed",
  subheadline:
    "Generative AI · Backend Platforms · Cloud-Deployed ML Workflows",
  intro:
    "I work on the backend and LLM-orchestration side of GenAI tools — taking slow, document-heavy workflows and making them structured, traceable, and dependable.",
  // Compact credibility strip shown directly under the hero statement.
  credibility: [
    "GenAI Platform",
    "5 LLM Workflows",
    "17 AI Agents",
    "AWS Deployment",
    "Connected Vehicle Backend",
    "Public ML Projects",
  ],
  links: {
    github: "https://github.com/abrar0205",
    linkedin: "https://linkedin.com/in/abrar-a-m",
    email: "abraram.cnr@gmail.com",
  },
  techStrip: [
    "Python",
    "FastAPI",
    "LLM Workflows",
    "RAG",
    "CrewAI",
    "AWS",
    "Docker",
    "TypeScript",
    "React",
    "PyTorch",
  ],
  about: [
    "I'm a Master's student in Medical Engineering (Medical Image and Data Processing) at FAU Erlangen-Nürnberg. Alongside the degree, I've spent two industry roles building GenAI workflow tools, backend services, and connected-vehicle data platforms.",
    "At Siemens Energy I'm an IT & Digital Platforms Engineer on an internal GenAI platform — building FastAPI services, orchestrating LLM and multi-agent workflows over document retrieval, and shipping the result on AWS.",
    "Before that, at TATA ELXSI, I built backend services for TATA Motors' connected-vehicle platform: Python microservices, MQTT and AWS IoT Core messaging, and Kafka pipelines moving telemetry from vehicles to the cloud.",
  ],
};

export type Profile = typeof profile;
