import Image from "next/image";
import Link from "next/link";

import type { HomepageNewsItem } from "@/libs/api";

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

export function NewsSection({ news }: { news: HomepageNewsItem[] }) {
  return (
    <section className="py-16 bg-light" aria-labelledby="lab-news">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 id="lab-news" className="text-3xl font-bold mb-4 text-center">
            Lab News &amp; Updates
          </h2>
          <div className="section-divider mb-12" />

          <div className="flex flex-wrap gap-8 justify-center">
            {news.map((item) => {
              const badgeStyle =
                BADGE_STYLES[item.category] || "bg-gray-100 text-gray-800";
              const badgeIcon =
                BADGE_ICONS[item.category] || "fas fa-info-circle";

              return (
                <article
                  key={item.id}
                  className="bg-white flex-1 flex flex-col rounded-lg shadow-md overflow-hidden border border-slate-100 w-full sm:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1rem)] flex flex-col"
                >
                  <div className="p-6 flex-1 flex flex-col justify-between  space-y-4">
                    <div className="flex flex-wrap justify-between items-start gap-3">
                      <span className={`badge ${badgeStyle}`}>
                        <i className={`${badgeIcon} mr-2`} aria-hidden></i>
                        {item.category}
                      </span>
                      <time className="text-gray-500 text-sm ">
                        {item.date}
                      </time>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <div className="flex-1 flex flex-col gap-6 items-center">
                      {item.thumbnailUrl ? (
                        <div className="flex justify-center items-center">
                          <Image
                            src={item.thumbnailUrl}
                            alt={item.thumbnailAlt || item.title}
                            width={192}
                            height={192}
                            className="rounded-lg object-cover shadow-md border border-slate-100"
                          />
                        </div>
                      ) : null}
                      <div className="col-span-2 text-gray-600 leading-relaxed space-y-3 flex-1">
                        {item.excerpt ? <p>{item.excerpt}</p> : null}
                      </div>
                    </div>

                    <Link
                      href={item.href}
                      className="inline-flex items-center text-primary hover:text-secondary font-medium"
                    >
                      Read more
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary font-medium"
            >
              Read more news
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
