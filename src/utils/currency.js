export const currencies = [
  {
    code: "USD",
    name: "دلار آمریکا",
    symbol: "$",
    apiSymbol: "USD_IRR_FREE",
  },
  {
    code: "EUR",
    name: "یورو",
    symbol: "€",
    apiSymbol: "EUR_IRR_FREE",
  },
  {
    code: "GBP",
    name: "پوند انگلیس",
    symbol: "£",
    apiSymbol: "GBP_IRR_FREE",
  },
  {
    code: "IRT",
    name: "تومان",
    symbol: "تومان",
  },
  {
    code: "IRR",
    name: "ریال ایران",
    symbol: "﷼",
  },
];

export function getCurrency(code) {
  return currencies.find((currency) => currency.code === code);
}

// نرخ هر واحد ارز نسبت به تومان
export function getRateInToman(currency, apiRates) {
  if (!currency) return null;

  if (currency.code === "IRT") {
    return 1;
  }

  if (currency.code === "IRR") {
    return 0.1;
  }

  const rate = apiRates?.[currency.apiSymbol];

  return Number.isFinite(rate) && rate > 0 ? rate : null;
}

export function convertCurrency(amount, fromCurrency, toCurrency, apiRates) {
  const fromRate = getRateInToman(fromCurrency, apiRates);
  const toRate = getRateInToman(toCurrency, apiRates);

  if (
    !Number.isFinite(amount) ||
    amount < 0 ||
    fromRate === null ||
    toRate === null
  ) {
    return null;
  }

  // ابتدا مبلغ را به تومان تبدیل می‌کنیم و سپس به ارز مقصد
  return (amount * fromRate) / toRate;
}

export function formatNumber(value, maximumFractionDigits = 2) {
  if (!Number.isFinite(value)) return "—";

  return new Intl.NumberFormat("fa-IR", {
    maximumFractionDigits,
  }).format(value);
}
