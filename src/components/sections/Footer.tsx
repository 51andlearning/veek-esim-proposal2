import { brand, footer } from "@/content/proposal";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--veek-ink)] text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <span aria-hidden className="inline-block h-8 w-8 rounded-lg veek-gradient" />
            <span className="font-semibold text-lg text-white">{brand.name}</span>
            <span className="text-sm text-white/50">×</span>
            <span className="text-sm text-white/70">{brand.partner}</span>
          </div>
          <div className="text-xs text-white/50">
            Travel eSIM Proposal · Confidential
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-white/60 leading-relaxed">
          <p>{footer.confidentiality}</p>
          <p>{footer.caveat}</p>
        </div>
      </div>
    </footer>
  );
}
