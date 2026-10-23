import { profile } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";
import { Monogram } from "../components/Monogram";
export function About() {
  return <section id="about" className="section-shell section-pad about-grid" aria-labelledby="about-title">
    <div><SectionHeading eyebrow="03 / A LITTLE CONTEXT" title="Curious about the whole system." id="about-title" /><div className="about-signature"><Monogram /><span>Abrar Assan Mohamed<br /><small>Software engineer · Germany</small></span></div></div>
    <div className="about-copy">{profile.about.lines.map(line => <p key={line}>{line}</p>)}
      <div className="education-note"><p className="eyebrow">EDUCATION / IN PROGRESS</p><h3>M.Sc. Medical Engineering</h3><p>Friedrich-Alexander-Universität Erlangen–Nürnberg</p><span>Focus: Medical Image and Data Processing</span></div>
    </div>
  </section>;
}
