import type { Project } from "../data/projects";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer noopener"
      className="glass glass-hover group flex h-full flex-col p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="chip">{project.type}</span>
        <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-slate-500 transition-colors group-hover:text-accent-soft" />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white transition-colors group-hover:text-accent-soft">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">
        {project.outcome}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.proof.map((item) => (
          <span
            key={item}
            className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[11px] text-slate-400"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-2 pt-5 text-xs font-medium text-slate-400">
        <GitHubIcon className="h-4 w-4" />
        <span className="group-hover:text-accent-soft">{project.stack.join(" · ")}</span>
      </div>
    </a>
  );
}
