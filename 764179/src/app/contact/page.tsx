import type { Metadata } from "next";
import ContactView from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "تماس با ما | آرک",
  description:
    "برای پروژه‌های معماری، نمایشگاهی و توسعه کسب‌وکار با گروه آرک در تماس باشید؛ پاسخ در کمتر از یک روز کاری.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactView />;
}
