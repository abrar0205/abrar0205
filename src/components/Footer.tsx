import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-slate-500">
          © {year} {profile.name}. Built with React, Vite &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.links.email}`}
            aria-label="Email"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
