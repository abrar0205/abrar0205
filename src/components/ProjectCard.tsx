import type { Project } from "../data/projects";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  const featured = project.featured;

  return (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer noopener"
      className={`glass glass-hover group flex h-full flex-col p-6 ${
        featured ? "border-accent/30 bg-accent/[0.05]" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip">{project.type}</span>
          <span className="chip border-accent-cyan/25 bg-accent-cyan/10 text-accent-cyan">
            {project.impact}
          </span>
          {featured && (
            <span className="chip border-accent/30 bg-accent/15 text-accent-soft">
              Featured
            </span>
          )}
        </div>
        <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-slate-500 transition-colors group-hover:text-accent-soft" />
      </div>

      <h3 className="mt-4 text-xl font-semibold text-white transition-colors group-hover:text-accent-soft">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">
        {project.description}
      </p>

      <ul className="mt-4 space-y-1.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm leading-snug text-slate-400">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {project.whyItMatters && (
        <p className="mt-4 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2 text-xs leading-relaxed text-slate-300">
          <span className="font-semibold text-slate-200">Why it matters: </span>
          {project.whyItMatters}
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-2 pt-5 text-sm font-medium text-slate-200">
        <GitHubIcon className="h-4 w-4" />
        <span className="group-hover:text-accent-soft">View repository</span>
      </div>
    </a>
  );
}
