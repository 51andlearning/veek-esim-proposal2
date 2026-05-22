import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { integration } from "@/content/proposal";

export default function Integration() {
  return (
    <section id="integration" className="py-20 sm:py-24 border-t border-border bg-[var(--veek-cloud)] dark:bg-card/40">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{integration.title}</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">{integration.subtitle}</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-background border-border/60">
            <CardContent className="p-6">
              <Badge className="mb-3">{integration.veek.label}</Badge>
              <ul className="space-y-2">
                {integration.veek.items.map((i) => (
                  <li key={i} className="text-sm">• {i}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-background border-border/60">
            <CardContent className="p-6">
              <Badge variant="secondary" className="mb-3">{integration.mvne.label}</Badge>
              <ul className="space-y-2">
                {integration.mvne.items.map((i) => (
                  <li key={i} className="text-sm">• {i}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold tracking-tight">Build phases</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {integration.phases.map((p, i) => (
              <Card key={p.phase} className="bg-background border-border/60">
                <CardContent className="p-5">
                  <div className="text-sm font-mono text-muted-foreground">Phase {i + 1}</div>
                  <div className="mt-1 text-lg font-semibold">{p.phase}</div>
                  <div className="text-xs text-muted-foreground mt-1">{p.duration}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
