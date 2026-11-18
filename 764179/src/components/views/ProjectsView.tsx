"use client";

import { useLang } from "@/i18n/LanguageProvider";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import Reveal from "@/components/ui/Reveal";

export default function ProjectsView() {
  const { t } = useLang();

  return (
    <>
      <section className="shell pb-14 pt-32 md:pb-20 md:pt-44">
        <Reveal>
          <p className="eyebrow">{t.projects.label}</p>
          <h1 className="display mt-6">{t.projects.title}</h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead mt-8 max-w-2xl">{t.projects.intro}</p>
        </Reveal>
      </section>

      <ProjectsGrid />
    </>
  );
}
