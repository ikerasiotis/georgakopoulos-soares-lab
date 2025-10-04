import axios from "axios";

import { buildStrapiUrl } from "./utils";

export interface DatabasePageContent {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  featuredTitle: string;
  featuredDescription: string;
  keywordsLabel: string;
  highlightsLabel: string;
  scaleLabel: string;
  linkLabel: string;
  linkFallbackLabel: string;
}

type StrapiDatabasePageAttributes = {
  heroEyebrow?: string | null;
  heroTitle?: string | null;
  heroDescription?: string | null;
  featuredTitle?: string | null;
  featuredDescription?: string | null;
  keywordsLabel?: string | null;
  highlightsLabel?: string | null;
  scaleLabel?: string | null;
  linkLabel?: string | null;
  linkFallbackLabel?: string | null;
};

type StrapiDatabasePageEnvelope = {
  id?: number;
  documentId?: string;
  attributes?: StrapiDatabasePageAttributes | null;
} & Partial<StrapiDatabasePageAttributes>;

type StrapiResponse<T> = {
  data?: T | null;
};

const FALLBACK_DATABASE_PAGE_CONTENT: DatabasePageContent = {
  heroEyebrow: "Data Resources",
  heroTitle: "Curated Databases for Genomic Discovery",
  heroDescription:
    "The Georgakopoulos-Soares Lab contributes to and maintains databases that capture genomic variation, regulatory elements, and computational tools. Explore these resources to support your own research and collaborations.",
  featuredTitle: "Featured datasets & portals",
  featuredDescription:
    "Each entry includes key highlights, scale, and keywords to help you identify the best fit for your work.",
  keywordsLabel: "Keywords",
  highlightsLabel: "Highlights",
  scaleLabel: "Scale & coverage",
  linkLabel: "Visit resource",
  linkFallbackLabel: "Link coming soon",
};

function extractAttributes(
  envelope?: StrapiDatabasePageEnvelope
): StrapiDatabasePageAttributes | undefined {
  if (!envelope) {
    return undefined;
  }

  if ("attributes" in envelope && envelope.attributes) {
    return envelope.attributes;
  }

  const clone = { ...envelope } as Record<string, unknown>;
  delete clone.id;
  delete clone.documentId;
  delete clone.attributes;

  return clone as StrapiDatabasePageAttributes;
}

function normalizeContent(
  envelope?: StrapiDatabasePageEnvelope
): DatabasePageContent | null {
  const attributes = extractAttributes(envelope);

  if (!attributes) {
    return null;
  }

  const heroTitle = attributes.heroTitle?.trim();

  if (!heroTitle) {
    return null;
  }

  return {
    heroEyebrow:
      attributes.heroEyebrow?.trim() || FALLBACK_DATABASE_PAGE_CONTENT.heroEyebrow,
    heroTitle,
    heroDescription:
      attributes.heroDescription?.trim() ||
      FALLBACK_DATABASE_PAGE_CONTENT.heroDescription,
    featuredTitle:
      attributes.featuredTitle?.trim() ||
      FALLBACK_DATABASE_PAGE_CONTENT.featuredTitle,
    featuredDescription:
      attributes.featuredDescription?.trim() ||
      FALLBACK_DATABASE_PAGE_CONTENT.featuredDescription,
    keywordsLabel:
      attributes.keywordsLabel?.trim() ||
      FALLBACK_DATABASE_PAGE_CONTENT.keywordsLabel,
    highlightsLabel:
      attributes.highlightsLabel?.trim() ||
      FALLBACK_DATABASE_PAGE_CONTENT.highlightsLabel,
    scaleLabel:
      attributes.scaleLabel?.trim() ||
      FALLBACK_DATABASE_PAGE_CONTENT.scaleLabel,
    linkLabel:
      attributes.linkLabel?.trim() || FALLBACK_DATABASE_PAGE_CONTENT.linkLabel,
    linkFallbackLabel:
      attributes.linkFallbackLabel?.trim() ||
      FALLBACK_DATABASE_PAGE_CONTENT.linkFallbackLabel,
  } satisfies DatabasePageContent;
}

export async function getDatabasePageContent(): Promise<DatabasePageContent> {
  try {
    const response = await axios.get<StrapiResponse<StrapiDatabasePageEnvelope>>(
      buildStrapiUrl("/database-page"),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    const normalized = normalizeContent(response.data?.data ?? undefined);

    return normalized ?? FALLBACK_DATABASE_PAGE_CONTENT;
  } catch (error) {
    console.error("Error fetching database page content:", error);
    return FALLBACK_DATABASE_PAGE_CONTENT;
  }
}

export { FALLBACK_DATABASE_PAGE_CONTENT };
