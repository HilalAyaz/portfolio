import { Metadata } from "next";
import { notFound } from "next/navigation";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import { getProjectBySlug } from "@/data/Projects";
import ProjectDetailClient from "./ProjectDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project Not Found | Hilal Ayaz" };

  return {
    title: `${project.title} | Hilal Ayaz`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  return (
    <PreloaderWrapper>
      <ProjectDetailClient project={project} />
    </PreloaderWrapper>
  );
}
