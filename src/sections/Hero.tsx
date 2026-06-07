import { motion } from "framer-motion";
import { profile } from "../data/profile";
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  MailIcon,
  MapPinIcon,
} from "../components/icons";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Decorative grid + glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      <div className="section-pad relative w-full pt-32">
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-slate-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
          </span>
          Open to AI / ML &amp; backend engineering roles
        </motion.div>

        <motion.p
          custom={1}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mb-4 flex items-center gap-2 font-mono text-sm text-accent-cyan"
        >
          <MapPinIcon className="h-4 w-4" /> {profile.location}
        </motion.p>

        <motion.h1
          custom={2}
          initial="hidden"
          animate="show"
          variants={fade}
          className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {profile.headline}
        </motion.h1>

        <motion.p
          custom={3}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-6 max-w-2xl text-xl font-medium leading-snug text-slate-200 sm:text-2xl"
        >
          {profile.subheadline}
        </motion.p>

        <motion.p
          custom={4}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          custom={5}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-9 flex flex-wrap gap-3"
        >
          <a href="#projects" className="btn-primary">
            View Projects <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-ghost"
          >
            <GitHubIcon className="h-4 w-4" /> View GitHub
          </a>
          <a href="#contact" className="btn-ghost">
            <MailIcon className="h-4 w-4" /> Contact Me
          </a>
          <a
            href={profile.portfolioPdfPath}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-ghost"
          >
            <DownloadIcon className="h-4 w-4" /> Portfolio PDF
          </a>
        </motion.div>

        <motion.div
          custom={6}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-12 border-t border-white/5 pt-6"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-600">
            Core toolkit
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-slate-400">
            {profile.techStrip.map((tech, i) => (
              <span key={tech} className="flex items-center gap-x-3">
                {i > 0 && <span className="text-slate-700">·</span>}
                <span className="transition-colors hover:text-accent-soft">
                  {tech}
                </span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
