import type { SkillGroup as SkillGroupData } from "../data/skills";

export function SkillGroup({ group }: { group: SkillGroupData }) {
  return (
    <div className="glass glass-hover h-full p-6">
      <h3 className="text-base font-semibold text-white">{group.category}</h3>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {group.skills.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
