import type { Metadata } from "next";
import ServicesView from "@/components/views/ServicesView";

export const metadata: Metadata = {
  title: "خدمات | آرک",
  description:
    "خدمات گروه آرک: معماری و ساختمان، طراحی داخلی، نمایشگاه و تجربه‌محور، هویت فضا، توسعه کسب‌وکار و مدیریت پروژه.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesView />;
}
