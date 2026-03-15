"use client";

import { useTheme } from "next-themes";

const options = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex rounded-xl border border-slate-300 bg-white/80 p-1 text-xs dark:border-white/20 dark:bg-black/30">
      {options.map((option) => {
        const isActive = theme === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            className={`rounded-lg px-3 py-1.5 font-semibold transition ${
              isActive
                ? "bg-cyan-300 text-slate-900"
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
