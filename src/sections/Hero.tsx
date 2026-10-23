import { profile } from "../data/profile";
import { ArrowRightIcon, ArrowUpRightIcon } from "../components/icons";
import { HeroArtwork } from "../components/HeroArtwork";
export function Hero() {
  return <section id="top" className="hero section-shell" aria-labelledby="hero-title">
    <div className="hero-grid">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">ABRAR ASSAN MOHAMED <span>/</span> SOFTWARE ENGINEER</p>
        <h1 id="hero-title">Software with<br /> <em>purpose.</em><br /> Engineering<br /> with depth.</h1>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          <a className="btn-primary" href="#featured">Explore my work <ArrowRightIcon aria-hidden="true" /></a>
          <a className="text-link" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">Meet me on LinkedIn <ArrowUpRightIcon aria-hidden="true" /></a>
        </div>
        <p className="availability"><span aria-hidden="true" />Germany · Full-time opportunities for 2027</p>
      </div>
      <HeroArtwork />
    </div>
    <div className="career-strip" aria-label="Experience at a glance">
      <div><span className="eyebrow">CURRENTLY</span><strong>Siemens Energy</strong><span>AI workflows & backend engineering</span></div>
      <div><span className="eyebrow">PREVIOUSLY</span><strong>Tata Elxsi</strong><span>Connected-vehicle software</span></div>
      <a href="#featured" className="strip-link"><span>Across industries.<br /><strong>Grounded in software.</strong></span><ArrowRightIcon aria-hidden="true" /></a>
    </div>
  </section>;
}
