import Link from "next/link";

const integrationGroups = [
  {
    title: "Messaging",
    items: ["WhatsApp", "Telegram", "Discord", "Slack", "Signal", "iMessage"],
  },
  {
    title: "AI Models",
    items: ["Claude", "GPT", "Gemini", "OpenRouter", "Local LLMs"],
  },
  {
    title: "Productivity",
    items: ["Gmail", "Google Calendar", "Notion", "Obsidian", "Google Drive", "Google Sheets"],
  },
  {
    title: "Developer Tools",
    items: ["GitHub", "Browser Automation", "Webhooks", "Sentry", "CLI Tools"],
  },
  {
    title: "Business Systems",
    items: ["HubSpot", "Salesforce", "Zoom", "CRM APIs", "Internal Dashboards"],
  },
  {
    title: "Smart Home & Devices",
    items: ["Spotify", "Hue", "IoT APIs", "Custom MCP Servers"],
  },
];

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-[#06070a] text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10 py-20">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <p className="inline-block rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-200">
            Integrations
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">Works With Everything</h1>
          <p className="mx-auto mt-4 max-w-3xl text-slate-300 md:text-lg">
            OpenClaw-style assistant deployments can connect to messaging, productivity, dev tools,
            business systems, and custom internal APIs.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/"
              className="rounded-xl bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200"
            >
              ← Back to Home
            </Link>
            <a
              href="https://openclaw.ai/integrations"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cyan-300/40 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/10"
            >
              Open Official Integrations Page
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-5 md:grid-cols-2">
          {integrationGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-2xl font-bold">{group.title}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
