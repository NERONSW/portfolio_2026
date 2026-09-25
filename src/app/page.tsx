import type { Metadata } from "next";
import {
  Hero,
  ArchitecturalManifesto,
  TechnicalArsenal,
  ExperienceChronicle,
  FeaturedDeployments,
  AcademicCredentials,
  InitiateTransmission,
} from "@/components/sections";
import { FEATURED_DEPLOYMENTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Nipuna Wasala — Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer specializing in scalable web platforms, distributed systems, and architectural clarity across FinTech, MarTech, and CMS domains.",
  openGraph: {
    title: "Nipuna Wasala — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in scalable web platforms & distributed systems.",
    type: "website",
  },
};

export default function Home() {
  const count = FEATURED_DEPLOYMENTS.length || 3;

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Hero projectCount={count} />
      <ArchitecturalManifesto />
      <TechnicalArsenal />
      <ExperienceChronicle />
      <FeaturedDeployments />
      <AcademicCredentials />
      <InitiateTransmission />
    </main>
  );
}
