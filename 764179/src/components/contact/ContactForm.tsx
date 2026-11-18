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
      // Static preview fallback: no backend — store the message locally so
      // the demo flow (and the admin inbox) still works end to end.
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
      <div className="flex min-h-[420px] flex-col items-start justify-center border border-ash bg-mist p-8 md:p-12">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="m5 13 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2 className="display-sm mt-7">{t.contact.form.successTitle}</h2>
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
          className="btn-ghost mt-8"
        >
          {t.contact.form.another}
          <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs text-smoke">
            {t.contact.form.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder={isFa ? "نام و نام خانوادگی" : "John Doe"}
            className="field mt-3"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? (
            <p className="mt-2 text-xs text-ink">{errors.name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-xs text-smoke">
            {t.contact.form.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            placeholder="name@example.com"
            dir="ltr"
            className="field mt-3 text-start"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? (
            <p className="mt-2 text-xs text-ink">{errors.email}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="text-xs text-smoke">
            {t.contact.form.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            placeholder="09123456789"
            dir="ltr"
            className="field mt-3 text-start"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone ? (
            <p className="mt-2 text-xs text-ink">{errors.phone}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="subject" className="text-xs text-smoke">
            {t.contact.form.subject}
          </label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={(event) => update("subject", event.target.value)}
            className="field mt-3"
          >
            {t.contact.form.subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-xs text-smoke">
          {t.contact.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          placeholder={
            isFa
              ? "کمی درباره‌ی پروژه، زمان‌بندی و محدوده‌ی کارتان بنویسید…"
              : "Tell us about the project, timeline and scope…"
          }
          className="field mt-3 resize-none"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <p className="mt-2 text-xs text-ink">{errors.message}</p>
        ) : null}
      </div>

      {errors.general ? (
        <p className="border border-ash bg-mist px-4 py-3 text-xs">{errors.general}</p>
      ) : null}

      <button type="submit" disabled={status === "sending"} className="btn-solid disabled:opacity-60">
        {status === "sending" ? t.contact.form.sending : t.contact.form.submit}
        <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
      </button>
    </form>
  );
}
