import { Card, CardContent } from "@/components/ui/card";
import { executiveSummary } from "@/content/proposal";

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="py-20 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {executiveSummary.title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          {executiveSummary.body}
        </p>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-5 gap-4">
          {executiveSummary.stats.map((s) => (
            <Card key={s.label} className="border-border/60">
              <CardContent className="p-5">
                <div className="text-2xl sm:text-3xl font-bold veek-gradient-text">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground leading-snug">
                  {s.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-[var(--veek-cloud)] dark:bg-card p-8">
          <h3 className="text-xl font-semibold">{executiveSummary.touchpoints.title}</h3>
          <p className="mt-2 text-muted-foreground">{executiveSummary.touchpoints.body}</p>
          <ul className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {executiveSummary.touchpoints.items.map((t) => (
              <li
                key={t}
                className="text-sm font-medium rounded-lg bg-background border border-border px-3 py-2"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
