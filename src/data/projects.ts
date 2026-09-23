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
  isPrivateRepo?: boolean;
}

export const FEATURED_DEPLOYMENTS: FeaturedDeployment[] = [
  {
    id: "abn-data-finder",
    slug: "abn-data-finder",
    indexTag: "01 INDEXER UTILITY",
    badge: "99.98% Uptime",
    title: "ABN Data Finder",
    description:
      "High-performance Australian Business Register search engine & lookup utility with instant fuzzy search caching and automated bulk indexer.",
    stack: ["Go", "Next.js", "Redis", "PostgreSQL", "Meilisearch"],
    liveUrl: "https://abn-finder.example.com",
    sourceUrl: "https://github.com/example/abn-data-finder",
    isPrivateRepo: false,
  },
  {
    id: "restaurant-order-processor",
    slug: "restaurant-order-processor",
    indexTag: "02 REAL-TIME PLATFORM",
    badge: "Operational Flow",
    title: "Restaurant Order Processor",
    description:
      "Real-time order processing platform with custom tab routing, dynamic state management, and kitchen operational controls.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://order-processor.example.com",
    sourceUrl: "https://github.com/example/restaurant-order-processor",
    isPrivateRepo: false,
  },
  {
    id: "social-reach-analytics",
    slug: "social-reach-analytics",
    indexTag: "03 INTELLIGENCE PLATFORM",
    badge: "Enterprise Client",
    title: "Social Reach Analytics",
    description:
      "Social media intelligence platform providing engagement metrics, sentiment analysis, and campaign performance dashboards.",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "REST API"],
    liveUrl: "https://social-reach.example.com",
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
  category: "Full Stack" | "Frontend" | "AI & ML" | "Open Source" | "Design Engineering";
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
