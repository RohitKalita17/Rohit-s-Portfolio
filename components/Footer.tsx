"use client";

import { ExternalLink, X, GitBranch, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: ExternalLink, label: "LinkedIn", href: "#" },
  { icon: X, label: "X / Twitter", href: "#" },
  { icon: GitBranch, label: "GitHub", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@rohitkalita.com" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{ background: "#0A0A0A", borderTop: "1px solid #1E1E1E" }}
      className="py-16"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-2"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            Let&apos;s talk
          </h2>
          <p
            className="text-sm mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Product, ideas, LLMs, or just chai.
          </p>

          <a
            href="mailto:hello@rohitkalita.com"
            className="inline-block px-8 py-3 rounded-lg text-sm font-medium transition-all duration-200 mb-10"
            style={{
              background: "var(--accent)",
              color: "#fff",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--accent-hover)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--accent)";
            }}
          >
            Let&apos;s talk →
          </a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6 mb-10">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-colors duration-200"
                style={{ color: "var(--text-tertiary)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--text-tertiary)";
                }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Status line */}
          <p
            className="text-xs"
            style={{ color: "var(--text-tertiary)" }}
          >
            📍 Delhi · 🔨 Building at Paytm · 🤖 Exploring LLMs · ☕ Fueled by chai
          </p>

          <p
            className="text-xs mt-4"
            style={{ color: "#333" }}
          >
            Built with Next.js · This portfolio is a product.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
