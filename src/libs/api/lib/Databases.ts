import axios from "axios";

import { buildStrapiUrl } from "./utils";

type StrapiDatabaseAttributes = {
  title?: string | null;
  description?: string | null;
  keywords?: string[] | null;
  keypoints?: string[] | null;
  estEntries?: string[] | null;
  link?: string | null;
};

type StrapiDatabaseEnvelope = {
  id?: number;
  documentId?: string;
  attributes?: StrapiDatabaseAttributes | null;
} & Partial<StrapiDatabaseAttributes>;

type StrapiResponse<T> = {
  data?: T | null;
};

export interface DatabaseResource {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  keypoints: string[];
  estEntries: string[];
  link?: string;
}

const FALLBACK_DATABASES: DatabaseResource[] = [
  {
    id: "fallback-quadrupia",
    title:
      "Quadrupia: A comprehensive catalog of G-quadruplexes across genomes from the tree of life",
    description:
      "Quadrupia provides a large-scale catalog of G-quadruplexes (G4) across more than 100,000 genomes spanning the tree of life. G4s are non-canonical DNA structures formed by guanine tetrads and play roles in gene regulation and genome stability. This resource allows comparative and evolutionary analyses of G4 distribution across species.",
    keywords: [
      "G-quadruplex",
      "DNA structures",
      "genome annotation",
      "comparative genomics",
    ],
    keypoints: [
      "Systematic mapping of G4 sequences across species",
      "Over 140 million G4 structures identified",
      "Supports comparative and regulatory genomics",
      "Useful for studying DNA stability and transcriptional regulation",
    ],
    estEntries: [
      "~108,449 genomes",
      "~140,181,277 G4 sequences",
      "~319,784 G4 clusters",
    ],
    link: "https://genome.cshlp.org/content/early/2025/08/25/gr.279790.124.long",
  },
  {
    id: "fallback-microsatellites",
    title: "Microsatellites Explorer: A database of short tandem repeats across genomes",
    description:
      "Microsatellites Explorer compiles short tandem repeats (STRs, microsatellites) from more than 117,000 genomes. STRs are repetitive DNA elements that are important markers for population genetics, forensics, and evolutionary biology. The platform provides a searchable interface and supports statistical and comparative analysis of STR distribution.",
    keywords: [
      "short tandem repeats",
      "microsatellites",
      "population genetics",
      "genomic variation",
    ],
    keypoints: [
      "Database of STRs from thousands of genomes",
      "Covers >117,000 organisms",
      "Supports research in diversity, forensics, and comparative genomics",
      "Provides visualization and download features",
    ],
    estEntries: [
      "~117,253 genomes",
      "Millions of STR sequences (not explicitly specified)",
    ],
    link: "https://www.sciencedirect.com/science/article/pii/S2001037024003611",
  },
];

function extractAttributes(
  envelope?: StrapiDatabaseEnvelope
): StrapiDatabaseAttributes | undefined {
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

  return clone as StrapiDatabaseAttributes;
}

function normalizeStringArray(value?: string[] | null): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.map((item) => item?.trim()).filter((item): item is string => Boolean(item));
}

function normalizeDatabase(
  envelope?: StrapiDatabaseEnvelope
): DatabaseResource | null {
  const attributes = extractAttributes(envelope);

  const title = attributes?.title?.trim();

  if (!title) {
    return null;
  }

  return {
    id: envelope?.documentId ?? String(envelope?.id ?? title),
    title,
    description: attributes?.description?.trim() ?? "",
    keywords: normalizeStringArray(attributes?.keywords),
    keypoints: normalizeStringArray(attributes?.keypoints),
    estEntries: normalizeStringArray(attributes?.estEntries),
    link: attributes?.link?.trim() || undefined,
  } satisfies DatabaseResource;
}

export async function getDatabases(): Promise<DatabaseResource[]> {
  try {
    const response = await axios.get<StrapiResponse<StrapiDatabaseEnvelope[]>>(
      buildStrapiUrl("/databases"),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    const databases = Array.isArray(response.data?.data)
      ? response.data?.data
      : [];

    const normalized = databases
      .map((item) => normalizeDatabase(item))
      .filter((item): item is DatabaseResource => Boolean(item));

    return normalized.length > 0 ? normalized : FALLBACK_DATABASES;
  } catch (error) {
    console.error("Error fetching databases:", error);
    return FALLBACK_DATABASES;
  }
}

export function getDatabaseById(
  databases: DatabaseResource[],
  id: string
): DatabaseResource | undefined {
  return databases.find((database) => database.id === id);
}
