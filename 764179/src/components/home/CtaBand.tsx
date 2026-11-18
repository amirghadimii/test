"use client";

import Link from "next/link";
import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Icons";

export default function CtaBand() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper md:py-36">
      <div className="grain absolute inset-0" />
      <div className="shell relative z-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow text-white/45">{t.home.cta.label}</p>
              <h2 className="display-md mt-6 max-w-2xl">{t.home.cta.title}</h2>
              <p className="mt-7 max-w-lg text-sm leading-8 text-white/65 md:text-base">
                {t.home.cta.text}
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col items-start justify-end gap-4 md:col-span-4 md:col-start-9">
            <Reveal delay={120}>
              <Link href="/contact" className="btn-light w-full justify-center">
                {t.home.cta.primary}
                <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
              </Link>
            </Reveal>
            <Reveal delay={200}>
              <Link
                href="/approach"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-[15px] text-sm text-white transition-colors duration-300 hover:bg-white hover:text-ink"
              >
                {t.home.cta.secondary}
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
