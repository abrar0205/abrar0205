import { featuredProject as p } from "../data/projects";
import { CTAButton } from "../components/CTAButton";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ArrowUpRightIcon, GitHubIcon } from "../components/icons";

export function FeaturedProject() {
  return (
    <section id="featured" className="section-pad section-rule">
      <SectionHeading eyebrow="01 / SELECTED WORK" title="From information to useful systems." />
      <Reveal>
        <article className="featured-card">
          <div className="featured-copy">
            <p className="project-type">FEATURED PUBLIC PROJECT / KNOWLEDGE RETRIEVAL</p>
            <h3>{p.title}<span>Enterprise Knowledge Intelligence</span></h3>
            <p>{p.subtitle}</p>
            <ul className="feature-list">{p.proofChips.map(chip => <li key={chip}>{chip}</li>)}</ul>
            <div className="project-actions">
              <CTAButton href={p.github} external variant="primary" icon={<GitHubIcon className="h-4 w-4" />}>View repository</CTAButton>
              <a className="text-link" href={p.readmeUrl} target="_blank" rel="noopener noreferrer">Read the overview <ArrowUpRightIcon className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="architecture-panel">
            <p className="eyebrow">CONCEPTUAL QUERY PATH</p>
            <ol className="query-flow">
              {p.flow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}
            </ol>
            <p className="architecture-note">A simplified view of retrieval and answer generation. See the repository for implementation details.</p>
            <div className="tags">{p.stack.map(tech => <span className="chip" key={tech}>{tech}</span>)}</div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
