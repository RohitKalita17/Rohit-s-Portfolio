"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GeometricAvatar1 from "./GeometricAvatar1";

const LINES = [
  "> role: Product Manager",
  "> current_build: Paytm",
  '> philosophy: turning "why is this so hard?" into "that was easy"',
  "> status: building",
];

type Command = {
  desc: string;
  action: "scroll" | "clear" | "print";
  target?: string;
  response?: string;
};

const COMMANDS: Record<string, Command> = {
  projects: { desc: "jump to the case files", action: "scroll", target: "#projects", response: "> opening case files…" },
  experience: { desc: "the changelog", action: "scroll", target: "#experience", response: "> opening the changelog…" },
  about: { desc: "the story so far", action: "scroll", target: "#about", response: "> loading the story so far…" },
  contact: { desc: "ways to reach me", action: "scroll", target: "#footer", response: "> scrolling to contact…" },
  whoami: { desc: "the one-line version", action: "print", response: '> PM @ Paytm — I turn "why is this so hard?" into "that was easy."' },
  clear: { desc: "clear the screen", action: "clear" },
};

// Commands surfaced when someone mistypes — keeps them discoverable without a help dump.
const SUGGESTIONS = ["projects", "experience", "about", "contact", "clear"];

// The discoverable subset surfaced as tappable chips under the prompt.
const QUICK = ["projects", "experience", "about", "contact"];

type Entry =
  | { type: "input"; text: string }
  | { type: "response"; text: string };

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState<Entry[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayedLines(LINES);
      setDone(true);
      return;
    }

    if (currentLineIdx >= LINES.length) {
      setDone(true);
      return;
    }

    const line = LINES[currentLineIdx];

    if (currentChar < line.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedLines((prev) => {
          const next = [...prev];
          next[currentLineIdx] = line.slice(0, currentChar + 1);
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, 40);
    } else {
      timeoutRef.current = setTimeout(() => {
        setCurrentLineIdx((i) => i + 1);
        setCurrentChar(0);
      }, 300);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [reducedMotion, currentLineIdx, currentChar]);

  // Reveal the interactive prompt shortly after the intro finishes.
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setShowInput(true), reducedMotion ? 0 : 1200);
    return () => clearTimeout(t);
  }, [done, reducedMotion]);

  useEffect(() => {
    if (showInput && inputRef.current) inputRef.current.focus();
  }, [showInput]);

  const runCommand = useCallback((raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    // clear wipes the whole session — don't echo it back.
    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    setHistory((prev) => [...prev, { type: "input", text: cmd }]);

    const match = COMMANDS[cmd];
    if (!match) {
      setHistory((prev) => [
        ...prev,
        { type: "response", text: `> command not found: ${cmd}` },
        { type: "response", text: `> available: ${SUGGESTIONS.join(", ")}` },
      ]);
      return;
    }

    if (match.action === "print") {
      setHistory((prev) => [...prev, { type: "response", text: match.response! }]);
    } else if (match.action === "scroll") {
      setHistory((prev) => [...prev, { type: "response", text: match.response! }]);
      setTimeout(() => {
        document.querySelector(match.target!)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }

    inputRef.current?.focus();
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const value = inputValue;
      setInputValue("");
      runCommand(value);
    },
    [inputValue, runCommand]
  );

  return (
    <section
      id="hero"
      style={{ background: "var(--bg-primary)" }}
      className="min-h-[85vh] flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-2xl w-full mx-auto">
        {/* ── Name + Avatar row ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-5 mb-8"
        >
          <GeometricAvatar1 size={104} />

          <div>
            <h1
              className="text-3xl md:text-4xl font-bold"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--font-jetbrains), monospace",
                letterSpacing: "0.01em",
                lineHeight: 1.15,
              }}
            >
              Rohit Kalita
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              style={{
                height: "2px",
                width: "100%",
                background: "linear-gradient(90deg, var(--accent), transparent)",
                marginTop: "6px",
                transformOrigin: "left",
              }}
            />
          </div>
        </motion.div>

        {/* ── Terminal frame ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="rounded-lg overflow-hidden"
          style={{ border: "1px solid #1E1E1E" }}
        >
          {/* Header bar */}
          <div className="px-4 py-3 flex items-center gap-2" style={{ background: "#1E1E1E" }}>
            <div className="w-3 h-3 rounded-full" style={{ background: "#3a3a3a" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#3a3a3a" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#3a3a3a" }} />
            <span
              className="ml-3 text-xs"
              style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-jetbrains), monospace" }}
            >
              rohit.sh
            </span>
          </div>

          {/* Terminal body — clicking anywhere focuses the prompt */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="p-6 md:p-8"
            style={{
              background: "#0A0A0A",
              minHeight: "180px",
              fontFamily: "var(--font-jetbrains), monospace",
              cursor: "text",
            }}
          >
            {/* Typewriter intro */}
            {displayedLines.map((line, idx) => (
              <div key={idx} className="leading-relaxed text-sm md:text-base lg:text-lg">
                {line.startsWith(">") ? (
                  <>
                    <span style={{ color: "var(--accent)" }}>&gt;</span>
                    <span style={{ color: "var(--terminal-text)" }}>{line.slice(1)}</span>
                  </>
                ) : (
                  <span style={{ color: "var(--terminal-text)" }}>{line}</span>
                )}
              </div>
            ))}

            {!done && currentLineIdx < LINES.length && (
              <div className="leading-relaxed">
                {displayedLines[currentLineIdx] !== undefined ? null : (
                  <span className="cursor-blink" style={{ color: "var(--accent)" }}>
                    _
                  </span>
                )}
              </div>
            )}

            {/* Command history */}
            {history.map((entry, idx) => {
              if (entry.type === "input") {
                return (
                  <div key={idx} className="leading-relaxed text-sm md:text-base mt-1" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--accent)" }}>$ </span>
                    {entry.text}
                  </div>
                );
              }
              // response
              return (
                <div key={idx} className="leading-relaxed text-sm md:text-base" style={{ color: "var(--accent)" }}>
                  {entry.text}
                </div>
              );
            })}

            {/* Interactive prompt */}
            <AnimatePresence>
              {showInput && (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="flex items-center gap-2 mt-3 leading-relaxed text-sm md:text-base"
                >
                  <span style={{ color: "var(--accent)" }}>$</span>
                  <div className="relative flex-1">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      autoComplete="off"
                      spellCheck={false}
                      aria-label="Terminal command input"
                      className="w-full bg-transparent outline-none"
                      style={{
                        color: "var(--terminal-text)",
                        caretColor: inputValue ? "var(--accent)" : "transparent",
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: "inherit",
                      }}
                    />
                    {/* Dim hint shown while the prompt is empty — green block cursor leads */}
                    {inputValue === "" && (
                      <div className="absolute inset-0 flex items-center pointer-events-none">
                        <span className="cursor-block" aria-hidden="true" />
                        <span className="ml-2" style={{ color: "var(--text-tertiary)" }}>
                          run a command e.g. &quot;projects&quot;
                        </span>
                      </div>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Quick-command chips — removes the "you must type" gate */}
            <AnimatePresence>
              {showInput && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex flex-wrap items-center gap-2 mt-4"
                >
                  {QUICK.map((c) => (
                    <button
                      key={c}
                      onClick={() => runCommand(c)}
                      className="text-xs transition-all"
                      style={{
                        color: "var(--text-secondary)",
                        background: "#141414",
                        border: "1px solid #2A2A2A",
                        borderRadius: "9999px",
                        padding: "4px 12px",
                        fontFamily: "var(--font-jetbrains), monospace",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#2A2A2A";
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      {c}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-6 text-center transition-opacity duration-700" style={{ opacity: done ? 1 : 0 }}>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            scroll to see what I&apos;ve built{" "}
            <motion.span
              className="inline-block"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.6, repeat: 2, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </p>
        </div>
      </div>
    </section>
  );
}
