import type { Metadata } from "next";

import { DatabaseCard } from "./_components/DatabaseCard";
import { getDatabasePageContent, getDatabases } from "@/libs/api";

export const metadata: Metadata = {
  title: "Research Databases | Georgakopoulos-Soares Lab",
  description:
    "Explore curated genomic and computational biology databases maintained by the Georgakopoulos-Soares Lab to accelerate research and discovery.",
  openGraph: {
    title: "Research Databases | Georgakopoulos-Soares Lab",
    description:
      "Browse a curated catalogue of genomic and computational resources powering the Georgakopoulos-Soares Lab's research.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Databases | Georgakopoulos-Soares Lab",
    description:
      "Discover genomic and computational biology databases curated by the Georgakopoulos-Soares Lab.",
  },
  alternates: {
    canonical: "/databases",
  },
};

export default async function DatabasesPage() {
  const [pageContent, databases] = await Promise.all([
    getDatabasePageContent(),
    getDatabases(),
  ]);

  return (
    <main id="databases" className="bg-light">
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              {pageContent.heroEyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold text-slate-900">
              {pageContent.heroTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              {pageContent.heroDescription}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="databases-heading" className="py-16">
        <div className="container mx-auto px-4 py-4">
          <div className="mx-auto flex max-w-6xl flex-col gap-10">
            <header className="flex flex-col gap-4 py-4 text-center lg:text-left">
              <div>
                <h2
                  id="databases-heading"
                  className="text-3xl font-semibold text-slate-900"
                >
                  {pageContent.featuredTitle}
                </h2>
                <p className="mt-2 text-base text-slate-600">
                  {pageContent.featuredDescription}
                </p>
              </div>
            </header>

            <div className="grid my-8 gap-8 lg:grid-cols-2">
              {databases.map((database, index) => (
                <DatabaseCard
                  key={database.id}
                  database={database}
                  position={index + 1}
                  labels={{
                    keywords: pageContent.keywordsLabel,
                    highlights: pageContent.highlightsLabel,
                    scale: pageContent.scaleLabel,
                    link: pageContent.linkLabel,
                    linkFallback: pageContent.linkFallbackLabel,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
