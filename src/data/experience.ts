export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  technologies: string[];
  current?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    id: "lead-frontend-engineer-2024",
    role: "Senior Full Stack Engineer",
    company: "Aura Labs",
    companyUrl: "https://example.com",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    startDate: "2024",
    endDate: "Present",
    current: true,
    description:
      "Spearheading frontend architecture and real-time distributed workflows for cloud-native collaboration tooling.",
    achievements: [
      "Architected Next.js App Router migration delivering a 42% improvement in Largest Contentful Paint (LCP).",
      "Engineered shared design system tokens and component library used by 20+ internal product micro-frontends.",
      "Mentored 6 junior/mid-level engineers through structured pairing, code reviews, and architecture RFCs."
    ],
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "PostgreSQL"]
  },
  {
    id: "software-engineer-2022",
    role: "Software Engineer",
    company: "Vanguard Tech",
    companyUrl: "https://example.com",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    startDate: "2022",
    endDate: "2024",
    current: false,
    description:
      "Built resilient, high-volume transactional web applications and analytics dashboards for enterprise financial customers.",
    achievements: [
      "Designed and deployed streaming analytics dashboard processing 1.5M+ events per minute with sub-100ms latency.",
      "Integrated automated CI/CD pipeline test suites decreasing production regression release cycles by 60%.",
      "Reduced client bundle size by 35% via dynamic code-splitting and asset pipeline optimization."
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"]
  },
  {
    id: "frontend-developer-2020",
    role: "Frontend Developer",
    company: "Kite Interactive",
    companyUrl: "https://example.com",
    location: "Colombo, Sri Lanka",
    type: "Full-time",
    startDate: "2020",
    endDate: "2022",
    current: false,
    description:
      "Crafted responsive, accessible client portals and customer-facing marketing experiences with modern web standards.",
    achievements: [
      "Developed WCAG 2.1 AA compliant design components, unlocking accessibility compliance across all flagship portals.",
      "Delivered 15+ bespoke client platforms on time and under budget with zero critical security vulnerabilities."
    ],
    technologies: ["JavaScript", "React", "Sass", "REST APIs", "Git", "Figma"]
  }
];
