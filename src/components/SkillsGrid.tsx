import { skillGroups } from "../data/skills";
import { Reveal } from "./Reveal";

export function SkillsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group, i) => (
        <Reveal key={group.category} delay={i * 0.05} className="h-full">
          <div className="glass glass-hover h-full p-6">
            <h3 className="text-base font-semibold text-white">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
