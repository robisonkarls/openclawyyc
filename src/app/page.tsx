import Image from "next/image";
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

const builtFor = [
  {
    title: "Founders & CEOs",
    body: "Inbox overload, calendar chaos, and too many follow-ups slipping through the cracks.",
  },
  {
    title: "Executive teams",
    body: "CFO, Head of Sales, EA, and Ops leaders who need role-based assistants with clean boundaries.",
  },
  {
    title: "Agencies & studios",
    body: "Client reporting, project coordination, and recurring communications handled proactively.",
  },
  {
    title: "Investors & operators",
    body: "Pipeline updates, portfolio check-ins, and recurring briefings without manual babysitting.",
  },
];

const timeline = [
  {
    time: "Every 30 min",
    action:
      "Reviews key inboxes, highlights urgent messages, and drafts context-aware replies for approval.",
  },
  {
    time: "9:00 AM daily",
    action:
      "Delivers a leadership briefing: meetings, attendee context, prep notes, and priority actions.",
  },
  {
    time: "On demand",
    action:
      "Natural language requests trigger real actions (e.g., ‘I’m 10 minutes late’ → notify + reschedule).",
  },
  {
    time: "Ongoing",
    action:
      "Monitors collaboration channels, summarizes threads, and escalates what actually needs attention.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Kickoff call",
    body: "We define your outcomes, map integrations (email, calendar, CRM, chat), and prioritize high-impact workflows.",
  },
  {
    step: "2",
    title: "Deploy & harden",
    body: "We provision infrastructure, install OpenClaw, connect integrations securely, and apply hardening controls before launch.",
  },
  {
    step: "3",
    title: "14-day hypercare",
    body: "We tune behavior, adjust permissions as trust grows, resolve edge cases, and stabilize operations with direct support.",
  },
];

const whyUs = [
  "OpenClaw is powerful, but production setup + security hardening is where most teams get stuck.",
  "We handle deployment, integration reliability, updates, and drift so your team gets leverage quickly.",
  "We implement least-privilege by default and expand access only as confidence grows.",
];

const security = [
  "Least-privilege access and staged trust expansion",
  "Sandboxed execution model and host-level hardening",
  "Integration revocation paths and operational safeguards",
  "Update and maintenance procedures to reduce configuration drift",
];

const afterPurchase = [
  {
    label: "Within 48 hours",
    body: "We schedule kickoff and open your private implementation channel.",
  },
  {
    label: "Kickoff session",
    body: "20–45 minute requirements workshop covering goals, tools, and boundaries.",
  },
  {
    label: "Live setup",
    body: "1–3 hour implementation session. Most teams go live same day.",
  },
];

const faqs = [
  {
    q: "What is OpenClaw?",
    a: "OpenClaw is an open-source always-on AI assistant platform that can triage communication, schedule actions, and run workflows across connected tools.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. We handle setup, security hardening, integrations, testing, and optimization. Your team uses the assistant through familiar chat channels.",
  },
  {
    q: "Can I set this up myself?",
    a: "Yes, but most DIY installs miss key controls around permissions, revocation, and operational safety. We make it production-ready from day one.",
  },
  {
    q: "What is included in implementation?",
    a: "Infrastructure provisioning, OpenClaw deployment, security baseline, integration wiring, up to three core workflows, documentation, and 14-day hypercare.",
  },
  {
    q: "What happens after I pay?",
    a: "We contact you within 48 hours, run kickoff, then complete a live setup session (typically 1–3 hours) so you can go live quickly.",
  },
  {
    q: "Is OpenClaw safe to run with business data?",
    a: "It can be, if deployed correctly. We start with least privilege, apply sandboxing and hardening, and only expand permissions as trust grows.",
  },
  {
    q: "What if the bot goes rogue?",
    a: "We implement safeguards: read-first permissions, strict execution boundaries, revocation controls, and staged trust policies to reduce risk.",
  },
  {
    q: "Do you support multi-agent deployments?",
    a: "Yes. Most teams run 2–6 role-specific assistants (e.g., CEO, Sales, Finance, EA) with clear identity boundaries.",
  },
  {
    q: "What about ongoing maintenance?",
    a: "Managed care covers updates, integration health, token lifecycle issues, workflow drift, and support escalation.",
  },
  {
    q: "VPS or Mac Mini?",
    a: "Most teams choose VPS for cost and maintainability. Mac Mini is useful when local hardware or Apple-specific workflows are required.",
  },
  {
    q: "How much does setup usually cost?",
    a: "Cost depends on complexity, integrations, and workflow count. We scope this in kickoff and provide a clear implementation plan before build.",
  },
  {
    q: "Do you work only in Calgary?",
    a: "We are Calgary-first and remote-capable. We can support teams across the region and beyond, with local context for Calgary workflows.",
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-amber-200 bg-amber-50 py-3">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm font-semibold text-amber-800">
          INTERNAL DRAFT — benchmark layout/content scope complete (ready for brand rewrite pass).
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <p className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold">
            White-Glove OpenClaw Deployment • Calgary Region
          </p>
          <h1 className="max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
            We Deploy and Maintain Your Team’s AI Assistants — Securely, End-to-End
          </h1>
          <p className="mt-6 max-w-4xl text-lg text-blue-100 md:text-xl">
            We install, harden, integrate, and maintain your assistant stack so founders and executive teams can move faster without adding security risk.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700">Book a Call</a>
            <a href="#how-it-works" className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white">How it works</a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Powered by OpenClaw Ecosystem</p>
            <Image src="/openclaw-logo-text.png" alt="OpenClaw" width={170} height={32} className="h-6 w-auto" />
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="text-center md:text-left">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Connects to</p>
                <p className="mt-2 text-3xl font-bold text-indigo-700">+10,000</p>
              </div>
              <div className="grid w-full max-w-4xl grid-cols-2 gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3 md:grid-cols-4">
                {[
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
                ].map(({ name, icon: IconComponent }) => (
                  <div key={name} className="flex items-center justify-center gap-2 rounded-lg border border-blue-100 bg-white px-3 py-2 text-center">
                    <IconComponent className="h-4 w-4 text-indigo-700" aria-hidden="true" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold md:text-4xl">Built for</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {builtFor.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">Always On, Always Working</h2>
          <p className="mt-4 max-w-4xl text-lg text-slate-600 leading-relaxed">
            Unlike chat-only tools, your OpenClaw agent runs 24/7 on dedicated infrastructure. It wakes up every 30 minutes, checks your email, calendar, and connected tools, then takes action without waiting for manual prompting.
          </p>

          <div className="mt-10 space-y-4">
            {timeline.map((item) => (
              <div key={item.time} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">{item.time}</p>
                <p className="mt-2 text-slate-700">{item.action}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-slate-600">
            Your team can chat with the assistant via Telegram, Slack, WhatsApp, or Discord — no technical background required.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">What’s an Executive Agent?</h2>
        <p className="mt-4 max-w-4xl text-slate-600 leading-relaxed">
          One executive agent is one OpenClaw instance configured around one primary operational identity (e.g., CEO, CFO, Head of Sales, EA). This keeps pricing fair and security boundaries clear. Most teams run multiple role-specific agents that coordinate through structured workflows.
        </p>
      </section>

      <section id="how-it-works" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">How it works</h2>
          <div className="mt-10 space-y-6">
            {howItWorks.map((item) => (
              <article key={item.step} className="rounded-2xl border border-slate-200 bg-white p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-700 text-lg font-bold text-white">{item.step}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-lg leading-relaxed text-slate-700">{item.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">Why teams hire us</h2>
        <div className="mt-8 space-y-3">
          {whyUs.map((line) => (
            <div key={line} className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700">• {line}</div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">What people are saying</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "It feels like hiring an employee rather than opening another chat window.",
              "You’re solving a problem that people like me probably wouldn’t take the time to solve ourselves.",
              "The hardening alone was worth it.",
              "Super helpful in making sense of OpenClaw, integrations, memory, and workflows.",
            ].map((quote) => (
              <blockquote key={quote} className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
                “{quote}”
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">Security-first by design</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {security.map((item) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-white p-6 text-slate-700">✓ {item}</div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">After you purchase</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {afterPurchase.map((item) => (
              <article key={item.label} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-indigo-700">{item.label}</h3>
                <p className="mt-3 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h2 className="text-3xl font-bold text-green-900">100% satisfaction guarantee</h2>
          <p className="mt-3 text-green-800">
            If you’re not happy with the setup, we’ll make it right. Internal draft keeps this guarantee block for parity with the sample flow.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">Already running OpenClaw?</h2>
        <p className="mt-4 max-w-4xl text-slate-600 leading-relaxed">
          Many teams come with a working install that has security gaps. We audit your setup, fix hardening issues, improve integration safety, and migrate you to managed operations without rebuilding from scratch.
        </p>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">Implementation & pricing notes</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-900">Delivery model</h3>
              <p className="mt-3 text-slate-600">
                One-time setup fee with 14-day hypercare. Ongoing support is handled through Managed Care plans.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-900">Infrastructure options</h3>
              <p className="mt-3 text-slate-600">
                Most teams deploy on cloud VPS for lower cost and easy maintenance. Mac Mini is available for iMessage or local-hardware preference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">FAQ</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-xl border border-slate-200 bg-white p-6">
              <summary className="cursor-pointer text-lg font-semibold text-blue-800">{faq.q}</summary>
              <p className="mt-3 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Learn More</p>
          <p className="mt-3 max-w-3xl text-slate-600">
            Deep-dive resources for leadership teams evaluating implementation approach, cost, and operating model.
          </p>
          <div className="mt-6 space-y-4">
            {[
              {
                title: "What is OpenClaw?",
                blurb: "Always-on assistant architecture, capabilities, and practical business use cases.",
              },
              {
                title: "OpenClaw vs. hiring an executive assistant",
                blurb: "Where automation wins, where human support still matters, and how teams combine both.",
              },
              {
                title: "How much does OpenClaw setup cost?",
                blurb: "Key cost drivers: integrations, workflow scope, security controls, and support model.",
              },
              {
                title: "What is a Collison Install?",
                blurb: "Done-for-you implementation model: we show up and deploy everything for you.",
              },
            ].map((item) => (
              <a
                key={item.title}
                href="#"
                className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white px-5 py-4 text-slate-800 hover:border-indigo-300"
              >
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.blurb}</p>
                </div>
                <span className="text-indigo-700 transition-transform group-hover:translate-x-1">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">Available across Calgary Region</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Remote-first deployment with optional local support across Calgary and surrounding communities. Don’t see your city? Book a call.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city) => (
              <div key={city} className="rounded-lg border border-blue-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">{city}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-r from-blue-700 to-indigo-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to launch your assistant stack?</h2>
          <p className="mt-4 text-lg text-blue-100">
            Book a discovery call and we’ll map integrations, priorities, and your rollout plan.
          </p>
          <a href="https://cal.com" className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">
            Book a Discovery Call
          </a>
        </div>
      </section>
    </main>
  );
}
