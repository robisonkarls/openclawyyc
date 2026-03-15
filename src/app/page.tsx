import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  SiWhatsapp,
  SiTelegram,
  SiDiscord,
  SiSlack,
  SiSignal,
  SiImessage,
  SiAnthropic,
  SiOpenai,
  SiSpotify,
  SiPhilipshue,
  SiObsidian,
  SiX,
  SiGooglechrome,
  SiGmail,
  SiGithub,
} from "react-icons/si";

const integrations = [
  { name: "WhatsApp", icon: SiWhatsapp, color: "text-[#25D366]" },
  { name: "Telegram", icon: SiTelegram, color: "text-[#26A5E4]" },
  { name: "Discord", icon: SiDiscord, color: "text-[#5865F2]" },
  { name: "Slack", icon: SiSlack, color: "text-[#E01E5A]" },
  { name: "Signal", icon: SiSignal, color: "text-[#3A76F0]" },
  { name: "iMessage", icon: SiImessage, color: "text-[#34C759]" },
  { name: "Claude", icon: SiAnthropic, color: "text-[#D97706]" },
  { name: "GPT", icon: SiOpenai, color: "text-[#10A37F]" },
  { name: "Spotify", icon: SiSpotify, color: "text-[#1DB954]" },
  { name: "Hue", icon: SiPhilipshue, color: "text-[#F59E0B]" },
  { name: "Obsidian", icon: SiObsidian, color: "text-[#7C3AED]" },
  { name: "Twitter", icon: SiX, color: "text-slate-700 dark:text-[#E5E7EB]" },
  { name: "Browser", icon: SiGooglechrome, color: "text-[#FBBF24]" },
  { name: "Gmail", icon: SiGmail, color: "text-[#EA4335]" },
  { name: "GitHub", icon: SiGithub, color: "text-slate-700 dark:text-[#E5E7EB]" },
];

const builtFor = [
  {
    title: "Founders & CEOs",
    body: "Drowning in email, calendar chaos, and high-context follow-ups. Need leverage now, not another software project.",
  },
  {
    title: "Executive Teams",
    body: "CFO, Head of Sales, EA, and Ops teams each need role-specific assistants with clear boundaries and reliable execution.",
  },
  {
    title: "Agencies & Studios",
    body: "Client updates, reporting cadence, and project operations can be monitored and orchestrated proactively.",
  },
  {
    title: "Investors & Operators",
    body: "Deal flow tracking, portfolio updates, and recurring communication pipelines run continuously in the background.",
  },
];

const alwaysOn = [
  {
    time: "Every 30 min",
    action: "Scans key inboxes, flags urgent messages, and drafts replies for review.",
  },
  {
    time: "9:00 AM daily",
    action: "Sends a briefing with meetings, attendee context, prep notes, and priorities.",
  },
  {
    time: "On demand",
    action: "Natural language requests trigger actions like notifications, rescheduling, and workflow execution.",
  },
  {
    time: "Ongoing",
    action: "Monitors channels, summarizes threads, and surfaces what actually matters.",
  },
];

const steps = [
  {
    number: "1",
    title: "Kickoff call",
    body: "We map goals, integrations (email, calendar, CRM, messaging), and define your first high-impact workflows.",
  },
  {
    number: "2",
    title: "Deploy & harden",
    body: "We provision infrastructure, install OpenClaw, connect tools, and apply security controls before launch.",
  },
  {
    number: "3",
    title: "14-day hypercare",
    body: "We tune behavior, expand permissions as trust grows, fix edge cases, and stabilize execution quality.",
  },
];

const whyUs = [
  "OpenClaw is powerful, but secure production setup is where most teams stall.",
  "DIY installs often miss permission controls, revocation paths, and operational guardrails.",
  "We deliver secure deployment and ongoing care so your team gets leverage instead of more maintenance overhead.",
];

const security = [
  "Least-privilege permissions by default",
  "Sandboxed execution boundaries",
  "Controlled integration access and revoke paths",
  "Staged trust expansion and operational policy tuning",
];

const afterPurchase = [
  {
    label: "Within 48 hours",
    body: "We schedule kickoff and open your implementation channel.",
  },
  {
    label: "Kickoff session",
    body: "20–45 minute requirements workshop: goals, tools, priorities.",
  },
  {
    label: "Live setup session",
    body: "1–3 hour implementation; most teams go live same day.",
  },
];

const faqs = [
  {
    q: "What is OpenClaw?",
    a: "An open-source always-on assistant platform that can monitor workflows, triage communication, and execute approved actions across connected tools.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. We handle setup, hardening, integrations, and optimization. Your team interacts through familiar chat channels.",
  },
  {
    q: "Can’t we just set it up ourselves?",
    a: "You can, but most self-installs miss security and operational controls. We make it production-ready and support it long term.",
  },
  {
    q: "What’s included in implementation?",
    a: "Provisioning, deployment, security baseline, integrations, core workflows, documentation, and hypercare.",
  },
  {
    q: "What if the bot goes rogue?",
    a: "We start with minimal permissions, enforce boundaries, and implement revocation + staged trust controls.",
  },
  {
    q: "Do you support multi-agent deployments?",
    a: "Yes. Common setups include CEO, Sales, Finance, and EA assistants with role boundaries.",
  },
  {
    q: "VPS or Mac Mini?",
    a: "Most teams choose VPS for maintainability and cost. Mac Mini is useful for local/Apple-specific workflows.",
  },
  {
    q: "What about ongoing maintenance?",
    a: "Managed care handles updates, integration reliability, drift, and support escalation.",
  },
];

const cities = [
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

const quotes = [
  "It feels like hiring an employee rather than opening another chat window.",
  "The hardening and setup quality alone was worth it.",
  "This is the first AI assistant setup that feels operationally real.",
  "We got same-day value with a clear roadmap for expansion.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#06070a] dark:text-slate-100">
      <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/30">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/openclaw-logo-text.png"
              alt="OpenClaw"
              width={140}
              height={28}
              className="h-6 w-auto"
            />
            <span className="text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-300">Calgary Services</span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
            href="#contact"
            className="rounded-xl border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-200 transition hover:bg-cyan-300/10"
          >
            Book a Call
          </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-white/10">
        <div className="absolute -top-20 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="inline-block rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-700 dark:text-cyan-200">
            The AI that actually does things.
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight md:text-7xl">
            Build an Always-On Executive Assistant Stack for Your Team
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300 md:text-xl">
            Clears inboxes, sends follow-ups, manages calendars, and runs proactive workflows — all from chat apps your team already uses.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Start Deployment
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 dark:border-white/10 bg-[#0b0d12] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">⟩ Works With Everything</h2>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {integrations.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                title={name}
                aria-label={name}
                className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.03] p-3"
              >
                <Icon className={`h-6 w-6 ${color}`} aria-hidden="true" />
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/integrations"
              className="rounded-xl bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200"
            >
              View All Integrations
            </Link>
            <a
              href="https://openclaw.ai/integrations"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cyan-300/40 px-5 py-2.5 text-sm font-semibold text-cyan-700 dark:text-cyan-200 transition hover:bg-cyan-300/10"
            >
              Reference: openclaw.ai/integrations
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 dark:border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">Built for</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {builtFor.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.03] p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 dark:border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">Always on, always working</h2>
          <p className="mt-4 max-w-4xl text-slate-600 dark:text-slate-300">
            Your assistant runs 24/7 on dedicated infrastructure. It proactively checks key systems and takes action — without waiting for prompts.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {alwaysOn.map((item) => (
              <div key={item.time} className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.03] p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">{item.time}</p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{item.action}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-slate-600 dark:text-slate-300">
            Message your assistant via Telegram, Slack, WhatsApp, or Discord — no technical setup required for day-to-day use.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 dark:border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">What&apos;s an Executive Agent?</h2>
          <p className="mt-4 max-w-5xl text-slate-600 dark:text-slate-300">
            One Executive Agent equals one primary identity boundary (CEO, Sales, Finance, EA, etc.). Most teams deploy 2–6 assistants that coordinate through workflows while preserving role-specific access.
          </p>
        </div>
      </section>

      <section id="how-it-works" className="border-b border-slate-200/80 dark:border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">How it works</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <article key={s.number} className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.03] p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 font-bold text-slate-900">
                  {s.number}
                </div>
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 dark:border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">What people are saying</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {quotes.map((q) => (
              <blockquote key={q} className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.03] p-6 text-slate-700 dark:text-slate-200">
                “{q}”
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 dark:border-white/10 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">Why teams hire us</h2>
            <div className="mt-6 space-y-3">
              {whyUs.map((line) => (
                <div key={line} className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.03] p-4 text-slate-600 dark:text-slate-300">
                  • {line}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">Security-first by design</h2>
            <div className="mt-6 space-y-3">
              {security.map((line) => (
                <div key={line} className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.03] p-4 text-slate-600 dark:text-slate-300">
                  ✓ {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 dark:border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">Already running OpenClaw?</h2>
          <p className="mt-4 max-w-4xl text-slate-600 dark:text-slate-300">
            We can audit your existing setup, fix security gaps, improve reliability, and migrate you to managed operations without rebuilding from scratch.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 dark:border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">After you purchase</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {afterPurchase.map((item) => (
              <article key={item.label} className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.03] p-6">
                <h3 className="text-lg font-bold text-cyan-300">{item.label}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 dark:border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">FAQ</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.03] p-5">
                <summary className="cursor-pointer text-lg font-semibold text-cyan-700 dark:text-cyan-200">{faq.q}</summary>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 dark:border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">Learn more</h2>
          <div className="mt-8 space-y-3">
            {[
              { title: "What is OpenClaw?", href: "/learn-more/what-is-openclaw" },
              {
                title: "OpenClaw vs. hiring an executive assistant",
                href: "/learn-more/openclaw-vs-executive-assistant",
              },
              { title: "How much does OpenClaw setup cost?", href: "/learn-more/openclaw-setup-cost" },
              { title: "What is a Collison Install?", href: "/learn-more/collison-install" },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-center justify-between rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.03] px-5 py-4 transition hover:border-cyan-300/40 hover:bg-slate-200 dark:hover:bg-white/[0.06]"
              >
                <span className="font-medium">{item.title}</span>
                <span className="text-cyan-300 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 dark:border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">Available across Calgary Region</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">Remote-first deployment with optional local support. Don&apos;t see your city? Book a call.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {cities.map((city) => (
              <div key={city} className="rounded-lg border border-slate-200/80 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.03] px-3 py-2 text-sm text-slate-700 dark:text-slate-200">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Ready to go live?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            We can deploy this stack for your Calgary team with security-first implementation and managed support.
          </p>
          <a
            href="https://cal.com"
            className="mt-8 inline-block rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-900 transition hover:bg-cyan-200"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>
    </main>
  );
}
