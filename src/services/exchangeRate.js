const API_URL =
  "https://raw.githubusercontent.com/iran-market/iran-market.github.io/main/data/popular.json";

export async function getExchangeRates() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("دریافت نرخ ارز با مشکل مواجه شد.");
  }

  const payload = await response.json();

  if (!Array.isArray(payload.data)) {
    throw new Error("ساختار پاسخ API معتبر نیست.");
  }

  const supportedSymbols = ["USD_IRR_FREE", "EUR_IRR_FREE", "GBP_IRR_FREE"];

  const rates = {};

  for (const item of payload.data) {
    if (
      supportedSymbols.includes(item.symbol) &&
      Number.isFinite(item.price) &&
      item.price > 0
    ) {
      rates[item.symbol] = item.price;
    }
  }

  if (!supportedSymbols.every((symbol) => rates[symbol])) {
    throw new Error("اطلاعات بعضی از نرخ‌های ارز در دسترس نیست.");
  }

  return {
    rates,
    updatedAt: payload.meta?.updated_at ?? null,
    isStale: payload.meta?.stale ?? false,
  };
}
