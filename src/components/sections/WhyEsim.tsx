import { Card, CardContent } from "@/components/ui/card";
import { whyEsim } from "@/content/proposal";

export default function WhyEsim() {
  return (
    <section id="why-esim" className="py-20 sm:py-24 border-t border-border bg-[var(--veek-cloud)] dark:bg-card/40">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{whyEsim.title}</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">{whyEsim.subtitle}</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyEsim.benefits.map((b) => (
            <Card key={b.title} className="bg-background border-border/60">
              <CardContent className="p-6">
                <div className="font-semibold">{b.title}</div>
                <p className="mt-2 text-muted-foreground leading-relaxed">{b.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
