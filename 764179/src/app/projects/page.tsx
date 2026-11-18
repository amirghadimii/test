import type { Metadata } from "next";
import ProjectsView from "@/components/views/ProjectsView";

export const metadata: Metadata = {
  title: "پروژه‌ها | آرک",
  description:
    "نمونه‌کارهای گروه آرک در معماری، تجربه و نمایشگاهی، توسعه کسب‌وکار و طراحی داخلی؛ همراه با مشخصات و نقش گروه در هر پروژه.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
