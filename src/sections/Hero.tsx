import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { CTAButton } from "../components/CTAButton";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon } from "../components/icons";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.21, 0.47, 0.32, 0.98] },
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
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      <div className="section-pad relative w-full pt-28">
        <motion.p
          custom={0}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mb-5 font-mono text-sm text-accent-cyan"
        >
          {profile.name}
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fade}
          className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {profile.headline}
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-7 flex flex-wrap gap-2.5"
        >
          {profile.proofPills.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-accent/25 bg-accent/[0.08] px-3.5 py-1.5 text-sm font-medium text-accent-soft"
            >
              {pill}
            </span>
          ))}
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-9 flex flex-wrap gap-3"
        >
          <CTAButton
            href="#featured"
            variant="primary"
            iconRight={<ArrowRightIcon className="h-4 w-4" />}
          >
            View Flagship Project
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
      </div>
    </section>
  );
}
