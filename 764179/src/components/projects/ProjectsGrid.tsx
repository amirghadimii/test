"use client";

import { useMemo, useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
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
      year: lang === "fa" ? String(project.jalali) : String(project.year),
      location: project.location || "—",
      image: project.image,
    }));

    const seeded: CardItem[] = projects.map((project) => ({
      key: project.slug,
      href: `/projects/${project.slug}`,
      title: project.title[lang],
      category: project.category,
      year: lang === "fa" ? String(project.jalali) : String(project.year),
      location: project.location[lang],
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
      <div className="sticky top-[68px] z-30 -mx-5 border-y border-ash bg-paper/92 px-5 py-4 backdrop-blur-md md:top-[76px] md:-mx-10 md:px-10">
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto">
          {filters.map((item) => {
            const active = filter === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setFilter(item.key)}
                aria-pressed={active}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[13px] transition-colors duration-300 ${
                  active
                    ? "border-ink bg-ink text-paper"
                    : "border-ash text-graphite hover:border-ink"
                }`}
              >
                {item.label}
                <span className={active ? "text-white/60" : "text-smoke"}>
                  {counts[item.key] ?? 0}
                </span>
              </button>
            );
          })}
          <span className="ms-auto hidden shrink-0 text-xs text-smoke md:block">
            {filtered.length} {t.projects.count}
          </span>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-24 text-center text-sm text-smoke">{t.projects.noResult}</p>
      ) : (
        <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {filtered.map((item, index) => {
            const wide = index % 5 === 0;
            return (
              <Reveal
                key={item.key}
                delay={(index % 2) * 100}
                className={wide ? "md:col-span-2" : ""}
              >
                <ProjectCard
                  href={item.href}
                  index={String(index + 1).padStart(2, "0")}
                  title={item.title}
                  category={t.projects.filters[item.category]}
                  year={item.year}
                  location={item.location}
                  image={item.image}
                  alt={item.title}
                  aspect={wide ? "wide" : "tall"}
                  sizes={
                    wide
                      ? "(min-width: 768px) 92vw, 100vw"
                      : "(min-width: 768px) 46vw, 100vw"
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
