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
    headline: "Users tell us the moment something breaks. The slow part is everything after — making sense of that response, and turning it into a fix. What if the gap between a user's reaction and a shipped change closed to almost nothing?",
    context:
      "It started with the CST Dashboard — where we began. The team was working off thousands of weekly support signals with no way to see what was actually hurting users, so we built a tool that ingested live consumer conversations, clustered them by issue, and ranked severity. For the first time we could see what was breaking in real time. But awareness was only the first step — the harder, slower part was everything after: making sense of why users were reacting, diagnosing the leaking funnel behind it, deciding what to build, and turning that into work engineers could pick up.",
    problem:
      "The CST Dashboard solved 'what's wrong'. It didn't touch the rest of the PM cycle — and that cycle was where the time went. Reading a user reaction back to its root cause meant manually digging through funnels, the data warehouse, and the codebase. Turning insight into a Jira ticket meant 30–45 minutes of writing from memory, and the tickets that came out were often too vague to act on. The bet was that a single workspace could carry a PM from a user's response all the way to an engineer-ready change — not just automate the typing at the end.",
    what_i_did: [
      "Built the CST Dashboard as the starting point: ingests live consumer conversations, clusters them by issue type, and ranks severity with LLMs — giving the team real-time visibility into what's actually hurting users.",
      "Designed CRAFT on top — a PM workspace, not a ticket tool: scan KPIs and funnels, surface growth ideas straight from the signals coming through, and initiate Jira in one place. The point was to cover the whole loop, from spotting a reaction to shipping a fix.",
      "Built the agentic chat at the centre of CRAFT — a PM chats in plain English and can either create a Jira ticket on the spot, or kick off a PRD: a concise use case in a standardised format. Because it reads the repo, it understands what a given change actually touches, and reverts with the right questions and edge cases before anything gets written.",
      "Structured the Jira output into a real framework — Context, detailed stories, and broken-down engineering tasks with acceptance criteria — so tickets land ready to execute and engineers spend their time building, not decoding.",
      "As an internal tool for bringing this onto the file system matured, we extended the same workflow into an IDE-driven setup: multiple commands that orchestrate several agents, each directed through markdown files — so a PM can run the entire cycle from an IDE using Claude Code.",
      "Built the knowledge base — the piece the older setup was missing. The earlier version reached for funnels, called the repo directly to find gaps, and queried the data warehouse live every time. We grounded it instead: schemas attached, funnel logic explained step by step, and scripts to pull repo details — so the agents diagnose against the real product, not a guess.",
    ],
    outcome:
      "A PM now has two ways in: CRAFT to read KPIs, run funnel analysis, chat to draft a ticket or a repo-aware PRD — or the file-system setup in an IDE, driving the same cycle through Claude Code. Funnel analysis that used to be a manual dig is grounded in real schemas and data, so a drop gets explained, not just spotted. Ticket-writing collapsed from 30–45 minutes of vague notes to minutes of structured, engineer-ready work. A concrete example: CRAFT surfaced a spike in PAN–Aadhaar mismatch failures, traced it to the root cause, and drove a pre-check nudge that resolved it — exactly the kind of leak that used to compound silently for days before anyone connected the dots. The downstream effect is the one that matters: user reactions that used to compound for days get diagnosed and shipped faster, which users feel as fewer broken flows and quicker fixes.",
    learnings:
      "The leverage wasn't the chat or the ticket formatting — it was the knowledge base. An agent that doesn't understand the funnel, the schema, or the codebase gives you confident, generic answers. Once it was grounded in how the product actually works, the same model went from 'note-taker' to something that could genuinely diagnose. Grounding beat cleverness every time.",
    honest_take:
      "What we'd push on next is a feedback loop: let engineers rate each generated ticket so the knowledge base learns what 'good' means for this codebase and the diagnosis gets sharper over time.",
    image: "/cases/craft.png",
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
      "Gold Coins did more than drive loyalty — it grew the core business. Daily gold transactions rose ~35%, driven both by users redeeming coins into real gold and by a ~17% lift in manual gold purchases alongside it. It became a new organic engine for gold awareness and acquisition across the wider Paytm ecosystem.",
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
