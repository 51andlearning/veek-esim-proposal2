# Tracking Plan

All tracking is **placeholder / opt-in** until Veek confirms measurement requirements and LGPD constraints.

## Google Analytics (placeholder)
- **Property:** GA4 — Measurement ID TBD (`G-XXXXXXXXXX`)
- **Install method:** `next/script` in `app/layout.tsx`, gated by the `NEXT_PUBLIC_GA_ID` env var.
- **Status:** Not yet installed. Add when Veek provisions a measurement ID, or use a fresh property scoped to this proposal site.

## Vercel Web Analytics (recommended for v1)
- **Package:** `@vercel/analytics`
- **Status:** Recommended. Provides privacy-friendly pageview metrics with zero config and no third-party cookies — fits the confidentiality posture of this proposal site.
- **Install:** `pnpm add @vercel/analytics` and mount `<Analytics />` in `app/layout.tsx`.
- **Enable condition:** Turn on once the Vercel project is live.

## Event tracking (placeholder)
Suggested events to define once analytics is wired. These map to the proposal sections so we can see which parts of the Veek business case reviewers actually engage with:

| Event | Trigger | Properties |
|-------|---------|------------|
| `section_view` | Section scrolled into viewport ≥ 50% | `section_name` |
| `cta_click` | Primary CTA button click | `cta_label`, `section_name` |
| `nav_click` | Top-nav link click | `link_label`, `destination` |
| `accordion_open` | FAQ / scenario accordion expanded | `item_label` |
| `outbound_click` | External link click | `url` |
| `scenario_toggle` | Switching between Worst / Base / Best in the business case | `scenario` |

## Form submission tracking (placeholder)
- One form is planned for v1: "Request a working session."
- Emit `form_submit` with `form_name = "working_session"` and a boolean `success`.
- Also log server-side in the API route that handles the POST.

## Conversion goals (placeholder)
Define once success criteria are confirmed with Veek. Draft candidates:
- **Primary:** CTA click on "Request a working session."
- **Secondary:** Deep scroll to the Business Case / Financials section.
- **Tertiary:** Visit to `/appendix` (assumptions and sources).

## Privacy & consent (LGPD)
- The proposal site is **internal / confidential** and should be password-protected (see `DEPLOYMENT.md`). It is not a public Veek property and is not in scope for the Veek consent flow.
- Prefer cookieless analytics (Vercel Web Analytics) for v1 so no LGPD consent banner is required.
- No third-party advertising or remarketing tags.
- If GA4 is enabled later, restrict to IP-anonymised pageviews and review with Veek legal under LGPD.
- Do not embed any production Veek tracking IDs in this proposal site — keep its analytics segregated.
