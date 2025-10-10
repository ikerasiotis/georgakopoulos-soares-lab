import axios from "axios";

import { getPublications } from "./Publications";
import { getTeamPageContent } from "./TeamPage";

type StrapiImageFormats = Record<string, { url?: string | null }> | null;

type StrapiImageFile = {
  url?: string | null;
  alternativeText?: string | null;
  formats?: StrapiImageFormats;
};

type StrapiImage =
  | {
      data?: {
        attributes?: StrapiImageFile | null;
      } | null;
    }
  | (StrapiImageFile & {
      id?: number;
      documentId?: string;
    });

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
  role?: string | null;
  affiliation?: string | null;
  focus?: string | null;
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
  teamMembersTitle: string;
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
  teamMembersTitle: "Meet Our Team",
};

function resolveMediaUrl(image?: StrapiImage | null): {
  url: string | null;
  alt: string | null;
} {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "";

  const attributes: StrapiImageFile | undefined = (() => {
    if (!image) return undefined;
    if ("data" in image) {
      return image.data?.attributes ?? undefined;
    }
    // If image is not an envelope, it should be StrapiImageFile
    if (
      typeof image === "object" &&
      ("url" in image || "alternativeText" in image || "formats" in image)
    ) {
      return image as StrapiImageFile;
    }
    return undefined;
  })();

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
    return data.attributes ?? undefined;
  }

  // For the case where attributes are at the top level
  const rest = data as StrapiHomePageAttributes;
  return {
    heroTitle: rest.heroTitle ?? null,
    heroSubtitle: rest.heroSubtitle ?? null,
    aboutHeading: rest.aboutHeading ?? null,
    aboutBody: rest.aboutBody ?? null,
    aboutImage: rest.aboutImage ?? null,
  };
}

function buildPublicationLinks(
  publication: Awaited<ReturnType<typeof getPublications>>["data"][number]
): HomepagePublicationLink[] {
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
    links.push({
      label: "Read more",
      href: publication.link,
      type: "external",
    });
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
      heading:
        attributes?.aboutHeading?.trim() || FALLBACK_HOME_PAGE.about.heading,
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

    const principalInvestigatorMember: HomepageTeamMember = {
      name: teamResult.principalInvestigator.name,
      role: teamResult.principalInvestigator.title ?? null,
      affiliation: null,
      focus: null,
      photoUrl:
        teamResult.principalInvestigator.portrait?.medium ||
        teamResult.principalInvestigator.portrait?.large ||
        teamResult.principalInvestigator.portrait?.small ||
        teamResult.principalInvestigator.portrait?.thumbnail ||
        teamResult.principalInvestigator.portrait?.url ||
        teamResult.principalInvestigator.photoUrl ||
        null,
      photoAlt:
        teamResult.principalInvestigator.portrait?.alt ??
        teamResult.principalInvestigator.name,
    };

    const rawTeamMembers: HomepageTeamMember[] = [
      principalInvestigatorMember,
      ...teamResult.members.map((member) => ({
        name: member.name,
        role: member.role?.trim() || null,
        affiliation: member.affiliation?.trim() || null,
        focus: member.focus?.trim() || null,
        photoUrl:
          member.portrait?.medium ||
          member.portrait?.large ||
          member.portrait?.small ||
          member.portrait?.thumbnail ||
          member.portrait?.url ||
          member.photoUrl ||
          null,
        photoAlt: member.portrait?.alt ?? null,
      })),
    ];

    const seen = new Set<string>();
    const teamMembers = rawTeamMembers.filter((member) => {
      const key = member.name.trim().toLowerCase();
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });

    return {
      hero,
      about,
      featuredPublications,
      teamMembers,
      teamMembersTitle:
        teamResult.membersSectionTitle?.trim() ||
        FALLBACK_HOME_PAGE.teamMembersTitle,
    };
  } catch (error) {
    console.error("Error fetching home page content:", error);
    return FALLBACK_HOME_PAGE;
  }
}
