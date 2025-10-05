import axios from "axios";

import { buildStrapiUrl } from "./utils";

type StrapiComponent<T> = T & { id?: number };

type StrapiMedia = {
  data: {
    id?: number;
    attributes: MediaAsset & { provider?: string | null };
  } | null;
};

type StrapiNavigationSubLink = StrapiComponent<{
  label?: string | null;
  url?: string | null;
  openInNewTab?: boolean | null;
  ariaLabel?: string | null;
  isVisible?: boolean | null;
}>;

type StrapiNavigationMenuSection = StrapiComponent<{
  title?: string | null;
  links?: StrapiNavigationSubLink[] | null;
  ctaLabel?: string | null;
  ctaUrl?: string | null;
  ctaOpenInNewTab?: boolean | null;
  ctaAriaLabel?: string | null;
}>;

type StrapiNavigationLink = StrapiComponent<{
  label?: string | null;
  url?: string | null;
  openInNewTab?: boolean | null;
  ariaLabel?: string | null;
  isVisible?: boolean | null;
  subLinks?: StrapiNavigationSubLink[] | null;
  megaMenuSections?: StrapiNavigationMenuSection[] | null;
}>;

type StrapiGlobalSettings = {
  siteName?: string | null;
  tagline?: string | null;
  logo?: StrapiMedia | null;
  primaryNavigation?: StrapiNavigationLink[] | null;
  utilityNavigation?: StrapiNavigationLink[] | null;
  footerNavigation?: StrapiNavigationLink[] | null;
  footerText?: string | null;
  contactCtaLabel?: string | null;
  contactCtaUrl?: string | null;
  contactCtaDescription?: string | null;
};

type StrapiDataEnvelope<T extends object> =
  | (T & { id?: number; documentId?: string })
  | {
      id?: number;
      documentId?: string;
      attributes?: T | null;
    };

type StrapiResponse<T extends object> = {
  data?: StrapiDataEnvelope<T> | null;
  meta?: unknown;
};

export interface NavigationLink {
  label: string;
  url: string;
  openInNewTab?: boolean;
  ariaLabel?: string | null;
  isVisible?: boolean;
  subLinks?: NavigationLink[];
  sections?: NavigationSection[];
}

export interface NavigationSection {
  title: string;
  links: NavigationLink[];
  ctaLabel: string | null;
  ctaUrl: string | null;
  ctaOpenInNewTab: boolean;
  ctaAriaLabel: string | null;
}

export interface MediaAsset {
  url: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
}

export interface GlobalSettings {
  siteName: string;
  tagline?: string | null;
  logo?: MediaAsset | null;
  primaryNavigation: NavigationLink[];
  utilityNavigation: NavigationLink[];
  footerNavigation: NavigationLink[];
  footerText?: string | null;
  contactCtaLabel?: string | null;
  contactCtaUrl?: string | null;
  contactCtaDescription?: string | null;
}

const FALLBACK_NAVIGATION: NavigationLink[] = [
  { label: "Research", url: "/research", isVisible: true },
  {
    label: "Resources",
    url: "/resources",
    isVisible: true,
    subLinks: [
      { label: "Databases", url: "/resources/databases", isVisible: true },
      { label: "Software", url: "/resources/software", isVisible: true },
    ],
    sections: [
      {
        title: "Databases",
        links: [
          { label: "DB1", url: "/resources/databases/db1", isVisible: true },
          { label: "DB2", url: "/resources/databases/db2", isVisible: true },
          { label: "DB3", url: "/resources/databases/db3", isVisible: true },
        ],
        ctaLabel: "Show All Databases",
        ctaUrl: "/resources/databases",
        ctaOpenInNewTab: false,
        ctaAriaLabel: null,
      },
      {
        title: "Software & Tools",
        links: [
          {
            label: "Tool 1",
            url: "/resources/software/tool-1",
            isVisible: true,
          },
          {
            label: "Tool 2",
            url: "/resources/software/tool-2",
            isVisible: true,
          },
          {
            label: "Tool 3",
            url: "/resources/software/tool-3",
            isVisible: true,
          },
        ],
        ctaLabel: "Show All Tools",
        ctaUrl: "/resources/software",
        ctaOpenInNewTab: false,
        ctaAriaLabel: null,
      },
    ],
  },
  { label: "Team", url: "/team", isVisible: true },
  { label: "Publications", url: "/publications", isVisible: true },
  { label: "News", url: "/news", isVisible: true },
  { label: "Contact", url: "/contact", isVisible: true },
];

const FALLBACK_SETTINGS: GlobalSettings = {
  siteName: "Georgakopoulos-Soares Lab",
  tagline: "Decoding Cancer Genomics through Computational Biology",
  logo: null,
  primaryNavigation: FALLBACK_NAVIGATION,
  utilityNavigation: [],
  footerNavigation: FALLBACK_NAVIGATION,
  footerText: "© Georgakopoulos-Soares Lab. All rights reserved.",
  contactCtaLabel: "Contact Us",
  contactCtaUrl: "/contact",
  contactCtaDescription:
    "We are always open to new collaborations and partnerships. Get in touch to discuss potential research opportunities.",
};

function normalizeMedia(media?: StrapiMedia | null): MediaAsset | null {
  if (!media?.data?.attributes?.url) return null;
  const asset = media.data.attributes;
  if (asset.url.startsWith("http")) {
    return asset;
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    return asset;
  }

  return {
    ...asset,
    url: `${baseUrl}${asset.url}`,
  };
}

function normalizeSubNavigation(
  links?: StrapiNavigationSubLink[] | null
): NavigationLink[] {
  if (!Array.isArray(links)) return [];

  return links
    .filter((link) => link?.label && link?.url && link.isVisible !== false)
    .map((link) => ({
      label: link.label!.trim(),
      url: link.url!.trim(),
      openInNewTab: link.openInNewTab ?? false,
      ariaLabel: link.ariaLabel?.trim() ?? null,
      isVisible: link.isVisible ?? true,
    }));
}

function normalizeMenuSections(
  sections?: StrapiNavigationMenuSection[] | null
): NavigationSection[] {
  if (!Array.isArray(sections)) {
    return [];
  }

  return sections
    .map((section) => {
      const title = section.title?.trim();
      if (!title) {
        return null;
      }

      const links = normalizeSubNavigation(section.links);

      if (links.length === 0 && !section.ctaLabel?.trim()) {
        return null;
      }

      return {
        title,
        links,
        ctaLabel: section.ctaLabel?.trim() ?? null,
        ctaUrl: section.ctaUrl?.trim() ?? null,
        ctaOpenInNewTab: section.ctaOpenInNewTab ?? false,
        ctaAriaLabel: section.ctaAriaLabel?.trim() ?? null,
      } satisfies NavigationSection;
    })
    .filter((section): section is NavigationSection => section !== null);
}

function normalizeNavigation(
  links?: StrapiNavigationLink[] | null
): NavigationLink[] {
  if (!Array.isArray(links)) return [];
  return links
    .filter((link) => link?.label && link?.url && link.isVisible !== false)
    .map((link) => {
      const normalized: NavigationLink = {
        label: link.label!.trim(),
        url: link.url!.trim(),
        openInNewTab: link.openInNewTab ?? false,
        ariaLabel: link.ariaLabel?.trim() ?? null,
        isVisible: link.isVisible ?? true,
      };

      const subLinks = normalizeSubNavigation(link.subLinks);
      if (subLinks.length > 0) {
        normalized.subLinks = subLinks;
      }

      const sections = normalizeMenuSections(link.megaMenuSections);
      if (sections.length > 0) {
        normalized.sections = sections;
      }

      return normalized;
    });
}

function extractAttributes(
  data?: StrapiDataEnvelope<StrapiGlobalSettings> | null
): StrapiGlobalSettings | undefined {
  if (!data) {
    return undefined;
  }

  if ("attributes" in data) {
    return data.attributes ?? undefined;
  }

  return data as StrapiGlobalSettings;
}

const GLOBAL_SETTINGS_POPULATE = [
  "logo",
  "primaryNavigation",
  "primaryNavigation.subLinks",
  "primaryNavigation.megaMenuSections",
  "primaryNavigation.megaMenuSections.links",
  "utilityNavigation",
  "utilityNavigation.subLinks",
  "utilityNavigation.megaMenuSections",
  "utilityNavigation.megaMenuSections.links",
  "footerNavigation",
  "footerNavigation.subLinks",
  "footerNavigation.megaMenuSections",
  "footerNavigation.megaMenuSections.links",
];

export async function getGlobalSettings(): Promise<GlobalSettings> {
  try {
    const populateQuery = GLOBAL_SETTINGS_POPULATE.map(
      (field) => `populate=${encodeURIComponent(field)}`
    ).join("&");

    const res = await axios.get<StrapiResponse<StrapiGlobalSettings>>(
      buildStrapiUrl(`/global-setting?${populateQuery}`),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    const attributes = extractAttributes(res.data?.data);

    if (!attributes) {
      return FALLBACK_SETTINGS;
    }

    const siteName = attributes.siteName || FALLBACK_SETTINGS.siteName;

    const primaryNavigation = normalizeNavigation(attributes.primaryNavigation);
    const footerNavigation = normalizeNavigation(attributes.footerNavigation);
    const utilityNavigation = normalizeNavigation(attributes.utilityNavigation);

    return {
      siteName,
      tagline: attributes.tagline ?? FALLBACK_SETTINGS.tagline,
      logo: normalizeMedia(attributes.logo) ?? FALLBACK_SETTINGS.logo,
      primaryNavigation:
        primaryNavigation.length > 0
          ? primaryNavigation
          : [...FALLBACK_SETTINGS.primaryNavigation],
      utilityNavigation,
      footerNavigation:
        footerNavigation.length > 0
          ? footerNavigation
          : [...FALLBACK_SETTINGS.footerNavigation],
      footerText: attributes.footerText ?? FALLBACK_SETTINGS.footerText,
      contactCtaLabel:
        attributes.contactCtaLabel ?? FALLBACK_SETTINGS.contactCtaLabel,
      contactCtaUrl:
        attributes.contactCtaUrl ?? FALLBACK_SETTINGS.contactCtaUrl,
      contactCtaDescription:
        attributes.contactCtaDescription ??
        FALLBACK_SETTINGS.contactCtaDescription,
    };
  } catch (err) {
    console.error("Error fetching global settings:", err);
    return FALLBACK_SETTINGS;
  }
}
