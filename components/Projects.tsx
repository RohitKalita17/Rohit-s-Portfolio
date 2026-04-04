"use client";

import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  problem: string;
  impact: string;
  teams: string;
  timeline: string;
};

const projects: Project[] = [
  {
    id: "01",
    title: "Physical Gold Coin Redemption",
    problem:
      "How do you let users turn digital gold into a physical coin they can hold?",
    impact: "End-to-end 4-API flow across custodian, logistics, and payments",
    teams: "7",
    timeline: "3 months",
  },
  {
    id: "02",
    title: "Gold Rush Gamified Campaign",
    problem:
      "Can gamification drive gold purchases in a low-engagement segment?",
    impact: "Campaign mechanics across TDS constraints and complex T&C",
    teams: "5",
    timeline: "6 weeks",
  },
  {
    id: "03",
    title: "Locker Upgrade UX",
    problem: "A 0.0001g difference shouldn't confuse the user.",
    impact: "UX micro-decision with macro conversion impact",
    teams: "3",
    timeline: "2 weeks",
  },
  {
    id: "04",
    title: "AI / LLM Exploration",
    problem: "Personal project: understanding LLMs from the inside out.",
    impact: "Work in progress",
    teams: "—",
    timeline: "Ongoing",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
      className="rounded-r-lg p-5 md:p-6 cursor-default transition-colors"
      style={{
        borderLeft: "4px solid var(--accent)",
        background: "#141414",
      }}
    >
      <p
        className="text-xs uppercase tracking-wider"
        style={{
          color: "var(--text-tertiary)",
          fontFamily: "var(--font-jetbrains), monospace",
        }}
      >
        CASE FILE #{project.id}
      </p>
      <h3
        className="font-bold text-lg mt-2"
        style={{ color: "var(--text-primary)" }}
      >
        {project.title}
      </h3>
      <p
        className="mt-2 text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {project.problem}
      </p>

      <div className="mt-4 text-sm">
        <span style={{ color: "var(--text-secondary)" }}>Impact: </span>
        <span style={{ color: "var(--text-primary)" }}>{project.impact}</span>
      </div>
      <div
        className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        <span>
          Teams:{" "}
          <span style={{ color: "var(--text-primary)" }}>{project.teams}</span>
        </span>
        <span>
          · Timeline:{" "}
          <span style={{ color: "var(--text-primary)" }}>{project.timeline}</span>
        </span>
      </div>

      <div className="mt-4">
        <span
          className="text-sm"
          style={{ color: "var(--text-tertiary)" }}
        >
          (Case study coming soon)
        </span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg-secondary)" }} className="py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            Things I shipped
          </h2>
          <p
            className="mt-2 text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            (and what I learned shipping them)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
