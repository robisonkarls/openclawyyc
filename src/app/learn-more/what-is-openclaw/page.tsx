export default function WhatIsOpenClawPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">Learn More</p>
        <h1 className="mt-3 text-4xl font-bold">What is OpenClaw?</h1>
        <p className="mt-6 text-lg text-slate-700 leading-relaxed">
          OpenClaw is an open-source framework for always-on AI assistants that can monitor workflows,
          triage communication, and take approved actions across connected business tools.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          In practical terms, it behaves more like an operational teammate than a chat widget: it can
          run scheduled checks, summarize activity, and execute workflow steps with guardrails.
        </p>
      </div>
    </main>
  );
}
