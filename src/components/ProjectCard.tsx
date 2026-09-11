import type { Project } from "../data/projects";
import { ArrowUpRightIcon } from "./icons";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className="project-card">
      <div className="project-card-top"><p className="project-type">{project.type}</p><span className="project-number" aria-hidden="true">{String(index + 2).padStart(2, "0")}</span></div>
      <h3><a href={project.github} target="_blank" rel="noopener noreferrer">{project.title}<ArrowUpRightIcon className="h-5 w-5 shrink-0" /></a></h3>
      <p className="project-description">{project.outcome}</p>
      <ul className="project-details">{project.proof.map(item => <li key={item}>{item}</li>)}</ul>
      <div className="tags">{project.stack.map(tech => <span className="chip" key={tech}>{tech}</span>)}</div>
      <a className="project-source" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source on GitHub`}>Explore source <ArrowUpRightIcon className="h-4 w-4" /></a>
    </article>
  );
}
