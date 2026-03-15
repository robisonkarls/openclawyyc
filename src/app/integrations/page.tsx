import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  SiWhatsapp,
  SiTelegram,
  SiDiscord,
  SiSlack,
  SiSignal,
  SiImessage,
  SiNextcloud,
  SiMatrix,
  SiZalo,
  SiAnthropic,
  SiOpenai,
  SiGoogle,
  SiX,
  SiPerplexity,
  SiHuggingface,
  SiNotion,
  SiObsidian,
  SiTrello,
  SiGithub,
  SiSpotify,
  SiSonos,
  SiShazam,
  SiPhilipshue,
  SiHomeassistant,
  SiGooglechrome,
  SiGmail,
  Si1Password,
  SiGiphy,
  SiMacos,
  SiIos,
  SiAndroid,
  SiLinux,
  SiTesco,
  SiBambulab,
} from "react-icons/si";
import {
  FaCommentDots,
  FaRobot,
  FaClipboardList,
  FaBed,
  FaMicrophone,
  FaClock,
  FaLink,
  FaImage,
  FaCamera,
  FaEnvelope,
  FaRing,
  FaUtensils,
  FaStickyNote,
  FaCheck,
  FaCloudSun,
  FaWindows,
  FaHashtag,
} from "react-icons/fa";

const categories = [
  {
    title: "Chat Providers",
    items: [
      { name: "WhatsApp", icon: SiWhatsapp, color: "text-[#25D366]" },
      { name: "Telegram", icon: SiTelegram, color: "text-[#26A5E4]" },
      { name: "Discord", icon: SiDiscord, color: "text-[#5865F2]" },
      { name: "Slack", icon: SiSlack, color: "text-[#E01E5A]" },
      { name: "Signal", icon: SiSignal, color: "text-[#3A76F0]" },
      { name: "iMessage", icon: SiImessage, color: "text-[#34C759]" },
      { name: "iMessage Personal", icon: SiImessage, color: "text-[#34C759]" },
      { name: "Microsoft Teams", icon: FaCommentDots, color: "text-[#6264A7]" },
      { name: "Nextcloud Talk", icon: SiNextcloud, color: "text-[#0082C9]" },
      { name: "Matrix", icon: SiMatrix, color: "text-slate-700 dark:text-[#E5E7EB]" },
      { name: "Nostr", icon: FaHashtag, color: "text-[#9333EA]" },
      { name: "Tlon Messenger", icon: FaCommentDots, color: "text-[#22D3EE]" },
      { name: "Zalo", icon: SiZalo, color: "text-[#0068FF]" },
      { name: "Zalo Personal", icon: SiZalo, color: "text-[#0068FF]" },
      { name: "WebChat", icon: FaCommentDots, color: "text-slate-700 dark:text-[#E5E7EB]" },
    ],
  },
  {
    title: "AI Models",
    items: [
      { name: "Anthropic", icon: SiAnthropic, color: "text-[#D97706]" },
      { name: "OpenAI", icon: SiOpenai, color: "text-[#10A37F]" },
      { name: "Google", icon: SiGoogle, color: "text-[#4285F4]" },
      { name: "MiniMax", icon: FaRobot, color: "text-[#F97316]" },
      { name: "xAI", icon: SiX, color: "text-slate-700 dark:text-[#E5E7EB]" },
      { name: "Vercel AI Gateway", icon: FaRobot, color: "text-slate-700 dark:text-[#E5E7EB]" },
      { name: "OpenRouter", icon: FaRobot, color: "text-[#8B5CF6]" },
      { name: "Mistral", icon: FaRobot, color: "text-[#F97316]" },
      { name: "DeepSeek", icon: FaRobot, color: "text-[#2563EB]" },
      { name: "GLM", icon: FaRobot, color: "text-[#22D3EE]" },
      { name: "Perplexity", icon: SiPerplexity, color: "text-[#22D3EE]" },
      { name: "Hugging Face", icon: SiHuggingface, color: "text-[#F59E0B]" },
      { name: "Local Models", icon: FaRobot, color: "text-[#A3E635]" },
    ],
  },
  {
    title: "Productivity",
    items: [
      { name: "Apple Notes", icon: FaStickyNote, color: "text-[#F59E0B]" },
      { name: "Apple Reminders", icon: FaCheck, color: "text-[#3B82F6]" },
      { name: "Things 3", icon: FaClipboardList, color: "text-[#DC2626]" },
      { name: "Notion", icon: SiNotion, color: "text-slate-700 dark:text-[#E5E7EB]" },
      { name: "Obsidian", icon: SiObsidian, color: "text-[#7C3AED]" },
      { name: "Bear Notes", icon: FaClipboardList, color: "text-[#F59E0B]" },
      { name: "Trello", icon: SiTrello, color: "text-[#0079BF]" },
      { name: "GitHub", icon: SiGithub, color: "text-slate-700 dark:text-[#E5E7EB]" },
    ],
  },
  {
    title: "Music & Audio",
    items: [
      { name: "Spotify", icon: SiSpotify, color: "text-[#1DB954]" },
      { name: "Sonos", icon: SiSonos, color: "text-slate-700 dark:text-[#E5E7EB]" },
      { name: "Shazam", icon: SiShazam, color: "text-[#1D9BF0]" },
    ],
  },
  {
    title: "Smart Home",
    items: [
      { name: "Philips Hue", icon: SiPhilipshue, color: "text-[#F59E0B]" },
      { name: "8Sleep", icon: FaBed, color: "text-[#38BDF8]" },
      { name: "Home Assistant", icon: SiHomeassistant, color: "text-[#41BDF5]" },
    ],
  },
  {
    title: "Tools & Automation",
    items: [
      { name: "Browser", icon: SiGooglechrome, color: "text-[#FBBF24]" },
      { name: "Canvas", icon: FaClipboardList, color: "text-[#A78BFA]" },
      { name: "Voice", icon: FaMicrophone, color: "text-[#22D3EE]" },
      { name: "Gmail", icon: SiGmail, color: "text-[#EA4335]" },
      { name: "Cron", icon: FaClock, color: "text-slate-700 dark:text-[#E5E7EB]" },
      { name: "Webhooks", icon: FaLink, color: "text-[#38BDF8]" },
      { name: "1Password", icon: Si1Password, color: "text-[#3B82F6]" },
      { name: "Weather", icon: FaCloudSun, color: "text-[#FACC15]" },
    ],
  },
  {
    title: "Media & Creative",
    items: [
      { name: "Image Gen", icon: FaImage, color: "text-[#A78BFA]" },
      { name: "GIF Search", icon: SiGiphy, color: "text-[#22D3EE]" },
      { name: "Peekaboo", icon: FaCamera, color: "text-slate-700 dark:text-[#E5E7EB]" },
      { name: "Camera", icon: FaCamera, color: "text-[#38BDF8]" },
    ],
  },
  {
    title: "Social",
    items: [
      { name: "Twitter/X", icon: SiX, color: "text-slate-700 dark:text-[#E5E7EB]" },
      { name: "Email", icon: FaEnvelope, color: "text-[#F87171]" },
    ],
  },
  {
    title: "Platforms",
    items: [
      { name: "macOS", icon: SiMacos, color: "text-slate-700 dark:text-[#E5E7EB]" },
      { name: "iOS", icon: SiIos, color: "text-slate-700 dark:text-[#E5E7EB]" },
      { name: "Android", icon: SiAndroid, color: "text-[#3DDC84]" },
      { name: "Windows", icon: FaWindows, color: "text-[#00A4EF]" },
      { name: "Linux", icon: SiLinux, color: "text-[#EAB308]" },
    ],
  },
  {
    title: "Community Showcase",
    items: [
      { name: "Tesco Autopilot", icon: SiTesco, color: "text-[#EF4444]" },
      { name: "Bambu Control", icon: SiBambulab, color: "text-[#06B6D4]" },
      { name: "Oura Ring", icon: FaRing, color: "text-[#F59E0B]" },
      { name: "Food Ordering", icon: FaUtensils, color: "text-[#22C55E]" },
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#06070a] dark:text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-white/10 py-20">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <p className="inline-block rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-700 dark:text-cyan-200">
            Integrations
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">⟩ Works With Everything</h1>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600 dark:text-slate-300 md:text-lg">
            Complete integration listing organized by category to mirror the OpenClaw integrations experience.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ThemeToggle />
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
              className="rounded-xl border border-cyan-300/40 px-5 py-2.5 text-sm font-semibold text-cyan-700 dark:text-cyan-200 transition hover:bg-cyan-300/10"
            >
              Open Official Integrations Page
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="space-y-10">
          {categories.map((category) => (
            <article key={category.title}>
              <h2 className="text-2xl font-bold md:text-3xl">⟩ {category.title}</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6">
                {category.items.map(({ name, icon: Icon, color }) => (
                  <div
                    key={name}
                    className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.03] p-4 text-center"
                    title={name}
                  >
                    <Icon className={`mx-auto h-8 w-8 ${color}`} aria-hidden="true" />
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">{name}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
