"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon, PlusIcon } from "@/components/ui/Icons";

export default function ServicesView() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <section className="shell pb-14 pt-32 md:pb-20 md:pt-44">
        {/* Drafting Header */}
        <div className="flex items-center gap-3 border-b border-ash pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-smoke md:text-[11px]">
          <span className="inline-block h-1.5 w-1.5 bg-clay" />
          <span>SCOPE OF SERVICES // PRACTICE SCHEDULE</span>
          <span className="opacity-40">/</span>
          <span>MULTIDISCIPLINARY</span>
        </div>

        <div className="mt-8">
          <Reveal>
            <p className="eyebrow">{t.services.label}</p>
            <h1 className="display mt-5 max-w-4xl text-ink">{t.services.title}</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="lead mt-6 max-w-2xl text-graphite">{t.services.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Architectural Services Accordion / Catalog Schedule */}
      <section className="shell pb-24 md:pb-36">
        <div className="divide-y divide-ash border-y border-ash">
          {t.services.items.map((service, index) => {
            const expanded = open === index;
            return (
              <div
                key={service.n}
                className={`transition-colors duration-300 ${expanded ? "bg-concrete/30" : "hover:bg-concrete/20"}`}
              >
                <Reveal delay={index * 50}>
                  <button
                    type="button"
                    onClick={() => setOpen(expanded ? null : index)}
                    aria-expanded={expanded}
                    className="flex w-full items-start justify-between gap-6 p-6 text-start sm:p-8 md:items-center"
                  >
                    <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-baseline md:gap-8">
                      <span className="font-mono text-xs font-semibold tracking-wider text-clay sm:text-sm">
                        [{service.n}]
                      </span>
                      <div>
                        <h2 className="text-xl font-medium tracking-tight text-ink sm:text-3xl">
                          {service.title}
                        </h2>
                        <p
                          className={`mt-4 max-w-2xl text-sm leading-8 text-graphite transition-all duration-300 ${
                            expanded
                              ? "max-h-48 opacity-100"
                              : "max-h-0 overflow-hidden opacity-0"
                          }`}
                        >
                          {service.text}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-300 ${
                        expanded
                          ? "rotate-45 border-clay bg-clay text-paper"
                          : "border-ash text-smoke hover:border-ink hover:text-ink"
                      }`}
                    >
                      <PlusIcon className="h-3.5 w-3.5" />
                    </div>
                  </button>
                </Reveal>

                {expanded ? (
                  <div className="px-6 pb-8 pt-2 sm:px-8 sm:ps-20">
                    <div className="border-t border-ash pt-6">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-smoke">
                        CORE DELIVERABLES & EXPERTISE:
                      </p>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 border border-ash bg-paper p-4 text-xs leading-6 text-graphite sm:text-sm"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-clay" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      {/* Action Banner */}
      <section className="border-t border-ash bg-concrete py-20 md:py-28">
        <div className="shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-clay">
              [PROJECT SCOPE INQUIRY]
            </span>
            <h2 className="display-sm mt-3 max-w-xl text-ink">{t.services.ctaTitle}</h2>
            <p className="mt-4 max-w-lg text-sm leading-8 text-graphite">
              {t.services.ctaText}
            </p>
          </div>
          <Link href="/contact" className="btn-arch shrink-0">
            <span>{t.services.ctaButton}</span>
            <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
          </Link>
        </div>
      </section>
    </>
  );
}
