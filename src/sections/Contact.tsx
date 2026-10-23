import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";
import { ArrowUpRightIcon, MailIcon } from "../components/icons";
export function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  const copyEmail = async () => {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(profile.links.email);
      setCopyStatus("Email address copied.");
    } catch { setCopyStatus("Copy unavailable. Select the email address, or use the email link."); }
    timer.current = setTimeout(() => setCopyStatus(""), 7000);
  };
  return <section id="contact" className="contact-section section-pad" aria-labelledby="contact-title">
    <div className="section-shell contact-grid">
      <div><p className="eyebrow">05 / THE NEXT CHAPTER</p><h2 id="contact-title">Good work starts<br />with a <em>conversation.</em></h2><p className="contact-intro">{profile.availability}. Interested in software and backend engineering, applied AI, data, and automotive roles.</p>
        <a className="btn-light" href={`mailto:${profile.links.email}?subject=Let%E2%80%99s%20connect`}>Let’s talk <MailIcon aria-hidden="true" /></a>
      </div>
      <div className="contact-links">
        <div className="email-contact"><a href={`mailto:${profile.links.email}`}><small>EMAIL</small><span>{profile.links.email}<ArrowUpRightIcon aria-hidden="true" /></span></a><button type="button" className="copy-button" onClick={copyEmail}>Copy email</button><p className="copy-status" role="status">{copyStatus}</p></div>
        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><ArrowUpRightIcon aria-hidden="true" /></a>
        <a href={profile.links.github} target="_blank" rel="noopener noreferrer"><span>GitHub</span><ArrowUpRightIcon aria-hidden="true" /></a>
        <a href={`mailto:${profile.links.email}?subject=CV%20request%20%E2%80%94%20Abrar%20Assan%20Mohamed`}><span>Request my CV</span><ArrowUpRightIcon aria-hidden="true" /></a>
      </div>
    </div>
  </section>;
}
