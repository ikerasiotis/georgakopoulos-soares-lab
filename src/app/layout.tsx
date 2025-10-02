import Footer from "./components/footer";
import Header from "./components/header";
import "../libs/fontawesome";

import "./global.css";

import { getGlobalSettings } from "@/libs/api";

export const metadata = {
  title: "Georgakopoulos-Soares Lab",
  description: "Official lab website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalSettings = await getGlobalSettings();

  const {
    siteName,
    tagline,
    logo,
    primaryNavigation,
    utilityNavigation,
    footerNavigation,
    footerText,
    contactCtaLabel,
    contactCtaDescription,
    contactCtaUrl,
  } = globalSettings;

  metadata.title = siteName || metadata.title;
  metadata.description = tagline || metadata.description;

  const organizationStructuredData = JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "ResearchOrganization",
      name: siteName,
      description:
        tagline ||
        "Research laboratory specializing in cancer genomics and computational biology.",
      url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
      contactPoint: contactCtaUrl
        ? [
            {
              "@type": "ContactPoint",
              contactType: "general",
              url: contactCtaUrl,
            },
          ]
        : undefined,
    },
    null,
    0
  );

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationStructuredData }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header
          title={siteName}
          logo={logo}
          primaryNavigation={primaryNavigation}
          utilityNavigation={utilityNavigation}
        />
        <main id="main-content" className="flex-1 w-full mx-auto" tabIndex={-1}>
          {children}
        </main>
        <Footer
          navigation={footerNavigation}
          footerText={footerText}
          contactCtaLabel={contactCtaLabel}
          contactCtaDescription={contactCtaDescription}
          contactCtaUrl={contactCtaUrl}
        />
      </body>
    </html>
  );
}
