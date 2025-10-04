import axios from "axios";

import { getPublications } from "./Publications";
import { getTeamPageContent } from "./TeamPage";

type StrapiImageFile = {
  url?: string | null;
  alternativeText?: string | null;
};

type StrapiImage = {
  data?: {
    attributes?: StrapiImageFile | null;
  } | null;
};

type StrapiHomePageAttributes = {
  heroTitle?: string | null;
  heroSubtitle?: string | null;
  aboutHeading?: string | null;
  aboutBody?: string | null;
  aboutImage?: StrapiImage | null;
};

type StrapiHomePageEnvelope =
  | (StrapiHomePageAttributes & {
      id?: number;
      documentId?: string;
    })
  | {
      id?: number;
      documentId?: string;
      attributes?: StrapiHomePageAttributes | null;
    };

type StrapiHomePageResponse = {
  data?: StrapiHomePageEnvelope | null;
  meta?: unknown;
};

export type HomepagePublicationLinkType = "pdf" | "external";

export interface HomepagePublicationLink {
  label: string;
  href: string;
  type: HomepagePublicationLinkType;
}

export interface HomepagePublication {
  title: string;
  venue?: string | null;
  authors?: string | null;
  links: HomepagePublicationLink[];
}

export interface HomepageTeamMember {
  name: string;
  photoUrl?: string | null;
  photoAlt?: string | null;
}

export interface HomePageContent {
  hero: {
    title: string;
    subtitle?: string | null;
  };
  about: {
    heading: string;
    bodyHtml: string;
    imageUrl?: string | null;
    imageAlt?: string | null;
  };
  featuredPublications: HomepagePublication[];
  teamMembers: HomepageTeamMember[];
}

const FALLBACK_HOME_PAGE: HomePageContent = {
  hero: {
    title: "Georgakopoulos-Soares Lab",
    subtitle: "Decoding cancer genomics through computational biology",
  },
  about: {
    heading: "About Our Lab",
    bodyHtml:
      "<p>The Georgakopoulos-Soares Laboratory is dedicated to understanding the genomic landscape of cancer through innovative computational approaches and data-driven research.</p>",
    imageUrl: null,
    imageAlt: null,
  },
  featuredPublications: [],
  teamMembers: [],
};

function resolveMediaUrl(image?: StrapiImage | null): {
  url: string | null;
  alt: string | null;
} {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "";
  const attributes = image?.data?.attributes;
  const relativeUrl = attributes?.url ?? null;
  const absoluteUrl = relativeUrl
    ? relativeUrl.startsWith("http")
      ? relativeUrl
      : `${baseUrl}${relativeUrl}`
    : null;

  return {
    url: absoluteUrl,
    alt: attributes?.alternativeText ?? null,
  };
}

function extractHomeAttributes(
  data?: StrapiHomePageEnvelope | null
): StrapiHomePageAttributes | undefined {
  if (!data) {
    return undefined;
  }

  if ("attributes" in data && data.attributes) {
    return data.attributes;
  }

  const { id, documentId, ...rest } = data;
  return rest;
}

function buildPublicationLinks(publication: Awaited<
  ReturnType<typeof getPublications>
>["data"][number]): HomepagePublicationLink[] {
  const links: HomepagePublicationLink[] = [];

  if (Array.isArray(publication.resources)) {
    for (const resource of publication.resources) {
      if (!resource.title && !resource.link) continue;

      const href = resource.link ?? "#";
      const label = resource.title?.trim() || "View";
      const format = resource.fileFormat?.toLowerCase() ?? "";
      const type: HomepagePublicationLinkType =
        format.includes("pdf") || href.toLowerCase().endsWith(".pdf")
          ? "pdf"
          : "external";

      links.push({ label, href, type });
    }
  }

  if (links.length === 0 && publication.link) {
    links.push({ label: "Read more", href: publication.link, type: "external" });
  }

  return links;
}

function formatPublicationVenue(
  publication: Awaited<ReturnType<typeof getPublications>>["data"][number]
): string | null {
  if (publication.summary) {
    return publication.summary;
  }

  if (publication.snippet) {
    return publication.snippet;
  }

  return null;
}

export async function getHomePageContent(): Promise<HomePageContent> {
  try {
    const [homeRes, publicationsResult, teamResult] = await Promise.all([
      axios.get<StrapiHomePageResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/home-page?populate=aboutImage`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        }
      ),
      getPublications(1, 3),
      getTeamPageContent(),
    ]);

    const attributes = extractHomeAttributes(homeRes.data?.data);

    const hero = {
      title: attributes?.heroTitle?.trim() || FALLBACK_HOME_PAGE.hero.title,
      subtitle:
        attributes?.heroSubtitle?.trim() || FALLBACK_HOME_PAGE.hero.subtitle,
    };

    const aboutImage = resolveMediaUrl(attributes?.aboutImage);
    const about = {
      heading: attributes?.aboutHeading?.trim() ||
        FALLBACK_HOME_PAGE.about.heading,
      bodyHtml: attributes?.aboutBody || FALLBACK_HOME_PAGE.about.bodyHtml,
      imageUrl: aboutImage.url,
      imageAlt: aboutImage.alt,
    };

    const featuredPublications: HomepagePublication[] =
      publicationsResult.data.map((publication) => ({
        title: publication.title,
        venue: formatPublicationVenue(publication),
        authors:
          publication.publicationAuthors
            .map((author) => author.name)
            .filter(Boolean)
            .join(", ") || null,
        links: buildPublicationLinks(publication),
      }));

    const teamMembers: HomepageTeamMember[] = teamResult.members.map(
      (member) => ({
        name: member.name,
        photoUrl:
          member.portrait?.medium ||
          member.portrait?.large ||
          member.portrait?.small ||
          member.portrait?.thumbnail ||
          member.portrait?.url ||
          member.photoUrl ||
          null,
        photoAlt: member.portrait?.alt ?? null,
      })
    );

    return {
      hero,
      about,
      featuredPublications,
      teamMembers,
    };
  } catch (error) {
    console.error("Error fetching home page content:", error);
    return FALLBACK_HOME_PAGE;
  }
}
