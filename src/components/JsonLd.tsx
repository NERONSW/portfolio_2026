import { CONTACT_DATA } from "@/data/contact";
import { SITE_URL } from "@/lib/site";

// Resolve relative paths (e.g. the ReadCV PDF) into absolute URLs for Person `sameAs`.
function toAbsoluteUrl(href: string): string {
  return href.startsWith("http") ? href : `${SITE_URL}${href}`;
}

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nipuna Wasala",
  alternateName: ["Nipuna Suraj Wasala", "Nipuna Suraj", "Nipuna"],
  jobTitle: "Full-Stack Developer & Software Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressCountry: "AU",
  },
  sameAs: CONTACT_DATA.socials
    .filter((social) => ["GitHub", "LinkedIn", "ReadCV"].includes(social.label))
    .map((social) => toAbsoluteUrl(social.href)),
  knowsAbout: [
    "Full-stack development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "Web Architecture",
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
    />
  );
}