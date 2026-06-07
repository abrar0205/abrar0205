import { skillGroups } from "../data/skills";
import { Reveal } from "./Reveal";
import { SkillGroup } from "./SkillGroup";

export function SkillsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group, i) => (
        <Reveal key={group.category} delay={(i % 3) * 0.05} className="h-full">
          <SkillGroup group={group} />
        </Reveal>
      ))}
    </div>
  );
}
