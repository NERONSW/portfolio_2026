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
