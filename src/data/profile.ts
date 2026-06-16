export const profile = {
  name: "Abrar Assan Mohamed",
  headline:
    "AI Backend Engineer building secure RAG, LLM workflows, and cloud-deployed platforms.",
  intro:
    "I turn document-heavy and data-heavy workflows into structured, traceable AI systems using Python, FastAPI, retrieval, agents, and AWS.",
  proofPills: ["Secure RAG", "FastAPI + AWS", "LLM Workflow Automation"],
  links: {
    github: "https://github.com/abrar0205",
    linkedin: "https://linkedin.com/in/abrar-a-m",
    email: "abraram.cnr@gmail.com",
  },
  about: {
    lines: [
      "I build production-minded AI and backend systems — secure RAG, LLM workflows, and the services that run them.",
      "Currently at Siemens Energy, previously at TATA ELXSI, and an M.Sc. in Medical Engineering at FAU Erlangen-Nürnberg.",
    ],
    stats: [
      { value: "Siemens Energy", label: "GenAI platform engineering" },
      { value: "TATA ELXSI", label: "Connected-vehicle backend" },
      { value: "FAU", label: "M.Sc. Medical Engineering" },
      { value: "AWS", label: "Docker · ECS · Terraform" },
    ],
  },
};

export type Profile = typeof profile;
