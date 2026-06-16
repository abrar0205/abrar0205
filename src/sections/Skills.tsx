import { SectionHeading } from "../components/SectionHeading";
import { SkillsGrid } from "../components/SkillsGrid";

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionHeading eyebrow="Skills" title="Technical Toolkit" />
      <div className="mt-8">
        <SkillsGrid />
      </div>
    </section>
  );
}
