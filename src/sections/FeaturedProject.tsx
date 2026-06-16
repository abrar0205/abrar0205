import { featuredProject as p } from "../data/projects";
import { ArchitectureFlow } from "../components/ArchitectureFlow";
import { CTAButton } from "../components/CTAButton";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ArrowUpRightIcon, GitHubIcon } from "../components/icons";

export function FeaturedProject() {
  return (
    <section id="featured" className="section-pad">
      <SectionHeading eyebrow="Flagship Project" title="What I'm building" />

      <Reveal className="mt-8">
        <article className="glass overflow-hidden border-accent/25 bg-accent/[0.04] p-7 sm:p-9">
          <span className="chip border-accent/30 bg-accent/15 text-accent-soft">
            Secure Enterprise RAG
          </span>

          <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            {p.title}
          </h3>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-300">
            {p.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {p.proofChips.map((chip) => (
              <span
                key={chip}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
            <ArchitectureFlow title="Architecture" steps={p.flow} />
          </div>

          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <CTAButton
                href={p.github}
                external
                variant="primary"
                icon={<GitHubIcon className="h-4 w-4" />}
              >
                View Repository
              </CTAButton>
              <CTAButton
                href={p.readmeUrl}
                external
                icon={<ArrowUpRightIcon className="h-4 w-4" />}
              >
                Architecture / README
              </CTAButton>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
