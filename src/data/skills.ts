export interface TechCategory {
  title: string;
  count: string;
  skills: string[];
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Frontend Systems",
    count: "06 items",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend & Runtime",
    count: "05 items",
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "GraphQL"],
  },
  {
    title: "Databases & Storage",
    count: "05 items",
    skills: ["PostgreSQL", "MongoDB", "MariaDB", "MySQL", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    count: "04 items",
    skills: [
      "AWS (Lambda, S3, API Gateway, DynamoDB)",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
    ],
  },
];

export const TOOLING_ITEMS = [
  "Claude Code",
  "Gemini",
  "Ollama",
  "Git",
  "GitLab",
  "Bitbucket",
  "Jira",
  "Figma",
];
