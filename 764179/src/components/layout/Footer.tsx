"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { ArrowIcon, ArrowUpIcon } from "@/components/ui/Icons";
import { getCurrentYear } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  const { t, lang, isFa } = useLang();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const nav = [
    { href: "/", label: t.nav.home },
    { href: "/projects", label: t.nav.projects },
    { href: "/approach", label: t.nav.approach },
    { href: "/services", label: t.nav.services },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
    { href: "/admin", label: t.nav.admin },
  ];

  const services = [
    { href: "/services", label: t.home.services.items[0] },
    { href: "/services", label: t.home.services.items[1] },
    { href: "/services", label: t.home.services.items[2] },
    { href: "/services", label: t.home.services.items[3] },
    { href: "/services", label: t.home.services.items[4] },
    { href: "/services", label: t.home.services.items[5] },
  ];

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden border-t border-ash-dark bg-concrete-dark text-paper">
      <div className="shell pt-20 md:pt-28">
        {/* Top Newsletter / Inquiry Strip */}
        <Reveal className="grid gap-10 border-b border-white/12 pb-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <p className="eyebrow text-white/50">{t.footer.newsTitle}</p>
            <h2 className="display-sm mt-5 max-w-lg text-paper">{t.footer.tagline}</h2>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            {subscribed ? (
              <div className="border border-white/20 bg-white/5 p-4 text-xs font-mono text-paper/80">
                <span className="text-clay">✓</span> {t.footer.newsDone}
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-4">
                <label className="sr-only" htmlFor="footer-email">
                  {t.footer.newsPlaceholder}
                </label>
                <div className="flex items-center gap-3 border-b border-white/20 pb-3 transition-colors focus-within:border-clay">
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={t.footer.newsPlaceholder}
                    className="w-full bg-transparent text-xs outline-none placeholder:text-white/40 md:text-sm"
                    dir="ltr"
                  />
                  <button
                    type="submit"
                    className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/20 text-white transition-all hover:border-clay hover:bg-clay"
                    aria-label={t.footer.newsButton}
                  >
                    <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>

        {/* Main Architectural Information Grid */}
        <div className="grid gap-12 py-16 md:grid-cols-12 md:gap-8">
          {/* Colophon & Monograph Note */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center border border-white/30 text-xs font-semibold text-paper">
                {lang === "fa" ? "آ" : "A"}
              </span>
              <div className="flex flex-col">
                <span className="text-base font-semibold">{t.brand.name}</span>
                <span className="text-[9px] uppercase tracking-[0.24em] text-white/40">
                  {t.brand.latin} · SHOWROOM
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-xs leading-6 text-white/55 md:text-sm md:leading-7">
              {t.brand.tagline}
            </p>
            <div className="mt-6 font-mono text-[10px] tracking-widest uppercase text-white/40">
              <span>LAT 35°41′N · LONG 51°25′E</span>
            </div>
          </div>

          {/* Directory Navigation */}
          <div className="md:col-span-2 md:col-start-6">
            <p className="eyebrow text-white/50">{t.footer.navTitle}</p>
            <ul className="mt-6 space-y-3 font-mono text-xs text-white/70">
              {nav.map((item) => (
                <li key={item.href + item.label}>
                  <Link href={item.href} className="link-line link-clay">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Scope */}
          <div className="md:col-span-2">
            <p className="eyebrow text-white/50">{t.footer.servicesTitle}</p>
            <ul className="mt-6 space-y-3 text-xs text-white/70">
              {services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="link-line link-clay">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Studio Contact */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="eyebrow text-white/50">{t.footer.contactTitle}</p>
            <ul className="mt-6 space-y-3 text-xs text-white/70">
              <li className="leading-6">{t.contact.address}</li>
              <li dir="ltr" className="font-mono text-start">
                {isFa ? "۰۲۱ ۸۸۴۵ ۲۲۱۰" : "+98 21 8845 2210"}
              </li>
              <li>
                <a href="mailto:studio@ark-group.ir" className="link-line link-clay" dir="ltr">
                  studio@ark-group.ir
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Monumental Architectural Watermark (Zuxen & LAIN style) */}
      <div className="relative overflow-hidden border-t border-white/10 select-none">
        <div
          aria-hidden="true"
          className="pointer-events-none text-center font-mono text-[22vw] font-bold leading-[0.72] tracking-tighter text-white/[0.04]"
        >
          {t.brand.latin}
        </div>
      </div>

      {/* Bottom Technical Credits */}
      <div className="shell flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 font-mono text-[11px] text-white/45 sm:flex-row sm:items-center">
        <p>
          © {getCurrentYear(lang)} {t.brand.name} — {t.footer.rights}
        </p>
        <div className="flex items-center gap-6">
          <span>{t.footer.madeIn}</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 transition-colors hover:text-clay"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUpIcon className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
