"use client";

import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "@/components/ui/Reveal";

export default function Intro() {
  const { t } = useLang();

  return (
    <section className="shell py-24 md:py-36">
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow">{t.home.intro.label}</p>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <Reveal>
            <h2 className="display-md max-w-3xl">{t.home.intro.title}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead mt-8 max-w-2xl">{t.home.intro.text}</p>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-y-12 border-t border-ash pt-10 md:mt-28 md:grid-cols-4">
        {t.home.intro.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 90}>
            <p className="text-4xl font-semibold tracking-tight md:text-6xl">
              {stat.value}
            </p>
            <p className="mt-3 text-sm text-smoke">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
