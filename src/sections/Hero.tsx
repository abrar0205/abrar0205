import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { CTAButton } from "../components/CTAButton";
import {
  ArrowRightIcon,
  GitHubIcon,
  LinkedInIcon,
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
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-slate-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
          </span>
          {profile.positioning}
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
          className="mt-6 max-w-3xl text-lg font-semibold leading-snug text-slate-100 sm:text-xl"
        >
          {profile.subheadline}
        </motion.p>

        <motion.p
          custom={4}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          custom={5}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-7 flex flex-wrap items-center gap-x-2.5 gap-y-2"
        >
          {profile.credibility.map((item) => (
            <span
              key={item}
              className="rounded-full border border-accent/20 bg-accent/[0.08] px-3 py-1 text-xs font-medium text-accent-soft"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          custom={6}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-8 flex flex-wrap gap-3"
        >
          <CTAButton
            href="#projects"
            variant="primary"
            iconRight={<ArrowRightIcon className="h-4 w-4" />}
          >
            View Projects
          </CTAButton>
          <CTAButton
            href="#skills"
            iconRight={<ArrowRightIcon className="h-4 w-4" />}
          >
            View Skills
          </CTAButton>
          <CTAButton
            href={profile.links.github}
            external
            icon={<GitHubIcon className="h-4 w-4" />}
          >
            GitHub
          </CTAButton>
          <CTAButton
            href={profile.links.linkedin}
            external
            icon={<LinkedInIcon className="h-4 w-4" />}
          >
            LinkedIn
          </CTAButton>
        </motion.div>

        <motion.div
          custom={7}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2"
        >
          {profile.valueProps.map((vp) => (
            <div key={vp.title} className="glass p-5 border-l-2 border-accent-cyan">
              <p className="text-base font-bold text-white tracking-wide">{vp.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {vp.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
