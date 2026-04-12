"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GeometricAvatar1({ size = 88 }: { size?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, repeat: 2, ease: "easeInOut" }}
      style={{ width: size, height: size, flexShrink: 0 }}
      className="relative"
    >
      {/* Accent glow ring */}
      <motion.div
        animate={{ opacity: [0.4, 0.75, 0.4], scale: [1, 1.06, 1] }}
        transition={{ duration: 3, repeat: 2, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
          border: "1.5px solid rgba(59,130,246,0.35)",
          pointerEvents: "none",
        }}
      />

      {/* Circular image */}
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          src="/avatar.png"
          alt="Rohit Kalita"
          fill
          sizes="104px"
          style={{ objectFit: "cover", objectPosition: "center 18%" }}
          priority
        />
      </div>
    </motion.div>
  );
}
