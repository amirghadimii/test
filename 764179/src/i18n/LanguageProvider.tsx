"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { dictionary, metaKeyForPath, type Dict } from "./dictionary";
import type { Lang } from "@/lib/utils";

export const LANG_STORAGE_KEY = "ark.lang";

export type PageMeta = { title: string; description: string };

type LanguageContextValue = {
  lang: Lang;
  dir: "rtl" | "ltr";
  isFa: boolean;
  t: Dict;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  setPageMeta: (meta: PageMeta | null) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fa");
  const [pageMeta, setPageMetaState] = useState<PageMeta | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
      if (stored === "fa" || stored === "en") {
        requestAnimationFrame(() => setLangState(stored));
      }
    } catch {
      /* storage unavailable — keep default */
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "fa" ? "en" : "fa");
  }, [lang, setLang]);

  const setPageMeta = useCallback((meta: PageMeta | null) => {
    setPageMetaState(meta);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "fa" ? "rtl" : "ltr";
    root.dataset.lang = lang;
  }, [lang]);

  useEffect(() => {
    const key = metaKeyForPath(pathname ?? "/");
    const meta = pageMeta ?? dictionary[lang].meta[key];
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", meta.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", meta.description);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && pageMeta) ogUrl.setAttribute("content", window.location.href);
  }, [lang, pathname, pageMeta]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir: lang === "fa" ? "rtl" : "ltr",
      isFa: lang === "fa",
      t: dictionary[lang],
      setLang,
      toggleLang,
      setPageMeta,
    }),
    [lang, setLang, toggleLang, setPageMeta],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return context;
}
