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
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="shell pt-20 md:pt-28">
        <Reveal className="grid gap-10 border-b border-white/12 pb-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="eyebrow text-white/45">{t.footer.newsTitle}</p>
            <h2 className="display-sm mt-5 max-w-md">{t.footer.tagline}</h2>
          </div>

          <div className="md:col-span-4 md:col-start-7">
            {subscribed ? (
              <p className="mt-8 border-b border-white/25 pb-4 text-sm text-white/70">
                {t.footer.newsDone}
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mt-8">
                <label className="sr-only" htmlFor="footer-email">
                  {t.footer.newsPlaceholder}
                </label>
                <div className="flex items-center gap-4 border-b border-white/25 pb-4 focus-within:border-white">
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={t.footer.newsPlaceholder}
                    className="w-full bg-transparent text-sm outline-none placeholder:text-white/40"
                    dir="ltr"
                  />
                  <button
                    type="submit"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 transition-colors duration-300 hover:bg-white hover:text-ink"
                    aria-label={t.footer.newsButton}
                  >
                    <ArrowIcon className="rtl:-scale-x-100" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>

        <div className="grid gap-10 py-14 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-white text-[15px] font-bold text-ink">
                {lang === "fa" ? "ا" : "A"}
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-lg font-semibold">{t.brand.name}</span>
                <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/45">
                  {t.brand.latin}
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/55">
              {t.brand.tagline}
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <p className="eyebrow text-white/45">{t.footer.navTitle}</p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {nav.map((item) => (
                <li key={item.href + item.label}>
                  <Link href={item.href} className="link-line">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-white/45">{t.footer.servicesTitle}</p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="link-line">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <p className="eyebrow text-white/45">{t.footer.contactTitle}</p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="leading-7">{t.contact.address}</li>
              <li dir="ltr" className="text-start">
                {isFa ? "۰۲۱ ۸۸۴۵ ۲۲۱۰" : "+98 21 8845 2210"}
              </li>
              <li>
                <a href="mailto:studio@ark-group.ir" className="link-line" dir="ltr">
                  studio@ark-group.ir
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-white/12">
        <div
          aria-hidden="true"
          className="pointer-events-none select-none whitespace-nowrap text-center text-[24vw] font-bold leading-[0.78] tracking-[-0.04em] text-white/[0.07]"
        >
          {t.brand.latin}
        </div>
      </div>

      <div className="shell flex flex-col items-start justify-between gap-4 border-t border-white/12 py-7 text-xs text-white/45 sm:flex-row sm:items-center">
        <p>
          © {getCurrentYear(lang)} {t.brand.name} — {t.footer.rights}
        </p>
        <div className="flex items-center gap-6">
          <span>{t.footer.madeIn}</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            {t.footer.backToTop}
            <ArrowUpIcon className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
