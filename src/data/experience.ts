export interface ExperienceChronicleItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  tenure: string;
  bullets: string[];
}

export const EXPERIENCES: ExperienceChronicleItem[] = [
  {
    id: "hrc-labs-fullstack",
    role: "Full-Stack Developer",
    company: "HRC Labs (K1)",
    period: "JUN 2023 – JUL 2025",
    location: "Melbourne, AU",
    tenure: "Tenure: 2 yrs 2 mos",
    bullets: [
      "Developed end-to-end features for cloud-based payment collection platforms using React, Node.js, TypeScript, and MariaDB.",
      "Designed RESTful APIs for automated customer communications and installment workflows.",
      "Built core frontend architecture and analytics dashboards for healthcare CRM applications using React, Vite, and Tailwind CSS.",
    ],
  },
  {
    id: "arimac-se-2",
    role: "Software Engineer II",
    company: "Arimac",
    period: "APR 2022 – JUN 2023",
    location: "Digital Innovation",
    tenure: "Tenure: 1 yr 3 mos",
    bullets: [
      "Led frontend engineering for Social Reach analytics platform utilizing Next.js and Tailwind CSS.",
      "Engineered analytics dashboards processing audience sentiment and campaign engagement metrics.",
      "Developed REST API integrations for Headless CMS content workflows.",
    ],
  },
  {
    id: "arimac-se-1",
    role: "Software Engineer I",
    company: "Arimac",
    period: "JUN 2021 – APR 2022",
    location: "Enterprise Services",
    tenure: "Tenure: 11 mos",
    bullets: [
      "Developed customer self-service portals and responsive UI components for international enterprise telecommunications.",
    ],
  },
];
