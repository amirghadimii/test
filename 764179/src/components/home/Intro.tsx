"use client";

import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "@/components/ui/Reveal";

export default function Intro() {
  const { t } = useLang();

  return (
    <section className="border-b border-ash bg-paper py-24 md:py-36">
      <div className="shell">
        {/* Editorial Two-Column Statement */}
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow">{t.home.intro.label}</p>
              <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-smoke">
                <span>SECTION // 01</span>
                <span className="text-clay">●</span>
                <span>DISCIPLINE</span>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal>
              <h2 className="display-md text-ink">{t.home.intro.title}</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="lead mt-8 max-w-2xl text-graphite">{t.home.intro.text}</p>
            </Reveal>
          </div>
        </div>

        {/* Architectural Metrics Grid with Hairlines & Drafting Accents */}
        <div className="mt-20 border-t border-ash md:mt-28">
          <div className="grid grid-cols-2 divide-y divide-ash border-b border-ash sm:grid-cols-4 sm:divide-x sm:divide-y-0 sm:divide-ash rtl:sm:divide-x-reverse">
            {t.home.intro.stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 80}
                className="relative p-6 first:ps-0 last:pe-0 sm:p-8"
              >
                <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-smoke uppercase">
                  <span>0{index + 1}</span>
                  <span className="text-clay">+</span>
                </div>
                <p className="mt-5 text-4xl font-medium tracking-tight text-ink md:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs uppercase tracking-wider text-smoke sm:text-sm">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
