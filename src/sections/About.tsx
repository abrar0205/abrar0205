import { profile } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-pad section-rule about-grid">
      <SectionHeading eyebrow="03 / BACKGROUND" title="Software meets medical engineering." />
      <div className="about-copy">{profile.about.lines.map(line => <p key={line}>{line}</p>)}<div className="education-note"><span className="eyebrow">EDUCATION · IN PROGRESS</span><h3>M.Sc. Medical Engineering</h3><p>Friedrich-Alexander-Universität Erlangen–Nürnberg</p><span>Medical Image and Data Processing</span></div></div>
    </section>
  );
}
