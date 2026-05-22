import { Card, CardContent } from "@/components/ui/card";
import { proposition } from "@/content/proposal";

export default function Proposition() {
  return (
    <section id="proposition" className="py-20 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{proposition.title}</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">{proposition.subtitle}</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {proposition.pillars.map((p, i) => (
            <Card key={p.title} className="relative overflow-hidden border-border/60">
              <CardContent className="p-6">
                <div className="text-sm font-mono text-muted-foreground">0{i + 1}</div>
                <div className="mt-2 text-xl font-semibold">{p.title}</div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold tracking-tight">{proposition.journey.title}</h3>
          <ol className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {proposition.journey.steps.map((s) => (
              <li
                key={s.n}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full veek-gradient text-white text-sm font-semibold">
                    {s.n}
                  </span>
                  <div className="font-semibold">{s.label}</div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
