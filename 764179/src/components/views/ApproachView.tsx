"use client";

import Link from "next/link";
import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import { ArrowIcon } from "@/components/ui/Icons";

const STEP_IMAGES = [
  "photo-1508615039623-a25605d2b022",
  "photo-1561214115-f2f134cc4912",
  "photo-1517457373958-b7bdd4587205",
  "photo-1517245386807-bb43f82c33c4",
];

export default function ApproachView() {
  const { t } = useLang();

  return (
    <>
      <section className="shell pb-14 pt-32 md:pb-20 md:pt-44">
        {/* Drafting Header */}
        <div className="flex items-center gap-3 border-b border-ash pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-smoke md:text-[11px]">
          <span className="inline-block h-1.5 w-1.5 bg-clay" />
          <span>ARK METHODOLOGY // 4-STEP PROCESS</span>
          <span className="opacity-40">/</span>
          <span>INTEGRATED PRACTICE</span>
        </div>

        <div className="mt-8">
          <Reveal>
            <p className="eyebrow">{t.approach.label}</p>
            <h1 className="display mt-5 max-w-4xl text-ink">{t.approach.title}</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="lead mt-6 max-w-2xl text-graphite">{t.approach.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* 4 Phases Editorial Sections */}
      <div className="border-t border-ash">
        {t.approach.steps.map((step, index) => (
          <section key={step.n} className="border-b border-ash bg-paper py-20 md:py-28 odd:bg-paper-warm">
            <div className="shell grid gap-12 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-5">
                <Reveal>
                  <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-clay">
                    <span>[PHASE // {step.n}]</span>
                    <span className="text-smoke">/</span>
                    <span className="text-smoke">STEP 0{index + 1} OF 04</span>
                  </div>

                  <h2 className="display-sm mt-4 text-ink">{step.title}</h2>
                  <p className="lead mt-6 max-w-lg text-graphite">{step.text}</p>

                  <div className="mt-8 border-t border-ash pt-6">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-smoke">
                      KEY DELIVERABLES:
                    </p>
                    <ul className="mt-4 space-y-3">
                      {step.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-xs leading-6 text-graphite sm:text-sm sm:leading-7">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-clay" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={120} className="md:col-span-7">
                <div className="border border-ash bg-concrete/20 p-2">
                  <div className="flex items-center justify-between border-b border-ash px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-smoke">
                    <span>STAGE RECORD // 0{index + 1}</span>
                    <span className="text-clay">+</span>
                  </div>
                  <div className="zoom-host relative aspect-[16/10] overflow-hidden bg-concrete">
                    <SmartImage
                      src={STEP_IMAGES[index % STEP_IMAGES.length]}
                      alt={step.title}
                      width={1600}
                      sizes="(min-width: 768px) 55vw, 100vw"
                      className="zoom-img contrast-[1.03]"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      {/* Action Banner */}
      <section className="border-b border-ash-dark bg-concrete-dark py-20 text-paper md:py-28">
        <div className="shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-clay">
              [START A DIALOGUE]
            </span>
            <h2 className="display-sm mt-3 max-w-xl text-paper">{t.approach.ctaTitle}</h2>
            <p className="mt-4 max-w-lg text-sm leading-8 text-white/70">
              {t.approach.ctaText}
            </p>
          </div>
          <Link href="/contact" className="btn-arch-light shrink-0">
            <span>{t.approach.ctaButton}</span>
            <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
          </Link>
        </div>
      </section>
    </>
  );
}
