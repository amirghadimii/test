"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { ArrowIcon, CloseIcon, MenuIcon } from "@/components/ui/Icons";

export default function Header() {
  const { t, lang, setLang, isFa } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/projects", label: t.nav.projects },
    { href: "/approach", label: t.nav.approach },
    { href: "/services", label: t.nav.services },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const overlay = pathname === "/" && !scrolled && !menuOpen;
  const activePill = overlay ? "bg-white text-ink" : "bg-ink text-paper";
  const mark = overlay ? "bg-white text-ink" : "bg-ink text-white";

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          overlay
            ? "bg-transparent text-paper"
            : "border-b border-ash bg-paper/90 text-ink backdrop-blur-md"
        }`}
      >
        <div className="shell flex h-[68px] items-center justify-between gap-6 md:h-[76px]">
          <Link href="/" className="group flex items-center gap-3" aria-label={t.brand.name}>
            <span
              className={`flex h-9 w-9 items-center justify-center text-[15px] font-bold transition-transform duration-500 group-hover:rotate-90 md:h-10 md:w-10 ${mark}`}
            >
              {lang === "fa" ? "ا" : "A"}
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-base font-semibold tracking-[0.02em] md:text-lg">
                {t.brand.name}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.28em] opacity-55">
                {t.brand.latin}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`link-line text-[13px] transition-opacity duration-300 hover:opacity-100 ${
                  isActive(link.href) ? "is-active opacity-100" : "opacity-70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div
              className="flex items-center overflow-hidden rounded-full border border-current/30 text-[11px] font-medium"
              role="group"
              aria-label={t.common.langNote}
            >
              <button
                type="button"
                onClick={() => setLang("fa")}
                aria-pressed={lang === "fa"}
                className={`px-3 py-1.5 transition-colors duration-300 ${
                  lang === "fa" ? activePill : "opacity-60 hover:opacity-100"
                }`}
              >
                فا
              </button>
              <span className="opacity-25">|</span>
              <button
                type="button"
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                className={`px-3 py-1.5 transition-colors duration-300 ${
                  lang === "en" ? activePill : "opacity-60 hover:opacity-100"
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-current/30 transition-colors duration-300 hover:bg-current/10 lg:hidden"
              aria-label={t.nav.menu}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-ink text-paper lg:hidden">
          <div className="shell flex h-[68px] items-center justify-between md:h-[76px]">
            <span className="text-base font-semibold">{t.brand.name}</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25"
              aria-label={t.nav.close}
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="shell mt-4 flex flex-col">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="menu-item flex items-center justify-between border-b border-white/12 py-5 text-[8vw] font-medium leading-none"
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <span>{link.label}</span>
                <ArrowIcon className="h-5 w-5 opacity-40" />
              </Link>
            ))}
          </nav>

          <div className="shell mt-10 flex flex-col gap-6 pb-12">
            <div className="flex items-center gap-3">
              <span className="eyebrow text-white/40">{t.nav.language}</span>
              <div className="flex overflow-hidden rounded-full border border-white/25 text-[12px]">
                <button
                  type="button"
                  onClick={() => setLang("fa")}
                  className={`px-4 py-2 ${
                    lang === "fa" ? "bg-white text-ink" : "text-white/60"
                  }`}
                >
                  فارسی
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-4 py-2 ${
                    lang === "en" ? "bg-white text-ink" : "text-white/60"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <div className="text-sm leading-7 text-white/60">
              <p>{t.contact.address}</p>
              <p dir="ltr">{isFa ? "۰۲۱ ۸۸۴۵ ۲۲۱۰" : "+98 21 8845 2210"}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
