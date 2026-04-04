"use client";

import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "decisions", label: "Decisions" },
  { id: "stack", label: "Stack" },
  { id: "footer", label: "Footer" },
];

export default function ScrollProgress() {
  const [activeSection, setActiveSection] = useState("hero");

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
      className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-50"
      aria-label="Section navigation"
    >
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          title={label}
          aria-label={`Scroll to ${label}`}
          className="rounded-full transition-all duration-300 flex items-center justify-center"
          style={{
            width: activeSection === id ? "10px" : "6px",
            height: activeSection === id ? "10px" : "6px",
            background: activeSection === id ? "var(--accent)" : "#333",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        />
      ))}
    </nav>
  );
}
