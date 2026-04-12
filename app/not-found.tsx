import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="text-center max-w-md">
        <div
          className="inline-block rounded-lg px-6 py-4 mb-8"
          style={{
            background: "#1E1E1E",
            fontFamily: "var(--font-jetbrains), monospace",
            border: "1px solid #2a2a2a",
          }}
        >
          <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
            $ cd /this-page
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--diff-remove)" }}>
            error: path not found
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--text-tertiary)" }}>
            $ _
          </p>
        </div>

        <h1
          className="text-4xl font-bold mb-3"
          style={{ color: "var(--text-primary)", fontFamily: "var(--font-inter), sans-serif" }}
        >
          404
        </h1>
        <p className="text-base mb-8" style={{ color: "var(--text-secondary)" }}>
          This page doesn&apos;t exist. But these do:
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            Back to portfolio
          </Link>
          <Link
            href="/#projects"
            className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
            style={{ border: "1px solid #2a2a2a", color: "var(--text-secondary)" }}
          >
            View case files
          </Link>
        </div>
      </div>
    </main>
  );
}
