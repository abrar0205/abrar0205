export const systemDesign = {
  title: "How I Think About Shipping AI Tools",
  scenario: "Internal AI assistant for document-heavy business workflows.",
  architecture: [
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
  principles: [
    "Start from real user pain points",
    "Keep human-in-the-loop review for sensitive decisions",
    "Use retrieval grounding instead of unsupported generation",
    "Track latency, failure rate, adoption, and output quality",
    "Add role-based access control and auditability",
    "Move from prototype → pilot → production with measurable impact",
  ],
};
