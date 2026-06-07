import { experiences } from "../data/experience";
import { ExperienceCard } from "../components/ExperienceCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <SectionHeading
        eyebrow="Experience Highlights"
        title="Production systems I've helped build"
        description="Professional work is summarized at a high level and anonymized to respect confidentiality. Each card reflects the engineering scope and architecture I contributed to."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {experiences.map((exp, i) => (
          <Reveal key={exp.title} delay={i * 0.08} className="h-full">
            <ExperienceCard experience={exp} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
