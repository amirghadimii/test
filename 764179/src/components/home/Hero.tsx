"use client";

import Link from "next/link";
import { useLang } from "@/i18n/LanguageProvider";
import { formatProjectYear } from "@/lib/utils";
import { featuredProjects } from "@/data/projects";
import SmartImage from "@/components/ui/SmartImage";
import { ArrowIcon } from "@/components/ui/Icons";

const HERO_IMAGE = "photo-1600607687939-ce8a6c25118c";

export default function Hero() {
  const { t, lang, isFa } = useLang();
  const heroProject = featuredProjects[0];

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full flex-col justify-between overflow-hidden bg-concrete-dark text-paper">
      {/* Background Architectural Canvas */}
      <div className="absolute inset-0">
        <SmartImage
          src={HERO_IMAGE}
          alt="ARK — Architectural Showroom"
          width={2560}
          sizes="100vw"
          priority
          className="hero-zoom brightness-[0.72] contrast-[1.08]"
        />
        {/* Restrained architectural vignette - NO colorful gradients or blur */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/50" />
      </div>

      {/* Top Drafting Bar (below header) */}
      <div className="shell relative z-10 pt-28 md:pt-32">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-3 font-mono text-[10px] tracking-[0.2em] uppercase text-white/60 md:text-[11px]">
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 bg-clay" />
            <span>ARK ARCHITECTURAL MONOGRAPH</span>
            <span className="opacity-40">/</span>
            <span>TEHRAN — 35°41′N 51°25′E</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span>INDEX // 01 — 07</span>
            <span className="opacity-40">|</span>
            <span>EST. 2012</span>
          </div>
        </div>
      </div>

      {/* Main Monumental Editorial Center/Bottom */}
      <div className="shell relative z-10 pb-16 pt-8 md:pb-20">
        <div className="max-w-5xl">
          <p
            className="hero-line font-mono text-xs tracking-[0.25em] uppercase text-clay md:text-sm"
            style={{ animationDelay: "150ms" }}
          >
            {t.home.hero.eyebrow}
          </p>

          <h1 className="display mt-6 max-w-4xl font-normal text-paper">
            <span className="hero-line" style={{ animationDelay: "280ms" }}>
              {t.home.hero.line1}
            </span>
            <span
              className="hero-line text-paper/85"
              style={{ animationDelay: "420ms" }}
            >
              {t.home.hero.line2}
            </span>
          </h1>

          <div className="mt-8 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">
            <p
              className="fade-up max-w-xl text-sm leading-8 text-paper/80 md:text-base md:leading-8"
              style={{ animationDelay: "620ms" }}
            >
              {t.home.hero.text}
            </p>

            <div
              className="fade-up flex flex-wrap items-center gap-4 shrink-0"
              style={{ animationDelay: "760ms" }}
            >
              <Link href="/projects" className="btn-arch-light">
                <span>{t.home.hero.cta}</span>
                <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
              </Link>
              <Link href="/contact" className="btn-arch-dark-ghost">
                <span>{t.home.hero.ctaSecondary}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Metadata Schedule Bar (Foster + Partners benchmark) */}
      <div className="relative z-10 border-t border-white/15 bg-black/40 backdrop-blur-sm">
        <div className="shell flex flex-wrap items-center justify-between gap-4 py-3.5 text-xs text-white/70">
          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] md:gap-7">
            <span className="text-clay font-bold">[01]</span>
            <div className="flex items-center gap-2">
              <span className="text-white/40">{t.home.hero.featureLabel}:</span>
              <span className="font-sans font-medium text-paper">
                {heroProject.title[lang]}
              </span>
            </div>
            <span className="hidden md:inline text-white/30">/</span>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-white/40">{t.common.location}:</span>
              <span className="text-paper/90">{heroProject.location[lang]}</span>
            </div>
            <span className="hidden md:inline text-white/30">/</span>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-white/40">{t.common.year}:</span>
              <span className="text-paper/90">{formatProjectYear(heroProject, lang)}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] text-white/60">
            <span>{t.home.hero.scrollHint}</span>
            <span className="h-px w-10 bg-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
