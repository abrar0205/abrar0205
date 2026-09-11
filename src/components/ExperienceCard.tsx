import type { Experience } from "../data/experience";
export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="experience-row">
      <div className="experience-company"><h3>{experience.company}</h3><p>{experience.role}</p></div>
      <div className="experience-detail"><p className="experience-summary">{experience.summary}</p><ul>{experience.bullets.map(item => <li key={item}>{item}</li>)}</ul><div className="tags">{experience.stack.map(tech => <span className="chip" key={tech}>{tech}</span>)}</div></div>
    </article>
  );
}
