import type { Metadata } from "next";
import AdminView from "@/components/views/AdminView";

export const metadata: Metadata = {
  title: "پنل مدیریت پروژه | آرک",
  description:
    "افزودن پروژه جدید به شوی‌روم دیجیتال آرک؛ پروژه بلافاصله در صفحه پروژه‌ها منتشر می‌شود.",
  alternates: { canonical: "/admin" },
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminView />;
}
