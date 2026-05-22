# Brand — Veek CI

This document captures the **Veek corporate identity** that the proposal site should reflect. It is reconstructed from `veek.com.br` and the public Veek app. **All values are working defaults and must be ratified by Veek's brand team** before any public-facing artwork is finalised.

## Brand essence
- **Promise:** "The only operator that offers FREE internet."
- **Personality:** Modern, anti-establishment, jargon-free, transparent, tech-forward.
- **Anchor line:** "Viver no passado, nunca mais." ("Living in the past, never again.")
- **Mode:** 100% digital, app-first, AI-enabled.

## Tone of voice for the proposal site
- Direct, plain English. Short sentences. No telecom acronyms without unpacking them.
- Confident, not corporate. We're presenting a clear opportunity, not hedging.
- Customer-first framing: every business-case number ties back to a benefit for the Veek customer.
- When numbers appear, they appear with a unit and a year. Never bare percentages.

## Colour palette (working defaults — confirm with Veek)
| Token | Hex | Usage |
|-------|-----|-------|
| `--veek-purple` | `#6B2BD9` | Primary brand colour — hero, primary CTAs |
| `--veek-violet` | `#8A4DFF` | Hover / gradient companion |
| `--veek-magenta` | `#E91E63` | Accent — Gigacoins, highlight callouts |
| `--veek-lime` | `#C6FF00` | Energy accent — "Free" badges, success states |
| `--veek-ink` | `#0E0B1E` | Primary text on light surfaces |
| `--veek-cloud` | `#F5F3FA` | Section background tint |
| `--veek-white` | `#FFFFFF` | Card surfaces, hero copy on dark |

If/when Veek shares official hex values, replace these tokens in `globals.css` and update this table.

## Logo usage
- Use the Veek wordmark only as supplied by Veek. Do not redraw, recolour, or stretch.
- Minimum clear space around the wordmark = the height of the lowercase `v`.
- On dark backgrounds use the white wordmark; on `--veek-cloud` or white use the primary wordmark.
- The MVNE partner mark appears co-branded in the footer only, not in the header.

## Typography
- **Primary:** A geometric sans-serif. Working choice: **Inter** as a free, web-safe stand-in until Veek confirms their production typeface.
- **Display weight:** 700 for hero, 600 for section headings.
- **Body weight:** 400, 1.55 line-height, max measure ~70ch.
- Numbers in business-case tables should be tabular (`font-variant-numeric: tabular-nums`).

## Iconography & illustration
- Rounded geometric icons. No skeuomorphism.
- Illustrations should reference the app, the trip, the SIM-free download — not generic stock photography.
- Avoid country flags as the only visual cue for destinations; pair with city names.

## Photography (if used)
- Real-world Brazilian travellers, mobile-first scenes (airports, beaches, cafés abroad).
- Natural lighting. Avoid heavily filtered or staged corporate imagery.

## Don'ts
- Don't use telecom imagery that signals legacy carriers (cell towers, plastic SIM trays).
- Don't pair the Veek wordmark with another logo at equal weight in the hero.
- Don't introduce a fourth or fifth accent colour. Discipline keeps the proposal looking like Veek.
- Don't auto-translate the site to Portuguese — that's an explicit out-of-scope item (see `SCOPE.md`).
