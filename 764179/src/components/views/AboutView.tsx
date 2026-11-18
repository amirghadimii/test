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
      <section className="shell pb-14 pt-32 md:pb-20 md:pt-44">
        {/* Drafting Header */}
        <div className="flex items-center gap-3 border-b border-ash pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-smoke md:text-[11px]">
          <span className="inline-block h-1.5 w-1.5 bg-clay" />
          <span>STUDIO PROFILE // MONOGRAPH</span>
          <span className="opacity-40">/</span>
          <span>ESTABLISHED 2012 / ۱۳۹۱</span>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">{t.about.label}</p>
              <h1 className="display mt-6 max-w-3xl text-ink">{t.about.title}</h1>
              <p className="lead mt-8 max-w-2xl text-graphite">{t.about.intro}</p>
            </Reveal>
          </div>

          <Reveal delay={120} className="md:col-span-5">
            <div className="border border-ash bg-concrete/20 p-2">
              <div className="flex items-center justify-between border-b border-ash px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-smoke">
                <span>STUDIO AT WORK // ARCHIVE</span>
                <span className="text-clay">+</span>
              </div>
              <div className="zoom-host relative aspect-[4/5] overflow-hidden bg-concrete">
                <SmartImage
                  src="photo-1600607686527-6fb886090705"
                  alt={t.about.title}
                  width={1400}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="zoom-img contrast-[1.03]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Studio Philosophy / Narrative */}
      <section className="border-y border-ash bg-paper-warm py-20 md:py-28">
        <div className="shell grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow">{t.about.valuesLabel}</p>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-smoke">
                <span>PHILOSOPHY // ORIGINS</span>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {t.about.story.map((paragraph, index) => (
                <Reveal key={index} delay={index * 80}>
                  <p className="text-base leading-[2.1] text-graphite sm:text-lg">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Architectural Values */}
      <section className="shell py-20 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between border-b border-ash pb-6">
            <div>
              <p className="eyebrow">{t.about.valuesLabel}</p>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-smoke">
                <span>FOUNDATIONAL PRINCIPLES</span>
              </div>
            </div>
            <span className="font-mono text-xs text-smoke">[04 PRINCIPLES]</span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {t.about.values.map((value, index) => (
            <Reveal key={value.title} delay={index * 70}>
              <div className="flex h-full flex-col justify-between border border-ash bg-concrete/20 p-6 transition-colors hover:border-ink">
                <div>
                  <span className="font-mono text-xs font-semibold text-clay">
                    [0{index + 1}]
                  </span>
                  <h3 className="mt-4 text-xl font-medium text-ink">{value.title}</h3>
                  <p className="mt-3 text-xs leading-7 text-graphite sm:text-sm">{value.text}</p>
                </div>
                <div className="mt-8 border-t border-ash pt-3 font-mono text-[10px] uppercase text-smoke">
                  ARK · STD // {index + 1}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Metrics Band in Dark Concrete Plane */}
      <section className="border-y border-ash-dark bg-concrete-dark py-20 text-paper md:py-28">
        <div className="shell">
          <Reveal>
            <div className="flex items-center gap-3 border-b border-white/15 pb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
              <span className="inline-block h-1.5 w-1.5 bg-clay" />
              <span>RECORD // STATISTICAL SUMMARY</span>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 divide-y divide-white/10 border-b border-white/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0 sm:divide-white/10 rtl:sm:divide-x-reverse">
            {t.about.numbers.map((item, index) => (
              <Reveal key={item.label} delay={index * 70} className="p-6 first:ps-0 last:pe-0 sm:p-8">
                <span className="font-mono text-[10px] text-clay">0{index + 1}</span>
                <p className="mt-4 text-4xl font-medium tracking-tight text-paper md:text-6xl">
                  {item.value}
                </p>
                <p className="mt-3 text-xs uppercase tracking-wider text-white/60">
                  {item.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Multidisciplinary Team Roster */}
      <section className="shell py-20 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between border-b border-ash pb-6">
            <div>
              <p className="eyebrow">{t.about.teamLabel}</p>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-smoke">
                <span>LEADERSHIP & COLLABORATORS</span>
              </div>
            </div>
            <span className="font-mono text-xs text-smoke">[{t.about.team.length} MEMBERS]</span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {t.about.team.map((member, index) => (
            <Reveal key={member.name} delay={index * 60}>
              <div className="group flex items-center gap-5 border border-ash bg-concrete/20 p-5 transition-all duration-300 hover:border-ink hover:bg-concrete/40">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-ash bg-paper font-mono text-xs font-semibold text-ink transition-colors duration-300 group-hover:border-clay group-hover:bg-clay group-hover:text-paper">
                  {member.name.charAt(0)}
                </span>
                <div>
                  <h3 className="text-base font-medium text-ink transition-colors group-hover:text-clay">{member.name}</h3>
                  <p className="mt-1 font-mono text-xs text-smoke">{member.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Action Banner */}
      <section className="border-t border-ash bg-concrete py-20 md:py-28">
        <div className="shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-clay">
              [JOIN OUR CLIENT ROSTER]
            </span>
            <h2 className="display-sm mt-3 max-w-xl text-ink">{t.about.ctaTitle}</h2>
            <p className="mt-4 max-w-lg text-sm leading-8 text-graphite">
              {t.about.ctaText}
            </p>
          </div>
          <Link href="/contact" className="btn-arch shrink-0">
            <span>{t.about.ctaButton}</span>
            <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
          </Link>
        </div>
      </section>
    </>
  );
}
