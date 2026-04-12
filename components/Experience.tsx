"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Package, Lightbulb } from "lucide-react";

type Version = {
  version: string;
  company: string;
  period: string;
  role: string;
  shipped: string[];
  lesson: string;
  defaultOpen: boolean;
};

const versions: Version[] = [
  {
    version: "v3.0",
    company: "Paytm",
    period: "Jan 2025 – Present",
    role: "Associate Product Manager · Gold & Silver",
    shipped: [
      "Digital Silver vertical launched from zero — +30% revenue uptake",
      "Multiple SIPs + Goals: gave SIPs a purpose, lifted new SIP signups by 25%",
      "CRAFT: consumer signal → agentic Jira ticket in <60s (vs. 30–45 min manual)",
      "Gold Rush gamification — 28% increase in lump sum contributions",
      "SIP onboarding simplified — 12% MoM increase in successful setups",
      "Week 4 retention boosted 15% via portfolio visibility fixes",
      "20% reduction in CS queries through UI simplification",
    ],
    lesson:
      "Building on real money taught me that precision isn't perfectionism — it's how you avoid breaking trust with millions of users. The wrong call ships to everyone, and you see it in the numbers the next morning.",
    defaultOpen: false,
  },
  {
    version: "v2.1",
    company: "Plus Gold",
    period: "Nov 2024 - Jan 2025",
    role: "Associate Product Manager",
    shipped: [
      "Meera Jewellery vertical launched — 20% of revenue from day one",
      "Golden Rush Festival: 2X points urgency mechanic → 30X transaction volume vs. prior contests",
      "Owned roadmap priorities, PRDs, and stakeholder alignment end-to-end",
    ],
    lesson:
      "A well-designed contest mechanic can do what months of push notifications can't. Urgency is a product decision.",
    defaultOpen: false,
  },
  {
    version: "v2.0",
    company: "Plus Gold",
    period: "July 2024 – Nov 2024",
    role: "Product Management Intern",
    shipped: [
      "SIP funnel optimized — +25% signups, -18% drop-offs",
      "Special Events triggers shipped — generating 20% of daily GMV",
      "Owned PRDs, user stories, and A/B tests for onboarding improvements",
    ],
    lesson:
      "No playbooks, no perfectly defined roles — just problems that needed solving. You either figure it out, or you don't.",
    defaultOpen: false,
  },
  {
    version: "v1.0",
    company: "NextLeap Fellowship",
    period: "Feb 2024 – May 2024",
    role: "Product Management Program",
    shipped: [
      "Became a Top Fellow in the cohort which is being in the Top 5% in a cohort of 200+ Fellows",
      "Built a product for pet parents in India (capstone)",
      "First teardowns, first PRDs, first user research interviews",
      "Frameworks → applied thinking under real constraints",
    ],
    lesson:
      "You learn to build products by trying to break everyone else's. The compulsive 'why is this built this way?' question started here.",
    defaultOpen: false,
  },
];

function VersionBlock({ v, isCurrent }: { v: Version; isCurrent: boolean }) {
  const [open, setOpen] = useState(v.defaultOpen);

  return (
    <div className="relative pl-10 md:pl-12 mb-8">
      {/* Timeline dot — current role is larger with glow */}
      {isCurrent ? (
        <div
          className="absolute top-3 rounded-full"
          style={{
            width: "12px",
            height: "12px",
            left: "10.5px",
            background: "var(--accent)",
            boxShadow: "0 0 8px rgba(59,130,246,0.5)",
          }}
        />
      ) : (
        <div
          className="absolute top-3.5 rounded-full"
          style={{
            width: "8px",
            height: "8px",
            left: "12.5px",
            background: "var(--text-tertiary)",
          }}
        />
      )}

      {/* Header row */}
      <div
        className="rounded-lg px-4 py-3"
        style={{ background: open ? "#141414" : "transparent" }}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center flex-wrap gap-x-3 gap-y-1">
              <span
                className="font-mono text-sm font-semibold"
                style={{ color: isCurrent ? "var(--accent)" : "var(--text-tertiary)" }}
              >
                {v.version}
              </span>
              <span
                className="font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                {v.company}
              </span>
              <span
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {v.period}
              </span>
            </div>
            <span
              className="text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              {v.role}
            </span>
          </div>
          <button
            onClick={() => setOpen((o) => !o)}
            className="shrink-0 text-xs font-medium cursor-pointer mt-1 transition-colors"
            style={{
              color: "var(--accent)",
              background: "none",
              border: "none",
              fontFamily: "var(--font-jetbrains), monospace",
            }}
            aria-expanded={open}
          >
            {open ? "Hide" : "View details"}
          </button>
        </div>
      </div>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="px-4 pb-4 pt-2 rounded-b-lg"
              style={{ background: "#141414" }}
            >
              <div className="space-y-3">
                <div>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    <Package size={12} /> Shipped
                  </span>
                  <ul className="mt-1 space-y-0.5">
                    {v.shipped.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm flex items-start gap-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        <span style={{ color: "var(--accent)" }}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="rounded-md px-3 py-2 mt-2"
                  style={{
                    background: "rgba(59,130,246,0.08)",
                    borderLeft: "2px solid var(--accent)",
                  }}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    <Lightbulb size={12} /> Key lesson
                  </span>
                  <p
                    className="mt-1 text-sm italic"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {v.lesson}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ background: "var(--bg-primary)" }} className="py-16">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--text-primary)", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Changelog
          </h2>

          <div className="relative mt-12">
            {/* Vertical timeline line */}
            <div
              className="absolute top-0 bottom-0 w-0.5"
              style={{
                left: "16px",
                background: "#2a2a2a",
              }}
            />

            {versions.map((v, i) => (
              <VersionBlock key={v.version} v={v} isCurrent={i === 0} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
