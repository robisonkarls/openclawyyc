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
  { name: "Twitter", icon: SiX, color: "text-[color:var(--text-secondary)]" },
  { name: "Browser", icon: SiGooglechrome, color: "text-[#FBBF24]" },
  { name: "Gmail", icon: SiGmail, color: "text-[#EA4335]" },
  { name: "GitHub", icon: SiGithub, color: "text-[color:var(--text-secondary)]" },
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
    <main className="min-h-screen oc-page">
      <header className="sticky top-0 z-20 border-b border-[color:var(--border-subtle)] bg-[color:var(--surface-card)]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/openclaw-logo-text.png"
              alt="OpenClaw"
              width={140}
              height={28}
              className="h-6 w-auto"
            />
            <span className="text-xs uppercase tracking-wider oc-accent">OpenClawYYC</span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
            href="https://cal.com/robison-custodio/15min"
            className="rounded-xl px-4 py-2 text-sm font-semibold oc-btn-secondary oc-accent transition hover:-translate-y-0.5"
          >
            Book a Call
          </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden oc-section">
        <div className="absolute -top-20 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[color:var(--coral-bright)]/15 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-[color:var(--cyan-bright)]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="inline-block rounded-full border border-[color:var(--coral-bright)]/30 bg-[color:var(--coral-bright)]/10 px-4 py-1 text-sm font-semibold oc-accent">
            The AI that actually does things.
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            <span className="bg-gradient-to-br from-[color:var(--text-primary)] via-[color:var(--coral-bright)] to-[color:var(--cyan-bright)] bg-clip-text text-transparent">
              Build an Always-On Executive Assistant Stack for Your Team
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-base oc-text-secondary md:text-lg">
            Clears inboxes, sends follow-ups, manages calendars, and runs proactive workflows — all from chat apps your team already uses.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="https://cal.com/robison-custodio/15min"
              className="rounded-xl px-6 py-3 font-semibold transition hover:-translate-y-0.5 oc-btn-primary"
            >
              Start Deployment
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-xl border border-[color:var(--border-subtle)] px-6 py-3 font-semibold oc-text-secondary transition hover:-translate-y-0.5 hover:bg-[color:var(--surface-card-strong)]"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      <section className="oc-section bg-[color:var(--surface-card)]/50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-bold tracking-tight md:text-4xl">⟩ Works With Everything</h2>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {integrations.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                title={name}
                aria-label={name}
                className="rounded-xl oc-surface p-3"
              >
                <Icon className={`h-6 w-6 ${color}`} aria-hidden="true" />
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/integrations"
              className="rounded-xl px-5 py-2.5 text-sm font-semibold transition oc-btn-primary"
            >
              View All Integrations
            </Link>
            <a
              href="https://openclaw.ai/integrations"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-5 py-2.5 text-sm font-semibold oc-btn-secondary oc-accent transition"
            >
              Reference: openclaw.ai/integrations
            </a>
          </div>
        </div>
      </section>

      <section className="oc-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-bold tracking-tight md:text-4xl">Built for</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {builtFor.map((item) => (
              <article key={item.title} className="rounded-2xl oc-surface p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 oc-text-secondary">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="oc-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-bold tracking-tight md:text-4xl">Always on, always working</h2>
          <p className="mt-4 max-w-4xl oc-text-secondary">
            Your assistant runs 24/7 on dedicated infrastructure. It proactively checks key systems and takes action — without waiting for prompts.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {alwaysOn.map((item) => (
              <div key={item.time} className="rounded-2xl oc-surface p-5">
                <p className="text-sm font-semibold uppercase tracking-wide oc-accent">{item.time}</p>
                <p className="mt-2 oc-text-secondary">{item.action}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 oc-text-secondary">
            Message your assistant via Telegram, Slack, WhatsApp, or Discord — no technical setup required for day-to-day use.
          </p>
        </div>
      </section>

      <section className="oc-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-bold tracking-tight md:text-4xl">What&apos;s an Executive Agent?</h2>
          <p className="mt-4 max-w-5xl oc-text-secondary">
            One Executive Agent equals one primary identity boundary (CEO, Sales, Finance, EA, etc.). Most teams deploy 2–6 assistants that coordinate through workflows while preserving role-specific access.
          </p>
        </div>
      </section>

      <section id="how-it-works" className="oc-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-bold tracking-tight md:text-4xl">How it works</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <article key={s.number} className="rounded-2xl oc-surface p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--coral-bright)] font-bold text-white">
                  {s.number}
                </div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-3 oc-text-secondary">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="oc-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-bold tracking-tight md:text-4xl">What people are saying</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {quotes.map((q) => (
              <blockquote key={q} className="rounded-2xl oc-surface p-6 oc-text-secondary">
                “{q}”
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="oc-section py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold tracking-tight md:text-4xl">Why teams hire us</h2>
            <div className="mt-6 space-y-3">
              {whyUs.map((line) => (
                <div key={line} className="rounded-xl oc-surface p-4 oc-text-secondary">
                  • {line}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight md:text-4xl">Security-first by design</h2>
            <div className="mt-6 space-y-3">
              {security.map((line) => (
                <div key={line} className="rounded-xl oc-surface p-4 oc-text-secondary">
                  ✓ {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="oc-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-bold tracking-tight md:text-4xl">Already running OpenClaw?</h2>
          <p className="mt-4 max-w-4xl oc-text-secondary">
            We can audit your existing setup, fix security gaps, improve reliability, and migrate you to managed operations without rebuilding from scratch.
          </p>
        </div>
      </section>

      <section className="oc-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-bold tracking-tight md:text-4xl">After you purchase</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {afterPurchase.map((item) => (
              <article key={item.label} className="rounded-2xl oc-surface p-6">
                <h3 className="text-lg font-bold oc-accent">{item.label}</h3>
                <p className="mt-2 oc-text-secondary">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="oc-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-bold tracking-tight md:text-4xl">FAQ</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-xl oc-surface p-5">
                <summary className="cursor-pointer text-base font-semibold oc-accent">{faq.q}</summary>
                <p className="mt-3 oc-text-secondary">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="oc-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-bold tracking-tight md:text-4xl">Learn more</h2>
          <div className="mt-10 space-y-4">
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
                className="group flex items-center justify-between rounded-xl oc-surface px-5 py-4 transition hover:-translate-y-0.5 hover:border-[color:var(--coral-bright)] hover:bg-[color:var(--surface-card-strong)]"
              >
                <span className="font-medium">{item.title}</span>
                <span className="oc-accent transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="oc-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-bold tracking-tight md:text-4xl">Available across Calgary Region</h2>
          <p className="mt-4 oc-text-secondary">Remote-first deployment with optional local support. Don&apos;t see your city? Book a call.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {cities.map((city) => (
              <div key={city} className="rounded-lg oc-surface px-3 py-2 text-sm oc-text-secondary">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-xl font-bold tracking-tight md:text-4xl">Ready to go live?</h2>
          <p className="mx-auto mt-4 max-w-2xl oc-text-secondary">
            We can deploy this stack for your Calgary team with security-first implementation and managed support.
          </p>
          <a
            href="https://cal.com/robison-custodio/15min"
            className="mt-8 inline-block rounded-xl px-6 py-3 font-semibold transition oc-btn-primary"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>
    </main>
  );
}
