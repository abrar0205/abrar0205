import { profile } from "../data/profile";
import { ArrowUpRightIcon } from "../components/icons";
export function Contact() {
  return (
    <section id="contact" className="section-pad contact-section">
      <div className="contact-box">
        <div><p className="eyebrow">05 / WHAT’S NEXT</p><h2>Let’s build<br /><span>something useful.</span></h2><p className="contact-intro">{profile.availability}. Interested in AI, backend engineering, applied ML, and biomedical data.</p></div>
        <div className="contact-links">
          <a href={`mailto:${profile.links.email}`}><span><small>EMAIL</small>{profile.links.email}</span><ArrowUpRightIcon className="h-5 w-5 shrink-0" /></a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"><span><small>CONNECT</small>LinkedIn</span><ArrowUpRightIcon className="h-5 w-5" /></a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer"><span><small>EXPLORE</small>GitHub</span><ArrowUpRightIcon className="h-5 w-5" /></a>
        </div>
      </div>
    </section>
  );
}
