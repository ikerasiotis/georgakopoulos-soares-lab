import Link from "next/link";

import type { FeaturedPublication } from "@/app/_lib/home-page-data";

function PublicationLink({
  href,
  label,
  type,
}: {
  href: string;
  label: string;
  type: "pdf" | "external";
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
    >
      {type === "pdf" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M14 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V7z" />
          <path d="M14 2v5h5" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M10.75 13.25l6.5-6.5m0 0H13m4.25 0V11" />
          <path d="M9.5 6.5h-4A2.5 2.5 0 003 9v10a2.5 2.5 0 002.5 2.5h10A2.5 2.5 0 0018 19.5v-4" />
        </svg>
      )}
      <span>{label}</span>
    </Link>
  );
}

export function FeaturedPublications({
  publications,
}: {
  publications: FeaturedPublication[];
}) {
  return (
    <section className="py-16" aria-labelledby="featured-publications">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            id="featured-publications"
            className="text-3xl font-bold mb-4 text-center"
          >
            Recent Publications
          </h2>
          <div className="section-divider mb-12" />

          <div className="space-y-6">
            {publications.map((publication) => (
              <article
                key={publication.title}
                className="bg-white p-6 rounded-lg shadow-md transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2 text-slate-900">
                  {publication.title}
                </h3>
                <p className="text-gray-600 mb-2">{publication.venue}</p>
                <p className="text-gray-700 mb-4">{publication.authors}</p>
                <div className="flex flex-wrap gap-3">
                  {publication.links.map((link) => (
                    <PublicationLink key={link.label} {...link} />
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/publications"
              className="inline-flex items-center text-primary hover:text-secondary font-medium"
            >
              View all publications
              <span aria-hidden className="ml-1">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
