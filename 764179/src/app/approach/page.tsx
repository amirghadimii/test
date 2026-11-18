import type { Metadata } from "next";
import ApproachView from "@/components/views/ApproachView";

export const metadata: Metadata = {
  title: "رویکرد ما | آرک",
  description:
    "متدولوژی چهار مرحله‌ای آرک: شناخت و تحلیل، ایده و سناریو، طراحی و اجرا، راه‌اندازی و رشد کسب‌وکار.",
  alternates: { canonical: "/approach" },
};

export default function ApproachPage() {
  return <ApproachView />;
}
