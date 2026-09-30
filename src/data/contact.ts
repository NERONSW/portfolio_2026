export interface SocialLink {
  label: string;
  href: string;
  username?: string;
  isExternal?: boolean;
}

export interface ContactData {
  email: string;
  heading: string;
  subheading: string;
  cvUrl: string;
  responseWindow: string;
  timezone: string;
  locationLabel: string;
  socials: SocialLink[];
}

export const CONTACT_DATA: ContactData = {
  email: "hello@nipuna.dev",
  heading: "Let's engineer resilient systems together.",
  subheading:
    "Currently open to senior engineering roles, high-impact distributed architecture contracts, and technical advisory in Melbourne or remote.",
  cvUrl: "/Nipuna_Wasala_Resume.pdf",
  responseWindow: "< 24h reply",
  timezone: "Australia/Melbourne",
  locationLabel: "Melbourne (AEST/AEDT)",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/NERONSW",
      username: "@NERONSW",
      isExternal: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nipuna-wasala-078494205/",
      username: "in/nipuna-wasala",
      isExternal: true,
    },
    {
      label: "ReadCV",
      href: "/Nipuna_Wasala_Resume.pdf",
      username: "Resume (PDF)",
      isExternal: false,
    },
  ],
};
