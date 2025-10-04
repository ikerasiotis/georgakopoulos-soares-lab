import axios from "axios";

import { buildStrapiUrl } from "./utils";

export interface ToolsPageContent {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  featuredTitle: string;
  featuredDescription: string;
  keywordsLabel: string;
  highlightsLabel: string;
  featuresLabel: string;
  linkLabel: string;
  linkFallbackLabel: string;
}

type StrapiToolsPageAttributes = {
  heroEyebrow?: string | null;
  heroTitle?: string | null;
  heroDescription?: string | null;
  featuredTitle?: string | null;
  featuredDescription?: string | null;
  keywordsLabel?: string | null;
  highlightsLabel?: string | null;
  featuresLabel?: string | null;
  linkLabel?: string | null;
  linkFallbackLabel?: string | null;
};

type StrapiToolsPageEnvelope = {
  id?: number;
  documentId?: string;
  attributes?: StrapiToolsPageAttributes | null;
} & Partial<StrapiToolsPageAttributes>;

type StrapiResponse<T> = {
  data?: T | null;
};

const FALLBACK_TOOLS_PAGE_CONTENT: ToolsPageContent = {
  heroEyebrow: "Lab Software",
  heroTitle: "Tools Empowering Genomic Discovery",
  heroDescription:
    "We design and maintain open-source software for handling large-scale genomic data, revealing DNA structural patterns, and streamlining computational biology workflows. Explore the toolset that supports our collaborators and the wider scientific community.",
  featuredTitle: "Featured resources",
  featuredDescription:
    "From scalable k-mer analytics to structural motif detection, each tool includes documentation and ready-to-use code to integrate with your pipelines.",
  keywordsLabel: "Keywords",
  highlightsLabel: "Highlights",
  featuresLabel: "Key features",
  linkLabel: "Explore tool",
  linkFallbackLabel: "Link coming soon",
};

function extractAttributes(
  envelope?: StrapiToolsPageEnvelope
): StrapiToolsPageAttributes | undefined {
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

  return clone as StrapiToolsPageAttributes;
}

function normalizeContent(
  envelope?: StrapiToolsPageEnvelope
): ToolsPageContent | null {
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
      attributes.heroEyebrow?.trim() || FALLBACK_TOOLS_PAGE_CONTENT.heroEyebrow,
    heroTitle,
    heroDescription:
      attributes.heroDescription?.trim() ||
      FALLBACK_TOOLS_PAGE_CONTENT.heroDescription,
    featuredTitle:
      attributes.featuredTitle?.trim() ||
      FALLBACK_TOOLS_PAGE_CONTENT.featuredTitle,
    featuredDescription:
      attributes.featuredDescription?.trim() ||
      FALLBACK_TOOLS_PAGE_CONTENT.featuredDescription,
    keywordsLabel:
      attributes.keywordsLabel?.trim() ||
      FALLBACK_TOOLS_PAGE_CONTENT.keywordsLabel,
    highlightsLabel:
      attributes.highlightsLabel?.trim() ||
      FALLBACK_TOOLS_PAGE_CONTENT.highlightsLabel,
    featuresLabel:
      attributes.featuresLabel?.trim() ||
      FALLBACK_TOOLS_PAGE_CONTENT.featuresLabel,
    linkLabel:
      attributes.linkLabel?.trim() || FALLBACK_TOOLS_PAGE_CONTENT.linkLabel,
    linkFallbackLabel:
      attributes.linkFallbackLabel?.trim() ||
      FALLBACK_TOOLS_PAGE_CONTENT.linkFallbackLabel,
  } satisfies ToolsPageContent;
}

export async function getToolsPageContent(): Promise<ToolsPageContent> {
  try {
    const response = await axios.get<StrapiResponse<StrapiToolsPageEnvelope>>(
      buildStrapiUrl("/tools-page"),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    const normalized = normalizeContent(response.data?.data ?? undefined);

    return normalized ?? FALLBACK_TOOLS_PAGE_CONTENT;
  } catch (error) {
    console.error("Error fetching tools page content:", error);
    return FALLBACK_TOOLS_PAGE_CONTENT;
  }
}

export { FALLBACK_TOOLS_PAGE_CONTENT };
