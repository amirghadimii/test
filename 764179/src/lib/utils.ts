export type Lang = "fa" | "en";

export type Localized = { fa: string; en: string };

export const isLang = (value: unknown): value is Lang =>
  value === "fa" || value === "en";

/** Converts standard English/ASCII digits to Persian digits (۰-۹). */
export function toPersianDigits(input: string | number): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(input).replace(/\d/g, (d) => persianDigits[Number(d)]);
}

/** Converts Persian and Arabic-Indic digits to standard ASCII digits (0-9). */
export function toAsciiDigits(str: string): string {
  return str
    .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 1776))
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 1632));
}

/** Formats a number with locale-aware digits (Persian digits in FA). */
export function formatNumber(value: number, lang: Lang): string {
  try {
    return new Intl.NumberFormat(lang === "fa" ? "fa-IR" : "en-US").format(value);
  } catch {
    return lang === "fa" ? toPersianDigits(value) : String(value);
  }
}

/** Formats a year without thousands groupings (e.g. "۱۴۰۳" in FA, "2024" in EN). */
export function formatYear(year: number, lang: Lang): string {
  if (lang === "fa") {
    return toPersianDigits(year);
  }
  return String(year);
}

/**
 * Formats a project year consistently:
 * - Persian (FA): Jalali year in Persian digits (e.g. "۱۴۰۳")
 * - English (EN): Gregorian year in Western digits (e.g. "2024")
 */
export function formatProjectYear(
  project: { year?: number; jalali?: number },
  lang: Lang,
): string {
  if (lang === "fa") {
    const jalali = project.jalali ?? (project.year ? project.year - 621 : 1403);
    return formatYear(jalali, "fa");
  }
  const gregorian = project.year ?? (project.jalali ? project.jalali + 621 : 2024);
  return formatYear(gregorian, "en");
}

/**
 * Returns the current year formatted:
 * - Persian (FA): current Jalali year in Persian digits (e.g. "۱۴۰۵")
 * - English (EN): current Gregorian year in Western digits (e.g. "2026")
 */
export function getCurrentYear(lang: Lang): string {
  if (lang === "fa") {
    try {
      return new Intl.DateTimeFormat("fa-IR-u-ca-persian", { year: "numeric" }).format(new Date());
    } catch {
      const approx = new Date().getFullYear() - 621;
      return toPersianDigits(approx);
    }
  }
  return String(new Date().getFullYear());
}

/** Formats a sequence index (e.g. "01" -> "۰۱" in FA, "01" in EN). */
export function formatIndex(input: number | string, lang: Lang): string {
  const padded = String(input).padStart(2, "0");
  return lang === "fa" ? toPersianDigits(padded) : padded;
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

/**
 * Normalizes phone numbers (handles Persian digits, Iranian 09xx, +98, 0098,
 * and valid international E.164 numbers).
 */
export function normalizeIranPhone(raw: string): string | null {
  if (!raw) return null;
  const ascii = toAsciiDigits(raw);
  let value = ascii.trim().replace(/[\s\-()_]/g, "");

  // Iranian formats (+98 9xx, 0098 9xx, 989xx, 9xxxxxxxxx) -> 09xxxxxxxxx
  value = value.replace(/^\+98/, "0").replace(/^0098/, "0").replace(/^98(?=9)/, "0");
  value = value.replace(/^9(?=\d{9}$)/, "09");
  if (/^09\d{9}$/.test(value)) return value;

  // International format with leading + (e.g. +1 555 123 4567)
  const cleanIntl = ascii.trim().replace(/[\s\-()_]/g, "");
  if (/^\+[1-9]\d{6,14}$/.test(cleanIntl)) return cleanIntl;

  return null;
}

export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}
