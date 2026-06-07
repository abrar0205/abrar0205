import { profile } from "../data/profile";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

const facts = [
  { value: "GenAI", label: "Workflow automation focus" },
  { value: "2", label: "Industry engineering roles" },
  { value: "Cloud", label: "AWS-based deployment" },
  { value: "M.Sc.", label: "Medical Engineering, FAU" },
];

export function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading
        eyebrow="About"
        title="Engineering Profile"
        description="Builder at the intersection of generative AI, backend platforms, and cloud delivery."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-slate-300">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {facts.map((fact) => (
              <div key={fact.label} className="glass p-5">
                <p className="text-2xl font-bold text-white">{fact.value}</p>
                <p className="mt-1 text-xs leading-snug text-slate-400">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
