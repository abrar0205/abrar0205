import { systemArchitectures, cloudProposal } from "../data/architecture";
import { ArchitectureFlow } from "../components/ArchitectureFlow";
import { LayeredArchitecture } from "../components/LayeredArchitecture";
import { CTAButton } from "../components/CTAButton";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ArrowUpRightIcon, CheckIcon, GitHubIcon } from "../components/icons";

export function SystemDesign() {
  return (
    <section id="system-design" className="section-pad">
      <SectionHeading
        eyebrow="System Design"
        title="System Design & Cloud Architecture"
        description="Two architectures I reason about: a production GenAI workflow tool, and a serverless-style cloud pipeline for market analytics."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {systemArchitectures.map((arch, i) => (
          <Reveal key={arch.id} delay={i * 0.1} className="h-full">
            <div className="glass flex h-full flex-col p-7 sm:p-8">
              <h3 className="text-xl font-semibold text-white">{arch.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {arch.subtitle}
              </p>

              <div className="mt-6">
                <ArchitectureFlow title={arch.flowTitle} steps={arch.flow} />
              </div>

              <p className="mt-7 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                {arch.principlesTitle}
              </p>
              <ul className="mt-3 space-y-2.5">
                {arch.principles.map((principle) => (
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
        ))}
      </div>

      {/* Dedicated cloud architecture proposal */}
      <Reveal delay={0.1}>
        <div className="glass mt-6 p-7 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <span className="chip mb-3 border-accent/20 bg-accent/10 text-accent-soft">
                Cloud Architecture Proposal
              </span>
              <h3 className="text-xl font-semibold text-white">
                {cloudProposal.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {cloudProposal.note}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton
                href={cloudProposal.caseStudyUrl}
                external
                variant="primary"
                icon={<ArrowUpRightIcon className="h-4 w-4" />}
              >
                View Architecture Case Study
              </CTAButton>
              <CTAButton
                href={cloudProposal.repoUrl}
                external
                icon={<GitHubIcon className="h-4 w-4" />}
              >
                View Repository
              </CTAButton>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <LayeredArchitecture layers={cloudProposal.layers} />
            <div className="flex flex-col justify-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                What this demonstrates
              </p>
              <ul className="space-y-2.5">
                {[
                  "Cloud architecture and serverless application design",
                  "Data ingestion across heterogeneous external sources",
                  "Clear processing, API, and storage separation",
                  "User-facing analytics backed by observability",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-slate-300"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
