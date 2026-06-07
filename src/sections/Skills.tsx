import { SectionHeading } from "../components/SectionHeading";
import { SkillsGrid } from "../components/SkillsGrid";

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionHeading
        eyebrow="Skills"
        title="Technical toolkit"
        description="Grouped by domain — from generative AI and backend engineering to cloud delivery, applied ML, and sensor-data analysis."
      />
      <div className="mt-12">
        <SkillsGrid />
      </div>
    </section>
  );
}
