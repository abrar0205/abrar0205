import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="max-w-2xl">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-accent-cyan to-transparent" />
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-300">
          {description}
        </p>
      )}
    </Reveal>
  );
}
