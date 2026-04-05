"use client";

import { motion } from "framer-motion";

const tools = [
  "Jira",
  "Superset",
  "SQL",
  "Figma",
  "CleverTap",
  "MoEngage",
  "Claude / LLMs",
  "Google Sheets",
  "Confluence",
  "Slack",
];

const beliefs = [
  "Data over opinions, always.",
  "Ship fast, learn faster.",
  "The best PRD is the one the engineer didn't need to read twice.",
  "Hard work isn't a cliché — it's a competitive advantage.",
  "Cross-functional chaos is where the magic happens.",
];

export default function Stack() {
  return (
    <section id="stack" style={{ background: "var(--bg-primary)" }} className="py-16">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            How I Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Tools */}
            <div>
              <h3
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: "var(--text-tertiary)" }}
              >
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full text-sm transition-all"
                    style={{
                      background: "#1E1E1E",
                      color: "var(--text-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.border =
                        "1px solid rgba(59,130,246,0.3)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--accent-hover)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.border = "";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--text-secondary)";
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Beliefs */}
            <div>
              <h3
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: "var(--text-tertiary)" }}
              >
                Beliefs
              </h3>
              <ul className="space-y-3">
                {beliefs.map((belief) => (
                  <li key={belief} className="flex items-start gap-2">
                    <span style={{ color: "var(--accent)" }} className="mt-0.5 shrink-0">
                      ·
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {belief}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
