export interface FeaturedDeployment {
  id: string;
  slug?: string;
  indexTag: string;
  badge: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  sourceUrl?: string;
  isLive?: boolean;
  isPrivateRepo?: boolean;
}

export const FEATURED_DEPLOYMENTS: FeaturedDeployment[] = [
  {
    id: "social-reach-analytics",
    slug: "social-reach-analytics",
    indexTag: "03 INTELLIGENCE PLATFORM",
    badge: "Enterprise Client",
    title: "Social Reach Analytics",
    description:
      "MarTech social listening and analytics platform providing customer engagement insights, audience sentiment analysis, social media monitoring, and campaign performance dashboards.",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "REST API",
      "Python",
    ],
    liveUrl:
      "https://marketplace.microsoft.com/en-us/product/saas/arimaclankaprivatelimited1602157023485.arimac_socialreach",
    sourceUrl: "https://github.com/example/social-reach-analytics",
    isLive: true,
    isPrivateRepo: true,
  },

  {
    id: "k1-healthcare-payments",
    slug: "k1-healthcare-payments",
    indexTag: "02 HEALTHCARE PLATFORM",
    badge: "Enterprise Client",
    title: "K1 Healthcare Payments",
    description:
      "Cloud-based healthcare payment collection and customer engagement platform for managing invoices, patient accounts, payment reminders, and installment plans.",
    stack: ["React", "TypeScript", "Node.js", "MariaDB", "AWS", "REST API"],
    liveUrl: "https://k1app.com/",
    sourceUrl: "https://github.com/example/k1-healthcare-payments",
    isLive: true,
    isPrivateRepo: true,
  },

  {
    id: "one-hrc-platform",
    slug: "one-hrc-platform",
    indexTag: "01 UNIFIED PLATFORM",
    badge: "Internal Platform",
    title: "One HRC",
    description:
      "Unified healthcare platform bringing multiple applications together with a scalable frontend architecture, role-based access control, enterprise authentication, and analytics dashboards.",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Spring Boot",
      "PostgreSQL",
      "Keycloak",
      "Power BI",
    ],
    isLive: false,
    isPrivateRepo: true,
  },
];

// Re-export type Project & projects array for backward compatibility with UI components
export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category:
    | "Full Stack"
    | "Frontend"
    | "AI & ML"
    | "Open Source"
    | "Design Engineering";
  featured: boolean;
  year: number;
  tags: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  coverImage?: string;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = FEATURED_DEPLOYMENTS.map((d, index) => ({
  slug: d.id,
  title: d.title,
  tagline: d.badge,
  description: d.description,
  category: "Full Stack",
  featured: true,
  year: 2024 - index,
  tags: d.stack,
  technologies: d.stack,
  githubUrl: d.sourceUrl,
  liveUrl: d.liveUrl,
  highlights: [],
  coverImage: "",
}));
