import type { Project } from "../data/projects";
import { ArrowUpRightIcon } from "./icons";
export function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card">
    <p className="eyebrow">{project.type}</p>
    <h3><a href={project.github} target="_blank" rel="noopener noreferrer">{project.title}<ArrowUpRightIcon aria-hidden="true" /></a></h3>
    <p className="project-description">{project.outcome}</p>
    <p className="project-proof">{project.proof.join(" · ")}</p>
    <div className="tags">{project.stack.map(tech => <span className="chip" key={tech}>{tech}</span>)}</div>
  </article>;
}
