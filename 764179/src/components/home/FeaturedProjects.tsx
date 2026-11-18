"use client";

import Link from "next/link";
import { useLang } from "@/i18n/LanguageProvider";
import { formatProjectYear, formatIndex, formatNumber } from "@/lib/utils";
import { featuredProjects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Icons";

export default function FeaturedProjects() {
  const { t, lang } = useLang();

  const cards = featuredProjects.slice(0, 4).map((project, index) => ({
    project,
    index: String(index + 1).padStart(2, "0"),
  }));

  return (
    <section className="border-b border-ash bg-paper-warm py-24 md:py-36">
      <div className="shell">
        {/* Section Header */}
        <div className="flex flex-col gap-6 border-b border-ash pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow">{t.home.featured.label}</p>
              <div className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-smoke">
                <span>PORTFOLIO SELECTION</span>
                <span className="text-clay">/</span>
                <span>MONOGRAPHS 01—04</span>
              </div>
              <h2 className="display-md mt-4 text-ink">{t.home.featured.title}</h2>
              <p className="lead mt-4 max-w-xl text-graphite">{t.home.featured.text}</p>
            </Reveal>
          </div>

          <Reveal delay={100} className="shrink-0">
            <Link href="/projects" className="btn-arch-ghost">
              <span>{t.common.viewAll}</span>
              <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
            </Link>
          </Reveal>
        </div>

        {/* Mixed-size Editorial Architectural Grid (Zuxen / LAIN / Foster benchmark) */}
        <div className="mt-12 grid gap-8 md:grid-cols-12 md:gap-10">
          {cards.map(({ project, index }, i) => {
            const isFull = i === 0;
            const isWide = i === 3;
            const colSpan = isFull || isWide ? "md:col-span-12" : i === 1 ? "md:col-span-7" : "md:col-span-5";
            const aspect = isFull ? "panoramic" : isWide ? "wide" : i === 1 ? "wide" : "square";

            return (
              <Reveal
                key={project.slug}
                delay={(i % 2) * 100}
                className={colSpan}
              >
                <ProjectCard
                  href={`/projects/${project.slug}`}
                  index={formatIndex(index, lang)}
                  title={project.title[lang]}
                  category={t.projects.filters[project.category]}
                  year={formatProjectYear(project, lang)}
                  location={project.location[lang]}
                  area={project.area ? `${formatNumber(project.area, lang)} m²` : undefined}
                  image={project.cover}
                  alt={project.title[lang]}
                  aspect={aspect}
                  sizes={
                    isFull || isWide
                      ? "100vw"
                      : i === 1
                        ? "(min-width: 768px) 60vw, 100vw"
                        : "(min-width: 768px) 40vw, 100vw"
                  }
                />
              </Reveal>
            );
          })}
        </div>

        {/* Architectural Bottom Footnote */}
        <div className="mt-14 flex items-center justify-between border-t border-ash pt-6 font-mono text-[11px] tracking-wider uppercase text-smoke">
          <div className="flex items-center gap-2">
            <span className="text-clay">+</span>
            <span>ARK DIGITAL ARCHITECTURAL SHOWROOM</span>
          </div>
          <Link href="/projects" className="link-line link-clay text-ink">
            <span>{t.common.viewAll}</span>
            <ArrowIcon className="h-3 w-3 rtl:-scale-x-100" />
          </Link>
        </div>
      </div>
    </section>
  );
}
