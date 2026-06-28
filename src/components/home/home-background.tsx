import { cn } from "@/lib/utils";

export function HomeBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {/* Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(to right, color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(circle at center, black 25%, transparent 80%)",
        }}
      />

      {/* Main Energy */}
      <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[140px]" />

      <div className="absolute left-20 top-1/3 h-72 w-72 rounded-full bg-blue-500/15 blur-[120px]" />

      <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-[140px]" />

      {/* Energy Ring */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/20" />

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

      {/* Floating Energy Orbs */}
      <div className="absolute left-1/4 top-1/4 h-4 w-4 rounded-full bg-violet-400 blur-sm animate-pulse" />

      <div className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-cyan-300 blur-sm animate-pulse" />

      <div className="absolute bottom-1/4 left-1/3 h-5 w-5 rounded-full bg-fuchsia-400 blur-md animate-pulse" />

      <div className="absolute right-1/3 bottom-1/3 h-2 w-2 rounded-full bg-white blur-sm animate-pulse" />

      {/* Mystic Runes */}
      <div className="absolute left-20 top-32 text-7xl font-black text-violet-500/10 rotate-12">
        ✦
      </div>

      <div className="absolute right-24 bottom-40 text-6xl font-black text-cyan-400/10 -rotate-12">
        ◈
      </div>

      <div className="absolute left-1/2 top-20 -translate-x-1/2 text-8xl text-fuchsia-500/5">
        ✧
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,.18) 100%)",
        }}
      />

      {/* Top Fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-background to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" />
    </div>
  );
}