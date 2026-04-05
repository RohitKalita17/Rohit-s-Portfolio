"use client";

import { ExternalLink, X, GitBranch, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const socials = [
  { icon: ExternalLink, label: "LinkedIn", href: "#" },
  { icon: X, label: "X / Twitter", href: "#" },
  { icon: GitBranch, label: "GitHub", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@rohitkalita.com" },
];

const statusItems = [
  { emoji: "📍", label: "Delhi" },
  { emoji: "🔨", label: "Building at Paytm" },
  { emoji: "🤖", label: "Exploring LLMs" },
  { emoji: "☕", label: "Fueled by chai" },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("hello@rohitkalita.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer
      id="footer"
      className="py-20"
      style={{ background: "#FFFFFF", borderTop: "1px solid #E5E5E5" }}
    >
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          {/* Subtext */}
          <p
            className="text-sm uppercase tracking-widest mb-4"
            style={{ color: "#999", fontFamily: "var(--font-jetbrains), monospace" }}
          >
            let&apos;s talk
          </p>

          {/* Heading */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: "#0A0A0A", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Product, ideas, AI, or just chai.
          </h2>

          <p
            className="text-base mb-10"
            style={{ color: "#666", fontFamily: "var(--font-inter), sans-serif" }}
          >
            I read every message. Reach out — no template needed.
          </p>

          {/* Email CTA — click to copy */}
          <div className="flex justify-center mb-10">
            <motion.button
              onClick={handleEmailClick}
              className="group relative inline-flex flex-col items-center gap-1"
              whileHover="hovered"
            >
              <span
                className="text-xl md:text-2xl font-mono font-semibold transition-colors duration-200"
                style={{ color: copied ? "#3B82F6" : "#0A0A0A", fontFamily: "var(--font-jetbrains), monospace" }}
              >
                {copied ? "✓ copied!" : "hello@rohitkalita.com"}
              </span>
              {/* Animated underline */}
              <motion.span
                className="block h-px w-full"
                style={{ background: "#3B82F6", transformOrigin: "left" }}
                variants={{ hovered: { scaleX: 1 }, initial: { scaleX: 0.3 } }}
                initial="initial"
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <span
                className="text-xs mt-1 transition-opacity duration-200"
                style={{ color: "#999", opacity: copied ? 1 : 0.7, fontFamily: "var(--font-inter), sans-serif" }}
              >
                {copied ? "email address copied" : "click to copy · or mailto →"}
              </span>
            </motion.button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-8 mb-12">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ y: -3, color: "#3B82F6" }}
                transition={{ duration: 0.15 }}
                style={{ color: "#555" }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Status pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {statusItems.map(({ emoji, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                style={{
                  background: "#F5F5F5",
                  color: "#444",
                  border: "1px solid #E0E0E0",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                <span>{emoji}</span>
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
