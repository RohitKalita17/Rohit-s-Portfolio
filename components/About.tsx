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
    content: "Finance & Actuarial background",
    tooltip: "Started here. Grateful for the data instincts it gave me.",
  },
  {
    type: "remove",
    content: "Textbook frameworks and theory",
    tooltip: "Useful foundation. But frameworks without context are just templates.",
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
    content: "Tearing apart products became a daily habit",
    tooltip: 'Every app I use, I can\'t stop asking "why did they build it this way?"',
  },
  {
    type: "add",
    content: "Building fintech products at Paytm (Gold & Silver)",
    tooltip: "Where real constraints meet real users. Best classroom I've found.",
  },
  {
    type: "add",
    content: "Users + Data + Fast execution > everything else",
    tooltip: "This is the formula. Everything else is noise.",
  },
  {
    type: "add",
    content: "Side quest: falling for LLMs — from using them to understanding how they work",
    tooltip: "Not trying to be trendy. Genuinely obsessed with how these systems think.",
  },
  {
    type: "add",
    content: "Hard work isn't a cliché, it's a competitive advantage",
    tooltip: "Most people don't actually work hard. The ones who do stand out.",
  },
];

const storyParagraphs = [
  "I didn't start in product. My background is Finance and Actuarial science — which sounds like the least obvious path into PM, but it quietly gave me something most people in the role don't have: a genuine comfort with data, numbers, and the kind of structured thinking that survives contact with reality.",
  "The shift happened when I joined a Product Fellowship. That's where I caught the bug — the compulsive \"why is this built this way?\" question that I still haven't been able to turn off. I started tearing apart every app I used. Not casually. Obsessively. Reverse-engineering decisions, second-guessing flows, wondering what data or constraint led someone to that choice.",
  "That obsession led me to Paytm, where I now build Gold and Silver products. The complexity here is unlike anything you read in a PM book — 7 cross-functional teams, regulatory constraints, user psychology across income segments, and edge cases that make you rethink basic assumptions. Every shipped feature taught me something the fellowship couldn't.",
  "Along the way, I fell for LLMs. Not as a trend to stay current on, but as a genuine intellectual rabbit hole — understanding how these systems actually reason, where they fail, and what it means to build products on top of them. I went from heavy user to wanting to understand the internals.",
  "The through-line across all of it: hard work isn't a cliché. It's the actual competitive advantage. Most people think about building great products. Fewer do the unglamorous work of getting there.",
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
