import CurrencyConverter from "./components/CurrencyConverter";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./context/useTheme";

export default function App() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      dir="rtl"
      className={`flex min-h-screen flex-col items-center justify-center px-4 py-8 transition-colors duration-300 sm:px-6 ${
        isDark ? "bg-[#10111c] text-white" : "bg-[#f7f7fa] text-gray-900"
      }`}
    >
      <div className="w-full max-w-[672px]">
        <header className="mb-7 text-center">
          <div className="mb-6 flex items-center justify-between">
            <span
              aria-hidden="true"
              className={`grid h-10 w-10 place-items-center rounded-xl border text-2xl font-bold ${
                isDark
                  ? "border-white/10 bg-[#191b29] text-purple-400"
                  : "border-gray-200 bg-white text-purple-600"
              }`}
            >
              ↗
            </span>

            <ThemeToggle />
          </div>

          <h1 className="bg-gradient-to-l from-purple-500 to-indigo-400 bg-clip-text text-3xl leading-relaxed font-extrabold tracking-tight text-transparent sm:text-4xl">
            تبدیل‌گر ارز
          </h1>

          <p
            className={`mt-2 text-sm leading-7 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            تبدیل سریع و آسان بین ارزهای مختلف جهان
          </p>
        </header>

        <CurrencyConverter />

        <footer
          className={`mt-6 flex flex-wrap items-center justify-center gap-2 text-center text-xs leading-6 ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          <span>ابزار تبدیل ارز</span>
          <span className="text-purple-500">•</span>
          <span>نرخ ها هر 30 دقیقه یک بار به‌روزرسانی می‌شوند</span>
        </footer>
      </div>
    </main>
  );
}
