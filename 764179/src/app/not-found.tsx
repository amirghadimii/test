import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفحه پیدا نشد | آرک",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="shell flex min-h-[80svh] flex-col items-start justify-center gap-8 pt-32">
      <p className="eyebrow">404</p>
      <h1 className="display max-w-2xl">این صفحه در شوی‌روم ما وجود ندارد</h1>
      <p className="lead max-w-xl">
        ممکن است نشانی تغییر کرده باشد یا پروژه هنوز منتشر نشده باشد. از اینجا به صفحه
        پروژه‌ها برگردید.
      </p>
      <Link href="/projects" className="btn-solid">
        مشاهده پروژه‌ها
      </Link>
    </section>
  );
}
