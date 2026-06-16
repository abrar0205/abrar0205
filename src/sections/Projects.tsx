import { otherProjects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        eyebrow="More Work"
        title="Selected projects"
        description="Open-source work across applied ML, medical imaging, signal processing, and cloud data."
      />

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.06} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
