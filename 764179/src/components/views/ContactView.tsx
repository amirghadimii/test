"use client";

import { useLang } from "@/i18n/LanguageProvider";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/ui/Reveal";

export default function ContactView() {
  const { t, isFa } = useLang();

  const rows = [
    { label: t.contact.infoLabel, value: t.contact.address, code: "ADDR" },
    {
      label: t.contact.phoneLabel,
      value: isFa ? "۰۲۱ ۸۸۴۵ ۲۲۱۰" : "+98 21 8845 2210",
      code: "TEL",
    },
    { label: t.contact.emailLabel, value: "studio@ark-group.ir", code: "MAIL" },
    { label: t.contact.hoursLabel, value: t.contact.hours, code: "HRS" },
  ];

  return (
    <>
      <section className="shell pb-14 pt-32 md:pb-20 md:pt-44">
        {/* Drafting Header */}
        <div className="flex items-center gap-3 border-b border-ash pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-smoke md:text-[11px]">
          <span className="inline-block h-1.5 w-1.5 bg-clay" />
          <span>PROJECT COMMISSIONS & INQUIRIES // TEHRAN</span>
          <span className="opacity-40">/</span>
          <span>RESPONSE WITHIN 24 HOURS</span>
        </div>

        <div className="mt-8">
          <Reveal>
            <p className="eyebrow">{t.contact.label}</p>
            <h1 className="display mt-5 max-w-4xl text-ink">{t.contact.title}</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="lead mt-6 max-w-2xl text-graphite">{t.contact.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Main Form and Studio Schedule */}
      <section className="shell pb-24 md:pb-36">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-7">
            <div className="border border-ash bg-concrete/20 p-6 sm:p-10">
              <div className="mb-8 flex items-center justify-between border-b border-ash pb-4 font-mono text-[10px] uppercase tracking-widest text-smoke">
                <span>INQUIRY FORM // COMMISSIONS</span>
                <span className="text-clay">SEC-01</span>
              </div>
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-5">
            <div className="border border-ash bg-concrete/30 p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-ash pb-4 font-mono text-[10px] uppercase tracking-widest text-smoke">
                <span>STUDIO HEADQUARTERS</span>
                <span className="text-clay">LOC-01</span>
              </div>

              <dl className="mt-6 divide-y divide-ash">
                {rows.map((row) => (
                  <div key={row.label} className="py-4 first:pt-0 last:pb-0">
                    <dt className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-smoke">
                      <span>{row.label}</span>
                      <span className="text-clay">[{row.code}]</span>
                    </dt>
                    <dd className="mt-2 text-xs leading-6 text-ink sm:text-sm">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 border-t border-ash pt-6">
                <div className="border border-ash bg-paper p-4 font-mono text-xs leading-6 text-graphite">
                  <span className="text-clay">● </span>
                  {t.contact.note}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
