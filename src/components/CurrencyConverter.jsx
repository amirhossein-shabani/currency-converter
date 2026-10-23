import { currencies, formatNumber } from "../utils/currency";
import { useCurrencyConverter } from "../hooks/useCurrencyConverter";
import { useTheme } from "../context/useTheme";

export default function CurrencyConverter() {
  const {
    amount,
    setAmount,
    fromCode,
    setFromCode,
    toCode,
    setToCode,
    fromCurrency,
    toCurrency,
    result,
    isValidAmount,
    swapCurrencies,
    isLoading,
    isError,
    updatedAt,
    isStale,
  } = useCurrencyConverter();

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const fieldClass = `w-full rounded-2xl border px-4 py-4 text-sm outline-none transition-all duration-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-500/10 ${
    isDark
      ? "border-white/10 bg-[#252635] text-white"
      : "border-gray-200 bg-white text-gray-900 shadow-sm shadow-gray-100/70"
  }`;

  const labelClass = `mb-2 block text-sm font-semibold ${
    isDark ? "text-gray-200" : "text-gray-700"
  }`;

  const mutedTextClass = isDark ? "text-gray-400" : "text-gray-500";

  return (
    <section
      dir="rtl"
      className={`w-full rounded-3xl border p-6 shadow-xl transition-all duration-300 sm:p-8 ${
        isDark
          ? "border-white/10 bg-[#191b29] shadow-black/20"
          : "border-white/70 bg-white/90 shadow-indigo-200/50"
      }`}
    >
      <header className="mb-8">
        <div className="mb-2 flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${
              isDark
                ? "bg-purple-500/15 text-purple-300"
                : "bg-purple-100 text-purple-600"
            }`}
            aria-hidden="true"
          >
            ⇄
          </div>

          <div>
            <h2
              className={`text-xl font-bold sm:text-2xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              تبدیل ارز
            </h2>
            <p className={`mt-1 text-xs ${mutedTextClass}`}>
              سریع، آسان و مطمئن
            </p>
          </div>
        </div>
      </header>

      <div className="mb-6">
        <label htmlFor="amount" className={labelClass}>
          مبلغ موردنظر
        </label>

        <input
          id="amount"
          type="number"
          min="0"
          step="any"
          inputMode="decimal"
          dir="ltr"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          placeholder="مبلغ را وارد کنید"
          className={`${fieldClass} text-left text-xl font-semibold`}
        />
      </div>

      <div>
        <label htmlFor="from-currency" className={labelClass}>
          تبدیل از
        </label>

        <select
          id="from-currency"
          value={fromCode}
          onChange={(event) => setFromCode(event.target.value)}
          className={fieldClass}
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.symbol} — {currency.name} ({currency.code})
            </option>
          ))}
        </select>
      </div>

      <div className="my-5 flex justify-center">
        <button
          type="button"
          onClick={swapCurrencies}
          aria-label="جابه‌جایی ارزها"
          title="جابه‌جایی ارزها"
          className={`flex h-12 w-12 items-center justify-center rounded-full border text-2xl transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-400 hover:text-purple-500 active:scale-95 ${
            isDark
              ? "border-white/10 bg-[#252635] text-gray-100"
              : "border-gray-200 bg-white text-gray-700 shadow-sm"
          }`}
        >
          ⇅
        </button>
      </div>

      <div>
        <label htmlFor="to-currency" className={labelClass}>
          تبدیل به
        </label>

        <select
          id="to-currency"
          value={toCode}
          onChange={(event) => setToCode(event.target.value)}
          className={fieldClass}
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.symbol} — {currency.name} ({currency.code})
            </option>
          ))}
        </select>
      </div>

      <div
        aria-live="polite"
        className={`mt-7 overflow-hidden rounded-2xl bg-gradient-to-l p-5 sm:p-6 ${
          isDark
            ? "from-purple-950/70 via-indigo-950/60 to-emerald-950/50"
            : "from-purple-100 via-indigo-50 to-teal-50"
        }`}
      >
        <p className={`mb-3 text-sm ${mutedTextClass}`}>نتیجه تبدیل</p>

        {isLoading ? (
          <p className="py-3 text-sm text-purple-500">
            در حال دریافت نرخ‌های ارز...
          </p>
        ) : isError ? (
          <p className="py-2 text-sm leading-7 text-red-500">
            دریافت نرخ ارز ناموفق بود. اتصال اینترنت را بررسی کنید و دوباره تلاش
            کنید.
          </p>
        ) : !isValidAmount ? (
          <p className="py-2 text-sm text-red-500">
            لطفاً مبلغ معتبر و غیرمنفی وارد کنید.
          </p>
        ) : result === null ? (
          <p className="py-2 text-sm text-red-500">
            امکان محاسبه این تبدیل وجود ندارد.
          </p>
        ) : (
          <>
            <p
              dir="ltr"
              className={`break-words text-left text-3xl font-bold tracking-tight sm:text-4xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {formatNumber(result)}{" "}
              <span className="text-xl font-semibold">{toCurrency.symbol}</span>
            </p>

            <p className={`mt-3 text-xs leading-6 ${mutedTextClass}`}>
              {fromCurrency.name} به {toCurrency.name}
            </p>
          </>
        )}
      </div>

      <footer
        className={`mt-5 text-center text-xs leading-6 ${mutedTextClass}`}
      >
        {isError ? (
          <p>در حال حاضر نرخ ارز در دسترس نیست.</p>
        ) : isLoading ? (
          <p>در انتظار دریافت نرخ‌ها...</p>
        ) : (
          <>
            <p>
              منبع نرخ‌ها: بازار آزاد ارز
              {isStale ? " — ممکن است داده‌ها قدیمی باشند." : ""}
            </p>

            {updatedAt && (
              <p className="mt-1">
                آخرین به‌روزرسانی منبع: {String(updatedAt)}
              </p>
            )}
          </>
        )}
      </footer>
    </section>
  );
}
