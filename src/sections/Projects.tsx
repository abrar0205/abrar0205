import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        eyebrow="Project Portfolio"
        title="Public, hands-on engineering work"
        description="Open-source projects spanning applied machine learning, medical imaging, biomedical signal processing, and data systems. Every card links to its repository."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.06} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
