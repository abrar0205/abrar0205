import { otherProjects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="section-pad projects-section" aria-labelledby="projects-title">
      <div className="projects-heading"><h2 id="projects-title">Imaging, signals & data.</h2><p>Academic work and independent demos</p></div>
      <div className="projects-grid">{otherProjects.map((project, index) => <ProjectCard key={project.github} project={project} index={index} />)}</div>
    </section>
  );
}
