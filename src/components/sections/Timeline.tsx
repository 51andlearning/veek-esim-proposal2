import { timeline } from "@/content/proposal";

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{timeline.title}</h2>
        <ol className="mt-10 relative border-l-2 border-border ml-3">
          {timeline.milestones.map((m, i) => (
            <li key={m.milestone} className="ml-6 pb-8 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[11px] mt-1 inline-block h-5 w-5 rounded-full veek-gradient ring-4 ring-background"
              />
              <div className="text-sm font-mono text-muted-foreground">Step {i + 1}</div>
              <div className="mt-1 text-lg font-semibold">{m.milestone}</div>
              <div className="mt-1 text-sm text-muted-foreground">{m.when}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
