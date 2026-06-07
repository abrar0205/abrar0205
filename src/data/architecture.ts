export interface SystemArchitecture {
  id: string;
  title: string;
  subtitle: string;
  flowTitle: string;
  flow: string[];
  principlesTitle: string;
  principles: string[];
}

export const systemArchitectures: SystemArchitecture[] = [
  {
    id: "ai-workflow",
    title: "AI Workflow Tool Architecture",
    subtitle: "Internal AI assistant for document-heavy business workflows.",
    flowTitle: "End-to-end flow",
    flow: [
      "User",
      "Web UI",
      "Backend API",
      "Workflow Orchestrator",
      "LLM Layer",
      "Retrieval Layer",
      "Vector Store",
      "Structured Output",
      "Monitoring",
      "Cloud Deployment",
    ],
    principlesTitle: "Engineering principles",
    principles: [
      "Start from real user pain points",
      "Use retrieval grounding instead of unsupported generation",
      "Keep human-in-the-loop review for sensitive workflows",
      "Track latency, failure rate, adoption, and output quality",
      "Add role-based access control and auditability",
      "Move from prototype to pilot to production with measurable impact",
    ],
  },
  {
    id: "energy-cloud",
    title: "Energy Market Cloud Architecture",
    subtitle: "Serverless-style pipeline for commodity price analytics.",
    flowTitle: "Processing flow",
    flow: [
      "External data sources",
      "Adapter layer",
      "Processing layer",
      "API layer",
      "Storage",
      "Visualization",
      "Monitoring",
    ],
    principlesTitle: "Design notes",
    principles: [
      "Decouple ingestion from processing with an adapter layer",
      "Favor serverless components for elastic, low-overhead scaling",
      "Keep a clean API boundary between data and the interface",
      "Persist time-series data for trend analysis and replay",
      "Instrument every layer for observability and cost control",
    ],
  },
];

export interface ArchitectureLayer {
  name: string;
  detail: string;
}

export const cloudProposal = {
  title: "Cloud Architecture Proposal — Energy Market Intelligence",
  note: "Architecture proposal for commodity contract price visualization using an AWS serverless-style design.",
  caseStudyUrl:
    "https://github.com/abrar0205/market-price-visualizer/tree/main#energy-market-dashboard",
  repoUrl: "https://github.com/abrar0205/market-price-visualizer",
  layers: [
    {
      name: "External Data Sources / Energy Exchanges",
      detail: "Market feeds and commodity exchange price data.",
    },
    {
      name: "Connector / Adapter Layer",
      detail: "Normalizes and ingests data from heterogeneous sources.",
    },
    {
      name: "AWS Cloud Processing Layer",
      detail: "Serverless processing, transformation, and scheduling.",
    },
    {
      name: "Backend / API Layer",
      detail: "Serves processed data through clean REST endpoints.",
    },
    {
      name: "Storage / Database Layer",
      detail: "Structured persistence for time-series and reference data.",
    },
    {
      name: "Visualization / User Interface",
      detail: "User-facing dashboards for price trends and insight.",
    },
    {
      name: "Monitoring / Logging",
      detail: "Observability across ingestion, processing, and delivery.",
    },
  ] satisfies ArchitectureLayer[],
};
