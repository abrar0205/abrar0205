import { profile } from "../data/profile";
import { Reveal } from "../components/Reveal";
import { DownloadIcon, MailIcon } from "../components/icons";

export function Downloads() {
  return (
    <section className="section-pad">
      <Reveal>
        <div className="glass relative overflow-hidden p-8 sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Want the concise version?
              </h2>
              <p className="mt-2 max-w-xl text-slate-400">
                Grab the one-page resume or the full portfolio brief, or reach
                out directly.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary"
              >
                <DownloadIcon className="h-4 w-4" /> Resume PDF
              </a>
              <a
                href={profile.portfolioPdfPath}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-ghost"
              >
                <DownloadIcon className="h-4 w-4" /> Portfolio PDF
              </a>
              <a href="#contact" className="btn-ghost">
                <MailIcon className="h-4 w-4" /> Contact Me
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
