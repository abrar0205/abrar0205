import type { SkillGroup as Group } from "../data/skills";
export function SkillGroup({ group }: { group: Group }) {
  return <div className="skill-group"><h3>{group.category}</h3><p>{group.context}</p><ul>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>;
}
