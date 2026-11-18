"use client";

import Link from "next/link";
import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Icons";

export default function ServicesTeaser() {
  const { t } = useLang();
  const items = t.home.services.items;
  const marquee = [...items, ...items];

  return (
    <section className="overflow-hidden border-b border-ash bg-paper-warm py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          {/* Left Column: Scope & Overview */}
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow">{t.home.services.label}</p>
              <div className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-smoke">
                <span>PRACTICE SPECTRUM</span>
                <span className="text-clay">/</span>
                <span>DISCIPLINES</span>
              </div>
              <h2 className="display-md mt-5 text-ink">{t.home.services.title}</h2>
              <p className="lead mt-6 max-w-sm text-graphite">{t.home.services.text}</p>
              <div className="mt-8">
                <Link href="/services" className="btn-arch-ghost">
                  <span>{t.common.viewAll}</span>
                  <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Architectural Discipline Schedule */}
          <div className="md:col-span-7">
            <ul className="divide-y divide-ash border-y border-ash">
              {items.map((item, index) => (
                <Reveal key={item} delay={index * 60}>
                  <li>
                    <Link
                      href="/services"
                      className="group flex items-center justify-between gap-6 py-6 transition-all duration-300 hover:bg-concrete/40 hover:ps-4"
                    >
                      <div className="flex items-center gap-5 sm:gap-7">
                        <span className="font-mono text-xs text-smoke transition-colors group-hover:text-clay sm:text-sm">
                          0{index + 1}
                        </span>
                        <span className="text-lg font-medium text-ink transition-colors group-hover:text-clay sm:text-2xl">
                          {item}
                        </span>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center border border-ash text-smoke transition-all duration-300 group-hover:border-clay group-hover:bg-clay group-hover:text-paper">
                        <ArrowIcon className="h-3 w-3 rtl:-scale-x-100" />
                      </div>
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Architectural Typography Marquee Ribbon */}
      <div className="mt-20 border-y border-ash bg-concrete/50 py-4">
        <div className="marquee-track">
          {marquee.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-8 whitespace-nowrap px-8 font-mono text-xs uppercase tracking-[0.25em] text-smoke md:text-sm"
            >
              <span>{item}</span>
              <span className="text-clay">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
