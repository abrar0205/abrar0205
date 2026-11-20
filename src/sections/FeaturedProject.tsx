import { featuredProjects } from "../data/projects";
import { ProjectVisual } from "../components/ProjectVisual";
import { ArrowUpRightIcon, ArrowRightIcon } from "../components/icons";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
export function FeaturedProject() {
  return <section id="featured" className="section-shell section-pad" aria-labelledby="work-title">
    <div className="section-title-row">
      <SectionHeading eyebrow="01 / SELECTED WORK" title="Built to be explored." id="work-title" description="Explore the engineering behind quality analysis, workforce intelligence, simulation, AI services, and connected systems." />
      <span className="margin-note">PUBLIC CODE.<br />VISIBLE DECISIONS.</span>
    </div>
    <nav className="project-jump-nav" aria-label="Jump to a featured project">{featuredProjects.map((project, index) =>
      <a key={project.id} href={"#work-" + project.id}><span>{String(index + 1).padStart(2, "0")}</span><strong>{project.title}</strong><ArrowUpRightIcon aria-hidden="true" /></a>
    )}</nav>
    <div className="featured-list">{featuredProjects.map((project, index) =>
      <Reveal className="featured-reveal" key={project.id} delay={Math.min(index, 2) * .06}>
      <article id={`work-${project.id}`} className={`featured-project project-${project.id}`} aria-labelledby={`title-${project.id}`}>
        <ProjectVisual kind={project.id} />
        <div className="featured-copy">
          <p className="eyebrow"><span className="project-index">0{index + 1}</span>{project.category}</p>
          <h3 id={`title-${project.id}`}>{project.title}</h3>
          <p className="project-headline">{project.headline}</p>
          <p className="project-description">{project.description}</p>
          <ul className="project-highlights">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>
          <div className="tags">{project.stack.map(item => <span className="chip" key={item}>{item}</span>)}</div>
          <div className="project-links">
            {project.demo && <a className="btn-primary small" href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`}>Live demo <ArrowUpRightIcon aria-hidden="true" /></a>}
            <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${project.title} on GitHub`}>Explore repository <ArrowUpRightIcon aria-hidden="true" /></a>
          </div>
        </div>
        <details className="case-details">
          <summary><span>Inside the build <span className="summary-project">/ {project.title}</span></span><span className="detail-toggle" aria-hidden="true">+</span></summary>
          <div className="case-content">
            <div><h4>The problem</h4><p>{project.problem}</p></div>
            <div><h4>The implementation</h4><p>{project.approach}</p></div>
            <div><h4>The evidence</h4><p>{project.evidence}</p></div>
            <p className="scope-note">{project.scope}</p>
            <a className="text-link" href={`${project.github}#readme`} target="_blank" rel="noopener noreferrer">Read the technical documentation <ArrowRightIcon aria-hidden="true" /></a>
          </div>
        </details>
      </article>
      </Reveal>
    )}</div>
  </section>;
}
