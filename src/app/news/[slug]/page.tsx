import Image from "next/image";
import Link from "next/link";

import { getNewsArticle, getNewsPageContent } from "@/libs/api";

// Define the props type for the page
type NewsDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatDate(dateString: string) {
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const { slug } = await params;
  const [pageContent, article] = await Promise.all([
    getNewsPageContent(),
    getNewsArticle(slug),
  ]);

  if (!article) {
    return (
      <main className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          {pageContent.notFoundTitle}
        </h1>
        <p className="text-slate-600">{pageContent.notFoundMessage}</p>
        <Link
          href="/news"
          className="mx-auto inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary"
        >
          {pageContent.backToNewsLabel}
        </Link>
      </main>
    );
  }

  const imageUrl = article.thumbnail;
  const readOriginalLabel = pageContent.readOriginalLabel;

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-16">
      <Link
        href="/news"
        className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary"
      >
        <svg
          className="mr-2 h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        {pageContent.backToNewsLabel}
      </Link>

      <h1 className="text-4xl font-bold text-slate-900">{article.title}</h1>

      {article.date ? (
        <p className="text-sm text-slate-500">
          Published on {formatDate(article.date)}
        </p>
      ) : null}

      {imageUrl?.url && (
        <div className="relative mx-auto w-full max-w-md aspect-[16/9]">
          <Image
            src={imageUrl.url}
            alt={article.title}
            fill
            className="rounded-lg border border-slate-100 object-cover shadow-md"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      )}

      {article.content ? (
        <article
          className="prose prose-lg max-w-none text-slate-800"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      ) : null}

      {article.link ? (
        <a
          href={article.link}
          className="inline-flex items-center text-primary hover:text-secondary font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          {readOriginalLabel}
          <svg
            className="ml-2 h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      ) : null}
    </main>
  );
}
