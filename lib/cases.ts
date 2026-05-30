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
  honest_take: string;
  image?: string;
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
      "~70% of Paytm Gold users made a single investment and went dormant within 30 days. Push notifications had stopped moving the needle — open rates were falling, and users who came back once rarely came back again.",
    problem:
      "We needed repeat investment behavior without discounting the product — margin risk and long-term precedent ruled that out early. The bet was whether status and competition could do what money couldn't.",
    what_i_did: [
      "Designed the full campaign mechanics end-to-end: time-bound contest period, leaderboard ranking by points earned per rupee invested, and auto-enrollment on qualifying purchases.",
      "Built the points system: percentage of investment amount converted to points, with real-time leaderboard updates creating live competition between users.",
      "Owned every entry point across the app: landing page CTA, hero banner, and post-investment success screen — each tuned for enrollment.",
      "Defined edge-case logic for tie-breaking across ranks, including multi-way ties — the kind of decisions that never make the PRD but break trust if handled wrong.",
      "Worked through regulatory and legal constraints to structure the campaign in a way that felt seamless while staying fully compliant.",
    ],
    outcome:
      "28% more lump sum investments during the campaign compared to the 4 weeks before it. The post-investment enrollment screen became one of the highest-converting touchpoints in the flow. Users came back daily to check their rank — turning a one-time product into a daily habit for the campaign window.",
    learnings:
      "Gamification only works when the stakes feel real. The leaderboard created genuine competition — users refreshed their rank multiple times a day. The hardest part wasn't the mechanics; it was the edge cases and making legal constraints feel invisible to the user.",
    honest_take:
      "What I'd rebuild: a post-campaign re-engagement hook. Investments returned to baseline within 2 weeks of the campaign ending — which means we drove activity, but not habit. The next version needs a mechanic that transfers that urgency into something stickier.",
    image: "/cases/gold-rush.png",
  },
  {
    id: "02",
    slug: "craft",
    label: "CRAFT(Customer Response Analysis & Feature Translator)",
    company: "Paytm",
    tags: ["LLM", "Agentic", "Product Ops"],
    headline: "Consumer issues compound for days before anyone acts. What if the system could diagnose, prioritize, and write the fix — before you even open Jira?",
    context:
      "PMs were spending 30–45 minutes manually writing each Jira ticket from memory, working off 1,000+ weekly support signals with no way to rank what was actually hurting users most. Issues compounded for days before reaching an engineering backlog — and the tickets that did arrive were often too vague to act on without back-and-forth.",
    problem:
      "I started by building the CST Dashboard — a tool that gave the team real-time visibility into what was breaking. That solved the awareness problem. But the real bet was that the last mile — turning insight into a ready-to-execute ticket — was worth more than better dashboards. Knowing what's wrong and being able to act on it are two different things.",
    what_i_did: [
      "Built the CST Dashboard: ingests live consumer conversations from DevRev, clusters them by issue type, and ranks severity using LLMs — giving the team real-time visibility into what's actually hurting users.",
      "Designed the 4-stage CRAFT pipeline on top: Capture (ingest signals) → Sense (cluster and rank) → Define (map to engineering scope) → Ship (auto-create Jira).",
      "Defined the input sources: DevRev tickets, email threads, Slack messages, and CST Dashboard escalations — all flowing into one pipeline.",
      "Structured the Jira output: Context, Technical Approach (numbered steps), Implementation Sub-tasks, Test Case Sub-tasks, Acceptance Criteria — every ticket ready for an engineer to pick up on day one.",
      "Designed the AI agent chat interface — PMs can describe any issue in plain English and CRAFT drafts a complete, prioritized ticket with context, labels, and acceptance criteria.",
    ],
    outcome:
      "Consumer signal to structured Jira ticket in under 60 seconds, down from 30–45 minutes of manual PM work. The CST Dashboard gave the team real-time severity visibility for the first time. Vague, one-liner tickets dropped to near zero in the sprints after rollout — engineers spend time building, not decoding.",
    learnings:
      "The hardest design decision was making CRAFT opinionated, not passive. A tool that just transcribes what you say isn't useful. CRAFT needed to tell you what matters, rank the priority, and flag when something can be ignored. That shift from 'note-taker' to 'analyst' is what made it worth building.",
    honest_take:
      "What I'd add on day two: a feedback loop where engineers rate each auto-generated ticket — so the model learns what 'good' means for this specific codebase and gets better over time.",
  },

  {
    id: "03",
    slug: "digital-silver",
    label: "Digital Silver",
    company: "Paytm",
    tags: ["0→1", "Silver", "Fintech"],
    headline: "Launching an entirely new asset class from zero. How do you get users to trust and invest in something they've never heard of?",
    context:
      "Paytm Gold had proven user trust and strong distribution. The real question with Silver wasn't awareness — it was whether a second metal could bring in net-new investment, or whether it would just split the same wallet users already spent on Gold.",
    problem:
      "The risk was cannibalisation. If Silver simply pulled rupees away from Gold, we'd have launched a new vertical that grew nothing. The goal was for Silver to be additive — a complement that expanded the overall metals portfolio, not a competitor for the same money.",
    what_i_did: [
      "Mapped Silver's UX 1:1 onto Gold's buy and sell flows — so existing users already knew how to use it before they'd read a single word.",
      "Embedded trust signals at the point of purchase: MMTC-PAMP custodian badge and purity certification visible before the buy CTA.",
      "Positioned Silver as a complement to Gold — a way to diversify within metals — so it pulled in fresh investment instead of cannibalising the core product.",
      "Worked with compliance and business teams on custodian structure and regulatory framing for a brand-new asset class.",
    ],
    outcome:
      "Digital Silver picked up traction fast — investment rates in the first quarter matched what Gold itself saw in its early months, and it brought in net-new activity rather than eating into Gold. Revenue came in 30% above what we projected at the start.",
    learnings:
      "Launching a new vertical inside an existing super-app is a different challenge than building from scratch. You have distribution, but you also have user expectations shaped by the product they already know. The biggest lever was making Silver feel familiar, not foreign.",
    honest_take:
      "If I ran it again, SIP would have been the hero — not one-off buys. A recurring Silver SIP is what builds a real habit and the steady, net-new behaviour we were after. We still haven't shipped it, and that's the first lever I'd pull.",
    image: "/cases/digital-silver.png",
  },
  {
    id: "04",
    slug: "multiple-sips-targets",
    label: "Multiple SIPs + Targets",
    company: "Paytm",
    tags: ["SIP", "Retention", "UX"],
    headline: "SIPs felt like a forgotten autopay, not a savings habit. Could giving them something to aim at make people care?",
    context:
      "~90% of users who set up a SIP never came back to check on it. It ran in the background like a forgotten autopay — no connection, no reason to return. Activation was low and quiet churn was a persistent problem.",
    problem:
      "The bet was that adding meaning — not more features — was the real lever. Users didn't need more SIP options; they needed a reason to care about the one they already had.",
    what_i_did: [
      "Enabled users to run multiple SIPs at once, each set up and managed independently.",
      "Designed the Targets feature: users can attach what they're saving for to each SIP — a trip, a wedding, a new phone — giving the SIP an identity beyond 'monthly debit'.",
      "Built target naming directly into the SIP setup flow — zero friction between 'create SIP' and 'name what it's for'.",
      "Created a dedicated view so users can see all their SIPs and what each one is working toward at a glance.",
    ],
    outcome:
      "25% more users started a new SIP in the weeks after launch. Users who named a target engaged more than those who didn't. The feature is live and being actively tracked — early signals are directionally strong.",
    learnings:
      "The feature that drives retention isn't always the one with the most technical complexity. Sometimes it's just giving users a reason to feel something about what they're doing with their money. A target did that.",
    honest_take:
      "Target amounts and progress tracking are the natural next step — users can name what they're saving for today, but can't set how much it'll cost or watch themselves get closer. That's the piece that would complete the habit loop.",
    image: "/cases/multiple-sips-targets.png",
  },
  {
    id: "05",
    slug: "gold-coins",
    label: "Gold Coins",
    company: "Paytm",
    tags: ["Loyalty", "Retention", "Gold"],
    headline: "What if every payment earned you gold? Building Paytm's first coin-based loyalty loop — from earning to redemption.",
    context:
      "Paytm Gold had no real loyalty hook. Users invested, then left — there was nothing that made them feel rewarded for coming back, and nothing tying everyday Paytm activity to the gold habit. Gold Coins was a large, cross-team charter; I worked on it as one of the people shaping the experience, not a solo build.",
    problem:
      "The objective came first: give users something genuinely meaningful for their loyalty — a reward that grows, not a one-off cashback that's spent and forgotten. Cashback burns margin without building habit. The system to deliver that reward was designed around the objective, not the other way round.",
    what_i_did: [
      "Shaped the core idea with the team: a coin currency users earn through everyday actions and redeem for real Digital Gold — a reward that grows over time instead of a discount spent once.",
      "Worked on the earn-to-redeem journey: how coins are earned, where users see their balance, and how they turn coins into actual gold.",
      "Contributed to the landing experience — a visual coin store that fills up as the balance grows, coin history, and a redemption flow that gives new users clear ways to start earning.",
      "Helped define the welcome moment: a coin bonus for new users on first open, rolled out in controlled stages for a safe launch.",
      "Collaborated across several cross-functional teams to bring the pieces together — earning rules, balance, redemption, and showing coins consistently across the app's key discovery points (home, offers, passbook).",
    ],
    outcome:
      "Gold Coins did more than drive loyalty — it grew the core business. Daily gold transactions rose more than 30%, driven both by users redeeming coins into real gold and by a lift in manual gold purchases alongside it. It became a new organic engine for gold awareness and acquisition across the wider Paytm ecosystem.",
    learnings:
      "Building a loyalty currency means designing for the entire arc — not just the earning moment, but the moment a user realises their coins are actually worth something. Seeing the coin store fill up as the balance grew was a small detail that made that arc feel tangible.",
    honest_take:
      "The piece I'd push for next is a standardised streak system for earning coins — rewarding users for showing up, not just transacting. A streak blends a boost lever with an organic habit, turning scattered earning moments into a daily reason to come back.",
    image: "/cases/gold-coins.png",
  },
  {
    id: "06",
    slug: "meera-jewellery",
    label: "Meera Jewellery",
    company: "Plus Gold",
    tags: ["E-commerce", "Gold", "Jewellery"],
    headline: "What if your digital gold balance could buy you real jewellery? Building the bridge between savings and spend.",
    context:
      "Plus Gold users built up digital gold savings over time, but had only one way to use them: sell-to-cash. Meera Jewellery added a second path — spend it on something real and tangible.",
    problem:
      "The trust gap wasn't the e-commerce logic — it was the physical leap. Users didn't believe a digital balance would become real jewellery at their door. That belief had to be designed into the product, not assumed.",
    what_i_did: [
      "Designed the jewellery e-commerce flow end-to-end: product browsing, SKU selection, gold balance as payment, and checkout.",
      "Worked across SKUs with varying gold weights, making sure the balance-to-product mapping was clear and felt trustworthy — not like a unit conversion problem.",
      "Defined the redemption UX to feel like 'spending your savings' rather than a technical gold transfer — tone and framing mattered as much as the flow itself.",
    ],
    outcome:
      "Meera Jewellery drove 20% of Plus Gold's revenue in its launch month — giving accumulated savings a real, physical destination for the first time, and proving users would convert a digital balance into something they could hold.",
    learnings:
      "The hardest part wasn't the e-commerce logic — it was making the redemption feel like a moment. Buying jewellery with savings you've built up over months should feel meaningful, not transactional. Getting that tone right in the UX was the real design challenge.",
    honest_take:
      "A jewellery catalogue lives or dies on trust in delivery and returns, not just the buy flow. If I'd had more time, that's where I'd have gone next — making the post-purchase experience as reassuring as the moment of redemption itself.",
    image: "/cases/meera-jewellery.png",
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
