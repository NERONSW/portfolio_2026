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
      href: "https://linkedin.com/in/nipuna-wasala",
      username: "in/nipuna-wasala",
      isExternal: true,
    },
    {
      label: "Twitter/X",
      href: "https://x.com/nipuna_wasala",
      username: "@nipuna_wasala",
      isExternal: true,
    },
    {
      label: "ReadCV",
      href: "https://read.cv/nipuna",
      username: "@nipuna",
      isExternal: true,
    },
  ],
};
