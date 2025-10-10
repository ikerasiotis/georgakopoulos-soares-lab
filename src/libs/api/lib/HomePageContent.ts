import axios from "axios";

import { getPublications } from "./Publications";
import { getResearchPageContent } from "./ResearchPage";
import { getTeamPageContent } from "./TeamPage";
import { getAllNews } from "./News";

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

export interface HomepageResearchHighlight {
  title: string;
  description: string;
  accent: "primary" | "secondary" | "accent";
  href: string;
}

export interface HomepageNewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  href: string;
  thumbnailUrl?: string | null;
  thumbnailAlt?: string | null;
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
  researchHighlights: HomepageResearchHighlight[];
  newsItems: HomepageNewsItem[];
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
  researchHighlights: [
    {
      title: "Novel Mutational Signatures",
      description:
        "Identifying previously unknown mutational signatures in paediatric cancers and uncovering their aetiology.",
      accent: "primary",
      href: "/research",
    },
    {
      title: "Genomic Instability Patterns",
      description:
        "Developing methods to quantify genomic instability and link it to treatment response across cancer types.",
      accent: "secondary",
      href: "/research",
    },
    {
      title: "Machine Learning Biomarkers",
      description:
        "Building machine learning models that translate mutational signatures into actionable biomarkers.",
      accent: "accent",
      href: "/research",
    },
  ],
  newsItems: [
    {
      id: "fallback-1",
      date: "June 15, 2023",
      title: "New Publication in Nature Genetics",
      excerpt:
        "Our latest research on mutational signatures in paediatric cancers reveals patterns with implications for early detection and treatment.",
      category: "Publication",
      href: "/news",
      thumbnailUrl: null,
      thumbnailAlt: null,
    },
    {
      id: "fallback-2",
      date: "May 28, 2023",
      title: "Lab Welcomes New Postdoctoral Researcher",
      excerpt:
        "We are delighted to welcome Dr. Emma Thompson, who will lead our translational genomics initiatives.",
      category: "Team",
      href: "/news",
      thumbnailUrl: null,
      thumbnailAlt: null,
    },
  ],
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

function formatNewsDate(dateString?: string | null): string {
  if (!dateString) {
    return "";
  }
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function getHomePageContent(): Promise<HomePageContent> {
  try {
    const [
      homeRes,
      publicationsResult,
      teamResult,
      researchContent,
      newsResult,
    ] = await Promise.all([
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
      getResearchPageContent(),
      getAllNews(1, 3),
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

    const researchHighlightsSource = Array.isArray(
      researchContent?.approachHighlights
    )
      ? researchContent.approachHighlights
      : [];
    const researchHighlights: HomepageResearchHighlight[] =
      researchHighlightsSource.slice(0, 3).map((highlight) => ({
        title: highlight.title,
        description: highlight.description,
        accent: highlight.accent,
        href: "/research",
      }));

    const newsItemsSource = Array.isArray(newsResult?.data)
      ? newsResult.data
      : [];
    const newsItems: HomepageNewsItem[] = newsItemsSource
      .slice(0, 3)
      .map((item, index) => {
        const slug = item.slug?.trim();
        const id =
          slug ??
          (typeof item.id !== "undefined" ? String(item.id) : `news-${index}`);
        const category = item.category?.trim() || "News";

        return {
          id,
          date: formatNewsDate(item.date),
          title: item.title,
          excerpt: item.excerpt || item.content || "",
          category,
          href: slug ? `/news/${slug}` : `/news/${item.id}`,
          thumbnailUrl:
            item.thumbnail?.medium ||
            item.thumbnail?.small ||
            item.thumbnail?.thumbnail ||
            item.thumbnail?.url ||
            null,
          thumbnailAlt: item.thumbnail?.alt ?? item.title,
        } satisfies HomepageNewsItem;
      });

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
      researchHighlights: researchHighlights.length
        ? researchHighlights
        : FALLBACK_HOME_PAGE.researchHighlights,
      newsItems: newsItems.length ? newsItems : FALLBACK_HOME_PAGE.newsItems,
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
