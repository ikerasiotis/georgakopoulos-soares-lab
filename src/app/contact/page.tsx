import type { Metadata } from "next";

import { getContactInfo } from "@/libs/api";

import { ContactDetails } from "./_components/ContactDetails";
import { ContactHero } from "./_components/ContactHero";
import { ContactMap } from "./_components/ContactMap";
import { ContactSocialLinks } from "./_components/ContactSocialLinks";
import {
  buildContactStructuredData,
  buildContactViewModel,
} from "./_lib/contact-view-model";

const pageTitle = "Contact Georgakopoulos-Soares Lab";
const pageDescription =
  "Reach the Georgakopoulos-Soares Laboratory to discuss collaborations, student opportunities, or media inquiries.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const contact = await getContactInfo();
  const view = buildContactViewModel(contact);
  const structuredData = buildContactStructuredData(contact);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="bg-white text-dark">
        <ContactHero title={view.heroTitle} subtitle={view.heroSubtitle} />

        <main className="py-16 contact-bg" role="main">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              <ContactDetails
                addressLines={view.addressLines}
                email={view.email}
                phones={view.phones}
                officeHourLines={view.officeHourLines}
              />
              <ContactSocialLinks links={view.socialLinks} />
              <ContactMap
                mapEmbedUrl={view.mapEmbedUrl}
                mapLinkUrl={view.mapLinkUrl}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
