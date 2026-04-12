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

const COMMANDS: Record<string, { action: string; response: string }> = {
  projects: { action: "#projects", response: "> navigating to case files..." },
  "case files": { action: "#projects", response: "> opening case files..." },
  about: { action: "#about", response: "> loading the story so far..." },
  help: {
    action: "",
    response: '> commands: "projects", "about", "help"',
  },
};

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
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
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

  // Show input 1.5s after typewriter finishes
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setShowInput(true), reducedMotion ? 0 : 1500);
    return () => clearTimeout(t);
  }, [done, reducedMotion]);

  // Focus input when it appears
  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const handleCommand = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputValue.trim().toLowerCase();
    setInputValue("");

    const match = COMMANDS[cmd];
    if (match) {
      setTerminalOutput((prev) => [...prev, `$ ${cmd}`, match.response]);
      if (match.action) {
        setTimeout(() => {
          const el = document.querySelector(match.action);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 600);
      }
    } else {
      setTerminalOutput((prev) => [
        ...prev,
        `$ ${cmd}`,
        `> command not found. try "help"`,
      ]);
    }
  }, [inputValue]);

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
          <div
            className="px-4 py-3 flex items-center gap-2"
            style={{ background: "#1E1E1E" }}
          >
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

          {/* Terminal body */}
          <div
            className="p-6 md:p-8"
            style={{
              background: "#0A0A0A",
              minHeight: "180px",
              fontFamily: "var(--font-jetbrains), monospace",
            }}
          >
            {/* Typewriter lines */}
            {displayedLines.map((line, idx) => (
              <div key={idx} className="leading-relaxed text-sm md:text-base lg:text-lg">
                {line.startsWith(">") ? (
                  <>
                    <span style={{ color: "var(--accent)" }}>&gt;</span>
                    <span style={{ color: "var(--terminal-text)" }}>
                      {line.slice(1)}
                    </span>
                  </>
                ) : (
                  <span style={{ color: "var(--terminal-text)" }}>{line}</span>
                )}
              </div>
            ))}

            {/* Blinking cursor while typing */}
            {!done && currentLineIdx < LINES.length && (
              <div className="leading-relaxed">
                {displayedLines[currentLineIdx] !== undefined ? null : (
                  <span className="cursor-blink" style={{ color: "var(--accent)" }}>_</span>
                )}
              </div>
            )}

            {/* Command output */}
            {terminalOutput.map((line, idx) => (
              <div
                key={`out-${idx}`}
                className="leading-relaxed text-sm md:text-base"
                style={{ color: line.startsWith("$") ? "var(--text-secondary)" : "var(--accent)" }}
              >
                {line}
              </div>
            ))}

            {/* Interactive input */}
            <AnimatePresence>
              {showInput && (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleCommand}
                  className="flex items-center gap-2 mt-3 leading-relaxed text-sm md:text-base"
                >
                  <span style={{ color: "var(--accent)" }}>$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder='type "projects" or "help"'
                    autoComplete="off"
                    spellCheck={false}
                    className="flex-1 bg-transparent outline-none caret-blue-500"
                    style={{
                      color: "var(--terminal-text)",
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: "inherit",
                    }}
                  />
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CTA */}
        <div
          className="mt-6 text-center transition-opacity duration-700"
          style={{ opacity: done ? 1 : 0 }}
        >
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
