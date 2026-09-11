import { profile } from "../data/profile";
import { CTAButton } from "../components/CTAButton";
import { ArrowRightIcon, ArrowUpRightIcon } from "../components/icons";

export function Hero() {
  return (
    <section id="top" className="hero section-pad" aria-labelledby="hero-title">
      <div className="hero-topline"><span>SOFTWARE × MEDICAL ENGINEERING</span><span>BASED IN GERMANY</span></div>
      <div className="hero-grid">
        <div>
          <p className="hero-name">Hi, I’m Abrar Assan Mohamed.</p>
          <h1 id="hero-title">AI systems.<br /><span>Human signals.</span></h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <CTAButton href="#featured" variant="primary" iconRight={<ArrowRightIcon className="h-4 w-4" />}>Explore my work</CTAButton>
            <a className="text-link" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRightIcon className="h-4 w-4" /></a>
          </div>
          <p className="availability">{profile.availability}</p>
        </div>
        <aside className="focus-panel" aria-label="Engineering focus">
          <div className="focus-panel-heading"><span>MY FOCUS</span><span>01 / 02</span></div>
          <div className="focus-item"><span className="focus-number">01</span><div><h2>Applied AI & backend</h2><p>From documents and retrieval to APIs and structured outputs.</p><span className="focus-stack">Python · FastAPI · RAG</span></div></div>
          <div className="focus-item"><span className="focus-number">02</span><div><h2>Biomedical data</h2><p>From imaging and sensor signals to features and ML models.</p><span className="focus-stack">MRI · EMG · Multimodal ML</span></div></div>
          <a href="#about" className="focus-footer">One engineering background. Connected interests.<ArrowRightIcon className="h-4 w-4 shrink-0" /></a>
        </aside>
      </div>
      <div className="credential-strip">
        <div><span>INDUSTRY / CURRENT</span><strong>Siemens Energy</strong></div>
        <div><span>INDUSTRY / PREVIOUS</span><strong>TATA ELXSI</strong></div>
        <div><span>EDUCATION / IN PROGRESS</span><strong>M.Sc. Medical Engineering <small>FAU</small></strong></div>
      </div>
    </section>
  );
}
