# مبدل ارز

یه مبدل ارز ساده و سریع که با React و Vite ساخته شده. نرخ روز ارزها رو می‌گیره، تبدیل رو همون لحظه انجام میده و رابطش کاملاً فارسی و راست‌چینه.

## ارزهای پشتیبانی‌شده

فعلاً این ارزها پشتیبانی میشن:

- دلار آمریکا (USD)
- یورو (EUR)
- پوند انگلیس (GBP)
- ریال (IRR)
- تومان (IRT)

## امکانات

- دریافت نرخ ارز و تبدیل فوری بین ارزها
- رابط فارسی با چیدمان راست‌چین
- تم روشن و تیره
- واکنش‌گرا، هم روی موبایل هم دسکتاپ
- مدیریت درخواست‌ها با React Query
- اگه نرخ قدیمی باشه یا خطایی پیش بیاد، همون‌جا به کاربر نشون داده میشه

## نسخه‌ی آنلاین

نسخه‌ی منتشرشده‌ی برنامه رو می‌تونید از [این‌جا](https://currency-converter-psi-opal.vercel.app/) ببینید و استفاده کنید.

## اجرا

```bash
npm install
npm run dev
```

## دستورها

| دستور | کاربرد |
| --- | --- |
| `npm run dev` | اجرای نسخه‌ی توسعه |
| `npm run build` | ساخت نسخه‌ی نهایی |
| `npm run lint` | بررسی کد با ESLint |

---

# Currency Converter

A fast, lightweight currency converter built with React and Vite. It fetches the latest exchange rates, converts instantly on the client, and ships with a fully Persian, right-to-left interface.

## Supported currencies

Currently supported:

- US Dollar (USD)
- Euro (EUR)
- British Pound (GBP)
- Iranian Rial (IRR)
- Iranian Toman (IRT)

## Features

- Exchange rate lookup and instant conversion between currencies
- Persian UI with RTL layout
- Light and dark themes
- Responsive on both mobile and desktop
- Data fetching and caching with React Query
- Stale rates and request errors are surfaced clearly to the user

## Live version

The released version is live at [currency-converter-psi-opal.vercel.app](https://currency-converter-psi-opal.vercel.app/).

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run lint` | Lint the codebase |
