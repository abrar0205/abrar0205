import type { Experience } from "../data/experience";
import { ArchitectureFlow } from "./ArchitectureFlow";
import { CheckIcon } from "./icons";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="glass glass-hover flex h-full flex-col p-7 sm:p-8">
      <span className="chip mb-4 self-start border-accent/20 bg-accent/10 text-accent-soft">
        {experience.label}
      </span>

      <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-slate-200">
        {experience.description}
      </p>

      {/* Quick-scan highlight chips */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {experience.highlights.map((h) => (
          <span
            key={h}
            className="rounded-lg border border-accent-cyan/20 bg-accent-cyan/[0.07] px-2.5 py-1 text-xs font-medium text-accent-cyan"
          >
            {h}
          </span>
        ))}
      </div>

      <ul className="mt-6 space-y-2.5">
        {experience.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-3 text-sm leading-relaxed text-slate-300"
          >
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {experience.impact && (
        <p className="mt-6 rounded-xl border border-accent-cyan/20 bg-accent-cyan/5 px-4 py-3 text-sm font-medium text-accent-cyan">
          Impact: {experience.impact}
        </p>
      )}

      <div className="mt-6">
        <ArchitectureFlow title={experience.flowTitle} steps={experience.flow} />
      </div>

      <div className="mt-auto pt-6">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
          Stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {experience.stack.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
