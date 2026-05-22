import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cta } from "@/content/proposal";

export default function CTA() {
  return (
    <section id="cta" className="py-24 border-t border-border">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="rounded-3xl border border-border veek-gradient text-white p-10 sm:p-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{cta.title}</h2>
          <p className="mt-4 text-lg/relaxed text-white/90 max-w-2xl mx-auto">
            {cta.subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={cta.primary.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full h-12 px-6 text-base bg-white text-foreground hover:bg-white/90"
              )}
            >
              {cta.primary.label}
            </a>
            <a
              href={cta.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "rounded-full h-12 px-6 text-base bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"
              )}
            >
              {cta.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
