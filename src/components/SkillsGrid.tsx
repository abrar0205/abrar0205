import { skillGroups } from "../data/skills";
import { SkillGroup } from "./SkillGroup";
export function SkillsGrid() {
  return <div className="skills-grid">{skillGroups.map(group => <SkillGroup key={group.category} group={group} />)}</div>;
}
