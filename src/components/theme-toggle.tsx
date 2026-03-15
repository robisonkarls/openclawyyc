"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const options = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) {
    return <div className="h-9 w-[204px]" aria-hidden="true" />;
  }

  return (
    <div className="inline-flex rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-card)] p-1 text-xs">
      {options.map((option) => {
        const isActive = theme === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            className={`rounded-lg px-3 py-1.5 font-semibold transition ${
              isActive
                ? "bg-[color:var(--coral-bright)] text-white"
                : "text-[color:var(--text-secondary)] hover:bg-[color:var(--surface-card-strong)]"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
