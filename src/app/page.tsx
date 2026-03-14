import Image from "next/image";
import Link from "next/link";
import {
  SiGmail,
  SiGooglecalendar,
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
import { FaMicrosoft } from "react-icons/fa6";

const integrations = [
  { name: "Gmail", icon: SiGmail },
  { name: "Google Calendar", icon: SiGooglecalendar },
  { name: "Outlook", icon: FaMicrosoft },
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
];

const quotes = [
  "It feels like hiring an employee rather than opening another chat window.",
  "The future is already here.",
  "Persistent memory, onboarding, and comms integration are game-changing.",
  "The hardening alone was worth it.",
  "AI as teammate, not tool.",
  "This changed how I run my day-to-day operations.",
];

const steps = [
  {
    number: "1",
    title: "Kickoff",
    body: "We map goals, integrations, boundaries, and high-impact workflows.",
  },
  {
    number: "2",
    title: "Deploy & Harden",
    body: "We install, secure, connect tools, and validate live operations.",
  },
  {
    number: "3",
    title: "Hypercare",
    body: "We tune behavior, tighten quality, and stabilize your workflows.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06070a] text-slate-100">
      <header className="border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/openclaw-logo-text.png"
              alt="OpenClaw"
              width={140}
              height={28}
              className="h-6 w-auto"
            />
            <span className="text-xs uppercase tracking-wider text-cyan-300">Calgary Services</span>
          </div>
          <Link
            href="#contact"
            className="rounded-xl border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/10"
          >
            Book a Call
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute -top-20 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="inline-block rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-200">
            The AI that actually does things.
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight md:text-7xl">
            Build an Always-On Executive Assistant Stack for Your Team
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300 md:text-xl">
            Clears inboxes, sends follow-ups, manages calendar operations, and runs proactive workflows — all from chat apps your team already uses.
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
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0b0d12] py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Connects to +10,000 tools
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {integrations.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200"
              >
                <Icon className="h-4 w-4 text-cyan-300" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">What people are saying</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {quotes.map((q) => (
              <blockquote
                key={q}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-slate-200"
              >
                “{q}”
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">How it works</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <article key={s.number} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 font-bold text-slate-900">
                  {s.number}
                </div>
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-slate-300">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Ready to go live?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
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
