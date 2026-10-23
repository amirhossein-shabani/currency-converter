import { useTheme } from "../context/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "فعال کردن تم روشن" : "فعال کردن تم تیره"}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs transition hover:border-purple-500 ${
        isDark
          ? "border-white/10 bg-[#191b29] text-gray-200"
          : "border-gray-200 bg-white text-gray-700"
      }`}
    >
      <span aria-hidden="true">{isDark ? "☀️" : "🌙"}</span>
      <span>{isDark ? "حالت روشن" : "حالت تیره"}</span>
    </button>
  );
}
