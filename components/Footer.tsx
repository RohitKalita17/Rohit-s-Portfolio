"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Hammer, Bot, Coffee } from "lucide-react";

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13 2 4" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const statusItems = [
  { icon: MapPin, label: "Noida" },
  { icon: Hammer, label: "Building at Paytm" },
  { icon: Bot, label: "Exploring LLMs" },
  { icon: Coffee, label: "Fueled by coffee" },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("rohitkalita05@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer
      id="footer"
      className="py-16"
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
          {/* Label */}
          <p
            className="text-xs uppercase tracking-widest mb-5"
            style={{ color: "#999", fontFamily: "var(--font-jetbrains), monospace" }}
          >
            let&apos;s talk
          </p>

          {/* Heading with coffee icon */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-10 inline-flex items-baseline justify-center gap-2 flex-wrap"
            style={{ color: "#0A0A0A", fontFamily: "var(--font-inter), sans-serif" }}
          >
            <span>Product, Ideas, AI, or just coffee</span>
            <Image
              src="/coffee.jpg"
              alt="coffee"
              width={32}
              height={32}
              className="shrink-0 translate-y-1"
              style={{ objectFit: "contain" }}
            />
          </h2>

          {/* Reach out + social icons */}
          <div className="flex flex-col items-center gap-2 mb-10">
            <div className="flex items-center justify-center gap-5">
              <span
                className="text-sm font-medium"
                style={{ color: "#666", fontFamily: "var(--font-inter), sans-serif" }}
              >
                Reach out
              </span>
              <span style={{ color: "#D0D0D0" }}>|</span>
              <div className="flex items-center gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/rohit-kalita-b5a38b219"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  whileHover={{ y: -2, color: "#3B82F6" }}
                  transition={{ duration: 0.15 }}
                  style={{ color: "#444" }}
                  className="inline-flex"
                >
                  <LinkedInIcon />
                </motion.a>
                <motion.button
                  onClick={handleEmailClick}
                  aria-label="Copy email"
                  className="inline-flex cursor-pointer"
                  whileHover={{ y: -2, color: "#3B82F6" }}
                  transition={{ duration: 0.15 }}
                  style={{ color: "#444", background: "none", border: "none" }}
                >
                  <MailIcon />
                </motion.button>
                <motion.a
                  href="https://www.instagram.com/rohitkalita__?igsh=NTdkbTd3bmo2bnhv&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  whileHover={{ y: -2, color: "#3B82F6" }}
                  transition={{ duration: 0.15 }}
                  style={{ color: "#444" }}
                  className="inline-flex"
                >
                  <InstagramIcon />
                </motion.a>
              </div>
            </div>

            {/* Copied disclaimer */}
            <AnimatePresence>
              {copied && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs"
                  style={{ color: "#3B82F6", fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  email copied to clipboard
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Status chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {statusItems.map(({ icon: Icon, label }) => (
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
                <Icon size={12} />
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
