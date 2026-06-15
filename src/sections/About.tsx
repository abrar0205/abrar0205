import { profile } from "../data/profile";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

const facts = [
  { value: "M.Sc.", label: "Medical Engineering" },
  { value: "AI & Cloud", label: "Production focus" },
  { value: "Siemens", label: "Energy Integration" },
  { value: "TATA", label: "Motors Backend" },
];

export function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading
        eyebrow="About"
        title="Engineering Profile"
        description="Transforming theoretical models into robust, scalable enterprise systems."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-slate-300">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {facts.map((fact) => (
              <div key={fact.label} className="glass p-6 text-center border border-white/5">
                <p className="text-3xl font-extrabold text-white">{fact.value}</p>
                <p className="mt-2 text-sm font-medium tracking-wide text-slate-400">
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
