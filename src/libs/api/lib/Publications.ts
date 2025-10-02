import axios from "axios";

import { buildStrapiUrl } from "./utils";

type StrapiComponent<T> = T & { id?: number };

type StrapiPublicationAuthor = StrapiComponent<{
  name?: string | null;
  link?: string | null;
  authorId?: string | null;
}>;

type StrapiPublicationResource = StrapiComponent<{
  title?: string | null;
  fileFormat?: string | null;
  link?: string | null;
}>;

type StrapiPublicationAttributes = {
  position?: number | null;
  title?: string | null;
  resultId?: string | null;
  link?: string | null;
  snippet?: string | null;
  publicationSummary?: string | null;
  publicationAuthors?: StrapiPublicationAuthor[] | null;
  authors?: StrapiPublicationAuthor[] | null;
  resources?: StrapiPublicationResource[] | null;
  publishedAt?: string | null;
  isVisible?: boolean | null;
  citations?: number | null;
};

type StrapiPublicationEnvelope = {
  id?: number;
  documentId?: string;
  attributes?: StrapiPublicationAttributes | null;
} & Partial<StrapiPublicationAttributes>;

type PaginationMeta = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type StrapiResponse<T> = {
  data?: T | null;
  meta?: {
    pagination?: PaginationMeta;
  };
};

export interface PublicationAuthor {
  name: string;
  link?: string | null;
  authorId?: string | null;
}

export interface PublicationResource {
  title: string;
  fileFormat?: string | null;
  link?: string | null;
}

export interface Publication {
  id: string;
  position: number;
  title: string;
  resultId?: string | null;
  link?: string | null;
  snippet?: string | null;
  summary?: string | null;
  publicationAuthors: PublicationAuthor[];
  authors: PublicationAuthor[];
  resources: PublicationResource[];
  publishedAt?: string | null;
  isVisible: boolean;
  citations?: number | null;
}

const FALLBACK_PUBLICATIONS: Publication[] = [
  {
    id: "fallback-1",
    position: 1,
    title:
      "Mutational signatures in cancer and their interactions with the genome and epigenome",
    resultId: null,
    link: null,
    snippet:
      "Reviewing the interplay between mutational processes and genomic context with implications for cancer development and response to therapy.",
    summary: "Nature Reviews Cancer, 2023; 23(5): 265-280.",
    publicationAuthors: [
      { name: "Georgakopoulos-Soares I" },
      { name: "Mouratidis I" },
      { name: "Patsakis M" },
      { name: "Chantzi N" },
      { name: "Nayak A" },
      { name: "Provatas K" },
      { name: "Deng E" },
    ],
    authors: [],
    resources: [],
    publishedAt: "2023-05-01",
    isVisible: true,
    citations: 15,
  },
  {
    id: "fallback-2",
    position: 2,
    title:
      "Machine learning approaches for predicting cancer treatment response from genomic profiles",
    resultId: null,
    link: null,
    snippet:
      "Applying machine learning to genomic data to anticipate treatment outcomes.",
    summary: "Nature Machine Intelligence, 2023; 5(3): 210-225.",
    publicationAuthors: [
      { name: "Mareboina M" },
      { name: "Chan C" },
      { name: "Georgakopoulos-Soares I" },
      { name: "Moeckel C" },
      { name: "Begum H" },
      { name: "Khan S" },
    ],
    authors: [],
    resources: [],
    publishedAt: "2023-03-01",
    isVisible: true,
    citations: 8,
  },
  {
    id: "fallback-3",
    position: 3,
    title:
      "Single-cell analysis reveals the impact of mutational processes on cancer evolution",
    resultId: null,
    link: null,
    snippet:
      "Single-cell studies unveil how mutational processes shape the evolutionary trajectories of tumors.",
    summary: "Nature Genetics, 2023; 55(4): 578-590.",
    publicationAuthors: [
      { name: "Sazed SA" },
      { name: "Abdelhalim H" },
      { name: "Bernard V" },
      { name: "Georgakopoulos-Soares I" },
      { name: "Konnaris M" },
      { name: "Hong J" },
    ],
    authors: [],
    resources: [],
    publishedAt: "2023-04-01",
    isVisible: true,
    citations: 12,
  },
];

function extractAttributes(
  envelope?: StrapiPublicationEnvelope
): StrapiPublicationAttributes | undefined {
  if (!envelope) return undefined;

  if ("attributes" in envelope) {
    return envelope.attributes ?? undefined;
  }

  const { id, documentId, ...rest } = envelope;
  return rest as StrapiPublicationAttributes;
}

function normalizeAuthor(
  author?: StrapiPublicationAuthor | null
): PublicationAuthor | null {
  if (!author?.name) {
    return null;
  }

  return {
    name: author.name.trim(),
    link: author.link ?? null,
    authorId: author.authorId ?? null,
  };
}

function normalizeResource(
  resource?: StrapiPublicationResource | null
): PublicationResource | null {
  if (!resource?.title) {
    return null;
  }

  return {
    title: resource.title.trim(),
    fileFormat: resource.fileFormat ?? null,
    link: resource.link ?? null,
  };
}

function normalizePublication(
  envelope?: StrapiPublicationEnvelope
): Publication | null {
  const attributes = extractAttributes(envelope);
  if (!attributes?.title) {
    return null;
  }

  const id =
    typeof envelope?.id !== "undefined"
      ? String(envelope.id)
      : attributes.resultId ?? attributes.title;

  const authors = (attributes.authors ?? [])
    .map(normalizeAuthor)
    .filter((author): author is PublicationAuthor => Boolean(author));

  const publicationAuthors = (attributes.publicationAuthors ?? [])
    .map(normalizeAuthor)
    .filter((author): author is PublicationAuthor => Boolean(author));

  const resources = (attributes.resources ?? [])
    .map(normalizeResource)
    .filter((resource): resource is PublicationResource => Boolean(resource));

  return {
    id,
    position: attributes.position ?? 0,
    title: attributes.title.trim(),
    resultId: attributes.resultId ?? null,
    link: attributes.link ?? null,
    snippet: attributes.snippet ?? null,
    summary: attributes.publicationSummary ?? null,
    publicationAuthors,
    authors,
    resources,
    publishedAt: attributes.publishedAt ?? null,
    isVisible: attributes.isVisible ?? true,
    citations: attributes.citations ?? null,
  };
}

export async function getPublications(
  page = 1,
  pageSize = 10
): Promise<{ data: Publication[]; meta: PaginationMeta }> {
  try {
    const response = await axios.get<
      StrapiResponse<StrapiPublicationEnvelope[]>
    >(
      buildStrapiUrl(
        `/publications?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
      ),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    const publicationEnvelopes = Array.isArray(response.data?.data)
      ? (response.data?.data as StrapiPublicationEnvelope[])
      : [];

    const publications = publicationEnvelopes
      .map(normalizePublication)
      .filter(
        (publication): publication is Publication =>
          Boolean(publication && publication.isVisible)
      );

    if (publications.length > 0) {
      const pagination = response.data?.meta?.pagination ?? {
        page,
        pageSize,
        pageCount: Math.max(1, Math.ceil(publications.length / pageSize)),
        total: publications.length,
      };

      return {
        data: publications,
        meta: pagination,
      };
    }
  } catch (error) {
    console.error("Error fetching publications:", error);
  }

  const visibleFallback = FALLBACK_PUBLICATIONS.filter(
    (publication) => publication.isVisible
  );
  const pageCount = Math.max(
    1,
    Math.ceil(visibleFallback.length / pageSize)
  );
  const safePage = Math.min(Math.max(page, 1), pageCount);
  const start = (safePage - 1) * pageSize;
  const data = visibleFallback.slice(start, start + pageSize);

  return {
    data,
    meta: {
      page: safePage,
      pageSize,
      pageCount,
      total: visibleFallback.length,
    },
  };
}
