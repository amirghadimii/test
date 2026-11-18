export type Lang = "fa" | "en";

export type Localized = { fa: string; en: string };

export const isLang = (value: unknown): value is Lang =>
  value === "fa" || value === "en";

/** Formats a number with locale-aware digits (Persian digits in FA). */
export function formatNumber(value: number, lang: Lang): string {
  try {
    return new Intl.NumberFormat(lang === "fa" ? "fa-IR" : "en-US").format(value);
  } catch {
    return String(value);
  }
}

export function formatArea(m2: number, lang: Lang): string {
  return `${formatNumber(m2, lang)} m²`;
}

/** Builds an optimized Unsplash CDN url. */
export function unsplash(id: string, width = 1600): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=75`;
}

export function slugify(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/[\s‌]+/g, "-")
    .replace(/[^\p{L}\p{N}-]/gu, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Normalizes Iranian mobile numbers to 09xxxxxxxxx. */
export function normalizeIranPhone(raw: string): string | null {
  if (!raw) return null;
  let value = raw.trim().replace(/[\s\-()_]/g, "");
  value = value.replace(/^\+98/, "0").replace(/^0098/, "0").replace(/^98(?=9)/, "0");
  value = value.replace(/^9(?=\d{9}$)/, "09");
  if (/^09\d{9}$/.test(value)) return value;
  return null;
}

export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}
