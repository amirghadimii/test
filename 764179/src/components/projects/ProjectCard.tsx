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
  aspect?: "tall" | "wide" | "square";
  sizes?: string;
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
  aspect = "tall",
  sizes = "(min-width: 1024px) 45vw, 100vw",
}: ProjectCardProps) {
  const { t } = useLang();

  const aspectClass =
    aspect === "wide" ? "aspect-[16/10]" : aspect === "square" ? "aspect-square" : "aspect-[4/5]";

  return (
    <Link href={href} className="group block">
      <div className={`zoom-host relative overflow-hidden bg-mist ${aspectClass}`}>
        <SmartImage
          src={image}
          alt={alt}
          width={1200}
          sizes={sizes}
          className="zoom-img"
        />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/25" />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between p-5 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="rounded-full bg-white px-4 py-2 text-[11px] font-medium text-ink">
            {t.common.viewProject}
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink">
            <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-5">
        <div>
          <h3 className="text-lg font-medium leading-snug md:text-xl">{title}</h3>
          <p className="mt-1.5 text-[13px] text-smoke">
            {category} · {year} · {location}
          </p>
        </div>
        <span className="pt-1 text-xs tabular-nums text-smoke">{index}</span>
      </div>
    </Link>
  );
}
