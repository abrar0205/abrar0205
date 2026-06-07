import { profile } from "../data/profile";
import { Reveal } from "../components/Reveal";
import { CTAButton } from "../components/CTAButton";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../components/icons";

export function Contact() {
  return (
    <section id="contact" className="section-pad">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's build something reliable
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300">
            I'm open to internships and working student roles in Generative AI,
            ML Engineering, AI workflow automation, backend engineering, cloud
            platforms, and applied data science.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <CTAButton
              href={`mailto:${profile.links.email}`}
              variant="primary"
              icon={<MailIcon className="h-4 w-4" />}
            >
              Email
            </CTAButton>
            <CTAButton
              href={profile.links.linkedin}
              external
              icon={<LinkedInIcon className="h-4 w-4" />}
            >
              LinkedIn
            </CTAButton>
            <CTAButton
              href={profile.links.github}
              external
              icon={<GitHubIcon className="h-4 w-4" />}
            >
              GitHub
            </CTAButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
