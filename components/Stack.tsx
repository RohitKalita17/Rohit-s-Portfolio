"use client";

import { motion } from "framer-motion";

function ToolPill({ name }: { name: string }) {
  return (
    <motion.span
      className="px-3 py-1 rounded-full text-sm cursor-default"
      style={{
        background: "#1E1E1E",
        color: "var(--text-secondary)",
        border: "1px solid transparent",
      }}
      whileHover={{
        borderColor: "rgba(59,130,246,0.3)",
        color: "var(--accent-hover)",
      }}
      transition={{ duration: 0.15 }}
    >
      {name}
    </motion.span>
  );
}

const tools = [
  "SQL",
  "Jira",
  "Figma",
  "CleverTap",
  "Claude / Cursor and other LLMs",
  "Confluence",
];

const beliefs = [
  "Data informs, judgment decides.",
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
                  <ToolPill key={tool} name={tool} />
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
