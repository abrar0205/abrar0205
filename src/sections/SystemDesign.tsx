import { systemDesign } from "../data/systemDesign";
import { ArchitectureFlow } from "../components/ArchitectureFlow";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { CheckIcon } from "../components/icons";

export function SystemDesign() {
  return (
    <section id="approach" className="section-pad">
      <SectionHeading
        eyebrow="System Design"
        title={systemDesign.title}
        description="How I reason about taking an AI tool from idea to dependable, production-grade software."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="glass flex h-full flex-col p-7 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
              Reference scenario
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              {systemDesign.scenario}
            </p>
            <div className="mt-8">
              <ArchitectureFlow
                title="End-to-end architecture"
                steps={systemDesign.architecture}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <div className="glass h-full p-7 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
              Key engineering principles
            </p>
            <ul className="mt-4 space-y-3.5">
              {systemDesign.principles.map((principle) => (
                <li
                  key={principle}
                  className="flex gap-3 text-sm leading-relaxed text-slate-300"
                >
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
