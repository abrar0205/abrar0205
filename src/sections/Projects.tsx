import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        eyebrow="Projects"
        title="Public Project Portfolio"
        description="A GenAI platform plus public work across applied ML, medical imaging, signal processing, and cloud data systems. Every card links to its repo."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            delay={(i % 3) * 0.06}
            className={`h-full ${project.featured ? "sm:col-span-2" : ""}`}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
