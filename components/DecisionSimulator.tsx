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
      "Users' gold sell transactions are failing because the UPI mapper service returns inactive VPAs. You need to fix this fast. What's your approach?",
    options: ["Fix the mapper service at source", "Local fallback + real-time validation"],
    shipped: "Local fallback + real-time validation",
    reasoning:
      "Fixing the mapper is the \"right\" answer on paper — but you don't own that service, and every day it stays broken, users lose trust in selling gold. A locally stored fallback VPA with a real-time validation check via payment switch solved the problem at our layer. A 50ms check that prevents a failed payout is worth more than a fast payout that lands in pending. Result: 27% reduction in sell pending failures — without waiting on another team's roadmap.",
  },
  {
    id: 2,
    question:
      "KYC completion is tanking. Users are getting stuck after Step 1. The obvious fix: shorten the KYC flow. Do you?",
    options: ["Shorten the KYC flow", "Investigate why Step 1 is failing"],
    shipped: "Investigate why Step 1 is failing",
    reasoning:
      "Shorter KYC sounds conversion-friendly until you realise it means weaker identity verification — a compliance and fraud risk in a financial product. The real problem: users entered incorrect PAN/Aadhaar details in Step 1 and had no way to go back. Solution: let users edit with limited retries + clear guidance on name matching. No compliance shortcuts, no fraud exposure. Result: 5x increase in KYC completion. When conversion drops, resist the instinct to simplify — diagnose first.",
  },
  {
    id: 3,
    question:
      "Your event pages convert 13% higher than the standard landing page. A big sale event is coming up. Do you make the event page the default for all users?",
    options: ["Keep standard landing, promote via banner", "Swap default to event page"],
    shipped: "Swap default to event page",
    reasoning:
      "Banners are ignorable — users develop banner blindness in 48 hours. During high-intent periods, the user's mental model already matches the event context: they came to buy, the event page is built to sell. Swapping the default isn't aggressive — it's aligned. Don't promote urgency inside a relaxed page — make the whole experience match the moment. Result: +13% conversion, +32% GMV.",
  },
  {
    id: 4,
    question:
      "Buy button CTR drops at the top of funnel. Your team ships a floating CTA widget that looks promising in early data. When do you scale it?",
    options: ["Scale at first sign of positive lift", "Hold for 2x improvement on limited cohort"],
    shipped: "Hold for 2x improvement on limited cohort",
    reasoning:
      "Scaling early feels productive but is how you ship false positives to 100% of users. A CTA change affects the entire downstream funnel — conversion, payment success, trust, retention. Requiring 2x improvement on a limited cohort before scaling ensures the lift is real, not noise. If the change can't clear a high bar on a small group, it won't hold at scale. Patience at the experiment stage saves you from rollbacks at the production stage.",
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
                is a series of bets — data tells you where to look, judgment and instinct
                tells you what to ship.
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
