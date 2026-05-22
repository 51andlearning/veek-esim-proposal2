import { Card, CardContent } from "@/components/ui/card";
import { otherOpportunities } from "@/content/proposal";

export default function OtherOpportunities() {
  return (
    <section id="other-opportunities" className="py-20 sm:py-24 border-t border-border bg-[var(--veek-cloud)] dark:bg-card/40">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{otherOpportunities.title}</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">{otherOpportunities.subtitle}</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherOpportunities.items.map((o) => (
            <Card key={o.title} className="bg-background border-border/60">
              <CardContent className="p-6">
                <div className="font-semibold">{o.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{o.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
