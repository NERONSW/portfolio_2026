export interface AcademicCredential {
  id: string;
  category: string;
  title: string;
  institution: string;
  timeline: string;
  status?: {
    label: string;
    isActive?: boolean;
  };
}

export const ACADEMIC_CREDENTIALS: AcademicCredential[] = [
  {
    id: "bachelor-software-engineering",
    category: "Bachelor Degree",
    title: "Bachelor of Computing in Software Engineering",
    institution: "Curtin University, Australia",
    timeline: "2017 – 2021",
    status: {
      label: "Graduated",
      isActive: false,
    },
  },
  {
    id: "aws-cloud-practitioner",
    category: "Cloud Certification",
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    institution: "Amazon Web Services",
    timeline: "2026 – 2029",
    status: {
      label: "ACTIVE",
      isActive: true,
    },
  },
  {
    id: "higher-diploma-it",
    category: "Higher Diploma",
    title: "Higher Diploma in IT",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    timeline: "Completed",
    status: {
      label: "Completed",
      isActive: false,
    },
  },
];
