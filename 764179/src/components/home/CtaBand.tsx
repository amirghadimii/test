"use client";

import Link from "next/link";
import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Icons";

export default function CtaBand() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-concrete-dark py-24 text-paper md:py-36">
      <div className="shell relative z-10">
        {/* Drafting Top Coordinate */}
        <div className="flex items-center gap-3 border-b border-white/15 pb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 md:text-[11px]">
          <span className="inline-block h-1.5 w-1.5 bg-clay" />
          <span>PROJECT COMMISSIONING // INQUIRIES</span>
          <span className="opacity-40">/</span>
          <span>ARK STUDIO TEHRAN</span>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8">
            <Reveal>
              <p className="eyebrow text-white/60">{t.home.cta.label}</p>
              <h2 className="display-md mt-5 max-w-2xl text-paper">{t.home.cta.title}</h2>
              <p className="mt-6 max-w-xl text-sm leading-8 text-white/70 md:text-base md:leading-8">
                {t.home.cta.text}
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col items-start justify-end gap-4 md:col-span-4">
            <Reveal delay={120} className="w-full">
              <Link href="/contact" className="btn-arch-light w-full">
                <span>{t.home.cta.primary}</span>
                <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
              </Link>
            </Reveal>
            <Reveal delay={180} className="w-full">
              <Link href="/approach" className="btn-arch-dark-ghost w-full">
                <span>{t.home.cta.secondary}</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
