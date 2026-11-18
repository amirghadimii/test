"use client";

import { useLang } from "@/i18n/LanguageProvider";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/ui/Reveal";

export default function ContactView() {
  const { t, isFa } = useLang();

  const rows = [
    { label: t.contact.infoLabel, value: t.contact.address },
    {
      label: t.contact.phoneLabel,
      value: isFa ? "۰۲۱ ۸۸۴۵ ۲۲۱۰" : "+98 21 8845 2210",
    },
    { label: t.contact.emailLabel, value: "studio@ark-group.ir" },
    { label: t.contact.hoursLabel, value: t.contact.hours },
  ];

  return (
    <>
      <section className="shell pb-14 pt-32 md:pb-20 md:pt-44">
        <Reveal>
          <p className="eyebrow">{t.contact.label}</p>
          <h1 className="display mt-6 max-w-3xl">{t.contact.title}</h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead mt-8 max-w-2xl">{t.contact.intro}</p>
        </Reveal>
      </section>

      <section className="shell pb-24 md:pb-36">
        <div className="grid gap-14 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="md:col-span-4 md:col-start-9">
            <div className="border-t border-ash pt-8">
              <p className="eyebrow">{t.contact.infoLabel}</p>
              <dl className="mt-8 space-y-8">
                {rows.map((row) => (
                  <div key={row.label}>
                    <dt className="text-xs text-smoke">{row.label}</dt>
                    <dd className="mt-2 text-sm leading-7">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-10 border border-ash bg-mist p-5 text-[13px] leading-7 text-graphite">
                {t.contact.note}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
