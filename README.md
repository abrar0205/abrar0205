<div align="center">

# Abrar Assan Mohamed

### Generative AI · LLM Workflow Automation · Backend Engineering · Cloud Deployment · Applied ML

Building practical Generative AI systems, backend platforms, and cloud-deployed ML workflows.

**[→ View the live portfolio](https://abrar0205.github.io/abrar0205/)**

[![Portfolio](https://img.shields.io/badge/Portfolio-Live_Site-5b8cff?style=for-the-badge)](https://abrar0205.github.io/abrar0205/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Abrar_A_M-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/abrar-a-m)
[![Email](https://img.shields.io/badge/Email-abraram.cnr%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:abraram.cnr@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-abrar0205-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/abrar0205)

</div>

---

## About

I am a Master's student in **Medical Engineering — Medical Image and Data Processing** at Friedrich-Alexander-Universität Erlangen-Nürnberg, with professional experience in **Generative AI workflow automation, backend engineering, cloud deployment, connected-vehicle platforms, and Python-based data processing**.

Currently, I work as an **IT & Digital Platforms Engineer at Siemens Energy**, contributing to internal GenAI workflow systems involving FastAPI services, LLM orchestration, document intelligence, semantic retrieval, agentic workflows, async processing, frontend/API integration, and AWS-based deployment.

Previously, I worked at **TATA ELXSI** on connected-vehicle and IoT backend platforms for **TATA Motors**, building Python microservices, REST APIs, AWS IoT Core/MQTT communication, Kafka streaming workflows, telemetry pipelines, and validation workflows.

> Professional work is summarized at a high level and anonymized to respect confidentiality.

---

## This repository

This repo hosts my **personal portfolio website** — a fast, responsive single-page app built with **React + Vite + TypeScript + Tailwind CSS**, deployed to **GitHub Pages**.

Live site: **https://abrar0205.github.io/abrar0205/**

<details>
<summary><b>Developer setup &amp; deployment</b></summary>

### Tech stack

- **React 18** + **TypeScript** — UI and type safety
- **Vite 5** — dev server and production build
- **Tailwind CSS 3** — styling and responsive design
- **Framer Motion** — lightweight scroll and entrance animations

### Project structure

```
.
├── index.html                 # SEO metadata, fonts, root mount
├── vite.config.ts             # base: "/abrar0205/" for project Pages
├── tailwind.config.js         # theme tokens (colors, fonts, animations)
├── public/                    # static assets served as-is
│   ├── favicon.svg
│   ├── .nojekyll              # tells Pages not to run Jekyll
│   ├── Abrar_Assan_Mohamed_Resume.pdf   # placeholder — replace
│   └── Abrar_Tesla_Portfolio.pdf        # placeholder — replace
├── src/
│   ├── main.tsx               # app entry
│   ├── App.tsx                # section composition
│   ├── index.css              # Tailwind layers + design system
│   ├── data/                  # static content (typed)
│   │   ├── profile.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── systemDesign.ts
│   ├── components/            # reusable building blocks
│   │   ├── Navbar.tsx  Footer.tsx  Reveal.tsx  SectionHeading.tsx
│   │   ├── ExperienceCard.tsx  ProjectCard.tsx  SkillsGrid.tsx
│   │   ├── ArchitectureFlow.tsx  icons.tsx
│   └── sections/             # page sections
│       ├── Hero.tsx  About.tsx  Experience.tsx  Projects.tsx
│       ├── Skills.tsx  SystemDesign.tsx  Downloads.tsx  Contact.tsx
└── .github/workflows/deploy.yml   # CI build + Pages deploy
```

### Run locally

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173/abrar0205/)
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build locally
```

### Editing content

All content lives in typed files under `src/data/` — update text, projects, and
skills there without touching components.

To replace the placeholder PDFs, drop the real files into `public/` using the
exact same filenames:

- `public/Abrar_Assan_Mohamed_Resume.pdf`
- `public/Abrar_Tesla_Portfolio.pdf`

### Deploy to GitHub Pages

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`).

1. Push to the `main` branch.
2. In the repository, go to **Settings → Pages** and set **Source** to
   **GitHub Actions** (one-time setup).
3. The workflow builds the site and publishes it. The site is served from
   **https://abrar0205.github.io/abrar0205/**.

The Vite `base` is set to `/abrar0205/` because this is a project repository.
If you ever move the site to a user page repo (`abrar0205.github.io`), change
`base` to `/` in `vite.config.ts`.

</details>

---

## Experience Highlights

### AI Workflow Automation Platform
**Professional Project · Anonymized · Siemens Energy**

Backend and workflow components for an internal GenAI platform supporting document-heavy engineering and business workflows: FastAPI services, LLM workflow orchestration across 5 major workflows, CrewAI multi-agent execution with 17 specialized agents, RAG, ChromaDB, RabbitMQ, async jobs, and full AWS deployment.

**Stack:** Python · FastAPI · CrewAI · RAG · ChromaDB · RabbitMQ · TypeScript · React · Next.js · Docker · AWS ECS/ECR/CodeBuild/S3 · Terraform

### Connected Vehicle Device Management Platform
**Professional Project · Automotive Backend · TATA ELXSI / TATA Motors**

Backend components for a connected-vehicle platform handling telemetry, device-state synchronization, and distributed data flow: Python microservices, AWS IoT Core/MQTT, device shadows, REST APIs, and Kafka streaming pipelines. **Improved streaming throughput by 15–20%.**

**Stack:** Python · REST APIs · Microservices · AWS IoT Core · MQTT · Kafka · JMeter · SonarQube

---

## Selected Projects

| Project | Focus |
| --- | --- |
| [Lower-Limb Prosthetic Control ML](https://github.com/abrar0205/lower-limb-prosthetic-control-ml) | Multimodal EMG/IMU ML — movement prediction, gait segmentation, intent recognition |
| [MRI Pulse Sequence Simulation Lab](https://github.com/abrar0205/MRI) | MRI signal modelling, k-space encoding, undersampling, reconstruction |
| [Neuromuscular Fatigue Analysis](https://github.com/abrar0205/neuromuscular-fatigue-analysis) | HD-sEMG and force-sensor time-series analysis |
| [Energy Market Intelligence](https://github.com/abrar0205/energymarket) | System design and data-flow demo |
| [Market Price Visualizer](https://github.com/abrar0205/market-price-visualizer) | Market price exploration and trend visualization |

---

<div align="center">

Open to internships and working student roles in Generative AI, ML Engineering, AI workflow automation, backend engineering, cloud platforms, and applied data science.

</div>
