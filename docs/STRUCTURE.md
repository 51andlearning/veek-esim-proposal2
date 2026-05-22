# Structure

## Folder structure

```
travel-esim-proposal/
├── docs/                         # Project documentation (this folder)
│   ├── PROJECT_OVERVIEW.md
│   ├── SCOPE.md
│   ├── STRUCTURE.md
│   ├── ASSUMPTIONS.md
│   ├── DEPLOYMENT.md
│   ├── TRACKING_PLAN.md
│   └── BRAND.md                  # Veek CI tokens, type, voice
├── public/
│   ├── images/                   # Static image assets
│   └── brand/                    # Veek logo lockups (light/dark)
├── src/
│   ├── app/                      # Next.js App Router entry points
│   │   ├── layout.tsx            # Root layout (Veek theme)
│   │   ├── page.tsx              # Home page
│   │   └── globals.css           # Tailwind + Veek theme tokens
│   ├── components/
│   │   ├── sections/             # Page sections (Hero, BusinessCase, etc.)
│   │   └── ui/                   # shadcn primitives (button, card, ...)
│   ├── content/                  # Structured content (TS) for sections
│   │   └── proposal.ts           # Veek proposal copy + numbers
│   └── lib/
│       └── utils.ts              # Helpers (cn, formatters)
├── proposal-veek-esim.md         # Long-form proposal narrative (this is the canonical text)
├── components.json               # shadcn config
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Section composition rules
- Each section lives in its own file in `src/components/sections/` and exports a default React component.
- Sections are **self-contained**: they own their layout, spacing, and any section-local subcomponents.
- Sections consume content from `src/content/proposal.ts` rather than hardcoding copy.
- Sections use shadcn primitives from `@/components/ui/*` for interactive elements (Buttons, Cards, Accordion, Tabs, Dialog, etc.).
- Sections must be composable — adding/removing one from `page.tsx` should not break others.
- Use the `cn()` helper from `@/lib/utils` for conditional class names.

## Content management approach
- Content lives in `src/content/proposal.ts` as TypeScript exports.
- The long-form narrative source-of-truth is `proposal-veek-esim.md` at the project root.
- Each section pulls its own content module — no global content blob.
- Copy changes should require editing only `src/content/proposal.ts` (or `proposal-veek-esim.md` for the narrative), not the component code.
- Images live in `public/images/` and are referenced by path (`/images/...`).
- Veek brand assets live in `public/brand/` and are referenced from the layout and hero.
- No CMS integration for v1. Content is code-managed and ships with deploys.

## Naming conventions
- Components: `PascalCase.tsx`
- Content modules: `kebab-case.ts`
- Utility functions: `camelCase`
- CSS custom properties and design tokens: `--veek-*` for brand-specific tokens, `--kebab-case` for everything else
