import { experiences } from "../data/experience";
import { ExperienceCard } from "../components/ExperienceCard";
import { SectionHeading } from "../components/SectionHeading";
export function Experience() {
  return <section id="experience" className="experience-section section-pad" aria-labelledby="experience-title"><div className="section-shell">
    <SectionHeading eyebrow="02 / INDUSTRY EXPERIENCE" title="Software in the real world." id="experience-title" description="Experience across energy and automotive, with a consistent focus on services, data, and reliable workflows." />
    <div className="experience-list">{experiences.map(experience => <ExperienceCard key={experience.company} experience={experience} />)}</div>
    <p className="section-note">Professional work is described at a high level. Employer code and internal materials stay private.</p>
  </div></section>;
}
