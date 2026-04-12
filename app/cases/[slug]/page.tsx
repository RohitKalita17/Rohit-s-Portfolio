import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseBySlug, getAdjacentCases, cases } from "@/lib/cases";
import ReadingProgress from "@/components/ReadingProgress";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return {};
  return {
    title: `${c.label} — Rohit`,
    description: c.headline,
  };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  const { prev, next } = getAdjacentCases(slug);

  return (
    <main style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <ReadingProgress />

      {/* Top nav bar */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4"
        style={{ background: "rgba(10,10,10,0.9)", backdropFilter: "blur(8px)", borderBottom: "1px solid #1e1e1e" }}
      >
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-sm transition-colors hover:text-white"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-jetbrains), monospace" }}
        >
          <span aria-hidden>←</span> All case files
        </Link>

        <div className="flex items-center gap-1">
          {prev && (
            <Link
              href={`/cases/${prev.slug}`}
              className="px-3 py-1.5 rounded text-xs transition-colors hover:text-white flex items-center gap-1"
              style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-jetbrains), monospace" }}
              title={prev.label}
            >
              <span aria-hidden>‹</span> Prev
            </Link>
          )}
          {next && (
            <Link
              href={`/cases/${next.slug}`}
              className="px-3 py-1.5 rounded text-xs transition-colors hover:text-white flex items-center gap-1"
              style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-jetbrains), monospace" }}
              title={next.label}
            >
              Next <span aria-hidden>›</span>
            </Link>
          )}
        </div>
      </nav>

      <article className="max-w-2xl mx-auto px-6 md:px-10 py-14">
        {/* Case file number + tags */}
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="text-xs uppercase tracking-wider"
            style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-jetbrains), monospace" }}
          >
            CASE FILE #{c.id}
          </span>
          {c.tags.map((tag) => (
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

        {/* Title */}
        <h1
          className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          style={{ color: "var(--text-primary)", fontFamily: "var(--font-inter), sans-serif" }}
        >
          {c.label}
        </h1>

        {/* Meta */}
        <p className="mt-3 text-sm" style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-jetbrains), monospace" }}>
          {c.company}
        </p>

        {/* Image placeholder */}
        <div
          className="mt-10 w-full rounded-xl flex flex-col items-center justify-center gap-3"
          style={{
            height: "360px",
            background: "var(--bg-secondary)",
            border: "2px dashed #2a2a2a",
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <p className="text-sm" style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-jetbrains), monospace" }}>
            Product screenshots coming soon
          </p>
        </div>

        {/* Headline */}
        <p
          className="mt-12 text-2xl md:text-3xl font-bold leading-snug"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
        >
          {c.headline}
        </p>

        {/* Divider */}
        <hr className="mt-12 border-0 border-t" style={{ borderColor: "#1e1e1e" }} />

        {/* Context */}
        <Section title="Context">
          <p className="text-lg leading-8" style={{ color: "#EFEFEF" }}>
            {c.context}
          </p>
        </Section>

        {/* Problem */}
        <Section title="The Problem">
          <p className="text-lg leading-8" style={{ color: "#EFEFEF" }}>
            {c.problem}
          </p>
        </Section>

        {/* What I Did */}
        <Section title="What I Did">
          <ul className="space-y-4">
            {c.what_i_did.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="mt-1 shrink-0 text-xs font-mono"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg leading-8" style={{ color: "#EFEFEF" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Outcome */}
        <Section title="Outcome">
          <p
            className="text-lg leading-8 px-5 py-4 rounded-lg"
            style={{ color: "#EFEFEF", background: "var(--bg-secondary)", borderLeft: "3px solid var(--accent)" }}
          >
            {c.outcome}
          </p>
        </Section>

        {/* Learnings */}
        <Section title="What I Took Away">
          <p className="text-lg leading-8" style={{ color: "#EFEFEF" }}>
            {c.learnings}
          </p>
        </Section>

        {/* Bottom navigation — card style */}
        <div className="mt-16 pt-8 grid grid-cols-2 gap-4" style={{ borderTop: "1px solid #1e1e1e" }}>
          {prev ? (
            <Link
              href={`/cases/${prev.slug}`}
              className="group flex flex-col rounded-lg p-4 transition-all hover:border-blue-500/40"
              style={{ background: "var(--bg-secondary)", border: "1px solid #2a2a2a" }}
            >
              <span
                className="text-xs block mb-2"
                style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-jetbrains), monospace" }}
              >
                ← Previous
              </span>
              <span
                className="text-sm font-medium group-hover:text-white transition-colors block grow"
                style={{ color: "var(--text-secondary)" }}
              >
                {prev.label}
              </span>
              <span className="text-xs mt-3 block" style={{ color: "var(--text-tertiary)" }}>
                {prev.company}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/cases/${next.slug}`}
              className="group flex flex-col rounded-lg p-4 text-right transition-all hover:border-blue-500/40"
              style={{ background: "var(--bg-secondary)", border: "1px solid #2a2a2a" }}
            >
              <span
                className="text-xs block mb-2"
                style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-jetbrains), monospace" }}
              >
                Next →
              </span>
              <span
                className="text-sm font-medium group-hover:text-white transition-colors block grow"
                style={{ color: "var(--text-secondary)" }}
              >
                {next.label}
              </span>
              <span className="text-xs mt-3 block" style={{ color: "var(--text-tertiary)" }}>
                {next.company}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Back to portfolio */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm transition-colors hover:text-white"
            style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-jetbrains), monospace" }}
          >
            ↩ Back to portfolio
          </Link>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-14">
      <div className="flex items-center gap-3 mb-5">
        <span
          style={{
            display: "inline-block",
            width: "3px",
            height: "14px",
            background: "var(--accent)",
            borderRadius: "2px",
            flexShrink: 0,
          }}
        />
        <h2
          className="text-xs uppercase tracking-widest font-semibold"
          style={{ color: "#888888", fontFamily: "var(--font-jetbrains), monospace" }}
        >
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
