import axios from "axios";

import { buildStrapiUrl } from "./utils";

export interface ToolResource {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  keypoints: string[];
  features: string[];
  link?: string;
  thumbnail?: string;
}

type StrapiImageFormat = {
  url?: string | null;
};

type StrapiImage = {
  url?: string | null;
  alternativeText?: string | null;
  formats?: {
    thumbnail?: StrapiImageFormat | null;
    small?: StrapiImageFormat | null;
    medium?: StrapiImageFormat | null;
    large?: StrapiImageFormat | null;
  } | null;
};

type StrapiToolAttributes = {
  title?: string | null;
  description?: string | null;
  keywords?: string[] | null;
  keypoints?: string[] | null;
  features?: string[] | null;
  link?: string | null;
  thumbnail?: StrapiImage | null;
};

type StrapiToolEnvelope = {
  id?: number;
  documentId?: string;
  attributes?: StrapiToolAttributes | null;
} & Partial<StrapiToolAttributes>;

type StrapiResponse<T> = {
  data?: T | null;
};

const FALLBACK_TOOLS: ToolResource[] = [
  {
    id: "fallback-mafcounter",
    title:
      "MAFcounter: An efficient tool for counting the occurrences of k-mers in MAF files",
    description:
      "MAFcounter is the first k-mer counting tool specifically designed to operate on alignment files in the MAF (Multiple Alignment Format). It supports DNA and protein alignments, is multithreaded, fast and memory-efficient, and offers a versatile set of features for k-mer analysis directly in alignment context.",
    keywords: [
      "k-mer counting",
      "multiple alignment",
      "MAF format",
      "genomics",
      "proteomics",
    ],
    keypoints: [
      "Dedicated k-mer counting in MAF alignment files (DNA and protein)",
      "Multithreaded and memory-efficient implementation",
      "Provides a wide variety of k-mer analysis features",
      "Open-source under GPL, available on GitHub",
    ],
    features: [
      "Input: MAF alignment files",
      "Counts DNA and protein k-mers",
      "Supports customizable k lengths",
      "Parallelized (multithreading) for performance",
      "Light memory footprint compared to standard k-mer counters",
    ],
    link: "https://link.springer.com/article/10.1186/s12859-025-06172-7",
  },
  {
    id: "fallback-zseeker",
    title:
      "ZSeeker: An optimized algorithm for Z-DNA detection in genomic sequences",
    description:
      "ZSeeker is a novel computational algorithm designed to identify potential Z-DNA forming sequences within genomic DNA. Z-DNA is an alternative left-handed DNA helix implicated in transcription, replication, repair, and genetic instability.",
    keywords: [
      "Z-DNA",
      "non-B DNA structure",
      "genomic sequence analysis",
      "computational detection",
    ],
    keypoints: [
      "Detects potential Z-DNA-forming sequences in genomic data",
      "Addresses limitations of earlier methods (efficiency, usability, interpretability)",
      "Offered as both a standalone Python package and web interface",
      "Allows users to adjust detection parameters and provides output visualization",
    ],
    features: [
      "Input: Genomic sequences (FASTA and similar)",
      "Detection algorithm optimized for Z-DNA motifs",
      "Configurable detection thresholds and scoring system",
      "Output includes Z-DNA loci with Z-scores",
      "Available as Python package and web-based interface",
    ],
    link: "https://academic.oup.com/bib/article/26/3/bbaf240/8153690",
  },
];

function extractAttributes(
  envelope?: StrapiToolEnvelope
): StrapiToolAttributes | undefined {
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

  return clone as StrapiToolAttributes;
}

function normalizeStringArray(value?: string[] | null): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => item?.trim())
    .filter((item): item is string => Boolean(item));
}

function normalizeUrl(path?: string | null): string | null {
  if (!path) {
    return null;
  }
  if (path.startsWith("http")) {
    return path;
  }
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    return normalizedPath;
  }
  return `${baseUrl}${normalizedPath}`;
}

/**
 * Returns an object with image variants (url, thumbnail, small, medium, large, alt)
 * from a StrapiImage object.
 * The url property is prioritized as: medium > large > small > thumbnail > base url.
 */
function buildImageVariants(image?: StrapiImage | null):
  | {
      url: string | null;
      thumbnail: string | null;
      small: string | null;
      medium: string | null;
      large: string | null;
      alt: string | null;
    }
  | undefined {
  if (!image) return undefined;
  return {
    url:
      normalizeUrl(image.formats?.medium?.url) ??
      normalizeUrl(image.formats?.large?.url) ??
      normalizeUrl(image.formats?.small?.url) ??
      normalizeUrl(image.formats?.thumbnail?.url) ??
      normalizeUrl(image.url) ??
      null,
    thumbnail: normalizeUrl(image.formats?.thumbnail?.url) ?? null,
    small: normalizeUrl(image.formats?.small?.url) ?? null,
    medium: normalizeUrl(image.formats?.medium?.url) ?? null,
    large: normalizeUrl(image.formats?.large?.url) ?? null,
    alt: image.alternativeText ?? null,
  };
}

function normalizeTool(envelope?: StrapiToolEnvelope): ToolResource | null {
  const attributes = extractAttributes(envelope);

  const title = attributes?.title?.trim();
  if (!title) {
    return null;
  }
  const imageVariants = buildImageVariants(attributes?.thumbnail);
  return {
    id: envelope?.documentId ?? String(envelope?.id ?? title),
    title,
    description: attributes?.description?.trim() ?? "",
    keywords: normalizeStringArray(attributes?.keywords),
    keypoints: normalizeStringArray(attributes?.keypoints),
    features: normalizeStringArray(attributes?.features),
    link: attributes?.link?.trim() || undefined,
    thumbnail: imageVariants?.url || undefined,
  } satisfies ToolResource;
}

export async function getTools(): Promise<ToolResource[]> {
  try {
    const response = await axios.get<StrapiResponse<StrapiToolEnvelope[]>>(
      buildStrapiUrl("/tools?populate=*"),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    const tools = Array.isArray(response.data?.data) ? response.data.data : [];

    const normalized = tools
      .map((tool) => normalizeTool(tool))
      .filter((tool): tool is ToolResource => Boolean(tool));

    return normalized.length > 0 ? normalized : FALLBACK_TOOLS;
  } catch (error) {
    console.error("Error fetching tools:", error);
    return FALLBACK_TOOLS;
  }
}

export function getToolById(
  tools: ToolResource[],
  id: string
): ToolResource | undefined {
  return tools.find((tool) => tool.id === id);
}

export { FALLBACK_TOOLS, buildImageVariants };
