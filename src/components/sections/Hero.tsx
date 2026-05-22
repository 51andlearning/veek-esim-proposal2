import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { hero } from "@/content/proposal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.18] veek-gradient"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 20% 10%, rgba(138,77,255,0.18) 0%, transparent 70%), radial-gradient(50% 40% at 85% 30%, rgba(233,30,99,0.14) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Badge className="mb-6 bg-foreground/90 text-background hover:bg-foreground">
          {hero.eyebrow}
        </Badge>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-3xl">
          <span className="veek-gradient-text">{hero.title}</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          {hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href={hero.primaryCta.href}
            className={cn(buttonVariants({ size: "lg" }), "rounded-full h-12 px-6 text-base")}
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full h-12 px-6 text-base")}
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
