"use client";

import { useMemo, useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { formatProjectYear, formatNumber, formatIndex } from "@/lib/utils";
import { CATEGORY_ORDER, projects, type CategoryKey } from "@/data/projects";
import { useUserProjects } from "@/hooks/useUserProjects";
import ProjectCard from "@/components/projects/ProjectCard";
import Reveal from "@/components/ui/Reveal";

type Filter = "all" | CategoryKey;

type CardItem = {
  key: string;
  href: string;
  title: string;
  category: CategoryKey;
  year: string;
  location: string;
  area?: string;
  image: string;
};

export default function ProjectsGrid() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const { items: userProjects } = useUserProjects();

  const all = useMemo<CardItem[]>(() => {
    const added: CardItem[] = userProjects.map((project) => ({
      key: project.id,
      href: `/projects/${project.slug}`,
      title: project.title,
      category: project.category,
      year: formatProjectYear(project, lang),
      location: project.location || "—",
      area: project.area ? `${formatNumber(project.area, lang)} m²` : undefined,
      image: project.image,
    }));

    const seeded: CardItem[] = projects.map((project) => ({
      key: project.slug,
      href: `/projects/${project.slug}`,
      title: project.title[lang],
      category: project.category,
      year: formatProjectYear(project, lang),
      location: project.location[lang],
      area: project.area ? `${formatNumber(project.area, lang)} m²` : undefined,
      image: project.cover,
    }));

    return [...added, ...seeded];
  }, [userProjects, lang]);

  const filtered = useMemo(
    () => (filter === "all" ? all : all.filter((item) => item.category === filter)),
    [all, filter],
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: all.length };
    CATEGORY_ORDER.forEach((category) => {
      map[category] = all.filter((item) => item.category === category).length;
    });
    return map;
  }, [all]);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t.projects.filters.all },
    ...CATEGORY_ORDER.map((category) => ({
      key: category as Filter,
      label: t.projects.filters[category],
    })),
  ];

  return (
    <div className="shell pb-24 md:pb-36">
      {/* Architectural Filter Bar (Foster + Partners index pattern) */}
      <div className="sticky top-18 z-30 -mx-5 border-y border-ash bg-paper/95 px-5 py-3 backdrop-blur-md md:top-20 md:-mx-10 md:px-10">
        <div className="no-scrollbar flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {filters.map((item, index) => {
              const active = filter === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setFilter(item.key)}
                  aria-pressed={active}
                  className={`flex shrink-0 items-center gap-2 border px-3.5 py-1.5 font-mono text-xs tracking-wider transition-all duration-200 ${
                    active
                      ? "border-clay bg-clay text-paper font-semibold"
                      : "border-transparent text-smoke hover:border-ash hover:bg-concrete/40 hover:text-ink"
                  }`}
                >
                  <span className="font-sans">{item.label}</span>
                  <span className={`text-[10px] ${active ? "text-paper/85" : "text-smoke"}`}>
                    [{formatNumber(counts[item.key] ?? 0, lang)}]
                  </span>
                </button>
              );
            })}
          </div>

          <span className="hidden shrink-0 font-mono text-[11px] uppercase tracking-wider text-smoke md:block">
            {formatNumber(filtered.length, lang)} {t.projects.count}
          </span>
        </div>
      </div>

      {/* Projects List / Mixed-Size Grid */}
      {filtered.length === 0 ? (
        <div className="border border-dashed border-ash py-24 text-center">
          <p className="font-mono text-xs uppercase tracking-wider text-smoke">{t.projects.noResult}</p>
        </div>
      ) : (
        <div className="mt-12 grid gap-8 md:grid-cols-12 md:gap-10">
          {filtered.map((item, index) => {
            // Mixed-size editorial rhythm:
            // 0: full width (12)
            // 1: 7-col, 2: 5-col
            // 3: 5-col, 4: 7-col
            // 5: full width (12)
            const patternIndex = index % 6;
            const isFull = patternIndex === 0 || patternIndex === 5;
            const isSeven = patternIndex === 1 || patternIndex === 4;
            const colSpan = isFull ? "md:col-span-12" : isSeven ? "md:col-span-7" : "md:col-span-5";
            const aspect = isFull ? "panoramic" : isSeven ? "wide" : "square";

            return (
              <Reveal
                key={item.key}
                delay={(index % 2) * 80}
                className={colSpan}
              >
                <ProjectCard
                  href={item.href}
                  index={formatIndex(index + 1, lang)}
                  title={item.title}
                  category={t.projects.filters[item.category]}
                  year={item.year}
                  location={item.location}
                  area={item.area}
                  image={item.image}
                  alt={item.title}
                  aspect={aspect}
                  sizes={
                    isFull
                      ? "100vw"
                      : isSeven
                        ? "(min-width: 768px) 60vw, 100vw"
                        : "(min-width: 768px) 40vw, 100vw"
                  }
                />
              </Reveal>
            );
          })}
        </div>
      )}
    </div>
  );
}
