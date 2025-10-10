import type { Metadata } from "next";
import { NewsHero } from "./_components/NewsHero";
import { NewsCard } from "./_components/NewsCard";
import { NewsPagination } from "./_components/NewsPagination";
import { getAllNews, getNewsPageContent } from "@/libs/api";

export const metadata: Metadata = {
  title: "Georgakopoulos-Soares Lab - Our News",
  description:
    "Stay updated with the latest news and announcements from the Georgakopoulos-Soares Laboratory.",
};

export const dynamic = "force-dynamic";

function parsePage(
  searchParams?: Record<string, string | string[] | undefined>
) {
  const raw = typeof searchParams?.page === "string" ? searchParams.page : "1";
  const value = Number.parseInt(raw, 10);
  return Number.isFinite(value) && value > 0 ? value : 1;
}

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { page } = await searchParams;
  const currentPage = parsePage({ page });

  const [pageContent, newsResult] = await Promise.all([
    getNewsPageContent(),
    getAllNews(currentPage, 6),
  ]);

  const { data: newsItems, meta } = newsResult;
  const hasNews = newsItems.length > 0;
  const highlightedArticles = hasNews
    ? newsItems.filter((item) => item.featured)
    : [];
  const featuredNews = highlightedArticles[0] ?? null;
  const otherNews = hasNews
    ? newsItems.filter((item) => item.id !== featuredNews?.id)
    : [];
  const showPagination = hasNews && meta.pageCount > 1;

  return (
    <div className="bg-white text-dark">
      <NewsHero
        title={pageContent.heroTitle}
        subtitle={pageContent.heroSubtitle}
      />

      <div className="py-16 news-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {hasNews ? (
              <>
                <div className="space-y-6">
                  {featuredNews ? (
                    <NewsCard
                      news={featuredNews}
                      featured
                      ctaLabel={pageContent.readMoreLabel}
                    />
                  ) : null}

                  {otherNews.map((news) => (
                    <NewsCard
                      key={news.id}
                      news={news}
                      ctaLabel={pageContent.readMoreLabel}
                    />
                  ))}
                </div>

                {showPagination ? (
                  <NewsPagination
                    currentPage={meta.page}
                    totalPages={meta.pageCount}
                  />
                ) : null}
              </>
            ) : (
              <div className="rounded-lg border border-slate-200 bg-white p-10 text-center shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">
                  {pageContent.emptyStateTitle}
                </h2>
                <p className="mt-2 text-slate-600">
                  {pageContent.emptyStateMessage}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
