import Link from "next/link";
import type { Metadata } from "next";
import { ArrowIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "صفحه پیدا نشد | آرک",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="shell flex min-h-[80svh] flex-col items-start justify-center gap-6 pt-32">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-clay">
        <span>[ERROR 404]</span>
        <span className="text-smoke">/</span>
        <span className="text-smoke">SHEET NOT FOUND</span>
      </div>
      <h1 className="display max-w-3xl text-ink">این صفحه در شوی‌روم ما وجود ندارد</h1>
      <p className="lead max-w-xl text-graphite">
        ممکن است نشانی تغییر کرده باشد یا پروژه هنوز در دست ساخت باشد. برای مشاهده کارنامه،
        به صفحه پروژه‌ها بازگردید.
      </p>
      <div className="pt-4">
        <Link href="/projects" className="btn-arch">
          <span>مشاهده پروژه‌ها</span>
          <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
        </Link>
      </div>
    </section>
  );
}
