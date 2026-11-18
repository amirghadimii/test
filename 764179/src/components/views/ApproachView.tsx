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
      <section className="shell pb-16 pt-32 md:pb-24 md:pt-44">
        <Reveal>
          <p className="eyebrow">{t.approach.label}</p>
          <h1 className="display mt-6 max-w-4xl">{t.approach.title}</h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead mt-8 max-w-2xl">{t.approach.intro}</p>
        </Reveal>
      </section>

      <div className="border-t border-ash">
        {t.approach.steps.map((step, index) => (
          <section key={step.n} className="border-b border-ash">
            <div className="shell grid gap-10 py-16 md:grid-cols-12 md:gap-8 md:py-24">
              <div className="md:col-span-5">
                <Reveal>
                  <div className="flex items-baseline gap-5">
                    <span className="text-sm tabular-nums text-smoke">{step.n}</span>
                    <h2 className="display-sm max-w-md">{step.title}</h2>
                  </div>
                  <p className="lead mt-7 max-w-lg text-base">{step.text}</p>
                  <ul className="mt-8 space-y-3 border-t border-ash pt-6">
                    {step.points.map((point, pointIndex) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-7">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink" />
                        <span className="text-graphite">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <Reveal delay={120} className="md:col-span-6 md:col-start-7">
                <div className="zoom-host relative aspect-[4/3] overflow-hidden bg-mist md:aspect-[3/2]">
                  <SmartImage
                    src={STEP_IMAGES[index % STEP_IMAGES.length]}
                    alt={step.title}
                    width={1600}
                    sizes="(min-width: 768px) 46vw, 100vw"
                    className="zoom-img"
                  />
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-ink py-20 text-paper md:py-28">
        <div className="shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="display-sm max-w-xl">{t.approach.ctaTitle}</h2>
            <p className="mt-4 max-w-lg text-sm leading-8 text-white/65">
              {t.approach.ctaText}
            </p>
          </div>
          <Link href="/contact" className="btn-light shrink-0">
            {t.approach.ctaButton}
            <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
          </Link>
        </div>
      </section>
    </>
  );
}
