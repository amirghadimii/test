"use client";

import Link from "next/link";
import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Icons";

export default function ApproachTeaser() {
  const { t } = useLang();

  return (
    <section className="shell py-24 md:py-36">
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow">{t.home.approach.label}</p>
            <h2 className="display-md mt-5 max-w-xl">{t.home.approach.title}</h2>
            <p className="lead mt-6 max-w-md text-base">{t.home.approach.text}</p>
            <Link
              href="/approach"
              className="link-line mt-8 inline-flex items-center gap-2 text-sm"
            >
              {t.common.readMore}
              <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <ol className="border-t border-ash">
            {t.home.approach.steps.map((step, index) => (
              <Reveal key={step.n} delay={index * 90}>
                <li className="group flex items-start gap-6 border-b border-ash py-7 transition-colors duration-500 hover:bg-mist">
                  <span className="pt-1 text-xs tabular-nums text-smoke">{step.n}</span>
                  <div>
                    <h3 className="text-xl font-medium md:text-2xl">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-graphite">{step.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
