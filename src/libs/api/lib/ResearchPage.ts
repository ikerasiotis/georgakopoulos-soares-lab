import axios from "axios";

import { buildStrapiUrl } from "./utils";
import type {
  Accent,
  HighlightCard,
  FocusArea,
  MethodItem,
  ResourceItem,
  ResearchContent,
} from "@/app/research/_lib/research-data";
import { FALLBACK_RESEARCH_CONTENT } from "@/app/research/_lib/research-data";

type StrapiParagraph = {
  id?: number;
  content?: string | null;
};

type StrapiHighlight = {
  id?: number;
  title?: string | null;
  description?: string | null;
  accent?: string | null;
};

type StrapiListItem = {
  id?: number;
  label?: string | null;
};

type StrapiFocusArea = {
  id?: number;
  title?: string | null;
  accent?: string | null;
  descriptionParagraphs?: StrapiParagraph[] | null;
  projects?: StrapiListItem[] | null;
  tags?: StrapiListItem[] | null;
};

type StrapiMethod = {
  id?: number;
  title?: string | null;
  description?: string | null;
  accent?: string | null;
};

type StrapiLink = {
  id?: number;
  label?: string | null;
  href?: string | null;
};

type StrapiResource = {
  id?: number;
  title?: string | null;
  description?: string | null;
  accent?: string | null;
  links?: StrapiLink[] | null;
};

type StrapiResearchAttributes = {
  heroTitle?: string | null;
  heroSubtitle?: string | null;
  approachParagraphs?: StrapiParagraph[] | null;
  approachHighlights?: StrapiHighlight[] | null;
  focusAreas?: StrapiFocusArea[] | null;
  methods?: StrapiMethod[] | null;
  resources?: StrapiResource[] | null;
};

type StrapiResearchEnvelope = {
  id?: number;
  documentId?: string;
  attributes?: StrapiResearchAttributes | null;
} & Partial<StrapiResearchAttributes>;

type StrapiResponse<T> = {
  data?: T | null;
  meta?: unknown;
};

function normalizeAccent(value?: string | null): Accent {
  if (value === "primary" || value === "secondary" || value === "accent") {
    return value;
  }
  return "primary";
}

function normalizeParagraphs(paragraphs?: StrapiParagraph[] | null): string[] {
  if (!Array.isArray(paragraphs)) {
    return [];
  }

  return paragraphs
    .map((paragraph) => paragraph.content?.trim())
    .filter((value): value is string => Boolean(value));
}

function normalizeHighlights(
  highlights?: StrapiHighlight[] | null
): HighlightCard[] {
  if (!Array.isArray(highlights)) {
    return [];
  }

  return highlights
    .map((highlight) => {
      if (!highlight.title) {
        return null;
      }

      return {
        title: highlight.title.trim(),
        description: highlight.description?.trim() ?? "",
        accent: normalizeAccent(highlight.accent),
      } satisfies HighlightCard;
    })
    .filter((highlight): highlight is HighlightCard => Boolean(highlight));
}

function normalizeListItems(items?: StrapiListItem[] | null): string[] {
  if (!Array.isArray(items)) {
    return [];
  }

  return items
    .map((item) => item.label?.trim())
    .filter((label): label is string => Boolean(label));
}

function normalizeFocusAreas(
  focusAreas?: StrapiFocusArea[] | null
): FocusArea[] {
  if (!Array.isArray(focusAreas)) {
    return [];
  }

  return focusAreas
    .map((area) => {
      if (!area.title) {
        return null;
      }

      return {
        title: area.title.trim(),
        accent: normalizeAccent(area.accent),
        description: normalizeParagraphs(area.descriptionParagraphs),
        projects: normalizeListItems(area.projects),
        tags: normalizeListItems(area.tags),
      } satisfies FocusArea;
    })
    .filter((area): area is FocusArea => Boolean(area));
}

function normalizeMethods(methods?: StrapiMethod[] | null): MethodItem[] {
  if (!Array.isArray(methods)) {
    return [];
  }

  return methods
    .map((method) => {
      if (!method.title) {
        return null;
      }

      return {
        title: method.title.trim(),
        description: method.description?.trim() ?? "",
        accent: normalizeAccent(method.accent),
      } satisfies MethodItem;
    })
    .filter((method): method is MethodItem => Boolean(method));
}

function normalizeResources(
  resources?: StrapiResource[] | null
): ResourceItem[] {
  if (!Array.isArray(resources)) {
    return [];
  }

  const normalized: ResourceItem[] = [];

  for (const resource of resources) {
    if (!resource?.title) {
      continue;
    }

    const links: ResourceItem["links"] = Array.isArray(resource.links)
      ? resource.links
          .map((link) => {
            const label = link.label?.trim() || "Link";
            const href = link.href?.trim();
            return { label, href: href || undefined };
          })
          .filter((link) => Boolean(link.label))
      : [];

    normalized.push({
      title: resource.title.trim(),
      description: resource.description?.trim() ?? "",
      accent: normalizeAccent(resource.accent),
      links,
    });
  }

  return normalized;
}

function extractAttributes(
  envelope?: StrapiResearchEnvelope
): StrapiResearchAttributes | undefined {
  if (!envelope) {
    return undefined;
  }

  if ("attributes" in envelope) {
    return envelope.attributes ?? undefined;
  }

  const { id, documentId, attributes, ...rest } = envelope;
  return rest as StrapiResearchAttributes;
}

export async function getResearchPageContent(): Promise<ResearchContent> {
  try {
    const response = await axios.get<StrapiResponse<StrapiResearchEnvelope>>(
      buildStrapiUrl(
        "/research-page?populate=heroTitle,heroSubtitle,approachParagraphs,approachHighlights,focusAreas.projects,focusAreas.tags,focusAreas.accent,methods.accent,resources.links,resources.accent"
      ),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    const attributes = extractAttributes(response.data?.data ?? undefined);

    if (!attributes) {
      return FALLBACK_RESEARCH_CONTENT;
    }

    const heroTitle =
      attributes.heroTitle?.trim() || FALLBACK_RESEARCH_CONTENT.heroTitle;
    const heroSubtitle =
      attributes.heroSubtitle?.trim() || FALLBACK_RESEARCH_CONTENT.heroSubtitle;

    const approachParagraphs = normalizeParagraphs(
      attributes.approachParagraphs
    );
    const approachHighlights = normalizeHighlights(
      attributes.approachHighlights
    );
    const focusAreas = normalizeFocusAreas(attributes.focusAreas);
    const methods = normalizeMethods(attributes.methods);
    const resources = normalizeResources(attributes.resources);

    return {
      heroTitle,
      heroSubtitle,
      approachParagraphs:
        approachParagraphs.length > 0
          ? approachParagraphs
          : FALLBACK_RESEARCH_CONTENT.approachParagraphs,
      approachHighlights:
        approachHighlights.length > 0
          ? approachHighlights
          : FALLBACK_RESEARCH_CONTENT.approachHighlights,
      focusAreas:
        focusAreas.length > 0
          ? focusAreas
          : FALLBACK_RESEARCH_CONTENT.focusAreas,
      methods: methods.length > 0 ? methods : FALLBACK_RESEARCH_CONTENT.methods,
      resources:
        resources.length > 0 ? resources : FALLBACK_RESEARCH_CONTENT.resources,
    } satisfies ResearchContent;
  } catch (error) {
    console.error("Error fetching research page content:", error);
    return FALLBACK_RESEARCH_CONTENT;
  }
}
