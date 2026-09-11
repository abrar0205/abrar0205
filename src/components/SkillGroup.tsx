import type { SkillGroup as Group } from "../data/skills";
export function SkillGroup({ group }: { group: Group }) {
  return <div className="skill-group"><h3>{group.category}</h3><ul>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>;
}
