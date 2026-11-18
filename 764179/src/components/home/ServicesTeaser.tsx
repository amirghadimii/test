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
    <section className="overflow-hidden border-y border-ash bg-paper py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow">{t.home.services.label}</p>
              <h2 className="display-md mt-5 max-w-sm">{t.home.services.title}</h2>
              <p className="lead mt-6 max-w-sm text-base">{t.home.services.text}</p>
              <Link
                href="/services"
                className="link-line mt-8 inline-flex items-center gap-2 text-sm"
              >
                {t.common.viewAll}
                <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
              </Link>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <ul className="border-t border-ash">
              {items.map((item, index) => (
                <Reveal key={item} delay={index * 70}>
                  <li>
                    <Link
                      href="/services"
                      className="group flex items-center justify-between gap-6 border-b border-ash py-6 transition-[padding] duration-500 hover:ps-4"
                    >
                      <span className="flex items-center gap-6">
                        <span className="text-xs tabular-nums text-smoke">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xl font-medium transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                          {item}
                        </span>
                      </span>
                      <ArrowIcon className="h-5 w-5 shrink-0 text-smoke transition-colors duration-500 group-hover:text-ink rtl:-scale-x-100" />
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-ash pt-8">
        <div className="marquee-track">
          {marquee.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-8 whitespace-nowrap px-8 text-[7vw] font-medium leading-none text-ink/12 md:text-[5vw]"
            >
              {item}
              <span className="text-[0.4em] text-ink/30">✳</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
