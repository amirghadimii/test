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
    { href: "/", label: t.nav.home, index: "01" },
    { href: "/projects", label: t.nav.projects, index: "02" },
    { href: "/approach", label: t.nav.approach, index: "03" },
    { href: "/services", label: t.nav.services, index: "04" },
    { href: "/about", label: t.nav.about, index: "05" },
    { href: "/contact", label: t.nav.contact, index: "06" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const isHomeHero = pathname === "/" && !scrolled && !menuOpen;
  const isProjectDetailHero = pathname.startsWith("/projects/") && pathname !== "/projects" && !scrolled && !menuOpen;
  const overlay = isHomeHero || isProjectDetailHero;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          overlay
            ? "border-b border-white/10 bg-transparent text-paper"
            : "border-b border-ash bg-paper/95 text-ink backdrop-blur-md"
        }`}
      >
        <div className="shell flex h-18 items-center justify-between gap-6 md:h-20">
          {/* Architectural Brand Mark */}
          <Link href="/" className="group flex items-center gap-3.5" aria-label={t.brand.name}>
            <div
              className={`flex h-8 w-8 items-center justify-center border text-xs font-semibold tracking-wider transition-colors duration-300 ${
                overlay
                  ? "border-white/30 text-paper group-hover:border-clay group-hover:bg-clay"
                  : "border-ink text-ink group-hover:border-clay group-hover:bg-clay group-hover:text-paper"
              }`}
            >
              <span className="relative">
                {lang === "fa" ? "آ" : "A"}
                <span className="absolute -top-1 -end-1 h-1 w-1 rounded-full bg-clay" />
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.05em] md:text-base">
                {t.brand.name}
              </span>
              <span
                className={`text-[9px] uppercase tracking-[0.24em] transition-opacity ${
                  overlay ? "text-paper/60" : "text-smoke"
                }`}
              >
                {t.brand.latin} · SHOWROOM
              </span>
            </div>
          </Link>

          {/* Editorial Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex xl:gap-11">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`link-line link-clay text-xs tracking-[0.14em] uppercase transition-colors duration-300 ${
                    active
                      ? "is-active font-semibold text-clay"
                      : overlay
                        ? "text-paper/75 hover:text-paper"
                        : "text-graphite hover:text-ink"
                  }`}
                >
                  <span className="text-[9px] font-mono opacity-50 me-1.5">{link.index}</span>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Tools: Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Minimalist Architectural Language Switcher */}
            <div
              className={`flex items-center border text-[11px] font-mono tracking-wider transition-colors duration-300 ${
                overlay ? "border-white/20 bg-black/20" : "border-ash bg-concrete/60"
              }`}
              role="group"
              aria-label={t.common.langNote}
            >
              <button
                type="button"
                onClick={() => setLang("fa")}
                aria-pressed={lang === "fa"}
                className={`px-3 py-1.5 transition-colors duration-200 ${
                  lang === "fa"
                    ? "bg-clay text-paper font-semibold"
                    : overlay
                      ? "text-paper/65 hover:text-paper"
                      : "text-smoke hover:text-ink"
                }`}
              >
                فا
              </button>
              <span className={`opacity-20 ${overlay ? "text-white" : "text-ink"}`}>|</span>
              <button
                type="button"
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                className={`px-3 py-1.5 transition-colors duration-200 ${
                  lang === "en"
                    ? "bg-clay text-paper font-semibold"
                    : overlay
                      ? "text-paper/65 hover:text-paper"
                      : "text-smoke hover:text-ink"
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className={`flex h-9 w-9 items-center justify-center border transition-colors duration-300 lg:hidden ${
                overlay
                  ? "border-white/25 text-paper hover:border-white hover:bg-white/10"
                  : "border-ash text-ink hover:border-ink hover:bg-concrete"
              }`}
              aria-label={t.nav.menu}
            >
              <MenuIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Architectural Full-screen Mobile Menu */}
      {menuOpen ? (
        <div className="fixed inset-0 z-[60] flex flex-col justify-between overflow-y-auto bg-concrete-dark text-paper lg:hidden">
          <div className="shell flex h-18 items-center justify-between border-b border-white/10 md:h-20">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center border border-white/30 text-xs font-semibold">
                {lang === "fa" ? "آ" : "A"}
              </span>
              <span className="text-sm font-semibold tracking-wider">{t.brand.name}</span>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center border border-white/25 text-paper transition-colors hover:border-clay hover:text-clay"
              aria-label={t.nav.close}
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>

          <nav className="shell my-auto py-10">
            <ul className="flex flex-col divide-y divide-white/10">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between py-5 text-xl font-medium tracking-tight transition-colors duration-300 hover:text-clay sm:text-2xl"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-xs text-smoke-light opacity-60">
                          {link.index}
                        </span>
                        <span className={active ? "text-clay font-semibold" : ""}>
                          {link.label}
                        </span>
                      </div>
                      <ArrowIcon className="h-4 w-4 opacity-40 transition-transform group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-clay rtl:group-hover:-translate-x-1 rtl:-scale-x-100" />
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/admin"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-4 text-xs font-mono tracking-widest text-smoke-light uppercase hover:text-paper"
                >
                  <span>[ADMIN PANEL]</span>
                  <span className="text-[10px] text-clay">●</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="shell border-t border-white/10 py-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-smoke-light uppercase">
                  {t.nav.language}:
                </span>
                <div className="flex border border-white/20 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setLang("fa")}
                    className={`px-3 py-1.5 ${
                      lang === "fa" ? "bg-clay text-paper font-semibold" : "text-white/60"
                    }`}
                  >
                    فارسی
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang("en")}
                    className={`px-3 py-1.5 ${
                      lang === "en" ? "bg-clay text-paper font-semibold" : "text-white/60"
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              <div className="text-xs leading-6 text-white/50">
                <p>{t.contact.address}</p>
                <p dir="ltr" className="text-start">{isFa ? "۰۲۱ ۸۸۴۵ ۲۲۱۰" : "+98 21 8845 2210"}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
