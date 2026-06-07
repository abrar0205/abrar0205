export const profile = {
  name: "Abrar Assan Mohamed",
  positioning:
    "Generative AI · LLM Workflow Automation · Backend Engineering · Cloud Deployment · Applied ML",
  location: "Germany",
  headline: "Abrar Assan Mohamed",
  subheadline:
    "Generative AI · LLM Workflow Automation · Backend Engineering · Cloud Deployment",
  intro:
    "I build AI-powered workflow tools that turn complex business and technical processes into structured, reliable software systems.",
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
  // Four-second value props shown on the first screen.
  valueProps: [
    {
      title: "Generative AI systems",
      detail: "LLM workflows, RAG, and multi-agent orchestration in production.",
    },
    {
      title: "Backend & cloud delivery",
      detail: "FastAPI services shipped on Docker, AWS, and Terraform.",
    },
    {
      title: "Public ML projects",
      detail: "Multimodal time-series ML with rigorous evaluation.",
    },
    {
      title: "Automotive / IoT backend",
      detail: "Telemetry, MQTT, and Kafka pipelines at vehicle scale.",
    },
  ],
  about: [
    "I am a Master's student in Medical Engineering — Medical Image and Data Processing at Friedrich-Alexander-Universität Erlangen-Nürnberg, with professional experience in Generative AI workflow automation, backend engineering, cloud deployment, connected-vehicle platforms, and Python-based data processing.",
    "Currently, I work as an IT & Digital Platforms Engineer at Siemens Energy, contributing to internal GenAI workflow systems involving FastAPI services, LLM orchestration, document intelligence, semantic retrieval, agentic workflows, async processing, frontend/API integration, and AWS-based deployment.",
    "Previously, I worked at TATA ELXSI on connected-vehicle and IoT backend platforms for TATA Motors, building Python microservices, REST APIs, AWS IoT Core/MQTT communication, Kafka streaming workflows, telemetry pipelines, and validation workflows.",
  ],
};

export type Profile = typeof profile;
