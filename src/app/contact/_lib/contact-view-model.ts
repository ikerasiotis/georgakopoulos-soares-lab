import type { IconProp } from "@fortawesome/fontawesome-svg-core";

import type { ContactInfo } from "@/libs/api";

export type SocialLink = {
  href: string;
  label: string;
  icon: IconProp;
  className: string;
};

export type ContactPhone = {
  label: string;
  display: string;
  telHref?: string | null;
};

export interface ContactViewModel {
  heroTitle: string;
  heroSubtitle?: string | null;
  addressLines: string[];
  email: string;
  phones: ContactPhone[];
  officeHourLines: string[];
  socialLinks: SocialLink[];
  mapEmbedUrl?: string | null;
  mapLinkUrl?: string | null;
}

type SocialLinkConfig = Omit<SocialLink, "href"> & {
  href?: string | null;
};

export function buildContactViewModel(contact: ContactInfo): ContactViewModel {
  const cityState = [contact.city, contact.state]
    .filter(Boolean)
    .join(", ");
  const locationLine = [cityState, contact.postalCode]
    .filter(Boolean)
    .join(" ")
    .trim();

  const addressLines = [
    contact.department,
    contact.institution,
    contact.addressLine,
    locationLine || null,
  ].filter(Boolean) as string[];

  const phones = (
    [
      contact.labPhone
        ? {
            label: "Lab",
            number: contact.labPhone,
          }
        : null,
      contact.officePhone
        ? {
            label: "Office",
            number: contact.officePhone,
          }
        : null,
    ].filter(Boolean) as { label: string; number: string }[]
  ).map(({ label, number }) => {
    const sanitized = number.replace(/ext\.?/gi, "");
    const normalized = sanitized.replace(/[^+\d]/g, "");
    const telHref = normalized ? `tel:${normalized}` : null;

    return {
      label,
      display: number,
      telHref,
    } satisfies ContactPhone;
  });

  const officeHourLines = [
    contact.officeHoursWeekdays,
    contact.officeHoursWeekend,
  ].filter(Boolean) as string[];

  const socialLinks = (
    [
      {
        href: contact.linkedinUrl,
        label: "LinkedIn",
        icon: ["fab", "linkedin"] as IconProp,
        className:
          "flex items-center bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] px-6 py-3 rounded-md transition-colors",
      },
      {
        href: contact.githubUrl,
        label: "GitHub",
        icon: ["fab", "github"] as IconProp,
        className:
          "flex items-center bg-[#333]/10 hover:bg-[#333]/20 text-[#333] px-6 py-3 rounded-md transition-colors",
      },
      {
        href: contact.googleScholarUrl,
        label: "Google Scholar",
        icon: ["fas", "graduation-cap"] as IconProp,
        className:
          "flex items-center bg-[#4285F4]/10 hover:bg-[#4285F4]/20 text-[#4285F4] px-6 py-3 rounded-md transition-colors",
      },
      {
        href: contact.pubmedUrl,
        label: "PubMed",
        icon: ["fas", "flask"] as IconProp,
        className:
          "flex items-center bg-[#1B75BC]/10 hover:bg-[#1B75BC]/20 text-[#1B75BC] px-6 py-3 rounded-md transition-colors",
      },
    ] as SocialLinkConfig[]
  ).reduce<SocialLink[]>((acc, link) => {
    if (!link.href) {
      return acc;
    }
    acc.push({
      href: link.href,
      label: link.label,
      icon: link.icon,
      className: link.className,
    });
    return acc;
  }, []);

  return {
    heroTitle: contact.heroTitle,
    heroSubtitle: contact.heroSubtitle,
    addressLines,
    email: contact.email,
    phones,
    officeHourLines,
    socialLinks,
    mapEmbedUrl: contact.mapEmbedUrl,
    mapLinkUrl: contact.mapLinkUrl,
  };
}

export function buildContactStructuredData(contact: ContactInfo) {
  const telephones = [contact.labPhone, contact.officePhone].filter(
    (value): value is string => Boolean(value)
  );

  const sameAs = [
    contact.linkedinUrl,
    contact.githubUrl,
    contact.googleScholarUrl,
    contact.pubmedUrl,
  ].filter((value): value is string => Boolean(value));

  const postalFields: Record<string, string | undefined> = {
    streetAddress: contact.addressLine || undefined,
    addressLocality: contact.city || undefined,
    addressRegion: contact.state || undefined,
    postalCode: contact.postalCode || undefined,
  };

  const postalAddress = Object.entries(postalFields).reduce<
    Record<string, string>
  >((acc, [key, value]) => {
    if (value) {
      acc[key] = value;
    }
    return acc;
  }, {});

  const structuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    name: contact.heroTitle,
    description:
      contact.heroSubtitle ||
      "Research laboratory specializing in cancer genomics and computational biology.",
    email: contact.email ? `mailto:${contact.email}` : undefined,
    telephone: telephones.length > 0 ? telephones : undefined,
    address:
      Object.keys(postalAddress).length > 0
        ? {
            "@type": "PostalAddress",
            name: contact.department,
            ...postalAddress,
          }
        : undefined,
    parentOrganization: contact.institution
      ? {
          "@type": "CollegeOrUniversity",
          name: contact.institution,
        }
      : undefined,
    map: contact.mapLinkUrl || contact.mapEmbedUrl || undefined,
    sameAs: sameAs.length > 0 ? sameAs : undefined,
  };

  return Object.fromEntries(
    Object.entries(structuredData).filter(([, value]) => {
      if (value === undefined || value === null) {
        return false;
      }
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      if (typeof value === "object") {
        return Object.keys(value as Record<string, unknown>).length > 0;
      }
      return true;
    })
  );
}

