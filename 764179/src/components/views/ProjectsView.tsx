"use client";

import { useLang } from "@/i18n/LanguageProvider";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import Reveal from "@/components/ui/Reveal";

export default function ProjectsView() {
  const { t } = useLang();

  return (
    <>
      <section className="shell pb-12 pt-32 md:pb-16 md:pt-44">
        {/* Drafting Coordinate Header */}
        <div className="flex items-center gap-3 border-b border-ash pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-smoke md:text-[11px]">
          <span className="inline-block h-1.5 w-1.5 bg-clay" />
          <span>PROJECT CATALOG // FULL INDEX</span>
          <span className="opacity-40">/</span>
          <span>ARK SHOWROOM 2012–2026</span>
        </div>

        <div className="mt-8">
          <Reveal>
            <p className="eyebrow">{t.projects.label}</p>
            <h1 className="display mt-5 max-w-4xl text-ink">{t.projects.title}</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="lead mt-6 max-w-2xl text-graphite">{t.projects.intro}</p>
          </Reveal>
        </div>
      </section>

      <ProjectsGrid />
    </>
  );
}
