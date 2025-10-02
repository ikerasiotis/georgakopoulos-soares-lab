import axios from "axios";

type StrapiComponent<T> = T & { id?: number };

type StrapiMedia = {
  data: {
    id?: number;
    attributes: MediaAsset & { provider?: string | null };
  } | null;
};

type StrapiNavigationLink = StrapiComponent<
  NavigationLink & {
    isVisible?: boolean | null;
  }
>;

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

function normalizeNavigation(
  links?: StrapiNavigationLink[] | null
): NavigationLink[] {
  if (!Array.isArray(links)) return [];
  return links
    .filter((link) => link?.label && link?.url && link.isVisible !== false)
    .map((link) => ({
      label: link.label!.trim(),
      url: link.url!.trim(),
      openInNewTab: link.openInNewTab ?? false,
      ariaLabel: link.ariaLabel ?? null,
      isVisible: link.isVisible ?? true,
    }));
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

export async function getGlobalSettings(): Promise<GlobalSettings> {
  try {
    const res = await axios.get<StrapiResponse<StrapiGlobalSettings>>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/global-setting?populate=logo&populate=primaryNavigation&populate=utilityNavigation&populate=footerNavigation`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    console.log("Global Settings Response:", res.data);

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
