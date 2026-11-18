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
      <section className="shell pb-16 pt-32 md:pb-24 md:pt-44">
        <Reveal>
          <p className="eyebrow">{t.services.label}</p>
          <h1 className="display mt-6 max-w-4xl">{t.services.title}</h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead mt-8 max-w-2xl">{t.services.intro}</p>
        </Reveal>
      </section>

      <section className="shell pb-24 md:pb-36">
        <div className="border-t border-ash">
          {t.services.items.map((service, index) => {
            const expanded = open === index;
            return (
              <div key={service.n} className="border-b border-ash">
                <Reveal delay={index * 60}>
                  <button
                    type="button"
                    onClick={() => setOpen(expanded ? null : index)}
                    aria-expanded={expanded}
                    className="group flex w-full items-start gap-6 py-8 text-start md:gap-10 md:py-10"
                  >
                    <span className="pt-2 text-xs tabular-nums text-smoke">{service.n}</span>
                    <span className="flex-1">
                      <span className="display-sm block transition-opacity duration-500 group-hover:opacity-60">
                        {service.title}
                      </span>
                      <span
                        className={`mt-4 block max-w-2xl text-sm leading-8 text-graphite transition-all duration-500 ${
                          expanded
                            ? "max-h-40 opacity-100"
                            : "max-h-0 overflow-hidden opacity-0"
                        }`}
                      >
                        {service.text}
                      </span>
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ash transition-transform duration-500 ${
                        expanded ? "rotate-45 bg-ink text-paper" : "group-hover:border-ink"
                      }`}
                    >
                      <PlusIcon />
                    </span>
                  </button>
                </Reveal>

                {expanded ? (
                  <ul className="mb-10 grid gap-3 ps-0 sm:grid-cols-3 sm:gap-6 md:ps-16">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 border-t border-ash pt-4 text-[13px] leading-7 text-graphite"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="display-sm max-w-xl">{t.services.ctaTitle}</h2>
            <p className="mt-4 max-w-lg text-sm leading-8 text-graphite">
              {t.services.ctaText}
            </p>
          </div>
          <Link href="/contact" className="btn-solid shrink-0">
            {t.services.ctaButton}
            <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
          </Link>
        </div>
      </section>
    </>
  );
}
