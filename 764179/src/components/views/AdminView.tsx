"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { CATEGORY_ORDER, type CategoryKey, type StatusKey } from "@/data/projects";
import { useUserProjects } from "@/hooks/useUserProjects";
import { addUserProject, removeUserProject } from "@/lib/storage";
import { slugify, toAsciiDigits, formatProjectYear } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import { ArrowIcon } from "@/components/ui/Icons";

type Message = {
  id: number | string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string | number;
};

type AdminErrors = Partial<Record<"title" | "year" | "image", string>>;

const isValidImageUrl = (value: string) => {
  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
};

const parseYear = (raw: number) => {
  if (raw >= 2000 && raw <= 2035) return { gregorian: raw, jalali: raw - 621 };
  if (raw >= 1380 && raw <= 1410) return { gregorian: raw + 621, jalali: raw };
  return { gregorian: raw, jalali: raw - 621 };
};

export default function AdminView() {
  const { t, lang, isFa } = useLang();
  const { items, refresh } = useUserProjects();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<CategoryKey>("arch");
  const [year, setYear] = useState(isFa ? "1403" : "2024");
  const [prevLang, setPrevLang] = useState(lang);
  if (prevLang !== lang) {
    setPrevLang(lang);
    if (year === "1403" || year === "2024") {
      setYear(lang === "fa" ? "1403" : "2024");
    }
  }

  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [status, setStatus] = useState<StatusKey>("completed");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<AdminErrors>({});
  const [saved, setSaved] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesLoading, setMessagesLoading] = useState(true);

  const loadMessages = useCallback(async () => {
    try {
      const response = await fetch("/api/contact/messages", { cache: "no-store" });
      if (response.ok) {
        const data: unknown = await response.json();
        if (Array.isArray(data)) setMessages(data as Message[]);
      } else {
        throw new Error("no backend");
      }
    } catch {
      // Static preview fallback: read locally stored messages.
      try {
        const local = JSON.parse(window.localStorage.getItem("ark.messages.v1") || "[]");
        setMessages(Array.isArray(local) ? (local as Message[]) : []);
      } catch {
        setMessages([]);
      }
    } finally {
      setMessagesLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      void loadMessages();
    }, 0);
    return () => clearTimeout(timer);
  }, [loadMessages]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: AdminErrors = {};
    const cleanedYear = toAsciiDigits(year.trim());
    const parsedYear = Number(cleanedYear);

    if (title.trim().length < 2) next.title = t.admin.errors.title;
    const isYearValid =
      Number.isFinite(parsedYear) &&
      ((parsedYear >= 1380 && parsedYear <= 1410) || (parsedYear >= 2000 && parsedYear <= 2035));
    if (!isYearValid) {
      next.year = t.admin.errors.year;
    }
    if (!isValidImageUrl(image)) next.image = t.admin.errors.image;

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSaved(false);
      return;
    }

    const years = parseYear(parsedYear);
    const latin = /[a-zA-Z]/.test(title);
    const base = slugify(title);
    const slug = latin && base ? base : `ark-${Date.now().toString(36)}`;

    addUserProject({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      slug,
      title: title.trim(),
      category,
      year: years.gregorian,
      jalali: years.jalali,
      image: image.trim(),
      location: location.trim(),
      area: area ? Number(area) : null,
      status,
      description: description.trim(),
      createdAt: Date.now(),
    });

    refresh();
    setTitle("");
    setImage("");
    setLocation("");
    setArea("");
    setDescription("");
    setSaved(true);
  };

  const remove = (id: string) => {
    removeUserProject(id);
    refresh();
  };

  return (
    <>
      <section className="shell pb-14 pt-32 md:pb-20 md:pt-44">
        {/* Drafting Header */}
        <div className="flex items-center gap-3 border-b border-ash pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-smoke md:text-[11px]">
          <span className="inline-block h-1.5 w-1.5 bg-clay" />
          <span>PROJECT REGISTRY // ARCHITECTURAL SHOWROOM CMS</span>
          <span className="opacity-40">/</span>
          <span>LOCALSTORAGE PERSISTENCE</span>
        </div>

        <div className="mt-8">
          <Reveal>
            <p className="eyebrow">{t.admin.label}</p>
            <h1 className="display mt-5 max-w-4xl text-ink">{t.admin.title}</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="lead mt-6 max-w-2xl text-graphite">{t.admin.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Main Admin Section: Form & Existing Registry */}
      <section className="shell pb-24 md:pb-36">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          {/* Add Project Form */}
          <Reveal className="md:col-span-7">
            <div className="border border-ash bg-concrete/20 p-6 sm:p-10">
              <div className="mb-8 flex items-center justify-between border-b border-ash pb-4 font-mono text-[10px] uppercase tracking-widest text-smoke">
                <span>NEW MONOGRAPH ENTRY // FORM</span>
                <span className="text-clay">SEC-01</span>
              </div>

              <form onSubmit={onSubmit} noValidate className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="p-title" className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-smoke">
                      <span>{t.admin.form.title}</span>
                      <span className="text-clay">*</span>
                    </label>
                    <input
                      id="p-title"
                      type="text"
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                      className={`field mt-3 ${errors.title ? "!border-clay" : ""}`}
                      aria-invalid={Boolean(errors.title)}
                    />
                    {errors.title ? (
                      <p className="mt-2 font-mono text-[11px] text-clay">{errors.title}</p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="p-category" className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-smoke">
                      <span>{t.admin.form.category}</span>
                      <span className="text-clay">[CAT]</span>
                    </label>
                    <select
                      id="p-category"
                      value={category}
                      onChange={(event) => setCategory(event.target.value as CategoryKey)}
                      className="field mt-3 bg-transparent"
                    >
                      {CATEGORY_ORDER.map((key) => (
                        <option key={key} value={key} className="bg-paper text-ink">
                          {t.projects.filters[key]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="p-year" className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-smoke">
                      <span>{t.admin.form.year}</span>
                      <span className="text-clay">*</span>
                    </label>
                    <input
                      id="p-year"
                      type="text"
                      inputMode="numeric"
                      value={year}
                      onChange={(event) => setYear(event.target.value)}
                      placeholder={isFa ? "۱۴۰۳ یا 2024" : "2024 or 1403"}
                      dir="ltr"
                      className={`field mt-3 text-start ${errors.year ? "!border-clay" : ""}`}
                      aria-invalid={Boolean(errors.year)}
                    />
                    {errors.year ? (
                      <p className="mt-2 font-mono text-[11px] text-clay">{errors.year}</p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="p-status" className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-smoke">
                      <span>{t.admin.form.status}</span>
                      <span className="text-clay">[STAT]</span>
                    </label>
                    <select
                      id="p-status"
                      value={status}
                      onChange={(event) => setStatus(event.target.value as StatusKey)}
                      className="field mt-3 bg-transparent"
                    >
                      {(
                        ["completed", "inProgress", "concept"] as StatusKey[]
                      ).map((key) => (
                        <option key={key} value={key} className="bg-paper text-ink">
                          {t.project.statusLabels[key]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="p-location" className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-smoke">
                      <span>{t.admin.form.location}</span>
                    </label>
                    <input
                      id="p-location"
                      type="text"
                      value={location}
                      onChange={(event) => setLocation(event.target.value)}
                      className="field mt-3"
                    />
                  </div>

                  <div>
                    <label htmlFor="p-area" className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-smoke">
                      <span>{t.admin.form.area} (m²)</span>
                    </label>
                    <input
                      id="p-area"
                      type="number"
                      inputMode="numeric"
                      value={area}
                      onChange={(event) => setArea(event.target.value)}
                      dir="ltr"
                      className="field mt-3 text-start"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="p-image" className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-smoke">
                    <span>{t.admin.form.image} (URL)</span>
                    <span className="text-clay">*</span>
                  </label>
                  <input
                    id="p-image"
                    type="url"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                    placeholder="https://images.unsplash.com/photo-…"
                    dir="ltr"
                    className={`field mt-3 text-start ${errors.image ? "!border-clay" : ""}`}
                    aria-invalid={Boolean(errors.image)}
                  />
                  {errors.image ? (
                    <p className="mt-2 font-mono text-[11px] text-clay">{errors.image}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="p-description" className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-smoke">
                    <span>{t.admin.form.description}</span>
                  </label>
                  <textarea
                    id="p-description"
                    rows={4}
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    className="field mt-3 resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button type="submit" className="btn-arch">
                    <span>{t.admin.form.submit}</span>
                    <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTitle("");
                      setImage("");
                      setLocation("");
                      setArea("");
                      setDescription("");
                      setYear(isFa ? "1403" : "2024");
                      setErrors({});
                      setSaved(false);
                    }}
                    className="btn-arch-ghost"
                  >
                    <span>{t.admin.form.reset}</span>
                  </button>
                </div>

                {saved ? (
                  <div className="border border-clay/30 bg-clay/10 p-4 font-mono text-xs text-clay">
                    <span>✓ </span>
                    {t.admin.form.success}
                  </div>
                ) : null}
              </form>
            </div>
          </Reveal>

          {/* User Projects Registry List */}
          <Reveal delay={120} className="md:col-span-5">
            <div className="border border-ash bg-concrete/30 p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-ash pb-4 font-mono text-[10px] uppercase tracking-widest text-smoke">
                <span>LOCAL REGISTRY // USER ADDITIONS</span>
                <span className="text-clay">[{items.length}]</span>
              </div>

              {items.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="font-mono text-xs uppercase tracking-wider text-smoke">
                    {t.admin.empty}
                  </p>
                </div>
              ) : (
                <ul className="mt-6 divide-y divide-ash">
                  {items.map((project) => (
                    <li key={project.id} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                      <div className="relative h-18 w-20 shrink-0 overflow-hidden border border-ash bg-concrete">
                        <SmartImage
                          src={project.image}
                          alt={project.title}
                          width={400}
                          sizes="80px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-ink">{project.title}</p>
                        <p className="mt-1 font-mono text-xs text-smoke">
                          {t.projects.filters[project.category]} · {formatProjectYear(project, lang)}
                        </p>
                        <div className="mt-2 flex items-center gap-4 font-mono text-xs">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="link-line link-clay text-ink"
                            target="_blank"
                          >
                            <span>{t.admin.preview}</span>
                            <ArrowIcon className="h-3 w-3 rtl:-scale-x-100" />
                          </Link>
                          <button
                            type="button"
                            onClick={() => remove(project.id)}
                            className="text-clay transition-opacity hover:opacity-75"
                          >
                            [{t.admin.remove}]
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 border-t border-ash pt-6">
                <Link
                  href="/projects"
                  className="link-line link-clay font-mono text-xs uppercase tracking-wider text-ink"
                >
                  <span>{t.admin.backToProjects}</span>
                  <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Messages Inbox Section */}
      <section className="border-t border-ash bg-paper-warm py-16 md:py-24">
        <div className="shell">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ash pb-6">
            <div>
              <p className="eyebrow">{t.admin.messagesLabel}</p>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-smoke">
                <span>INBOX TRANSMISSIONS</span>
              </div>
            </div>
            <button
              type="button"
              onClick={loadMessages}
              className="btn-arch-ghost !px-4 !py-1.5 font-mono text-xs"
            >
              <span>{messagesLoading ? t.common.loading : t.admin.refresh}</span>
            </button>
          </div>

          {messages.length === 0 ? (
            <div className="mt-10 border border-dashed border-ash py-16 text-center">
              <p className="font-mono text-xs uppercase tracking-wider text-smoke">
                {t.admin.messagesEmpty}
              </p>
            </div>
          ) : (
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {messages.map((item) => (
                <li key={item.id} className="border border-ash bg-paper p-6">
                  <div className="flex items-baseline justify-between gap-4 border-b border-ash pb-3 font-mono text-xs">
                    <span className="font-sans font-semibold text-ink">{item.name}</span>
                    <span className="text-[11px] text-smoke">
                      {new Date(item.createdAt).toLocaleDateString(isFa ? "fa-IR" : "en-GB")}
                    </span>
                  </div>
                  <p className="mt-3 font-mono text-xs text-clay" dir="ltr">
                    {item.phone} · {item.email}
                  </p>
                  <p className="mt-3 font-mono text-xs uppercase text-smoke">
                    SUBJ: {item.subject}
                  </p>
                  <p className="mt-3 text-xs leading-6 text-graphite sm:text-sm">{item.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
