"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
  id: string;
  slug: string;
  label: string;
  problem: string;
  company: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: "01",
    slug: "craft",
    label: "CRAFT — Paytm",
    problem:
      "Users tell us the moment something breaks. Making sense of that response and turning it into a fix takes days. What if that gap closed to almost nothing?",
    company: "Paytm",
    tags: ["LLM", "Agentic", "Product Ops"],
  },
  {
    id: "02",
    slug: "gold-coins",
    label: "Gold Coins — Paytm",
    problem:
      "What if every payment earned you gold? Building Paytm's first coin-based loyalty loop — from earning to redemption.",
    company: "Paytm",
    tags: ["Loyalty", "Retention", "Gold"],
  },
  {
    id: "03",
    slug: "digital-silver",
    label: "Digital Silver — Paytm",
    problem:
      "Launching an entirely new asset class from zero. How do you get users to trust and invest in something they've never heard of?",
    company: "Paytm",
    tags: ["0→1", "Silver", "Fintech"],
  },
  {
    id: "04",
    slug: "gold-rush",
    label: "Gold Rush — Paytm",
    problem:
      "A leaderboard for gold investors. Can gamification turn passive savers into active participants — at scale?",
    company: "Paytm",
    tags: ["Gamification", "Gold", "Growth"],
  },
  {
    id: "05",
    slug: "meera-jewellery",
    label: "Meera Jewellery — Plus Gold",
    problem:
      "What if your digital gold balance could buy you real jewellery? Building the bridge between savings and spend.",
    company: "Plus Gold",
    tags: ["E-commerce", "Gold", "Jewellery"],
  },
];

function ProjectCard({ project, index, isLast }: { project: Project; index: number; isLast: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
      className={`${isLast ? "md:col-span-2" : ""} h-full`}
    >
      <Link href={`/cases/${project.slug}`} className="block group h-full">
        <motion.div
          whileHover={{ y: -4, boxShadow: "0 0 20px rgba(59,130,246,0.15), 0 8px 24px rgba(0,0,0,0.4)", borderColor: "rgba(59,130,246,0.4)" }}
          className="rounded-lg p-5 md:p-6 h-full flex flex-col"
          style={{
            border: "1px solid #2a2a2a",
            background: "#141414",
            transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
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
            className="font-bold text-lg mt-2 group-hover:text-blue-400 transition-colors"
            style={{ color: "var(--text-primary)" }}
          >
            {project.label}
          </h3>
          <p
            className="mt-2 text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.problem}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: "var(--bg-tertiary)",
                  color: "var(--text-tertiary)",
                  fontFamily: "var(--font-jetbrains), monospace",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-4 flex items-center justify-between">
            <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>
              {project.company}
            </span>
            <span
              className="text-xs flex items-center gap-1 group-hover:gap-2 transition-all"
              style={{ color: "var(--accent)" }}
            >
              Open case file
              <span aria-hidden>→</span>
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg-secondary)" }} className="py-16">
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
            Case Files
          </h2>
          <p
            className="mt-2 text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            Problems I was handed — and what I actually did about them
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isLast={index === projects.length - 1 && projects.length % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
