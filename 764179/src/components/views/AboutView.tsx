"use client";

import Link from "next/link";
import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import { ArrowIcon } from "@/components/ui/Icons";

export default function AboutView() {
  const { t, isFa } = useLang();

  return (
    <>
      <section className="shell pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">{t.about.label}</p>
              <h1 className="display mt-6 max-w-3xl">{t.about.title}</h1>
              <p className="lead mt-8 max-w-2xl">{t.about.intro}</p>
            </Reveal>
          </div>
          <Reveal delay={120} className="md:col-span-4 md:col-start-9">
            <div className="zoom-host relative aspect-[3/4] overflow-hidden bg-mist">
              <SmartImage
                src="photo-1600607686527-6fb886090705"
                alt={t.about.title}
                width={1200}
                sizes="(min-width: 768px) 32vw, 100vw"
                className="zoom-img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-16 md:py-24">
        <div className="shell grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <Reveal>
              <p className="eyebrow">{t.about.valuesLabel}</p>
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {t.about.story.map((paragraph, index) => (
                <Reveal key={index} delay={index * 90}>
                  <p className="text-lg leading-[2.1] text-graphite">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <Reveal>
          <p className="eyebrow">{t.about.valuesLabel}</p>
        </Reveal>
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.values.map((value, index) => (
            <Reveal key={value.title} delay={index * 80}>
              <div className="border-t border-ash pt-6">
                <span className="text-xs tabular-nums text-smoke">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-medium">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-graphite">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-white/45">{t.about.numbersLabel}</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {t.about.numbers.map((item, index) => (
              <Reveal key={item.label} delay={index * 80}>
                <p className="text-4xl font-semibold md:text-6xl">{item.value}</p>
                <p className="mt-3 text-sm text-white/55">{item.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <Reveal>
          <p className="eyebrow">{t.about.teamLabel}</p>
        </Reveal>
        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {t.about.team.map((member, index) => (
            <Reveal key={member.name} delay={index * 60}>
              <div className="group flex items-center gap-5 border-t border-ash py-6">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-mist text-sm font-semibold transition-colors duration-500 group-hover:bg-ink group-hover:text-paper">
                  {isFa ? member.name.charAt(0) : member.name.charAt(0)}
                </span>
                <div>
                  <h3 className="text-base font-medium">{member.name}</h3>
                  <p className="mt-1 text-sm text-smoke">{member.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="display-sm max-w-xl">{t.about.ctaTitle}</h2>
            <p className="mt-4 max-w-lg text-sm leading-8 text-graphite">
              {t.about.ctaText}
            </p>
          </div>
          <Link href="/contact" className="btn-solid shrink-0">
            {t.about.ctaButton}
            <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
          </Link>
        </div>
      </section>
    </>
  );
}
