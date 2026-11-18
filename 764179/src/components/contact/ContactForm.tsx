"use client";

import { useState, type FormEvent } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { isEmail, normalizeIranPhone } from "@/lib/utils";
import { ArrowIcon } from "@/components/ui/Icons";

type Errors = Partial<Record<"name" | "email" | "phone" | "message" | "general", string>>;

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const { t, isFa } = useLang();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: t.contact.form.subjects[0],
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined, general: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = t.contact.form.errors.name;
    if (!isEmail(form.email)) next.email = t.contact.form.errors.email;
    if (!normalizeIranPhone(form.phone)) next.phone = t.contact.form.errors.phone;
    if (form.message.trim().length < 10) next.message = t.contact.form.errors.message;
    return next;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: normalizeIranPhone(form.phone),
          subject: form.subject,
          message: form.message.trim(),
        }),
      });
      if (!response.ok) throw new Error("request failed");
      setStatus("sent");
    } catch {
      // Static preview fallback: store message locally so admin inbox works end to end
      try {
        const key = "ark.messages.v1";
        const existing = JSON.parse(window.localStorage.getItem(key) || "[]");
        existing.unshift({
          id: `${Date.now()}`,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: normalizeIranPhone(form.phone),
          subject: form.subject,
          message: form.message.trim(),
          createdAt: Date.now(),
        });
        window.localStorage.setItem(key, JSON.stringify(existing));
        setStatus("sent");
      } catch {
        setStatus("idle");
        setErrors({ general: t.contact.form.errors.general });
      }
    }
  };

  if (status === "sent") {
    return (
      <div className="flex min-h-[420px] flex-col items-start justify-center border border-ash bg-paper p-8 sm:p-12">
        <div className="flex h-12 w-12 items-center justify-center border border-clay bg-clay text-paper">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m5 13 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="mt-6 font-mono text-xs uppercase tracking-widest text-clay">
          [TRANSMISSION COMPLETE]
        </span>
        <h2 className="display-sm mt-3 text-ink">{t.contact.form.successTitle}</h2>
        <p className="mt-4 max-w-md text-sm leading-8 text-graphite">
          {t.contact.form.successText}
        </p>
        <button
          type="button"
          onClick={() => {
            setForm({
              name: "",
              email: "",
              phone: "",
              subject: t.contact.form.subjects[0],
              message: "",
            });
            setStatus("idle");
          }}
          className="btn-arch-ghost mt-8"
        >
          <span>{t.contact.form.another}</span>
          <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-smoke">
            <span>{t.contact.form.name}</span>
            <span className="text-clay">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder={isFa ? "نام و نام خانوادگی" : "Full name"}
            className={`field mt-3 ${errors.name ? "!border-clay" : ""}`}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? (
            <p className="mt-2 font-mono text-[11px] text-clay">{errors.name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-smoke">
            <span>{t.contact.form.email}</span>
            <span className="text-clay">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            placeholder="name@domain.com"
            dir="ltr"
            className={`field mt-3 text-start ${errors.email ? "!border-clay" : ""}`}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? (
            <p className="mt-2 font-mono text-[11px] text-clay">{errors.email}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-smoke">
            <span>{t.contact.form.phone}</span>
            <span className="text-clay">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            placeholder="09120000000"
            dir="ltr"
            className={`field mt-3 text-start ${errors.phone ? "!border-clay" : ""}`}
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone ? (
            <p className="mt-2 font-mono text-[11px] text-clay">{errors.phone}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="subject" className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-smoke">
            <span>{t.contact.form.subject}</span>
            <span className="text-clay">[SEL]</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={(event) => update("subject", event.target.value)}
            className="field mt-3 bg-transparent"
          >
            {t.contact.form.subjects.map((subject) => (
              <option key={subject} value={subject} className="bg-paper text-ink">
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-smoke">
          <span>{t.contact.form.message}</span>
          <span className="text-clay">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          placeholder={
            isFa
              ? "کمی درباره‌ی پروژه، متراژ، مکان و زمان‌بندی مورد نظرتان بنویسید…"
              : "Tell us about the project, site, schedule and scope…"
          }
          className={`field mt-3 resize-none ${errors.message ? "!border-clay" : ""}`}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <p className="mt-2 font-mono text-[11px] text-clay">{errors.message}</p>
        ) : null}
      </div>

      {errors.general ? (
        <p className="border border-clay/30 bg-clay/10 p-3 font-mono text-xs text-clay">
          {errors.general}
        </p>
      ) : null}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-arch disabled:opacity-50"
        >
          <span>{status === "sending" ? t.contact.form.sending : t.contact.form.submit}</span>
          <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
        </button>
      </div>
    </form>
  );
}
