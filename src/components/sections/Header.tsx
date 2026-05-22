import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { brand } from "@/content/proposal";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span
            aria-hidden
            className="inline-block h-8 w-8 rounded-lg veek-gradient"
          />
          <span className="font-semibold text-lg tracking-tight">
            {brand.name}
          </span>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            Travel eSIM Proposal
          </Badge>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#executive-summary" className="hover:text-foreground transition-colors">Summary</a>
          <a href="#opportunity" className="hover:text-foreground transition-colors">Opportunity</a>
          <a href="#proposition" className="hover:text-foreground transition-colors">Proposition</a>
          <a href="#business-case" className="hover:text-foreground transition-colors">Business case</a>
          <a href="#timeline" className="hover:text-foreground transition-colors">Timeline</a>
        </nav>
      </div>
    </header>
  );
}
