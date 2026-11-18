"use client";

import Link from "next/link";
import { useLang } from "@/i18n/LanguageProvider";
import { featuredProjects } from "@/data/projects";
import SmartImage from "@/components/ui/SmartImage";
import { ArrowIcon } from "@/components/ui/Icons";

const HERO_IMAGE = "photo-1600607687939-ce8a6c25118c";

export default function Hero() {
  const { t, lang } = useLang();
  const heroProject = featuredProjects[0];

  return (
    <section className="relative flex h-[100svh] min-h-[620px] w-full items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <SmartImage
          src={HERO_IMAGE}
          alt="ARK — پروژه معماری در شب"
          width={2400}
          sizes="100vw"
          priority
          className="hero-zoom"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/90" />
      <div className="grain absolute inset-0" />

      <div className="shell relative z-10 w-full pb-28 pt-32 md:pb-36">
        <p
          className="hero-line text-[11px] uppercase tracking-[0.34em] text-white/70 md:text-xs"
          style={{ animationDelay: "120ms" }}
        >
          {t.home.hero.eyebrow} — {t.brand.latin}
        </p>

        <h1 className="display mt-6 max-w-5xl text-paper">
          <span className="hero-line" style={{ animationDelay: "240ms" }}>
            {t.home.hero.line1}
          </span>
          <span
            className="hero-line text-white/70"
            style={{ animationDelay: "400ms" }}
          >
            {t.home.hero.line2}
          </span>
        </h1>

        <div className="mt-9 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p
            className="fade-up max-w-xl text-sm leading-8 text-white/75 md:text-base"
            style={{ animationDelay: "640ms" }}
          >
            {t.home.hero.text}
          </p>

          <div
            className="fade-up flex flex-wrap items-center gap-3"
            style={{ animationDelay: "780ms" }}
          >
            <Link href="/projects" className="btn-light">
              {t.home.hero.cta}
              <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-[15px] text-sm text-white transition-colors duration-300 hover:bg-white hover:text-ink"
            >
              {t.home.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/15">
        <div className="shell flex items-center justify-between py-4 text-[11px] text-white/65 md:text-xs">
          <div className="flex items-center gap-3">
            <span className="text-white/40">{t.home.hero.featureLabel}</span>
            <span className="text-white">{heroProject.title[lang]}</span>
            <span className="hidden sm:inline text-white/40">
              {heroProject.location[lang]} ·{" "}
              {lang === "fa" ? heroProject.jalali : heroProject.year}
            </span>
          </div>
          <span className="flex items-center gap-2">
            {t.home.hero.scrollHint}
            <span className="inline-block h-px w-8 bg-white/50" />
          </span>
        </div>
      </div>
    </section>
  );
}
