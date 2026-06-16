import { experiences } from "../data/experience";
import { ExperienceCard } from "../components/ExperienceCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <SectionHeading eyebrow="Experience" title="Where I've shipped" />

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.08} className="h-full">
            <ExperienceCard experience={exp} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
