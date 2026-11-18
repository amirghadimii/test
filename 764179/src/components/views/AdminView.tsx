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
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
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
        <Reveal>
          <p className="eyebrow">{t.admin.label}</p>
          <h1 className="display mt-6 max-w-3xl">{t.admin.title}</h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead mt-8 max-w-2xl">{t.admin.intro}</p>
        </Reveal>
      </section>

      <section className="shell pb-24 md:pb-32">
        <div className="grid gap-14 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-7">
            <form onSubmit={onSubmit} noValidate className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="p-title" className="text-xs text-smoke">
                    {t.admin.form.title}
                  </label>
                  <input
                    id="p-title"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className="field mt-3"
                    aria-invalid={Boolean(errors.title)}
                  />
                  {errors.title ? (
                    <p className="mt-2 text-xs">{errors.title}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="p-category" className="text-xs text-smoke">
                    {t.admin.form.category}
                  </label>
                  <select
                    id="p-category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value as CategoryKey)}
                    className="field mt-3"
                  >
                    {CATEGORY_ORDER.map((key) => (
                      <option key={key} value={key}>
                        {t.projects.filters[key]}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="p-year" className="text-xs text-smoke">
                    {t.admin.form.year}
                  </label>
                  <input
                    id="p-year"
                    type="text"
                    inputMode="numeric"
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                    placeholder={isFa ? "۱۴۰۳ یا 2024" : "2024 or 1403"}
                    dir="ltr"
                    className="field mt-3 text-start"
                    aria-invalid={Boolean(errors.year)}
                  />
                  {errors.year ? <p className="mt-2 text-xs">{errors.year}</p> : null}
                </div>

                <div>
                  <label htmlFor="p-status" className="text-xs text-smoke">
                    {t.admin.form.status}
                  </label>
                  <select
                    id="p-status"
                    value={status}
                    onChange={(event) => setStatus(event.target.value as StatusKey)}
                    className="field mt-3"
                  >
                    {(
                      ["completed", "inProgress", "concept"] as StatusKey[]
                    ).map((key) => (
                      <option key={key} value={key}>
                        {t.project.statusLabels[key]}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="p-location" className="text-xs text-smoke">
                    {t.admin.form.location}
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
                  <label htmlFor="p-area" className="text-xs text-smoke">
                    {t.admin.form.area}
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
                <label htmlFor="p-image" className="text-xs text-smoke">
                  {t.admin.form.image}
                </label>
                <input
                  id="p-image"
                  type="url"
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                  placeholder="https://images.unsplash.com/photo-…"
                  dir="ltr"
                  className="field mt-3 text-start"
                  aria-invalid={Boolean(errors.image)}
                />
                {errors.image ? <p className="mt-2 text-xs">{errors.image}</p> : null}
              </div>

              <div>
                <label htmlFor="p-description" className="text-xs text-smoke">
                  {t.admin.form.description}
                </label>
                <textarea
                  id="p-description"
                  rows={4}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  className="field mt-3 resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" className="btn-solid">
                  {t.admin.form.submit}
                  <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
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
                  className="btn-ghost"
                >
                  {t.admin.form.reset}
                </button>
              </div>

              {saved ? (
                <p className="border border-ash bg-mist px-4 py-3 text-xs">
                  {t.admin.form.success}
                </p>
              ) : null}
            </form>
          </Reveal>

          <Reveal delay={120} className="md:col-span-4 md:col-start-9">
            <div className="border-t border-ash pt-8">
              <p className="eyebrow">{t.admin.listLabel}</p>

              {items.length === 0 ? (
                <p className="mt-6 text-sm text-smoke">{t.admin.empty}</p>
              ) : (
                <ul className="mt-6 space-y-6">
                  {items.map((project) => (
                    <li key={project.id} className="flex gap-4 border-b border-ash pb-6">
                      <div className="relative h-20 w-24 shrink-0 overflow-hidden bg-mist">
                        <SmartImage
                          src={project.image}
                          alt={project.title}
                          width={400}
                          sizes="96px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{project.title}</p>
                        <p className="mt-1 text-xs text-smoke">
                          {t.projects.filters[project.category]} ·{" "}
                          {formatProjectYear(project, lang)}
                        </p>
                        <div className="mt-3 flex items-center gap-4 text-xs">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="link-line"
                            target="_blank"
                          >
                            {t.admin.preview}
                          </Link>
                          <button
                            type="button"
                            onClick={() => remove(project.id)}
                            className="text-smoke transition-colors hover:text-ink"
                          >
                            {t.admin.remove}
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <Link
                href="/projects"
                className="link-line mt-8 inline-flex items-center gap-2 text-sm"
              >
                {t.admin.backToProjects}
                <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-16 md:py-24">
        <div className="shell">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="eyebrow">{t.admin.messagesLabel}</p>
            <button
              type="button"
              onClick={loadMessages}
              className="btn-ghost !px-5 !py-2 text-xs"
            >
              {messagesLoading ? t.common.loading : t.admin.refresh}
            </button>
          </div>

          {messages.length === 0 ? (
            <p className="mt-8 text-sm text-smoke">{t.admin.messagesEmpty}</p>
          ) : (
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {messages.map((item) => (
                <li key={item.id} className="border border-ash bg-paper p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm font-medium">{item.name}</p>
                    <span className="text-[11px] text-smoke">
                      {new Date(item.createdAt).toLocaleDateString(isFa ? "fa-IR" : "en-GB")}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-smoke" dir="ltr">
                    {item.phone} · {item.email}
                  </p>
                  <p className="mt-4 text-xs text-graphite">{item.subject}</p>
                  <p className="mt-2 text-sm leading-7">{item.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
