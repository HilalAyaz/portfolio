import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getServiceBySlug } from "@/data/Services";
import ServiceDetailClient from "./ServiceDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; 
  const service = getServiceBySlug(slug);

  if (!service) return { title: "Service Not Found | Hilal Dev" };

  return {
    title: `${service.title} | Hilal Ayaz`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params; 
  const service = getServiceBySlug(slug);

  if (!service) return notFound();

  return <ServiceDetailClient service={service} />;
}
