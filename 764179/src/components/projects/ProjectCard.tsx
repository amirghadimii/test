"use client";

import Link from "next/link";
import { useLang } from "@/i18n/LanguageProvider";
import SmartImage from "@/components/ui/SmartImage";
import { ArrowIcon } from "@/components/ui/Icons";

type ProjectCardProps = {
  href: string;
  index: string;
  title: string;
  category: string;
  year: string;
  location: string;
  image: string;
  alt: string;
  aspect?: "tall" | "wide" | "square" | "panoramic";
  sizes?: string;
  area?: string;
};

export default function ProjectCard({
  href,
  index,
  title,
  category,
  year,
  location,
  image,
  alt,
  aspect = "wide",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  area,
}: ProjectCardProps) {
  const { t } = useLang();

  const aspectClass =
    aspect === "panoramic"
      ? "aspect-[21/9] sm:aspect-[2.4/1]"
      : aspect === "wide"
        ? "aspect-[16/10]"
        : aspect === "square"
          ? "aspect-square"
          : "aspect-[3/4]";

  return (
    <Link href={href} className="group block focus:outline-none">
      <article className="flex flex-col border border-ash bg-concrete/20 transition-all duration-300 hover:border-ink hover:bg-concrete/40">
        {/* Top Architectural Drafting Header */}
        <div className="flex items-center justify-between border-b border-ash px-4 py-2.5 font-mono text-[11px] tracking-wider uppercase text-smoke">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-clay">[{index}]</span>
            <span className="text-graphite font-sans text-xs">{category}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>{year}</span>
            <span className="opacity-30">/</span>
            <span className="hidden sm:inline">{location}</span>
          </div>
        </div>

        {/* Sharp Image Frame (NO rounded corners, NO drop shadows) */}
        <div className={`zoom-host relative overflow-hidden bg-concrete ${aspectClass}`}>
          <SmartImage
            src={image}
            alt={alt}
            width={1600}
            sizes={sizes}
            className="zoom-img contrast-[1.03]"
          />
          {/* Subtle architectural hover tint */}
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
          
          {/* Architectural drafting corner markers */}
          <span className="absolute top-3 inset-inline-start-3 font-mono text-[10px] text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            +
          </span>
          <span className="absolute top-3 inset-inline-end-3 font-mono text-[10px] text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            +
          </span>
        </div>

        {/* Quiet Metadata Caption Schedule (Foster + Partners benchmark) */}
        <div className="flex flex-col justify-between p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-clay md:text-2xl">
                {title}
              </h3>
              <p className="mt-2 text-xs text-smoke md:text-sm">
                {location} {area ? `· ${area}` : ""}
              </p>
            </div>

            <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-ash text-smoke transition-all duration-300 group-hover:border-clay group-hover:bg-clay group-hover:text-paper">
              <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
