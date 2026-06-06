"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DiffLine = {
  type: "meta" | "remove" | "add";
  content: string;
  tooltip: string | null;
};

const diffLines: DiffLine[] = [
  { type: "meta", content: "// rohit_career.js", tooltip: null },
  {
    type: "remove",
    content: "BBA + textbook business frameworks",
    tooltip: "Gave me structured thinking. But structured thinking without real problems is just theory.",
  },
  {
    type: "remove",
    content: "Watching products from the outside",
    tooltip: "The sidelines had a great view. But I needed to be on the field.",
  },
  {
    type: "add",
    content: 'Product Fellowship → caught the "why is this built this way?" bug',
    tooltip: "The question I can't stop asking. It started here.",
  },
  {
    type: "add",
    content: "Startup intern → full-time PM: no playbooks, just problems",
    tooltip: "You either figure it out or you don't. I figured it out.",
  },
  {
    type: "add",
    content: "Paytm: real users, real money, real consequences",
    tooltip: "A completely different scale and pace. Forces clarity whether you're ready or not.",
  },
  {
    type: "add",
    content: "Building Gold & Silver products at Paytm",
    tooltip: "Where real constraints meet real users. Best classroom I've found.",
  },
  {
    type: "add",
    content: "Users + Data + Fast execution > everything else",
    tooltip: "This is the formula. Everything else is noise.",
  },
  {
    type: "add",
    content: "Going deeper into LLMs — from using, to understanding, to building",
    tooltip: "Not trying to be trendy. Genuinely obsessed with how these systems think.",
  },
  {
    type: "add",
    content: "Built agentic AI workflows at Paytm",
    tooltip: "Turns out the best way to understand these systems is to build with them. The case files have the details.",
  },
  {
    type: "add",
    content: "Hard work isn't a cliché, it's a competitive advantage",
    tooltip: "Most people don't actually do the unglamorous work. The ones who do stand out.",
  },
];

const storyParagraphs = [
  "I'm originally from Guwahati, Assam. I went on to complete my BBA — which gave me a structured way of thinking about business, but more importantly, a lens to understand how decisions actually play out in the real world, not just on paper.",
  "The real shift happened when I joined a Product Fellowship. That's where things clicked. Not in a dramatic, overnight way — but through a growing curiosity I couldn't ignore. I started questioning everything: why does this flow exist? What trade-off led to this decision? What constraint am I not seeing? Products stopped being things I used, and started becoming things I tried to decode.",
  "That curiosity led me to a startup, where I joined as a Product Intern and eventually transitioned into a full-time role. This was where the real learning happened. No playbooks, no perfectly defined roles — just problems that needed solving. I learned how products are actually built from scratch: balancing user needs, business goals, and technical realities. You don't get to hide behind theory in an environment like that. You either figure it out, or you don't.",
  "From there, I moved to Paytm — a completely different scale, and a completely different pace. The environment here forces clarity. You're dealing with real users, real money, and very little room for error. Things move fast, expectations are high, and every decision has consequences. It's the kind of place that sharpens your thinking whether you're ready for it or not.",
  "Lately, I've been going deeper into LLMs — not just using them, but understanding how they work and building with them. At Paytm I've built internal AI workflows that carry a real product problem end to end. It's less about staying current and more about a space that's reshaping how we build altogether.",
  "The thread across all of this is simple: curiosity that doesn't switch off, and a bias toward doing the work. Because at the end of the day, product thinking sounds good in theory — but it's the unglamorous, iterative, figure-it-out-as-you-go process that actually builds anything worth using.",
];

function DiffLineRow({ line, lineNumber }: { line: DiffLine; lineNumber: number }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const prefix = line.type === "remove" ? "-" : line.type === "add" ? "+" : " ";

  const textColor =
    line.type === "meta"
      ? "var(--text-secondary)"
      : line.type === "remove"
      ? "var(--diff-remove)"
      : "var(--diff-add)";

  const bgColor =
    line.type === "remove"
      ? "rgba(248,81,73,0.1)"
      : line.type === "add"
      ? "rgba(46,160,67,0.1)"
      : "transparent";

  return (
    <div>
      <div
        className="relative flex items-start gap-2 px-3 py-1 rounded cursor-default"
        style={{ background: bgColor, color: textColor }}
        onMouseEnter={() => line.tooltip && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => line.tooltip && setExpanded((e) => !e)}
      >
        <span
          className="hidden md:block select-none text-right w-6 shrink-0 text-xs pt-0.5"
          style={{ color: "var(--text-tertiary)" }}
        >
          {lineNumber}
        </span>
        <span className="select-none shrink-0 font-mono text-sm w-3" style={{ color: textColor }}>
          {prefix}
        </span>
        <span className="font-mono text-sm flex-1 break-words" style={{ color: textColor }}>
          {line.content}
        </span>
        {line.tooltip && hovered && (
          <div
            className="absolute z-10 left-8 md:left-12 bottom-full mb-2 max-w-xs rounded-md px-3 py-2 text-sm pointer-events-none"
            style={{ background: "#1E1E1E", color: "var(--text-secondary)", border: "1px solid #333" }}
          >
            {line.tooltip}
          </div>
        )}
      </div>
      {expanded && line.tooltip && (
        <div
          className="md:hidden mx-3 mb-1 mt-0.5 px-3 py-2 rounded text-xs"
          style={{ background: "#1E1E1E", color: "var(--text-secondary)", border: "1px solid #333" }}
        >
          {line.tooltip}
        </div>
      )}
    </div>
  );
}

export default function About() {
  const [view, setView] = useState<"story" | "diff">("diff");

  return (
    <section id="about" style={{ background: "var(--bg-secondary)" }} className="py-16">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Heading + toggle */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold"
              style={{ color: "var(--text-primary)", fontFamily: "var(--font-inter), sans-serif" }}
            >
              The Story So Far
            </h2>

            <div
              className="flex items-center rounded-full p-1 text-sm"
              style={{ background: "var(--bg-tertiary)", border: "1px solid #333" }}
            >
              <button
                onClick={() => setView("diff")}
                className="px-3 py-1 rounded-full transition-all duration-200 text-sm"
                style={{
                  background: view === "diff" ? "var(--accent)" : "transparent",
                  color: view === "diff" ? "#fff" : "var(--text-secondary)",
                  fontFamily: "var(--font-jetbrains), monospace",
                }}
              >
                Brief
              </button>
              <button
                onClick={() => setView("story")}
                className="px-3 py-1 rounded-full transition-all duration-200 text-sm"
                style={{
                  background: view === "story" ? "var(--accent)" : "transparent",
                  color: view === "story" ? "#fff" : "var(--text-secondary)",
                  fontFamily: "var(--font-jetbrains), monospace",
                }}
              >
                Full story
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {view === "story" ? (
              <motion.div
                key="story"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mt-8 space-y-5"
              >
                {storyParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: i === 0 ? "var(--text-primary)" : "var(--text-secondary)" }}
                  >
                    {p}
                  </p>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="diff"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mt-8 rounded-lg overflow-hidden"
                style={{ background: "#1E1E1E", fontFamily: "var(--font-jetbrains), monospace" }}
              >
                <div
                  className="px-4 py-2 text-sm"
                  style={{ background: "#141414", borderBottom: "1px solid #333", color: "var(--text-secondary)" }}
                >
                  rohit_career.js
                </div>
                <div className="py-3">
                  {diffLines.map((line, idx) => (
                    <DiffLineRow key={idx} line={line} lineNumber={idx + 1} />
                  ))}
                </div>
                <p className="px-4 pb-3 text-xs md:hidden" style={{ color: "var(--text-tertiary)" }}>
                  Tap any line to expand
                </p>
                <p className="px-4 pb-3 text-xs hidden md:block" style={{ color: "var(--text-tertiary)" }}>
                  Hover any line to expand
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
