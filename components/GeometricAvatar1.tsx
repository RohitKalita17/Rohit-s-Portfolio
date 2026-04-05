"use client";

import { motion } from "framer-motion";

// Geometric avatar based on Photo 1 — smiling, navy Tommy Hilfiger polo, outdoor setting
export default function GeometricAvatar1({ size = 160 }: { size?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      style={{ width: size, height: size }}
      className="relative"
    >
      {/* Accent glow ring */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
          border: "1.5px solid rgba(59,130,246,0.35)",
        }}
      />

      <svg
        viewBox="0 0 200 220"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        {/* ── Background circle ── */}
        <circle cx="100" cy="110" r="98" fill="#111827" />

        {/* ── Shoulders / shirt (navy polo) ── */}
        <path
          d="M 20 220 L 30 175 Q 50 160 75 158 L 85 165 L 100 170 L 115 165 L 125 158 Q 150 160 170 175 L 180 220 Z"
          fill="#1B2D45"
        />
        {/* Shirt collar */}
        <path
          d="M 85 165 L 100 158 L 115 165 L 108 170 L 100 175 L 92 170 Z"
          fill="#15243A"
        />
        {/* Tommy collar detail */}
        <path d="M 93 162 L 107 162 L 107 167 L 100 172 L 93 167 Z" fill="#243B5A" />

        {/* ── Neck ── */}
        <rect x="85" y="148" width="30" height="22" rx="4" fill="#C4885C" />

        {/* ── Ear left ── */}
        <ellipse cx="44" cy="115" rx="9" ry="13" fill="#C4885C" />
        <ellipse cx="46" cy="115" rx="5" ry="9" fill="#B07545" />

        {/* ── Ear right ── */}
        <ellipse cx="156" cy="115" rx="9" ry="13" fill="#C4885C" />
        <ellipse cx="154" cy="115" rx="5" ry="9" fill="#B07545" />

        {/* ── Face ── */}
        <ellipse cx="100" cy="112" rx="54" ry="62" fill="#C4885C" />

        {/* ── Hair base (dark swept style) ── */}
        {/* Main hair mass */}
        <ellipse cx="100" cy="64" rx="56" ry="40" fill="#161008" />
        {/* Hair swept slightly to right — characteristic of photo 1 */}
        <path
          d="M 44 75 Q 42 50 65 42 Q 85 35 105 38 Q 132 36 150 50 Q 162 62 156 78 Q 145 58 120 54 Q 100 50 80 56 Q 60 62 50 80 Z"
          fill="#1A1208"
        />
        {/* Front hair sweep — slightly messy, casual */}
        <path
          d="M 55 75 Q 58 58 75 52 Q 90 47 108 50 Q 95 48 82 57 Q 68 65 62 80 Z"
          fill="#0F0A04"
        />
        {/* Hair falling on forehead right side */}
        <path
          d="M 110 48 Q 130 44 148 56 Q 142 50 125 52 Q 115 54 110 60 Z"
          fill="#120D06"
        />

        {/* ── Eyebrows ── */}
        <path d="M 68 93 Q 78 89 88 91" stroke="#0F0A04" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 112 91 Q 122 89 132 93" stroke="#0F0A04" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* ── Glasses (round tortoiseshell frames — photo 1) ── */}
        {/* Left lens */}
        <circle cx="80" cy="108" r="18" fill="none" stroke="#5C3318" strokeWidth="3.5" />
        <circle cx="80" cy="108" r="18" fill="rgba(100,160,220,0.08)" />
        {/* Right lens */}
        <circle cx="120" cy="108" r="18" fill="none" stroke="#5C3318" strokeWidth="3.5" />
        <circle cx="120" cy="108" r="18" fill="rgba(100,160,220,0.08)" />
        {/* Bridge */}
        <line x1="98" y1="107" x2="102" y2="107" stroke="#5C3318" strokeWidth="2.5" />
        {/* Temples */}
        <line x1="62" y1="105" x2="50" y2="112" stroke="#5C3318" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="138" y1="105" x2="150" y2="112" stroke="#5C3318" strokeWidth="2.5" strokeLinecap="round" />

        {/* ── Eyes ── */}
        <ellipse cx="80" cy="108" rx="9" ry="7" fill="#1A0F08" />
        <ellipse cx="120" cy="108" rx="9" ry="7" fill="#1A0F08" />
        {/* Eye highlights */}
        <circle cx="83" cy="105" r="2" fill="rgba(255,255,255,0.5)" />
        <circle cx="123" cy="105" r="2" fill="rgba(255,255,255,0.5)" />

        {/* ── Nose ── */}
        <path
          d="M 98 118 Q 96 128 91 133 Q 97 136 100 135 Q 103 136 109 133 Q 104 128 102 118 Z"
          fill="#B07545"
        />

        {/* ── Stubble / beard ── */}
        <ellipse cx="100" cy="148" rx="40" ry="18" fill="#8B5520" opacity="0.28" />
        <ellipse cx="100" cy="138" rx="30" ry="8" fill="#8B5520" opacity="0.15" />
        {/* Goatee area */}
        <ellipse cx="100" cy="152" rx="16" ry="10" fill="#7A4818" opacity="0.3" />

        {/* ── Smile ── */}
        <path
          d="M 83 143 Q 100 158 117 143"
          fill="none"
          stroke="#7A3F18"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Smile dimples */}
        <path d="M 83 143 Q 80 148 82 150" fill="none" stroke="#A06035" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 117 143 Q 120 148 118 150" fill="none" stroke="#A06035" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}
