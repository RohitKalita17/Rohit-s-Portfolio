"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Version = {
  version: string;
  company: string;
  period: string;
  role: string;
  shipped: string[];
  teams: string;
  lesson: string;
  defaultOpen: boolean;
};

const versions: Version[] = [
  {
    version: "v3.0",
    company: "Paytm",
    period: "2024–Present",
    role: "Product Manager · Gold & Silver",
    shipped: [
      "Physical Gold Coin Redemption",
      "Gold Rush Gamified Campaign",
      "Locker Upgrade UX",
      "GMV Dashboards",
      "WhatsApp Dynamic Messaging",
    ],
    teams: "Product, Engineering, Finance, Legal, Ops, CS, Recon (7 teams)",
    lesson:
      "Alignment across 7 teams taught me that clear writing is the highest-leverage PM skill.",
    defaultOpen: true,
  },
  {
    version: "v2.0",
    company: "Product Fellowship",
    period: "2023–2024",
    role: "Product Management Program",
    shipped: [
      "Built product instincts from scratch",
      "Frameworks → applied thinking",
      "First teardowns, first PRDs",
    ],
    teams: "Cohort of 30 aspiring PMs",
    lesson: "You learn to build products by trying to break everyone else's.",
    defaultOpen: false,
  },
  {
    version: "v1.0",
    company: "The Origin Story",
    period: "2021–2023",
    role: "Finance & Actuarial Work",
    shipped: [
      "Data analysis discipline",
      "Structured thinking frameworks",
      'Caught the "why is this built this way?" bug',
    ],
    teams: "Finance, Analytics",
    lesson: "An unusual path in. I wouldn't trade the data instincts for anything.",
    defaultOpen: false,
  },
];

function VersionBlock({ v }: { v: Version }) {
  const [open, setOpen] = useState(v.defaultOpen);

  return (
    <div className="relative pl-10 md:pl-12 mb-8">
      {/* Timeline dot */}
      <div
        className="absolute left-3 md:left-4 top-2 w-2.5 h-2.5 rounded-full"
        style={{ background: "var(--accent)" }}
      />

      {/* Clickable header */}
      <button
        className="w-full text-left rounded-lg px-4 py-3 transition-colors"
        style={{ minHeight: "44px", background: open ? "#141414" : "transparent" }}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center flex-wrap gap-x-3 gap-y-1">
              <span
                className="font-mono text-sm font-semibold"
                style={{ color: "var(--accent)" }}
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
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ color: "var(--text-secondary)", flexShrink: 0, marginTop: "2px" }}
          >
            <ChevronDown size={18} />
          </motion.span>
        </div>
      </button>

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
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    📦 Shipped
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

                <div>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    🔧 Teams
                  </span>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {v.teams}
                  </p>
                </div>

                <div
                  className="rounded-md px-3 py-2 mt-2"
                  style={{
                    background: "rgba(59,130,246,0.08)",
                    borderLeft: "2px solid var(--accent)",
                  }}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    💡 Key lesson
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
                background: "#1E1E1E",
              }}
            />

            {versions.map((v) => (
              <VersionBlock key={v.version} v={v} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
