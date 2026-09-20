export interface Skill {
  name: string;
  category: "frontend" | "backend" | "cloud" | "tools" | "languages";
  level?: "expert" | "advanced" | "proficient";
  icon?: string;
  featured?: boolean;
}

export const skills: Skill[] = [
  // Languages & Core
  { name: "TypeScript", category: "languages", level: "expert", featured: true },
  { name: "JavaScript (ESNext)", category: "languages", level: "expert", featured: true },
  { name: "Python", category: "languages", level: "advanced", featured: false },
  { name: "SQL", category: "languages", level: "advanced", featured: false },
  { name: "HTML5 / Semantic Web", category: "languages", level: "expert", featured: false },
  { name: "CSS3 / Sass", category: "languages", level: "expert", featured: false },

  // Frontend
  { name: "React 19", category: "frontend", level: "expert", featured: true },
  { name: "Next.js 15 (App Router)", category: "frontend", level: "expert", featured: true },
  { name: "Tailwind CSS", category: "frontend", level: "expert", featured: true },
  { name: "Framer Motion", category: "frontend", level: "advanced", featured: true },
  { name: "Vue.js", category: "frontend", level: "proficient", featured: false },
  { name: "Design Systems / Tokens", category: "frontend", level: "advanced", featured: true },

  // Backend
  { name: "Node.js", category: "backend", level: "expert", featured: true },
  { name: "Fastify / Express", category: "backend", level: "advanced", featured: false },
  { name: "PostgreSQL", category: "backend", level: "advanced", featured: true },
  { name: "Redis", category: "backend", level: "advanced", featured: false },
  { name: "Prisma / Drizzle ORM", category: "backend", level: "advanced", featured: true },
  { name: "REST & GraphQL APIs", category: "backend", level: "expert", featured: false },

  // Cloud & DevOps
  { name: "AWS (S3, Lambda, CloudFront)", category: "cloud", level: "advanced", featured: false },
  { name: "Docker", category: "cloud", level: "advanced", featured: true },
  { name: "Vercel / Cloudflare Workers", category: "cloud", level: "expert", featured: true },
  { name: "CI/CD (GitHub Actions)", category: "cloud", level: "advanced", featured: false },

  // Tools & Testing
  { name: "Git & GitHub", category: "tools", level: "expert", featured: true },
  { name: "Vitest / Jest", category: "tools", level: "advanced", featured: false },
  { name: "Playwright", category: "tools", level: "proficient", featured: false },
  { name: "Figma", category: "tools", level: "proficient", featured: false },
];
