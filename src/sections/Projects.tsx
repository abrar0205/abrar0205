import { useState } from "react";
import { otherProjects, projectFilters, type ProjectFilter } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { ArrowUpRightIcon } from "../components/icons";
export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All work");
  const shown = otherProjects.filter(project => filter === "All work" || project.category === filter);
  return <section id="projects" className="section-shell project-archive" aria-labelledby="archive-title">
    <div className="archive-heading"><div><p className="eyebrow">THE PROJECT NOTEBOOK</p><h2 id="archive-title">More ways I build.</h2></div><a className="text-link" href="https://github.com/abrar0205?tab=repositories" target="_blank" rel="noopener noreferrer">All repositories <ArrowUpRightIcon aria-hidden="true" /></a></div>
    <div className="filter-row"><div className="project-filters" role="group" aria-label="Filter additional projects">{projectFilters.map(item =>
      <button key={item} type="button" aria-pressed={filter === item} aria-controls="project-results" onClick={() => setFilter(item)}>{item}</button>
    )}</div><p className="result-count" role="status">{shown.length} projects</p></div>
    <div className="projects-grid" id="project-results">{shown.map(project => <ProjectCard key={project.title} project={project} />)}</div>
  </section>;
}
