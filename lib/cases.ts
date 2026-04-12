export type CaseFile = {
  id: string;
  slug: string;
  label: string;
  company: string;
  tags: string[];
  headline: string;
  context: string;
  problem: string;
  what_i_did: string[];
  outcome: string;
  learnings: string;
};

export const cases: CaseFile[] = [
  {
    id: "01",
    slug: "gold-rush",
    label: "Gold Rush",
    company: "Paytm",
    tags: ["Gamification", "Gold", "Growth"],
    headline: "A leaderboard for gold investors. Can gamification turn passive savers into active participants — at scale?",
    context:
      "Paytm Gold serves millions of users, but a large chunk of the base makes a one-time investment and goes dormant. The challenge: how do you re-engage them without discounting the product or spamming them with push notifications?",
    problem:
      "We needed a mechanism that would drive repeat investments, create urgency, and feel rewarding — without compromising the core product experience. Discounts were off the table. Something had to make users want to come back.",
    what_i_did: [
      "Designed the full campaign mechanics end-to-end: time-bound contest period, leaderboard ranking by points earned per rupee invested, and auto-enrollment on qualifying purchases.",
      "Built the points system: percentage of investment amount converted to points, with real-time leaderboard updates creating live competition between users.",
      "Owned every entry point across the app: landing page CTA, hero banner, and post-investment success screen — each optimised for enrollment conversion.",
      "Defined edge-case logic for tie-breaking across ranks, including complex multi-way ties — the kind of decisions that never make the PRD but break trust if handled wrong.",
      "Navigated regulatory and legal constraints to structure the campaign in a way that felt seamless to users while staying fully compliant.",
    ],
    outcome:
      "Gold Rush became the highest-engagement campaign in the Gold vertical. 28% increase in lump sum contributions during the campaign period. The post-investment enrollment screen became one of the highest-converting touchpoints in the flow. Users returned daily to check leaderboard positions — turning a one-time investment product into a habit loop.",
    learnings:
      "Gamification only works when the stakes feel real. The leaderboard created genuine competition — users refreshed their rank position multiple times a day. The hardest part wasn't the mechanics, it was the edge cases and making legal constraints feel invisible to the user.",
  },
  {
    id: "02",
    slug: "craft",
    label: "CRAFT(Customer Response Analysis & Feature Translator)",
    company: "Paytm",
    tags: ["LLM", "Agentic", "Product Ops"],
    headline: "Consumer issues compound for days before anyone acts. What if the system could diagnose, prioritize, and write the fix — before you even open Jira?",
    context:
      "Gold is a consumer-facing product. Thousands of support tickets pour in weekly across Sell, KYC, purchases, and SIP flows. But issues take days to reach engineering backlogs, allowing complaints to compound. There was no systematic way to rank which problems hurt users most — decisions were reactive, fixing what was loudest, not what was most damaging.",
    problem:
      "I started by building the CST Dashboard — a dashboard agent that fetches live conversations from DevRev and applies advanced LLMs to surface what's breaking, where, and how severe it is. That solved the visibility problem. But turning those insights into engineering work was still manual and error-prone. A PM would see a spike, open Jira, write a vague ticket from memory, and the engineer would spend the first hour just figuring out what to do. CRAFT was built to close that last mile.",
    what_i_did: [
      "Built the CST Dashboard: an agent-powered dashboard that ingests live consumer conversations from DevRev, clusters them by issue type, and ranks severity using LLMs — giving the team real-time visibility into what's actually hurting users.",
      "Designed the 4-stage CRAFT pipeline on top of it: Capture (ingest signals) → Sense (cluster and rank) → Define (map to engineering scope) → Ship (auto-create Jira).",
      "Defined the input sources: DevRev tickets, email threads, Slack messages, and CST Dashboard escalations — all flowing into one pipeline.",
      "Structured the Jira output format: Context, Technical Approach (numbered steps), Implementation Sub-tasks, Test Case Sub-tasks, Acceptance Criteria — every ticket ready for an engineer or AI coding agent to pick up on day one.",
      "Designed the AI agent chat interface — PMs can describe any issue in plain English and CRAFT drafts a complete, prioritized ticket with context, labels, and acceptance criteria.",
    ],
    outcome:
      "Consumer signal to structured Jira ticket in under 60 seconds — versus 30–45 minutes of manual PM work. The CST Dashboard gave the team real-time severity visibility for the first time. CRAFT eliminated vague, one-liner tickets entirely — every ticket now ships with implementation steps, test sub-tasks, and pre-set priority. Engineering spends time building, not decoding.",
    learnings:
      "The hardest design decision was making CRAFT opinionated, not passive. A tool that just transcribes what you say isn't useful. CRAFT needed to tell you what matters, rank the priority, and flag when something can be ignored. That shift from 'note-taker' to 'analyst' is what made it worth building.",
  },
  {
    id: "03",
    slug: "digital-silver",
    label: "Digital Silver",
    company: "Paytm",
    tags: ["0→1", "Silver", "Fintech"],
    headline: "Launching an entirely new asset class from zero. How do you get users to trust and invest in something they've never heard of?",
    context:
      "Paytm already had Digital Gold — a proven product with strong user trust. The question was whether a new asset class, Digital Silver, could find traction with the same user base and distribution muscle.",
    problem:
      "Silver had no pre-existing mental model for most users. We had to build trust, explain the product, and drive first-time investment — all while ensuring the new vertical didn't cannibalize Gold.",
    what_i_did: [
      "Launched the Digital Silver vertical end-to-end on Paytm — from zero.",
      "Defined the core flows: buy, sell, and SIP for Silver with familiar UX patterns borrowed from Gold to reduce learning curve.",
      "Worked with the business and compliance teams to align on custodian partnerships and regulatory framing.",
      "Designed onboarding and education touchpoints to build trust with users encountering digital silver for the first time.",
    ],
    outcome:
      "Digital Silver was live. GMV and revenue from the vertical contributed meaningfully to upstream numbers, with a +30% revenue uptake tracked post-launch.",
    learnings:
      "Launching a new vertical inside an existing super-app is a different challenge than building from scratch. You have distribution, but you also have user expectations shaped by the products they already know. The biggest lever was making Silver feel familiar, not foreign.",
  },
  {
    id: "04",
    slug: "multiple-sips-goals",
    label: "Multiple SIPs + Goals",
    company: "Paytm",
    tags: ["SIP", "Retention", "UX"],
    headline: "SIPs felt like a forgotten autopay, not a savings habit. Could giving them a purpose actually make people care?",
    context:
      "Users could set up a single SIP for Gold or Silver. But most users who set one up would forget about it — it ran in the background with no emotional connection. Activation and engagement were low.",
    problem:
      "A SIP without a goal is just a debit. We needed to give users a reason to not just set it up, but to actually care about it — to check on it, feel progress, and keep going.",
    what_i_did: [
      "Enabled users to run multiple SIPs simultaneously on both Gold and Silver.",
      "Designed the Goals feature: users could attach a personal goal to each SIP — a trip, a wedding, a new phone — and track progress toward it.",
      "Built goal naming, target amount, and visual progress indicators directly into the SIP management flow.",
      "Created a dedicated Goals view so users could see all active goals and their status at a glance.",
    ],
    outcome:
      "New SIP signups increased by 25%. Active SIP count rose meaningfully — users who set goals engaged with the feature more consistently and stayed longer. The number of users running multiple SIPs simultaneously also increased, turning a single-use feature into a multi-purpose savings habit.",
    learnings:
      "The feature that drives retention isn't always the one with the most technical complexity. Sometimes it's just giving users a reason to feel something about the thing they're doing with their money. Goals did that.",
  },
  {
    id: "05",
    slug: "meera-jewellery",
    label: "Meera Jewellery",
    company: "Plus Gold",
    tags: ["E-commerce", "Gold", "Jewellery"],
    headline: "What if your digital gold balance could buy you real jewellery? Building the bridge between savings and spend.",
    context:
      "Plus Gold users accumulate digital gold savings over time. The question was: what's the most meaningful thing they can do with it? Meera Jewellery offered an answer — a curated jewellery e-commerce flow where savings could become something tangible.",
    problem:
      "Translating a digital savings balance into a physical purchase involves trust, logistics, and UX complexity. Users had to believe their gold balance would actually become the jewellery they ordered — and the flow had to make that feel simple.",
    what_i_did: [
      "Designed the jewellery e-commerce flow end-to-end: product browsing, SKU selection, gold balance as payment method, and checkout.",
      "Worked across multiple jewellery SKUs with varying gold weights, making sure the balance-to-product mapping was clear and trustworthy.",
      "Defined the UX for a redemption flow that felt more like 'spending your savings' than a technical gold transfer.",
    ],
    outcome:
      "The Meera Jewellery flow is live, giving Plus Gold users a meaningful destination for their accumulated savings. Work is ongoing to expand the SKU catalogue and optimize conversion.",
    learnings:
      "The hardest part of this wasn't the e-commerce logic — it was making the redemption feel emotional. Buying jewellery with savings you've built up over months should feel like a moment. Getting that tone right in the UX was the real design challenge.",
  },
];

export function getCaseBySlug(slug: string): CaseFile | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getAdjacentCases(slug: string): { prev: CaseFile | null; next: CaseFile | null } {
  const idx = cases.findIndex((c) => c.slug === slug);
  return {
    prev: idx > 0 ? cases[idx - 1] : null,
    next: idx < cases.length - 1 ? cases[idx + 1] : null,
  };
}
