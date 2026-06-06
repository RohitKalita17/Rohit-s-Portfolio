"use client";

import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "Story" },
  { id: "experience", label: "Changelog" },
  { id: "projects", label: "Case Files" },
  { id: "decisions", label: "Decision Simulator" },
  { id: "stack", label: "How I Work" },
  { id: "footer", label: "Contact" },
];

export default function ScrollProgress() {
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3, rootMargin: "-10% 0px -10% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50"
      aria-label="Section navigation"
    >
      {SECTIONS.map(({ id, label }) => {
        const isActive = activeSection === id;
        const isHovered = hoveredSection === id;

        return (
          <div key={id} className="relative flex items-center justify-end">
            {/* Label — appears to the left on hover */}
            <div
              className="absolute right-6 transition-all duration-200 pointer-events-none"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "translateX(0)" : "translateX(4px)",
              }}
            >
              <span
                className="text-xs whitespace-nowrap px-2 py-1 rounded"
                style={{
                  background: "#1E1E1E",
                  color: "var(--text-secondary)",
                  border: "1px solid #333",
                  fontFamily: "var(--font-jetbrains), monospace",
                }}
              >
                {label}
              </span>
            </div>

            {/* Dot */}
            <button
              onClick={() => scrollTo(id)}
              onMouseEnter={() => setHoveredSection(id)}
              onMouseLeave={() => setHoveredSection(null)}
              aria-label={`Scroll to ${label}`}
              className="rounded-full transition-all duration-300 flex items-center justify-center"
              style={{
                width: isActive ? "12px" : "8px",
                height: isActive ? "12px" : "8px",
                background: isActive ? "var(--accent)" : "rgba(255,255,255,0.2)",
                border: isActive ? "none" : "1px solid rgba(255,255,255,0.1)",
                flexShrink: 0,
                cursor: "pointer",
                padding: 0,
                boxShadow: isActive ? "0 0 8px rgba(59,130,246,0.5)" : "none",
              }}
            />
          </div>
        );
      })}
    </nav>
  );
}
