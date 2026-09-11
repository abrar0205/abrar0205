import { experiences } from "../data/experience";
import { ExperienceCard } from "../components/ExperienceCard";
import { SectionHeading } from "../components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-pad section-rule">
      <SectionHeading eyebrow="02 / INDUSTRY EXPERIENCE" title="Engineering in practice." />
      <div className="experience-list">{experiences.map(experience => <ExperienceCard key={experience.company} experience={experience} />)}</div>
      <p className="section-note">Professional work is described at a high level. Employer code and internal materials are not shared here.</p>
    </section>
  );
}
