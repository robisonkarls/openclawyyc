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

const oldWay = [
  "Provision a server (10–20 min)",
  "Create and secure SSH keys (10 min)",
  "Install runtime + dependencies (10 min)",
  "Install and configure OpenClaw (15 min)",
  "Connect channels + AI providers (10 min)",
  "Debug edge cases and retries (15+ min)",
];

const newWay = [
  "Pick your model and channel",
  "Connect keys and bot token",
  "Go live in minutes",
  "Managed updates + reliability",
];

const steps = [
  {
    number: "01",
    title: "Choose AI model",
    body: "Bring your own API key and pick Claude, GPT, Gemini or your preferred provider.",
  },
  {
    number: "02",
    title: "Connect your channel",
    body: "Link Telegram, Discord or WhatsApp. We configure the hooks and runtime for you.",
  },
  {
    number: "03",
    title: "Deploy & run 24/7",
    body: "Your assistant is online with managed infrastructure, backups and operational support.",
  },
];

const useCases = [
  "Answer support tickets",
  "Summarize documents",
  "Prepare meeting briefs",
  "Manage inbox triage",
  "Create follow-up drafts",
  "Track shipments and alerts",
  "Generate weekly reports",
  "Monitor competitor updates",
  "Run reminder workflows",
  "Draft social content",
  "Sync multi-timezone updates",
  "Organize project files",
];

const plans = [
  { name: "Lite", price: "$15/mo", spec: "2 vCPU · 4 GB RAM · 40 GB SSD", popular: false },
  { name: "Pro", price: "$25/mo", spec: "4 vCPU · 8 GB RAM · 80 GB SSD", popular: true },
  { name: "Max", price: "$40/mo", spec: "8 vCPU · 16 GB RAM · 160 GB SSD", popular: false },
];

const faqs = [
  {
    q: "How fast is deployment?",
    a: "Most setups are live in minutes once keys and channel tokens are connected.",
  },
  {
    q: "Can we switch AI models later?",
    a: "Yes — model switching is supported without rebuilding your full setup.",
  },
  {
    q: "Is this secure for business use?",
    a: "We use least-privilege access, isolated infrastructure, encrypted secrets, and managed updates.",
  },
  {
    q: "What if we already started a DIY setup?",
    a: "We can harden, migrate, and stabilize your current OpenClaw deployment without starting over.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen oc-page">
      <header className="sticky top-0 z-20 border-b border-[color:var(--border-subtle)] bg-[color:var(--surface-card)]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/openclaw-logo-text.png" alt="OpenClaw" width={140} height={28} className="h-6 w-auto" />
            <span className="text-xs uppercase tracking-wider oc-accent">OpenClawYYC</span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="https://cal.com/robison-custodio/15min" className="rounded-xl px-4 py-2 text-sm font-semibold oc-btn-secondary oc-accent transition hover:-translate-y-0.5">
              Book a Call
            </Link>
          </div>
        </div>
      </header>

      <section className="oc-section pb-6 pt-10">
        <div className="mx-auto max-w-7xl px-6">
          <p className="inline-block rounded-full border border-[color:var(--coral-bright)]/30 bg-[color:var(--coral-bright)]/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide oc-accent">
            New · Managed OpenClaw deployment for Calgary teams
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden oc-section pt-6">
        <div className="absolute -top-20 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[color:var(--coral-bright)]/15 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-[color:var(--cyan-bright)]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 md:grid-cols-[1.2fr_.8fr] md:items-center">
          <div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              <span className="bg-gradient-to-br from-[color:var(--text-primary)] via-[color:var(--coral-bright)] to-[color:var(--cyan-bright)] bg-clip-text text-transparent">
                Deploy OpenClaw with a SetupClaw-style experience
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base oc-text-secondary md:text-lg">
              Your AI assistant stack goes live fast: email triage, calendar operations, proactive reminders, and cross-channel workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="https://cal.com/robison-custodio/15min" className="rounded-xl px-6 py-3 font-semibold transition hover:-translate-y-0.5 oc-btn-primary">
                Start Deployment
              </Link>
              <Link href="#comparison" className="rounded-xl border border-[color:var(--border-subtle)] px-6 py-3 font-semibold oc-text-secondary transition hover:-translate-y-0.5 hover:bg-[color:var(--surface-card-strong)]">
                Compare Setup
              </Link>
            </div>
          </div>
          <div className="rounded-2xl oc-surface p-6">
            <p className="text-sm font-semibold oc-accent">OpenClaw Assistant</p>
            <p className="mt-3 text-sm oc-text-secondary">Status: online · model: Claude Opus 4.1</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {integrations.slice(0, 6).map(({ name, icon: Icon, color }) => (
                <div key={name} className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-card)] p-2">
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="comparison" className="oc-section py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl">Traditional setup vs OpenClawYYC</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl oc-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-wide oc-text-secondary">Traditional</p>
              <ul className="mt-4 space-y-2 text-sm oc-text-secondary">
                {oldWay.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-semibold text-red-400">~60 min (or much more for non-technical teams)</p>
            </article>
            <article className="rounded-2xl border border-[color:var(--coral-bright)]/35 bg-[color:var(--surface-card)] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide oc-accent">OpenClawYYC</p>
              <ul className="mt-4 space-y-2 text-sm oc-text-secondary">
                {newWay.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-semibold oc-accent">Live in minutes with managed infrastructure</p>
            </article>
          </div>
        </div>
      </section>

      <section className="oc-section py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl">Three steps to launch</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <article key={s.number} className="rounded-2xl oc-surface p-6">
                <p className="text-sm font-semibold oc-accent">{s.number}</p>
                <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 oc-text-secondary">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="oc-section bg-[color:var(--surface-card)]/45 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl">What your assistant can do</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div key={item} className="rounded-xl oc-surface px-4 py-3 text-sm oc-text-secondary">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="oc-section py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl">Simple pricing</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className={`rounded-2xl p-6 ${plan.popular ? "border border-[color:var(--coral-bright)]/40 bg-[color:var(--surface-card)]" : "oc-surface"}`}>
                {plan.popular && <p className="text-xs font-semibold uppercase oc-accent">Most Popular</p>}
                <h3 className="mt-1 text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-lg font-semibold">{plan.price}</p>
                <p className="mt-3 text-sm oc-text-secondary">{plan.spec}</p>
                <Link href="https://cal.com/robison-custodio/15min" className="mt-6 inline-block rounded-xl px-4 py-2 text-sm font-semibold oc-btn-primary">
                  Get Started
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="oc-section py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl">FAQ</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-xl oc-surface p-5">
                <summary className="cursor-pointer font-semibold oc-accent">{faq.q}</summary>
                <p className="mt-3 oc-text-secondary">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 pt-10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Ready to deploy your AI assistant?</h2>
          <p className="mx-auto mt-4 max-w-2xl oc-text-secondary">
            No server headaches. No SSH setup. Just a production-ready OpenClaw deployment with ongoing support.
          </p>
          <Link href="https://cal.com/robison-custodio/15min" className="mt-8 inline-block rounded-xl px-6 py-3 font-semibold transition oc-btn-primary">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
