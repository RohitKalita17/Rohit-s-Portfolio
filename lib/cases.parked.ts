// ─────────────────────────────────────────────────────────────────────────
// PARKED CASE STUDIES — not imported anywhere, so invisible on the live site.
// Kept here (typed + in the repo) so unlaunched work can be restored verbatim.
//
// TO RESTORE "Multiple SIPs + Targets" when it launches:
//   1. Move `parkedMultipleSips` (below) into the `cases` array in `cases.ts`,
//      positioned right AFTER Gold Rush (#04). Set its id to "05".
//   2. Bump Meera Jewellery's id from "05" back to "06" in `cases.ts`.
//   3. Move `parkedMultipleSipsCard` into the `projects` array in
//      `components/Projects.tsx`, after Gold Rush (#04). Set its id to "05",
//      and bump Meera's grid id back to "06".
//   4. Image already lives at /public/cases/multiple-sips-targets.png — nothing
//      to re-add.
//   5. Re-add the changelog line to the v3.0 (Paytm) `shipped` array in
//      `components/Experience.tsx`:
//        "Multiple SIPs + Targets — 25% more users starting a new SIP after launch"
// That's it — identical content, no rewriting.
// ─────────────────────────────────────────────────────────────────────────

import type { CaseFile } from "./cases";

// Full case-detail object (cases.ts shape).
export const parkedMultipleSips: CaseFile = {
  id: "05",
  slug: "multiple-sips-targets",
  label: "Multiple SIPs + Targets",
  company: "Paytm",
  tags: ["SIP", "Retention", "UX"],
  headline:
    "SIPs felt like a forgotten autopay, not a savings habit. Could giving them something to aim at make people care?",
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
};

// Grid-card entry (Projects.tsx `Project` shape).
export const parkedMultipleSipsCard = {
  id: "05",
  slug: "multiple-sips-targets",
  label: "Multiple SIPs + Targets — Paytm",
  problem:
    "SIPs felt like a forgotten autopay, not a savings habit. Could giving them something to aim at make people care?",
  company: "Paytm",
  tags: ["SIP", "Retention", "UX"],
};
