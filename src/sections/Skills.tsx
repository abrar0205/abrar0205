import { SkillsGrid } from "../components/SkillsGrid";
import { SectionHeading } from "../components/SectionHeading";
export function Skills() {
  return <section id="skills" className="section-shell skills-section" aria-labelledby="skills-title"><SectionHeading eyebrow="04 / TOOLKIT" title="The tools follow the problem." id="skills-title" description="Used across professional experience and independent projects. The work above shows the context." /><SkillsGrid /></section>;
}
