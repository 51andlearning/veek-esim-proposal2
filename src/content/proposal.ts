export const brand = {
  name: "Veek",
  partner: "MVNE",
  tagline: "Connectivity for Brazilians, wherever they go.",
};

export const hero = {
  eyebrow: "Travel eSIM — Confidential Proposal",
  title: "Veek goes global.",
  subtitle:
    "A Veek-branded, itinerary-aware travel eSIM, native to the Veek app and paid for in Reais or Gigacoins. Built on the same digital-first DNA that won Veek 5 million Brazilians at home — now extended to every trip they take abroad.",
  primaryCta: { label: "See the business case", href: "#business-case" },
  secondaryCta: { label: "Executive summary", href: "#executive-summary" },
};

export const executiveSummary = {
  title: "Executive Summary",
  body:
    "Veek already did the hard part. 5 million customers chose Veek because the legacy carriers felt expensive, opaque, and stuck in the past. The moment those customers cross a border, they fall right back into that world — eye-watering roaming bills, prepaid SIM kiosks at the airport, plans they can't read. A Veek-branded travel eSIM closes that gap.",
  stats: [
    { value: "5.0M", label: "Veek active MVNO customers" },
    { value: "10–20%", label: "Annual penetration target (Yr 5)" },
    { value: "$18.07", label: "ARPU per 5GB bundle (ex VAT)" },
    { value: "Up to $71M", label: "5-year subscriber revenue (best case)" },
    { value: "Up to $28M", label: "5-year Veek net contribution" },
  ],
  touchpoints: {
    title: "Owned distribution — zero CAC for incremental sales",
    body: "The play uses existing Veek surfaces. No new acquisition channels required.",
    items: [
      "Veek app home tile",
      "In-app bill / top-up banner",
      "Push notifications on travel-flagged segments",
      "WhatsApp & SMS journeys",
      "Veek website hero",
      "Gigacoins redemption shelf",
      "Airport check-in nudges (where consented)",
      "Post-trip retention prompts",
    ],
  },
};

export const opportunity = {
  title: "The Opportunity",
  subtitle: "Outbound travel is a large, underserved opportunity for an MVNO whose customers already trust the app.",
  marketPoints: [
    {
      heading: "~10–11M",
      body: "Brazilians travel internationally each year — back to a fully recovered pre-pandemic baseline.",
    },
    {
      heading: "~USD $4.4B",
      body: "Global travel eSIM market trajectory by 2030.",
    },
    {
      heading: "60–80%",
      body: "Typical cost saving for a travel eSIM versus traditional roaming.",
    },
    {
      heading: "App-dependent",
      body: "Brazilians rely heavily on banking OTPs, ride-hail, translation, and maps when abroad — the cost of being offline is unusually high.",
    },
  ],
  whyVeek: {
    title: "Why Veek wins",
    points: [
      {
        title: "Trust",
        body: "A Veek customer already trusts the Veek app for their primary line. The leap to trusting it for a travel line is small.",
      },
      {
        title: "Distribution",
        body: "The Veek app and the Gigacoins economy are an owned channel — zero CAC for incremental sales.",
      },
      {
        title: "Brand fit",
        body: "“The only operator that offers free internet” extends naturally into “no bill shock when you travel.”",
      },
      {
        title: "MVNE-ready",
        body: "The MVNE partner handles connectivity, GSMA-compliant eSIM provisioning, and global wholesale. Veek owns the customer, the brand, and the margin.",
      },
    ],
  },
};

export const whyEsim = {
  title: "Why Travel eSIM",
  subtitle: "Why a Veek customer will choose it over roaming or an airport SIM.",
  benefits: [
    { title: "Cheaper", body: "Local data rates abroad are typically far below TIM / Veek roaming partners' tariffs." },
    { title: "Faster", body: "Direct attachment to a strong local network — no detour through a roaming partner." },
    { title: "Instant setup", body: "No queue at the airport. Buy and install before the flight; activate on landing." },
    { title: "No bill shock", body: "Pre-paid in Reais or Gigacoins. Usage tracked in-app." },
    { title: "Keep your Veek number", body: "Dual-SIM: data on the travel eSIM, Veek line stays active for calls and OTPs." },
    { title: "Flexible", body: "Top up, change country, or switch to a regional plan from the app." },
  ],
};

export const proposition = {
  title: "The Veek Proposition",
  subtitle:
    "A Veek-branded, itinerary-aware, app-native travel eSIM with Gigacoins built in.",
  pillars: [
    {
      title: "Itinerary-aware",
      body: "The Veek app suggests the right plan based on destination and trip length. Add a side-trip to Madrid from Lisbon and the app upsells a regional Europe plan — not two single-country plans.",
    },
    {
      title: "Gigacoins-integrated",
      body: "Earn Gigacoins on every travel eSIM purchase. Burn Gigacoins to pay for travel data — closing a new loyalty loop and giving Premium / Ultra customers a reason to hold a balance.",
    },
    {
      title: "100% Veek brand",
      body: "End-to-end inside the Veek app and on veek.com.br. The MVNE partner handles the plumbing and stays invisible to the customer.",
    },
  ],
  journey: {
    title: "Customer journey",
    steps: [
      { n: "1", label: "Trigger", body: "Customer books a flight (or appears in a travel-flagged segment); Veek surfaces a personalised eSIM tile." },
      { n: "2", label: "Choose", body: "Bundle is pre-selected for the destination. Customer can edit GB / duration / country group." },
      { n: "3", label: "Pay", body: "Card, Pix, or Gigacoins — or any mix." },
      { n: "4", label: "Install", body: "One-tap eSIM install via the Veek app (eUICC profile push)." },
      { n: "5", label: "Travel", body: "Auto-activate on first attach abroad. In-app usage meter." },
      { n: "6", label: "Top up", body: "Extend a bundle or buy a new country pack in one tap." },
      { n: "7", label: "Return", body: "Veek home plan resumes seamlessly. Trip summary, Gigacoins earned, prompt to rate." },
    ],
  },
};

export const businessCase = {
  title: "Business Case",
  subtitle:
    "Sized against the Veek active base of 5M customers, with annual penetration ramping from 4% in Yr 1 to a peak of 10 / 15 / 20% in Yr 5 (worst / base / best).",
  inputs: [
    { label: "Bundle", value: "5 GB · ~$18.07 ARPU (ex VAT)" },
    { label: "Active base", value: "5,000,000 in Yr 1, +5% YoY" },
    { label: "Veek net margin", value: "40% of bundle revenue (illustrative)" },
    { label: "Horizon", value: "5 years" },
  ],
  penetration: {
    headers: ["Year", "Worst", "Base", "Best"],
    rows: [
      ["Yr 1", "4.0%", "6.0%", "8.0%"],
      ["Yr 2", "5.5%", "8.0%", "11.0%"],
      ["Yr 3", "7.0%", "10.0%", "14.0%"],
      ["Yr 4", "8.5%", "12.5%", "17.0%"],
      ["Yr 5", "10.0%", "15.0%", "20.0%"],
    ],
  },
  purchasers: {
    headers: ["Year", "Worst", "Base", "Best"],
    rows: [
      ["Yr 1", "200,000", "300,000", "400,000"],
      ["Yr 2", "288,750", "420,000", "577,500"],
      ["Yr 3", "385,875", "551,250", "771,750"],
      ["Yr 4", "491,991", "723,516", "983,981"],
      ["Yr 5", "607,753", "911,630", "1,215,506"],
      ["5-yr", "1,974,369", "2,906,396", "3,948,737"],
    ],
  },
  revenue: {
    headers: ["Year", "Worst ($M)", "Base ($M)", "Best ($M)"],
    rows: [
      ["Yr 1", "3.61", "5.42", "7.23"],
      ["Yr 2", "5.22", "7.59", "10.44"],
      ["Yr 3", "6.97", "9.96", "13.95"],
      ["Yr 4", "8.89", "13.07", "17.78"],
      ["Yr 5", "10.98", "16.47", "21.96"],
      ["5-yr", "35.68", "52.52", "71.35"],
    ],
  },
  netContribution: {
    headers: ["Year", "Worst ($M)", "Base ($M)", "Best ($M)"],
    rows: [
      ["Yr 1", "1.45", "2.17", "2.89"],
      ["Yr 2", "2.09", "3.04", "4.17"],
      ["Yr 3", "2.79", "3.98", "5.58"],
      ["Yr 4", "3.56", "5.23", "7.11"],
      ["Yr 5", "4.39", "6.59", "8.79"],
      ["5-yr", "14.27", "21.01", "28.54"],
    ],
  },
  sensitivity:
    "At 30% net margin, 5-yr base = $15.76M. At 50%, 5-yr base = $26.26M. Net margin will be set by the negotiated wholesale and platform terms.",
};

export const integration = {
  title: "Integration Approach",
  subtitle: "Clean split between Veek and the MVNE partner — the customer never sees the seam.",
  veek: {
    label: "Veek owns",
    items: [
      "Customer relationship and app UX",
      "Bundle pricing (BRL + Gigacoins)",
      "Brand, marketing, in-app placement",
      "Customer support — tier 1",
      "The Gigacoins ledger and earn/burn rules",
    ],
  },
  mvne: {
    label: "MVNE partner owns",
    items: [
      "eSIM provisioning (GSMA-compliant)",
      "Global wholesale connectivity",
      "eUICC profile management",
      "Network selection & fraud monitoring",
      "Customer support — tier 2 escalation",
      "Compliance with destination networks",
    ],
  },
  phases: [
    { phase: "Discovery", duration: "4 weeks", body: "Validate customer base, ARPU, Gigacoins economics, app integration surface area, ANATEL / LGPD posture." },
    { phase: "MVP", duration: "8–10 weeks", body: "Single bundle (5GB / 7 days / global), purchase + activation + usage meter in the Veek app, BRL-only payment." },
    { phase: "Expansion", duration: "+12 weeks", body: "Multi-bundle catalogue, regional plans, Gigacoins earn-and-burn, push journeys, top-up." },
    { phase: "Optimise", duration: "Ongoing", body: "Itinerary-aware recommendations, predictive offers, cross-sell into adjacent products." },
  ],
};

export const timeline = {
  title: "Timeline",
  milestones: [
    { milestone: "Joint working session", when: "Within 2 weeks of approval" },
    { milestone: "Commercial term sheet signed", when: "+4 weeks" },
    { milestone: "MVP scope locked", when: "+6 weeks" },
    { milestone: "MVP in market (soft launch to 5% of base)", when: "+14 weeks" },
    { milestone: "Full launch across the Veek base", when: "+22 weeks" },
    { milestone: "First Gigacoins burn for travel data", when: "+24 weeks" },
  ],
};

export const otherOpportunities = {
  title: "Other Opportunities",
  subtitle: "Adjacent revenue plays that share the same Veek app distribution and MVNE partnership.",
  items: [
    {
      title: "Inbound Brazil eSIM",
      body: "A mirror proposition: travellers coming to Brazil buy a Veek-branded eSIM before they fly. Monetise foreign demand on Brazilian network capacity.",
    },
    {
      title: "PersAIc",
      body: "AI-driven persona segmentation across the Veek base — sharpens which customers get which travel offers, and when.",
    },
    {
      title: "CXG",
      body: "Digital experience and contact-centre support integrated with Veek's existing CX stack.",
    },
    {
      title: "Bitdefender",
      body: "Connected-device security and identity protection, bundled with the travel eSIM or sold standalone.",
    },
    {
      title: "Xanite",
      body: "Customer value management — retention, upsell, and churn defence around the travel proposition.",
    },
  ],
};

export const cta = {
  title: "Ready to take Veek across the border?",
  subtitle:
    "Next step: a joint working session. We'll walk Veek's product, commercial, and brand leads through the model line-by-line, take inputs, and re-run the numbers against Veek's actual data.",
  primary: { label: "Request a working session", href: "mailto:edwardw@mvne.co.za?subject=Veek%20Travel%20eSIM%20working%20session" },
  secondary: { label: "Read the long-form proposal", href: "https://github.com/51andlearning/veek-esim-proposal" },
};

export const footer = {
  confidentiality:
    "This document is confidential. It may not be presented to another party without consent from the MVNE partner and Veek. Disclosing, copying, distributing, or taking any action in relation to the contents of this information is strictly prohibited.",
  caveat:
    "All figures are directional and pending validation against Veek internal data. See docs/ASSUMPTIONS.md for the full caveats list.",
};
