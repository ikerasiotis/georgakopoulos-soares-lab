import Image from "next/image";
import type { NewsItem } from "@/libs/api";

type NewsCardProps = {
  news: NewsItem;
  featured?: boolean;
  ctaLabel: string;
};

const BADGE_STYLES: Record<string, string> = {
  "Grant Award": "bg-blue-100 text-blue-800",
  Publication: "bg-green-100 text-green-800",
  Team: "bg-purple-100 text-purple-800",
  Conference: "bg-yellow-100 text-yellow-800",
  Software: "bg-red-100 text-red-800",
  Media: "bg-indigo-100 text-indigo-800",
  Collaboration: "bg-teal-100 text-teal-800",
};

const BADGE_ICONS: Record<string, string> = {
  "Grant Award": "fas fa-award",
  Publication: "fas fa-book",
  Team: "fas fa-users",
  Conference: "fas fa-chalkboard-teacher",
  Software: "fas fa-code",
  Media: "fas fa-newspaper",
  Collaboration: "fas fa-handshake",
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function NewsCard({ news, featured = false, ctaLabel }: NewsCardProps) {
  const { id, slug, title, category, date, excerpt, thumbnail } = news;

  const badgeStyle = BADGE_STYLES[category] || "bg-gray-100 text-gray-800";
  const badgeIcon = BADGE_ICONS[category] || "fas fa-info-circle";
  const articleHref = slug ? `/news/${slug}` : `/news/${id}`;

  if (featured) {
    return (
      <article className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-primary mb-12">
        <div className="p-6 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`badge ${badgeStyle}`}>
              <i className={`${badgeIcon} mr-2`}></i>
              {category}
            </span>
            <time className="text-gray-500 text-sm">{formatDate(date)}</time>
          </div>

          <h2 className="text-2xl font-bold">{title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {thumbnail?.url && (
              <div className="col-span-1 flex justify-center items-center">
                <Image
                  src={thumbnail.url}
                  alt={title}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover shadow-md border border-slate-100"
                />
              </div>
            )}
            <div className="col-span-2 text-gray-600 leading-relaxed space-y-3 flex-1">
              {excerpt && <p>{excerpt}</p>}
            </div>
          </div>

          {(slug || id) && (
            <a
              href={articleHref}
              className="inline-flex items-center text-primary hover:text-secondary font-medium"
            >
              {ctaLabel}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-lg shadow-md news-item">
      <div className="p-6 space-y-4 max-w-sm mx-auto">
        <div className="flex flex-wrap items-center gap-3">
          <span className={`badge ${badgeStyle}`}>
            <i className={`${badgeIcon} mr-2`}></i>
            {category}
          </span>
          <time className="text-gray-500 text-sm">{formatDate(date)}</time>
        </div>

        <h2 className="text-xl font-medium">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {thumbnail?.url && (
            <div className="col-span-1 flex justify-center items-center">
              <Image
                src={thumbnail.url}
                alt={title}
                width={192}
                height={192}
                className="rounded-lg object-cover shadow-md border border-slate-100"
              />
            </div>
          )}
          <div className="col-span-2 text-gray-600 leading-relaxed space-y-3 flex-1">
            {excerpt && <p>{excerpt}</p>}
          </div>
        </div>

        {(slug || id) && (
          <a
            href={articleHref}
            className="inline-flex items-center text-primary hover:text-secondary font-medium"
          >
            {ctaLabel}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
