"use client";

import { useState, useEffect, useRef } from "react";

const LINES = [
  "> loading rohit...",
  "> role: Product Manager",
  "> current_build: Paytm Gold & Silver",
  '> philosophy: turning "why is this so hard?" into "that was easy"',
  "> status: shipping ▮",
];

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

  const renderLine = (line: string, idx: number) => {
    const isLastLine = idx === LINES.length - 1;
    const isTypingThisLine =
      !reducedMotion && idx === currentLineIdx && !done;

    // For the last line, separate the ▮ cursor
    const content = isLastLine
      ? line.replace("▮", "")
      : line;

    const showCursor = isLastLine && done;

    const prefix = line.startsWith(">") ? ">" : "";
    const rest = line.startsWith(">") ? line.slice(1) : line;

    return (
      <div key={idx} className="leading-relaxed text-base md:text-lg lg:text-xl">
        {prefix && (
          <span style={{ color: "var(--accent)" }}>&gt;</span>
        )}
        <span style={{ color: "var(--terminal-text)" }}>
          {line.startsWith(">") ? rest : line}
          {isLastLine && !isTypingThisLine && showCursor && (
            <span className="cursor-blink ml-1">▮</span>
          )}
        </span>
      </div>
    );
  };

  return (
    <section
      id="hero"
      style={{ background: "var(--bg-primary)" }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-2xl w-full mx-auto">
        {/* Terminal frame */}
        <div
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
              minHeight: "280px",
              fontFamily: "var(--font-jetbrains), monospace",
            }}
          >
            {displayedLines.map((line, idx) => {
              const isLastLine = idx === LINES.length - 1;
              const isComplete = idx < currentLineIdx || done;

              return (
                <div key={idx} className="leading-relaxed text-base md:text-lg lg:text-xl">
                  {line.startsWith(">") ? (
                    <>
                      <span style={{ color: "var(--accent)" }}>&gt;</span>
                      <span style={{ color: "var(--terminal-text)" }}>
                        {line.slice(1)}
                        {isLastLine && isComplete && done && (
                          <span className="cursor-blink ml-1">▮</span>
                        )}
                      </span>
                    </>
                  ) : (
                    <span style={{ color: "var(--terminal-text)" }}>{line}</span>
                  )}
                </div>
              );
            })}

            {/* Typing cursor on current line */}
            {!done && currentLineIdx < LINES.length && (
              <div className="leading-relaxed text-base md:text-lg lg:text-xl">
                {displayedLines[currentLineIdx] !== undefined ? null : (
                  <span className="cursor-blink" style={{ color: "var(--accent)" }}>_</span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-8 text-center transition-opacity duration-700"
          style={{ opacity: done ? 1 : 0 }}
        >
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            scroll to see what I&apos;ve shipped{" "}
            <span className="inline-block animate-bounce">↓</span>
          </p>
        </div>
      </div>
    </section>
  );
}
