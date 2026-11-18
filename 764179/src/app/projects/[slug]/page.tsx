import type { Metadata } from "next";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { getProject, projects } from "@/data/projects";
import { SITE } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "پروژه | آرک",
      description:
        "جزئیات کامل پروژه آرک: موقعیت، سال، متراژ، وضعیت، گالری تصاویر و نقش گروه در طراحی و اجرا.",
      alternates: { canonical: `/projects/${slug}` },
    };
  }

  return {
    title: `${project.title.fa} | آرک`,
    description: project.summary.fa,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.title.fa} | آرک`,
      description: project.summary.fa,
      url: `${SITE.url}/projects/${slug}`,
      images: [
        {
          url: `https://images.unsplash.com/${project.cover}?auto=format&fit=crop&w=1600&q=75`,
          width: 1600,
          height: 900,
          alt: project.title.fa,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  return <ProjectDetail slug={slug} />;
}
