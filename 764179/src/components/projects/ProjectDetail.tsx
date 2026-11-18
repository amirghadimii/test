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
import { formatNumber, formatProjectYear } from "@/lib/utils";
import { SITE } from "@/lib/site";

type SpecItem = { label: string; value: string; code: string };

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
        <span className="font-mono text-xs uppercase tracking-widest text-clay">[404 // NOT FOUND]</span>
        <h1 className="display-md">{t.project.notFound}</h1>
        <Link href="/projects" className="btn-arch">
          <span>{t.project.backToAll}</span>
          <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
        </Link>
      </section>
    );
  }

  const title = project ? project.title[lang] : userProject!.title;
  const category: CategoryKey = project ? project.category : userProject!.category;
  const year = project
    ? formatProjectYear(project, lang)
    : formatProjectYear(userProject!, lang);
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
    { label: t.common.location, value: location, code: "LOC" },
    { label: t.common.year, value: year, code: "YR" },
    { label: t.common.area, value: area, code: "SQM" },
    { label: t.common.status, value: status, code: "STAT" },
    { label: t.common.client, value: client, code: "CLI" },
    { label: t.common.role, value: role, code: "ROLE" },
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
    <article className="bg-paper text-ink">
      <JsonLd data={projectSchema} />

      {/* Dramatic Full-bleed Architectural Hero (Zaha Hadid benchmark) */}
      <section className="relative flex h-[82svh] min-h-[580px] w-full items-end overflow-hidden bg-concrete-dark text-paper">
        <SmartImage
          src={cover}
          alt={title}
          width={2560}
          sizes="100vw"
          priority
          className="hero-zoom brightness-[0.7] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50" />

        <div className="shell relative z-10 pb-16 pt-32 md:pb-24">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/70">
              <span className="text-clay">[{t.projects.filters[category]}]</span>
              <span className="opacity-40">/</span>
              <span>{year}</span>
              <span className="opacity-40">/</span>
              <span>{location}</span>
            </div>

            <h1 className="display mt-6 text-paper">{title}</h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-paper/85 md:text-base md:leading-8">
              {summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Architectural Specifications Schedule (جدول مشخصات فنی پروژه) */}
      <section className="border-b border-ash bg-paper-warm py-16 md:py-24">
        <div className="shell">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <Reveal>
                <p className="eyebrow">{t.project.specsLabel}</p>
                <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-smoke">
                  <span>SCHEDULE // SPEC-01</span>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-9">
              <dl className="grid grid-cols-1 divide-y divide-ash border-y border-ash sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:divide-ash rtl:sm:divide-x-reverse lg:grid-cols-3">
                {specs.map((spec, index) => (
                  <Reveal key={spec.label} delay={index * 60} className="p-4 sm:p-6">
                    <dt className="flex items-center justify-between font-mono text-[11px] text-smoke">
                      <span>{spec.label}</span>
                      <span className="text-clay">[{spec.code}]</span>
                    </dt>
                    <dd className="mt-3 text-sm font-medium leading-7 text-ink">{spec.value}</dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Narrative / Monograph Text */}
      {body.length > 0 ? (
        <section className="border-b border-ash bg-paper py-20 md:py-32">
          <div className="shell grid gap-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4">
              <Reveal>
                <p className="eyebrow">{t.project.narrativeLabel}</p>
                <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-smoke">
                  <span>DESIGN INTENT // MONOGRAPH</span>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-8">
              {body.map((paragraph, index) => (
                <Reveal key={index} delay={index * 80}>
                  <p className="mb-8 text-base leading-[2.1] text-graphite last:mb-0 md:text-xl md:leading-[2.15]">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Spatial & Construction Photographic Gallery */}
      <section className="border-b border-ash bg-paper-warm py-20 md:py-32">
        <div className="shell">
          <Reveal>
            <div className="flex items-end justify-between border-b border-ash pb-6">
              <div>
                <p className="eyebrow">{t.project.galleryLabel}</p>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-smoke">
                  <span>PHOTOGRAPHIC PLATES</span>
                </div>
              </div>
              <span className="font-mono text-xs text-smoke">
                [{gallery.length} {t.common.gallery}]
              </span>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-12 md:gap-10">
            {gallery.map((image, index) => {
              const isWide = index % 3 === 0;
              return (
                <Reveal
                  key={`${image}-${index}`}
                  delay={(index % 2) * 80}
                  className={isWide ? "md:col-span-12" : "md:col-span-6"}
                >
                  <figure className="border border-ash bg-concrete/30">
                    <div className="flex items-center justify-between border-b border-ash px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-smoke">
                      <span>PLATE // {String(index + 1).padStart(2, "0")}</span>
                      <span className="text-clay">+</span>
                    </div>
                    <div
                      className={`zoom-host relative overflow-hidden bg-concrete ${
                        isWide ? "aspect-[21/9] sm:aspect-[2.3/1]" : "aspect-[4/3] sm:aspect-[16/11]"
                      }`}
                    >
                      <SmartImage
                        src={image}
                        alt={`${title} — ${t.common.gallery} ${index + 1}`}
                        width={2000}
                        sizes="(min-width: 768px) 92vw, 100vw"
                        className="zoom-img contrast-[1.03]"
                      />
                    </div>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Group Role Block */}
      <section className="border-b border-ash-dark bg-concrete-dark py-20 text-paper md:py-28">
        <div className="shell grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow text-white/50">{t.project.roleLabel}</p>
              <h2 className="display-sm mt-5 text-paper">{role}</h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <p className="text-sm leading-8 text-white/75 md:text-base md:leading-8">
                {t.project.roleText}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Next Monograph Banner */}
      <section className="shell py-20 md:py-28">
        <Link href={`/projects/${nextProject.slug}`} className="group block">
          <div className="border border-ash bg-concrete/20 p-8 transition-all duration-300 hover:border-ink hover:bg-concrete/40 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-clay">
                  [NEXT MONOGRAPH // {t.common.next}]
                </span>
                <h2 className="display-md mt-4 text-ink transition-colors group-hover:text-clay">
                  {nextProject.title[lang]}
                </h2>
                <p className="mt-3 font-mono text-xs uppercase tracking-wider text-smoke">
                  {t.projects.filters[nextProject.category]} · {formatProjectYear(nextProject, lang)} · {nextProject.location[lang]}
                </p>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-ash text-smoke transition-all group-hover:border-clay group-hover:bg-clay group-hover:text-paper">
                <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
              </div>
            </div>
          </div>
        </Link>

        {/* Back and Inquiry CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-ash pt-6">
          <Link href="/projects" className="btn-arch-ghost">
            <span>{t.project.backToAll}</span>
          </Link>
          <Link href="/contact" className="btn-arch">
            <span>{t.nav.contact}</span>
            <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
          </Link>
        </div>
      </section>
    </article>
  );
}
