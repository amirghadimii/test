import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";
import { vazirmatn, inter } from "@/lib/fonts";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "آرک | گروه معماری، تجربه و توسعه کسب‌وکار",
    template: "%s",
  },
  description:
    "آرک یک گروه معماری و توسعه کسب‌وکار در تهران است؛ طراحی ساختمان، فضای داخلی، نمایشگاه و تجربه‌محور برای برندهایی که می‌خواهند دیده شوند.",
  applicationName: "ARK Digital Showroom",
  keywords: [
    "معماری",
    "طراحی داخلی",
    "نمایشگاه",
    "تجربه‌محور",
    "توسعه کسب‌وکار",
    "architecture studio",
    "interior design",
    "exhibition design",
  ],
  authors: [{ name: "ARK Group" }],
  creator: "ARK Group",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    alternateLocale: "en_US",
    siteName: "ARK — Digital Showroom",
    title: "آرک | گروه معماری، تجربه و توسعه کسب‌وکار",
    description:
      "شوی‌روم دیجیتال گروه آرک: معماری، تجربه‌محور و توسعه کسب‌وکار.",
    url: SITE.url,
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=75",
        width: 1600,
        height: 900,
        alt: "ARK Group — Digital Showroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "آرک | گروه معماری، تجربه و توسعه کسب‌وکار",
    description:
      "شوی‌روم دیجیتال گروه آرک: معماری، تجربه‌محور و توسعه کسب‌وکار.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: SITE.nameEn,
  legalName: SITE.legalName,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  foundingDate: SITE.founded,
  description: SITE.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressCountry: SITE.address.country,
    postalCode: SITE.address.postalCode,
  },
  areaServed: "IR",
  sameAs: SITE.social.map((item) => item.url),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: "ARK — Digital Showroom",
  inLanguage: ["fa-IR", "en-US"],
  publisher: { "@id": `${SITE.url}/#organization` },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${inter.variable}`}>
      <body className="bg-paper text-ink antialiased">
        <Script id="ark-lang-init" strategy="beforeInteractive">
          {`try{document.documentElement.classList.add('js');var l=localStorage.getItem('ark.lang');var e=(l==='en');document.documentElement.lang=e?'en':'fa';document.documentElement.dir=e?'ltr':'rtl';document.documentElement.dataset.lang=e?'en':'fa';}catch(err){}`}
        </Script>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </body>
    </html>
  );
}
