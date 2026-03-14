import Image from "next/image";
import {
  SiGmail,
  SiGooglecalendar,
  SiMicrosoftoutlook,
  SiSlack,
  SiImessage,
  SiWhatsapp,
  SiNotion,
  SiGoogledrive,
  SiZoom,
  SiHubspot,
  SiSalesforce,
  SiGithub,
  SiGooglesheets,
} from "react-icons/si";

const builtForProfiles = [
  {
    title: "Founders & CEOs",
    body: "Drowning in email and calendar chaos, and need operational leverage without hiring another full-time role.",
  },
  {
    title: "Executive Teams",
    body: "CFO, Head of Sales, EA, and Operations leaders that need role-specific assistants with clean permission boundaries.",
  },
  {
    title: "Agencies & Studios",
    body: "Teams juggling client updates, project workflows, and reporting that want proactive summaries and reminders.",
  },
  {
    title: "Investors & Operators",
    body: "Deal flow, pipeline updates, portfolio comms, and recurring follow-up workflows handled by always-on assistants.",
  },
];

const timeline = [
  {
    time: "Every 30 min",
    action: "Scans inbox, flags urgent messages, drafts replies for review",
  },
  {
    time: "9:00 AM daily",
    action: "Sends executive briefing: meetings, priorities, prep notes",
  },
  {
    time: "On demand",
    action: "“I’m running late” automation: notify attendees + reschedule",
  },
  {
    time: "Ongoing",
    action: "Monitors channels, summarizes threads, surfaces what matters",
  },
];

const services = [
  {
    title: "Implementation",
    body: "OpenClaw installation on VPS or Mac Mini, environment setup, and production-ready baseline.",
  },
  {
    title: "Security Hardening",
    body: "Firewall rules, Docker sandboxing, least-privilege access, and safety-first defaults.",
  },
  {
    title: "Integrations",
    body: "Email, calendar, Slack/Discord/WhatsApp, and CRM workflows tailored to your team.",
  },
  {
    title: "Workflow Design",
    body: "Exec briefings, inbox triage, follow-ups, reminders, and role-specific automations.",
  },
  {
    title: "Hypercare (14 Days)",
    body: "Hands-on tuning after launch to improve quality, reliability, and trust boundaries.",
  },
  {
    title: "Managed Care",
    body: "Ongoing maintenance, updates, credential lifecycle handling, and incident response.",
  },
];

const faqs = [
  {
    q: "Do we need to be technical?",
    a: "No. We handle setup, security, integrations, and optimization. Your team chats with the assistant like texting a human assistant.",
  },
  {
    q: "Can we deploy more than one assistant?",
    a: "Yes. Most teams deploy 2–6 role-based assistants (Owner/CEO, Sales, Ops, Finance, EA) with clean boundaries.",
  },
  {
    q: "Is this safe for business data?",
    a: "We start with least privilege, apply sandboxing and hardening, and expand access gradually as trust grows.",
  },
  {
    q: "How fast can we go live?",
    a: "Most teams are live same day after kickoff and setup session.",
  },
];

const calgaryRegionCities = [
  "Calgary",
  "Airdrie",
  "Chestermere",
  "Cochrane",
  "Okotoks",
  "High River",
  "Strathmore",
  "Canmore",
  "Banff",
  "Diamond Valley",
  "Crossfield",
  "Carstairs",
  "Didsbury",
  "Nanton",
  "Claresholm",
  "Irricana",
  "Langdon",
  "Bragg Creek",
  "Priddis",
  "Redwood Meadows",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_45%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
          <p className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold">
            Calgary Region • White-Glove AI Assistant Services
          </p>
          <h1 className="max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
            We Deploy and Maintain Your Team’s AI Assistants — Securely, End-to-End
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-blue-100 md:text-xl">
            Executive assistant automation for founders and leadership teams. We handle setup, hardening, integrations, and ongoing care so you can focus on the business.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 shadow hover:bg-blue-50"
            >
              Book a Discovery Call
            </a>
            <a
              href="#how-it-works"
              className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-blue-700"
            >
              How It Works
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Powered by OpenClaw Ecosystem
            </p>
            <a
              href="https://openclaw.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 hover:bg-slate-100"
            >
              <Image
                src="/openclaw-logo-text.png"
                alt="OpenClaw"
                width={170}
                height={32}
                className="h-6 w-auto"
              />
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start">
              <div className="text-center md:text-left">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Connects to
                </p>
                <p className="mt-2 text-3xl font-bold text-indigo-700">+10,000</p>
              </div>

              <div className="grid w-full max-w-4xl grid-cols-2 gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3 md:grid-cols-4">
                {[
                  { name: "Gmail", icon: SiGmail },
                  { name: "Google Calendar", icon: SiGooglecalendar },
                  { name: "Outlook", icon: SiMicrosoftoutlook },
                  { name: "Slack", icon: SiSlack },
                  { name: "iMessage", icon: SiImessage },
                  { name: "WhatsApp", icon: SiWhatsapp },
                  { name: "Notion", icon: SiNotion },
                  { name: "Google Drive", icon: SiGoogledrive },
                  { name: "Zoom", icon: SiZoom },
                  { name: "HubSpot", icon: SiHubspot },
                  { name: "Salesforce", icon: SiSalesforce },
                  { name: "GitHub", icon: SiGithub },
                  { name: "Google Sheets", icon: SiGooglesheets },
                ].map(({ name, icon: IconComponent }) => (
                  <div
                    key={name}
                    className="flex items-center justify-center gap-2 rounded-lg border border-blue-100 bg-white px-3 py-2 text-center"
                  >
                    <IconComponent className="h-4 w-4 text-indigo-700" aria-hidden="true" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">Built For</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {builtForProfiles.map((profile) => (
            <article
              key={profile.title}
              className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-blue-800">{profile.title}</h3>
              <p className="mt-3 text-slate-600">{profile.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">Always On, Always Working</h2>
          <p className="mt-4 max-w-4xl text-lg text-slate-600">
            Unlike chat-only tools, your OpenClaw assistant runs 24/7 on dedicated infrastructure. It wakes up every 30 minutes, checks your email, calendar, and connected tools, then takes action proactively — without waiting for you to prompt it.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {timeline.map((item) => (
              <div
                key={item.time}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
                  {item.time}
                </p>
                <p className="mt-2 text-slate-700">{item.action}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-slate-600">
            You talk to your assistant through Telegram, Slack, WhatsApp, or Discord — just like texting a real assistant. No technical background required.
          </p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">Service Stack</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Productized implementation and managed operations for business-critical assistants.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-blue-800">{service.title}</h3>
              <p className="mt-3 text-slate-600">{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">How It Works</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              [
                "1. Kickoff",
                "We map your goals, integrations, security boundaries, and first workflows.",
              ],
              [
                "2. Deploy & Harden",
                "We install, secure, and connect your assistant stack with best-practice controls.",
              ],
              [
                "3. Hypercare",
                "We optimize prompts, guardrails, and reliability until your team is fully confident.",
              ],
            ].map(([title, body]) => (
              <article
                key={title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-xl font-semibold text-indigo-700">{title}</h3>
                <p className="mt-3 text-slate-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">Security-First by Default</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            "Least-privilege permissions and staged trust expansion",
            "Sandboxed execution and hardened host configuration",
            "Controlled integrations with revocation paths",
            "Operational documentation and audit-friendly setup",
          ].map((item) => (
            <div key={item} className="rounded-xl bg-white p-6 shadow-sm border border-blue-100">
              <p className="font-medium text-slate-700">✓ {item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
          {[
            ["2–6", "Typical assistants per team"],
            ["24/7", "Always-on operation model"],
            ["Same Day", "Go-live for most deployments"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl bg-slate-50 p-8 text-center shadow-sm">
              <p className="text-4xl font-bold text-indigo-700">{value}</p>
              <p className="mt-2 text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">FAQ</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-xl border border-slate-200 bg-white p-6">
              <summary className="cursor-pointer text-lg font-semibold text-blue-800">
                {faq.q}
              </summary>
              <p className="mt-3 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">Available Across Calgary Region</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Remote-first deployment with optional local support across Calgary and nearby communities.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {calgaryRegionCities.map((city) => (
              <div
                key={city}
                className="rounded-lg border border-blue-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-r from-blue-700 to-indigo-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Launch?</h2>
          <p className="mt-4 text-lg text-blue-100">
            Book a call and we’ll map your first assistant workflows, integrations, and deployment timeline.
          </p>
          <a
            href="https://cal.com"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>
    </main>
  );
}
