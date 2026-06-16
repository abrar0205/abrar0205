import { ArrowRightIcon } from "./icons";

interface ArchitectureFlowProps {
  title: string;
  steps: string[];
}

/**
 * Horizontal, wrapping pipeline of labelled nodes connected by arrows.
 * Used for the flagship project's architecture flow.
 */
export function ArchitectureFlow({ title, steps }: ArchitectureFlowProps) {
  return (
    <div>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>
      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2.5">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-x-1.5">
            <span className="rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-3 py-1.5 text-xs font-medium text-slate-200">
              {step}
            </span>
            {i < steps.length - 1 && (
              <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 text-accent/70" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
