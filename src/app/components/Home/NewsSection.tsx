import Link from "next/link";

import type { NewsItem } from "@/app/_lib/home-page-data";

const accentStyles = {
  primary: { text: "text-primary", background: "bg-primary/10" },
  secondary: { text: "text-secondary", background: "bg-secondary/10" },
  accent: { text: "text-accent", background: "bg-accent/10" },
} as const;

export function NewsSection({ news }: { news: NewsItem[] }) {
  return (
    <section className="py-16 bg-light" aria-labelledby="lab-news">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 id="lab-news" className="text-3xl font-bold mb-4 text-center">
            Lab News &amp; Updates
          </h2>
          <div className="section-divider mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
              >
                <div className="h-48 relative flex items-center justify-center bg-slate-100">
                  <span className="sr-only">News illustration placeholder</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-slate-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <div
                    className={`absolute top-4 left-4 rounded-full px-3 py-1 text-sm font-medium shadow-sm bg-white ${
                      accentStyles[item.accent].text
                    } ${accentStyles[item.accent].background}`}
                  >
                    {item.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <Link
                    href={item.href}
                    className={`inline-flex items-center font-medium ${accentStyles[item.accent].text} hover:text-secondary`}
                  >
                    Read more
                    <span aria-hidden className="ml-1">
                      ↗
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
