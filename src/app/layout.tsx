import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/app/providers";
import { Navbar, Footer } from "@/components/layout";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  keywords: [
    "Nipuna Wasala",
    "Nipuna Suraj Wasala",
    "Nipuna Suraj",
    "Nipuna",
    "Nipuns Wasala",
    "Full-stack developer",
    "Full-Stack Software Engineer",
    "Software Engineer Melbourne",
    "React Developer Melbourne",
    "Next.js Developer Australia",
    "TypeScript Engineer",
    "AWS Cloud Practitioner",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nipuna Wasala — Full-Stack Developer & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-surface-base text-text-primary transition-colors duration-200"
      >
        <JsonLd />
        <Providers>
          <AmbientBackground />
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
