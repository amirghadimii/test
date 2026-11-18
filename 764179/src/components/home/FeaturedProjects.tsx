"use client";

import Link from "next/link";
import { useLang } from "@/i18n/LanguageProvider";
import { formatProjectYear, formatIndex } from "@/lib/utils";
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
    <section className="bg-mist py-24 md:py-36">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow">{t.home.featured.label}</p>
              <h2 className="display-md mt-5 max-w-2xl">{t.home.featured.title}</h2>
              <p className="lead mt-5 max-w-xl text-base">{t.home.featured.text}</p>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <Link
              href="/projects"
              className="link-line inline-flex items-center gap-2 text-sm"
            >
              {t.common.viewAll}
              <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-12">
          {cards.map(({ project, index }, i) => (
            <Reveal
              key={project.slug}
              delay={(i % 2) * 120}
              className={
                i === 0
                  ? "md:col-span-7"
                  : i === 1
                    ? "md:col-span-5 md:pt-24"
                    : i === 2
                      ? "md:col-span-5"
                      : "md:col-span-7 md:pt-16"
              }
            >
              <ProjectCard
                href={`/projects/${project.slug}`}
                index={formatIndex(index, lang)}
                title={project.title[lang]}
                category={t.projects.filters[project.category]}
                year={formatProjectYear(project, lang)}
                location={project.location[lang]}
                image={project.cover}
                alt={project.title[lang]}
                aspect={i === 0 || i === 3 ? "wide" : i === 1 ? "tall" : "square"}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
