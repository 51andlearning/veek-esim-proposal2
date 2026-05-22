import { Card, CardContent } from "@/components/ui/card";
import { opportunity } from "@/content/proposal";

export default function Opportunity() {
  return (
    <section id="opportunity" className="py-20 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {opportunity.title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          {opportunity.subtitle}
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {opportunity.marketPoints.map((p) => (
            <Card key={p.heading} className="border-border/60">
              <CardContent className="p-6">
                <div className="text-2xl font-bold">{p.heading}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-semibold tracking-tight">
            {opportunity.whyVeek.title}
          </h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {opportunity.whyVeek.points.map((pt) => (
              <Card key={pt.title} className="border-border/60">
                <CardContent className="p-6">
                  <div className="font-semibold">{pt.title}</div>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{pt.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
