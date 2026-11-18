import type { Metadata } from "next";
import AboutView from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "درباره ما | آرک",
  description:
    "آرک گروهی چندتخصصی از معماران، طراحان تجربه و مشاوران کسب‌وکار است که از سال ۱۳۹۱ در تهران کار می‌کند.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutView />;
}
