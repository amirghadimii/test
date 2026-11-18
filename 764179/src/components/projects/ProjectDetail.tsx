"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { getProject, projects, type CategoryKey } from "@/data/projects";
import { useUserProjects } from "@/hooks/useUserProjects";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import { ArrowIcon } from "@/components/ui/Icons";
import { formatNumber } from "@/lib/utils";
import { SITE } from "@/lib/site";

type SpecItem = { label: string; value: string };

export default function ProjectDetail({ slug }: { slug: string }) {
  const { t, lang, setPageMeta } = useLang();
  const { items: userProjects } = useUserProjects();

  const project = getProject(slug);
  const userProject = userProjects.find((item) => item.slug === slug);

  const resolvedTitle = project
    ? project.title[lang]
    : (userProject?.title ?? "");
  const resolvedSummary = project
    ? project.summary[lang]
    : (userProject?.description ?? "");

  useEffect(() => {
    if (!resolvedTitle) return;
    setPageMeta({
      title: `${resolvedTitle} | ${t.brand.name}`,
      description: resolvedSummary || t.project.roleText,
    });
    return () => setPageMeta(null);
  }, [resolvedTitle, resolvedSummary, lang, setPageMeta, t.brand.name, t.project.roleText]);

  if (!project && !userProject) {
    return (
      <section className="shell flex min-h-[70svh] flex-col items-center justify-center gap-6 pt-32 text-center">
        <h1 className="display-md">{t.project.notFound}</h1>
        <Link href="/projects" className="btn-solid">
          {t.project.backToAll}
          <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
        </Link>
      </section>
    );
  }

  const title = project ? project.title[lang] : userProject!.title;
  const category: CategoryKey = project ? project.category : userProject!.category;
  const year = project
    ? lang === "fa"
      ? String(project.jalali)
      : String(project.year)
    : lang === "fa"
      ? String(userProject!.jalali)
      : String(userProject!.year);
  const location = project ? project.location[lang] : userProject!.location || "—";
  const areaValue = project ? project.area : userProject!.area;
  const area = areaValue ? `${formatNumber(areaValue, lang)} m²` : "—";
  const statusKey = project ? project.status : userProject!.status;
  const status = t.project.statusLabels[statusKey];
  const client = project ? project.client[lang] : "—";
  const role = project ? project.role[lang] : t.project.roleText;
  const summary = project ? project.summary[lang] : userProject!.description || "—";
  const body = project
    ? project.body.map((paragraph) => paragraph[lang])
    : userProject!.description
      ? [userProject!.description]
      : [];
  const cover = project ? project.cover : userProject!.image;
  const gallery = project ? project.gallery : [userProject!.image];

  const specs: SpecItem[] = [
    { label: t.common.location, value: location },
    { label: t.common.year, value: year },
    { label: t.common.area, value: area },
    { label: t.common.status, value: status },
    { label: t.common.client, value: client },
    { label: t.common.role, value: role },
  ];

  const orderedSlugs = projects.map((item) => item.slug);
  const currentIndex = orderedSlugs.indexOf(slug);
  const nextSlug =
    currentIndex >= 0
      ? orderedSlugs[(currentIndex + 1) % orderedSlugs.length]
      : orderedSlugs[0];
  const nextProject = getProject(nextSlug)!;

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: title,
    description: summary,
    url: `${SITE.url}/projects/${slug}`,
    image: `https://images.unsplash.com/${cover}?auto=format&fit=crop&w=1600&q=75`,
    dateCreated: project ? `${project.year}` : `${userProject!.year}`,
    creativeWorkStatus: status,
    locationCreated: {
      "@type": "Place",
      name: location,
      address: { "@type": "PostalAddress", addressLocality: location },
    },
    creator: { "@type": "Organization", name: SITE.name, "@id": `${SITE.url}/#organization` },
  };

  return (
    <article>
      <JsonLd data={projectSchema} />

      <section className="relative flex h-[78svh] min-h-[520px] w-full items-end overflow-hidden bg-ink">
        <SmartImage
          src={cover}
          alt={title}
          width={2200}
          sizes="100vw"
          priority
          className="hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/45" />
        <div className="grain absolute inset-0" />

        <div className="shell relative z-10 pb-14 pt-32 md:pb-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-white/60">
              <span>{t.projects.filters[category]}</span>
              <span className="opacity-50">—</span>
              <span>{year}</span>
              <span className="opacity-50">—</span>
              <span>{location}</span>
            </div>
            <h1 className="display mt-6 text-paper">{title}</h1>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/70 md:text-base">
              {summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <Reveal>
              <p className="eyebrow">{t.project.specsLabel}</p>
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {specs.map((spec, index) => (
                <Reveal key={spec.label} delay={index * 70}>
                  <div className="border-t border-ash pt-4">
                    <dt className="text-xs text-smoke">{spec.label}</dt>
                    <dd className="mt-2 text-sm leading-7">{spec.value}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {body.length > 0 ? (
        <section className="bg-mist py-16 md:py-24">
          <div className="shell grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <Reveal>
                <p className="eyebrow">{t.project.narrativeLabel}</p>
              </Reveal>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              {body.map((paragraph, index) => (
                <Reveal key={index} delay={index * 90}>
                  <p className="mb-6 text-lg leading-[2] text-graphite last:mb-0 md:text-xl md:leading-[2.05]">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="shell py-16 md:py-24">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <p className="eyebrow">{t.project.galleryLabel}</p>
            <span className="text-xs text-smoke">
              {gallery.length} {t.common.gallery}
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-12">
          {gallery.map((image, index) => (
            <Reveal
              key={`${image}-${index}`}
              delay={(index % 2) * 90}
              className={index % 3 === 0 ? "md:col-span-12" : "md:col-span-6"}
            >
              <figure className="zoom-host relative aspect-[4/3] overflow-hidden bg-mist md:aspect-[16/10]">
                <SmartImage
                  src={image}
                  alt={`${title} — ${t.common.gallery} ${index + 1}`}
                  width={1800}
                  sizes="(min-width: 768px) 92vw, 100vw"
                  className="zoom-img"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="shell grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow text-white/45">{t.project.roleLabel}</p>
              <h2 className="display-sm mt-5">{role}</h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <Reveal delay={100}>
              <p className="text-base leading-9 text-white/70">{t.project.roleText}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <Link href={`/projects/${nextProject.slug}`} className="group block">
          <div className="flex flex-col gap-6 border-t border-ash pt-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">{t.common.next}</p>
              <h2 className="display-md mt-5 transition-opacity duration-500 group-hover:opacity-60">
                {nextProject.title[lang]}
              </h2>
              <p className="mt-3 text-sm text-smoke">
                {t.projects.filters[nextProject.category]} ·{" "}
                {lang === "fa" ? nextProject.jalali : nextProject.year}
              </p>
            </div>
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ash transition-colors duration-500 group-hover:bg-ink group-hover:text-paper">
              <ArrowIcon className="h-5 w-5 rtl:-scale-x-100" />
            </span>
          </div>
        </Link>

        <div className="mt-14 flex items-center justify-between">
          <Link href="/projects" className="link-line text-sm">
            {t.project.backToAll}
          </Link>
          <Link href="/contact" className="btn-solid">
            {t.nav.contact}
            <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
          </Link>
        </div>
      </section>
    </article>
  );
}
