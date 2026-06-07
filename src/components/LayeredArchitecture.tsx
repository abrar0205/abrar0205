import type { ArchitectureLayer } from "../data/architecture";

/**
 * Vertical, layered system-design diagram. Each layer is a card with a name
 * and short description, connected top-to-bottom by an arrow rail — meant to
 * read like a real architecture artifact rather than a plain list.
 */
export function LayeredArchitecture({ layers }: { layers: ArchitectureLayer[] }) {
  return (
    <ol className="relative space-y-2.5">
      {layers.map((layer, i) => (
        <li key={layer.name} className="relative">
          <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-gradient-to-r from-white/[0.06] to-white/[0.02] p-4 transition-colors hover:border-accent/30">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/15 font-mono text-xs font-semibold text-accent-soft">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{layer.name}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-slate-400">
                {layer.detail}
              </p>
            </div>
          </div>
          {i < layers.length - 1 && (
            <div className="flex justify-start pl-[1.65rem]">
              <span className="h-2.5 w-px bg-accent/40" />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
