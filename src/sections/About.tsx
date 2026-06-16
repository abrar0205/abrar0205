import { profile } from "../data/profile";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading eyebrow="About" title="Engineering Profile" />

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-4 text-lg leading-relaxed text-slate-200">
            {profile.about.lines.map((line) => (
              <p key={line.slice(0, 24)}>{line}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-3">
            {profile.about.stats.map((stat) => (
              <div key={stat.label} className="glass p-4">
                <p className="text-base font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
