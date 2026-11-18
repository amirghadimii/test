"use client";

import Link from "next/link";
import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Icons";

export default function ApproachTeaser() {
  const { t } = useLang();

  return (
    <section className="border-b border-ash bg-paper py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          {/* Left Column: Architectural Methodology Intro */}
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow">{t.home.approach.label}</p>
              <div className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-smoke">
                <span>PHASES // 01—04</span>
                <span className="text-clay">●</span>
                <span>METHODOLOGY</span>
              </div>
              <h2 className="display-md mt-5 text-ink">{t.home.approach.title}</h2>
              <p className="lead mt-6 max-w-md text-graphite">{t.home.approach.text}</p>
              <div className="mt-8">
                <Link href="/approach" className="btn-arch-ghost">
                  <span>{t.common.readMore}</span>
                  <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4 Architectural Phases with Hairline Dividing Grid */}
          <div className="md:col-span-7">
            <ol className="divide-y divide-ash border-y border-ash">
              {t.home.approach.steps.map((step, index) => (
                <Reveal key={step.n} delay={index * 80}>
                  <li className="group flex items-start gap-6 py-8 transition-colors duration-300 hover:bg-concrete/40 sm:gap-8">
                    <span className="font-mono text-xs font-semibold tracking-wider text-clay sm:text-sm">
                      [{step.n}]
                    </span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-xl font-medium tracking-tight text-ink transition-colors group-hover:text-clay md:text-2xl">
                          {step.title}
                        </h3>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-smoke opacity-60">
                          PHASE 0{index + 1}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-graphite">{step.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
