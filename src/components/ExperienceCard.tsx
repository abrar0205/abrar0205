import type { Experience } from "../data/experience";
import { CheckIcon } from "./icons";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="glass glass-hover flex h-full flex-col p-7">
      <h3 className="text-xl font-bold text-white">{experience.company}</h3>
      <p className="mt-1 text-sm text-accent-soft">{experience.role}</p>

      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        {experience.summary}
      </p>

      <ul className="mt-5 space-y-2.5">
        {experience.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-3 text-sm leading-snug text-slate-300"
          >
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
        {experience.stack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
