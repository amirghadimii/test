import type { Metadata } from "next";
import HomeView from "@/components/views/HomeView";

export const metadata: Metadata = {
  title: "آرک | گروه معماری، تجربه و توسعه کسب‌وکار",
  description:
    "آرک یک گروه معماری و توسعه کسب‌وکار در تهران است؛ طراحی ساختمان، فضای داخلی، نمایشگاه و تجربه‌محور برای برندهایی که می‌خواهند دیده شوند.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeView />;
}
