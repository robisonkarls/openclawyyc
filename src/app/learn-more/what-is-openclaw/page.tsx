import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen oc-page">
      <section className="relative overflow-hidden oc-section">
        <div className="absolute -left-20 top-8 h-64 w-64 rounded-full bg-[color:var(--coral-bright)]/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-[color:var(--cyan-bright)]/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide oc-accent">Learn More</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">What is OpenClaw?</h1>
          <Link
            href="/"
            className="mt-6 inline-block rounded-xl border border-[color:var(--border-subtle)] px-4 py-2 text-sm font-semibold oc-accent transition hover:bg-white/60 dark:hover:bg-white/10"
          >
            ← Back to main page
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <article className="oc-surface rounded-3xl p-8">
          <p className="text-lg leading-relaxed oc-text-secondary">
            OpenClaw is an open-source framework for always-on AI assistants that can monitor workflows,
            triage communication, and act across connected business tools.
          </p>
          <p className="mt-4 leading-relaxed oc-text-muted">
            Instead of waiting for prompts, it can run scheduled checks, summarize activity, and execute
            approved actions inside guardrails.
          </p>
        </article>
      </section>
    </main>
  );
}
