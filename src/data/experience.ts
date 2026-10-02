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
      "Developed end-to-end features for K1, a cloud-based healthcare payment collection and customer engagement platform handling invoices, patient accounts, payment reminders, and installment plans.",
      "Built RESTful APIs using Node.js and TypeScript and integrated them with React and TypeScript frontend applications, using MariaDB for data management.",
      "Optimised existing SMS and email reminder workflows, Cron-based data-processing jobs, and installment payment functionality to improve the reliability and efficiency of payment collection and customer engagement processes.",
      "Worked across a high-volume healthcare platform handling large volumes of invoice and patient data, with development and bug fixes following HIPAA requirements.",
      "Contributed to cloud-based deployments, CI/CD automation, containerisation, and release improvements as part of the platform's ongoing engineering lifecycle.",
      "Collaborated with Product, Business, and Engineering teams to translate requirements into scalable platform features and resolve technical issues.",
      "Built the core frontend architecture for One HRC, a unified healthcare platform bringing multiple healthcare applications together into a single platform.",
      "Developed reusable and responsive frontend components using React, Vite, and Tailwind CSS to establish a scalable foundation for the platform.",
      "Implemented role-based access control and integrated Keycloak for authentication and Single Sign-On (SSO).",
      "Developed backend APIs using Spring Boot and PostgreSQL to support platform functionality, data management, and application integration.",
      "Built custom analytics dashboards and integrated Power BI to provide reporting and real-time operational insights for business stakeholders.",
      "Worked with Product Owners and Engineering teams to evolve the unified platform and deliver new capabilities within an Agile product environment.",
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
      "Developed a customer-facing Content Management System for Sampath Bank PLC using React.js and Strapi as a headless CMS.",
      "Built reusable React components and REST API integrations between the frontend and backend services to support content management and publishing workflows.",
      "Improved content authoring and publishing workflows, enabling content teams to manage and publish customer-facing website content through the CMS.",
      "Contributed to the maintainability of the platform through reusable components, structured development practices, and consistent frontend implementation.",
      "Developed customer-facing features for Ooredoo Algeria's self-service portal, building reusable UI components and responsive interfaces to support customer interactions.",
      "Collaborated with engineering and stakeholder teams across client projects to translate requirements into maintainable customer-facing solutions.",
      "Contributed to Agile delivery, CI/CD practices, and ongoing application development across client engagements.",
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
      "Developed and maintained Social Reach, a MarTech social listening and analytics platform providing insights into customer engagement, online conversations, audience sentiment, and campaign performance.",
      "Developed the initial platform using React.js and later led a major UI revamp using Next.js and Tailwind CSS, rebuilding the interface from scratch to improve usability, consistency, and frontend performance.",
      "Led frontend development and a frontend development team, taking ownership of UI implementation, reusable component development, and frontend delivery.",
      "Built analytics dashboards to surface social media and marketing insights and support data-driven decision-making.",
      "Established reusable frontend components and contributed to the platform's frontend technical direction and overall user experience.",
      "Worked closely with stakeholders to translate business requirements into customer-facing platform features and contributed to Agile planning and delivery.",
      "Delivered the Social Reach platform to Sri Lanka's Health Promotion Bureau to support digital and social media monitoring activities.",
    ],
  },
];
