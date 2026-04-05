"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Decision = {
  id: number;
  question: string;
  options: [string, string];
  shipped: string;
  reasoning: string;
};

const decisions: Decision[] = [
  {
    id: 1,
    question:
      "You're the PM for a digital gold product. The buy drawer opens — which input method do you default to?",
    options: ["Grams First", "Rupees First"],
    shipped: "Rupees First",
    reasoning:
      "Users think in rupees, not grams. When someone says \"I want to invest ₹500\", making them convert to grams adds cognitive load. Rupees-first reduces friction at the highest-intent moment. Data confirmed: rupee-first users completed purchases at a higher rate.",
  },
  {
    id: 2,
    question:
      "A user upgrades their locker. The weight difference is 0.0001g — too small to show. What do you display on the success screen?",
    options: ["Success Icon Only", "Show the 0.0001g anyway"],
    shipped: "Success Icon Only",
    reasoning:
      "Showing 0.0001g would technically be accurate but practically confusing. Users upgraded for the tier benefit, not a gram count. A clean success state with the new tier name communicates value. Accuracy that confuses is worse than simplicity that clarifies.",
  },
  {
    id: 3,
    question:
      "Your campaign has a ₹50 cashback reward. Legal needs 8 bullet T&C. Where do you put them?",
    options: ["Show inline, before CTA", "Show in expandable section below"],
    shipped: "Show in expandable section below",
    reasoning:
      "T&C before the CTA creates anxiety before excitement. Lead with the reward, then let users who want to dig in expand the T&C. Conversion-first, compliance-met. Legal was satisfied, users weren't scared off.",
  },
];

export default function DecisionSimulator() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [completed, setCompleted] = useState(false);

  const decision = decisions[currentIdx];

  const handleSelect = (option: string) => {
    if (selected !== null) return;
    setSelected(option);
    setTimeout(() => setShowAnswer(true), 200);
  };

  const handleNext = () => {
    if (currentIdx < decisions.length - 1) {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
      setShowAnswer(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelected(null);
    setShowAnswer(false);
    setCompleted(false);
  };

  return (
    <section id="decisions" style={{ background: "var(--bg-secondary)" }} className="py-16">
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
            Decision Simulator
          </h2>
          <p
            className="mt-2 text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            Real decisions I made. What would you have shipped?
          </p>
        </motion.div>

        <div className="mt-10">
          {completed ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl p-8 text-center"
              style={{
                background: "#1E1E1E",
                border: "1px solid #333",
              }}
            >
              <p
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                That&apos;s a wrap.
              </p>
              <p
                className="text-base mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                Every decision above shipped to real users. Product management
                is a series of bets — the goal is to make them with data, not
                just instinct.
              </p>
              <button
                onClick={handleRestart}
                className="px-6 py-3 rounded-lg text-sm font-medium transition-all"
                style={{
                  border: "1px solid var(--accent)",
                  color: "var(--accent)",
                  background: "transparent",
                }}
              >
                Restart ↺
              </button>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={decision.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl p-6 md:p-8"
                style={{
                  background: "#1E1E1E",
                  border: "1px solid #333",
                }}
              >
                {/* Progress */}
                <div className="flex items-center gap-2 mb-6">
                  {decisions.map((_, i) => (
                    <div
                      key={i}
                      className="h-1 flex-1 rounded-full transition-all duration-300"
                      style={{
                        background:
                          i < currentIdx
                            ? "var(--accent)"
                            : i === currentIdx
                            ? "var(--accent)"
                            : "#333",
                        opacity: i === currentIdx ? 1 : i < currentIdx ? 0.7 : 1,
                      }}
                    />
                  ))}
                  <span
                    className="text-xs ml-1 shrink-0"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {currentIdx + 1}/{decisions.length}
                  </span>
                </div>

                {/* Question */}
                <p
                  className="text-base md:text-lg font-medium leading-relaxed mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  {decision.question}
                </p>

                {/* Options */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {decision.options.map((opt) => {
                    const isSelected = selected === opt;
                    const isOther = selected !== null && selected !== opt;
                    const isShipped = opt === decision.shipped;

                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelect(opt)}
                        disabled={selected !== null}
                        className="flex-1 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                        style={{
                          minHeight: "48px",
                          border: isSelected
                            ? "none"
                            : "1px solid var(--text-secondary)",
                          background: isSelected
                            ? "var(--accent)"
                            : "transparent",
                          color: isSelected
                            ? "#fff"
                            : "var(--text-secondary)",
                          opacity: isOther ? 0.3 : 1,
                          cursor: selected !== null ? "default" : "pointer",
                        }}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {/* Answer reveal */}
                <AnimatePresence>
                  {showAnswer && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6"
                    >
                      <div
                        className="rounded-lg px-4 py-3 mb-4"
                        style={{
                          background:
                            selected === decision.shipped
                              ? "rgba(46,160,67,0.12)"
                              : "rgba(248,81,73,0.08)",
                          border: `1px solid ${
                            selected === decision.shipped
                              ? "rgba(46,160,67,0.3)"
                              : "rgba(248,81,73,0.3)"
                          }`,
                        }}
                      >
                        <p
                          className="text-sm font-semibold mb-1"
                          style={{
                            color:
                              selected === decision.shipped
                                ? "var(--diff-add)"
                                : "var(--diff-remove)",
                          }}
                        >
                          {selected === decision.shipped
                            ? "✓ That's what shipped."
                            : `✗ We shipped: ${decision.shipped}`}
                        </p>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {decision.reasoning}
                        </p>
                      </div>

                      <button
                        onClick={handleNext}
                        className="px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
                        style={{
                          background: "var(--accent)",
                          color: "#fff",
                          border: "none",
                        }}
                      >
                        {currentIdx < decisions.length - 1
                          ? "Next Decision →"
                          : "See Results →"}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
