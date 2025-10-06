import axios from "axios";

import { buildStrapiUrl } from "./utils";

export type NewsItem = {
  id: number;
  documentId: string | null;
  slug: string | null;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  link: string | null;
  thumbnail: ImageVariantSet | null;
  featured: boolean;
};

type StrapiImageFormat = {
  url?: string | null;
};
interface ImageVariantSet {
  url: string | null;
  thumbnail: string | null;
  small: string | null;
  medium: string | null;
  large: string | null;
  alt: string | null;
}

type StrapiImage = {
  data?: {
    id?: number;
    attributes?: {
      url?: string | null;
      alternativeText?: string | null;
      formats?: {
        thumbnail?: StrapiImageFormat | null;
        small?: StrapiImageFormat | null;
        medium?: StrapiImageFormat | null;
        large?: StrapiImageFormat | null;
      } | null;
    } | null;
  } | null;
};

export interface NewsPageContent {
  heroTitle: string;
  heroSubtitle: string | null;
  emptyStateTitle: string;
  emptyStateMessage: string;
  readMoreLabel: string;
  readOriginalLabel: string;
  notFoundTitle: string;
  notFoundMessage: string;
  backToNewsLabel: string;
}

interface StrapiNewsAttributes {
  title?: string | null;
  slug?: string | null;
  category?: string | null;
  date?: string | null;
  excerpt?: string | null;
  content?: string | null;
  link?: string | null;
  documentId?: string | null;
  thumbnail?: {
    data?: {
      attributes?: {
        url?: string | null;
        formats?: Record<string, { url?: string | null }> | null;
      } | null;
    } | null;
  } | null;
  featured?: boolean | null;
}

interface StrapiNewsEnvelope {
  id?: number;
  documentId?: string | null;
  attributes?: StrapiNewsAttributes | null;
  title?: string | null;
  slug?: string | null;
  category?: string | null;
  date?: string | null;
  excerpt?: string | null;
  content?: string | null;
  link?: string | null;
  featured?: boolean | null;
  thumbnail?: {
    data?: {
      attributes?: {
        url?: string | null;
        formats?: Record<string, { url?: string | null }> | null;
      } | null;
    } | null;
  } | null;
}

interface StrapiNewsResponse {
  data: StrapiNewsEnvelope[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiNewsSingleResponse {
  data: StrapiNewsEnvelope | null;
}

interface StrapiNewsPageAttributes {
  heroTitle?: string | null;
  heroSubtitle?: string | null;
  emptyStateTitle?: string | null;
  emptyStateMessage?: string | null;
  readMoreLabel?: string | null;
  readOriginalLabel?: string | null;
  notFoundTitle?: string | null;
  notFoundMessage?: string | null;
  backToNewsLabel?: string | null;
}

interface StrapiNewsPageResponse {
  data?: {
    id?: number;
    attributes?: StrapiNewsPageAttributes | null;
  } | null;
}

// --- Image variant logic (copied/adapted from TeamPage.ts) ---
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

function buildImageVariants(
  media?:
    | StrapiImage
    | null
    | {
        url?: string | null;
        alternativeText?: string | null;
        formats?: {
          thumbnail?: StrapiImageFormat | null;
          small?: StrapiImageFormat | null;
          medium?: StrapiImageFormat | null;
          large?: StrapiImageFormat | null;
        } | null;
      }
): ImageVariantSet | null {
  if (!media) {
    return null;
  }
  // Check if media has data.attributes (StrapiImage)
  if ("data" in media && media.data?.attributes) {
    const attributes = media.data.attributes;
    return {
      url: normalizeUrl(attributes.url),
      thumbnail: normalizeUrl(attributes.formats?.thumbnail?.url),
      small: normalizeUrl(attributes.formats?.small?.url),
      medium: normalizeUrl(attributes.formats?.medium?.url),
      large: normalizeUrl(attributes.formats?.large?.url),
      alt: attributes.alternativeText ?? null,
    };
  }
  // Otherwise, assume media is raw object with url and formats
  const attributes = media as {
    url?: string | null;
    alternativeText?: string | null;
    formats?: {
      thumbnail?: StrapiImageFormat | null;
      small?: StrapiImageFormat | null;
      medium?: StrapiImageFormat | null;
      large?: StrapiImageFormat | null;
    } | null;
  };
  return {
    url: normalizeUrl(attributes.url),
    thumbnail: normalizeUrl(attributes.formats?.thumbnail?.url),
    small: normalizeUrl(attributes.formats?.small?.url),
    medium: normalizeUrl(attributes.formats?.medium?.url),
    large: normalizeUrl(attributes.formats?.large?.url),
    alt: attributes.alternativeText ?? null,
  };
}

function extractNewsAttributes(
  envelope: StrapiNewsEnvelope
): StrapiNewsAttributes & { id: number; documentId: string | null } {
  if (envelope.attributes) {
    return {
      ...envelope.attributes,
      id: envelope.id ?? 0,
      documentId: envelope.documentId ?? envelope.attributes.documentId ?? null,
    } as StrapiNewsAttributes & { id: number; documentId: string | null };
  }

  const {
    id,
    documentId,
    title,
    slug,
    category,
    date,
    excerpt,
    content,
    link,
    featured,
    thumbnail,
  } = envelope;

  return {
    id: id ?? 0,
    documentId: documentId ?? null,
    title,
    slug,
    category,
    date,
    excerpt,
    content,
    link,
    featured,
    thumbnail,
  } as StrapiNewsAttributes & { id: number; documentId: string | null };
}

function normalizeNews(item: StrapiNewsEnvelope): NewsItem {
  const attrs = extractNewsAttributes(item);
  const thumbnailVariants = buildImageVariants(
    attrs.thumbnail ?? item.thumbnail ?? undefined
  );

  return {
    id: attrs.id ?? item.id ?? 0,
    documentId: attrs.documentId ?? item.documentId ?? null,
    slug: attrs.slug?.trim() || item.slug?.trim() || null,
    title: attrs.title?.trim() || item.title?.trim() || "Untitled",
    category: attrs.category?.trim() || item.category?.trim() || "Publication",
    date: attrs.date ?? item.date ?? new Date().toISOString(),
    excerpt: attrs.excerpt?.trim() || item.excerpt?.trim() || "",
    content: attrs.content ?? item.content ?? "",
    link: attrs.link?.trim() || item.link?.trim() || null,
    thumbnail: thumbnailVariants,
    featured: Boolean(
      typeof attrs.featured === "boolean"
        ? attrs.featured
        : typeof item.featured === "boolean"
        ? item.featured
        : false
    ),
  } satisfies NewsItem;
}

function normalizeNewsPage(
  payload?: StrapiNewsPageAttributes | null
): NewsPageContent {
  return {
    heroTitle: payload?.heroTitle?.trim() || "News & Updates",
    heroSubtitle:
      payload?.heroSubtitle?.trim() ||
      "Stay updated with the latest news from the Georgakopoulos-Soares Laboratory.",
    emptyStateTitle: payload?.emptyStateTitle?.trim() || "No news just yet",
    emptyStateMessage:
      payload?.emptyStateMessage?.trim() ||
      "Check back soon for the latest updates from the Georgakopoulos-Soares Lab.",
    readMoreLabel: payload?.readMoreLabel?.trim() || "Read more",
    readOriginalLabel:
      payload?.readOriginalLabel?.trim() || "Read original source",
    notFoundTitle: payload?.notFoundTitle?.trim() || "Article not found",
    notFoundMessage:
      payload?.notFoundMessage?.trim() ||
      "The news article you are looking for is no longer available or may have been moved.",
    backToNewsLabel: payload?.backToNewsLabel?.trim() || "Back to all news",
  } satisfies NewsPageContent;
}

export async function getAllNews(
  page: number = 1,
  pageSize: number = 6
): Promise<{
  data: NewsItem[];
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}> {
  const url = buildStrapiUrl(
    `/news?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=date:desc`
  );
  const response = await axios.get<StrapiNewsResponse>(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });

  const data = response.data.data.map(normalizeNews);
  const meta = response.data.meta.pagination;

  return {
    data,
    meta: {
      page: meta.page,
      pageSize: meta.pageSize,
      pageCount: meta.pageCount,
      total: meta.total,
    },
  };
}

async function fetchNewsById(id: number): Promise<NewsItem | null> {
  if (!Number.isFinite(id)) {
    return null;
  }

  try {
    const url = buildStrapiUrl(`/news/${id}?populate[thumbnail][populate]=*`);
    const response = await axios.get<StrapiNewsSingleResponse>(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });

    if (!response.data.data) {
      return null;
    }

    return normalizeNews(response.data.data);
  } catch (error) {
    console.error(`Error fetching news article with id ${id}:`, error);
    return null;
  }
}

async function fetchNewsBySlug(slug: string): Promise<NewsItem | null> {
  try {
    const url = buildStrapiUrl(
      `/news?filters[slug][$eq]=${encodeURIComponent(
        slug
      )}&populate[thumbnail][populate]=*&pagination[pageSize]=1`
    );
    const response = await axios.get<StrapiNewsResponse>(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });

    const [article] = response.data.data;
    return article ? normalizeNews(article) : null;
  } catch (error) {
    console.error(`Error fetching news article with slug ${slug}:`, error);
    return null;
  }
}

export async function getNewsArticle(
  identifier: string
): Promise<NewsItem | null> {
  const numericId = Number.parseInt(identifier, 10);

  if (!Number.isNaN(numericId)) {
    const articleById = await fetchNewsById(numericId);
    if (articleById) {
      return articleById;
    }
  }

  return fetchNewsBySlug(identifier);
}

export async function getNewsPageContent(): Promise<NewsPageContent> {
  try {
    const url = buildStrapiUrl("/news-page?populate=*");
    const response = await axios.get<StrapiNewsPageResponse>(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });

    return normalizeNewsPage(response.data.data?.attributes);
  } catch (error) {
    console.error("Error fetching news page content:", error);
    return normalizeNewsPage(undefined);
  }
}
